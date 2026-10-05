import React, { useState } from "react";

const Todo = () => {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);
  console.log(item);
  console.log(items);
  function handleClick() {
    if (items.includes(item)) return alert("item already present in list");
    setItems([...items, item]);
    setItem("");
  }
  function editElement(index) {
    console.log(index);
  }
  function delElement() {
    console.log(index);
    let newItems = items.filter((ele, ind) => ind != index);
    setItem(newItems);
  }
  return (
    <div>
      <div className="outer">
        <h1>Todo App</h1>
        <header>
          <input
            type="text"
            placeholder="ender the todo"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
          <button onClick={handleClick}>add</button>
        </header>
        <main>
          {items.length > 0 ? (
            items.map((ele, index) => (
              <div key={index}>
                <div>{ele}</div>
                <button onClick={(index) => editElement}>edit</button>
                <button onClick={delElement}>delete</button>
              </div>
            ))
          ) : (
            <h2>No data found</h2>
          )}
        </main>
      </div>
    </div>
  );
};

export default Todo;
