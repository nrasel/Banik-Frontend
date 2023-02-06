import React from "react";
import { Link } from "react-router-dom";

const BreadCrumb = ({ title }) => {
  return (
    <div>
      <div className="breadcrub py-4">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p className="mb-0 d-flex justify-content-center align-items-center">
                <Link to="/" className="text-dark">
                  Home&nbsp;
                </Link>
                / {title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
