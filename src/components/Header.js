import { Select } from "antd";
import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BsHandbag, BsHeart, BsSearch } from "react-icons/bs";
import { IoIosGitCompare } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
// import logo from "/images/logo.svg";

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                <Link className="top-text" to="/">
                  Account
                </Link>
                <Link className="mx-3 top-text" to="/">
                  Track Order
                </Link>
                <Link className="top-text" to="/">
                  Support
                </Link>
              </p>
            </div>
            <div className="col-6">
              <p style={{ color: "black" }} className="text-end  mb-0">
                <Select
                  defaultValue="United States"
                  style={{
                    width: "auto",
                  }}
                  onChange={handleChange}
                  options={[
                    {
                      value: "United States",
                      label: "United States",
                    },
                    {
                      value: "Bangladesh",
                      label: "Bangladesh",
                    },
                    {
                      value: "India",
                      label: "India",
                    },
                  ]}
                />
                <Select
                  className="mx-3"
                  defaultValue="USD"
                  style={{
                    width: "auto",
                  }}
                  onChange={handleChange}
                  options={[
                    {
                      value: "USD",
                      label: "USD",
                    },
                    {
                      value: "BDT",
                      label: "BDT",
                    },
                  ]}
                />
                <Select
                  defaultValue="English"
                  style={{
                    width: "auto",
                  }}
                  onChange={handleChange}
                  options={[
                    {
                      value: "Bangla",
                      label: "Bangla",
                    },
                    {
                      value: "English",
                      label: "English",
                    },
                  ]}
                />
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container">
          <div className="row d-flex justify-content-end align-items-center">
            <div className="col-2">
              <h1>
                <Link className="text-white">
                  <img src="/images/logo.svg" alt="" />
                </Link>
              </h1>
            </div>
            <div className="col-4">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search Product here"
                  aria-label="Search Product here"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text " id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-6">
              <div className="header-upper-links d-flex align-items-center justify-content-end gap-5">
                <div>
                  <Link to="/compare-product" className="">
                    <IoIosGitCompare className="head-icon" />
                  </Link>
                </div>
                <div>
                  <Link
                    to="/wishlist"
                    className="d-flex align-items-center  text-white"
                  >
                    <BsHeart className="head-icon" />
                  </Link>
                </div>
                <div>
                  <Link
                    to="cart"
                    className="d-flex align-items-center  text-white"
                  >
                    <BsHandbag className="head-icon" />
                  </Link>
                  <h2></h2>
                </div>
                <div>
                  <Link
                    to="/login"
                    className="d-flex align-items-center  text-white"
                  >
                    <AiOutlineUser className="head-icon" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex justify-content-between align-items-center gap-30">
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center "
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src="/images/menu.svg" alt="menu" />
                      <span className="me-5 d-inline-block">Categories</span>
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item text-white">Action</Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center  gap-15">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/product">Our Store</NavLink>
                    <NavLink to="/blogs">Blogs</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
