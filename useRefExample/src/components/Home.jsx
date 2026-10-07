import React, { useRef, useState } from "react";

const Home = () => {
  const [dark, setDark] = useState(false);
  let a = useRef(20);
  let b = 20;
  let increase = () => {
    console.log(a.current++);
    console.log(b++);
  };
  let h1 = useRef();
  let clr = false;
  let changeClr = () => {
    console.log(h1);
    if (!clr) {
      h1.current.style.color = "red";
      clr = true;
    } else {
      h1.current.style.color = "white";
      clr = false;
    }
  };
  return (
    <div>
      <h1>Home</h1>
      <header>
        <button onClick={increase}>increase</button>
        <button onClick={() => setDark(!dark)}>
          {dark ? "light" : "dark"}
        </button>
      </header>
      <main>
        <h2 ref={h1}>Color change using ref</h2>
        <button onClick={changeClr}>Change</button>
      </main>
    </div>
  );
};

export default Home;
