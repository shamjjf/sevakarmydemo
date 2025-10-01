import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css";
import "swiper/css/navigation";

import SectionTitle from "../SectionTitle/SectionTitle";

import Honour from "../../../public/assets/images1/volunteer/home/honour.webp";
import Certificates from "../../../public/assets/images1/volunteer/home/certificates.webp";
import Stories from "../../../public/assets/images1/volunteer/home/stories.webp";
import abImg6 from "../../../public/assets/new-images/volunteer/recognition-event/celebration.jpg";
import Networking from "../../../public/assets/images1/volunteer/home/networking.webp";
import MeetNetwork from "../../../public/assets/new-images/volunteer/recognition-event/celebration-img.jpg";

// import icon from "../../../public/assets/images/cta/top-icon.png";
// import abImg7 from "../../../public/assets/images1/volunteer/opportunities/sevak-army-volunteer-opportunities-5.jpg";

// const Services = [
//     {
//         Id: '01',
//         sImg: simg1,
//         
//         title: 'Track Your Progress in Real Time',
//         slug: '1',
//         description: 'Each volunteer can log in to their profile and view their standing on the leaderboard. You will also receive regular email updates showing your rank and progress. These updates keep you motivated and informed as you continue contributing your time and skills to meaningful causes.',
//     },
//     {
//         Id: '02',
//         sImg: simg2,
//         
//         title: 'Boost Your Rank with Referrals',
//         slug: '2',
//         description: "Help grow  Sevak Army by referring others to the platform. You will earn additional points that boost your position on the leaderboard for every person who registers as a volunteer through your referral link. It's a great way to encourage others to get involved while increasing your own impact.",
//     },
//     {
//         Id: '03',
//         
//         
//         title: 'Why the Leaderboard Matters?',
//         slug: '3',
//         description: 'The Sevak Army Leaderboard isn’t just about competition - it’s about celebrating your dedication and contribution to social good. The more you volunteer, the higher you climb and the more recognition you earn for your efforts. Plus, it helps you set personal goals and stay motivated as you serve your community.'
//     },
//     {
//         Id: '04',
//         
//         
//         title: 'Earn Badges and Certificates',
//         slug: '4',
//         description: 'As you rise through the leaderboard, you’ll unlock e-badges and receive e-certificates for your achievements. These milestones recognise your commitment to volunteerism and can be shared on social media or added to your CV, showcasing your dedication to making a positive impact.',
//     },
//     {
//         Id: '05',
//         
//         
//         title: 'Stay Motivated and Keep Giving Back',
//         slug: '4',
//         description: 'Whether aiming for the top spot or just wanting to track your volunteer hours,  Sevak Army Leaderboard keeps you engaged and inspired. It’s more than just points—it’s about building a legacy of service and making a difference, one task at a time.',
//     },
// ]

const featuresData = [
  {
    // iconClass: "flaticon-volunteer",
    svg: Honour,
    title: "Honour Top Volunteers",
    description:
      "Acknowledge those who have made a lasting impact by dedicating significant time to social work.",
  },
  {
    // iconClass: "flaticon-charity",
    svg: Certificates,
    title: "Present Awards and e-Certificates",
    description:
      "Volunteers earn awards and e-certificates, marking their service as a lasting achievement.",
  },
  {
    // iconClass: "flaticon-solidarity",
    svg: Stories,
    title: "Share Success Stories",
    description:
      " Volunteers will have the opportunity to share their stories, inspiring others to get involved.",
  },
];

const VolunteerRecognitionEventPage = (props) => {
  // const ClickHandler = () => {
  //     window.scrollTo(10, 0);
  // };

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
        <div className="container section-padding pt-2 pt-md-5">
          <div className="wpo-about-wrap">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-img">
                  {/* <div className="wpo-about-left">
                    <Image src={abImg5} alt="img" />
                  </div> */}
                  <div className="wpo-about-right pt-3">
                    <Image src={abImg6} alt="E- Certificate of Sevak Army for your social contribution" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-text p-3 mt-0 pb-1 pb-lg-2 pt-1 pt-lg-2">
                  <div className="wpo-section-title mt-0">
                    <span>Volunteer Recognition Events </span>
                    <h2 className="about-heading-second text-titleeee">
                      Celebrate Success with Sevak Army{" "}
                    </h2>
                  </div>
                  <h3>
                    Celebrate Your Achievements and Be Recognised for Your
                    Impact
                  </h3>
                  <p style={{ textAlign: "justify" }}>
                    At Sevak Army, we celebrate the efforts and dedication of
                    our volunteers. To show our appreciation, we host
                    Recognition Events to highlight the most committed
                    volunteers, present awards and offer special recognition for
                    those making a significant impact in our community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container section-padding pt-0">
        {/* <div className="row justify-content-center">
          <div className="col-lg-6 col-md-12 col-12">
            <SectionTitle subtitle="" />
          </div>
        </div> */}
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-12 col-12">
            <SectionTitle subtitle="Earn Recognition, Share Your Impact!" title="Recognition and Awards" paragarap="Volunteers who rank high on our Leaderboard or regularly
                contribute their time and skills will be invited to our Sevak
                Army Recognition Events. At these events, we: "/>
          </div>
        </div>

        <div className="wpo-features-area pt-0 px-2 mt-3">
          <div className="features-wrap">
            <div className="d-flex justify-content-center">
            </div>
            <div className="row justify-content-center column-gappp">
              {featuresData.map((feature, index) => (
                <div className="col col-lg-4 col-md-6 col-12" key={index}>
                  <div className="feature-item-wrap">
                    <div
                      className="feature-item"
                      style={{ alignItems: "start", height: "197px" }}
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

      <div className="container pt-md-5">
        <div className="wpo-about-wrap">
          <div className="row">
            <div className="col-lg-7 col-md-12 col-12">
              <div className="wpo-about-text p-3 mt-0 pb-1 pb-lg-2 pt-1 pt-lg-2">
                <div className="custom-panell">
                  <h3>Networking and Community Building</h3>
                </div>
                <p className="mt-0 pt-0" style={{ textAlign: "justify" }}>
                  These events also provide an opportunity for volunteers to meet and network with like-minded individuals, NGOs, and community leaders. It’s a great way to grow your connections and be part of a larger platform for positive change.
                </p>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-12">
              <div className="wpo-about-img d-flex w-100 justify-content-end">
                <div className="wpo-about-right">
                  <Image src={Networking} width={444} alt="Networking & Community Building Sevak Army" />
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
              <div className="wpo-about-img d-flex w-100 justify-content-start">
                <div className="wpo-about-right pt-lg-3">
                  <Image src={MeetNetwork} height={280} alt="Be a part of Celebration - Sevak Army" />
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-12 col-12">
              <div className="wpo-about-text p-3 mt-0 pb-1 pb-lg-2 pt-1 pt-lg-2">
                <div className="custom-panell">
                  <h3>Be Part of the Celebration</h3>
                </div>
                <p className="mt-0 pt-0" style={{ textAlign: "justify" }}>
                  Whether you’re just starting out or are a seasoned volunteer, these events are a chance to celebrate the collective impact of Sevak Army volunteers and recognise the change-makers among us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="section-padding pb-0">
        <section className="wpo-cta-section section-padding">
          <div className="bg-overlay">
            <div className="container">
              <div className="bg-color">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="cta-wrap">
                      {/* <div className="icon mx-2">
                        <Image src={icon} width={40} height={40} alt="Icon" />
                      </div> */}
                      <h2 className="mb-2">Join Sevak Army and Start Making a Difference</h2>
                      <p
                        className="text-center pt-2 px-2"
                        style={{ textAlign: "justify", color: "white" }}
                      >
                        Volunteer with Sevak Army today and you could be one of the
                        many honoured for your contributions at our next recognition
                        event. Your hard work deserves to be celebrated!
                      </p>
                      <div className="d-flex flex-column gap-3 justify-content-center align-items-center w-100">
                        <span>Register Now and Start Volunteering</span>
                        <Link
                          to="https://app.sevakarmy.com/" target="_blank"
                          className="theme-btn"
                          style={{ width: "fit-content", textTransform:'none' }}
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
      </div>
    </>
  );
};

export default VolunteerRecognitionEventPage;
