import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import { Link } from "react-router-dom";
import Image from "next/image";

import "slick-carousel/slick/slick-theme.css";
import "swiper/css";
import "swiper/css/navigation";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ServiceCard from "../../components/ServiceSection/ServiceCard";

import Honour from "../../../public/assets/images1/volunteer/home/honour.webp";
import Certificates from "../../../public/assets/images1/volunteer/home/certificates.webp";
import Stories from "../../../public/assets/images1/volunteer/home/stories.webp";
import LeaderboardWorking from "../../../public/assets/images1/organisation/home/digital-certificate-1.webp";
import DCertificate from "../../../public/assets/images1/organisation/home/digital-certificate.webp";
import Growth from "../../../public/assets/images1/volunteer/home/growth.webp";
import Boost from "../../../public/assets/images1/volunteer/home/boost.webp";
import Cimg from "../../../public/assets/images/service-single/award.webp";

// import icon from "../../../public/assets/images/cta/top-icon.png";

const featuresData = [
  {
    svg: Honour,
    description:
      "Share on LinkedIn, your website and other platforms to showcase your commitment to CSR.",
  },
  {
    svg: Certificates,
    description:
      "Highlight in CSR reports and presentations as part of your social impact strategy.",
  },
  {
    svg: Stories,
    description:
      "Use it as a tool to motivate employees by recognising their contributions to a greater cause.",
  },
];

const Services2 = [
  {
    Id: "01",
    sImg: Growth,

    title: "CSR Participation Certificate",
    slug: "1",
    description:
      "Receive a digital certificate celebrating your organisation’s active participation in volunteer initiatives. This certificate acknowledges your commitment to social responsibility.",
  },
  {
    Id: "02",
    sImg: Boost,

    title: "Milestone Achievements",
    slug: "2",
    description:
      "Unlock special milestone certificates and badges as your organisation reaches significant volunteer hours or completes a set number of tasks. Recognise these achievements as a testament to your team’s dedication.",
  },
  {
    Id: "03",
    sImg: Cimg,

    title: "Top Contributor Awards",
    slug: "2",
    description:
      "Organisations with high volunteer engagement will be featured on our Leaderboard. Top Contributor Awards honour the organisations that lead in volunteer hours and participation, giving you visibility and recognition.",
  },
];

const OrganisationRecognitionPage = (props) => {
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
      <section className="wpo-about-section pt-0">
        <div className="container section-padding">
          <div className="wpo-about-wrap">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-img">
                  {/* <div className="wpo-about-left">
                    <Image src={abImg5} alt="img" />
                  </div> */}
                  <div className="wpo-about-right pt-3">
                    <Image width={500} src={DCertificate} alt="Celebrate Your Organisation’s Impact with Digital Certificates and Awards" style={{ objectFit: 'contain' }} />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-text p-3 mt-0 pb-1 pb-lg-2 pt-1 pt-lg-2">
                  <div className="wpo-section-title mt-0 mb-3 pb-0">
                    {/* <div className="custom-panell"> */}
                    <span className="">
                      Rewards and Recognition for Organisations
                    </span>
                    <h2 className="about-heading-second text-titleeee mb-0 pb-0">
                      Celebrate Your Organisation’s Impact with Digital
                      Certificates and Awards
                    </h2>
                    {/* </div> */}
                  </div>
                  {/* <h3 className="mt-0">
                    How  SevakArmy Influencer Leaderboard Works?
                  </h3> */}
                  <p style={{ textAlign: "justify" }}>
                    At SevakArmy, we understand the importance of recognising
                    your organisation’s dedication to Corporate Social
                    Responsibility (CSR). By encouraging your employees to
                    volunteer, you not only support meaningful causes but also
                    showcase your organisation’s commitment to making a positive
                    impact. That’s why we offer a range of digital certificates
                    and awards to celebrate your organisation’s achievements in
                    driving social change.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wpo-about-section pt-0 mt-0">
        <div className="container">
          <div className="wpo-about-wrap mt-0">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-text p-3 pt-0 pt-md-3 mt-0">
                  <div className="wpo-section-title mt-0 mb-3 pb-0">
                    <h2 className="about-heading-second text-titleeee mb-0 mt-0 pb-0">
                      How It Works?
                    </h2>
                    {/* </div> */}
                  </div>
                  {/* <h3 className="mt-0">
                    How  SevakArmy Influencer Leaderboard Works?
                  </h3> */}
                  <p style={{ textAlign: "justify" }}>
                    Organisations registering with SevakArmy can earn digital
                    certificates and awards based on the collective volunteer
                    efforts of their employees. Every task completed by your
                    team contributes to your CSR impact and these recognitions
                    highlight your organisation’s role in fostering a culture of
                    giving back.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-img">
                  {/* <div className="wpo-about-left">
                    <Image src={abImg5} alt="img" />
                  </div> */}
                  <div className="wpo-about-right pt-3">
                    <Image width={550} src={LeaderboardWorking} alt="How SevakArmy online platform works" style={{ objectFit: 'contain' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-12 col-12">
              <SectionTitle subtitle="Recognising Volunteers’ Engagement" title="Types of Digital Certificates and Awards" />
            </div>
          </div>
          <div className="service-wrap mt-2">
            <div className="row justify-content-center align-items-stretch gy-4 pt-3">
              {Services2.slice(0, 19).map((Service, sitem) => (
                <div
                  className="col col-lg-4 col-md-8 col-sm-6 col-12"
                  key={sitem}
                >
                  <div className="service-card-wrapper d-flex flex-column h-100">
                    <ServiceCard
                      // width="313px"
                      // height="400px"
                      title={Service.title}
                      img={Service.sImg}
                      slug={Service.slug}
                      sdescription={Service.description}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-10 col-md-12 col-12">
                            <p className="text-center" style={{ fontWeight: '500' }}>Join the Leaderboard today and help your organisation make a positive impact.</p>
                        </div>
                    </div> */}
        </div>
      </section>

      <section className="container section-padding pt-0">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-12 col-12">
            <SectionTitle
              title="Showcase Your Organisation’s Achievements"
              paragarap="Every digital certificate and award can be downloaded directly from SevakArmy platform, allowing your organisation to:"
            />
          </div>
        </div>

        <div className="wpo-features-area pt-0 px-2">
          <div className="features-wrap">
            <div className="row justify-content-center column-gappp">
              {featuresData.map((feature, index) => (
                <div className="col col-lg-4 col-md-6 col-12" key={index}>
                  <div className="feature-item-wrap">
                    <div
                      className="feature-item  align-items-center"
                      style={{ alignItems: "center" }}
                    >
                      <div className="feature-icon">
                        <div className="icon">
                          {feature.iconClass ? (
                            <i className={`fi ${feature.iconClass}`}></i>
                          ) : (
                            <Image src={feature.svg} alt="Features" />
                          )}
                        </div>
                      </div>
                      <div className="feature-text">
                        <h2 className="fs-5">{feature.title}</h2>
                        <p
                          className="fs-6"
                          style={{ textAlign: "justify", fontSize: "21px" }}
                        >
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="wpo-cta-section section-padding pt-0">
        <div className="bg-overlay">
          <div className="container">
            <div className="bg-color">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="cta-wrap">
                    <h2 className="mb-2">
                      Join the Leaderboard and Earn Your First Digital
                      Certificate!
                    </h2>
                    <p className="text-center text-white pt-3">
                      The more you volunteer, the more recognition you’ll earn.
                      Track your organisation’s progress on [SevakArmy
                      Leaderboard], climb the ranks and start collecting your
                      digital certificates today.
                    </p>
                    <div className="d-flex flex-column gap-3 justify-content-center align-items-center w-100 mt-3">
                      <Link
                        to="https://app.sevakarmy.com/" target="_blank"
                        className="theme-btn"
                        style={{ width: "fit-content" }}
                      >
                        Encourage Your Team to Volunteer and Earn Recognition!
                      </Link>
                    </div>
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

export default OrganisationRecognitionPage;
