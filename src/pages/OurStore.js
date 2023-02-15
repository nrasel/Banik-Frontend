import React, { useState } from "react";
import { Helmet } from "react-helmet";
import ReactStars from "react-rating-stars-component";
import BreadCrumb from "../components/BreadCrumb";
import Color from "../components/Color";
import Container from "../components/Container";
import ProductCard from "../components/ProductCard";

const OurStore = () => {
  const [grid, setGrid] = useState(4);
  const gridSetter = (i) => {
    setGrid(i);
  };

  return (
    <div style={{ background: "rgb(248 248 248)" }}>
      <Helmet>
        <title>Our Store</title>
      </Helmet>
      <BreadCrumb title="Our Store" />
      <Container class1="store-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Shop By Cateogries</h3>
              <div>
                <ul className="ps-0">
                  <li>Watch</li>
                  <li>Tv</li>
                  <li>Camera</li>
                  <li>Laptop </li>
                </ul>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Filter By</h3>
              <div>
                <h5 className="sub-title">Availability</h5>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" />
                  <label htmlFor="" className="form-check-label">
                    In Stock (1)
                  </label>
                </div>
                <div className="form-check">
                  <input type="checkbox" checked className="form-check-input" />
                  <label htmlFor="" className="form-check-label">
                    Out of Stock (0)
                  </label>
                </div>

                <h5 className="sub-title">Price</h5>
                <div className="d-flex align-items-center gap-10">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="From"
                    />
                    <label htmlFor="floatingInput">From</label>
                  </div>
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput1"
                      placeholder="To"
                    />
                    <label htmlFor="floatingInput1">To</label>
                  </div>
                </div>
                <h5 className="sub-title">Colors</h5>
                <div>
                  <div className="d-flex flex-wrap">
                    <Color />
                  </div>
                </div>
                <h5 className="sub-title">Size</h5>
                <div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      id="color-1"
                      className="form-check-input"
                    />
                    <label htmlFor="color-1" className="form-check-label">
                      S (2)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      id="color-2"
                      className="form-check-input"
                    />
                    <label htmlFor="color-2" className="form-check-label">
                      M (2)
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Product Tags</h3>
              <div>
                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Headphone
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Laptop
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Mobile
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Wire
                  </span>
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Random Product</h3>
              <div>
                <div className="random-products mb-3 d-flex">
                  <div className="w-50">
                    <img src="/images/watch.jpg" className="img-fluid" alt="" />
                  </div>
                  <div className="w-50">
                    <h5>
                      Kids headphones bulk 10 pxck multi colored for students
                    </h5>
                    <ReactStars
                      activeColor="#ffd700"
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                    />
                    <p>$ 300</p>
                  </div>
                </div>
                <div className="random-products d-flex">
                  <div className="w-50">
                    <img src="/images/watch.jpg" className="img-fluid" alt="" />
                  </div>
                  <div className="w-50">
                    <h5>
                      Kids headphones bulk 10 pxck multi colored for students
                    </h5>
                    <ReactStars
                      activeColor="#ffd700"
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                    />
                    <p>$ 300</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="filter-sort-grid mb-3">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10">
                  <p style={{ width: "100px" }} className="mb-0 d-block">
                    Sort By:
                  </p>
                  <select name="" className="form-control form-select" id="">
                    <option value="manual">Featured</option>
                    <option value="best-selling">Best selling</option>
                    <option value="title-ascending">Alphabetically, A-Z</option>
                    <option value="title-descending">
                      Alphabetically, Z-A
                    </option>
                    <option value="price-ascending">Price, low to high</option>
                    <option value="price-descending">Price, high to low</option>
                    <option value="created-ascending">Date, old to new</option>
                    <option value="created-descending">Date, new to old</option>
                  </select>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <p className="totalproducts mb-0">21 Products</p>
                  <div className="d-flex gap-10 align-items-center grid">
                    <img
                      onClick={() => gridSetter(3)}
                      src="images/gr4.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => gridSetter(4)}
                      src="images/gr3.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => gridSetter(6)}
                      src="images/gr2.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />

                    <img
                      onClick={() => gridSetter(12)}
                      src="images/gr.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="products-list pb-5">
              <div className="d-flex flex-wrap gap-10">
                <ProductCard grid={grid} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurStore;
