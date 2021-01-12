import React from "react";
import { Button, Card } from "react-bootstrap";
import image1 from "../../../assest/Burger-Pattie-Chillipepper-Final-300x300.png";
import image2 from "../../../assest/b1.png";
import image3 from "../../../assest/b2.png";

import CardItem from "./Carditem";

const Cards = () => {
  return (
    <div
      className=" row main-card"
      style={{
        display: "flex",
        backgroundColor: "azure",
        justifyContent: "space-evenly",
        paddingTop: 20,
        paddingBottom: 20,
        width: "100%",
      }}
    >
      <div className="col-sm" style={{ marginLeft: 150, marginBottom: 21 }}>
        <CardItem id="0011" img={image1} title="Fish Burger" price="700 Rs" />
      </div>
      <div className="col-sm" style={{ marginLeft: 150, marginBottom: 21 }}>
        <CardItem id="0012" img={image2} title="Crown Burger" price="950 RS" />
      </div>
      <div className="col-sm" style={{ marginLeft: 150, marginBottom: 21 }}>
        <CardItem id="0013" img={image3} title="Fry Prowns" price="1500 Rs" />
      </div>
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
