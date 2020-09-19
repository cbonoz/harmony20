import React from "react";
import "./App.css";
import Home from "./components/Home";

import logo from "./assets/recycloan.png";
import "bulma/css/bulma.css";

function App() {
  return (
    <div className="App">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <img src={logo} alt="Recycloan" height="60" />
          </a>

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

      <Home />
    </div>
  );
}

export default App;
