import React from "react";
import { Helmet } from "react-helmet";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";

const Cart = () => {
  return (
    <div>
      <Helmet>
        <title>Cart</title>
      </Helmet>
      <BreadCrumb title="cart" />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div style={{ background: "rgb(248 248 248)" }} className="row p-4">
          <div className="col-12">
            <div className="cart-header py-3 d-flex justify-content-between align-items-center">
              <h4 className="cart-col-1">Product</h4>
              <h4 className="cart-col-2">Price</h4>
              <h4 className="cart-col-3">Quantity</h4>
              <h4 className="cart-col-4">Total</h4>
            </div>
            <div className="cart-header py-3 d-flex justify-content-between align-items-center">
              <div className="cart-col-1 d-flex gap-15 align-items-center">
                <div className="w-25">
                  <img className="img-fluid" src="/images/watch.jpg" alt="" />
                </div>
                <div className="w-75">
                  <p className=" mb-3">title</p>
                  <p className="size ">size: dfd</p>
                  <p className="color mb-0">Color: dd</p>
                </div>
              </div>
              <div className="cart-col-2">
                <h5 className="price">$ 100</h5>
              </div>
              <div className="cart-col-3 d-flex align-items-center gap-15">
                <div>
                  <input
                    type="number"
                    min={1}
                    max={10}
                    className="form-control"
                  />
                </div>
                <div>
                  <AiFillDelete className="text-danger " />
                </div>
              </div>
              <div className="cart-col-4">
                <h5 className="price">$ 100</h5>
              </div>
            </div>
          </div>
          <div className="col-12 py-2 mt-4">
            <div className="d-flex justify-content-between align-items-baseline">
              <Link to="/product" className="button">
                Continue To Shopping
              </Link>
              <div className="d-flex flex-column align-items-baseline">
                <h4>SubTotal: $ 1000</h4>
                <p>Taxes and shipping calculated at checkout</p>
                <Link to="/checkout" className="button">
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Cart;
