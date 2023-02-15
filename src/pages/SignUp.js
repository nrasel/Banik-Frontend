import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";

const SignUp = () => {
  return (
    <div>
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <BreadCrumb title="Sign Up" />
      <Container class1="login-wrapper home-wrapper-2 pb-5 pt-3">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center">Sign Up</h3>
              <form className="d-flex flex-column gap-15" action="">
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  placeholder="Name"
                />
                <input
                  className="form-control"
                  type="email"
                  placeholder="Email"
                  name="email"
                />
                <input
                  className="form-control"
                  type="tel"
                  placeholder="Mobile Number"
                  name="moile"
                />
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <div>
                  <div className="mt-3">
                    <div className="d-flex mt-3 justify-content-center ">
                      <Link to="/login" type="submit" className="button signup">
                        Login
                      </Link>
                      <button type="submit" className="button border-0 ms-3">
                        SignUp
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SignUp;
