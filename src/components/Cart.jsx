import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemove = (productsId) => {
    dispatch(remove(productsId));
  };

  return (
<>
{products.length === 0 ? <h2>Cart is empty</h2> : <h2>Cart</h2>}
<div className="grids">
        {products.map((item, index) => {
          return (
            <div key={index} className="carts">
              <img className="homeImg" src={item.src} alt="any" />
              <h4>{item.name}</h4>
              <button className="cartButt" style={{marginBottom:"10%"}} onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          );
        })}
      </div>
</>

  );
};

export default Cart;
