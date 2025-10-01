import React from "react";
import { Link } from "react-router-dom";
import blogs from "../../api/blogs";
import SectionTitle from "../SectionTitle/SectionTitle";
import Image from "next/image";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const BlogSection = (props) => {
  return (
    <section className={props.hclass}>
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-6 col-md-12 col-12">
            <SectionTitle subtitle="Blog" title="Explore our latest insights on corporate volunteerism and CSR." />
          </div>
        </div>
        <div className="blog-wrap mt-5">
          <div className="row">
            {blogs.map((blog, bl) => (
              <div className="col col-lg-3 col-md-6 col-12" key={bl}>
                <div className="blog-single-card">
                  <div className="image">
                    <Image src={blog.screens} alt="Blog" />
                    <div className="top-date">
                      {blog.create_at}
                      <div className="shape">
                        <svg width="8" height="9" viewBox="0 0 8 9" fill="none">
                          <path d="M7.99999 9.0001L-9.79769e-05 9.00023L8.00005 0.500149L7.99999 9.0001Z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="content">
                    <ul className="top-content">
                      <li>
                        <div className="image-single">
                          <Image src={blog.bsing} alt="Blog" />
                        </div>
                        {blog.athor}
                      </li>
                      <li>
                        <i className="flaticon-chatting"></i>
                        03 Comments
                      </li>
                    </ul>
                    <h2>
                      <Link className="blog-title-home" onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>
                        {blog.title}
                      </Link>
                    </h2>
                    <p>{blog.subtitle}</p>
                  </div>
                  <div className="blog-btn">
                    <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>
                      <span>Read More...</span>
                      <i className="flaticon-right-arrow-2"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
