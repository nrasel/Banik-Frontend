import React from "react";
import { Helmet } from "react-helmet";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiInfoCircle, BiPhoneCall } from "react-icons/bi";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";

const Contact = () => {
  return (
    <div>
      {" "}
      <Helmet>
        <title>Blogs</title>
      </Helmet>
      <BreadCrumb title="Contact Us" />
      <Container class1="contact-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <iframe
              title="hello"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4854.1709251077245!2d89.24213937108925!3d24.006653824208602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe84d39bf0246f%3A0x2380999ee3603529!2sMujahid%20Club%20%26%20Library!5e0!3m2!1sen!2sbd!4v1673808380319!5m2!1sen!2sbd"
              width="600"
              height="450"
              className="border-0 w-100"
              allowFullScreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between">
              <div>
                <h3 className="contact-title">Contact</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input
                      type="text"
                      placeholder="Name"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <input
                      placeholder="Email"
                      type="text"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Mobile Number"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <textarea
                      name=""
                      placeholder="Comments"
                      className="w-100 form-control"
                      id=""
                      cols="30"
                      rows="4"
                    ></textarea>
                  </div>
                  <div>
                    <button className="button border-0">Submit</button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className="contact-title">Get in touch with us</h3>
                <div>
                  <ul className="ps-0">
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <AiOutlineHome className="fs-5" />
                      <address className="mb-0">
                        Hno:227, Dhaka, Bangladesh
                      </address>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <BiPhoneCall className="fs-5" />
                      <a href="tel:+91 8264954234">888998767656</a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <AiOutlineMail className="fs-5" />
                      <a href="mailto:admin@gmail.com">admin@gmail.com</a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <BiInfoCircle className="fs-5" />
                      <p className="mb-0">Monday-Friday 10 AM - 8 AM</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
