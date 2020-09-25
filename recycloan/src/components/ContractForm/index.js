import React, { useState } from "react";

const ContractForm = ({ onSubmit }) => {
  const [addresses, setAddresses] = useState();
  const [amount, setAmount] = useState(null);

  return (
    <div>
      <div className="field has-addons has-addons-centered">
        <div className="title is-4 clear">Enter addresses:</div>
        <br />
        <input
          type="text"
          name="address"
          id="address"
          value={addresses}
          onChange={(e) => setAddresses(e.target.value)}
        />
        {/* <input type="button" value="Add address" onClick={addCat} /> */}

        {/* {TODO} */}
      </div>
      <div className="field has-addons has-addons-centered">
        <p className="control">
          <img src="https://assets.coingecko.com/coins/images/4344/small/Y88JAze.png?1565065793" />
        </p>
        <input
          className="input"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount of Harmony (ONE) to lend"
        />
        <p className="control">
          <a
            className="button is-primary"
            onClick={() => onSubmit(addresses, amount)}
          >
            Start Loan
          </a>
        </p>
      </div>
      <div className="field is-grouped is-grouped-right">
        <p className="control">
          <a className="button is-light">Clear</a>
        </p>
      </div>
    </div>
  );
};

export default ContractForm;
