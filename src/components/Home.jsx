import React from "react";
import { useEffect } from "react";
import { fetchProducts } from "../store/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { data: products } = useSelector((state) => state.product);

  const handleClick = (product) => {
    dispatch(add(product));
  };
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
      <div className="grid">
        {products.map((item, index) => {
          return (
            <div key={index} className="card">
              <img className="homeImg" src={item.src} alt="any" />
              <h4>{item.name}</h4>
              <button onClick={() => handleClick(item)}>Add Cart</button>
            </div>
          );
        })}
      </div>
  );
};

export default Home;
