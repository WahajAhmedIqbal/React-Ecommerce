import React from "react";
import "./header.css";
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Paper } from "@material-ui/core";
import { useSelector } from "react-redux";
import CheckOut from "../../components/layout/checkout";

const Header = () => {
  // const basket = useSelector((state) => state.cart.basket);
  // console.log(basket);
  return (
    <div className="main-header">
      {/* <h1 style={{ backgroundColor: "pink" }}>this is para</h1> */}
      <div className="nav-div">
        <Navbar expand="lg" className="sticky-top">
          <Navbar.Brand href="#home" style={{ fontWeight: 600, fontSize: 25 }}>
            react-Logo
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>
                <Link className="nav-a" to="/">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="nav-a" to="/ddd">
                  About Us
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="nav-a" to="/aa">
                  Contact Us
                </Link>
              </Nav.Link>
            </Nav>
            <Form inline>
              <div className="contactUs">Contact NO: 001-9991-111</div>
              <div className="checkout-box">
                <Link to="/home/checkout">
                  <ShoppingCartIcon /> Go To Your Cart
                  {/* <span className="cart-counter">{basket.length}</span> */}
                </Link>
              </div>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
