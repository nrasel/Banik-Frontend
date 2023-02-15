import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";

const ForgotPassword = () => {
  return (
    <div>
      <Helmet>
        <title>Forgot Password</title>
      </Helmet>
      <BreadCrumb title="forgot password" />
      <Container class1="login-wrapper home-wrapper-2 pb-5 pt-3">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center">Reset Your Password</h3>
              <p className="text-center my-2">
                We will send you an email to reset your password
              </p>
              <form className="d-flex flex-column gap-15 mt-3" action="">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Email"
                  name="email"
                />
                <div>
                  <div className="mt-1">
                    <div className="d-flex mt-2 justify-content-center gap-15 align-items-center flex-column">
                      <button type="submit" className="button border-0">
                        Submit
                      </button>
                      <Link to="/login">Cancel</Link>
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

export default ForgotPassword;
