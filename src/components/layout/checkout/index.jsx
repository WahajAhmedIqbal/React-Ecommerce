import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import SubTotal from "./subtotal";

const Checkout = () => {
  const cart = useSelector((state) => state.shop.cart);

  return (
    <div>
      <h1>checkout page</h1>

      {cart.length == 0 ? (
        <div>
          <h1>you'r basket is empty</h1>
          <p>
            you have item in your basket for exelent experince buy more from us
          </p>
        </div>
      ) : (
        <div>
          <h1>your basket</h1>
          <SubTotal />
          {cart.map((item) => (
            <CheckoutProduct
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              qty={item.qty}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Checkout;
