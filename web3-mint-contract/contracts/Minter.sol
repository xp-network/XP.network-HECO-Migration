pragma solidity ^0.8;

import "./XPNft.sol";
import "./XPNet.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";
import "@openzeppelin/contracts/utils/math/SafeCast.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "solidity-bytes-utils/contracts/BytesLib.sol";

contract Minter is IERC721Receiver, Pausable {
	using BytesLib for bytes;
	using SafeCast for uint256;

	uint256 private threshold;
	uint256 private action_cnt = 0;
	uint256 private nft_cnt = 0x0;
	XPNft private nft_token;
	XPNet private token;

	mapping (address=>uint8) private validators;
	mapping (address=>uint8) private nft_whitelist;
	uint256 public validator_cnt;

	enum ValidationRes {
		Execute,
		Noop
	}

	enum Action {
		// Bridge actions
		Transfer,
		TransferUnique,
		Unfreeze,
		UnfreezeUnique,

		// Bridge status
		WhitelistNft,
		PauseBridge,
		UnpauseBridge,

		// Multisig
		AddValidator,
		RemoveValidator
	}

	struct ActionInfo {
		Action action;
		uint256 validator_cnt;
	}

	// Transfer Wrapped to WEB3
	struct TransferAction {
		uint64 chain_nonce;
		address to;
		uint256 value;
	}

	// transfer Wrapped NFT to Web3
	struct TranferUniqueAction {
		address to;
		string data; // chain info is encoded by the validator here
	}

	// Unfreeze ETH here
	struct UnfreezeAction {
		address to;
		uint256 value;
	}

	event Transfer(uint256 action_id, uint64 chain_nonce, string to, uint256 value); // Transfer ETH to polkadot
	event TransferErc721(uint256 action_id, uint64 chain_nonce, string to, uint256 id, address contract_addr); // Transfer Erc721 to polkadot
	event Unfreeze(uint256 action_id, uint64 chain_nonce, string to, uint256 value); // Unfreeze XPNET on polkadot
	event UnfreezeNft(uint256 action_id, string to, string data); // Unfreeze NFT on polkaot

	mapping (uint128=>ActionInfo) private actions;
	mapping (uint128=>mapping (address=>uint8)) private action_validators;

	constructor(address[] memory _validators, IERC721[] memory _nft_whitelist, uint16 _threshold, XPNft _nft_token, XPNet _token) {
		require(_validators.length > 0, "Validators must not be empty!");
		require(_threshold > 0 && _threshold <= _validators.length, "invalid threshold!");

		for (uint i = 0; i < _validators.length; i++) {
			validators[_validators[i]] = 2;
		}
		for (uint i = 0; i < _nft_whitelist.length; i++) {
			nft_whitelist[address(_nft_whitelist[i])] = 2;
		}

		validator_cnt = _validators.length;
		threshold = _threshold;
		nft_token = _nft_token;
		token = _token;
	}

	function validate_action(uint128 action_id, Action action) private returns (ValidationRes) {
		require(validators[msg.sender] == 2, "Not a validator!");

		if (actions[action_id].validator_cnt == 0) {
			actions[action_id] = ActionInfo(action, 1);
		} else {
			require(action_validators[action_id][msg.sender] != 2, "Duplicate Validator!");
			actions[action_id].validator_cnt += 1;
		}
		// TODO: Check if action matches

		action_validators[action_id][msg.sender] = 2;

		ValidationRes res = ValidationRes.Noop;
		if (actions[action_id].validator_cnt == threshold) {
			res = ValidationRes.Execute;
		}

		if (actions[action_id].validator_cnt == validator_cnt) {
			delete actions[action_id];
			// TODO: Should we clear action_validators?
		}

		return res;
	}

	// Transfer XPNET
	function validate_transfer(uint128 action_id, uint64 chain_nonce, address to, uint256 value) public whenNotPaused {
		ValidationRes res = validate_action(action_id, Action.Transfer);
		if (res == ValidationRes.Execute) {
			token.mint(to, chain_nonce, value);
		}
	}

	// Transfer Foreign NFT
	function validate_transfer_nft(uint128 action_id, address to, string calldata data) public whenNotPaused returns(uint256){
		ValidationRes res = validate_action(action_id, Action.TransferUnique);
		if (res == ValidationRes.Execute) {
			nft_token.mint(to, nft_cnt);
			nft_token.setURI(nft_cnt, data);
			nft_cnt += 1;

			return nft_cnt-1;
		}

		return 0;
	}

	// Unfreeze ETH
	function validate_unfreeze(uint128 action_id, address payable to, uint256 value) public whenNotPaused {
		ValidationRes res = validate_action(action_id, Action.Unfreeze);
		if (res == ValidationRes.Execute) {
			require(to.send(value), "FAILED TO TRANSFER?!");
		}
	}

	function validate_unfreeze_nft(uint128 action_id, address to, uint256 tokenId, IERC721 contract_addr) public whenNotPaused {
		require(nft_whitelist[address(contract_addr)] == 2, "NFT not whitelisted?!");

		ValidationRes res = validate_action(action_id, Action.UnfreezeUnique);
		if (res == ValidationRes.Execute) {
			contract_addr.safeTransferFrom(address(this), to, tokenId);
		}
	}

	function validate_whitelist_nft(uint128 action_id, IERC721 contract_addr) public whenNotPaused {
		require(nft_whitelist[address(contract_addr)] != 2, "NFT already whitelisted");

		ValidationRes res = validate_action(action_id, Action.WhitelistNft);
		if (res == ValidationRes.Execute) {
			nft_whitelist[address(contract_addr)] = 2;
		}
	}

	function validate_add_validator(uint128 action_id, address new_validator) public whenNotPaused {
		require(validators[new_validator] != 2, "already a validator");

		ValidationRes res = validate_action(action_id, Action.AddValidator);
		if (res == ValidationRes.Execute) {
			validators[new_validator] = 2;
		}
	}

	function validate_remove_validator(uint128 action_id, address old_validator) public whenNotPaused {
		require(validators[old_validator] == 2, "given address is not a validator");
		require(msg.sender != old_validator, "you can't remove yourself");

		ValidationRes res = validate_action(action_id, Action.RemoveValidator);
		if (res == ValidationRes.Execute) {
			validators[old_validator] = 0;
		}
	}

	function validate_pause_bridge(uint128 action_id) public whenNotPaused {
		ValidationRes res = validate_action(action_id, Action.PauseBridge);
		if (res == ValidationRes.Execute) {
			_pause();
		}
	}

	function validate_unpause_bridge(uint128 action_id) public whenPaused {
		ValidationRes res = validate_action(action_id, Action.UnpauseBridge);
		if (res == ValidationRes.Execute) {
			_unpause();
		}
	}

	function _withdraw(address sender, uint64 chain_nonce, string calldata to, uint256 value) private {
		token.burn(sender, chain_nonce, value);
		emit Unfreeze(action_cnt, chain_nonce, to, value);
		action_cnt += 1;
	}

	// Withdraw Wrapped token
	function withdraw(uint64 chain_nonce, string calldata to, uint256 value) public whenNotPaused {
		_withdraw(msg.sender, chain_nonce, to, value);
	}

	function _withdraw_nft(address sender, string calldata to, uint256 id) private {
		require(nft_token.ownerOf(id) == sender, "You don't own this nft!");

		string memory data = nft_token.tokenURI(id);

		nft_token.burn(id);
		nft_token.setURI(id, "");
		emit UnfreezeNft(action_cnt, to, data);
		action_cnt += 1;
	}

	// Withdraw Foreign NFT
	function withdraw_nft(string calldata to, uint256 id) public {
		_withdraw_nft(msg.sender, to, id);
	}

	function onERC721Received(
		address caller,
		address,
		uint256 tokenId,
		bytes calldata data
	) public virtual override returns (bytes4) {
		require(!paused(), "Bridge Paused");
		require(nft_whitelist[caller] == 2, "This NFT contract is not whitelisted");
		require(IERC721(caller).ownerOf(tokenId) == address(this), "NFT not received");

		uint64 chain_nonce = data.toUint64(0);
		string memory to = string(data.slice(8, data.length-8));

		emit TransferErc721(action_cnt, chain_nonce, to, tokenId, caller);
		action_cnt += 1;
		return this.onERC721Received.selector;
	}

	// Transfer ETH to to Polka
	function freeze(uint64 chain_nonce, string memory to) public whenNotPaused payable {
		require(msg.value > 0, "value must be > 0!");
		emit Transfer(action_cnt, chain_nonce, to, msg.value);
		action_cnt += 1;
	}
}
