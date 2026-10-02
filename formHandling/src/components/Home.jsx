import React, { useEffect, useState } from "react";

const Home = () => {
  let [products, setProducts] = useState([]);
  let [search, setSearch] = useState("");
  let fetchData = async () => {
    try {
      let res = await fetch("https://dummyjson.com/products");
      let data = await res.json();
      console.log(data.products);
      setProducts(data.products);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h1>Home</h1>
      <div>
        <h3>Search Text:</h3>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="cardCont">
        {products.length > 0 ? (
          products
            .filter((product) =>
              product.title.toLowerCase().includes(search.toLowerCase()),
            )
            .map((product) => {
              return (
                <div key={product.id} className="card">
                  <h2>{product.title}</h2>
                  <img src={product.images[0]} alt="" />
                  <p>Brand: {product.brand}</p>
                  <p>Category: {product.category}</p>
                  <p>Price: {product.price}</p>
                  <p>Description:{product.description}</p>
                  <p>Rating: {product.rating}</p>
                </div>
              );
            })
        ) : (
          <h1>No data found</h1>
        )}
      </div>
    </div>
  );
};

export default Home;
