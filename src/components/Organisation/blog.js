import React from "react";
import { Link } from "react-router-dom";
import About1 from "../../../public/assets/images1/organisation/blogs/sevak-army-organization-blogs-1.jpg";
import About2 from "../../../public/assets/images1/organisation/blogs/sevak-army-organization-blogs-2.jpg";
import About3 from "../../../public/assets/images1/organisation/blogs/sevak-army-organization-blogs-3.jpg";
import About4 from "../../../public/assets/images1/organisation/blogs/sevak-army-organization-blogs-4.jpg";
// import About5 from "../../../public/assets/images1/organisation/blogs/sevak-army-organization-blogs-5.jpg";
import About6 from "../../../public/assets/images/about/1.png";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import LeftImg from "../../../public/assets/images1/organisation/blogs/sevak-army-organization-blogs-10.jpg";



import blog1 from "../../../public/assets/images1/team/sevak-army-team-5.jpg";
import blog2 from "../../../public/assets/images1/team/sevak-army-team-3.jpg";
import blog3 from "../../../public/assets/images1/team/sevak-army-team-7.jpg";
import blog4 from "../../../public/assets/images1/team/sevak-army-team-8.jpg";
import blog5 from "../../../public/assets/images1/team/sevak-army-team-9.jpg";
import Image from "next/image";

import blogImg1 from "../../../public/assets/images1/organisation/blogs/sevak-army-organization-blogs-8.jpg";
import blogImg2 from "../../../public/assets/images1/organisation/blogs/sevak-army-organization-blogs-6.jpg";
import blogImg3 from "../../../public/assets/images1/organisation/blogs/sevak-army-organization-blogs-7.jpg";
const Blog = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const blogs = [
    {
      id: "1",
      title: "Maximising Employee Engagement through Volunteering: Best Practices",
      slug: "1",
      subtitle: "Successful Implementation Techniques.",
      create_at: "25 Jan, 24",
      screens: blogImg1,
      bsing: blog1,
      // recent: recent1,
      // blogSingleImg: blogSingleImg1,
      comment: "61",
      day: "28",
      month: "AUGUST",
      blClass: "format-standard-image",
      athor: "Sanket Kamble",
    },
    {
      id: "2",
      title: "Success Stories: How Companies Are Making a Difference?",
      slug: "2",
      subtitle: " How Companies Are Making a Difference?",
      create_at: "25 Jan, 24",
      screens: blogImg2,
      bsing: blog2,
       // recent: recent2,
      // blogSingleImg: blogSingleImg2,
      comment: "71",
      day: "28",
      month: "AUGUST",
      blClass: "format-standard-image",
      athor: "Rishi Rathod",
    },
    {
      id: "3",
      title: "The Benefits of Corporate Volunteering: Why Your Company Should Get Involved?",
      slug: "3",
      subtitle: "Why Your Company Should Get Involved?",
      create_at: "25 Jan, 24",
      screens: blogImg3,
      bsing: blog3,
       // recent: recent3,
      // blogSingleImg: blogSingleImg3,
      comment: "17",
      day: "28",
      month: "AUGUST",
      blClass: "format-standard-image",
      athor: "Priyanka Ray",
    },
    {
      id: "4",
      title: "How to Align Your CSR Goals with Volunteer Opportunities?",
      slug: "3",
      subtitle: "Why Your Company Should Get Involved?",
      create_at: "25 Jan, 24",
      screens: blogImg3,
      bsing: blog4,
       // recent: recent3,
      // blogSingleImg: blogSingleImg3,
      comment: "14",
      day: "28",
      month: "AUGUST",
      blClass: "format-standard-image",
      athor: "Radhika Jagtap",
    },
    {
      id: "5",
      title: "Innovative Volunteer Programmes: Ideas to Inspire Your Organisation",
      slug: "3",
      subtitle: "Why Your Company Should Get Involved?",
      create_at: "25 Jan, 24",
      screens: blogImg3,
      bsing: blog5,
       // recent: recent3,
      // blogSingleImg: blogSingleImg3,
      comment: "30",
      day: "28",
      month: "AUGUST",
      blClass: "format-standard-image",
      athor: "Gayatri Shinde",
    },
  ];

  return (
    <>
      <section className="wpo-about-section-s2 pb-5 mb-5 pt-5 mt-5">
        <div className="container">
          <div className="wpo-about-wrap">
            <div className="flex-containerrr justify-content-center">
              <div className="">
                <div className="wpo-about-img">
                  <div className="bg-image">
                    <Image src={About6} width={650} alt="About" />
                  </div>
                  <div className="img-1">
                    <Image className="img-fluid" width={250} src={About2} alt="About1" />
                  </div>
                  {/* <div className="img-2">
                    <Image className="img-fluid" width={350} src={About3} alt="About1" />
                  </div> */}
                  <div className="img-3">
                    <Image className="img-fluid" width={150} src={About4} alt="About1" />
                  </div>
                  {/* <div className="img-4">
                    <Image src={About5} alt="About1" />
                  </div> */}
                  <div className="img-5">
                    <Image className="img-fluid" width={200} src={About1} alt="About1" />
                  </div>
                </div>
              </div>
              <div className="">
                <div className="wpo-about-text">
                  <div className="wpo-section-title">
                    <h2 className="text-titleeee">Explore Our Blog for Insights and Updates</h2>
                  </div>
                  <p>
                    Welcome to the Blog section of  Sevak Army Organisation Portal. Here, you’ll find a wealth of
                    information designed to keep you updated on the latest trends in corporate social responsibility,
                    volunteering best practices and success stories from our network. Our blog is a valuable resource
                    for organisations looking to enhance their CSR efforts, engage employees and make a positive impact
                    in their communities.
                  </p>
                  <br></br>
                  <b>
                    Dive into our blog to discover articles that offer practical tips, inspiring stories and expert
                    advice on corporate volunteering and social responsibility.
                  </b>
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
              <SectionTitle subtitle="Blogs - Featured Articles" title="Our Most Recent Updates and Insights" />
            </div>
          </div>
          <div className="blog-wrap mt-5">
            <div className="row">
              {blogs.map((blog, bl) => (
                <div className="col col-lg-4 col-md-6 col-12" key={bl}>
                  <div className="blog-single-card">
                    <div className="image">
                      <Image src={blog.screens} alt="About1" />
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
                            <Image src={blog.bsing} alt="About1" />
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
          <div className="w-100 d-flex justify-content-center pt-100">
            <div className="col col-lg-8 col-md-10 ">
              <div className="wpo-event-item">
                <div className="wpo-event-details-text w-100">
                  <h2 className="w-100 text-center text-titleeee">Why It Matters:</h2>
                </div>
                <div className="wpo-event-details-wrap">
                  <div className="wpo-event-details-tab">
                    <ul className="nav nav-tabs"></ul>
                  </div>
                  <div className="wpo-event-details-content">
                    <div className="tab-content">
                      <div className="active">
                        <div id="Schedule" className="tab-pane active">
                          <ul>
                            <li className="about-section-list">
                              <p className="about-section-paragraph-list">
                                <strong className="heading-paragraph">Stay Updated:</strong>
                                Keep abreast of the latest trends and developments in corporate social responsibility and
                                volunteering.
                              </p>
                            </li>
                            <li className="about-section-list ">
                              <p className="about-section-paragraph-list">
                                <strong className="heading-paragraph">Gain Insights:</strong>
                                Learn from the experiences of other organisations and apply best practices to enhance your
                                CSR efforts.
                              </p>
                            </li>
                            <li className="about-section-list">
                              <p className="about-section-paragraph-list">
                                <strong className="heading-paragraph">Get Inspired:</strong>
                                Find motivation and ideas to create impactful volunteer programs and engage your
                                employees.
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                    <h2 className="display-3 text-white fw-bold">
                      {/* <Link
                      onClick={ClickHandler}
                      to="/causes-single/1"
                    > */}
                      Ready to Make a Difference?
                      {/* </Link> */}
                    </h2>
                    <p>Explore our featured articles</p>
                    <p>
                      Check out our recent blogs for up-to-date information and expert advice on corporate volunteering.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
