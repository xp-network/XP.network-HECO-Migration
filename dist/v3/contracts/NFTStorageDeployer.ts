/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
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

export interface NFTStorageDeployerInterface extends utils.Interface {
  functions: {
    "deployNFT1155Storage(address)": FunctionFragment;
    "deployNFT721Storage(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "setOwner(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "deployNFT1155Storage"
      | "deployNFT721Storage"
      | "owner"
      | "setOwner"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "deployNFT1155Storage",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "deployNFT721Storage",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "setOwner", values: [string]): string;

  decodeFunctionResult(
    functionFragment: "deployNFT1155Storage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deployNFT721Storage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;

  events: {};
}

export interface NFTStorageDeployer extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: NFTStorageDeployerInterface;

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
    deployNFT1155Storage(
      collectionAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    deployNFT721Storage(
      collectionAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    setOwner(
      _owner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  deployNFT1155Storage(
    collectionAddress: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  deployNFT721Storage(
    collectionAddress: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  setOwner(
    _owner: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    deployNFT1155Storage(
      collectionAddress: string,
      overrides?: CallOverrides
    ): Promise<string>;

    deployNFT721Storage(
      collectionAddress: string,
      overrides?: CallOverrides
    ): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    setOwner(_owner: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    deployNFT1155Storage(
      collectionAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    deployNFT721Storage(
      collectionAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    setOwner(
      _owner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    deployNFT1155Storage(
      collectionAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    deployNFT721Storage(
      collectionAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setOwner(
      _owner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
