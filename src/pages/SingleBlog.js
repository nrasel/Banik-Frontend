import React from "react";
import { Helmet } from "react-helmet";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";

function SingleBlog() {
  return (
    <div>
      <Helmet>
        <title>Single Blog</title>
      </Helmet>
      <BreadCrumb title="Single Blog" />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="single-blog-card">
              <Link to="/blogs" className="d-flex align-items-center gap-10">
                <HiOutlineArrowLeft />
                <span className="fs-5">Go Back to Blogs</span>
              </Link>
              <h3>A Beautiful Sunday Morning Renaissance</h3>
              <img
                className="img-fluid w-100 my-4 rounded"
                src="/images/blog-1.jpg"
                alt=""
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                harum explicabo laudantium corrupti voluptatem cumque architecto
                quam laboriosam, possimus accusantium iure distinctio! Eligendi
                obcaecati deserunt maiores dolore porro nisi incidunt.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default SingleBlog;
