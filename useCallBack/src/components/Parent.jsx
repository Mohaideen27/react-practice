import React, { useCallback, useState } from "react";
import Child from "./Child";

const Parent = () => {
  let [count, setCount] = useState(0);
  function increase() {
    setCount((pre) => pre + 1);
  }
  console.log("Parent is rendering");
  let add = useCallback(() => {
    console.log("Add function");
  }, []);
  return (
    <div>
      <h2>This is parent component</h2>
      <h4>{count}</h4>
      <button onClick={increase}>increase</button>
      <Child product={"laptop"} price={40000} add={add} />
    </div>
  );
};

export default Parent;
