pragma solidity >=0.4.21 <0.6.0;

contract Recycloan {
    address public manager;
    address payable[] public borrowers;
    
    constructor() public {
        manager = msg.sender;
    }
    
    function addBorrower() public payable {
        borrowers.push(msg.sender);
    }
    
    function getBorrowers() public view returns(address payable[] memory) {
        return borrowers;
    }
    
    function lendToNextBorrower() public restricted {
        uint index = 0;
        borrowers[index].transfer(address(this).balance);
        borrowers = new address payable[](0);
    }
    
    modifier restricted() {
        require(msg.sender == manager);
        _;
    }
    
} 