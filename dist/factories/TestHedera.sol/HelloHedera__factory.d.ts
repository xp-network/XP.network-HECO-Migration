import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { HelloHedera, HelloHederaInterface } from "../../TestHedera.sol/HelloHedera";
declare type HelloHederaConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class HelloHedera__factory extends ContractFactory {
    constructor(...args: HelloHederaConstructorParams);
    deploy(message_: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<HelloHedera>;
    getDeployTransaction(message_: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): HelloHedera;
    connect(signer: Signer): HelloHedera__factory;
    static readonly bytecode = "0x6080604052346101ec576105e880380380610019816101f1565b92833981019060209081818403126101ec5780516001600160401b03918282116101ec570191601f908482850112156101ec5783518381116101c257601f1994610068828501871684016101f1565b968288528383830101116101ec57829060005b8381106101d85750506000918701015284519283116101c25760019384548581811c911680156101b8575b838210146101a25783811161015c575b50819284116001146100fd5750508192936000926100f2575b5050600019600383901b1c191690821b1790555b6040516103d190816102178239f35b0151905038806100cf565b6000858152828120918516969193925b8782106101455750508385961061012c575b505050811b0190556100e3565b015160001960f88460031b161c1916905538808061011f565b80878596829496860151815501950193019061010d565b85600052826000208480870160051c820192858810610199575b0160051c019086905b82811061018d5750506100b6565b6000815501869061017f565b92508192610176565b634e487b7160e01b600052602260045260246000fd5b90607f16906100a6565b634e487b7160e01b600052604160045260246000fd5b81810183015189820184015284920161007b565b600080fd5b6040519190601f01601f191682016001600160401b038111838210176101c25760405256fe60806040818152600436101561001457600080fd5b600091823560e01c9081632e9826021461014c57506332af2edb1461003857600080fd5b346101485781600319360112610148578051828160019182549261005b84610361565b8084529381811690811561012657506001146100ca575b5061008292509492940384610329565b815192839160208084528251928382860152825b8481106100b457505050828201840152601f01601f19168101030190f35b8181018301518882018801528795508201610096565b8087528691507fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf65b84831061010b5750610082935050810160200138610072565b819350908160209254838589010152019101909184926100f2565b90506020925061008294915060ff191682840152151560051b82010138610072565b5080fd5b8334610326576020806003193601126101485767ffffffffffffffff600435818111610322573660238201121561032257806004013582811161030e57601f199161019e601f83018416860188610329565b818752366024838301011161030a578186926024879301838a01378701015284519182116102f6576001926101d38454610361565b601f8111610292575b508091601f841160011461021857505083948293949261020d575b5050600019600383901b1c191690821b17905580f35b0151905084806101f7565b8486528316957fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6929186905b88821061027b5750508385969710610262575b505050811b01905580f35b015160001960f88460031b161c19169055848080610257565b808785968294968601518155019501930190610244565b8486527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6601f850160051c8101918386106102ec575b601f0160051c019085905b8281106102e15750506101dc565b8781550185906102d3565b90915081906102c8565b634e487b7160e01b84526041600452602484fd5b8580fd5b634e487b7160e01b85526041600452602485fd5b8380fd5b80fd5b90601f8019910116810190811067ffffffffffffffff82111761034b57604052565b634e487b7160e01b600052604160045260246000fd5b90600182811c92168015610391575b602083101461037b57565b634e487b7160e01b600052602260045260246000fd5b91607f169161037056fea26469706673582212200a0f9a33ebce8bce73be97e57acfc16a2ee084ee20cd49b5e7e6e5ff9b08926964736f6c63430008110033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "message_";
            readonly type: "string";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "get_message";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "message_";
            readonly type: "string";
        }];
        readonly name: "set_message";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): HelloHederaInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): HelloHedera;
}
export {};
