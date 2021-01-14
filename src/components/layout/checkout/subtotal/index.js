import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const SubTotal = () => {
  const cart = useSelector((state) => state.shop.cart);

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItem, setTotalItem] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });
    setTotalPrice(price);
    setTotalItem(items);
  }, [cart, totalPrice, setTotalPrice, setTotalItem, totalItem]);

  return (
    <div>
      <h1>sub total</h1>
      <h2>{totalItem}</h2>
      <h4>{totalPrice}</h4>
    </div>
  );
};

export default SubTotal;
