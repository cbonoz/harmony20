pragma solidity >=0.4.21 <0.6.0;

contract Recycloan {
    address public manager;
    address payable[] public borrowers;
    uint public amount;
    
    constructor() public {
        manager = msg.sender;
    }
   
    function getBorrowers() public view returns(address payable[] memory) {
        return borrowers;
    }

    /**
     * @dev The player enters into the current lottery session by
     *      paying at least 0.1 token.
     */
    function startLoan(address[] _borrowers, uint _amount) {
        require(msg.value > .1 ether, INSUFFICIENT_FUND_MESSAGE);
        borrowers = _borrowers;
        amount = _amount;
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