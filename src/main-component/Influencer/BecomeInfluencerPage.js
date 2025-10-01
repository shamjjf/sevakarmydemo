import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css";
import "swiper/css/navigation";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import NewsletterPopup from "../../components/NewsletterPopup";

import Path from "../../../public/assets/images1/volunteer/home/img.webp";
import Opportunities from "../../../public/assets/images1/volunteer/home/equal-rights.webp";
import Volunterring from "../../../public/assets/images1/volunteer/home/volunterring.webp";
import Inspirepeople from "../../../public/assets/images1/influencer/home/inspirepeop.webp";
import United from "../../../public/assets/images1/volunteer/home/united.webp";
import SignUp from "../../../public/assets/images1/volunteer/home/signup.webp";
import BrowseTask from "../../../public/assets/images1/volunteer/home/refer.webp";
import ShareLink from "../../../public/assets/images1/volunteer/home/link.webp";
import Connect from "../../../public/assets/images1/volunteer/home/connect.webp";

// import icon from "../../../public/assets/images/cta/top-icon.png";
// import Path from "../../../public/assets/images1/volunteer/home/path.png";
// import VolunteerOpportunities from "../../../public/assets/images1/volunteer/home/Volunteer-opportunities.png";
// import Review from "../../../public/assets/images1/volunteer/home/review.png";
// import StartVolunteering from "../../../public/assets/images1/influencer/home/voluntear.png";

const featuresData = [
  {
    // iconClass: "flaticon-volunteer",
    svg: Opportunities,
    title: "Be a medium for Change",
    description:
      "Bring your followers into a mission-driven community and empower them to contribute to meaningful causes.",
  },
  {
    // iconClass: "flaticon-charity",
    title: "Grow Your Influence",
    svg: Volunterring,
    description:
      "Show your followers you’re dedicated to creating real change, which can boost trust and loyalty within your community.",
  },
  {
    // iconClass: "flaticon-solidarity",
    svg: United,
    title: "Inspire Collective Action",
    description:
      " By sharing your journey, you encourage your followers to do the same, building a platform of positive impact together.",
  },
];

const BecomeInfluencerPage = (props) => {
  const [shownewsletter, setShowNewsletter] = useState(false);
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
      <NewsletterPopup
        shownewsletter={shownewsletter}
        setShowNewsletter={setShowNewsletter}
      />
      <section className="wpo-about-section pt-0 mt-3">
        <div className="container section-padding">
          <div className="wpo-about-wrap">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-img">
                  {/* <div className="wpo-about-left">
                    <Image src={abImg5} alt="img" />
                  </div> */}
                  <div className="wpo-about-right pt-0">
                    <Image src={Path} width={556} height={371} alt="Encourage your followers to join Savek Army" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-text p-3 pb-0 mt-0">
                  <div className="wpo-section-title mt-0 mb-3">
                    <span>
                      Join Sevak Army through Your Influencer Link and Start
                      Creating Impact Together!
                    </span>
                    <h2 className="about-heading-second text-titleeee">
                      Encourage Your Followers to Make a Difference with Sevak
                      Army
                    </h2>
                  </div>
                  <p className="mt-0 mb-0 pt-0" style={{ textAlign: "justify" }}>
                    As an influencer, you have the power to inspire change. By
                    encouraging your followers to join Sevak Army, you can
                    help bring passionate volunteers to meaningful causes. Every
                    volunteer who joins through your personal referral link will
                    contribute to impactful tasks that match their skills and
                    interests.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container d-flex flex-column justify-content">
          <div className="wpo-event-details-text pt-0 mt-3">
            <SectionTitle
              subtitle="How It Works?"
              title="From Sign-Up to Inspiring Others Through Sevak Army"
              paragarap="As an influencer, you play a vital role in bringing your followers into a community dedicated to making a difference. Here’s how you can easily join Sevak Army, inspire others and create a positive impact together."
            />
          </div>
        </div>

        <div className="container">
          <div className="wpo-about-wrap">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-text p-3 mt-0 pb-1 pb-lg-2 pt-1 pt-lg-2">
                  {/* <div className="wpo-section-title mt-0 mb-5">
                                        <span>Become a Volunteer</span>
                                        <h2 className="about-heading-second">Join Sevak Army: Your Path to Make a Difference</h2>
                                    </div> */}
                  <div className="custom-panell">
                    <h3>Step 1: Register as an Influencer on Sevak Army</h3>
                  </div>
                  <p className="mt-0 pt-0" style={{ textAlign: "justify" }}>
                    Begin by registering on Sevak Army platform as an
                    influencer. Fill in your details and create a profile that
                    highlights your passion for social causes and the difference
                    you’re aiming to make. This profile helps NGOs and their
                    followers understand your commitment to volunteerism and
                    community support.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-img d-flex w-100 justify-content-center">
                  <div className="wpo-about-right pt-lg-4">
                    {/* <Image src={abImg7} alt="img" /> */}
                    <Image src={SignUp} alt="Sign-up to Sevak Army" width={450} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container pt-5">
          <div className="wpo-about-wrap">
            <div className="row flex-wrap-reverse">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-img d-flex w-100 justify-content-center">
                  <div className="wpo-about-right pt-lg-0">
                    {/* <Image src={abImg7} alt="img" /> */}
                    <Image src={ShareLink} alt="Influncer referral Sevak Army" width={450} />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-text p-3 mt-0 pb-1 pb-lg-2 pt-1 pt-lg-2">
                  <div className="custom-panell">
                    <h3>Step 2: Get Your Unique Referral Link</h3>
                  </div>
                  <p className="mt-0 pt-0" style={{ textAlign: "justify" }}>
                    Once registered, you’ll receive a unique referral link. This
                    link is your personal invitation for your followers to join
                    Sevak Army, connect with causes they care about and
                    volunteer for impactful tasks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container pt-5">
          <div className="wpo-about-wrap">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-text p-3 mt-0 pb-1 pb-lg-2 pt-1 pt-lg-2">
                  <div className="custom-panell">
                    <h3>
                      Step 3: Share Your Link and Encourage Your Followers
                    </h3>
                  </div>
                  <p className="mt-0 pt-0" style={{ textAlign: "justify" }}>
                    Use your social media platforms to share your referral link
                    with your followers, encouraging them to register as
                    volunteers. Explain how they can easily make a difference by
                    registering and finding tasks that match their skills and
                    interests - whether it's supporting education, healthcare,
                    the environment or other causes.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-img d-flex w-100 justify-content-center">
                  <div className="wpo-about-right pt-lg-3">
                    <Image
                      src={BrowseTask}
                      width={500}
                      height={240}
                      alt="Promote Link & Encorage follower - Sevak Army"
                    />
                    {/* <Image src="https://placehold.co/324x324/png" alt="Register" /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container pt-5">
          <div className="wpo-about-wrap">
            <div className="row flex-wrap-reverse">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-img d-flex w-100 justify-content-center">
                  <div className="wpo-about-right pt-3">
                    <Image src={Inspirepeople} width={500} alt="Inspire Followers to find volunteer oppertunities - Sevak Army" />
                    {/* <Image src="https://placehold.co/324x324/png" alt="Register" /> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-text p-3 mt-0 pb-1 pb-lg-2 pt-1 pt-lg-2">
                  {/* <div className="wpo-section-title mt-0 mb-5">
                                        <span>Become a Volunteer</span>
                                        <h2 className="about-heading-second">Join Sevak Army: Your Path to Make a Difference</h2>
                                    </div> */}
                  <div className="custom-panell">
                    <h3>
                      Step 4: Inspire Followers to Find Volunteer Opportunities
                    </h3>
                  </div>
                  <p className="mt-0 pt-0" style={{ textAlign: "justify" }}>
                    Guide your followers on how to explore tasks that match
                    their skills, availability and passions on Sevak Army
                    platform. Your endorsement helps them feel confident that
                    they’re joining a meaningful platform supported by someone
                    they trust.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container pt-5">
          <div className="wpo-about-wrap">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-text p-3 mt-0 pb-1 pb-lg-2 pt-1 pt-lg-2">
                  {/* <div className="wpo-section-title mt-0 mb-5">
                                        <span>Become a Volunteer</span>
                                        <h2 className="about-heading-second">Join Sevak Army: Your Path to Make a Difference</h2>
                                    </div> */}
                  <div className="custom-panell">
                    <h3>Step 5: Track Your Impact and Inspire More Change</h3>
                  </div>
                  <p className="mt-0 pt-0" style={{ textAlign: "justify" }}>
                    As your followers join and start volunteering through Sevak
                    Army, you’ll be able to see the growing community you've
                    inspired. Track the collective impact, share success
                    stories and continue to encourage more followers to join
                    and make a difference alongside you.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-img d-flex w-100 justify-content-center">
                  <div className="wpo-about-right pt-lg-5">
                    <Image src={Connect} width={450} alt="Track your impact with Sevak Army" />
                    {/* <Image src="https://placehold.co/324x324/png" alt="Register" /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section className="pt-5 mt-3 container">
        <div className="row justify-content-center">
          {/* <div className="col-lg-6 col-md-12 col-12">
                        <SectionTitle subtitle="Serve with Impact" />
                    </div> */}
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-12 col-12">
            <SectionTitle subtitle="Lead with Purpose" title="Why Join as an Influencer on Sevak Army?" />
          </div>
        </div>

        <div className="wpo-features-area pt-3">
          <div className="features-wrap">
            <div className="row justify-content-center gy-4 align-items-stretch">
              {featuresData.map((feature, index) => (
                <div
                  className="col col-lg-4 col-md-6 col-12"
                  key={index}
                // style={{}}
                >
                  <div
                    className="feature-item-wrap h-100"
                    style={{ display: "flex", alignItems: "flex-start", minHeight: '100%' }}
                  >
                    <div
                      className="feature-item"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        minHeight: '100%'
                        // width: "460px",
                        // height: "220px",
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

      <section className="wpo-cta-section-s3 section-padding">
        <div className="container">
          <div className="bg-color" style={{ background: "#007560" }}>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="cta-wrap">
                  <h2 className="mb-2"> Start Inspiring Today</h2>
                  <p className="pt-3 px-2" style={{ color: "whitesmoke" }}>
                    Register as an influencer with Sevak Army, share your link,
                    and let’s create meaningful change, one task at a time.
                    Together, we’re building a stronger, more connected
                    community for social good.
                  </p>
                  <Link
                    to="https://app.sevakarmy.com/" target="_blank"
                    className="theme-btn mt-3"
                  >
                    Share Your Link Now
                  </Link>
                </div>
              </div>
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
                    <h2 className="mb-2">Subscribe to Sevak Army</h2>
                    <p
                      className="px-2"
                      style={{ textAlign: "center", color: "white" }}
                    >
                      Stay connected and inspired by subscribing to our updates
                      for influencers. Be the first to know about new volunteer
                      opportunities and campaigns that need your voice. Help
                      motivate your followers to join Sevak Army and make a
                      real difference.
                    </p>
                    <Link
                      onClick={() => setShowNewsletter(true)}
                      to="#"
                      className="theme-btn"
                    >
                      Subscribe now
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
