import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import SubTotal from "./subtotal";
import {
  adjustQty,
  removeFromCart,
} from "../../../redux/Shopping/shopping-action";

const CheckoutProduct = ({ id, image, title, price, qty }) => {
  const dispatch = useDispatch();

  // const cart = useSelector((state) => state.shop.cart);

  const [inputChange, setInputChange] = useState(qty);

  // console.log(basketprice);

  const changeHandler = (e) => {
    setInputChange(e.target.value);
    dispatch(adjustQty(id, e.target.value));
  };

  const deletefun = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div>
      {/* <SubTotal totalprice={price} /> */}
      {/* <input type="number" /> */}

      {/* <div>
        {basketprice.map((prices) => (
          <p>{prices}</p>
        ))}
      </div> */}
      <table>
        <thead>
          {/* <tr>
            <th>image</th>
            <th>Title</th>
            <th>Price</th>
          </tr> */}
        </thead>
        <tbody>
          <tr>
            {/* {basketprice.map((item) => (
              <tr>
                <td>
                  <img src={item.img} />
                </td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>
                  <Button onClick={() => deletefun(item.id)}>
                    Remove form basket
                  </Button>
                </td>
              </tr>
            ))} */}
            {/* <div>{totalprice.reduce((total, num) => total + num)}</div> */}
            {/* <div>{price.reduce((total, num) => total + num)}</div> */}
            <td>
              <img src={image} />
            </td>
            <td>
              <h1>{title}</h1>
            </td>
            <td>
              <h3>{price}</h3>
            </td>
            <td>
              <input
                min="1"
                type="number"
                onChange={changeHandler}
                value={inputChange}
              />
              {/* {qty} */}
            </td>
            <td>
              <Button onClick={() => deletefun(id)}>Remove form basket</Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CheckoutProduct;
