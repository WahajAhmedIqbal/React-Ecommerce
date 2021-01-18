import React from "react";
import { Button, Card } from "react-bootstrap";
import image1 from "../../../assest/Burger-Pattie-Chillipepper-Final-300x300.png";
import image2 from "../../../assest/b1.png";
import image3 from "../../../assest/b2.png";

import CardItem from "./Carditem";

const Cards = () => {
  return (
    <div

    // style={{
    //   display: "flex",
    //   justifyContent: "space-around",
    // }}
    >
      {/* <div style={{ marginLeft: 150, marginBottom: 21 }}> */}

      {/* <div className="row"> */}

      <CardItem />

      {/* </div> */}
      {/* <div className="col-sm" style={{ marginLeft: 150, marginBottom: 21 }}>
        <CardItem />
      </div>
      <div className="col-sm" style={{ marginLeft: 150, marginBottom: 21 }}>
        <CardItem />
      </div> */}
      {/* <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card> */}
    </div>
  );
};

export default Cards;
