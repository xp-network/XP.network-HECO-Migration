"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XPNftHtsClaims__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "xpNftHts_",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "token",
                type: "address",
            },
            {
                indexed: true,
                internalType: "int64",
                name: "serial",
                type: "int64",
            },
        ],
        name: "ClaimCreated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "token",
                type: "address",
            },
            {
                indexed: true,
                internalType: "int64",
                name: "serial",
                type: "int64",
            },
        ],
        name: "ClaimRemoved",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "address",
                name: "token",
                type: "address",
            },
            {
                internalType: "int64",
                name: "serial",
                type: "int64",
            },
        ],
        name: "addClaimRecord",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "data",
                type: "uint256",
            },
        ],
        name: "decodeHts",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "int64",
                name: "",
                type: "int64",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                internalType: "address",
                name: "token",
                type: "address",
            },
            {
                internalType: "int64",
                name: "serialNum",
                type: "int64",
            },
        ],
        name: "getClaimRecord",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "claimer",
                type: "address",
            },
            {
                internalType: "address",
                name: "token",
                type: "address",
            },
        ],
        name: "getClaimableNfts",
        outputs: [
            {
                internalType: "uint256[]",
                name: "",
                type: "uint256[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "xpNftHts",
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
];
const _bytecode = "0x60803461007457601f6107d138819003918201601f19168301916001600160401b038311848410176100795780849260209460405283398101031261007457516001600160a01b0381169081900361007457600180546001600160a01b03191691909117905560405161074190816100908239f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe604060808152600436101561001357600080fd5b600090813560e01c806303b570aa146102e25780630b5d6cab1461018a5780630e44263a1461013157806313b87c73146100ab576328dafa731461005657600080fd5b346100a757817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100a75760209073ffffffffffffffffffffffffffffffffffffffff600154169051908152f35b5080fd5b50346100a757610109906100be366103d4565b93909273ffffffffffffffffffffffffffffffffffffffff80936100e782600154163314610443565b16928387528660205281872094169384875260205285209360070b809461067f565b507f44b4992efa0f4a2ef0ab6c12e382a8912e85b95be1d0c1ef675f3ec8eb4c072f8480a480f35b5090346101875760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261018757506004356bffffffffffffffffffffffff8251918060601c83521660070b6020820152f35b80fd5b50903461018757817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610187576004359073ffffffffffffffffffffffffffffffffffffffff918281168091036100a7576024359283168093036100a75781526020918183528382209082528252828120918351918280938386549182815201908196845284842090845b868282106102cb575050505003601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01683019467ffffffffffffffff86118487101761029e5785815282865292518583018190528594938501939290915b82811061028757505050500390f35b835185528695509381019392810192600101610278565b6024827f4e487b710000000000000000000000000000000000000000000000000000000081526041600452fd5b835485528895509093019260019283019201610218565b50346100a7576102f1366103d4565b90919273ffffffffffffffffffffffffffffffffffffffff809461031a82600154163314610443565b16938486528560205281862093169283865260205261034681862067ffffffffffffffff8416906104ef565b15610377575060070b917fb07fa4a51e7b16a069203e783265a3ef2a613ec877f5c502ffd9694079204ac18480a480f35b606490517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f43616e6e6f7420636c61696d2074686973206e667400000000000000000000006044820152fd5b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc606091011261043e5773ffffffffffffffffffffffffffffffffffffffff90600435828116810361043e5791602435908116810361043e57906044358060070b810361043e5790565b600080fd5b1561044a57565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f496e76616c69642053656e6465720000000000000000000000000000000000006044820152fd5b80548210156104c05760005260206000200190600090565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600182019060009281845282602052604084205490811515600014610678577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9182810181811161064b5782549084820191821161061e578082036105b2575b505050805480156105855782019161056883836104a8565b909182549160031b1b191690555582526020526040812055600190565b6024867f4e487b710000000000000000000000000000000000000000000000000000000081526031600452fd5b6106096105c26105d293866104a8565b90549060031b1c928392866104a8565b819391549060031b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811b9283911b169119161790565b90558652846020526040862055388080610550565b6024887f4e487b710000000000000000000000000000000000000000000000000000000081526011600452fd5b6024877f4e487b710000000000000000000000000000000000000000000000000000000081526011600452fd5b5050505090565b9190600183016000908282528060205260408220541560001461070557845494680100000000000000008610156106d857836106c86105d2886001604098999a018555846104a8565b9055549382526020522055600190565b6024837f4e487b710000000000000000000000000000000000000000000000000000000081526041600452fd5b5092505056fea2646970667358221220f7854bf719474c09798e468ae9b7c63fad2a21cced0aa9125b255c1f7a36bfba64736f6c63430008110033";
const isSuperArgs = (xs) => xs.length > 1;
class XPNftHtsClaims__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(xpNftHts_, overrides) {
        return super.deploy(xpNftHts_, overrides || {});
    }
    getDeployTransaction(xpNftHts_, overrides) {
        return super.getDeployTransaction(xpNftHts_, overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.XPNftHtsClaims__factory = XPNftHtsClaims__factory;
XPNftHtsClaims__factory.bytecode = _bytecode;
XPNftHtsClaims__factory.abi = _abi;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiWFBOZnRIdHNDbGFpbXNfX2ZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZmFjdG9yaWVzL1hQTmZ0SHRzQ2xhaW1zX19mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLCtDQUErQztBQUMvQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG1DQUE2RTtBQVE3RSxNQUFNLElBQUksR0FBRztJQUNYO1FBQ0UsTUFBTSxFQUFFO1lBQ047Z0JBQ0UsWUFBWSxFQUFFLFNBQVM7Z0JBQ3ZCLElBQUksRUFBRSxXQUFXO2dCQUNqQixJQUFJLEVBQUUsU0FBUzthQUNoQjtTQUNGO1FBQ0QsZUFBZSxFQUFFLFlBQVk7UUFDN0IsSUFBSSxFQUFFLGFBQWE7S0FDcEI7SUFDRDtRQUNFLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLE1BQU0sRUFBRTtZQUNOO2dCQUNFLE9BQU8sRUFBRSxJQUFJO2dCQUNiLFlBQVksRUFBRSxTQUFTO2dCQUN2QixJQUFJLEVBQUUsSUFBSTtnQkFDVixJQUFJLEVBQUUsU0FBUzthQUNoQjtZQUNEO2dCQUNFLE9BQU8sRUFBRSxJQUFJO2dCQUNiLFlBQVksRUFBRSxTQUFTO2dCQUN2QixJQUFJLEVBQUUsT0FBTztnQkFDYixJQUFJLEVBQUUsU0FBUzthQUNoQjtZQUNEO2dCQUNFLE9BQU8sRUFBRSxJQUFJO2dCQUNiLFlBQVksRUFBRSxPQUFPO2dCQUNyQixJQUFJLEVBQUUsUUFBUTtnQkFDZCxJQUFJLEVBQUUsT0FBTzthQUNkO1NBQ0Y7UUFDRCxJQUFJLEVBQUUsY0FBYztRQUNwQixJQUFJLEVBQUUsT0FBTztLQUNkO0lBQ0Q7UUFDRSxTQUFTLEVBQUUsS0FBSztRQUNoQixNQUFNLEVBQUU7WUFDTjtnQkFDRSxPQUFPLEVBQUUsSUFBSTtnQkFDYixZQUFZLEVBQUUsU0FBUztnQkFDdkIsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsSUFBSSxFQUFFLFNBQVM7YUFDaEI7WUFDRDtnQkFDRSxP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