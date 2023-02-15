import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import Container from "../components/Container";

const Checkout = () => {
  return (
    <div style={{ background: "rgb(248 248 248)" }}>
      <Container class1="checkout-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-7">
            <div className="checkout-left-data">
              <h3 className="website-name">
                <Link to="/" className="text-white">
                  <img src="/images/logo.svg" alt="" />
                </Link>
              </h3>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link className="text-dark total-price" to="/cart">
                      Cart
                    </Link>
                  </li>
                  &nbsp;
                  <li
                    className="breadcrumb-item total-price active"
                    aria-current="page"
                  >
                    Information
                  </li>
                  &nbsp;
                  <li
                    className="breadcrumb-item total-price active"
                    aria-current="page"
                  >
                    Shipping
                  </li>
                  &nbsp;
                  <li
                    className="breadcrumb-item total-price active"
                    aria-current="page"
                  >
                    Payment
                  </li>
                </ol>
              </nav>
              <h4 className="title total">Contact Information</h4>
              <p className="user-details total">
                Naimur Rahman (rnaimur313@gmail.com)
              </p>
              <form
                className="d-flex gap-15 flex-wrap justify-content-between"
                action=""
              >
                <div className="w-100">
                  <select name="" className="form-control form-select" id="">
                    <option value="" selected disabled>
                      Select Country
                    </option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <input
                    placeholder="First Name"
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    placeholder="Last Name"
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <input
                    placeholder="Address"
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Apartment, Suite, etc"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="City"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <select name="" className="form-control form-select" id="">
                    <option value="" selected disabled>
                      Select State
                    </option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Zip Code"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to="/cart" className="text-dark ">
                      <BiArrowBack className="me-2" />
                      Return to Cart
                    </Link>
                    <Link className="button" to="/">
                      Continue Shopping
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-5">
            <div className="border-bottom py-4">
              <div className="d-flex gap-10 align-items-center">
                <div className="w-75 d-flex align-items-center gap-10">
                  <div className="w-25 position-relative">
                    <span
                      style={{ top: "-7px", right: "-6px" }}
                      className="badge bg-secondary text-white position-absolute rounded-circle"
                    >
                      1
                    </span>
                    <img
                      src="/images/watch.jpg"
                      className="img-fluid rounded"
                      alt="watch"
                    />
                  </div>
                  <div>
                    <h5 className="title">sddh</h5>
                    <p className="total">s / fdslfsd</p>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <h5 className="total-price">$ 100</h5>
                </div>
              </div>
            </div>
            <div className="border-bottom py-4">
              <div className="d-flex mb-2 justify-content-between align-items-center">
                <p className="mb-0 total">Subtotal</p>
                <p className="mb-0 total-price">$10000</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0 total">Shipping</p>
                <p className="mb-0 total-price">$10000</p>
              </div>
            </div>
            <div className="d-flex border-bottom py-4 justify-content-between align-items-center">
              <h4 className="total">Total</h4>
              <h5 className="total-price">$10000</h5>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Checkout;
