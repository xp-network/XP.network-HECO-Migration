/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface MinterInterface extends ethers.utils.Interface {
  functions: {
    "freeze(uint64,string,uint256)": FunctionFragment;
    "freezeErc721(address,uint256,uint64,string)": FunctionFragment;
    "onERC721Received(address,address,uint256,bytes)": FunctionFragment;
    "paused()": FunctionFragment;
    "validateAddValidator(uint128,address)": FunctionFragment;
    "validatePauseBridge(uint128)": FunctionFragment;
    "validateRemoveValidator(uint128,address)": FunctionFragment;
    "validateSetThreshold(uint128,uint16)": FunctionFragment;
    "validateTransfer(uint128,uint64,address,uint256)": FunctionFragment;
    "validateTransferNft(uint128,address,string)": FunctionFragment;
    "validateUnfreeze(uint128,address,uint256)": FunctionFragment;
    "validateUnfreezeNft(uint128,address,uint256,address)": FunctionFragment;
    "validateUnpauseBridge(uint128)": FunctionFragment;
    "validateWhitelistNft(uint128,address)": FunctionFragment;
    "validateWithdrawFees(uint128)": FunctionFragment;
    "withdraw(uint64,string,uint256)": FunctionFragment;
    "withdrawNft(string,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "freeze",
    values: [BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "freezeErc721",
    values: [string, BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC721Received",
    values: [string, string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "validateAddValidator",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "validatePauseBridge",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "validateRemoveValidator",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "validateSetThreshold",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "validateTransfer",
    values: [BigNumberish, BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "validateTransferNft",
    values: [BigNumberish, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "validateUnfreeze",
    values: [BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "validateUnfreezeNft",
    values: [BigNumberish, string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "validateUnpauseBridge",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "validateWhitelistNft",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "validateWithdrawFees",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawNft",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "freeze", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "freezeErc721",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC721Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "validateAddValidator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validatePauseBridge",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validateRemoveValidator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validateSetThreshold",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validateTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validateTransferNft",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validateUnfreeze",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validateUnfreezeNft",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validateUnpauseBridge",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validateWhitelistNft",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validateWithdrawFees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawNft",
    data: BytesLike
  ): Result;

  events: {
    "Paused(address)": EventFragment;
    "QuorumFailure(uint256)": EventFragment;
    "Transfer(uint256,uint64,uint256,string,uint256)": EventFragment;
    "TransferErc721(uint256,uint64,uint256,string,uint256,address)": EventFragment;
    "Unfreeze(uint256,uint64,uint256,string,uint256)": EventFragment;
    "UnfreezeNft(uint256,uint256,string,string)": EventFragment;
    "Unpaused(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "QuorumFailure"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransferErc721"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unfreeze"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UnfreezeNft"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}

export type PausedEvent = TypedEvent<[string] & { account: string }>;

export type QuorumFailureEvent = TypedEvent<
  [BigNumber] & { actionId: BigNumber }
>;

export type TransferEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, string, BigNumber] & {
    actionId: BigNumber;
    chainNonce: BigNumber;
    txFees: BigNumber;
    to: string;
    value: BigNumber;
  }
>;

export type TransferErc721Event = TypedEvent<
  [BigNumber, BigNumber, BigNumber, string, BigNumber, string] & {
    actionId: BigNumber;
    chainNonce: BigNumber;
    txFees: BigNumber;
    to: string;
    id: BigNumber;
    contractAddr: string;
  }
>;

export type UnfreezeEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, string, BigNumber] & {
    actionId: BigNumber;
    chainNonce: BigNumber;
    txFees: BigNumber;
    to: string;
    value: BigNumber;
  }
>;

export type UnfreezeNftEvent = TypedEvent<
  [BigNumber, BigNumber, string, string] & {
    actionId: BigNumber;
    txFees: BigNumber;
    to: string;
    data: string;
  }
>;

export type UnpausedEvent = TypedEvent<[string] & { account: string }>;

export class Minter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: MinterInterface;

  functions: {
    freeze(
      chainNonce: BigNumberish,
      to: string,
      value: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    freezeErc721(
      erc721Contract: string,
      tokenId: BigNumberish,
      chainNonce: BigNumberish,
      to: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    onERC721Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    validateAddValidator(
      actionId: BigNumberish,
      newValidator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    validatePauseBridge(
      actionId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    validateRemoveValidator(
      actionId: BigNumberish,
      oldValidator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    validateSetThreshold(
      actionId: BigNumberish,
      newThreshold: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    validateTransfer(
      actionId: BigNumberish,
      chainNonce: BigNumberish,
      to: string,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    validateTransferNft(
      actionId: BigNumberish,
      to: string,
      data: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    validateUnfreeze(
      actionId: BigNumberish,
      to: string,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    validateUnfreezeNft(
      actionId: BigNumberish,
      to: string,
      tokenId: BigNumberish,
      contractAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    validateUnpauseBridge(
      actionId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    validateWhitelistNft(
      actionId: BigNumberish,
      contractAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    validateWithdrawFees(
      actionId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      chainNonce: BigNumberish,
      to: string,
      value: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawNft(
      to: string,
      id: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  freeze(
    chainNonce: BigNumberish,
    to: string,
    value: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  freezeErc721(
    erc721Contract: string,
    tokenId: BigNumberish,
    chainNonce: BigNumberish,
    to: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  onERC721Received(
    arg0: string,
    arg1: string,
    arg2: BigNumberish,
    arg3: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  validateAddValidator(
    actionId: BigNumberish,
    newValidator: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  validatePauseBridge(
    actionId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  validateRemoveValidator(
    actionId: BigNumberish,
    oldValidator: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  validateSetThreshold(
    actionId: BigNumberish,
    newThreshold: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  validateTransfer(
    actionId: BigNumberish,
    chainNonce: BigNumberish,
    to: string,
    value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  validateTransferNft(
    actionId: BigNumberish,
    to: string,
    data: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  validateUnfreeze(
    actionId: BigNumberish,
    to: string,
    value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  validateUnfreezeNft(
    actionId: BigNumberish,
    to: string,
    tokenId: BigNumberish,
    contractAddr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  validateUnpauseBridge(
    actionId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  validateWhitelistNft(
    actionId: BigNumberish,
    contractAddr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  validateWithdrawFees(
    actionId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    chainNonce: BigNumberish,
    to: string,
    value: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawNft(
    to: string,
    id: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    freeze(
      chainNonce: BigNumberish,
      to: string,
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    freezeErc721(
      erc721Contract: string,
      tokenId: BigNumberish,
      chainNonce: BigNumberish,
      to: string,
      overrides?: CallOverrides
    ): Promise<void>;

    onERC721Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    validateAddValidator(
      actionId: BigNumberish,
      newValidator: string,
      overrides?: CallOverrides
    ): Promise<void>;

    validatePauseBridge(
      actionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    validateRemoveValidator(
      actionId: BigNumberish,
      oldValidator: string,
      overrides?: CallOverrides
    ): Promise<void>;

    validateSetThreshold(
      actionId: BigNumberish,
      newThreshold: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    validateTransfer(
      actionId: BigNumberish,
      chainNonce: BigNumberish,
      to: string,
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    validateTransferNft(
      actionId: BigNumberish,
      to: string,
      data: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    validateUnfreeze(
      actionId: BigNumberish,
      to: string,
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    validateUnfreezeNft(
      actionId: BigNumberish,
      to: string,
      tokenId: BigNumberish,
      contractAddr: string,
      overrides?: CallOverrides
    ): Promise<void>;

    validateUnpauseBridge(
      actionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    validateWhitelistNft(
      actionId: BigNumberish,
      contractAddr: string,
      overrides?: CallOverrides
    ): Promise<void>;

    validateWithdrawFees(
      actionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(
      chainNonce: BigNumberish,
      to: string,
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawNft(
      to: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Paused(address)"(
      account?: null
    ): TypedEventFilter<[string], { account: string }>;

    Paused(account?: null): TypedEventFilter<[string], { account: string }>;

    "QuorumFailure(uint256)"(
      actionId?: null
    ): TypedEventFilter<[BigNumber], { actionId: BigNumber }>;

    QuorumFailure(
      actionId?: null
    ): TypedEventFilter<[BigNumber], { actionId: BigNumber }>;

    "Transfer(uint256,uint64,uint256,string,uint256)"(
      actionId?: null,
      chainNonce?: null,
      txFees?: null,
      to?: null,
      value?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, BigNumber, string, BigNumber],
      {
        actionId: BigNumber;
        chainNonce: BigNumber;
        txFees: BigNumber;
        to: string;
        value: BigNumber;
      }
    >;

    Transfer(
      actionId?: null,
      chainNonce?: null,
      txFees?: null,
      to?: null,
      value?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, BigNumber, string, BigNumber],
      {
        actionId: BigNumber;
        chainNonce: BigNumber;
        txFees: BigNumber;
        to: string;
        value: BigNumber;
      }
    >;

    "TransferErc721(uint256,uint64,uint256,string,uint256,address)"(
      actionId?: null,
      chainNonce?: null,
      txFees?: null,
      to?: null,
      id?: null,
      contractAddr?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, BigNumber, string, BigNumber, string],
      {
        actionId: BigNumber;
        chainNonce: BigNumber;
        txFees: BigNumber;
        to: string;
        id: BigNumber;
        contractAddr: string;
      }
    >;

    TransferErc721(
      actionId?: null,
      chainNonce?: null,
      txFees?: null,
      to?: null,
      id?: null,
      contractAddr?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, BigNumber, string, BigNumber, string],
      {
        actionId: BigNumber;
        chainNonce: BigNumber;
        txFees: BigNumber;
        to: string;
        id: BigNumber;
        contractAddr: string;
      }
    >;

    "Unfreeze(uint256,uint64,uint256,string,uint256)"(
      actionId?: null,
      chainNonce?: null,
      txFees?: null,
      to?: null,
      value?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, BigNumber, string, BigNumber],
      {
        actionId: BigNumber;
        chainNonce: BigNumber;
        txFees: BigNumber;
        to: string;
        value: BigNumber;
      }
    >;

    Unfreeze(
      actionId?: null,
      chainNonce?: null,
      txFees?: null,
      to?: null,
      value?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, BigNumber, string, BigNumber],
      {
        actionId: BigNumber;
        chainNonce: BigNumber;
        txFees: BigNumber;
        to: string;
        value: BigNumber;
      }
    >;

    "UnfreezeNft(uint256,uint256,string,string)"(
      actionId?: null,
      txFees?: null,
      to?: null,
      data?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, string, string],
      { actionId: BigNumber; txFees: BigNumber; to: string; data: string }
    >;

    UnfreezeNft(
      actionId?: null,
      txFees?: null,
      to?: null,
      data?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, string, string],
      { actionId: BigNumber; txFees: BigNumber; to: string; data: string }
    >;

    "Unpaused(address)"(
      account?: null
    ): TypedEventFilter<[string], { account: string }>;

    Unpaused(account?: null): TypedEventFilter<[string], { account: string }>;
  };

  estimateGas: {
    freeze(
      chainNonce: BigNumberish,
      to: string,
      value: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    freezeErc721(
      erc721Contract: string,
      tokenId: BigNumberish,
      chainNonce: BigNumberish,
      to: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    onERC721Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    validateAddValidator(
      actionId: BigNumberish,
      newValidator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    validatePauseBridge(
      actionId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    validateRemoveValidator(
      actionId: BigNumberish,
      oldValidator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    validateSetThreshold(
      actionId: BigNumberish,
      newThreshold: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    validateTransfer(
      actionId: BigNumberish,
      chainNonce: BigNumberish,
      to: string,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    validateTransferNft(
      actionId: BigNumberish,
      to: string,
      data: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    validateUnfreeze(
      actionId: BigNumberish,
      to: string,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    validateUnfreezeNft(
      actionId: BigNumberish,
      to: string,
      tokenId: BigNumberish,
      contractAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    validateUnpauseBridge(
      actionId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    validateWhitelistNft(
      actionId: BigNumberish,
      contractAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    validateWithdrawFees(
      actionId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdraw(
      chainNonce: BigNumberish,
      to: string,
      value: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawNft(
      to: string,
      id: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    freeze(
      chainNonce: BigNumberish,
      to: string,
      value: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    freezeErc721(
      erc721Contract: string,
      tokenId: BigNumberish,
      chainNonce: BigNumberish,
      to: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    onERC721Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    validateAddValidator(
      actionId: BigNumberish,
      newValidator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    validatePauseBridge(
      actionId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    validateRemoveValidator(
      actionId: BigNumberish,
      oldValidator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    validateSetThreshold(
      actionId: BigNumberish,
      newThreshold: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    validateTransfer(
      actionId: BigNumberish,
      chainNonce: BigNumberish,
      to: string,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    validateTransferNft(
      actionId: BigNumberish,
      to: string,
      data: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    validateUnfreeze(
      actionId: BigNumberish,
      to: string,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    validateUnfreezeNft(
      actionId: BigNumberish,
      to: string,
      tokenId: BigNumberish,
      contractAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    validateUnpauseBridge(
      actionId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    validateWhitelistNft(
      actionId: BigNumberish,
      contractAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    validateWithdrawFees(
      actionId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      chainNonce: BigNumberish,
      to: string,
      value: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawNft(
      to: string,
      id: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
