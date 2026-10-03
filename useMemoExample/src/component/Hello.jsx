import React from "react";

const Hello = () => {
  console.log("Hello Component");
  return (
    <div>
      <h1>Hello, World</h1>
    </div>
  );
};

export default React.memo(Hello);
