import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { PaymentToken, PaymentTokenInterface } from "../PaymentToken";
declare type PaymentTokenConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class PaymentToken__factory extends ContractFactory {
    constructor(...args: PaymentTokenConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<PaymentToken>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): PaymentToken;
    connect(signer: Signer): PaymentToken__factory;
    static readonly bytecode = "0x608034620003ef576040906001600160401b039080830182811182821017620003d9578352600c81526020906b2830bcb6b2b73a2a37b5b2b760a11b8282015283519084820182811085821117620003d957855260049384835263282a25a760e11b84840152815192818411620003c4576003908154946001948587811c97168015620003b9575b88881014620003a4578190601f978881116200034e575b508890888311600114620002e757600092620002db575b505060001982851b1c191690851b1782555b8051928311620002c65786548481811c91168015620002bb575b87821014620002a6578581116200025b575b508590858411600114620001f057938394918492600095620001e4575b50501b92600019911b1c19161783555b3315620001a5575060025469d3c21bcecceda1000000928382018092116200019057506000917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9160025533835282815284832084815401905584519384523393a3516108a99081620003f58239f35b601190634e487b7160e01b6000525260246000fd5b90606493519262461bcd60e51b845283015260248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152fd5b01519350388062000110565b9190601f198416928860005284886000209460005b8a8983831062000243575050501062000228575b50505050811b01835562000120565b01519060f884600019921b161c191690553880808062000219565b86860151895590970196948501948893500162000205565b87600052866000208680860160051c8201928987106200029c575b0160051c019085905b8281106200028f575050620000f3565b600081550185906200027f565b9250819262000276565b602288634e487b7160e01b6000525260246000fd5b90607f1690620000e1565b604187634e487b7160e01b6000525260246000fd5b015190503880620000b5565b90879350601f19831691866000528a6000209260005b8c8282106200033757505084116200031e575b505050811b018255620000c7565b015160001983871b60f8161c1916905538808062000310565b8385015186558b97909501949384019301620002fd565b90915084600052886000208880850160051c8201928b86106200039a575b918991869594930160051c01915b8281106200038a5750506200009e565b600081558594508991016200037a565b925081926200036c565b602289634e487b7160e01b6000525260246000fd5b96607f169662000087565b604186634e487b7160e01b6000525260246000fd5b634e487b7160e01b600052604160045260246000fd5b600080fdfe608060408181526004918236101561001657600080fd5b600092833560e01c91826306fdde03146104ad57508163095ea7b31461048357816318160ddd1461046457816323b872dd1461039a578163313ce5671461037e578163395093511461031757816370a08231146102e057816395d89b41146101c1578163a457c2d71461011957508063a9059cbb146100e95763dd62ed3e1461009e57600080fd5b346100e557806003193601126100e557806020926100ba6105d2565b6100c26105ed565b6001600160a01b0391821683526001865283832091168252845220549051908152f35b5080fd5b50346100e557806003193601126100e5576020906101126101086105d2565b6024359033610603565b5160018152f35b905082346101be57826003193601126101be576101346105d2565b918360243592338152600160205281812060018060a01b038616825260205220549082821061016d576020856101128585038733610771565b608490602086519162461bcd60e51b8352820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152fd5b80fd5b8383346100e557816003193601126100e557805190828454600181811c908083169283156102d6575b60209384841081146102c3578388529081156102a75750600114610252575b505050829003601f01601f191682019267ffffffffffffffff84118385101761023f575082918261023b925282610589565b0390f35b634e487b7160e01b815260418552602490fd5b8787529192508591837f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b5b8385106102935750505050830101858080610209565b80548886018301529301928490820161027d565b60ff1916878501525050151560051b8401019050858080610209565b634e487b7160e01b895260228a52602489fd5b91607f16916101ea565b5050346100e55760203660031901126100e55760209181906001600160a01b036103086105d2565b16815280845220549051908152f35b8284346101be57816003193601126101be576103316105d2565b338252600160209081528383206001600160a01b038316845290528282205460243581019290831061036b57602084610112858533610771565b634e487b7160e01b815260118552602490fd5b5050346100e557816003193601126100e5576020905160128152f35b839150346100e55760603660031901126100e5576103b66105d2565b6103be6105ed565b91846044359460018060a01b0384168152600160205281812033825260205220549060001982036103f8575b602086610112878787610603565b84821061042157509183916104166020969561011295033383610771565b9193948193506103ea565b606490602087519162461bcd60e51b8352820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152fd5b5050346100e557816003193601126100e5576020906002549051908152f35b5050346100e557806003193601126100e5576020906101126104a36105d2565b6024359033610771565b8490843461058557826003193601126105855782600354600181811c9080831692831561057b575b60209384841081146102c3578388529081156102a7575060011461052557505050829003601f01601f191682019267ffffffffffffffff84118385101761023f575082918261023b925282610589565b600387529192508591837fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b5b8385106105675750505050830101858080610209565b805488860183015293019284908201610551565b91607f16916104d5565b8280fd5b6020808252825181830181905290939260005b8281106105be57505060409293506000838284010152601f8019910116010190565b81810186015184820160400152850161059c565b600435906001600160a01b03821682036105e857565b600080fd5b602435906001600160a01b03821682036105e857565b6001600160a01b0390811691821561071e57169182156106cd5760008281528060205260408120549180831061067957604082827fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef958760209652828652038282205586815220818154019055604051908152a3565b60405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608490fd5b60405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608490fd5b60405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608490fd5b6001600160a01b0390811691821561082257169182156107d25760207f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925918360005260018252604060002085600052825280604060002055604051908152a3565b60405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608490fd5b60405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608490fdfea26469706673582212209dd97c8ea122151617a70a969f2af1b38d4bfdcb61183a6cc6b296a6afbc979464736f6c63430008110033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Approval";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Transfer";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }];
        readonly name: "allowance";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "approve";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "balanceOf";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "decimals";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "subtractedValue";
            readonly type: "uint256";
        }];
        readonly name: "decreaseAllowance";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "addedValue";
            readonly type: "uint256";
        }];
        readonly name: "increaseAllowance";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "name";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "symbol";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "totalSupply";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "transfer";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "transferFrom";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): PaymentTokenInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): PaymentToken;
}
export {};
