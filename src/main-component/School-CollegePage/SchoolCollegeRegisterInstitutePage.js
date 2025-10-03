import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css";
import "swiper/css/navigation";

import NewsletterPopup from "../../components/NewsletterPopup";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

import Path2 from "../../../public/assets/images1/school-college/ambassador/inspire-student.webp";
import VolunteerOpportunities from "../../../public/assets/images1/volunteer/home/task.webp";
import Opportunities from "../../../public/assets/images1/volunteer/home/equal-rights.webp";
import Volunterring from "../../../public/assets/images1/volunteer/home/volunterring.webp";
import United from "../../../public/assets/images1/volunteer/home/united.webp";
import SignUp from "../../../public/assets/images1/volunteer/home/signup.webp";
import ShareLink from "../../../public/assets/images1/school-college/ambassador/share-link.webp";
import Reccogn from "../../../public/assets/images1/school-college/home/award-transformed.webp";

// import icon from "../../../public/assets/images/cta/top-icon.png";

const featuresData = [
  {
    // iconClass: "flaticon-volunteer",
    svg: Opportunities,
    title: "Variety of Opportunities",
    description:
      "Give students diverse tasks across fields like healthcare, education, and environmental support.",
  },
  {
    // iconClass: "flaticon-charity",
    title: "Flexible Commitments",
    svg: Volunterring,
    description:
      "Students can find tasks that fit seamlessly with their schedules.",
  },
  {
    // iconClass: "flaticon-solidarity",
    svg: United,
    title: "Skills Development",
    description:
      "Students acquire leadership, teamwork and social responsibility skills, gaining real-world experience.",
  },
  {
    // iconClass: "flaticon-solidarity",
    svg: United,
    title: "Institutional Recognition",
    description:
      "Track, celebrate and reward students’ contributions to the community.",
  },
];

const BecomeInfluencerPage = (props) => {
  const [shownewsletter, setShowNewsletter] = useState(false);
  // const ClickHandler = () => {
  //     window.scrollTo(10, 0);
  // };

  // useEffect(() => {
  //   const rotate = () => {
  //     const lastChild = document
  //       .querySelector(".manroted div:last-child")
  //       .cloneNode(true);
  //     document
  //       .querySelectorAll(".manroted div")
  //       .forEach((div) => div.classList.remove("firstSlide"));
  //     document.querySelector(".manroted div:last-child").remove();
  //     document.querySelector(".manroted").prepend(lastChild);
  //   };

  //   const intervalId = setInterval(rotate, 4000);

  //   return () => clearInterval(intervalId);
  // }, []);

  return (
    <>
      <NewsletterPopup
        shownewsletter={shownewsletter}
        setShowNewsletter={setShowNewsletter}
      />
      <section className="wpo-about-section pt-0">
        <div className="container section-padding pt-5">
          <div className="wpo-about-wrap">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-img">
                  <div className="wpo-about-right pt-3">
                    <Image src={Path2} width="auto" height="auto" alt="Inspire Service in Students with SevakArmy" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-text p-3 pb-0 mt-0">
                  <div className="wpo-section-title mt-0 mb-3">
                    <span>Empowering Schools to Champion Community Impact</span>
                    <h2 className="about-heading-second text-titleeee">
                      Inspire Service in Students
                    </h2>
                  </div>
                  <p className="mt-0 pt-0 mb-0" style={{ textAlign: "justify" }}>
                    Empower your institution to encourage community impact
                    through student volunteerism. SevakArmy offers a seamless
                    way for schools and colleges to guide students towards
                    meaningful social contributions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container d-flex flex-column justify-content">
          <div className="wpo-event-details-text pt-0 mt-0">
            <SectionTitle
              subtitle="A Simple Process"
              title="How It Works: From Registration to Engagement"
            />
          </div>
        </div>

        <div className="container">
          <div className="wpo-about-wrap">
            <div className="row">
              <div className="col-lg-7 col-md-12 col-12">
                <div className="wpo-about-text p-3 mt-0 pb-1 pb-lg-2 pt-1 pt-lg-2">
                  <div className="custom-panell">
                    <h3>Step 1: Register Your Institution</h3>
                  </div>
                  <p className="mt-0 pt-0" style={{ textAlign: "justify" }}>
                    Register your school or college with SevakArmy. With a
                    registered account, institutions can encourage students to
                    join tasks aligned with their interests, abilities and
                    availability.
                  </p>
                </div>
              </div>
              <div className="col-lg-5 col-md-12 col-12">
                <div className="wpo-about-img d-flex w-100">
                  <div className="wpo-about-right pt-lg-4">
                    {/* <Image src={abImg7} alt="img" /> */}
                    <Image width={450} src={SignUp} alt="Register & Sign In to SevakArmy" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container pt-5">
          <div className="wpo-about-wrap">
            <div className="row flex-wrap-reverse">
              <div className="col-lg-5 col-md-12 col-12">
                <div className="wpo-about-img d-flex w-100">
                  <div className="wpo-about-right pt-0">
                    <Image width={500} height="auto" src={ShareLink} alt="Share a Unique Link with Students" />
                  </div>
                </div>
              </div>
              <div className="col-lg-7 col-md-12 col-12">
                <div className="wpo-about-text p-3 pt-0">
                  <div className="custom-panell">
                    <h3>Step 2: Share a Unique Link with Students</h3>
                  </div>
                  <p className="mt-0 pt-0" style={{ textAlign: "justify" }}>
                    Upon registration, each institution receives a personalised
                    referral link to share with students. This link makes it
                    easy for students to create their own profiles on SevakArmy
                    and explore a range of volunteer tasks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container pt-5">
          <div className="wpo-about-wrap">
            <div className="row">
              <div className="col-lg-7 col-md-12 col-12">
                <div className="wpo-about-text p-3 mt-0 pb-1 pb-lg-2 pt-1 pt-lg-2">
                  <div className="custom-panell">
                    <h3>Step 3: Explore Volunteering Tasks</h3>
                  </div>
                  <div className="mt-0 pt-0" style={{ textAlign: "justify" }}>
                    <p className="mb-0">   Students can use filters to find roles that align with
                      their:</p>
                    <ul className="list-disc list-inside" style={{ paddingLeft: '0px' }}>
                      <li>
                        <p className="mb-0">
                          {" "}
                          <b>Skills : </b> From tutoring to event planning,
                          students can match their abilities to the right tasks.
                        </p>
                      </li>
                      <li>
                        <p className="mb-0">
                          {" "}
                          <b>Interests : </b> Projects span education, the
                          environment, health and more, letting students pursue
                          areas they’re passionate about.
                        </p>
                      </li>
                      <li>
                        <p className="mb-0">
                          <b>Availability : </b> Flexible opportunities range
                          from short-term projects to ongoing commitments that
                          fit around academic schedules.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-12 col-12">
                <div className="wpo-about-img d-flex w-100">
                  <div className="wpo-about-right">
                    <Image
                      src={VolunteerOpportunities}
                      width={500}
                      alt="Explore Volunteering Tasks"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container pt-5">
          <div className="wpo-about-wrap">
            <div className="row flex-wrap-reverse">
              <div className="col-lg-5 col-md-12 col-12">
                <div className="wpo-about-img d-flex w-100">
                  <div className="wpo-about-right">
                    <Image src={Reccogn} width={500} height="auto" alt="Gain Recognition and Rewards" />
                  </div>
                </div>
              </div>
              <div className="col-lg-7 col-md-12 col-12">
                <div className="wpo-about-text p-3 mt-0 pb-1 pb-lg-2 pt-1 pt-lg-2">
                  <div className="custom-panell">
                    <h3>Step 4: Gain Recognition and Rewards</h3>
                  </div>
                  <p className="mt-0 pt-0" style={{ textAlign: "justify" }}>
                    Each contribution counts! Students earn points, e-badges,
                    and e-certificates as they volunteer, building a portfolio
                    of achievements that enhance personal and professional
                    growth. The leaderboard feature keeps students motivated to
                    engage more actively.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding container">
        <div className="row justify-content-center">
          {/* <div className="col-lg-6 col-md-12 col-12">
                        <SectionTitle subtitle="Serve with Impact" />
                    </div> */}
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-12 col-12 mt-2">
            <SectionTitle subtitle="Make a Lasting Impact" title="Why Register with SevakArmy?" />
          </div>
        </div>

        <div className="wpo-features-area pt-4">
          <div className="features-wrap">
            <div className="row justify-content-center column-gappp">
              {featuresData.map((feature, index) => (
                <div
                  className="col col-xl-6 col-lg-6 col-md-6 col-12"
                  key={index}
                  style={{}}
                >
                  <div
                    className="feature-item-wrap"
                    style={{ display: "flex", alignItems: "flex-start" }}
                  >
                    <div
                      className="feature-item px-3 mb-0"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                        height: "190px",
                      }}
                    >
                      <div
                        style={{ display: "flex", alignItems: "flex-start" }}
                      >
                        <div className="feature-icon">
                          <div className="icon">
                            {feature.iconClass ? (
                              <i className={`fi ${feature.iconClass}`}></i>
                            ) : (
                              <Image src={feature.svg} alt={feature.svg} />
                            )}
                          </div>
                        </div>
                        <div className="feature-text">
                          <h2 className="fs-5">{feature.title}</h2>
                          <p className="fs-6" style={{ textAlign: "justify" }}>
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="wpo-cta-section section-padding mt-2">
        <div className="bg-overlay">
          <div className="container">
            <div className="bg-color">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="cta-wrap">
                    <h2 className="mb-2">Empower Your Students Today!</h2>
                    <p
                      className="px-2 mt-3"
                      style={{ color: "white" }}
                    >
                      Register your institution with SevakArmy and create a
                      culture of service that shapes responsible and engaged
                      citizens.
                    </p>
                    <Link
                      to="https://app.sevakarmy.com/" target="_blank"
                      className="theme-btn"
                    >
                      Get Started Today
                    </Link>
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

export default BecomeInfluencerPage;
