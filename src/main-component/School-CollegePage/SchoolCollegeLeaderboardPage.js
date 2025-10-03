// import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css";
import "swiper/css/navigation";

// import Podium from "../../../public/assets/images1/volunteer/home/podium.png";
// import Certification from "../../../public/assets/images1/volunteer/home/certification.png";
// import lImg1 from "../../../public/assets/images1/influencer/leaderboard/motivation.png";
// import lImg2 from "../../../public/assets/images1/influencer/leaderboard/influencer.png";
// import icon from "../../../public/assets/images/cta/top-icon.png";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ServiceCard from "../../components/ServiceSection/ServiceCard";

import Opportunities from "../../../public/assets/images1/volunteer/home/correct.webp";
import Award from "../../../public/assets/images/service/benefit.webp";
import HelpingNgos from "../../../public/assets/images1/volunteer/home/helping-ngos.webp";
import Motivation from "../../../public/assets/images1/volunteer/home/motivation.webp";
import Img1 from "../../../public/assets/images/service-single/awareness.webp";
import Img2 from "../../../public/assets/images/service-single/social-support.webp";
import Img3 from "../../../public/assets/images/service-single/school.webp";
import About2 from "../../../public/assets/images1/school-college/ambassador/points.webp";
import About3 from "../../../public/assets/images1/volunteer/about-us/recognition.webp";
import Referalimg from "../../../public/assets/images1/school-college/ambassador/reward-points.webp";
import Compimg from "../../../public/assets/images1/school-college/ambassador/competition.webp";
import abImg7 from "../../../public/assets/images1/school-college/ambassador/leaderboard-2.webp";
import LeaderboardWorking from "../../../public/assets/images1/school-college/ambassador/leaderboard-1.webp";
import Growth from "../../../public/assets/images1/volunteer/home/growth.webp";
import Boost from "../../../public/assets/images1/volunteer/home/boost.webp";
import Competition from "../../../public/assets/images1/volunteer/home/competition-1.webp";

const Services2 = [
  {
    Id: "01",
    sImg: Growth,

    title: "Student Leaderboard",
    slug: "1",
    description:
      "This ranks individual student volunteers based on their contribution. Whether it's organising events, tutoring or participating in community service projects, students can see how their efforts stack up against their peers.",
  },
  {
    Id: "02",
    sImg: Boost,

    title: "School/College Leaderboard",
    slug: "2",
    description:
      "Institutions are ranked based on the collective efforts of their students. This leaderboard encourages schools and colleges to engage more students in volunteer work, offering an opportunity for educational institutions to take pride in their community contributions.",
  },
  {
    Id: "03",
    sImg: Competition,

    title: "Leaderboard",
    slug: "2",
    description:
      "Schools and colleges can also nominate influential students or ambassadors who inspire others to join the platform. Points are awarded for every student they bring to SevakArmy platform. Influencers can share referral links and each successful registration through their link adds points to their tally.",
  },
];

const featuresData = [
  {
    iconClass: "flaticon-volunteer",
    title: "Points for Participation",
    img: About2,
    alt: 'Earn Coins for Participation with SevakArmy',
    description:
      "Every task that a student completes as a volunteer earns them points. Different tasks may carry different point values based on their complexity or time commitment. For example, a short-term task might earn fewer points compared to a long-term project or a more complex challenge.",
  },
  {
    iconClass: "flaticon-solidarity",
    title: "Recognition for Performance",
    img: About3,
    description:
      "Students and Institutions who top the leaderboard are publicly recognised for their efforts and schools/colleges can also receive collective recognition if their students perform exceptionally well. This fosters a culture of service and achievement among students and institutions alike.",
  },
];

const featuresData1 = [
  {
    iconClass: "flaticon-volunteer",
    img: Img1,
    alt: 'Get recognised for performance with SevakArmy',
    title: "Weekly Leaderboard",
    description:
      "Provides short-term motivation for students and schools to perform well and gain immediate recognition.",
  },
  {
    iconClass: "flaticon-solidarity",
    title: "Monthly Leaderboard",
    img: Img2,
    description:
      "Recognises consistent contributions over a longer period, offering a medium-term goal for students to aim for.",
  },
  {
    iconClass: "flaticon-charity",
    img: Img3,
    title: "Yearly Leaderboard",
    description:
      "Celebrates the most dedicated volunteers and institutions contributing the most hours during the year for recognition.",
  },
];


const SchoolCollegeLeaderboardPage = (props) => {


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
        <div className="container section-padding pb-0">
          <div className="wpo-about-wrap">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-img">
                  <div className="wpo-about-right pt-3">
                    <Image width={580} src={LeaderboardWorking} alt="Leader Board - School & Colleges - SevakArmy" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-text p-3 mt-0 pb-1 pb-lg-2 pt-1 pt-lg-2">
                  <div className="wpo-section-title mt-0 mb-3 pb-0">
                    {/* <div className="custom-panell"> */}
                    <h2 className="about-heading-second text-titleeee mb-0 pb-0">
                      SevakArmy School/Colleges Leaderboard
                    </h2>
                    {/* </div> */}
                  </div>
                  <p style={{ textAlign: "justify" }}>
                    SevakArmy Leaderboard for schools and colleges is an
                    exciting feature designed to inspire competition, track
                    volunteer performance and recognise the efforts of students
                    across different educational institutions. Through this
                    system, we aim to motivate students and institutions to
                    actively participate in volunteer work while offering a
                    transparent and engaging way to measure their impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container section-padding">
          <div className="wpo-about-wrap">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-text p-3 mt-0 pb-1 pb-lg-2 pt-1 pt-lg-2">
                  <div className="wpo-section-title mt-0">
                    <h2 className="about-heading-second text-titleeee mt-0">
                      What is the Leaderboard?{" "}
                    </h2>
                  </div>
                  <p style={{ textAlign: "justify" }}>
                    SevakArmy Leaderboard is a dynamic tracking system that
                    ranks students, schools and colleges based on their
                    participation in volunteer activities. It’s a tool that
                    encourages healthy competition by assigning points for each
                    task completed by student volunteers. These points
                    accumulate over time, allowing participants to see where
                    they stand compared to others in their institution or across
                    the broader SevakArmy network.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-img">
                  {/* <div className="wpo-about-left">
                    <Image src={abImg5} alt="img" />
                  </div> */}
                  <div className="wpo-about-right pt-3 pt-lg-5">
                    <Image src={abImg7} height={383} alt="Leader Board - School & Colleges - SevakArmy" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wpo-features-area section-padding pt-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-12 col-12">
              <SectionTitle subtitle="Earn Points, Gain Recognition" title="How it Works?" />
            </div>
          </div>
          <div className="features-wrap mt-3">
            <div className="row justify-content-center gy-4 align-items-stretch">
              {featuresData.map((feature, index) => (
                <div className="col col-lg-5 col-md-6 col-12" style={{ minHeight: '100%' }} key={index}>
                  <div className="feature-item-wrap h-100">
                    <div className="feature-item h-100">
                      <div className="feature-text h-100">
                        <div className="mb-4 d-flex justify-content-center align-items-center">
                          <Image
                            src={feature.img}
                            alt={feature.alt}
                            className="img-fluid"
                            style={{
                              height: "300px",
                              width: "100%",
                              objectFit: "cover",
                              maxHeight: "320px",
                            }}
                          />
                        </div>
                        <h2 className="fw-bold px-2">{feature.title}</h2>
                        <div className="p-2 h-100">
                          {<p className="p-2">{feature.description}</p>}
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

      <div className="container section-padding pt-3 pt-1">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-12 col-12">
            <SectionTitle subtitle="Student’s Rankings" title="Types of Leaderboards" />
          </div>
        </div>
        <div className="service-wrap mt-3">
          <div className="row justify-content-center  align-items-stretch gy-4">
            {Services2.slice(0, 19).map((Service, sitem) => (
              <div
                className="col col-lg-4 col-md-8 col-sm-6 col-12"
                key={sitem}
              >
                <div className="service-card-wrapper d-flex flex-column h-100">
                  <ServiceCard
                    // width="313px"
                    // height="480px"
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
      </div>


      <section className="wpo-features-area section-padding pt-0 mt-3">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xxl-8 col-md-12 col-12">
              <SectionTitle
                subtitle="Track Your Progress"
                title="Weekly, Monthly and Yearly Rankings"
                paragarap="SevakArmy updates leaderboards weekly, monthly, and yearly, driving continuous improvement and engagement. This system offers regular recognition opportunities, motivating students and institutions to stay active throughout the year."
              />
            </div>
          </div>
          <div className="features-wrap">
            <div className="row justify-content-center">
              {featuresData1.map((feature, index) => (
                <div className="col col-lg-4 col-md-6 col-12" key={index}>
                  <div className="feature-item-wrap">
                    <div
                      className="feature-item"
                      style={{ alignItems: "center", height: "200px" }}
                    >
                      <div className="feature-icon">
                        <div className="icon">
                          <Image src={feature.img} width={110} height={110} alt="School College" className="h-[40px]" />
                        </div>
                      </div>
                      <div className="feature-text">
                        <h2 className="fs-5">{feature.title}</h2>
                        <p className="fs-6">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="row justify-content-center">
          <div className="Gamification and Rewards">
            <SectionTitle
              title="Gamification and Rewards"
              paragarap="To make volunteering fun and rewarding, the leaderboard leverages gamification. Much like in a mobile game, where players accumulate points and move up levels, SevakArmy’s leaderboard offers a similar sense of achievement and competition."
            />
          </div>
        </div>
        <div className="mt-3">
          <section className={" wpo-fun-fact-section-s3"}>
            <div className="container mt-3">
              <div className="service-wrap">
                <div className="row justify-content-center gap-3 ">
                  <div className="service-item px-4 py-4 col-lg-4 col-md-6 col-sm-6 col-11 sevak-custom-carddd">
                    <div className="info d-flex flex-column justify-content-center flex-no-wrap">
                      <div className="w-100 d-flex py-4 justify-content-center">
                        <div className="icon">
                          <Image src={Award} width={60} alt="img" />
                        </div>
                      </div>
                      <h2 className="text-center">Milestone Rewards</h2>
                      <p
                        className="w-100 text-center ms-0"
                        style={{ maxWidth: "100%" }}
                      >
                        Volunteers can receive rewards when they reach specific
                        point thresholds. These rewards could range from
                        e-certificates to special recognition at events or even
                        opportunities for further leadership roles within Sevak
                        Army.
                      </p>
                    </div>
                  </div>
                  <div className="service-item px-4 py-4 col-lg-4 col-md-6 col-sm-6 col-11 sevak-custom-carddd">
                    <div className="info d-flex flex-column justify-content-center flex-no-wrap">
                      <div className="w-100 d-flex py-4 justify-content-center">
                        <div
                          className="icon"
                          style={{
                            backgroundColor: "#FFFCF4",
                            border: "1px solid #EBB011",
                          }}
                        >
                          <Image src={HelpingNgos} width={60} alt="img" />
                        </div>
                      </div>
                      <h2 className="text-center">Certificates and Badges</h2>
                      <p
                        className="w-100 text-center ms-0"
                        style={{ maxWidth: "100%" }}
                      >
                        As volunteers climb higher on the leaderboard, they can
                        earn digital badges and digital certificates that
                        recognise their achievements. These digital badges can
                        be shared on social media, showcasing their dedication
                        to community service.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section className="wpo-about-section pt-0">
        <div className="container section-padding pt-0 pt-md-5 pb-0">
          <div className="wpo-about-wrap">
            <div className="row">
              <div className="col-lg-5 col-md-12 col-12">
                <div className="wpo-about-img">
                  {/* <div className="wpo-about-left">
                    <Image src={abImg5} alt="img" />
                  </div> */}
                  <div className="wpo-about-right pt-3">
                    <Image src={Referalimg} alt="Earn Referrals & Recognisation with SevakArmy" width={400} />
                  </div>
                </div>
              </div>
              <div className="col-lg-7 col-md-12 col-12">
                <div className="wpo-about-text p-3 mt-0 pb-1 pb-lg-2 pt-1 pt-lg-2 pb-0">
                  <div className="wpo-section-title mt-0 mb-3">
                    {/* <span>Benefits</span> */}
                    <h2 className="about-heading-second text-titleeee">
                      Referral Points and Recognition
                    </h2>
                  </div>
                  <p className="mt-0 pt-0" style={{ textAlign: "justify" }}>
                    Schools and colleges get unique referral links, allowing
                    institutions to invite others to join the platform. As
                    students from your institution register and volunteer
                    through this link, your school or college earns referral
                    points. This boosts your institution's rank on the
                    institutional leaderboard, recognising your role in
                    promoting community service and social responsibility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wpo-about-section pt-0">
        <div className="container section-padding">
          <div className="wpo-about-wrap">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-text p-3 mt-0 pb-1 pb-lg-2 pt-1 pt-lg-2">
                  <div className="wpo-section-title mt-0 mb-3 pt-0">
                    {/* <span>Benefits</span> */}
                    <h2 className="about-heading-second text-titleeee">
                      Inspiring Healthy Competition
                    </h2>
                  </div>
                  <p className="mt-0 pt-0" style={{ textAlign: "justify" }}>
                    The leaderboard fosters a healthy sense of competition among
                    students, schools and colleges, driving them to increase
                    their participation in volunteering. Educational
                    institutions can promote the leaderboard as a way to
                    motivate their students, offering additional recognition and
                    rewards to those who perform well. <br />
                    The leaderboard is a tool not only for tracking but for
                    celebrating the spirit of service. It showcases the tangible
                    impact that students and institutions are making in their
                    communities while also recognising the efforts and
                    dedication that go into every volunteer task.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-img">
                  {/* <div className="wpo-about-left">
                    <Image src={abImg5} alt="img" />
                  </div> */}
                  <div className="wpo-about-right pt-3 pt-lg-5">
                    <Image src={Compimg} alt="Inspiring Healthy Competition for volunteering with SevakArmy" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-12 col-12">
            <SectionTitle
              title="Why the Leaderboard Matters for Schools and Colleges?"
              paragarap="For schools and colleges, the leaderboard offers a unique way to measure and promote their students’ involvement in social causes. By engaging students through SevakArmy platform, institutions can:"
            />
          </div>
        </div>
        <div className="mt-3">
          <section className={" wpo-fun-fact-section-s3"}>
            <div className="container mt-3">
              <div className="service-wrap">
                <div className="row justify-content-center gap-3  align-items-stretch gy-4">
                  <div className="service-item px-4 py-4 col-xl-3 col-lg-4 col-md-6 col-sm-8 col-11 sevak-custom-carddd">
                    <div className="info d-flex flex-column justify-content-center flex-no-wrap">
                      <div className="w-100 d-flex py-4 justify-content-center">
                        <div className="icon">
                          <Image src={Opportunities} width={60} alt="img" />
                        </div>
                      </div>
                      <h2 className="text-center">
                        Foster a Culture of Service
                      </h2>
                      <p
                        className="w-100 text-center ms-0"
                        style={{ maxWidth: "100%" }}
                      >
                        The leaderboard helps build a spirit of community
                        involvement, encouraging students to volunteer not just
                        for personal growth but also to represent their
                        institution proudly.
                      </p>
                    </div>
                  </div>
                  <div className="service-item px-4 py-4 col-xl-3 col-lg-4 col-md-5 col-sm-8 col-11 sevak-custom-carddd">
                    <div className="info d-flex flex-column justify-content-center flex-no-wrap">
                      <div className="w-100 d-flex py-4 justify-content-center">
                        <div
                          className="icon"
                          style={{
                            backgroundColor: "#FFFCF4",
                            border: "1px solid #EBB011",
                          }}
                        >
                          <Image src={HelpingNgos} width={60} alt="img" />
                        </div>
                      </div>
                      <h2 className="text-center">Recognition and Prestige</h2>
                      <p
                        className="w-100 text-center ms-0"
                        style={{ maxWidth: "100%" }}
                      >
                        Schools and colleges that top the leaderboard gain
                        recognition not just within the platform but in the
                        wider community. This highlights their commitment to
                        nurturing socially responsible students and contributing
                        to societal well-being.
                      </p>
                    </div>
                  </div>
                  <div className="service-item px-4 py-4 col-xl-3 col-lg-4 col-md-5 col-sm-8 col-11 sevak-custom-carddd">
                    <div className="info d-flex flex-column justify-content-center flex-no-wrap">
                      <div className="w-100 d-flex py-4 justify-content-center">
                        <div
                          className="icon"
                          style={{
                            backgroundColor: "#FFFCF4",
                            border: "1px solid #00af90",
                          }}
                        >
                          <Image src={Motivation} width={60} alt="img" />
                        </div>
                      </div>
                      <h2 className="text-center">Motivational Tool</h2>
                      <p
                        className="w-100 text-center ms-0"
                        style={{ maxWidth: "100%" }}
                      >
                        The competitive nature of the leaderboard encourages
                        more students to participate, as they can see the impact
                        of their efforts in real-time and be rewarded for it.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section className="wpo-cta-section section-padding pt-0 mt-md-5">
        <div className="bg-overlay">
          <div className="container">
            <div className="bg-color">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="cta-wrap">
                    <h2 className="mb-2">Get Started Today</h2>
                    <p
                      className="text-center pt-2 px-2"
                      style={{ textAlign: "justify", color: "white" }}
                    >
                      Join SevakArmy Leaderboard and see how your school or
                      college can rise to the top. Encourage your students to
                      engage in meaningful volunteer work, track their progress,
                      and celebrate their achievements on a platform that values
                      service and social contribution.
                    </p>
                    <div className="d-flex flex-column gap-3 justify-content-center align-items-center w-100">
                      <Link
                        to="https://app.sevakarmy.com/" target="_blank"
                        className="theme-btn"
                        style={{ width: "fit-content" }}
                      >
                        Get Started
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

export default SchoolCollegeLeaderboardPage;
