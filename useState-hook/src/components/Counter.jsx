import React from "react";
import { useState } from "react";

const Counter = () => {
  let [num, setNum] = useState(0);
  let increment = () => {
    setNum(num + 1);
  };
  let decrement = () => {
    setNum(num + 1);
  };
  let reset = () => {
    setNum(0);
  };
  return (
    <div>
      <h1>the number is {num}</h1>
      <button onClick={increment}>increase</button>
      <button onClick={decrement}>decrease</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default Counter;
