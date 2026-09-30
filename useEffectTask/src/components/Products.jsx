import React from "react";
import { useEffect, useState } from "react";
import { data } from "react-router-dom";
const Products = () => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  let perPageData = 6;
  let endIndex = perPageData * currentPage;
  let startIndex = endIndex - perPageData;
  let lastPage = Math.ceil(items.length / perPageData);
  let currentItems = items.slice(startIndex, endIndex);
  let fetchData = async () => {
    let res = await fetch("https://dummyjson.com/products");
    let data = await res.json();
    console.log(data.products);

    console.log(data.products[0].images[0]);
    setItems(data.products);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <div className="products">
        <h2>Products</h2>
        <header>
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage == 1}
          >
            previous
          </button>
          <span>
            {currentPage}/{lastPage}
          </span>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage == lastPage}
          >
            next
          </button>
        </header>
        <div className="productsCont">
          {currentItems.length > 0 ? (
            currentItems.map((item) => (
              <div className="cards" key={item.id}>
                <img src={item.images[0]} alt="" />

                <p>{item.title}</p>
                <p>{item.brand}</p>
                <p>{item.category}</p>
                <p>{item.description}</p>
              </div>
            ))
          ) : (
            <h1>No data found</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
