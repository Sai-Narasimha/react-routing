import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Product = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:8080/products/${id}`).then((res) => setProduct(res.data)).catch((err)=>alert("Product Not Found"))
    }
    
    
  }, [id]);
  return (
    <div>
      <div>Product ID: {product.id} </div>
      <div>Name : {product.name} </div>
      <div>Price : {product.price} </div>
    </div>
  );
};
