/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../common";

export type ChainFeeStruct = {
  chain: string;
  fee: BigNumberish;
  royaltyReceiver: string;
};

export type ChainFeeStructOutput = [string, BigNumber, string] & {
  chain: string;
  fee: BigNumber;
  royaltyReceiver: string;
};

export type SignerAndSignatureStruct = {
  signerAddress: string;
  signature: BytesLike;
};

export type SignerAndSignatureStructOutput = [string, string] & {
  signerAddress: string;
  signature: string;
};

export type ValidatorAddressWithSignerAndSignatureStruct = {
  validatorAddress: string;
  signerAndSignature: SignerAndSignatureStruct;
};

export type ValidatorAddressWithSignerAndSignatureStructOutput = [
  string,
  SignerAndSignatureStructOutput
] & {
  validatorAddress: string;
  signerAndSignature: SignerAndSignatureStructOutput;
};

export interface BridgeStorageInterface extends utils.Interface {
  functions: {
    "approveLockNft(string,string,bytes,string)": FunctionFragment;
    "approveStake(address,(string,(string,bytes))[])": FunctionFragment;
    "chainEpoch(string)": FunctionFragment;
    "chainFee(string)": FunctionFragment;
    "chainFeeVoted(string,uint256,address,uint256)": FunctionFragment;
    "chainFeeVotes(string,uint256,uint256)": FunctionFragment;
    "chainRoyalty(string)": FunctionFragment;
    "chainRoyaltyVoted(string,string,address,uint256)": FunctionFragment;
    "chainRoyaltyVotes(string,string,uint256)": FunctionFragment;
    "changeChainFee(string,uint256)": FunctionFragment;
    "changeChainRoyaltyReceiver(string,string)": FunctionFragment;
    "changeValidatorStatus(address,bool)": FunctionFragment;
    "getLockNftSignatures(string,string)": FunctionFragment;
    "getLockNftSignaturesCount(string,string)": FunctionFragment;
    "getStakingSignatures(string)": FunctionFragment;
    "getStakingSignaturesCount(string)": FunctionFragment;
    "lockSignatures(string,string,uint256)": FunctionFragment;
    "royaltyEpoch(string)": FunctionFragment;
    "stakingSignatures(string,uint256)": FunctionFragment;
    "usedSignatures(bytes)": FunctionFragment;
    "validatorCount()": FunctionFragment;
    "validatorEpoch(address)": FunctionFragment;
    "validatorStatusChangeVotes(address,bool,uint256)": FunctionFragment;
    "validatorVoted(address,address,uint256)": FunctionFragment;
    "validators(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "approveLockNft"
      | "approveStake"
      | "chainEpoch"
      | "chainFee"
      | "chainFeeVoted"
      | "chainFeeVotes"
      | "chainRoyalty"
      | "chainRoyaltyVoted"
      | "chainRoyaltyVotes"
      | "changeChainFee"
      | "changeChainRoyaltyReceiver"
      | "changeValidatorStatus"
      | "getLockNftSignatures"
      | "getLockNftSignaturesCount"
      | "getStakingSignatures"
      | "getStakingSignaturesCount"
      | "lockSignatures"
      | "royaltyEpoch"
      | "stakingSignatures"
      | "usedSignatures"
      | "validatorCount"
      | "validatorEpoch"
      | "validatorStatusChangeVotes"
      | "validatorVoted"
      | "validators"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "approveLockNft",
    values: [string, string, BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "approveStake",
    values: [string, ValidatorAddressWithSignerAndSignatureStruct[]]
  ): string;
  encodeFunctionData(functionFragment: "chainEpoch", values: [string]): string;
  encodeFunctionData(functionFragment: "chainFee", values: [string]): string;
  encodeFunctionData(
    functionFragment: "chainFeeVoted",
    values: [string, BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "chainFeeVotes",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "chainRoyalty",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "chainRoyaltyVoted",
    values: [string, string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "chainRoyaltyVotes",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "changeChainFee",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "changeChainRoyaltyReceiver",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "changeValidatorStatus",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "getLockNftSignatures",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getLockNftSignaturesCount",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getStakingSignatures",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getStakingSignaturesCount",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "lockSignatures",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "royaltyEpoch",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "stakingSignatures",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "usedSignatures",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "validatorCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "validatorEpoch",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "validatorStatusChangeVotes",
    values: [string, boolean, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "validatorVoted",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "validators", values: [string]): string;

  decodeFunctionResult(
    functionFragment: "approveLockNft",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "approveStake",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "chainEpoch", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "chainFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "chainFeeVoted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "chainFeeVotes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "chainRoyalty",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "chainRoyaltyVoted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "chainRoyaltyVotes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeChainFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeChainRoyaltyReceiver",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeValidatorStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLockNftSignatures",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLockNftSignaturesCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getStakingSignatures",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getStakingSignaturesCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lockSignatures",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "royaltyEpoch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stakingSignatures",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "usedSignatures",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validatorCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validatorEpoch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validatorStatusChangeVotes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validatorVoted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "validators", data: BytesLike): Result;

  events: {};
}

export interface BridgeStorage extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BridgeStorageInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    approveLockNft(
      _transactionHash: string,
      _chain: string,
      _signature: BytesLike,
      _signerAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    approveStake(
      _stakerAddress: string,
      _validatorAddressWithSignerAndSignature: ValidatorAddressWithSignerAndSignatureStruct[],
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    chainEpoch(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    chainFee(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    chainFeeVoted(
      arg0: string,
      arg1: BigNumberish,
      arg2: string,
      arg3: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    chainFeeVotes(
      arg0: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    chainRoyalty(arg0: string, overrides?: CallOverrides): Promise<[string]>;

    chainRoyaltyVoted(
      arg0: string,
      arg1: string,
      arg2: string,
      arg3: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    chainRoyaltyVotes(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    changeChainFee(
      _chain: string,
      _fee: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    changeChainRoyaltyReceiver(
      _chain: string,
      _royaltyReceiver: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    changeValidatorStatus(
      _validatorAddress: string,
      _status: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    getLockNftSignatures(
      transactionHash: string,
      chain: string,
      overrides?: CallOverrides
    ): Promise<[SignerAndSignatureStructOutput[]]>;

    getLockNftSignaturesCount(
      transactionHash: string,
      chain: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getStakingSignatures(
      stakerAddress: string,
      overrides?: CallOverrides
    ): Promise<[SignerAndSignatureStructOutput[]]>;

    getStakingSignaturesCount(
      stakerAddress: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    lockSignatures(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, string] & { signerAddress: string; signature: string }>;

    royaltyEpoch(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    stakingSignatures(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, string] & { signerAddress: string; signature: string }>;

    usedSignatures(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    validatorCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    validatorEpoch(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    validatorStatusChangeVotes(
      arg0: string,
      arg1: boolean,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    validatorVoted(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    validators(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;
  };

  approveLockNft(
    _transactionHash: string,
    _chain: string,
    _signature: BytesLike,
    _signerAddress: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  approveStake(
    _stakerAddress: string,
    _validatorAddressWithSignerAndSignature: ValidatorAddressWithSignerAndSignatureStruct[],
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  chainEpoch(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  chainFee(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  chainFeeVoted(
    arg0: string,
    arg1: BigNumberish,
    arg2: string,
    arg3: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  chainFeeVotes(
    arg0: string,
    arg1: BigNumberish,
    arg2: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  chainRoyalty(arg0: string, overrides?: CallOverrides): Promise<string>;

  chainRoyaltyVoted(
    arg0: string,
    arg1: string,
    arg2: string,
    arg3: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  chainRoyaltyVotes(
    arg0: string,
    arg1: string,
    arg2: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  changeChainFee(
    _chain: string,
    _fee: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  changeChainRoyaltyReceiver(
    _chain: string,
    _royaltyReceiver: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  changeValidatorStatus(
    _validatorAddress: string,
    _status: boolean,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  getLockNftSignatures(
    transactionHash: string,
    chain: string,
    overrides?: CallOverrides
  ): Promise<SignerAndSignatureStructOutput[]>;

  getLockNftSignaturesCount(
    transactionHash: string,
    chain: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getStakingSignatures(
    stakerAddress: string,
    overrides?: CallOverrides
  ): Promise<SignerAndSignatureStructOutput[]>;

  getStakingSignaturesCount(
    stakerAddress: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  lockSignatures(
    arg0: string,
    arg1: string,
    arg2: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[string, string] & { signerAddress: string; signature: string }>;

  royaltyEpoch(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  stakingSignatures(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[string, string] & { signerAddress: string; signature: string }>;

  usedSignatures(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  validatorCount(overrides?: CallOverrides): Promise<BigNumber>;

  validatorEpoch(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  validatorStatusChangeVotes(
    arg0: string,
    arg1: boolean,
    arg2: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  validatorVoted(
    arg0: string,
    arg1: string,
    arg2: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  validators(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    approveLockNft(
      _transactionHash: string,
      _chain: string,
      _signature: BytesLike,
      _signerAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    approveStake(
      _stakerAddress: string,
      _validatorAddressWithSignerAndSignature: ValidatorAddressWithSignerAndSignatureStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    chainEpoch(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    chainFee(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    chainFeeVoted(
      arg0: string,
      arg1: BigNumberish,
      arg2: string,
      arg3: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    chainFeeVotes(
      arg0: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    chainRoyalty(arg0: string, overrides?: CallOverrides): Promise<string>;

    chainRoyaltyVoted(
      arg0: string,
      arg1: string,
      arg2: string,
      arg3: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    chainRoyaltyVotes(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    changeChainFee(
      _chain: string,
      _fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    changeChainRoyaltyReceiver(
      _chain: string,
      _royaltyReceiver: string,
      overrides?: CallOverrides
    ): Promise<void>;

    changeValidatorStatus(
      _validatorAddress: string,
      _status: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    getLockNftSignatures(
      transactionHash: string,
      chain: string,
      overrides?: CallOverrides
    ): Promise<SignerAndSignatureStructOutput[]>;

    getLockNftSignaturesCount(
      transactionHash: string,
      chain: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getStakingSignatures(
      stakerAddress: string,
      overrides?: CallOverrides
    ): Promise<SignerAndSignatureStructOutput[]>;

    getStakingSignaturesCount(
      stakerAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lockSignatures(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, string] & { signerAddress: string; signature: string }>;

    royaltyEpoch(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    stakingSignatures(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, string] & { signerAddress: string; signature: string }>;

    usedSignatures(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    validatorCount(overrides?: CallOverrides): Promise<BigNumber>;

    validatorEpoch(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    validatorStatusChangeVotes(
      arg0: string,
      arg1: boolean,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    validatorVoted(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    validators(arg0: string, overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    approveLockNft(
      _transactionHash: string,
      _chain: string,
      _signature: BytesLike,
      _signerAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    approveStake(
      _stakerAddress: string,
      _validatorAddressWithSignerAndSignature: ValidatorAddressWithSignerAndSignatureStruct[],
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    chainEpoch(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    chainFee(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    chainFeeVoted(
      arg0: string,
      arg1: BigNumberish,
      arg2: string,
      arg3: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    chainFeeVotes(
      arg0: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    chainRoyalty(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    chainRoyaltyVoted(
      arg0: string,
      arg1: string,
      arg2: string,
      arg3: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    chainRoyaltyVotes(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    changeChainFee(
      _chain: string,
      _fee: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    changeChainRoyaltyReceiver(
      _chain: string,
      _royaltyReceiver: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    changeValidatorStatus(
      _validatorAddress: string,
      _status: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    getLockNftSignatures(
      transactionHash: string,
      chain: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getLockNftSignaturesCount(
      transactionHash: string,
      chain: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getStakingSignatures(
      stakerAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getStakingSignaturesCount(
      stakerAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lockSignatures(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    royaltyEpoch(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    stakingSignatures(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    usedSignatures(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    validatorCount(overrides?: CallOverrides): Promise<BigNumber>;

    validatorEpoch(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    validatorStatusChangeVotes(
      arg0: string,
      arg1: boolean,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    validatorVoted(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    validators(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    approveLockNft(
      _transactionHash: string,
      _chain: string,
      _signature: BytesLike,
      _signerAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    approveStake(
      _stakerAddress: string,
      _validatorAddressWithSignerAndSignature: ValidatorAddressWithSignerAndSignatureStruct[],
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    chainEpoch(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    chainFee(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    chainFeeVoted(
      arg0: string,
      arg1: BigNumberish,
      arg2: string,
      arg3: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    chainFeeVotes(
      arg0: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    chainRoyalty(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    chainRoyaltyVoted(
      arg0: string,
      arg1: string,
      arg2: string,
      arg3: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    chainRoyaltyVotes(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    changeChainFee(
      _chain: string,
      _fee: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    changeChainRoyaltyReceiver(
      _chain: string,
      _royaltyReceiver: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    changeValidatorStatus(
      _validatorAddress: string,
      _status: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    getLockNftSignatures(
      transactionHash: string,
      chain: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getLockNftSignaturesCount(
      transactionHash: string,
      chain: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getStakingSignatures(
      stakerAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getStakingSignaturesCount(
      stakerAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lockSignatures(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    royaltyEpoch(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    stakingSignatures(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    usedSignatures(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    validatorCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    validatorEpoch(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    validatorStatusChangeVotes(
      arg0: string,
      arg1: boolean,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    validatorVoted(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    validators(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
