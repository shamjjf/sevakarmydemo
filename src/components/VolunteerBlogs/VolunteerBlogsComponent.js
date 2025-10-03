import React from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";



import blog1 from "../../../public/assets/images1/team/sevak-army-team-4.jpg";
import blog2 from "../../../public/assets/images1/team/sevak-army-team-2.jpg";
import blog3 from "../../../public/assets/images1/team/sevak-army-team-6.jpg";
import blog4 from "../../../public/assets/images1/team/sevak-army-team-8.jpg";
import blog5 from "../../../public/assets/images1/team/sevak-army-team-10.jpg";

import blogImg1 from "../../../public/assets/images1/volunteer/blogs/sevak-army-volunteer-blogs-1.jpg";
import blogImg2 from "../../../public/assets/images1/volunteer/blogs/sevak-army-volunteer-blogs-2.jpg";
import blogImg3 from "../../../public/assets/images1/volunteer/blogs/sevak-army-volunteer-blogs-3.jpg";
import blogImg4 from "../../../public/assets/images1/volunteer/blogs/sevak-army-volunteer-blogs-4.jpg";
import blogImg5 from "../../../public/assets/images1/volunteer/blogs/sevak-army-volunteer-blogs-5.jpg";
import Image from "next/image";

const VolunteerBlogsComponent = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const blogs = [
    {
      id: "1",
      title: "Join the Movement: How One Small Task Can Create Lasting Impact through SevakArmy",
      slug: "1",
      subtitle: "The Power of Small Actions",
      create_at: "25 Jan, 24",
      screens: blogImg1,
      bsing: blog1,
      // recent: recent1,
      // blogSingleImg: blogSingleImg1,
      comment: "35",
      day: "",
      month: "",
      blClass: "format-standard-image",
      athor: "Sanket Kamble",
    },
    {
      id: "2",
      title: "SevakArmy 101: A Guide for New Volunteers to Start Making a Difference",
      slug: "2",
      subtitle: "Understanding SevakArmy",
      create_at: "25 Jan, 24",
      screens: blogImg2,
      bsing: blog2,
       // recent: recent2,
      // blogSingleImg: blogSingleImg2,
      comment: "21",
      day: "28",
      month: "AUGUST",
      blClass: "format-standard-image",
      athor: "Rishi Rathod",
    },
    {
      id: "3",
      title: "SevakArmy 101: Unleash Your Skills for Good - How SevakArmy Helps You Make Real Change",
      slug: "3",
      subtitle: "Understanding the Power of Your Skills",
      create_at: "25 Jan, 24",
      screens: blogImg3,
      bsing: blog3,
       // recent: recent3,
      // blogSingleImg: blogSingleImg3,
      comment: "10",
      day: "28",
      month: "AUGUST",
      blClass: "format-standard-image",
      athor: "Priyanka Ray",
    },
    {
      id: "4",
      title: "The Power of Volunteering: Transforming Communities with SevakArmy",
      slug: "3",
      subtitle: "The Transformative Impact of Volunteering",
      create_at: "25 Jan, 24",
      screens: blogImg4,
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
      title: "Turning Passion into Impact: How SevakArmy Bridges Volunteers and Meaningful Projects",
      slug: "3",
      subtitle: "Finding the Right Fit: Matching Volunteers with Purpose",
      create_at: "25 Jan, 24",
      screens: blogImg5,
      bsing: blog5,
       // recent: recent3,
      // blogSingleImg: blogSingleImg3,
      comment: "17",
      day: "28",
      month: "AUGUST",
      blClass: "format-standard-image",
      athor: "Gayatri Shinde",
    },
  ];

  return (
    <>
      {/* <section className="wpo-about-section-s2 section-padding">
        <div className="container">
          <div className="wpo-about-wrap">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-img">
                  <div className="bg-image">
                    <Image src={About1} alt="Volunteer Blogs" />
                  </div>
                  <div className="img-1">
                    <Image src={About2} alt="Volunteer Blogs" />
                  </div>
                  <div className="img-2">
                    <Image src={About3} alt="Volunteer Blogs" />
                  </div>
                  <div className="img-3">
                    <Image src={About4} alt="Volunteer Blogs" />
                  </div>
                  <div className="img-4">
                    <Image src={About5} alt="Volunteer Blogs" />
                  </div>
                  <div className="img-5">
                    <Image src={About6} alt="Volunteer Blogs" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-text">
                  <div className="wpo-section-title">
                    <h2>Explore Our Blog for Insights and Updates</h2>
                  </div>
                  <p>
                    Welcome to the Blog section of  SevakArmy Organisation Portal. Here, you’ll find a wealth of
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
      </section> */}
      <section className={props.hclass}>
        <div className="container section-padding">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-12 col-12">
              <SectionTitle subtitle="Blog Highlights" title="Latest News & Insights" />
            </div>
          </div>
          <div className="blog-wrap">
            <div className="row">
              {blogs.map((blog, bl) => (
                <div className="col col-lg-4 col-md-6 col-12" key={bl}>
                  <div className="blog-single-card" style={{ minHeight: "550px" }}>
                    <div className="image">
                      <Image src={blog.screens} alt="Volunteer Blogs" />
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
                            <Image src={blog.bsing} alt="Volunteer Blogs" />
                          </div>
                          {blog.athor}
                        </li>
                        <li>
                          <i className="flaticon-chatting"></i>
                          {blog.comment} Comments
                        </li>
                      </ul>
                      <h2>{blog.title}</h2>
                      {/* <p >{blog.subtitle}</p> */}
                    </div>
                    {/* <div className="blog-btn"> */}
                    {/* <span>Read More...</span>
                        <i className="flaticon-right-arrow-2"></i> */}
                    {/* </div> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* <div className="col col-lg-11">
            <div className="wpo-event-item">
              <div className="wpo-event-details-text">
                <h2>Why It Matters:</h2>
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
          </div> */}
          <br></br>
        </div>
      </section>

      {/* <section className={"" + props.hclass}>
        <div className="causes-top">
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
      </section> */}
    </>
  );
};

export default VolunteerBlogsComponent;
