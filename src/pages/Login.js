import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";

const Login = () => {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <BreadCrumb title="login" />
      <Container class1="login-wrapper home-wrapper-2 pb-5 pt-3">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center">Login</h3>
              <form className="d-flex flex-column gap-15" action="">
                <input
                  className="form-control"
                  type="email"
                  placeholder="Email"
                  name="email"
                />
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <div>
                  <div className="mt-1">
                    <Link to="/forgot-password">Forgot Password?</Link>
                    <div className="d-flex mt-3 justify-content-center ">
                      <Link to="/sign-up" className="button signup ">
                        SignUp
                      </Link>
                      <button type="submit" className="button border-0 ms-3">
                        Login
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;
