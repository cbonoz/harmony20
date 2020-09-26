import React, { Component, useState, useEffect } from "react";
import ContractForm from "../ContractForm";
import logo from "../../assets/recycloan_white.png";
import logo_dark from "../../assets/recycloan.png";

import "./Home.css";
import { addWallet, harmonyContract, mainWallet } from "../../service/harmony";
import { hexToNumber } from "@harmony-js/utils";

export default function Home({ setBalances }) {
  const [result, setResult] = useState(null);
  const [privateKey, setPrivateKey] = useState("");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(true);

  const onSubmit = (addresses, amount) => {
    setLoading(true);
    console.log("submit", addresses, amount);
    console.log("methods", harmonyContract.methods);
    // TODO: invoke contract and set result.

    const options1 = { gasPrice: "0x3B9ACA00" }; // gas price in hex corresponds to 1 Gwei or 1000000000
    // setting the default gas limit, but changing later based on estimate gas
    let options2 = { gasPrice: 1000000000, gasLimit: 21000, value: amount };

    // Initiate the loan.
    harmonyContract.methods
      .lend(addresses)
      .estimateGas(options1)
      .then((gas) => {
        const estimatedGas = parseInt(hexToNumber(gas));
        options2 = { ...options2, gasLimit: estimatedGas };
        console.log("calling lend", options2, addresses);
        harmonyContract.methods
          .lend(addresses)
          .send(options2)
          .then((res) => {
            console.log("result", res);
            setResult(res);
            setLoading(false);
          })
          .catch((e) => {
            setLoading(false);
            console.error("err calling contract", e);
            alert(`error calling contract ${e.toString()}`);
          });
      })
      .catch((e) => {
        console.error("err estimating gas", e);
      });
  };

  const logout = () => {
    setPrivateKey("");
    setShowModal(true);
  };

  const loadBalances = () => {
    const balances = {};
    mainWallet.accounts.forEach((addr) => {
      const account = mainWallet.getAccount(addr);
      console.log(account.bech32Address);
      account.getBalance().then((response) => {
        console.log(response);
        balances[account.bech32Address] = response["balance"];
        setBalances(balances);
      });
    });
  };

  useEffect(() => {
    if (!showModal) {
      try {
        addWallet(privateKey);
      } catch (e) {
        alert(`${privateKey} is not a valid private key`);
        setShowModal(true);
        return;
      }

      loadBalances();
    }
  }, [showModal]);

  const modalClass = !privateKey || showModal ? "is-active" : "";

  const headerMessage = () => (
    <span>
      Recycloan creates a smart contract that represents a series of loans that
      go out automatically the moment they are paid back. Login with your{" "}
      <a href="https://www.harmony.one/" target="_blank">
        harmony
      </a>{" "}
      account to enter a list of addresses with an initial payment and we'll
      automatically lend the funds in order to each address.
    </span>
  );

  const body = () => (
    <div className="home-section container">
      <div className="home-section-header white">
        {/* <div className="home-title">Recycloan</div> */}
        <div className="centered">
          <img src={logo} className="home-section-logo" />
          <p onClick={logout}>Change Wallet</p>
        </div>
        <div className="home-title">Loans without borders</div>
        <p className="home-subtitle subtitle is-5 white">{headerMessage()}</p>
      </div>
      <div class="columns container home-container">
        <div class="column">
          <h1 class="title is-2">Who do you want to loan to?</h1>
          <ContractForm onSubmit={onSubmit} isLoading={loading} />
        </div>
        <div class="column">
          {loading && <p><i>Waiting for response...</i></p>}
          {result && (
            <div className="result-section">
              <h1 class="title is-2">View your result:</h1>
              {Object.keys(result.transaction).map((k, i) => {
                return (
                  <li>
                    {k}: {JSON.stringify(result.transaction[k])}
                  </li>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <div class={`modal ${modalClass}`}>
        <div class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">Welcome to Recycloan</p>
            <button class="delete" aria-label="close"></button>
          </header>
          <section class="modal-card-body">
            <img src={logo_dark} className="modal-header-logo centered" />
            <br />
            {headerMessage()}
            <div className="modal-key-input">
              <p>Enter the private key for the wallet you wish to loan from:</p>
              <br />
              <input
                className="input"
                type="text"
                value={privateKey}
                onChange={(e) => setPrivateKey(e.target.value)}
                placeholder="Private Key"
              />
            </div>
          </section>
          <footer class="modal-card-foot">
            <button
              class="button is-success"
              onClick={() => setShowModal(false)}
            >
              Save changes
            </button>
            <button class="button">Cancel</button>
          </footer>
        </div>
      </div>
    </div>
  );

  return body();
}
