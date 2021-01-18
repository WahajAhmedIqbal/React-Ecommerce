import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
// import { additem } from "../../../store/store";
import { addToCart } from "../../../redux/Shopping/shopping-action";

const CardItem = () => {
  const dispatch = useDispatch();

  const productData = useSelector((state) => state.shop.products);

  const addToCartFun = (id) => {
    dispatch(addToCart(id));
  };

  return (
    <div
      className="row"
      style={{
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      {productData.map((item) => {
        return (
          <div
            className="col-4"
            style={{
              width: "18rem",
            }}
          >
            <Card>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.title} </Card.Title>
                <Card.Title>{item.price}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary" onClick={() => addToCartFun(item.id)}>
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default CardItem;
