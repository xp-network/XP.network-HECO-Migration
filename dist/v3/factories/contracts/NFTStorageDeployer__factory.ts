/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  NFTStorageDeployer,
  NFTStorageDeployerInterface,
} from "../../contracts/NFTStorageDeployer";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "collectionAddress",
        type: "address",
      },
    ],
    name: "deployNFT1155Storage",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "collectionAddress",
        type: "address",
      },
    ],
    name: "deployNFT721Storage",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "setOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080806040523461001657610e41908161001c8239f35b600080fdfe6040608081526004908136101561001557600080fd5b600091823560e01c806311d5db80146101ab57806313af40351461012d5780638da5cb5b14610101576399a7ce6d1461004d57600080fd5b346100fd5760203660031901126100fd576001600160a01b0390803582811681036100f9578285541690610082823314610226565b84519261068c8085019185831067ffffffffffffffff8411176100e65750918493916100c79361026986396001600160a01b0391821681529116602082015260400190565b039084f09182156100dd57602093505191168152f35b513d84823e3d90fd5b634e487b7160e01b895260419052602488fd5b8480fd5b8280fd5b505034610129578160031936011261012957905490516001600160a01b039091168152602090f35b5080fd5b5090346100fd5760203660031901126100fd576001600160a01b038235818116939192908490036100f95784549283166101735750506001600160a01b03191617815580f35b906020606492519162461bcd60e51b835282015260126024820152714f776e657220616c7265616479207365742160701b6044820152fd5b50346100fd5760203660031901126100fd576001600160a01b0390803582811681036100f95782855416906101e1823314610226565b8451926105178085019185831067ffffffffffffffff8411176100e65750918493916100c7936108f586396001600160a01b0391821681529116602082015260400190565b1561022d57565b60405162461bcd60e51b815260206004820152601360248201527213db9b1e481bdddb995c8818d85b8818d85b1b606a1b6044820152606490fdfe60803461008b57601f61068c38819003918201601f19168301916001600160401b0383118484101761009057808492604094855283398101031261008b576020610048826100a6565b916001600160a01b0391829161005e91016100a6565b169160018060a01b031992836000541617600055169060015416176001556040516105d190816100bb8239f35b600080fd5b634e487b7160e01b600052604160045260246000fd5b51906001600160a01b038216820361008b5756fe608060409080825260048036101561001657600080fd5b600091823560e01c90816301ffc9a714610383575080636aa003711461035a5780638da5cb5b146103325780639d2d04d1146102a7578063bc197c8114610220578063f23a6e61146101ca5763fead48171461007157600080fd5b346101c65760603660031901126101c657604435926024359180356001600160a01b0380871687036101c1576100ab81875416331461050d565b600154168351627eeac760e11b81523084820152826024820152602081604481855afa9081156101b7579086918891610183575b5010610143578596813b1561013f57868094610110875198899687958694637921219560e11b865230908601610567565b03925af190811561013657506101235750f35b61012c90610407565b6101335780f35b80fd5b513d84823e3d90fd5b8680fd5b835162461bcd60e51b8152602081850152601a602482015279496e73756666696369656e7420746f6b656e2062616c616e636560301b6044820152606490fd5b9150506020813d82116101af575b8161019e60209383610430565b8101031261013f57859051386100df565b3d9150610191565b85513d89823e3d90fd5b600080fd5b5080fd5b509190346101335760a0366003190112610133576101e66103db565b506101ef6103f1565b50608435906001600160401b0382116101335750602092610212913691016104b7565b505163f23a6e6160e01b8152f35b509190346101335760a03660031901126101335761023c6103db565b506102456103f1565b506001600160401b03906044358281116101c6576102669036908601610451565b506064358281116101c65761027e9036908601610451565b506084359182116101335750602092610299913691016104b7565b505163bc197c8160e01b8152f35b509181923461032e578160031936011261032e5782546001600160a01b03906102d3908216331461050d565b6001541690813b15610329578391610309918451958680948193637921219560e11b835260243590803590309033908601610567565b03925af1908115610136575061031d575080f35b61032690610407565b80f35b505050fd5b5050fd5b8284346101c657816003193601126101c657905490516001600160a01b039091168152602090f35b8284346101c657816003193601126101c65760015490516001600160a01b039091168152602090f35b919050346103d75760203660031901126103d7573563ffffffff60e01b81168091036103d75760209250630271189760e51b81149081156103c6575b5015158152f35b6301ffc9a760e01b149050836103bf565b8280fd5b600435906001600160a01b03821682036101c157565b602435906001600160a01b03821682036101c157565b6001600160401b03811161041a57604052565b634e487b7160e01b600052604160045260246000fd5b90601f801991011681019081106001600160401b0382111761041a57604052565b81601f820112156101c1578035916020916001600160401b03841161041a578360051b906040519461048585840187610430565b855283808601928201019283116101c1578301905b8282106104a8575050505090565b8135815290830190830161049a565b81601f820112156101c1578035906001600160401b03821161041a57604051926104eb601f8401601f191660200185610430565b828452602083830101116101c157816000926020809301838601378301015290565b1561051457565b60405162461bcd60e51b815260206004820152602560248201527f4f6e6c7920746865206f776e65722063616e2063616c6c20746869732066756e60448201526431ba34b7b760d91b6064820152608490fd5b929060c0949260018060a01b0380921685521660208401526040830152606082015260a06080820152600060a0820152019056fea26469706673582212204363f44f8267d9d5016aae665da980d06ba7d814fba8dc3f8fb6410672541ebc64736f6c6343000815003360803461008b57601f61051738819003918201601f19168301916001600160401b0383118484101761009057808492604094855283398101031261008b576020610048826100a6565b916001600160a01b0391829161005e91016100a6565b169160018060a01b0319928360005416176000551690600154161760015560405161045c90816100bb8239f35b600080fd5b634e487b7160e01b600052604160045260246000fd5b51906001600160a01b038216820361008b5756fe608060408181526004918236101561001657600080fd5b600092833560e01c918263150b7a02146102e857508382636215be7714610271575081636aa00371146102485781637326afe0146100885750638da5cb5b1461005e57600080fd5b34610084578160031936011261008457905490516001600160a01b039091168152602090f35b5080fd5b839150346100845782600319360112610084578035926100a661039d565b83546001600160a01b039591939190861633036101f75760015483516331a9108f60e11b8152838101839052908716966020826024818b5afa9182156101ed5787926101ad575b5030911603610155578585963b156101515761012294868094865197889586948593632142170760e11b855230908501610404565b03925af190811561014857506101355750f35b61013e906103b8565b6101455780f35b80fd5b513d84823e3d90fd5b8580fd5b506020608492519162461bcd60e51b8352820152602c60248201527f5468697320636f6e7472616374206973206e6f7420746865206f776e6572206f60448201526b33103a3434b9903a37b5b2b760a11b6064820152fd5b9091506020813d82116101e5575b816101c8602093836103e2565b810103126101e1575181811681036101e15790886100ed565b8680fd5b3d91506101bb565b85513d89823e3d90fd5b506020608492519162461bcd60e51b8352820152602560248201527f4f6e6c7920746865206f776e65722063616e2063616c6c20746869732066756e60448201526431ba34b7b760d91b6064820152fd5b50503461008457816003193601126100845760015490516001600160a01b039091168152602090f35b929150346102e45760203660031901126102e4576001546001600160a01b031690813b156102df5783916102bf918451958680948193632142170760e11b8352803590309033908501610404565b03925af190811561014857506102d3575080f35b6102dc906103b8565b80f35b505050fd5b5050fd5b939150346100845760803660031901126100845780356001600160a01b038116036100845761031561039d565b5060643567ffffffffffffffff91828211610399573660238301121561039957818101359283116103865750610355601f8301601f1916602001866103e2565b818552366024838301011161038257906020948160248794018483013701015251630a85bd0160e11b8152f35b8280fd5b634e487b7160e01b845260419052602483fd5b8380fd5b602435906001600160a01b03821682036103b357565b600080fd5b67ffffffffffffffff81116103cc57604052565b634e487b7160e01b600052604160045260246000fd5b90601f8019910116810190811067ffffffffffffffff8211176103cc57604052565b6001600160a01b0391821681529116602082015260408101919091526060019056fea26469706673582212207cd8c5566a27a881787903cf3384fb6b0f264ad8040e382add34e2f23823b00c64736f6c63430008150033a2646970667358221220b08be34cb028f459ed8ce8f6376eebb4cc17edc93ba984d26cc1f06ad258f0b264736f6c63430008150033";

type NFTStorageDeployerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NFTStorageDeployerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NFTStorageDeployer__factory extends ContractFactory {
  constructor(...args: NFTStorageDeployerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<NFTStorageDeployer> {
    return super.deploy(overrides || {}) as Promise<NFTStorageDeployer>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): NFTStorageDeployer {
    return super.attach(address) as NFTStorageDeployer;
  }
  override connect(signer: Signer): NFTStorageDeployer__factory {
    return super.connect(signer) as NFTStorageDeployer__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NFTStorageDeployerInterface {
    return new utils.Interface(_abi) as NFTStorageDeployerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NFTStorageDeployer {
    return new Contract(address, _abi, signerOrProvider) as NFTStorageDeployer;
  }
}
