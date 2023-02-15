import React from "react";
import { Helmet } from "react-helmet";
import BreadCrumb from "../components/BreadCrumb";

const Wishlist = () => {
  return (
    <div style={{ background: "rgb(248 248 248)" }}>
      <Helmet>
        <title>Wishlist</title>
      </Helmet>
      <BreadCrumb title="wishlist" />
      <div className="wishlist-wrapper home-wrapper-2 pb-5 pt-3">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="wishlist-card  position-relative">
                <div className="wishlist-card">
                  <img
                    src="/images/cross.svg"
                    className="img-fluid cross position-absolute"
                    alt=""
                  />
                  <div className="wishlist card-image">
                    <img
                      className="img-fluid w-100"
                      src="/images/watch.jpg"
                      alt=""
                    />
                    <div className="py-3 px-3">
                      <h5 className="title">
                        Honor T1 7.0 1 GB ROM 7 Inch With Wi-Fi+3G Tablet
                      </h5>
                      <h6>$ 100</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card  position-relative">
                <div className="wishlist-card">
                  <img
                    src="/images/cross.svg"
                    className="img-fluid cross position-absolute"
                    alt=""
                  />
                  <div className="wishlist card-image">
                    <img
                      className="img-fluid w-100"
                      src="/images/watch.jpg"
                      alt=""
                    />
                    <div className="py-3 px-3">
                      <h5 className="title">
                        Honor T1 7.0 1 GB ROM 7 Inch With Wi-Fi+3G Tablet
                      </h5>
                      <h6>$ 100</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card  position-relative">
                <div className="wishlist-card">
                  <img
                    src="/images/cross.svg"
                    className="img-fluid cross position-absolute"
                    alt=""
                  />
                  <div className="wishlist card-image">
                    <img
                      className="img-fluid w-100"
                      src="/images/watch.jpg"
                      alt=""
                    />
                    <div className="py-3 px-3">
                      <h5 className="title">
                        Honor T1 7.0 1 GB ROM 7 Inch With Wi-Fi+3G Tablet
                      </h5>
                      <h6>$ 100</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
