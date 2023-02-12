import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

const ProductCard = ({ grid }) => {
  let location = useLocation();

  return (
    <>
      <div
        className={`${
          location.pathname === "/product" ? `gr-${grid}` : "col-3"
        }`}
      >
        <div className="product-card position-relative mt-3">
          <div className="wishlist-icon position-absolute">
            {/* <Link>
              <img src="/images/wish.svg" alt="" />
            </Link> */}
          </div>
          <div className="product-image">
            <img className="img-fluid" src="/images/watch.jpg" alt="" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <Link to="/product/:id" className="product-title">
              Kids headphones bulk 10 pack multi colored for students
            </Link>
            <ReactStars
              count={5}
              value={3}
              edit={false}
              size={24}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Product details of High quality Wifi Router Stand Shelf Double
              Layer Wall Mounted Shelf Storage Rack Home decorator
            </p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex gap-15 flex-column">
              <button className="border-0 bg-transparent-custom">
                <img src="/images/wish.svg" alt="" />
              </button>
              <button className="border-0 bg-transparent-custom">
                <img src="/images/prodcompare.svg" alt="" />
              </button>
              <button className="border-0 bg-transparent-custom">
                <img src="/images/view.svg" alt="" />
              </button>
            </div>
          </div>
          <div className="position-absolute action-bar-2">
            <button
              style={{
                backgroundColor: "rgb(233, 69, 96)",
                width: "130px",
                margin: "auto",
              }}
              className="border-0 py-2 d-flex align-items-center justify-content-center"
            >
              <img src="/images/add-cart.svg" alt="" />
              <span className="ms-1 mb-0"> Add To Cart</span>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`${
          location.pathname === "/product" ? `gr-${grid}` : "col-3"
        }`}
      >
        <div className="product-card position-relative mt-3">
          <div className="wishlist-icon position-absolute">
            {/* <Link>
              <img src="/images/wish.svg" alt="" />
            </Link> */}
          </div>
          <div className="product-image">
            <img className="img-fluid" src="/images/watch.jpg" alt="" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <Link to="/product/:id" className="product-title">
              Kids headphones bulk 10 pack multi colored for students
            </Link>
            <ReactStars
              count={5}
              value={3}
              edit={false}
              size={24}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Product details of High quality Wifi Router Stand Shelf Double
              Layer Wall Mounted Shelf Storage Rack Home decorator
            </p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex gap-15 flex-column">
              <button className="border-0 bg-transparent-custom">
                <img src="/images/wish.svg" alt="" />
              </button>
              <button className="border-0 bg-transparent-custom">
                <img src="/images/prodcompare.svg" alt="" />
              </button>
              <button className="border-0 bg-transparent-custom">
                <img src="/images/view.svg" alt="" />
              </button>
            </div>
          </div>
          <div className="position-absolute action-bar-2">
            <button
              style={{
                backgroundColor: "rgb(233, 69, 96)",
                width: "130px",
                margin: "auto",
              }}
              className="border-0 py-2 d-flex align-items-center justify-content-center"
            >
              <img src="/images/add-cart.svg" alt="" />
              <span className="ms-1 mb-0"> Add To Cart</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
