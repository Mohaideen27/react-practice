import React from "react";

const Child = () => {
  console.log("Child is rendering");
  return (
    <div>
      <h1>This is Child component</h1>
    </div>
  );
};

export default React.memo(Child);
