import React from "react";

const Home = () => {
  let handleClick = () => {
    alert("you are getting a call");
  };
  let add = (a, b) => {
    alert(a + b);
  };
  let userDetails = (name, age) => {
    alert(`user name is ${name} and age is ${age}`);
  };
  let hi = () => {
    alert("hi");
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    alert("form submitted");
  };
  return (
    <div className="homeContainer">
      <header>
        <button onClick={handleClick}>call me</button>
        <button onClick={() => add(30, 20)}>add</button>
        <button onClick={() => userDetails("naveen", 25)}>user details</button>
        <button onDoubleClick={hi}>dbl click me</button>
      </header>
      <h1>Home Page</h1>
      <form action="" onSubmit={handleSubmit}>
        <button>register</button>
      </form>
    </div>
  );
};

export default Home;
