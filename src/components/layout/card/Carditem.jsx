import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { additem } from "../../../store/store";

const CardItem = ({ id, img, title, price }) => {
  const dispatch = useDispatch();

  const addToCartFun = () => {
    const newitem = {
      id,
      img,
      title,
      price,
    };
    dispatch(additem(newitem));
  };

  return (
    <div>
      <Card className="col-sm" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title} </Card.Title>
          <Card.Title>{price}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary" onClick={addToCartFun}>
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardItem;
