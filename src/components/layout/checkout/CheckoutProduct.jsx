import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteitem } from "../../../store/store";
import SubTotal from "./subtotal";

const CheckoutProduct = ({ id, image, title, price }) => {
  const dispatch = useDispatch();
  const basketprice = useSelector((state) => state.cart.basket);

  // console.log(basketprice);

  const deletefun = (id) => {
    dispatch(deleteitem(id));
  };

  return (
    <div>
      <SubTotal totalprice={price} />
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
            <td></td>
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
