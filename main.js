import { ABI } from './abi'
const contract = '0x91E70f0d192199363E74FDc5A6549A35CCc67B04'

const connex = new Connex({
  node: 'https://vethor-node-test.vechaindev.com',
  network: 'test'
})

var userlogin = false
var loginbtn = document.querySelector('#login-btn')

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

    const useraddress = certResponse.annex.signer
    document.querySelector('#login-body').className = 'hidden'
    document.querySelector('#dapp-body').classList.remove('hidden')
    document.querySelector('#user-address').innerHTML = useraddress

    userlogin = true
  }
  else {
      alert("Wallet not found");
  }

}

var storebtn = document.querySelector('#set-btn');

storebtn.onclick = async () => {
    if (userlogin) {
        const number = document.querySelector('#set-input').value
        if (number.length > 0) {
            const setABI = ABI.find(({ name }) => name === 'set');

            const clause = connex.thor.account(contract).method(setABI).asClause(number);

            const result = result = await connex.vendor.sign("tx", [clause]).comment("setting number").request();

            alert("transaction done: ", result.txid);

        }
        else {
            alert("Please put in a number");
        }
    }
    else {
        alert("User not logged in");
    }
}

var readbtn = document.querySelector('#read-btn');

readbtn.onclick = async () => {
    const contractNum = document.querySelector('#contract-number');
    const readABI = ABI.find(({ name }) => name === "get");

    contractNum.innerHTML = 'reading';

    const result = await connex.thor.account(contract).method(readABI).call();

    if (result) {
        contractNum.innerHTML = result.decoded[0];
    }
    else {
        contractNum.innerHTML = 'failed to get';
    }
}

