export const ABI2 = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "newName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "newDescription",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "addAuthorizedAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "newName",
				"type": "string"
			}
		],
		"name": "changeName",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "description",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getContractType",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getDescription",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getForVotes",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getName",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getNoVotes",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getProposal",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getProposalIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getProposer",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getRequiredVotes",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "hasVoted",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "isAuthorized",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "removeAuthorizedAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "num",
				"type": "uint256"
			}
		],
		"name": "retrieve",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "newDescription",
				"type": "string"
			}
		],
		"name": "setDescription",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "num",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "text",
				"type": "string"
			}
		],
		"name": "store",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "voteFor",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "voteNo",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

export const byteCode2 = '0x608060405260008060006101000a81548160ff02191690831515021790555060646001556000600c553480156200003557600080fd5b50604051620023f3380380620023f383398181016040528101906200005b919062000354565b33602160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600a6000602160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600b339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600c60008282546200018e919062000412565b925050819055508160089081620001a691906200068e565b508060099081620001b891906200068e565b50505062000775565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200022a82620001df565b810181811067ffffffffffffffff821117156200024c576200024b620001f0565b5b80604052505050565b600062000261620001c1565b90506200026f82826200021f565b919050565b600067ffffffffffffffff821115620002925762000291620001f0565b5b6200029d82620001df565b9050602081019050919050565b60005b83811015620002ca578082015181840152602081019050620002ad565b60008484015250505050565b6000620002ed620002e78462000274565b62000255565b9050828152602081018484840111156200030c576200030b620001da565b5b62000319848285620002aa565b509392505050565b600082601f830112620003395762000338620001d5565b5b81516200034b848260208601620002d6565b91505092915050565b600080604083850312156200036e576200036d620001cb565b5b600083015167ffffffffffffffff8111156200038f576200038e620001d0565b5b6200039d8582860162000321565b925050602083015167ffffffffffffffff811115620003c157620003c0620001d0565b5b620003cf8582860162000321565b9150509250929050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006200041f82620003d9565b91506200042c83620003d9565b9250828201905080821115620004475762000446620003e3565b5b92915050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620004a057607f821691505b602082108103620004b657620004b562000458565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620005207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82620004e1565b6200052c8683620004e1565b95508019841693508086168417925050509392505050565b6000819050919050565b60006200056f620005696200056384620003d9565b62000544565b620003d9565b9050919050565b6000819050919050565b6200058b836200054e565b620005a36200059a8262000576565b848454620004ee565b825550505050565b600090565b620005ba620005ab565b620005c781848462000580565b505050565b5b81811015620005ef57620005e3600082620005b0565b600181019050620005cd565b5050565b601f8211156200063e576200060881620004bc565b6200061384620004d1565b8101602085101562000623578190505b6200063b6200063285620004d1565b830182620005cc565b50505b505050565b600082821c905092915050565b6000620006636000198460080262000643565b1980831691505092915050565b60006200067e838362000650565b9150826002028217905092915050565b62000699826200044d565b67ffffffffffffffff811115620006b557620006b4620001f0565b5b620006c1825462000487565b620006ce828285620005f3565b600060209050601f831160018114620007065760008415620006f1578287015190505b620006fd858262000670565b8655506200076d565b601f1984166200071686620004bc565b60005b82811015620007405784890151825560018201915060208501945060208101905062000719565b868310156200076057848901516200075c601f89168262000650565b8355505b6001600288020188555050505b505050505050565b611c6e80620007856000396000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c806377661829116100b8578063c51a29e01161007c578063c51a29e014610306578063e1ff178a14610324578063e5920ab514610340578063e9790d021461035e578063fe9fbb801461037c578063ffaa3608146103ac57610137565b806377661829146102605780637b788b7f1461027e5780638f88708b1461029c57806390c3f38f146102cc578063b9e2bea0146102e857610137565b806341c12a70116100ff57806341c12a70146101e457806342f1181e146101ee5780635353a2d81461020a57806370712939146102265780637284e4161461024257610137565b806306fdde031461013c57806309eef43e1461015a57806317d7de7c1461018a5780631a092541146101a85780633605b63e146101c6575b600080fd5b6101446103b6565b6040516101519190611207565b60405180910390f35b610174600480360381019061016f919061129b565b610444565b60405161018191906112e3565b60405180910390f35b61019261049a565b60405161019f9190611207565b60405180910390f35b6101b061052c565b6040516101bd9190611207565b60405180910390f35b6101ce6105be565b6040516101db9190611317565b60405180910390f35b6101ec6105c8565b005b6102086004803603810190610203919061129b565b61075e565b005b610224600480360381019061021f9190611467565b6108a3565b005b610240600480360381019061023b919061129b565b6108fe565b005b61024a610a3e565b6040516102579190611207565b60405180910390f35b610268610acc565b6040516102759190611317565b60405180910390f35b610286610ad6565b6040516102939190611317565b60405180910390f35b6102b660048036038101906102b191906114dc565b610ae0565b6040516102c39190611207565b60405180910390f35b6102e660048036038101906102e19190611467565b610b87565b005b6102f0610be2565b6040516102fd9190611207565b60405180910390f35b61030e610c74565b60405161031b9190611317565b60405180910390f35b61033e60048036038101906103399190611509565b610c7d565b005b610348610ddf565b6040516103559190611317565b60405180910390f35b610366610de9565b6040516103739190611574565b60405180910390f35b6103966004803603810190610391919061129b565b610e13565b6040516103a391906112e3565b60405180910390f35b6103b4610e69565b005b600880546103c3906115be565b80601f01602080910402602001604051908101604052809291908181526020018280546103ef906115be565b801561043c5780601f106104115761010080835404028352916020019161043c565b820191906000526020600020905b81548152906001019060200180831161041f57829003601f168201915b505050505081565b6000600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b6060600880546104a9906115be565b80601f01602080910402602001604051908101604052809291908181526020018280546104d5906115be565b80156105225780601f106104f757610100808354040283529160200191610522565b820191906000526020600020905b81548152906001019060200180831161050557829003601f168201915b5050505050905090565b60606009805461053b906115be565b80601f0160208091040260200160405190810160405280929190818152602001828054610567906115be565b80156105b45780601f10610589576101008083540402835291602001916105b4565b820191906000526020600020905b81548152906001019060200180831161059757829003601f168201915b5050505050905090565b6000600554905090565b6105d133610e13565b610610576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106079061163b565b60405180910390fd5b606460015403610655576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161064c906116a7565b60405180910390fd5b600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16156106e2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106d990611713565b60405180910390fd5b6001600660008282546106f59190611762565b925050819055506001600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555061075c610fff565b565b61076733610e13565b6107a6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161079d9061163b565b60405180910390fd5b6001600a60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600b819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600c60008282546108749190611762565b925050819055506064600154146108a0576001600460008282546108989190611762565b925050819055505b50565b6108ac33610e13565b6108eb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108e29061163b565b60405180910390fd5b80600890816108fa9190611942565b5050565b61090733610e13565b610946576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161093d9061163b565b60405180910390fd5b6000600a60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506001600c60008282546109b19190611a14565b92505081905550606460015414158015610a1b575060001515600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515145b15610a3b57600160046000828254610a339190611a14565b925050819055505b50565b60098054610a4b906115be565b80601f0160208091040260200160405190810160405280929190818152602001828054610a77906115be565b8015610ac45780601f10610a9957610100808354040283529160200191610ac4565b820191906000526020600020905b815481529060010190602001808311610aa757829003601f168201915b505050505081565b6000600154905090565b6000600454905090565b6060600d8260148110610af657610af5611a48565b5b018054610b02906115be565b80601f0160208091040260200160405190810160405280929190818152602001828054610b2e906115be565b8015610b7b5780601f10610b5057610100808354040283529160200191610b7b565b820191906000526020600020905b815481529060010190602001808311610b5e57829003601f168201915b50505050509050919050565b610b9033610e13565b610bcf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bc69061163b565b60405180910390fd5b8060099081610bde9190611942565b5050565b606060028054610bf1906115be565b80601f0160208091040260200160405190810160405280929190818152602001828054610c1d906115be565b8015610c6a5780601f10610c3f57610100808354040283529160200191610c6a565b820191906000526020600020905b815481529060010190602001808311610c4d57829003601f168201915b5050505050905090565b60006002905090565b610c8633610e13565b610cc5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cbc9061163b565b60405180910390fd5b606460015414610d0a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d0190611ac3565b60405180910390fd5b816001819055508060029081610d209190611942565b5033600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600c5460048190555060016005819055506001600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506000600681905550610ddb610fff565b5050565b6000600654905090565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600a60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b610e7233610e13565b610eb1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ea89061163b565b60405180910390fd5b606460015403610ef6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610eed906116a7565b60405180910390fd5b600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615610f83576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f7a90611713565b60405180910390fd5b600160056000828254610f969190611762565b925050819055506001600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550610ffd610fff565b565b600060055490506002816110139190611ae3565b90506004548110611073576002600d6001546014811061103657611035611a48565b5b0190816110439190611b50565b5060646001819055506110546110ba565b60016000806101000a81548160ff0219169083151502179055506110b7565b6004546006546005546110869190611762565b036110b657606460018190555061109b6110ba565b60008060006101000a81548160ff0219169083151502179055505b5b50565b60005b600b8054905081101561117457600060076000600b84815481106110e4576110e3611a48565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555060018161116d9190611762565b90506110bd565b50565b600081519050919050565b600082825260208201905092915050565b60005b838110156111b1578082015181840152602081019050611196565b60008484015250505050565b6000601f19601f8301169050919050565b60006111d982611177565b6111e38185611182565b93506111f3818560208601611193565b6111fc816111bd565b840191505092915050565b6000602082019050818103600083015261122181846111ce565b905092915050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006112688261123d565b9050919050565b6112788161125d565b811461128357600080fd5b50565b6000813590506112958161126f565b92915050565b6000602082840312156112b1576112b0611233565b5b60006112bf84828501611286565b91505092915050565b60008115159050919050565b6112dd816112c8565b82525050565b60006020820190506112f860008301846112d4565b92915050565b6000819050919050565b611311816112fe565b82525050565b600060208201905061132c6000830184611308565b92915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611374826111bd565b810181811067ffffffffffffffff821117156113935761139261133c565b5b80604052505050565b60006113a6611229565b90506113b2828261136b565b919050565b600067ffffffffffffffff8211156113d2576113d161133c565b5b6113db826111bd565b9050602081019050919050565b82818337600083830152505050565b600061140a611405846113b7565b61139c565b90508281526020810184848401111561142657611425611337565b5b6114318482856113e8565b509392505050565b600082601f83011261144e5761144d611332565b5b813561145e8482602086016113f7565b91505092915050565b60006020828403121561147d5761147c611233565b5b600082013567ffffffffffffffff81111561149b5761149a611238565b5b6114a784828501611439565b91505092915050565b6114b9816112fe565b81146114c457600080fd5b50565b6000813590506114d6816114b0565b92915050565b6000602082840312156114f2576114f1611233565b5b6000611500848285016114c7565b91505092915050565b600080604083850312156115205761151f611233565b5b600061152e858286016114c7565b925050602083013567ffffffffffffffff81111561154f5761154e611238565b5b61155b85828601611439565b9150509250929050565b61156e8161125d565b82525050565b60006020820190506115896000830184611565565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806115d657607f821691505b6020821081036115e9576115e861158f565b5b50919050565b7f556e617574686f72697a65642061636365737300000000000000000000000000600082015250565b6000611625601383611182565b9150611630826115ef565b602082019050919050565b6000602082019050818103600083015261165481611618565b9050919050565b7f6e6f2070726f706f73616c7320617661696c61626c6500000000000000000000600082015250565b6000611691601683611182565b915061169c8261165b565b602082019050919050565b600060208201905081810360008301526116c081611684565b9050919050565b7f616c726561647920766f74656421000000000000000000000000000000000000600082015250565b60006116fd600e83611182565b9150611708826116c7565b602082019050919050565b6000602082019050818103600083015261172c816116f0565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061176d826112fe565b9150611778836112fe565b92508282019050808211156117905761178f611733565b5b92915050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026117f87fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826117bb565b61180286836117bb565b95508019841693508086168417925050509392505050565b6000819050919050565b600061183f61183a611835846112fe565b61181a565b6112fe565b9050919050565b6000819050919050565b61185983611824565b61186d61186582611846565b8484546117c8565b825550505050565b600090565b611882611875565b61188d818484611850565b505050565b5b818110156118b1576118a660008261187a565b600181019050611893565b5050565b601f8211156118f6576118c781611796565b6118d0846117ab565b810160208510156118df578190505b6118f36118eb856117ab565b830182611892565b50505b505050565b600082821c905092915050565b6000611919600019846008026118fb565b1980831691505092915050565b60006119328383611908565b9150826002028217905092915050565b61194b82611177565b67ffffffffffffffff8111156119645761196361133c565b5b61196e82546115be565b6119798282856118b5565b600060209050601f8311600181146119ac576000841561199a578287015190505b6119a48582611926565b865550611a0c565b601f1984166119ba86611796565b60005b828110156119e2578489015182556001820191506020850194506020810190506119bd565b868310156119ff57848901516119fb601f891682611908565b8355505b6001600288020188555050505b505050505050565b6000611a1f826112fe565b9150611a2a836112fe565b9250828203905081811115611a4257611a41611733565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f70726f706f73616c7320617661696c61626c6500000000000000000000000000600082015250565b6000611aad601383611182565b9150611ab882611a77565b602082019050919050565b60006020820190508181036000830152611adc81611aa0565b9050919050565b6000611aee826112fe565b9150611af9836112fe565b9250828202611b07816112fe565b91508282048414831517611b1e57611b1d611733565b5b5092915050565b600081549050611b34816115be565b9050919050565b60008190508160005260206000209050919050565b818103611b5e575050611c36565b611b6782611b25565b67ffffffffffffffff811115611b8057611b7f61133c565b5b611b8a82546115be565b611b958282856118b5565b6000601f831160018114611bc45760008415611bb2578287015490505b611bbc8582611926565b865550611c2f565b601f198416611bd287611b3b565b9650611bdd86611796565b60005b82811015611c0557848901548255600182019150600185019450602081019050611be0565b86831015611c225784890154611c1e601f891682611908565b8355505b6001600288020188555050505b5050505050505b56fea2646970667358221220fb23b8da3d73091243fa5bb02a103cce3aca90971283875c72794639d124611664736f6c63430008120033'