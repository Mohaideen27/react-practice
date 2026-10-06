import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Todo = () => {
  let [items, setItems] = useState([]);
  let [item, setItem] = useState("");
  let [editIndex, setEditIndex] = useState(null);

  // Add / Update item
  let handleClick = () => {
    let newItem = item.trim();

    // Empty input
    if (newItem === "") {
      toast.error("Please add something", {
        autoClose: 800,
      });
      return;
    }

    // Add item
    if (editIndex === null) {
      // Check duplicate
      if (items.includes(newItem)) {
        toast.warning("Item already present", {
          autoClose: 800,
        });
        return;
      }

      setItems([...items, newItem]);

      toast.success("Item added successfully", {
        autoClose: 800,
      });
    }

    // Update item
    else {
      let newItems = [...items];
      newItems[editIndex] = newItem;

      setItems(newItems);
      setEditIndex(null);

      toast.success("Item updated successfully", {
        autoClose: 800,
      });
    }

    setItem("");
  };

  // Delete item
  let handleDelete = (index) => {
    let newItems = items.filter((ele, ind) => ind !== index);

    setItems(newItems);

    toast.success("Item deleted successfully", {
      autoClose: 800,
    });
  };

  // Edit item
  let handleEdit = (index) => {
    setEditIndex(index);
    setItem(items[index]);

  
  };

  return (
    <div className="outer">

      <h1>Todo App</h1>

      <header>
        <input
          type="text"
          placeholder="Enter"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />

        <button onClick={handleClick}>
          {editIndex === null ? "ADD" : "UPDATE"}
        </button>
      </header>

      <main>
        {items.length > 0 ? (
          items.map((ele, index) => {
            return (
              <li key={index}>
                {ele}

                <button onClick={() => handleEdit(index)}>
                  EDIT
                </button>

                <button onClick={() => handleDelete(index)}>
                  DELETE
                </button>
              </li>
            );
          })
        ) : (
          <h3>No item found</h3>
        )}
      </main>

      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={800}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
      />

    </div>
  );
};

export default Todo;