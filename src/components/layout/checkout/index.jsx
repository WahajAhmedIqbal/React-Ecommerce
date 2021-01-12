import React from "react";
import { useSelector } from "react-redux";
import "./checkout.css";
import CheckoutProduct from "./CheckoutProduct";

const Checkout = () => {
  const basket = useSelector((state) => state.cart.basket);

  return (
    <div>
      <h1>checkout page</h1>

      {basket.length == 0 ? (
        <div>
          <h1>you'r basket is empty</h1>
          <p>
            you have item in your basket for exelent experince buy more from us
          </p>
        </div>
      ) : (
        <div>
          <h1>your basket</h1>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              image={item.img}
              title={item.title}
              price={item.price}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Checkout;
