// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;
contract Storage2 {
    bool previous = false;
    uint256 currentIndex = 100;
    string currentProposal;
    address proposer;
    uint256 requiredVotes;
    uint256 forVoterNum;
    uint256 noVoterNum;
    mapping(address => bool) private voted;

    string public name;
    mapping(address => bool) private editor;
    address[] private voters;
    uint256 totalEditors = 0;
    string [20] scripts;
    address private owner;

    modifier onlyAuthorized() {
        require(isAuthorized(msg.sender), "Unauthorized access");
        _;
    }

    modifier hasProposals() {
        require(currentIndex != 100, "no proposals available");
        _;
    }

    modifier noProposals() {
        require(currentIndex == 100, "proposals available");
        _;
    }

    modifier notVoted() {
        require(!voted[msg.sender], "already voted!");
        _;
    }

    constructor() {
        owner = msg.sender;
        editor[owner] = true;
        voters.push(msg.sender);
        totalEditors += 1;
    }

    function getContractType() public pure returns (uint){
        return 2;
    }

    function addAuthorizedAddress(address _address) public onlyAuthorized {
        editor[_address] = true;
        voters.push(_address);
        totalEditors += 1;
        if(currentIndex != 100){
            requiredVotes += 1;
        }
    }

    function removeAuthorizedAddress(address _address) public onlyAuthorized {
        editor[_address] = false;
        totalEditors -= 1;
        if((currentIndex != 100) && (voted[_address] == false)){
            requiredVotes -= 1;
        }
    }

    function isAuthorized(address _address) public view returns (bool) {
        return editor[_address];
    }
    
    function changeName(string memory newName) public onlyAuthorized {
        name = newName;
    }

    function getName() public view returns (string memory){
        return name;
    }

    function store(uint256 num, string memory text) public onlyAuthorized noProposals{
        currentIndex = num;
        currentProposal = text;
        proposer = msg.sender;
        requiredVotes = totalEditors;
        forVoterNum = 1;
        voted[msg.sender] = true;
        noVoterNum = 0;
        checkStatus();
    }

    function checkStatus() private {
        uint temp = forVoterNum;
        temp *= 2;
        if(temp >= requiredVotes){
            scripts[currentIndex] = currentProposal;
            currentIndex = 100;
            resetVoted();
            previous = true;
        }
        else if(forVoterNum + noVoterNum == requiredVotes){
            currentIndex = 100;
            resetVoted();
            previous = false;
        }
    }

    function resetVoted() private {
        for(uint256 i = 0; i < voters.length; i += 1){
            voted[voters[i]] = false;
        }
    }

    function voteFor() public onlyAuthorized hasProposals notVoted{
        forVoterNum += 1;
        voted[msg.sender] = true;
        checkStatus();
    }

    function voteNo() public onlyAuthorized hasProposals notVoted{
        noVoterNum += 1;
        voted[msg.sender] = true;
        checkStatus();
    }
    
    function hasVoted(address _address) public view returns (bool){
        return voted[_address];
    }

    function getProposal() public view returns (string memory){
        return currentProposal;
    }

    function getForVotes() public view returns (uint256){
        return forVoterNum;
    }

    function getNoVotes() public view returns (uint256){
        return noVoterNum;
    }

    function getRequiredVotes() public view returns (uint256){
        return requiredVotes;
    }

    function getProposalIndex() public view returns (uint256){
        return currentIndex;
    }

    function getProposer() public view returns (address){
        return proposer;
    }

    function retrieve(uint256 num) public view returns (string memory){
        return scripts[num];
    }
}