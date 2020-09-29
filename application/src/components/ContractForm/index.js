import React, { useState } from "react";

const INITIAL_STATE = [
  "one1ewd8g24pq6yd5zkj6dm56qfh5ux983y3eqzgkc",
  "one1z6ulhzglx7hrjuguyaqdpujppvycu8lsgqne6e",
];

const ContractForm = ({ onSubmit, isLoading }) => {
  const [addresses, setAddresses] = useState([...INITIAL_STATE]);
  const [amount, setAmount] = useState(null);

  const clear = (e) => {
    e.preventDefault();
    setAddresses([...INITIAL_STATE]);
    setAmount(null);
  };

  const addAddress = () => {
    addresses.push("");
    setAddresses([...addresses]);
  };

  const loadingClasses = isLoading ? `isLoading` : ``;

  return (
    <div>
      <div className="address-inputs">
        <div className="title is-4 clear">Enter addresses:</div>
        <br />
        {addresses.map((addr, i) => {
          return (
            <div key={i}>
              <input
                type="text"
                name="address"
                class="input address-input"
                id="address"
                value={addr}
                onChange={(e) => {
                  addresses[i] = e.target.value;
                  setAddresses([...addresses]);
                }}
              />
            </div>
          );
        })}
        <br />
        <input
          className="button"
          type="button"
          value="Add address"
          onClick={addAddress}
        />
        <br />
        {/* {JSON.stringify(addresses)} */}
      </div>
      <label>Enter amount (ONE)</label>
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
        <button
          className={`${loadingClasses} button is-primary`}
          onClick={() => onSubmit(addresses, amount)}
        >
          Start Loan
        </button>
      </div>
      <div className="field is-grouped is-grouped-right">
        <p className="control">
          <a className="button is-light" onClick={clear}>
            Clear
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContractForm;
