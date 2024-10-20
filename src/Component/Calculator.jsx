import { useState } from "react";
import "./Calculator.css";

function Calculator() {
  let [num, setNum] = useState("");
  let [res, setRes] = useState("");

  let handleInput = (val) => {
    if (val === "C"){
      setNum("");
      setRes("");
    }
     else if(val === "="){
      try {
        if (num === "") {
          setRes("Error");
        } else {
          const result = eval(num);
          if (result === Infinity) {
            setRes("Infinity");
          } else if (isNaN(result)) {
            setRes("NaN");
          } else {
            setRes(result);
          }
        }
      } catch {
        setRes("Error");
      }
     }
    else {
        setNum((prev) => prev+""+val)
    };
  };

  return (
    <>
      <h1>React Calculator</h1>
      <input type="text" value={num} />
      <div>{res}</div>
      <br />
      <button onClick={() => handleInput("7")}>7</button>
      <button onClick={() => handleInput("8")}>8</button>
      <button onClick={() => handleInput("9")}>9</button>
      <button onClick={() => handleInput("+")}>+</button>
      <br />
      <button onClick={() => handleInput("4")}>4</button>
      <button onClick={() => handleInput("5")}>5</button>
      <button onClick={() => handleInput("6")}>6</button>
      <button onClick={() => handleInput("-")}>-</button>
      <br />
      <button onClick={() => handleInput("1")}>1</button>
      <button onClick={() => handleInput("2")}>2</button>
      <button onClick={() => handleInput("3")}>3</button>
      <button onClick={() => handleInput("*")}>*</button>
      <br />
      <button onClick={() => handleInput("C")}>C</button>
      <button onClick={() => handleInput("0")}>0</button>
      <button onClick={() => handleInput("=")}>=</button>
      <button onClick={() => handleInput("/")}>/</button>
    </>
  );
}

export default Calculator;
