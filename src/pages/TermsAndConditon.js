import React from "react";
import { Helmet } from "react-helmet";
import BreadCrumb from "../components/BreadCrumb";

const TermsAndConditon = () => {
  return (
    <div>
      <Helmet>
        <title>Terms and Conditions</title>
      </Helmet>
      <BreadCrumb title="Terms and Condition" />
      <section className="policy-wrapper py-5 home-wrapper-2">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="policy">
                        
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditon;
