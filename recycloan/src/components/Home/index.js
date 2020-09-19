import React, { Component } from "react";
import ContractForm from "../ContractForm";

import "./Home.css";

export default function Home() {
  const body = () => (
    <div className="home-section container">
      <div className="home-title">Recycloan</div>
      <div className="home-title">A smart contract for automatic loans</div>
      <p className="home-subtitle subtitle is-5">
        Recycloan creates a smart contract that represents a series of loans
        that go out automatically the moment they are paid back.Login and enter
        a list of addresses as well as the initial payment and we'll
        automatically send the funds in order to each address.
      </p>
      <div class="columns container home-container">
        <div class="column">
          <h1 class="title is-2">Who do you want to loan to?</h1>
          <ContractForm />
        </div>
        <div class="column">
          <h1 class="title is-2">Result:</h1>
        </div>
      </div>
    </div>
  );

  return body();
}
