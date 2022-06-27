//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ERC20_ is ERC20{


    constructor()ERC20("lion","lon"){
        _mint(msg.sender,100*10**18);
    }

    function mint(uint256 value)public returns(bool){
        require(msg.sender != address(0),"minted should be at account zero");
        _mint(msg.sender,value*10**18);
        return true;
    }

    function transfer(address to,uint256 value)public override returns(bool){
        transfer(to,value);
    }

}
// pragma solidity ^0.8.9;


// // This is the main building block for smart contracts.
// contract Token {
//     // Some string type variables to identify the token.
//     // The `public` modifier makes a variable readable from outside the contract.
//     string public name = "My Hardhat Token";
//     string public symbol = "MHT";

//     // The fixed amount of tokens stored in an unsigned integer type variable.
//     uint256 public totalSupply = 1000;

//     // An address type variable is used to store ethereum accounts.
//     address public owner;

//     // A mapping is a key/value map. Here we store each account balance.
//     mapping(address => uint256) balances;

//     /**
//      * Contract initialization.
//      *
//      * The `constructor` is executed only once when the contract is created.
//      */
//     constructor() {
//         // The totalSupply is assigned to transaction sender, which is the account
//         // that is deploying the contract.
//         balances[msg.sender] = totalSupply;
//         owner = msg.sender;
//     }

//     /**
//      * A function to transfer tokens.
//      *
//      * The `external` modifier makes a function *only* callable from outside
//      * the contract.
//      */
//     function transfer(address to, uint256 amount) external {
//         // Check if the transaction sender has enough tokens.
//         // If `require`'s first argument evaluates to `false` then the
//         // transaction will revert.
//         require(balances[msg.sender] >= amount, "Not enough tokens");

//         // Transfer the amount.
//         balances[msg.sender] -= amount;
//         balances[to] += amount;
//     }

//     /**
//      * Read only function to retrieve the token balance of a given account.
//      *
//      * The `view` modifier indicates that it doesn't modify the contract's
//      * state, which allows us to call it without executing a transaction.
//      */
//     function balanceOf(address account) external view returns (uint256) {
//         return balances[account];
//     }
// }
// pragma solidity ^0.8.9;

// contract Token {
//     string private name = "MYTOKEN";
//     string private symbol = "MFT";
//     uint256 public totalSupply = 1000;

//     address public owner;

//     mapping(address => uint256) public balance;

//     constructor() {
//         owner = msg.sender;
//         balance[msg.sender] = totalSupply;
//     }

//     function balanceOf(address account) public view returns (uint256) {
//         return balance[account];
//     }

//     function transfer(address to, uint256 val) public {
//         require(val <= balance[msg.sender], "token");

//         balance[msg.sender] -= val;
//         balance[to] += val;
//     }
// }