import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { XPNft, XPNftInterface } from "../XPNft";
export declare class XPNft__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<XPNft>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): XPNft;
    connect(signer: Signer): XPNft__factory;
    static readonly bytecode = "0x60806040523480156200001157600080fd5b506040518060400160405280600981526020017f5870577261704e667400000000000000000000000000000000000000000000008152506040518060400160405280600581526020017f58504e4654000000000000000000000000000000000000000000000000000000815250816000908051906020019062000096929190620001a6565b508060019080519060200190620000af929190620001a6565b505050620000d2620000c6620000d860201b60201c565b620000e060201b60201c565b620002bb565b600033905090565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b828054620001b49062000256565b90600052602060002090601f016020900481019282620001d8576000855562000224565b82601f10620001f357805160ff191683800117855562000224565b8280016001018555821562000224579182015b828111156200022357825182559160200191906001019062000206565b5b50905062000233919062000237565b5090565b5b808211156200025257600081600090555060010162000238565b5090565b600060028204905060018216806200026f57607f821691505b602082108114156200028657620002856200028c565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6132d080620002cb6000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c806370a08231116100ad578063a22cb46511610071578063a22cb465146102f2578063b88d4fde1461030e578063c87b56dd1461032a578063e985e9c51461035a578063f2fde38b1461038a57610121565b806370a0823114610260578063715018a614610290578063862440e21461029a5780638da5cb5b146102b657806395d89b41146102d457610121565b806323b872dd116100f457806323b872dd146101c057806340c10f19146101dc57806342842e0e146101f857806342966c68146102145780636352211e1461023057610121565b806301ffc9a71461012657806306fdde0314610156578063081812fc14610174578063095ea7b3146101a4575b600080fd5b610140600480360381019061013b9190612258565b6103a6565b60405161014d91906126fc565b60405180910390f35b61015e610488565b60405161016b9190612717565b60405180910390f35b61018e600480360381019061018991906122aa565b61051a565b60405161019b9190612695565b60405180910390f35b6101be60048036038101906101b9919061221c565b61059f565b005b6101da60048036038101906101d59190612116565b6106b7565b005b6101f660048036038101906101f1919061221c565b610717565b005b610212600480360381019061020d9190612116565b6107a1565b005b61022e600480360381019061022991906122aa565b6107c1565b005b61024a600480360381019061024591906122aa565b610849565b6040516102579190612695565b60405180910390f35b61027a600480360381019061027591906120b1565b6108fb565b6040516102879190612979565b60405180910390f35b6102986109b3565b005b6102b460048036038101906102af91906122d3565b610a3b565b005b6102be610b0a565b6040516102cb9190612695565b60405180910390f35b6102dc610b34565b6040516102e99190612717565b60405180910390f35b61030c600480360381019061030791906121e0565b610bc6565b005b61032860048036038101906103239190612165565b610d47565b005b610344600480360381019061033f91906122aa565b610da9565b6040516103519190612717565b60405180910390f35b610374600480360381019061036f91906120da565b610efb565b60405161038191906126fc565b60405180910390f35b6103a4600480360381019061039f91906120b1565b610f8f565b005b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061047157507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610481575061048082611087565b5b9050919050565b60606000805461049790612b9e565b80601f01602080910402602001604051908101604052809291908181526020018280546104c390612b9e565b80156105105780601f106104e557610100808354040283529160200191610510565b820191906000526020600020905b8154815290600101906020018083116104f357829003601f168201915b5050505050905090565b6000610525826110f1565b610564576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161055b906128b9565b60405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006105aa82610849565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561061b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161061290612939565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1661063a61115d565b73ffffffffffffffffffffffffffffffffffffffff16148061066957506106688161066361115d565b610efb565b5b6106a8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161069f906127f9565b60405180910390fd5b6106b28383611165565b505050565b6106c86106c261115d565b8261121e565b610707576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106fe90612959565b60405180910390fd5b6107128383836112fc565b505050565b61071f61115d565b73ffffffffffffffffffffffffffffffffffffffff1661073d610b0a565b73ffffffffffffffffffffffffffffffffffffffff1614610793576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161078a906128d9565b60405180910390fd5b61079d8282611558565b5050565b6107bc83838360405180602001604052806000815250610d47565b505050565b6107c961115d565b73ffffffffffffffffffffffffffffffffffffffff166107e7610b0a565b73ffffffffffffffffffffffffffffffffffffffff161461083d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610834906128d9565b60405180910390fd5b61084681611576565b50565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156108f2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108e990612839565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561096c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161096390612819565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6109bb61115d565b73ffffffffffffffffffffffffffffffffffffffff166109d9610b0a565b73ffffffffffffffffffffffffffffffffffffffff1614610a2f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a26906128d9565b60405180910390fd5b610a3960006115c9565b565b610a4361115d565b73ffffffffffffffffffffffffffffffffffffffff16610a61610b0a565b73ffffffffffffffffffffffffffffffffffffffff1614610ab7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aae906128d9565b60405180910390fd5b610b058383838080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505061168f565b505050565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606060018054610b4390612b9e565b80601f0160208091040260200160405190810160405280929190818152602001828054610b6f90612b9e565b8015610bbc5780601f10610b9157610100808354040283529160200191610bbc565b820191906000526020600020905b815481529060010190602001808311610b9f57829003601f168201915b5050505050905090565b610bce61115d565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610c3c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c33906127b9565b60405180910390fd5b8060056000610c4961115d565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff16610cf661115d565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610d3b91906126fc565b60405180910390a35050565b610d58610d5261115d565b8361121e565b610d97576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d8e90612959565b60405180910390fd5b610da384848484611703565b50505050565b6060610db4826110f1565b610df3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dea90612899565b60405180910390fd5b6000600660008481526020019081526020016000208054610e1390612b9e565b80601f0160208091040260200160405190810160405280929190818152602001828054610e3f90612b9e565b8015610e8c5780601f10610e6157610100808354040283529160200191610e8c565b820191906000526020600020905b815481529060010190602001808311610e6f57829003601f168201915b505050505090506000610e9d61175f565b9050600081511415610eb3578192505050610ef6565b600082511115610ee8578082604051602001610ed0929190612671565b60405160208183030381529060405292505050610ef6565b610ef184611776565b925050505b919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b610f9761115d565b73ffffffffffffffffffffffffffffffffffffffff16610fb5610b0a565b73ffffffffffffffffffffffffffffffffffffffff161461100b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611002906128d9565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561107b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161107290612759565b60405180910390fd5b611084816115c9565b50565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff166111d883610849565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000611229826110f1565b611268576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161125f906127d9565b60405180910390fd5b600061127383610849565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614806112e257508373ffffffffffffffffffffffffffffffffffffffff166112ca8461051a565b73ffffffffffffffffffffffffffffffffffffffff16145b806112f357506112f28185610efb565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff1661131c82610849565b73ffffffffffffffffffffffffffffffffffffffff1614611372576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611369906128f9565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156113e2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113d990612799565b60405180910390fd5b6113ed83838361181d565b6113f8600082611165565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546114489190612ab4565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461149f9190612a2d565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b611572828260405180602001604052806000815250611822565b5050565b61157f8161187d565b600060066000838152602001908152602001600020805461159f90612b9e565b9050146115c6576006600082815260200190815260200160002060006115c59190611eb3565b5b50565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b611698826110f1565b6116d7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116ce90612859565b60405180910390fd5b806006600084815260200190815260200160002090805190602001906116fe929190611ef3565b505050565b61170e8484846112fc565b61171a8484848461198e565b611759576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161175090612739565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b6060611781826110f1565b6117c0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117b790612919565b60405180910390fd5b60006117ca61175f565b905060008151116117ea5760405180602001604052806000815250611815565b806117f484611b25565b604051602001611805929190612671565b6040516020818303038152906040525b915050919050565b505050565b61182c8383611cd2565b611839600084848461198e565b611878576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161186f90612739565b60405180910390fd5b505050565b600061188882610849565b90506118968160008461181d565b6118a1600083611165565b6001600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546118f19190612ab4565b925050819055506002600083815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905581600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b60006119af8473ffffffffffffffffffffffffffffffffffffffff16611ea0565b15611b18578373ffffffffffffffffffffffffffffffffffffffff1663150b7a026119d861115d565b8786866040518563ffffffff1660e01b81526004016119fa94939291906126b0565b602060405180830381600087803b158015611a1457600080fd5b505af1925050508015611a4557506040513d601f19601f82011682018060405250810190611a429190612281565b60015b611ac8573d8060008114611a75576040519150601f19603f3d011682016040523d82523d6000602084013e611a7a565b606091505b50600081511415611ac0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ab790612739565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611b1d565b600190505b949350505050565b60606000821415611b6d576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611ccd565b600082905060005b60008214611b9f578080611b8890612c01565b915050600a82611b989190612a83565b9150611b75565b60008167ffffffffffffffff811115611be1577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015611c135781602001600182028036833780820191505090505b5090505b60008514611cc657600182611c2c9190612ab4565b9150600a85611c3b9190612c4a565b6030611c479190612a2d565b60f81b818381518110611c83577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a85611cbf9190612a83565b9450611c17565b8093505050505b919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611d42576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d3990612879565b60405180910390fd5b611d4b816110f1565b15611d8b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d8290612779565b60405180910390fd5b611d976000838361181d565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611de79190612a2d565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b600080823b905060008111915050919050565b508054611ebf90612b9e565b6000825580601f10611ed15750611ef0565b601f016020900490600052602060002090810190611eef9190611f79565b5b50565b828054611eff90612b9e565b90600052602060002090601f016020900481019282611f215760008555611f68565b82601f10611f3a57805160ff1916838001178555611f68565b82800160010185558215611f68579182015b82811115611f67578251825591602001919060010190611f4c565b5b509050611f759190611f79565b5090565b5b80821115611f92576000816000905550600101611f7a565b5090565b6000611fa9611fa4846129b9565b612994565b905082815260208101848484011115611fc157600080fd5b611fcc848285612b5c565b509392505050565b600081359050611fe38161323e565b92915050565b600081359050611ff881613255565b92915050565b60008135905061200d8161326c565b92915050565b6000815190506120228161326c565b92915050565b600082601f83011261203957600080fd5b8135612049848260208601611f96565b91505092915050565b60008083601f84011261206457600080fd5b8235905067ffffffffffffffff81111561207d57600080fd5b60208301915083600182028301111561209557600080fd5b9250929050565b6000813590506120ab81613283565b92915050565b6000602082840312156120c357600080fd5b60006120d184828501611fd4565b91505092915050565b600080604083850312156120ed57600080fd5b60006120fb85828601611fd4565b925050602061210c85828601611fd4565b9150509250929050565b60008060006060848603121561212b57600080fd5b600061213986828701611fd4565b935050602061214a86828701611fd4565b925050604061215b8682870161209c565b9150509250925092565b6000806000806080858703121561217b57600080fd5b600061218987828801611fd4565b945050602061219a87828801611fd4565b93505060406121ab8782880161209c565b925050606085013567ffffffffffffffff8111156121c857600080fd5b6121d487828801612028565b91505092959194509250565b600080604083850312156121f357600080fd5b600061220185828601611fd4565b925050602061221285828601611fe9565b9150509250929050565b6000806040838503121561222f57600080fd5b600061223d85828601611fd4565b925050602061224e8582860161209c565b9150509250929050565b60006020828403121561226a57600080fd5b600061227884828501611ffe565b91505092915050565b60006020828403121561229357600080fd5b60006122a184828501612013565b91505092915050565b6000602082840312156122bc57600080fd5b60006122ca8482850161209c565b91505092915050565b6000806000604084860312156122e857600080fd5b60006122f68682870161209c565b935050602084013567ffffffffffffffff81111561231357600080fd5b61231f86828701612052565b92509250509250925092565b61233481612ae8565b82525050565b61234381612afa565b82525050565b6000612354826129ea565b61235e8185612a00565b935061236e818560208601612b6b565b61237781612d37565b840191505092915050565b600061238d826129f5565b6123978185612a11565b93506123a7818560208601612b6b565b6123b081612d37565b840191505092915050565b60006123c6826129f5565b6123d08185612a22565b93506123e0818560208601612b6b565b80840191505092915050565b60006123f9603283612a11565b915061240482612d48565b604082019050919050565b600061241c602683612a11565b915061242782612d97565b604082019050919050565b600061243f601c83612a11565b915061244a82612de6565b602082019050919050565b6000612462602483612a11565b915061246d82612e0f565b604082019050919050565b6000612485601983612a11565b915061249082612e5e565b602082019050919050565b60006124a8602c83612a11565b91506124b382612e87565b604082019050919050565b60006124cb603883612a11565b91506124d682612ed6565b604082019050919050565b60006124ee602a83612a11565b91506124f982612f25565b604082019050919050565b6000612511602983612a11565b915061251c82612f74565b604082019050919050565b6000612534602e83612a11565b915061253f82612fc3565b604082019050919050565b6000612557602083612a11565b915061256282613012565b602082019050919050565b600061257a603183612a11565b91506125858261303b565b604082019050919050565b600061259d602c83612a11565b91506125a88261308a565b604082019050919050565b60006125c0602083612a11565b91506125cb826130d9565b602082019050919050565b60006125e3602983612a11565b91506125ee82613102565b604082019050919050565b6000612606602f83612a11565b915061261182613151565b604082019050919050565b6000612629602183612a11565b9150612634826131a0565b604082019050919050565b600061264c603183612a11565b9150612657826131ef565b604082019050919050565b61266b81612b52565b82525050565b600061267d82856123bb565b915061268982846123bb565b91508190509392505050565b60006020820190506126aa600083018461232b565b92915050565b60006080820190506126c5600083018761232b565b6126d2602083018661232b565b6126df6040830185612662565b81810360608301526126f18184612349565b905095945050505050565b6000602082019050612711600083018461233a565b92915050565b600060208201905081810360008301526127318184612382565b905092915050565b60006020820190508181036000830152612752816123ec565b9050919050565b600060208201905081810360008301526127728161240f565b9050919050565b6000602082019050818103600083015261279281612432565b9050919050565b600060208201905081810360008301526127b281612455565b9050919050565b600060208201905081810360008301526127d281612478565b9050919050565b600060208201905081810360008301526127f28161249b565b9050919050565b60006020820190508181036000830152612812816124be565b9050919050565b60006020820190508181036000830152612832816124e1565b9050919050565b6000602082019050818103600083015261285281612504565b9050919050565b6000602082019050818103600083015261287281612527565b9050919050565b600060208201905081810360008301526128928161254a565b9050919050565b600060208201905081810360008301526128b28161256d565b9050919050565b600060208201905081810360008301526128d281612590565b9050919050565b600060208201905081810360008301526128f2816125b3565b9050919050565b60006020820190508181036000830152612912816125d6565b9050919050565b60006020820190508181036000830152612932816125f9565b9050919050565b600060208201905081810360008301526129528161261c565b9050919050565b600060208201905081810360008301526129728161263f565b9050919050565b600060208201905061298e6000830184612662565b92915050565b600061299e6129af565b90506129aa8282612bd0565b919050565b6000604051905090565b600067ffffffffffffffff8211156129d4576129d3612d08565b5b6129dd82612d37565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b6000612a3882612b52565b9150612a4383612b52565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115612a7857612a77612c7b565b5b828201905092915050565b6000612a8e82612b52565b9150612a9983612b52565b925082612aa957612aa8612caa565b5b828204905092915050565b6000612abf82612b52565b9150612aca83612b52565b925082821015612add57612adc612c7b565b5b828203905092915050565b6000612af382612b32565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015612b89578082015181840152602081019050612b6e565b83811115612b98576000848401525b50505050565b60006002820490506001821680612bb657607f821691505b60208210811415612bca57612bc9612cd9565b5b50919050565b612bd982612d37565b810181811067ffffffffffffffff82111715612bf857612bf7612d08565b5b80604052505050565b6000612c0c82612b52565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415612c3f57612c3e612c7b565b5b600182019050919050565b6000612c5582612b52565b9150612c6083612b52565b925082612c7057612c6f612caa565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b7f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000602082015250565b7f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008201527f726f206164647265737300000000000000000000000000000000000000000000602082015250565b7f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008201527f656e7420746f6b656e0000000000000000000000000000000000000000000000602082015250565b7f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60008201527f6578697374656e7420746f6b656e000000000000000000000000000000000000602082015250565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b7f45524337323155524953746f726167653a2055524920717565727920666f722060008201527f6e6f6e6578697374656e7420746f6b656e000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960008201527f73206e6f74206f776e0000000000000000000000000000000000000000000000602082015250565b7f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008201527f776e6572206e6f7220617070726f766564000000000000000000000000000000602082015250565b61324781612ae8565b811461325257600080fd5b50565b61325e81612afa565b811461326957600080fd5b50565b61327581612b06565b811461328057600080fd5b50565b61328c81612b52565b811461329757600080fd5b5056fea2646970667358221220c3c45f851f2e52328515b3a38a3f0d6bbe716634fc6623971415000e7ef24edf64736f6c63430008040033";
    static readonly abi: ({
        inputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): XPNftInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): XPNft;
}
