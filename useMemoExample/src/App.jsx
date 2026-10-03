import React, { useState } from "react";
import Hello from "./component/Hello";

const App = () => {
  let [count, setCount] = useState(0);
  let [dark, setDark] = useState(false);
  function increaseCount() {
    setCount((prevCount) => prevCount + 1);
  }
  function decreaseCount() {
    setCount((prevCount) => prevCount + 1);
  }
  function resetCount() {
    setCount(0);
  }
  function darkfunc() {
    setDark((prev) => !prev);
  }
  return (
    <div>
      <h1>Count:{count}</h1>
      <div className="btns">
        <button onClick={increaseCount}>increase</button>
        <button onClick={decreaseCount}>decrease</button>
        <button onClick={resetCount}>reset</button>
        <button onClick={darkfunc}>{dark ? "light" : "dark"}</button>
      </div>
      <Hello />
    </div>
  );
};

export default App;
