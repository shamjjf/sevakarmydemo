import React from "react";
import { Link } from "react-router-dom";

import About1 from "../../../public/assets/images1/influencer/blogs/sevak-army-influencer-blogs-1.jpg";
import Navbar from "../../components/Navbar/Navbar";
import Logo from "../../../public/assets/images/logo.svg";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import LeftImg from "../../../public/assets/images1/influencer/blogs/sevak-army-influencer-blogs-11.jpg";


import blog1 from "../../../public/assets/images1/team/sevak-army-team-4.jpg";
import blog2 from "../../../public/assets/images1/team/sevak-army-team-5.jpg";
import blog3 from "../../../public/assets/images1/team/sevak-army-team-6.jpg";
import blog4 from "../../../public/assets/images1/team/sevak-army-team-7.jpg";
import blog5 from "../../../public/assets/images1/team/sevak-army-team-8.jpg";

import blogImg1 from "../../../public/assets/images1/influencer/blogs/sevak-army-influencer-blogs-6.jpg";
import blogImg2 from "../../../public/assets/images1/influencer/blogs/sevak-army-influencer-blogs-7.jpg";
import blogImg3 from "../../../public/assets/images1/influencer/blogs/sevak-army-influencer-blogs-8.jpg";
import blogImg4 from "../../../public/assets/images1/influencer/blogs/sevak-army-influencer-blogs-9.jpg";
import blogImg5 from "../../../public/assets/images1/influencer/blogs/sevak-army-influencer-blogs-10.jpg";

import Footer from "../../components/footer/Footer";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "../../style.css";
import PageTitle from "../../components/pagetitle/PageTitle";
import Image from "next/image";

const InfluencerBlogPage = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };
  const blogs = [
    {
      id: "1",
      title: "How Influencers Are Shaping the Future of Charity and Non-Profit Work?",
      slug: "1",
      subtitle: "Successful Implementation Techniques.",
      create_at: "25 Jan, 24",
      screens: blogImg1,
      comment: "35",
      bsing: blog1,
      // recent: recent1,
      // blogSingleImg: blogSingleImg1,
      day: "28",
      month: "AUGUST",
      blClass: "format-standard-image",
      athor: "Sanket Kamble",
    },
    {
      id: "2",
      title: "How Influencers Can Create Lasting Social Impact Through Collaboration?",
      slug: "2",
      subtitle: " How Companies Are Making a Difference?",
      create_at: "25 Jan, 24",
      screens: blogImg2,
      bsing: blog2,
       // recent: recent2,
      comment: "31",
      // blogSingleImg: blogSingleImg2,
      day: "28",
      month: "AUGUST",
      blClass: "format-standard-image",
      athor: "Rishi Rathod",
    },
    {
      id: "3",
      title: "Top Ways Influencers Can Support All The Charitable Causes and Drive Change ",
      slug: "3",
      subtitle: "Why Your Company Should Get Involved?",
      create_at: "25 Jan, 24",
      screens: blogImg3,
      bsing: blog3,
       // recent: recent3,
      comment: "10",
      // blogSingleImg: blogSingleImg3,
      day: "28",
      month: "AUGUST",
      blClass: "format-standard-image",
      athor: "Priyanka Ray",
    },
    {
      id: "4",
      title: "How Influencers Can Drive Social Change: Top Tips for Maximising Your Impact  ",
      slug: "3",
      subtitle: "Why Your Company Should Get Involved?",
      create_at: "25 Jan, 24",
      screens: blogImg4,
      bsing: blog4,
       // recent: recent3,
      comment: "23",
      // blogSingleImg: blogSingleImg3,
      day: "28",
      month: "AUGUST",
      blClass: "format-standard-image",
      athor: "Radhika Jagtap",
    },
    {
      id: "5",
      title: "Why Social Influence Matters: The Role of Influencers in Humanitarian Campaigns ",
      slug: "3",
      subtitle: "Why Your Company Should Get Involved?",
      create_at: "25 Jan, 24",
      screens: blogImg5,
      bsing: blog5,
      comment: "41",
       // recent: recent3,
      // blogSingleImg: blogSingleImg3,
      day: "28",
      month: "AUGUST",
      blClass: "format-standard-image",
      athor: "Gayatri Shinde",
    },
  ];
  return (
    <>
      <Navbar Logo={Logo} hclass={"wpo-site-header"} />
      <PageTitle pageTitle={"Blogs"} pagesub={"Blogs"} />

      <section className="wpo-about-section section-padding pb-5 mb-5">
        <div className="container">
          <div className="wpo-about-wrap">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-img">
                  <div className="bg-image">
                    <Image src={About1} width={700} alt="Influencer Blog" />
                  </div>
                  {/* <div className="img-1">
                    <Image width={150} className="img-fluid" src={About2} alt="Influencer Blog" />
                  </div>
                  <div className="img-2">
                    <Image width={150} className="img-fluid" src={About3} alt="Influencer Blog" />
                  </div> */}
                  {/* <div className="img-3">
                    <Image width={150} className="img-fluid" src={About4} alt="Influencer Blog" />
                  </div> */}
                  {/* <div className="img-4">
                    <Image width={150} className="img-fluid" src={About5} alt="Influencer Blog" />
                  </div>
                  <div className="img-5">
                    <Image width={150} className="img-fluid" src={About6} alt="Influencer Blog" />
                  </div> */}
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-text">
                  <div className="wpo-section-title">
                    <h2 className="text-titleeee">Welcome to  Sevak Army Influencer Blogs.</h2>
                  </div>
                  <p>
                    Discover insights, stories and strategies on influencers transforming social impact. Our blog
                    highlights powerful campaigns, expert tips and real-world examples of how influencers can amplify
                    causes that matter. Whether you’re looking to learn how to use your platform for good or want to
                    stay updated on the latest trends in social influence for change, you’ll find everything you need
                    here. Dive in and be inspired to turn your influence into action.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={props.hclass}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-12 col-12">
              <SectionTitle subtitle="Blogs" title="Our Most Recent Updates and Insights" />
            </div>
          </div>
          <div className="blog-wrap mt-5">
            <div className="row">
              {blogs.map((blog, bl) => (
                <div className="col col-lg-4 col-md-6 col-12" key={bl}>
                  <div className="blog-single-card">
                    <div className="image">
                      <Image src={blog.screens} alt="Influencer Blog" />
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
                            <Image src={blog.bsing} alt="Influencer Blog" />
                          </div>
                          {blog.athor}
                        </li>
                        <li>
                          <i className="flaticon-chatting"></i>
                          {blog.comment} Comments
                        </li>
                      </ul>
                      <h2>
                        <Link className="blog-title-home" onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>
                          {blog.title}
                        </Link>
                      </h2>
                      {/* <p >{blog.subtitle}</p> */}
                    </div>
                    <div className="blog-btn">
                      {/* <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>
                        <span>Read More...</span>
                        <i className="flaticon-right-arrow-2"></i>
                      </Link> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className={"" + props.hclass}>
        <div className="causes-top section-padding">
          <div className="container-fluid">
            <div className="row g-0">
              <div className="col-lg-6 col-12">
                <div className="image">
                  <Image src={LeftImg} alt="img" />
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="campaign-card">
                  <div className="text">
                    <h2>
                      <Link onClick={ClickHandler} to="/causes-single/1">
                        Ready to Make a Difference?
                      </Link>
                    </h2>
                    <p>
                      Explore our blog and discover how you can use your influence to drive meaningful social change.
                      Get inspired, take action and join the movement today.
                    </p>
                    <p>Read More and Start Making an Impact.</p>
                  </div>
                  {/* <div className="progress-item"> 
                                    <div className="progress">
                                        <div className="bar" style={{ width: '90%' }}>
                                        </div>
                                    </div>
                                    <span className="cssProgress-label">90%</span>
                                    <div className="progres-label">
                                        <div className="label-on">
                                            <p>Raised:<span>$24,808.00</span></p>
                                        </div>
                                        <div className="label-two">
                                            <p>Goal:<span>$26,000.00</span></p>
                                        </div>
                                    </div>
                                </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="causes-wrap">
        <div className="container-fluid">
          <div className="row">
            {causesData.slice(0, 3).map((causes, index) => (
              <div
                className="col col-lg-4 col-md-6 col-12"
                key={index}
              >
                <div className="causes-item">
                  <div className="image">
                    <img
                      src={causes.image}
                      alt="img"
                    />
                  </div>
                  <div className="content">
                    <h2>
                      <Link
                        onClick={ClickHandler}
                        to={`/causes-single/${causes.slug}`}
                      >
                        {causes.title}
                      </Link>
                    </h2>
                    <p>{causes.description}</p>
                    <div className="progress-item">
                      <div className="progress">
                        <div
                          className="bar"
                          style={{
                            width: `${
                              (causes.raisedAmount / causes.goalAmount) * 100
                            }%`,
                          }}
                        ></div>
                      </div>
                      <span className="cssProgress-label">
                        {Math.round(
                          (causes.raisedAmount / causes.goalAmount) * 100
                        )}
                        %
                      </span>
                      <div className="progres-label">
                        <div className="label-on">
                          <p>
                            Raised:<span>{causes.raisedAmount}</span>
                          </p>
                        </div>
                        <div className="label-two">
                          <p>
                            Goal:<span>{causes.goalAmount}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}
      </section>
      <section>
        <div className="col-lg-12">
          <div className="header-menu">
            <ul className="smothscroll">
              <li>
                <AnchorLink href="#scrool">
                  <i className="ti-arrow-up"></i>
                </AnchorLink>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default InfluencerBlogPage;
