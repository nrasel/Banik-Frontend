import React from "react";
import { Helmet } from "react-helmet";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";

const RefundPolicy = () => {
  return (
    <div>
      <Helmet>
        <title>Refunds Policy</title>
      </Helmet>
      <BreadCrumb title="Refunds Policy" />
      <Container class1="policy-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="policy"></div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RefundPolicy;
