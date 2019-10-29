import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

function App() {
  let [display, setDisplay] = useState("0");

  function calculate(arr) {
    const answer = [...arr].reduce((acc, el, idx, src) => {
      switch (el) {
        case "-":
          return acc - Number(src[idx + 1]);
        case "+":
          return acc + Number(src[idx + 1]);
        case "/":
          return acc / Number(src[idx + 1]);
        case "*":
          return acc * Number(src[idx + 1]);
        default:
          return acc;
      }
    }, parseFloat(arr[0]));
    setDisplay((Math.round(answer * 10000) / 10000).toString());
  }

  function handleClick(event) {
    const value = event.currentTarget.innerText;
    const displayArr = display.split(" ");
    const currentNum = displayArr[displayArr.length - 1];

    switch (value) {
      case "clear":
        setDisplay("0");
        break;
      case "0":
        if (currentNum.length < 2 && currentNum[0] === "0") break;
        setDisplay(display.concat(value));
        break;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        currentNum.length === 1 && currentNum[0] === "0"
          ? setDisplay(display.substring(0, display.length - 1) + value)
          : setDisplay(display.concat(value));
        break;
      case ".":
        currentNum.includes(".")
          ? setDisplay(display)
          : setDisplay(display.concat(value));
        break;
      case "+":
      case "/":
      case "*":
        if (currentNum !== "-") {
          const currentOp = display[display.length - 2];
          currentOp === "+" ||
          currentOp === "*" ||
          currentOp === "/" ||
          currentOp === "-"
            ? setDisplay(display.substring(0, display.length - 2) + `${value} `)
            : setDisplay(`${display} ${value} `);
          break;
        } else {
          setDisplay(display.substring(0, display.length - 3) + `${value} `);
          break;
        }
      case "-":
        if (currentNum === "") {
          setDisplay(`${display}-`);
          break;
        } else if (currentNum === "-") {
          break;
        } else {
          setDisplay(`${display} - `);
          break;
        }
      case "=":
        calculate(displayArr);
        break;
      default:
        console.log("click not recognized: ", value);
    }
  }

  return (
    <div id="background">
      <div id="calculator">
        <div id="display">
          <div />
          <div>{display}</div>
        </div>
        <div id="clear" className="key" onClick={handleClick}>
          clear
        </div>
        <div id="divide" className="key operations" onClick={handleClick}>
          /
        </div>
        <div id="multiply" className="key operations" onClick={handleClick}>
          *
        </div>
        <div id="seven" className="key number" onClick={handleClick}>
          7
        </div>
        <div id="eight" className="key number" onClick={handleClick}>
          8
        </div>
        <div id="nine" className="key number" onClick={handleClick}>
          9
        </div>
        <div id="subtract" className="key operations" onClick={handleClick}>
          -
        </div>
        <div id="four" className="key number" onClick={handleClick}>
          4
        </div>
        <div id="five" className="key number" onClick={handleClick}>
          5
        </div>
        <div id="six" className="key number" onClick={handleClick}>
          6
        </div>
        <div id="add" className="key operations" onClick={handleClick}>
          +
        </div>
        <div id="one" className="key number" onClick={handleClick}>
          1
        </div>
        <div id="two" className="key number" onClick={handleClick}>
          2
        </div>
        <div id="three" className="key number" onClick={handleClick}>
          3
        </div>
        <div id="equals" className="key" onClick={handleClick}>
          =
        </div>
        <div id="zero" className="key number" onClick={handleClick}>
          0
        </div>
        <div id="decimal" className="key" onClick={handleClick}>
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
