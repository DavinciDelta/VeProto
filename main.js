import { ABI } from './abi'
import dataJson from './data.json'
const contract = '0x1d270c0c82c215e4b0ceae5b68a7daf4f049a7f8'

const connex = new Connex({
  node: 'https://vethor-node-test.vechaindev.com',
  network: 'test'
})

var userlogin = false
var loginbtn = document.querySelector('#login-btn')
var useraddress

loginbtn.onclick = async () => {

  const message = {
    purpose: "identification",
    payload: {
      type: "text",
      content: "Sign this a certificate to prove your identity",
    },
  }

  const certResponse = await connex.vendor.sign("cert", message).request()
  if (certResponse) {

    useraddress = certResponse.annex.signer
    document.querySelector('#login-body').className = 'hidden'
    document.querySelector('#dapp-body').classList.remove('hidden')
    document.querySelector('#user-address').innerHTML = useraddress
    document.querySelector('#count-details').innerHTML = dataJson.count
    document.querySelector('#user-details').innerHTML = dataJson.txs[0].txID
    userlogin = true
  }
  else {
      alert("Wallet not found");
  }

}

var setNamebtn = document.querySelector('#setName-btn');

setNamebtn.onclick = async () => {
    if (userlogin) {
        const tempName = document.querySelector('#setName-input').value
        if (tempName.length > 0) {
            const setNameABI = ABI.find(({ name }) => name === 'changeName');

            const clause = connex.thor.account(contract).method(setNameABI).asClause(tempName);
            const result = await connex.vendor.sign("tx", [clause]).comment("setting name").request();
            alert("transaction done: ", result.txid);

        }
        else {
            alert("Please put in a name");
        }
    }
    else {
        alert("User not logged in");
    }
}

var setEditorbtn = document.querySelector('#setEditor-btn');

setEditorbtn.onclick = async () => {
    if (userlogin) {
        const tempAddress = document.querySelector('#setEditor-input').value
        if (tempAddress.length > 0) {
            const setEditorABI = ABI.find(({ name }) => name === 'addAuthorizedAddress');

            const clause = connex.thor.account(contract).method(setEditorABI).asClause(tempAddress);
            const result = await connex.vendor.sign("tx", [clause]).comment("setting editor").request();
            alert("transaction done: ", result.txid);

        }
        else {
            alert("Please put in a address");
        }
    }
    else {
        alert("User not logged in");
    }
}

var writebtn = document.querySelector('#write-btn');

writebtn.onclick = async () => {
    if (userlogin) {
        const tempInfo = document.querySelector('#write-input').value
        const tempNumber = document.querySelector('#number-input').value
        if (tempInfo.length > 0) {
            if(tempNumber.length > 0){
                const writeABI = ABI.find(({ name }) => name === 'store');

                const clause = connex.thor.account(contract).method(writeABI).asClause(tempNumber, tempInfo);
                const result = await connex.vendor.sign("tx", [clause]).comment("writing info").request();
                alert("transaction done: ", result.txid);
            }
            else{
              alert("Enter the Paragraph number")
            }

        }
        else {
            alert("Write something into the paragraph");
        }
    }
    else {
        alert("User not logged in");
    }
}

var reloadbtn = document.querySelector('#reload-btn');

reloadbtn.onclick = async () => {
    const currentIndex = document.querySelector('#currentIndex');
    const currentProposal = document.querySelector('#currentProposal');
    const currentProposer = document.querySelector('#currentProposer');
    const yesVotes = document.querySelector('#yesVotes');
    const noVotes = document.querySelector('#noVotes');
    const requiredVotes = document.querySelector('#requiredVotes');
    const checkVoted = document.querySelector('#checkVoted');
    

    const indexABI = ABI.find(({ name }) => name === "getProposalIndex");
    const contentABI = ABI.find(({ name }) => name === "getProposal");
    const proposerABI = ABI.find(({ name }) => name === "getProposer");
    const yesABI = ABI.find(({ name }) => name === "getForVotes");
    const noABI = ABI.find(({ name }) => name === "getNoVotes");
    const requiredABI = ABI.find(({ name }) => name === "getRequiredVotes");
    const checkVotedABI = ABI.find(({ name }) => name === "hasVoted");
    currentIndex.innerHTML = 'reading';

    const result1 = await connex.thor.account(contract).method(indexABI).call();
    const result2 = await connex.thor.account(contract).method(contentABI).call();
    const result3 = await connex.thor.account(contract).method(proposerABI).call();
    const yesResult = await connex.thor.account(contract).method(yesABI).call();
    const noResult = await connex.thor.account(contract).method(noABI).call();
    const reqResult = await connex.thor.account(contract).method(requiredABI).call();
    const checkVoteResult = await connex.thor.account(contract).method(checkVotedABI).call(useraddress);

    if (result1) {
        currentIndex.innerHTML = result1.decoded[0];
    }
    else{
        currentIndex.innerHTML = "failed to get";
    }
    if(result2){
        currentProposal.innerHTML = result2.decoded[0];
    }
    else{
        currentProposal.innerHTML = "failed to get";
    }
    if (yesResult) {
        yesVotes.innerHTML = yesResult.decoded[0];
    }
    else{
        yesVotes.innerHTML = "failed to get";
    }
    if (noResult) {
        noVotes.innerHTML = noResult.decoded[0];
    }
    else{
        noVotes.innerHTML = "failed to get";
    }
    if (reqResult) {
        requiredVotes.innerHTML = reqResult.decoded[0];
    }
    else{
        requiredVotes.innerHTML = "failed to get";
    }
    if (checkVoteResult) {
        checkVoted.innerHTML = checkVoteResult.decoded[0];
    }
    else{
        checkVoted.innerHTML = "failed to get";
    }
    if(result3){
        currentProposer.innerHTML = result3.decoded[0];
    }
    else{
        currentProposer.innerHTML = "failed to get";
    }
    
  
    
}

var yesbtn = document.querySelector('#yes-btn');

yesbtn.onclick = async () => {
    const current = document.querySelector('#yesVotes');
    const voteYesABI = ABI.find(({ name }) => name === "voteFor");

    current.innerHTML = 'updating';

    const result = await connex.thor.account(contract).method(voteYesABI).call();

    if (result) {
      current.innerHTML = 'vote successful';
      const yesABI = ABI.find(({ name }) => name === "getForVotes");
      const yesResult = await connex.thor.account(contract).method(yesABI).call();
      if (yesResult) {
        current.innerHTML = yesResult.decoded[0];
      }
    }
    else {
      current.innerHTML = 'failed to get';
    }
}

var nobtn = document.querySelector('#no-btn');

nobtn.onclick = async () => {
    const current = document.querySelector('#noVotes');
    const voteNoABI = ABI.find(({ name }) => name === "voteNo");

    current.innerHTML = 'updating';

    const result = await connex.thor.account(contract).method(voteNoABI).call();

    if (result) {
      current.innerHTML = 'vote successful';
      const noABI = ABI.find(({ name }) => name === "getNoVotes");
      const noResult = await connex.thor.account(contract).method(noABI).call();
      if (noResult) {
          current.innerHTML = noResult.decoded[0];
      }
    }
    else {
      current.innerHTML = 'failed to get';
    }
}

var getNamebtn = document.querySelector('#getName-btn');

getNamebtn.onclick = async () => {
    const current = document.querySelector('#getName');
    const getNameABI = ABI.find(({ name }) => name === "getName");

    current.innerHTML = 'reading';

    const result = await connex.thor.account(contract).method(getNameABI).call();

    if (result) {
      current.innerHTML = result.decoded[0];
    }
    else {
      current.innerHTML = 'failed to get';
    }
}

var readbtn = document.querySelector('#read-btn');

readbtn.onclick = async () => {
    const current = document.querySelector('#read');
    const readABI = ABI.find(({ name }) => name === "retrieve");

    current.innerHTML = 'reading';

    const result = await connex.thor.account(contract).method(readABI).call(0);
    const result2 = await connex.thor.account(contract).method(readABI).call(1);
    if (result) {
        current.innerHTML = result.decoded[0];
        if(result2){
          current.innerHTML += "<br/>" + result2.decoded[0];
        }
    }
    else{
        current.innerHTML = "failed to get";
    }
    
}

var getEditorbtn = document.querySelector('#getEditor-btn');

getEditorbtn.onclick = async () => {
    const current = document.querySelector('#getEditor');
    const getEditorABI = ABI.find(({ name }) => name === "isAuthorized");

    current.innerHTML = 'reading';

    const result = await connex.thor.account(contract).method(getEditorABI).call(useraddress);

    if (result) {
      current.innerHTML = result.decoded[0];
    }
    else {
      current.innerHTML = 'he is not an editor';
    }
}

var createbtn = document.querySelector('#create-btn');

createbtn.onclick = async () => {
    if (userlogin) {
        const contractNum = document.querySelector('#contract-number');
        const contractByteCode = '0x608060405234801561001057600080fd5b5033601660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001806000601660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550610e30806100da6000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063707129391161005b57806370712939146101015780638f88708b1461011d578063e1ff178a1461014d578063fe9fbb801461016957610088565b806306fdde031461008d57806317d7de7c146100ab57806342f1181e146100c95780635353a2d8146100e5575b600080fd5b610095610199565b6040516100a291906106e1565b60405180910390f35b6100b3610227565b6040516100c091906106e1565b60405180910390f35b6100e360048036038101906100de9190610775565b6102b9565b005b6100ff60048036038101906100fa91906108d7565b61035b565b005b61011b60048036038101906101169190610775565b6103b6565b005b61013760048036038101906101329190610956565b6104e5565b60405161014491906106e1565b60405180910390f35b61016760048036038101906101629190610983565b61058c565b005b610183600480360381019061017e9190610775565b6105fb565b60405161019091906109fa565b60405180910390f35b600080546101a690610a44565b80601f01602080910402602001604051908101604052809291908181526020018280546101d290610a44565b801561021f5780601f106101f45761010080835404028352916020019161021f565b820191906000526020600020905b81548152906001019060200180831161020257829003601f168201915b505050505081565b60606000805461023690610a44565b80601f016020809104026020016040519081016040528092919081815260200182805461026290610a44565b80156102af5780601f10610284576101008083540402835291602001916102af565b820191906000526020600020905b81548152906001019060200180831161029257829003601f168201915b5050505050905090565b6102c2336105fb565b610301576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102f890610ac1565b60405180910390fd5b60018060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b610364336105fb565b6103a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161039a90610ac1565b60405180910390fd5b80600090816103b29190610c8d565b5050565b6103bf336105fb565b6103fe576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103f590610ac1565b60405180910390fd5b600160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1661048a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161048190610dab565b60405180910390fd5b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b6060600282601481106104fb576104fa610dcb565b5b01805461050790610a44565b80601f016020809104026020016040519081016040528092919081815260200182805461053390610a44565b80156105805780601f1061055557610100808354040283529160200191610580565b820191906000526020600020905b81548152906001019060200180831161056357829003601f168201915b50505050509050919050565b610595336105fb565b6105d4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105cb90610ac1565b60405180910390fd5b80600283601481106105e9576105e8610dcb565b5b0190816105f69190610c8d565b505050565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561068b578082015181840152602081019050610670565b60008484015250505050565b6000601f19601f8301169050919050565b60006106b382610651565b6106bd818561065c565b93506106cd81856020860161066d565b6106d681610697565b840191505092915050565b600060208201905081810360008301526106fb81846106a8565b905092915050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061074282610717565b9050919050565b61075281610737565b811461075d57600080fd5b50565b60008135905061076f81610749565b92915050565b60006020828403121561078b5761078a61070d565b5b600061079984828501610760565b91505092915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6107e482610697565b810181811067ffffffffffffffff82111715610803576108026107ac565b5b80604052505050565b6000610816610703565b905061082282826107db565b919050565b600067ffffffffffffffff821115610842576108416107ac565b5b61084b82610697565b9050602081019050919050565b82818337600083830152505050565b600061087a61087584610827565b61080c565b905082815260208101848484011115610896576108956107a7565b5b6108a1848285610858565b509392505050565b600082601f8301126108be576108bd6107a2565b5b81356108ce848260208601610867565b91505092915050565b6000602082840312156108ed576108ec61070d565b5b600082013567ffffffffffffffff81111561090b5761090a610712565b5b610917848285016108a9565b91505092915050565b6000819050919050565b61093381610920565b811461093e57600080fd5b50565b6000813590506109508161092a565b92915050565b60006020828403121561096c5761096b61070d565b5b600061097a84828501610941565b91505092915050565b6000806040838503121561099a5761099961070d565b5b60006109a885828601610941565b925050602083013567ffffffffffffffff8111156109c9576109c8610712565b5b6109d5858286016108a9565b9150509250929050565b60008115159050919050565b6109f4816109df565b82525050565b6000602082019050610a0f60008301846109eb565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610a5c57607f821691505b602082108103610a6f57610a6e610a15565b5b50919050565b7f556e617574686f72697a65642061636365737300000000000000000000000000600082015250565b6000610aab60138361065c565b9150610ab682610a75565b602082019050919050565b60006020820190508181036000830152610ada81610a9e565b9050919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302610b437fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610b06565b610b4d8683610b06565b95508019841693508086168417925050509392505050565b6000819050919050565b6000610b8a610b85610b8084610920565b610b65565b610920565b9050919050565b6000819050919050565b610ba483610b6f565b610bb8610bb082610b91565b848454610b13565b825550505050565b600090565b610bcd610bc0565b610bd8818484610b9b565b505050565b5b81811015610bfc57610bf1600082610bc5565b600181019050610bde565b5050565b601f821115610c4157610c1281610ae1565b610c1b84610af6565b81016020851015610c2a578190505b610c3e610c3685610af6565b830182610bdd565b50505b505050565b600082821c905092915050565b6000610c6460001984600802610c46565b1980831691505092915050565b6000610c7d8383610c53565b9150826002028217905092915050565b610c9682610651565b67ffffffffffffffff811115610caf57610cae6107ac565b5b610cb98254610a44565b610cc4828285610c00565b600060209050601f831160018114610cf75760008415610ce5578287015190505b610cef8582610c71565b865550610d57565b601f198416610d0586610ae1565b60005b82811015610d2d57848901518255600182019150602085019450602081019050610d08565b86831015610d4a5784890151610d46601f891682610c53565b8355505b6001600288020188555050505b505050505050565b7f77616c6c65742061646472657373206973206e6f7420616e20656469746f7200600082015250565b6000610d95601f8361065c565b9150610da082610d5f565b602082019050919050565b60006020820190508181036000830152610dc481610d88565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fdfea2646970667358221220731af19bf2f236f7606c2f5facaf5c1ddb6fb273f27cd575e5960ffddc97ed7e64736f6c63430008120033'
        contractNum.innerHTML = 'processing'
        const resp = await connex.vendor
            .sign('tx', [{ value: 0, data: contractByteCode, to: null }])
            .comment('Deploy contract')
            .request()
        if(resp){
          contractNum.innerHTML = resp.txid;
        }
        else{
          contractNum.innerHTML = 'failed to get';
        }
    }
    else {
        alert("User not logged in");
    }
}