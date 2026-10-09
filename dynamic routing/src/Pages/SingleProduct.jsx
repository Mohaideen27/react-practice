import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SingleProduct = () => {
  let [product, setProduct] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  console.log("single product rendered");

  const getSingleProduct = async () => {
    try {
      console.log("get single product function working");

      let res = await fetch(`https://fakestoreapi.com/products/${id}`);
      console.log(res);

      let data = await res.json();
      console.log(data);
      setProduct(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getSingleProduct(id);
  }, []);
  return (
    <div>
      <div className="productCard">
        <img src="{}" alt="" />
        <p>{product.title}</p>
        <p>{product.category}</p>
        <p>{product.price}</p>
      </div>
      <footer>
        <button onClick={() => navigate(-1)}>go back</button>
      </footer>
    </div>
  );
};

export default SingleProduct;
