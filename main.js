import { ABI } from './abi'
const contract = '0x91E70f0d192199363E74FDc5A6549A35CCc67B04'

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

    userlogin = true
  }
  else {
      alert("Wallet not found");
  }

}

var startbtn = document.querySelector('#start-btn');

startbtn.onclick = async () => {
    if (userlogin) {
        const startName = document.querySelector('#start-input').value
        if (startName.length > 0) {
            const startABI = ABI.find(({ name }) => name === 'start');

            const clause = connex.thor.account(contract).method(startABI).asClause(startName);

            const result = await connex.vendor.sign("tx", [clause]).comment("starting").request();

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

var setNamebtn = document.querySelector('#setName-btn');

setNamebtn.onclick = async () => {
    if (userlogin) {
        const tempName = document.querySelector('#setName-input').value
        if (tempName.length > 0) {
            const setNameABI = ABI.find(({ name }) => name === 'changeName');

            const clause = connex.thor.account(contract).method(setNameABI).asClause(useraddress, tempName);
            try{
                const result = await connex.vendor.sign("tx", [clause]).comment("setting name").request();
            } catch (error){
              console.log(error.message);
            }
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

var getEditor = document.querySelector('#getEditor-btn');

getEditor.onclick = async () => {
    const current = document.querySelector('#getEditor');
    const readABI = ABI.find(({ name }) => name === "getEditor");

    current.innerHTML = 'reading';

    const result = await connex.thor.account(contract).method(readABI).asClause(useraddress, 0).call();

    if (result) {
      current.innerHTML = result.decoded[0];
    }
    else {
      current.innerHTML = 'failed to get';
    }
}

var createbtn = document.querySelector('#create-btn');

createbtn.onclick = async () => {
    if (userlogin) {
        const contractNum = document.querySelector('#contract-number');
        const contractByteCode = '0x608060405234801561001057600080fd5b5061017f806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806360fe47b1146100465780636d4ce63c1461006257806373d4a13a14610080575b600080fd5b610060600480360381019061005b91906100f2565b61009e565b005b61006a6100a8565b604051610077919061012e565b60405180910390f35b6100886100b1565b604051610095919061012e565b60405180910390f35b8060008190555050565b60008054905090565b60005481565b600080fd5b6000819050919050565b6100cf816100bc565b81146100da57600080fd5b50565b6000813590506100ec816100c6565b92915050565b600060208284031215610108576101076100b7565b5b6000610116848285016100dd565b91505092915050565b610128816100bc565b82525050565b6000602082019050610143600083018461011f565b9291505056fea2646970667358221220585935f3dc7265825064347de62f05453ab443e230c73c79367a00267affe31964736f6c63430008120033'
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