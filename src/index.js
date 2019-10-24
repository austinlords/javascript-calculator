import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

function App() {
  let [display, setDisplay] = useState("0");

  return (
    <div id="background">
      <div id="calculator">
        <div id="display">
          <div />
          <div>{display}</div>
        </div>
        <div id="clear" className="key">
          clear
        </div>
        <div id="divide" className="key operations">
          /
        </div>
        <div id="multiply" className="key operations">
          x
        </div>
        <div id="seven" className="key number">
          7
        </div>
        <div id="eight" className="key number">
          8
        </div>
        <div id="nine" className="key number">
          9
        </div>
        <div id="minus" className="key operations">
          -
        </div>
        <div id="four" className="key number">
          4
        </div>
        <div id="five" className="key number">
          5
        </div>
        <div id="six" className="key number">
          6
        </div>
        <div id="plus" className="key operations">
          +
        </div>
        <div id="one" className="key number">
          1
        </div>
        <div id="two" className="key number">
          2
        </div>
        <div id="three" className="key number">
          3
        </div>
        <div id="equals" className="key">
          =
        </div>
        <div id="zero" className="key number">
          0
        </div>
        <div id="decimal" className="key">
          .
        </div>
      </div>
      <h4 className="mt-3">JavaScript Calculator</h4>
      <p>by Austin Lords</p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
