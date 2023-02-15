import Helmet from "helmet";
import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import CountDown from "../components/CountDown";
import NewArrivals from "../components/NewArrivals";
import ProductCard from "../components/ProductCard";
import SpecialProducts from "../components/SpecialProducts";
import { services } from "../utils/Data";

const Home = () => {
  const style = {
    backgroundImage: `url('/images/app-cover.png')`,
    height: "500px",
    width: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return (
    <div style={{ backgroundColor: "#f8f8f8" }}>
      <Helmet>
        <title>Home</title>
      </Helmet>
      {/* banner */}
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative ">
              <img
                className="img-fluid rounded-3"
                src="/images/banner-1.png"
                alt="mainBanner"
              />
            </div>
          </div>
          <div className="col-6 justify-content-center align-items-center d-flex">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative ">
                <img
                  className="img-fluid rounded-3"
                  src="/images/catbanner-01.jpg"
                  alt="mainBanner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>But IPad Air</h5>
                  <p>
                    From $999.00 <br /> or $41.62/mo.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                  className="img-fluid rounded-3"
                  src="/images/banner-2.png"
                  alt="mainBanner"
                />
              </div>
              <div className="small-banner position-relative ">
                <img
                  className="img-fluid rounded-3"
                  src="/images/banner-3.png"
                  alt="mainBanner"
                />
              </div>
              <div className="small-banner position-relative ">
                <img
                  className="img-fluid rounded-3"
                  src="/images/catbanner-04.jpg"
                  alt="mainBanner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>iPad s13+ Pro.</h5>
                  <p>
                    From $999.00 <br />
                    or $41.62/mo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      {/* support  */}
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="services help-bg d-flex align-items-center justify-content-between">
              {services.map((service, index) => (
                <div key={index} className="d-flex  align-items-center gap-10">
                  <img src={service.image} alt="" />
                  <div>
                    <h6>{service.tagline}</h6>
                    <p className="mb-0">{service.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
      {/* top selling product */}
      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row ">
          <div className="col-12">
            <h3 className="section-heading">Top Collection</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      {/* shop by brand */}
      <Container class1="wrapper-3 py-5">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Shop By Brand</h3>
          </div>
          <div className="col-12">
            <div className="categories ">
              <div className="item">
                <div>
                  <img src="/images/brand-1.png" alt="camera" />
                </div>
              </div>
              <div className="item">
                <div>
                  <img src="/images/brand-2.png" alt="camera" />
                </div>
              </div>
              <div className="item">
                <div>
                  <img src="/images/brand-3.png" alt="camera" />
                </div>
              </div>
              <div className="item">
                <div>
                  <img src="/images/brand-4.png" alt="camera" />
                </div>
              </div>

              <div className="item">
                <div>
                  <img src="/images/brand-5.png" alt="camera" />
                </div>
              </div>
              <div className="item">
                <div>
                  <img src="/images/brand-6.png" alt="camera" />
                </div>
              </div>
              <div className="item">
                <div>
                  <img src="/images/brand-7.png" alt="camera" />
                </div>
              </div>
              <div className="item">
                <div>
                  <img src="/images/brand-8.png" alt="camera" />
                </div>
              </div>
              <div className="item">
                <div>
                  <img src="/images/brand-9.png" alt="camera" />
                </div>
              </div>
              <div className="item">
                <div>
                  <img src="/images/brand-10.png" alt="camera" />
                </div>
              </div>
              <div className="item">
                <div>
                  <img src="/images/brand-11.png" alt="camera" />
                </div>
              </div>
              <div className="item">
                <div>
                  <img src="/images/brand-12.png" alt="camera" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <section class="py-5">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <CountDown />
            </div>
            <div className="col-6">
              <div style={style}>
                <div className="p-5">
                  <p>MOBILE APP VERSION</p>
                  <h2 className="mb-app">
                    Get Our <span>Mobile App</span> <br /> It’s Make easy for
                    you life !
                  </h2>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <div className="me-4">
                    <img
                      className="img-fluid"
                      src="images/play-store.png"
                      alt=""
                    />
                  </div>
                  <div className="">
                    <img
                      className="img-fluid"
                      src="images/apple-store.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="mt-5 text-center">
                  <img
                    className="img-fluid"
                    src="images/app-screen.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* special products start here */}
      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Sepcial Products</h3>
          </div>
        </div>
        <div className="row">
          <SpecialProducts />
          <SpecialProducts />
          <SpecialProducts />
          <SpecialProducts />
        </div>
      </Container>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Best Seller</h3>
          </div>
        </div>
        <div className="row">
          <div className="best-seller">
            <div>
              <div className="best-seller-image">
                <img src="/images/saller-1.png" alt="" />
              </div>
              <div>
                <Link to="/seller-page">
                  <p>Shop BD</p>
                </Link>
              </div>
            </div>
            <div>
              <div className="best-seller-image">
                <img src="/images/saller-2.png" alt="" />
              </div>
              <div>
                <Link to="/seller-page">
                  <p>Eecoms Shop</p>
                </Link>
              </div>
            </div>
            <div>
              <div className="best-seller-image">
                <img src="/images/saller-3.png" alt="" />
              </div>
              <div>
                <Link to="/seller-page">
                  <p>Fusion X</p>
                </Link>
              </div>
            </div>
            <div>
              <div className="best-seller-image">
                <img src="/images/saller-4.png" alt="" />
              </div>
              <div>
                <Link to="/seller-page">
                  <p>Rikayi Rox</p>
                </Link>
              </div>
            </div>
            <div>
              <div className="best-seller-image">
                <img src="/images/saller-5.png" alt="" />
              </div>
              <div>
                <Link to="/seller-page">
                  <p>Habbriyi</p>
                </Link>
              </div>
            </div>
            <div>
              <div className="best-seller-image">
                <img src="/images/saller-6.png" alt="" />
              </div>
              <div>
                <Link to="/seller-page">
                  <p>Rayhans</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* special products end here */}

      {/* adds section start */}
      <div className="container py-5">
        <div className="row">
          <div className="col-12 d-flex align-items-center justify-content-center">
            <div className="me-3">
              <img className="img-fluid" src="/images/ads-1.png" alt="" />
            </div>
            <div>
              <img className="img-fluid" src="/images/ads-2.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* adds section end */}

      {/* new arrivals start */}
      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row ">
          <div className="col-12">
            <h3 className="section-heading">New Arrivals</h3>
          </div>
          <NewArrivals />
          <NewArrivals />
          <NewArrivals />
          <NewArrivals />
        </div>
      </Container>
      {/* new arrivals end */}

      {/* adds3 section start */}
      <div className=" py-5 container">
        <div className="row">
          <div className="col-12">
            <div className="text-center">
              <img className="img-fluid" src="/images/ads-3.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* adds3 section end*/}

      {/* popular sales start */}
      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row ">
          <div className="col-12">
            <h3 className="section-heading">New Arrivals</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <div className="d-flex p-2 bg-white align-items-center justify-content-around">
              <div className="popular-sale-img">
                <img src="/images/product-img-9.jpg" alt="" />
              </div>
              <div className="popular-sale-info">
                <Link to="/">Xoggle aute et pariatur...</Link>
                <p className="price">
                  <span className="throw-line">$27.27</span>
                  <span className="price-o">$18.73</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="d-flex p-2 bg-white align-items-center justify-content-around">
              <div className="popular-sale-img">
                <img src="/images/product-img-9.jpg" alt="" />
              </div>
              <div className="popular-sale-info">
                <Link to="/">Xoggle aute et pariatur...</Link>
                <p className="price">
                  <span className="throw-line">$27.27</span>
                  <span>$18.73</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="d-flex p-2 bg-white align-items-center justify-content-around">
              <div className="popular-sale-img">
                <img src="/images/product-img-9.jpg" alt="" />
              </div>
              <div className="popular-sale-info">
                <Link to="/">Xoggle aute et pariatur...</Link>
                <p className="price">
                  <span className="throw-line">$27.27</span>
                  <span>$18.73</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "3px" }} className="row">
          <div className="col-4">
            <div className="d-flex p-2 bg-white align-items-center justify-content-around">
              <div className="popular-sale-img">
                <img src="/images/product-img-9.jpg" alt="" />
              </div>
              <div className="popular-sale-info">
                <Link to="/">Xoggle aute et pariatur...</Link>
                <p className="price">
                  <span className="throw-line">$27.27</span>
                  <span className="price-o">$18.73</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="d-flex p-2 bg-white align-items-center justify-content-around">
              <div className="popular-sale-img">
                <img src="/images/product-img-9.jpg" alt="" />
              </div>
              <div className="popular-sale-info">
                <Link to="/">Xoggle aute et pariatur...</Link>
                <p className="price">
                  <span className="throw-line">$27.27</span>
                  <span>$18.73</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="d-flex p-2 bg-white align-items-center justify-content-around">
              <div className="popular-sale-img">
                <img src="/images/product-img-9.jpg" alt="" />
              </div>
              <div className="popular-sale-info">
                <Link to="/">Xoggle aute et pariatur...</Link>
                <p className="price">
                  <span className="throw-line">$27.27</span>
                  <span>$18.73</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      {/* popular sales end */}
    </div>
  );
};

export default Home;
