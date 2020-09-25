import React, { Component, useState, useEffect } from "react";
import ContractForm from "../ContractForm";
import logo from "../../assets/recycloan_white.png";

import "./Home.css";
import { addWallet, harmonyContract, mainWallet } from "../../service/harmony";

export default function Home() {
  const [result, setResult] = useState(null);
  const [privateKey, setPrivateKey] = useState("");
  const [showModal, setShowModal] = useState(true);

  const onSubmit = (addresses, amount) => {
    console.log("submit", addresses, amount);
    console.log("methods", harmonyContract.methods);
    // TODO: invoke contract and set result.
  };

  const logout = () => {
    setPrivateKey("");
    setShowModal(true);
  };

  useEffect(() => {
    if (!showModal) {
      addWallet(privateKey);
      mainWallet.accounts.forEach((addr) => {
        const account = mainWallet.getAccount(addr);
        console.log(account.bech32Address);
        account.getBalance().then((response) => {
          console.log(response);
        });
      });
    }
  }, [showModal]);

  const modalClass = !privateKey || showModal ? "is-active" : "";

  const body = () => (
    <div className="home-section container">
      <div className="home-section-header white">
        {/* <div className="home-title">Recycloan</div> */}
        <div className="centered">
          <img src={logo} className="home-section-logo" />
          <p onClick={logout}>Change Wallet</p>
        </div>
        <div className="home-title">Loans without borders</div>
        <p className="home-subtitle subtitle is-5 white">
          Recycloan creates a smart contract that represents a series of loans
          that go out automatically the moment they are paid back. Login with
          your{" "}
          <a href="https://www.harmony.one/" target="_blank">
            harmony
          </a>{" "}
          account to enter a list of addresses with an initial payment and we'll
          automatically lend the funds in order to each address.
        </p>
      </div>
      <div class="columns container home-container">
        <div class="column">
          <h1 class="title is-2">Who do you want to loan to?</h1>
          <ContractForm onSubmit={onSubmit} />
        </div>
        <div class="column">
          {result && <h1 class="title is-2">View your result:</h1>}
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
            Enter the private key for the wallet you wish to loan from:
            <br />
            <input
              className="input"
              type="text"
              value={privateKey}
              onChange={(e) => setPrivateKey(e.target.value)}
              placeholder="Private Key"
            />
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
