import React from "react";
import { Link } from "react-router-dom";
import blogs from "../../api/SchoolBlog";
import abImg1 from "../../../public/assets/images1/school-college/blogs/sevak-army-school-college-blogs-1.jpg";
import abImg2 from "../../../public/assets/images1/school-college/blogs/sevak-army-school-college-blogs-2.jpg";
import Navbar from "../../components/Navbar/Navbar";
import Logo from "../../../public/assets/images/logo.svg";
import Cta1 from "../../../public/assets/images/cta/shape-1.png";
import Cta2 from "../../../public/assets/images/cta/top-icon.png";
import Cta3 from "../../../public/assets/images/cta/shape-2.png";
import Footer from "../../components/footer/Footer";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import CtaSection from "../../components/CtaSection/CtaSection";
import Image from "next/image";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const SchoolBlog = () => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <>
      <Navbar Logo={Logo} hclass={"wpo-site-header-s1"} />
      <style>
        {`
          .padding-top {
            padding-top: 140px;
          }

          @media (max-width: 991px) {
            .padding-top {
              display: none;
            }
          }
          `}
      </style>
      <div className="padding-top"></div>
      <PageTitle pageTitle={"Blogs"} pagesub={"School-College"} />
      {/* <section className="wpo-cta-section ">
        <div className="shape-1">
          <Image src={Cta1} alt="Blogs" />
        </div>
        <div className="bg-overlay">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="cta-wrap">
                  <div className="icon">
                    <Image src={Cta2} alt="Blogs" />
                  </div>
                  <span>Empowering Education</span>
                  <h2 className="text-capitalize">Stay informed and inspired by subscribing to our blog updates.</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shape-2">
          <Image src={Cta3} alt="Blogs" />
        </div>
      </section> */}

      <section className="wpo-about-section section-padding">
        <div className="container">
          <div className="wpo-about-wrap">
            <div className="row ">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-img">
                  {/* <div className="wpo-about-left">
                    <Image src={abImg2} alt="img" />
                  </div> */}
                  <div className="wpo-about-right pt-3 pt-lg-5">
                    <Image src={abImg1} alt="img" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-text">
                  <div className="wpo-section-title">
                    <h2 className="about-section-heading-forth text-titleeee">
                      How Schools and Colleges Are Making Differences With SevakArmy ?
                    </h2>
                  </div>
                  <p>
                    Education is one of the most powerful tools for creating change in society. Schools and colleges
                    have a unique role in shaping the minds of the next generation and when combined with a platform
                    like SevakArmy, they can amplify their impact exponentially. By participating in community-driven
                    initiatives, students, educators and institutions can work together to create meaningful change in
                    areas like social welfare, environmental conservation and more. In this blog, we will explore how
                    schools and colleges are making a difference with  SevakArmy and empowering education to be a
                    force for good.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="wpo-cta-section">
        <div className="shape-1">
          <Image src={Cta1} alt="Blogs" />
        </div>
        <div className="bg-overlay">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="cta-wrap">
                  <div className="icon">
                    <Image src={Cta2} alt="Blogs" />
                  </div>
                  <span>Empowering Education</span>
                  <h2 className="text-capitalize">Stay informed and inspired by subscribing to our blog updates.</h2>
                  {/* <Link to="/donate" className="theme-btn-cta" onClick={ClickHandler}>
                                        Subscribe now
                                    </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shape-2">
          <Image src={Cta3} alt="Blogs" />
        </div>
      </section>


      <section className="section-padding pb-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-md-12 col-12 w-100">
              <SectionTitle subtitle="Blog" title="Explore Our Latest Insights On Corporate Volunteerism And CSR." />
            </div>
          </div>
          <div className="blog-wrap mt-5 mb-5 pb-5">
            <div className="row">
              {blogs.map((blog, bl) => (
                <div className="col col-lg-6 col-md-6 col-12" key={bl}>
                  <div className="blog-single-card" style={{ minHeight: 600 }}>
                    <div className="image">
                      <Image src={blog.screens} alt="Blogs" />
                      <div className="top-date">
                        {blog.athor.split(" ")[0]}
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
                            <Image src={blog.bsing} alt="Blogs" />
                          </div>
                          {blog.athor}
                        </li>
                        <li>
                          <i className="flaticon-chatting"></i>
                          03 Comments
                        </li>
                      </ul>
                      <h2>
                        {/* <Link className="blog-title-home" onClick={ClickHandler} to={`/blog-single/${blog.slug}`}> */}
                        {blog.title}
                        {/* </Link> */}
                      </h2>
                      <p>{blog.subtitle}</p>
                    </div>
                    {/* <div className="blog-btn">
                      <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>
                        <span>Read More...</span>
                        <i className="flaticon-right-arrow-2"></i>
                      </Link>
                    </div> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Scrollbar />
      <Footer />
    </>
  );
};

export default SchoolBlog;
