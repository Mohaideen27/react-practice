import React, { useEffect, useState } from "react";

const Product = () => {
  const [items, setItems] = useState([]);
  let fetchData = async () => {
    let res = await fetch("https://fakestoreapi.com/products");
    let data = await res.json();
    console.log(data);
    setItems(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <main>
      <div className="items">
        {items.map((item) => (
          <div>{item.title}</div>
        ))}
      </div>
    </main>
  );
};

export default Product;
