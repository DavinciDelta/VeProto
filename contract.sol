// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;
contract Storage {
    string public name;
    string public description;
    mapping(address => bool) private editor;
    string [20] scripts;
    address private owner;
    

    modifier onlyAuthorized() {
        require(isAuthorized(msg.sender), "Unauthorized access");
        _;
    }

    constructor(string memory newName, string memory newDescription) {
        owner = msg.sender;
        editor[owner] = true;  
        name = newName;
        description = newDescription;
    }

    function getContractType() public pure returns (uint){
        return 1;
    }

    function getDescription() public view returns (string memory){
        return description;
    }

    function setDescription(string memory newDescription) public onlyAuthorized {
        description = newDescription;
    }

    function addAuthorizedAddress(address _address) public onlyAuthorized {
        editor[_address] = true;
    }

    function removeAuthorizedAddress(address _address) public onlyAuthorized {
        require(editor[_address], "wallet address is not an editor");
        editor[_address] = false;
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

    function store(uint256 num, string memory text) public onlyAuthorized{
        scripts[num] = text;
    }

    function retrieve(uint256 num) public view returns (string memory){
        return scripts[num];
    }
}