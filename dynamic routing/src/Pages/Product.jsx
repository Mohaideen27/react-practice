import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Product = () => {
  const [items, setItems] = useState([]);
  let navigate = useNavigate();
  let fetchData = async () => {
    let res = await fetch("https://fakestoreapi.com/products");
    let data = await res.json();
    // console.log(data);
    setItems(data);
  };
  let handleClick = (id) => {
    console.log(id);
    navigate(`/Product/${id}`);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <main>
      {items.map((item) => (
        <div className="card" key={item.id}>
          <p>{item.title}</p>
          <p>{item.price}</p>
          <button onClick={() => handleClick(item.id)}>More info</button>
        </div>
      ))}
    </main>
  );
};

export default Product;
