<p align='center'>
	<img src="./img/recycloan.png"/>
</p>

Recycloan
---


## Inspiration

More than 1.7 billion people around the world are unbanked and can’t access the financial services they need. Recycloan aims to address this by allowing charitable lenders with tools to get resources to those that need them the most and maximize the impact of a loan by automatically relending funds once they are repaid. With crowd sourced micro-loans, students can pay for tuition, women can start businesses, farmers are able to invest in equipment and families can afford needed emergency care. With all transactions taking place on the blockchain, lenders benefit from increased accountability and borrowers can establish credit.

## What it does

Recycloan allows anyone with a Harmony wallet initiate a new loan. The lender selects one or more address of borrowers they wish to lend to and the amount they would like to lend. The funds are immediately transferred to the first account on the list and once repaid, they are transferred to the next until the end of the list is reached at which time the funds are returned to the lender. At any time the lender can add additional borrowers to the end of the list.

Anyone can query a list of borrower addresses as well as the number that have repaid a loan providing borrowers with records of their loan transactions.

## How we built it

Recycload comprises a smart contract on the Harmony mainnet and a web application. The web application is built using React.js and the smart contract is built using Solidity. A loan can be initiated on the Recycload smart contract using the lend function, which establishes a list of borrowers and funds the balance of the contract. The balance is immediately transferred to the first borrower. The repay function allows a borrower to repay the funds they were lent, and once the balance reaches the full amount lent, it is transferred to the next borrower.

## Structure
<pre>
`application`: Client (website) for logging into a harmony wallet and sending a transaction (uses preset mainnet contract address set in `harmony.js`). This project allows lending via the `lend` method of the `Recycloan` smart contract. Interacts using the harmony sdk.
`contract`: Truffle migrations and Recycloan harmony smart contract.
</pre>

## Accomplishments that we're proud of

We were successfully able to deploy a smart contract on the Harmony mainnet and interact with it through out web application using our own Harmony accounts.

**Recycloan deployed smart contract address**

mainnet0:  0xF498DaBf26fC52F727F996C4116e444bC6778452

testnet:      0xf12e5348250772A3A7b05DBF7827a0323f296ab9

## What's next for Recycloan

Next we plan to build a web application for borrowers to interact with our smart contracts to access their transaction records for the purpose of establishing credit history based off a wallet address. The smart contract already includes a means of accessing this information so we simply need to create a UI for querying the records. 
