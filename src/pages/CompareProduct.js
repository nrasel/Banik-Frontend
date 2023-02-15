import React from "react";
import { Helmet } from "react-helmet";
import ReactStars from "react-rating-stars-component";
import BreadCrumb from "../components/BreadCrumb";
import Color from "../components/Color";
import Container from "../components/Container";

const CompareProduct = () => {
  return (
    <div>
      <Helmet>
        <title>Compare Product</title>
      </Helmet>
      <BreadCrumb title="Compare Products" />
      <Container class1="compare-product-wrapper pt-2 pb-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src="/images/cross.svg"
                className="position-absolute cross img-fluid"
                alt=""
              />
              <div className="product-card-image">
                <img className="img-fluid" src="/images/watch.jpg" alt="" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">
                  Honor T1 7.0 1 GB ROM 7 Inch With Wi-Fi+3G Tablet
                </h5>
                <h5>
                  <ReactStars
                    count={5}
                    value={3}
                    edit={false}
                    size={24}
                    activeColor="#ffd700"
                  />
                </h5>
                <h6 className="price mt-3">$100</h6>
                <div className="">
                  <div className="product-detail px-1">
                    <h5>Brand:</h5>
                    <p className="mb-0">Havels</p>
                  </div>
                  <div className="product-detail px-1">
                    <h5>Type:</h5>
                    <p className="mb-0">Watch</p>
                  </div>
                  <div className="product-detail px-1">
                    <h5>Availability:</h5>
                    <p className="mb-0">In Stock</p>
                  </div>
                  <div className="product-detail px-1">
                    <h5>color:</h5>
                    <div className="d-flex flex-wrap">
                      <Color />
                    </div>
                  </div>
                  <div className="product-detail px-1">
                    <h5>Size:</h5>
                    <div className="d-flex gap-10 ">
                      <p className="mb-0">S</p>
                      <p className="mb-0">M</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src="/images/cross.svg"
                className="position-absolute cross img-fluid"
                alt=""
              />
              <div className="product-card-image">
                <img className="img-fluid" src="/images/watch.jpg" alt="" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">
                  Honor T1 7.0 1 GB ROM 7 Inch With Wi-Fi+3G Tablet
                </h5>
                <h5>
                  <ReactStars
                    count={5}
                    value={3}
                    edit={false}
                    size={24}
                    activeColor="#ffd700"
                  />
                </h5>
                <h6 className="price mt-3">$100</h6>
                <div className="">
                  <div className="product-detail px-1">
                    <h5>Brand:</h5>
                    <p className="mb-0">Havels</p>
                  </div>
                  <div className="product-detail px-1">
                    <h5>Type:</h5>
                    <p className="mb-0">Watch</p>
                  </div>
                  <div className="product-detail px-1">
                    <h5>Availability:</h5>
                    <p className="mb-0">In Stock</p>
                  </div>
                  <div className="product-detail px-1">
                    <h5>color:</h5>
                    <div className="d-flex flex-wrap">
                      <Color />
                    </div>
                  </div>
                  <div className="product-detail px-1">
                    <h5>Size:</h5>
                    <div className="d-flex gap-10 ">
                      <p className="mb-0">S</p>
                      <p className="mb-0">M</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CompareProduct;
