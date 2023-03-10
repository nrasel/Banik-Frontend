import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const SpecialProducts = () => {
  return (
    <div className="col-6 mb-3">
      <div className="special-product-card">
        <div className="d-flex justify-content-around">
          <div>
            <img className="img-fluid" src="/images/product-img-6.jpg" alt="" />
          </div>
          <div className="special-product-content">
            <h5 className="brand">Havels</h5>
            <h6>Samsung Galaxy Note10+ Mobile Phone...</h6>
            <ReactStars
              count={5}
              value={4}
              edit={false}
              size={24}
              activeColor="#ffd700"
            />
            <p className="price mb-0">
              <span className="red-p">$100</span> &nbsp; <strike>$200</strike>
            </p>
            <div className="discount-till d-flex align-items-center gap-10">
              <p className="mb-0">
                <b>5 days</b>
              </p>
              <div className="d-flex gap-10 align-items-center">
                <span className="badge rounded-circle-custom p-2 bg-danger">
                  1
                </span>
                :
                <span className="badge rounded-circle-custom p-2 bg-danger">
                  1
                </span>
                :
                <span className="badge rounded-circle-custom p-2 bg-danger">
                  1
                </span>
              </div>
            </div>
            <div className="product-count my-3">
              <p>Prodducts: 5</p>
              <div className="progressbar">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "25%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
            <Link className="button">Add to Cart</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialProducts;
