import Helmet from "helmet";
import React from "react";
import Container from "../components/Container";
import CountDown from "../components/CountDown";
import ProductCard from "../components/ProductCard";
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
    </div>
  );
};

export default Home;
