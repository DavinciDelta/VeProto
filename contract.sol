// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;
contract Storage {
    string public name;
    mapping(address => bool) private editor;
    string [20] scripts;
    address private owner;

    modifier onlyAuthorized() {
        require(isAuthorized(msg.sender), "Unauthorized access");
        _;
    }

    constructor() {
        owner = msg.sender;  // Set the contract creator as the owner
        editor[owner] = true;  // Add the owner to the authorized list
    }

    function addAuthorizedAddress(address _address) public onlyAuthorized {
        editor[_address] = true;
    }

    function removeAuthorizedAddress(address _address) public onlyAuthorized {
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