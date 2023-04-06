import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";

const Navbar = ({children}) => {
  return (
    <>
      <div className="Nav">
        <h3>
          <Link to="/home">Home</Link>
        </h3>
        <h3>
          <Link to="/Cart">Cart</Link>
        </h3>
        <h3>
          <Link to="/Checkout">Checkout</Link>
        </h3>
      </div>
      {children}
    </>
  );
};

export default Navbar;
