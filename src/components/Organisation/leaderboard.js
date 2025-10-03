import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css";
import "swiper/css/navigation";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ServiceCard from "../../components/ServiceSection/ServiceCard";

import abImg7 from "../../../public/assets/images1/school-college/home/leader-2.webp";
import LeaderboardWorking from "../../../public/assets/images1/volunteer/home/volunteer-leaderboard.webp";
import Growth from "../../../public/assets/images1/volunteer/home/growth.webp";
import Boost from "../../../public/assets/images1/volunteer/home/boost.webp";
import Img1 from "../../../public/assets/images/service-single/awareness.webp";
import Img2 from "../../../public/assets/images/service-single/social-support.webp";
import Img3 from "../../../public/assets/images/service-single/school.webp";
import Cimg from "../../../public/assets/images/service-single/fireworks.webp";

// import icon from "../../../public/assets/images/cta/top-icon.png";


const Services2 = [
  {
    Id: "01",
    sImg: Growth,

    title: "Encourage Participation",
    slug: "1",
    description:
      "Motivate employees to engage in various volunteer activities. The more involved your team is, the better your rankings will be.",
  },
  {
    Id: "02",
    sImg: Boost,

    title: "Track Progress",
    slug: "2",
    description:
      "Use our platform to monitor volunteer hours and task completion regularly. This helps set new goals for improvement.",
  },
  {
    Id: "03",
    sImg: Cimg,

    title: "Celebrate Success",
    slug: "2",
    description:
      "Share achievements within your organisation. Celebrating successes boosts morale and encourages others to participate.",
  },
];

const featuresData1 = [
  {
    iconClass: "flaticon-volunteer",
    img: Img1,
    title: "Weekly Leaderboard",
    description:
      "View the organisations whose employees have logged the most volunteer hours during the week.",
  },
  {
    iconClass: "flaticon-solidarity",
    title: "Monthly Leaderboard",
    img: Img2,
    description:
      "See which organisations have the highest cumulative service hours throughout the month.",
  },
  {
    iconClass: "flaticon-charity",
    img: Img3,
    title: "Yearly Leaderboard",
    description:
      "Recognise organisations making the greatest overall contributions and impact over the year.",
  },
];

const LeaderboardPage = (props) => {
  // const { slug } = useParams()

  // const EventDetails = events.find(item => item.slug === slug)

  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  // const SubmitHandler = (e) => {
  //     e.preventDefault()
  // }

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  useEffect(() => {
    const rotate = () => {
      const lastChild = document
        .querySelector(".manroted div:last-child")
        .cloneNode(true);
      document
        .querySelectorAll(".manroted div")
        .forEach((div) => div.classList.remove("firstSlide"));
      document.querySelector(".manroted div:last-child").remove();
      document.querySelector(".manroted").prepend(lastChild);
    };

    const intervalId = setInterval(rotate, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <section className="wpo-about-section pt-0">
        <div className="container section-padding pt-5">
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
                <div className="wpo-about-text p-3 mt-0 pb-1 pb-lg-2 pt-1 pt-lg-2 pb-0">
                  <div className="wpo-section-title mt-0 mb-3 pb-0">
                    <span>Welcome to the Leaderboard!</span>
                    <h2 className="about-heading-second text-titleeee mb-0 pb-0">
                      Celebrating Top Performers!
                    </h2>
                  </div>
                  <p className="mb-0" style={{ textAlign: "justify" }}>
                    Our Leaderboard showcases the amazing efforts of
                    organisations and individual volunteers making a difference
                    through their commitment to social good. Here, you can see
                    who’s leading the way in volunteerism and inspire your team
                    to reach new heights.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container section-padding pt-0">
          <div className="wpo-about-wrap">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-text p-3 pt-0 pt-md-3 mt-0">
                  <div className="wpo-section-title mt-0 mb-3">
                    <span>Top Organisations Leaderboard </span>
                    <h2 className="about-heading-second text-titleeee">
                      Corporate Social Responsibility Leaders
                    </h2>
                  </div>
                  <p style={{ textAlign: "justify" }}>
                    This section highlights organisations excelling in volunteer
                    efforts. The rankings are based on:
                  </p>
                  <p className="mt-2 mb-1">
                    <b>Total Volunteer Hours:</b> The number of hours
                    employees have volunteered.
                  </p>
                  <p className="mb-1">
                    <b>Tasks Completed:</b> How many volunteer tasks employees
                    have successfully finished.
                  </p>
                  <p className="mb-1">
                    <b>Overall Impact:</b> A combined score of volunteer hours
                    and tasks completed, showing each organisation’s total
                    contribution to the community.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-img">
                  {/* <div className="wpo-about-left">
                    <Image src={abImg5} alt="img" />
                  </div> */}
                  <div className="wpo-about-right pt-2 pt-md-5">
                    <Image src={abImg7} alt="Lederboard Tracking System - SevakArmy" />
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
              <SectionTitle subtitle="Top Organisations Leaderboards" title="Check out the current top Organisations!" />
            </div>
          </div>
          <div className="features-wrap mt-3">
            <div className="row justify-content-center gy-4 align-items-stretch">
              {featuresData1.map((feature, index) => (
                <div className="col col-lg-4 col-md-6 col-12" key={index}>
                  <div className="feature-item-wrap h-100">
                    <div
                      className="feature-item"
                      style={{ alignItems: "center", minHeight: '100%' }}
                    >
                      <div className="feature-icon">
                        <div className="icon">
                          <Image src={feature.img} width={110} height={110} className="h-[40px]" alt="Features" />
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

      <section className="section-padding pt-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-12 col-12">
              <SectionTitle subtitle="Impact through Engagement" title="Get Involved and Achieve Recognition" />
            </div>
          </div>
          <div className="service-wrap">
            <div className="row justify-content-center align-items-stretch gy-4 pt-3">
              {Services2.slice(0, 19).map((Service, sitem) => (
                <div
                  className="col col-lg-4 col-md-8 col-sm-6 col-12"
                  key={sitem}
                >
                  <div className="service-card-wrapper d-flex flex-column h-100">
                    <ServiceCard
                      // width="313px"
                      // height="320px"
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
          <div className="row justify-content-center mt-4">
            <div className="col-xl-8 col-lg-10 col-md-12 col-12">
              <p className="text-center mb-0" style={{ fontWeight: "600" }}>
                Join the Leaderboard today and help your organisation make a
                positive impact.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="wpo-cta-section section-padding">
        <div className="bg-overlay">
          <div className="container">
            <div className="bg-color">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="cta-wrap">
                    <h2 className="mb-2">Organisation Leaderboard</h2>
                    <p
                      className="text-center pt-2 px-2"
                      style={{ textAlign: "justify", color: "white" }}
                    >
                      SevakArmy is all about recognizing outstanding Organisation that are making the biggest impact in their communities.
                      Check out the top Organisations on our leaderboard, track their progress, and get inspired by their incredible work!
                      Want your Organisation to be featured? Step up your engagement and make a real difference!
                    </p>
                    <div className="d-flex flex-column gap-3 justify-content-center align-items-center w-100">
                      <Link to="https://app.sevakarmy.com/" target="_blank" className="theme-btn" style={{ width: "fit-content" }}>
                        Get in Touch
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

export default LeaderboardPage;
