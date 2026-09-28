import React, { useEffect, useState } from "react";

const App = () => {
  let [count, setCount] = useState(0);
  let [dark, setDark] = useState(true);
  useEffect(() => {
    console.log("useEffect");
    let num = 0;
    let timer = setInterval(() => {
      console.log(num++);
    }, 1000);
    return () => {
      clearInterval(timer);
      console.log("done bro");
    };
  }, []);
  useEffect(() => {
    console.log("count");
  }, [count]);
  useEffect(() => {
    console.log("dark");
  }, [dark]);
  useEffect(() => {
    console.log("one time");
  }, []);
  return (
    <div>
      <h1>UseEffect in reactjs</h1>
      <h2>count is {count}</h2>
      <button onClick={() => setCount(count + 1)}>increase</button>
      <button onClick={() => setDark(!dark)}>{dark ? "light" : "dark"}</button>
    </div>
  );
};

export default App;

// import React, { useEffect } from "react";

// const App = () => {
//   let [count, setCount] = useState(0);
//   useEffect(() => {
//     console.log("i am useEffect 1");
//   });
//   return (
//     <div>
//       <h1>useEffect Example</h1>
//       <h2>count is{count}</h2>
//       <button onClick={() => setCount(count + 1)}>increase</button>
//     </div>
//   );
// };

// export default App;
