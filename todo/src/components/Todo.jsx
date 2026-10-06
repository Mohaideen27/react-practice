import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Todo = () => {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  console.log(item);
  console.log(items);
  function handleClick() {
    let newItem = item.trim();
    if (newItem === "") {
      toast.error("Please add something", {
        autoClose: 800,
      });
      return;
    }
    if (editIndex === null) {
      if (items.includes(newItem)) {
        toast.warning("Item already present", {
          autoClose: 800,
        });
        return;
      }
      setItems([...items, item]);
      toast.success("Item added successfully", {
        autoClose: 800,
      });
    } else {
      let newItems = [...items];
      newItems[editIndex] = newItem;
      setItems(newItems);
      setEditIndex(null);
      toast.success("Item updated successfully", {
        autoClose: 800,
      });
    }
    setItem("");
  }
  function editElement(index) {
    console.log(index);
    setEditIndex(index);
    setItem(items[index]);
  }
  function delElement(index) {
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
                <button onClick={() => editElement(index)}>edit</button>
                <button onClick={() => delElement(index)}>delete</button>
              </div>
            ))
          ) : (
            <h2>No data found</h2>
          )}
        </main>
        <ToastContainer
          position="top-right"
          autoClose={800}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
          draggable
        />
      </div>
    </div>
  );
};

export default Todo;
