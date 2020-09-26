pragma solidity >=0.4.21 <0.6.0;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

contract Recycloan is ERC20, ERC20Detailed {
    string internal constant INSUFFICIENT_FUND_MESSAGE = "Insufficient Fund";
    string internal constant RESTRICTED_MESSAGE = "Unauthorized Access";

    // uint256 internal constant MIN_DEPOSIT= .1 ether

    address public manager; // The address of the owner of this contract
    address payable[] public borrowers; // The borrowers of current session
    uint public amount

    constructor() public {
        manager = msg.sender;
    }

    /**
     * @dev The player enters into the current lottery session by
     *      paying at least 0.1 token.
     */
    function startLoan(address[] _borrowers, uint _amount) public payable {
        require(msg.value > .1 ether, INSUFFICIENT_FUND_MESSAGE);
        borrowers = _borrowers;
        amount = _amount;
    }

    modifier restricted() {
        require(msg.sender == manager, RESTRICTED_MESSAGE);
        _;
    }

    /**
     * @dev Returns a list of all borrowers in the current session.
     */
    function getBorrowers() public view returns (address payable[] memory) {
        return borrowers;
    }
}
