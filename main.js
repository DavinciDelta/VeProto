import { ABICombined, byteCodes, contract } from './abicombined';

const connex = new Connex({
  node: 'https://vethor-node-test.vechaindev.com',
  network: 'test'
})

const useraddress = "0x74DA1548fDc9Af05869193e775340192478a6365"

let currentType = 1;

document.getElementById('type1-btn').addEventListener('click', () => {
    document.getElementById("voting").classList.remove("hidden");
    document.getElementById("voting").classList.add("hidden");
    currentType = 1;
});

document.getElementById('type2-btn').addEventListener('click', () => {
    document.getElementById("voting").classList.remove("hidden");
    currentType = 2;
});

document.getElementById('type3-btn').addEventListener('click', () => {
    document.getElementById("voting").classList.remove("hidden");
    currentType = 3;
});

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
            const setNameABI = ABICombined[currentType].find(({ name }) => name === 'changeName');

            const clause = connex.thor.account(contract[currentType]).method(setNameABI).asClause(tempName);
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
    const tempAddress = document.querySelector('#setEditor-input').value
    if (tempAddress.length > 0) {
        const setEditorABI = ABICombined[currentType].find(({ name }) => name === 'addAuthorizedAddress');

        const clause = connex.thor.account(contract[currentType]).method(setEditorABI).asClause(tempAddress);
        const result = await connex.vendor.sign("tx", [clause]).comment("setting editor").request();
        alert("transaction done: ", result.txid);

    }
    else {
        alert("Please put in a address");
    }
}

var writebtn = document.querySelector('#write-btn');

writebtn.onclick = async () => {
    const tempInfo = document.querySelector('#write-input').value
    const tempNumber = document.querySelector('#number-input').value
    if (tempInfo.length > 0) {
        if(tempNumber.length > 0){
            const writeABI = ABICombined[currentType].find(({ name }) => name === 'store');

            const clause = connex.thor.account(contract[currentType]).method(writeABI).asClause(tempNumber, tempInfo);
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

var reloadbtn = document.querySelector('#reload-btn');

reloadbtn.onclick = async () => {
    const currentIndex = document.querySelector('#currentIndex');
    const currentProposal = document.querySelector('#currentProposal');
    const currentProposer = document.querySelector('#currentProposer');
    const yesVotes = document.querySelector('#yesVotes');
    const noVotes = document.querySelector('#noVotes');
    const requiredVotes = document.querySelector('#requiredVotes');
    const checkVoted = document.querySelector('#checkVoted');
    

    const indexABI = ABICombined[currentType].find(({ name }) => name === "getProposalIndex");
    const contentABI = ABICombined[currentType].find(({ name }) => name === "getProposal");
    const proposerABI = ABICombined[currentType].find(({ name }) => name === "getProposer");
    const yesABI = ABICombined[currentType].find(({ name }) => name === "getForVotes");
    const noABI = ABICombined[currentType].find(({ name }) => name === "getNoVotes");
    const requiredABI = ABICombined[currentType].find(({ name }) => name === "getRequiredVotes");
    const checkVotedABI = ABICombined[currentType].find(({ name }) => name === "hasVoted");
    currentIndex.innerHTML = 'reading';

    const result1 = await connex.thor.account(contract[currentType]).method(indexABI).call();
    const result2 = await connex.thor.account(contract[currentType]).method(contentABI).call();
    const result3 = await connex.thor.account(contract[currentType]).method(proposerABI).call();
    const yesResult = await connex.thor.account(contract[currentType]).method(yesABI).call();
    const noResult = await connex.thor.account(contract[currentType]).method(noABI).call();
    const reqResult = await connex.thor.account(contract[currentType]).method(requiredABI).call();
    const checkVoteResult = await connex.thor.account(contract[currentType]).method(checkVotedABI).call(useraddress);

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
    const voteYesABI = ABICombined[currentType].find(({ name }) => name === "voteFor");
    const clause = connex.thor.account(contract[currentType]).method(voteYesABI).asClause();
    current.innerHTML = 'updating';
    const result = await connex.vendor.sign("tx", [clause]).comment("voting yes for this proposal").request();

    if (result) {
      current.innerHTML = 'vote successful';
      const yesABI = ABICombined[currentType].find(({ name }) => name === "getForVotes");
      const yesResult = await connex.thor.account(contract[currentType]).method(yesABI).call();
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
    const voteNoABI = ABICombined[currentType].find(({ name }) => name === "voteNo");

    const clause = connex.thor.account(contract[currentType]).method(voteNoABI).asClause();
    current.innerHTML = 'updating';
    const result = await connex.vendor.sign("tx", [clause]).comment("voting no for this proposal").request();

    if (result) {
      current.innerHTML = 'vote successful';
      const noABI = ABICombined[currentType].find(({ name }) => name === "getNoVotes");
      const noResult = await connex.thor.account(contract[currentType]).method(noABI).call();
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
    const getNameABI = ABICombined[currentType].find(({ name }) => name === "getName");

    current.innerHTML = 'reading';

    const result = await connex.thor.account(contract[currentType]).method(getNameABI).call();

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
    const getTypeABI = ABICombined[currentType].find(({ name }) => name === "getContractType");

    current.innerHTML = 'reading';

    const result = await connex.thor.account(contract[currentType]).method(getTypeABI).call();

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
    const getDesABI = ABICombined[currentType].find(({ name }) => name === "getDescription");

    current.innerHTML = 'reading';

    const result = await connex.thor.account(contract[currentType]).method(getDesABI).call();

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
    const readNumber = document.querySelector('#read-input').value
    const readABI = ABICombined[currentType].find(({ name }) => name === "retrieve");

    current.innerHTML = 'reading';
    if(readNumber){
        const result = await connex.thor.account(contract[currentType]).method(readABI).call(readNumber);
        if (result) {
            current.innerHTML = result.decoded[0];
        }
        else{
            current.innerHTML = "failed to get";
        }
    }
    else{
        alert("Enter the a number")
    }
    
}

var getEditorbtn = document.querySelector('#getEditor-btn');

getEditorbtn.onclick = async () => {
    const current = document.querySelector('#getEditor');
    const getEditorABI = ABICombined[1].find(({ name }) => name === "isAuthorized");

    current.innerHTML = 'reading';

    const result = await connex.thor.account(contract[currentType]).method(getEditorABI).call(useraddress);

    if (result) {
      current.innerHTML = result.decoded[0];
    }
    else {
      current.innerHTML = 'he is not an editor';
    }
}

var createbtn = document.querySelector('#create-btn');

createbtn.onclick = async () => {
    const tempNewName = document.querySelector('#name-input').value
    const tempNewDescription = document.querySelector('#desc-input').value
    const strings = [tempNewName, tempNewDescription];
    const encodedStrings = encode(strings);
    const finalByteCode = byteCodes[currentType] + encodedStrings;
    console.log(finalByteCode);
    const contractNum = document.querySelector('#contract-number');
    contractNum.innerHTML = 'processing'
    const resp = await connex.vendor
        .sign('tx', [{ value: 0, data: finalByteCode, to: null}])
        .comment('Deploy contract type:' + currentType)
        .request()
    if(resp){
        contractNum.innerHTML = '<a href="https://explore-testnet.vechain.org/transactions/' + resp.txid + '#info" target="_blank">' + resp.txid + '</a>';
    }
    else{
        contractNum.innerHTML = 'failed to get';
    }
}