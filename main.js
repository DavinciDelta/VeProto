import { ABI1, byteCode1} from './abi1'
const contract = '0x3628b733E9A6b07b86B602Cd2CE73d9E16075E9E'

const connex = new Connex({
  node: 'https://vethor-node-test.vechaindev.com',
  network: 'test'
})

const useraddress = "0x74DA1548fDc9Af05869193e775340192478a6365"

function toHex(input) {
    let hex = '';
    for (let i = 0; i < input.length; i++) {
        hex += input.charCodeAt(i).toString(16).padStart(2, '0');
    }
    return hex;
}

function pad(length) {
    return length.toString(16).padStart(64, '0');
}

function encode(strings) {
    let offsets = '', data = '', headSize = strings.length * 32;

    for (let i = 0; i < strings.length; i++) {
        let hexString = toHex(strings[i]);
        let hexLength = pad(strings[i].length);
        let paddedData = hexString.padEnd(64, '0');
        
        offsets += pad(headSize);
        data += hexLength + paddedData;

        headSize += (32 + Math.ceil(strings[i].length / 32) * 32);
    }

    return offsets + data;
}

var setNamebtn = document.querySelector('#setName-btn');

setNamebtn.onclick = async () => {
    if (userlogin) {
        const tempName = document.querySelector('#setName-input').value
        if (tempName.length > 0) {
            const setNameABI = ABI1.find(({ name }) => name === 'changeName');

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
            const setEditorABI = ABI1.find(({ name }) => name === 'addAuthorizedAddress');

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
                const writeABI = ABI1.find(({ name }) => name === 'store');

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
/*
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
*/
var getNamebtn = document.querySelector('#getName-btn');

getNamebtn.onclick = async () => {
    const current = document.querySelector('#getName');
    const getNameABI = ABI1.find(({ name }) => name === "getName");

    current.innerHTML = 'reading';

    const result = await connex.thor.account(contract).method(getNameABI).call();

    if (result) {
      current.innerHTML = result.decoded[0];
    }
    else {
      current.innerHTML = 'failed to get';
    }
}

var getTypebtn = document.querySelector('#getType-btn');

getTypebtn.onclick = async () => {
    const current = document.querySelector('#getType');
    const getTypeABI = ABI1.find(({ name }) => name === "getContractType");

    current.innerHTML = 'reading';

    const result = await connex.thor.account(contract).method(getTypeABI).call();

    if (result) {
      current.innerHTML = result.decoded[0];
    }
    else {
      current.innerHTML = 'failed to get';
    }
}

var getDesbtn = document.querySelector('#getDes-btn');

getDesbtn.onclick = async () => {
    const current = document.querySelector('#getDes');
    const getDesABI = ABI1.find(({ name }) => name === "getDescription");

    current.innerHTML = 'reading';

    const result = await connex.thor.account(contract).method(getDesABI).call();

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
    const readABI = ABI1.find(({ name }) => name === "retrieve");

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
    const getEditorABI = ABI1.find(({ name }) => name === "isAuthorized");

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
        const strings = ["this is the name", "this is the description"];
        const encodedStrings = encode(strings);
        const finalByteCode = byteCode1 + encodedStrings;
        const contractNum = document.querySelector('#contract-number');
        contractNum.innerHTML = 'processing'
        const resp = await connex.vendor
            .sign('tx', [{ value: 0, data: finalByteCode, to: null}])
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