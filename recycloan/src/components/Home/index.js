import React, { Component, useState } from "react";
import ContractForm from "../ContractForm";
import logo from "../../assets/recycloan_white.png";

import "./Home.css";

export default function Home() {
  const [result, setResult] = useState(null);

  const body = () => (
    <div className="home-section container">
      <div className="home-section-header white">
        {/* <div className="home-title">Recycloan</div> */}
        <div className="centered">
          <img src={logo} className="home-section-logo" />
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
          <ContractForm />
        </div>
        <div class="column">
          {result && <h1 class="title is-2">View your result:</h1>}
        </div>
      </div>
    </div>
  );

  return body();
}
