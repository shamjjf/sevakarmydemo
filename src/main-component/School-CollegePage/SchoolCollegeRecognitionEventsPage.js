import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css";
import "swiper/css/navigation";

import SectionTitle from "../../components/SectionTitle/SectionTitle";

import Honour from "../../../public/assets/images1/volunteer/home/honour.webp";
import Certificates from "../../../public/assets/images1/volunteer/home/certificates.webp";
import Stories from "../../../public/assets/images1/volunteer/home/stories.webp";
import Networking from "../../../public/assets/images1/volunteer/home/networking.webp";

// import MeetNetwork from "../../../public/assets/images1/volunteer/home/meet-network.webp";
import MeetNetwork from "../../../public/assets/new-images/common/celebration-img.jpg";

// import LeaderboardWorking from "../../../public/assets/images1/school-college/ambassador/recognise.webp";
import LeaderboardWorking from "../../../public/assets/new-images/common/award.jpg";
// import icon from "../../../public/assets/images/cta/top-icon.png";

const featuresData = [
  {
    svg: Honour,
    title: "Honour Top Volunteers",
    description:
      "Recognising volunteers who make a lasting impact through dedication, inspiring others to follow their lead.",
  },
  {
    svg: Certificates,
    title: "Present Awards and Certificates",
    description:
      "Volunteers receive awards and certificates for outstanding contributions, marking milestones in their volunteering journey.",
  },
  {
    svg: Stories,
    title: "Share Success Stories",
    description:
      "Volunteers share their stories, inspiring others to join the platform, take action, and make a meaningful difference.",
  },
];

const SchoolCollegeRecognitionEventsPage = (props) => {

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
        <div className="container section-padding pt-5">
          <div className="wpo-about-wrap">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-img">
                  {/* <div className="wpo-about-left">
                    <Image src={abImg5} alt="img" />
                  </div> */}
                  <div className="wpo-about-right pt-3 pt-lg-5">
                    <Image width={580} src={LeaderboardWorking} alt="Celebrate Achievements & recognise contribution with Sevak Army" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-text p-3 mt-0 pb-1 pb-lg-2 pt-1 pt-lg-2">
                  <div className="wpo-section-title mt-0 mb-3 pb-0">
                    {/* <div className="custom-panell"> */}
                    <span className="">
                      Volunteer Recognition Events for Schools and Colleges
                    </span>
                    <h2 className="about-heading-second text-titleeee mb-0 pb-0">
                      Celebrate Achievements and Recognise Student Contributions
                    </h2>
                    {/* </div> */}
                  </div>
                  {/* <h3 className="mt-0">
                    How Sevak Army Influencer Leaderboard Works?
                  </h3> */}
                  <p style={{ textAlign: "justify" }}>
                    At Sevak Army, we proudly recognise the dedication and hard
                    work of student volunteers from schools and colleges. To
                    honour their efforts, we organise Volunteer Recognition
                    Events to highlight the most active participants, present
                    awards and offer special recognition to those making a
                    notable impact in their communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container section-padding pt-0 pt-md-3">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xxl-8 col-md-12 col-12">
            <SectionTitle
              subtitle="Celebrate Contributions"
              title="Recognition and Awards"
              paragarap="Volunteers who rank high on our Leaderboard or consistently
                contribute their time and efforts are invited to our Sevak Army
                Recognition Events. At these events, we"
            />
          </div>
        </div>

        <div className="wpo-features-area pt-0 px-2 mt-3">
          <div className="features-wrap">
            <div className="row justify-content-center gy-4 align-items-stretch">
              {featuresData.map((feature, index) => (
                <div className="col col-lg-4 col-md-6 col-12" key={index}>
                  <div className="feature-item-wrap h-100">
                    <div
                      className="feature-item  align-items-center"
                      style={{ alignItems: "start", minHeight: '100%' }}
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
                        <p className="fs-6" style={{ textAlign: "justify" }}>
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
      {/* new start */}

      <div className="container pt-md-3">
        <div className="wpo-about-wrap">
          <div className="row">
            <div className="col-lg-7 col-md-12 col-12">
              <div className="wpo-about-text p-3 mt-0 pb-1 pb-lg-2 pt-1 pt-lg-2">
                <div className="custom-panell">
                  <h3>Networking and Community Building</h3>
                </div>
                <p className="mt-0 pt-0" style={{ textAlign: "justify" }}>
                  These events offer a platform for student volunteers to meet
                  like-minded individuals, connect with NGOs and engage with
                  community leaders. It's a chance to grow your network and be
                  part of a larger initiative for positive social impact.
                </p>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-12">
              <div className="wpo-about-img d-flex w-100 justify-content-center">
                <div className="wpo-about-right">
                  {/* <Image src={abImg7} alt="img" /> */}
                  <Image src={Networking} width={404} alt="Networking & Community Building Sevak Army" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container pt-5 section-padding">
        <div className="wpo-about-wrap">
          <div className="row flex-wrap-reverse">
            <div className="col-lg-5 col-md-12 col-12">
              <div className="wpo-about-img d-flex w-100 justify-content-center">
                <div className="wpo-about-right pt-lg-3">
                  <Image src={MeetNetwork} height={280} alt="Be Part of the Celebration" />
                  {/* <Image src="https://placehold.co/324x304/png" alt="Register" /> */}
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-12 col-12">
              <div className="wpo-about-text p-3 mt-0 pb-1 pb-lg-2 pt-1 pt-lg-2">
                {/* <div className="wpo-section-title mt-0 mb-5">
                                        <span>Become a Volunteer</span>
                                        <h2 className="about-heading-second">Join Sevak Army: Your Path to Make a Difference</h2>
                                    </div> */}
                <div className="custom-panell">
                  <h3>Be Part of the Celebration</h3>
                </div>
                <p className="mt-0 pt-0" style={{ textAlign: "justify" }}>
                  Whether you are just beginning your volunteering journey or
                  are already an active contributor, these events provide an
                  opportunity to celebrate the collective contributions of Sevak
                  Army volunteers and acknowledge the student change-makers
                  making a difference.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <section className="wpo-cta-section section-padding">
        <div className="bg-overlay">
          <div className="container">
            <div className="bg-color">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="cta-wrap">
                    <h2 className="mb-2">Join Sevak Army and Start Making a Difference</h2>
                    <p
                      className="text-center pt-2 px-2"
                      style={{ textAlign: "justify", color: "white" }}
                    >
                      Volunteer through Sevak Army today and you could be among
                      those honoured for your contributions at our next event.
                      Your efforts deserve to be recognised and celebrated!
                    </p>
                    <div className="d-flex flex-column gap-3 justify-content-center align-items-center w-100">
                      <Link
                        to="https://app.sevakarmy.com/" target="_blank"
                        className="theme-btn"
                        style={{ width: "fit-content" }}
                      >
                        Register Now to Volunteer
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

export default SchoolCollegeRecognitionEventsPage;
