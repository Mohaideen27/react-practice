import React from "react";
import GrandChild from "./GrandChild";

const Child = (props) => {
  return (
    <div>
      <GrandChild data={props.data} />
    </div>
  );
};

export default Child;
