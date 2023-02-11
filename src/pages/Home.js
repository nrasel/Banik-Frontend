import Helmet from "helmet";
import React from "react";
import Container from "../components/Container";
import ProductCard from "../components/ProductCard";
import { services } from "../utils/Data";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#f8f8f8" }}>
      <Helmet>
        <title>Home</title>
      </Helmet>
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
    </div>
  );
};

export default Home;
