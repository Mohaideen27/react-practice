import React from "react";
import { useEffect, useState } from "react";
import { data } from "react-router-dom";
const Products = () => {
  const [items, setItems] = useState([]);
  let fetchData = async () => {
    let res = await fetch("https://dummyjson.com/products");
    let data = await res.json();
    console.log(data.products);

    console.log(data.products[0].images[0])
    setItems(data.products);


  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h2>Products</h2>
      <div className="products">
        {
        items.length>0?
        {items.map((item) => (
          <div className="cards" key={item.id}>
            <img src={item.images[0]} alt="" />
            <ul>
              <li>{item.title}</li>
              <li>{item.brand}</li>
              <li>{item.category}</li>
              <li>{item.description}</li>
            </ul>
          </div>
        ))}: <h1>No data Found</h1>}
      </div>
    </div>
  );
};

export default Products;
