// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;
contract Storage {
    string name;
    string [5] editor;
    string [10] viewer;
    string [20] scripts;

    function exist(string user) private return (bool){
        for (uint i=0; i<5; i++){
            if (editor[i] == user){
                return true;
            }
        }
        return false;
    }
    
    function changeName(string currentUser, string newName) public {
        require(exist(currentUser), "you cannot edit")
        name = newName;
    }
    function getName() public view returns (string){
        return name;
    }
    function newEditor(string currentUser, string id) public {
        require(exist(id) == false, "user is already an editor");
        require(editor.length < 6, "editors cannot exceed 5");
        require(exist(currentUser) || editor.length == 0, "you cannot edit");
        editor.push(id); 
    }

    function getEditor(uint256 num) public view returns (string){
        return editor[num];
    }

    function newViewer(string currentUser, string id) public {
        require(exist(currentUser), "you cannot edit");
        require(viewer < 11, "viewers cannot exceed 10");
        viewer.push(id);
    }

    function getViewer(uint256 num) public view returns (string){
        return viewer[num];
    }

    function store(string currentUser, uint256 num, string text) public {
        require(exist(currentUser), "you cannot edit");
        scripts[num] = text;
    }

    function retrieve(uint256 num) public view returns (string){
        return scripts[num];
    }
}