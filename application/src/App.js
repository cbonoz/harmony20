import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home";

import logo from "./assets/recycloan.png";
import "bulma/css/bulma.css";

function App() {
  const [balances, setBalances] = useState({});
  const addrs = Object.keys(balances);
  const hasAddrs = addrs.length > 0;
  return (
    <div className="App">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://harmony.one/">
            <img src={logo} alt="Recycloan" height="60" />
          </a>
          {hasAddrs && (
            <span style={{ marginTop: "14px" }}>
              Accounts --- &nbsp;
              {addrs.map((k, i) => {
                return (
                  <span key={k}>
                    <b>{k}</b>: {balances[k]}&nbsp;
                  </span>
                );
              })}
            </span>
          )}

          <a
            role="button"
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      </nav>

      <Home setBalances={setBalances} />
    </div>
  );
}

export default App;
