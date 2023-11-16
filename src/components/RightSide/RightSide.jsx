import React, { useState } from "react";
import "./right.css";
import cart from "../../assets/images/icon-cart.svg";

const RightSide = () => {
  const [count, setCount] = useState(0);
  const add = () => setCount(count + 1);
  const minus = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div className="right">
      <span className="sneaker">sneaker company</span>
      <h1 className="title">Fall Limited Edition Sneakers</h1>
      <p className="description">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="price-wrapper">
        <div className="price-descount">
          <strong className="price">$125.00</strong>
          <span className="discount">50%</span>
        </div>
        <span className="original-price">$250.00</span>
      </div>
      <div className="buy">
        <div className="quantity">
          <button className="minus" onClick={minus}>
            -
          </button>
          <span className="number">{count}</span>
          <button className="plus" onClick={add}>
            +
          </button>
        </div>
        <button className="add-cart">
          <img src={cart} alt="cart" className="cart-ico" />
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  );
};

export default RightSide;
