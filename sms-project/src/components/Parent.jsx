import React from "react";
import Child from "./Child";

const Parent = (props) => {
  console.log("Parent", props);

  return (
    <div>
      <Child data={props.gift} />
    </div>
  );
};

export default Parent;
