import React, { createContext } from "react";
import Parent from "./components/Parent";
export let myContext = createContext();
const App = () => {
  let gift = "I am app data";
  let gift2 = "I am also from app data";
  return (
    <myContext.Provider value={gift2}>
      <div>
        <Parent gift={gift} />
      </div>
    </myContext.Provider>
  );
};

export default App;
