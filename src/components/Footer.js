import React from "react";
import { BsGithub, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex align-items-center gap-30">
                <img src="/images/newsletter.png" alt="newsletter" />
                <h3 className="mb-0 text-white">Sign Up for Newsletter</h3>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text " id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <h3 className="text-white mb-4">Contact Us</h3>
              <address className="text-white fs-6">
                Dhaka : 32 Dhaka Bangladesh <br /> Mirpur <br /> Pin Code: 13434
              </address>
              <a className="mt-3 d-block text-white " href="tel:984948393">
                9348934934
              </a>
              <a
                className="mt-2 d-block text-white mb-1"
                href="mailto:admin@gmail.com"
              >
                admin@gmail.com
              </a>
              <div className="social-icons d-flex align-items-center gap-30 mt-3">
                <Link to="/" className="text-white">
                  <BsLinkedin className="fs-4" />
                </Link>
                <Link to="/" className="text-white">
                  <BsInstagram className="fs-4" />
                </Link>
                <Link to="/" className="text-white">
                  <BsGithub className="fs-4" />
                </Link>
                <Link to="/" className="text-white">
                  <BsYoutube className="fs-4" />
                </Link>
              </div>
            </div>
            <div className="col-3">
              <h3 className="text-white mb-4">Information</h3>
              <div className="footer-links d-flex flex-column">
                <Link to="/privacy" className="text-white py-2 mb-1">
                  Privacy Policy
                </Link>
                <Link to="/refund" className="text-white py-2 mb-1">
                  Refund Policy
                </Link>
                <Link to="/shipping-policy" className="text-white py-2 mb-1">
                  Shipping Policy
                </Link>
                <Link to="/terms" className="text-white py-2 mb-1">
                  Terms and Conditions
                </Link>
                <Link className="text-white py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h3 className="text-white mb-4">Account</h3>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link className="text-white py-2 mb-1">Faq</Link>
                <Link className="text-white py-2 mb-1">Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h3 className="text-white mb-4">Quick Links</h3>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
                <Link className="text-white py-2 mb-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; Powered By Naimur Rahman
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
