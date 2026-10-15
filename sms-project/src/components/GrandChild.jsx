import React from "react";
import { useContext } from "react";
import { myContext } from "../App";
const GrandChild = (props) => {
  let data = useContext(myContext);
  return (
    <div>
      GrandChild {props.data}
      <h1>{data}</h1>
    </div>
  );
};

export default GrandChild;
