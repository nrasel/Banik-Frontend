import React from "react";
import { Helmet } from "react-helmet";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";

const ShipingPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Shipping Policy</title>
      </Helmet>
      <BreadCrumb title="Shipping Policy" />
      <Container class1="policy-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="policy"></div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ShipingPolicy;
