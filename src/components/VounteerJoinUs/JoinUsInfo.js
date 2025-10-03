import React from "react";
import abut3 from "../../../public/assets/images1/volunteer/join-us/sevak-army-volunteer-join-us-1.jpg";
import JoinUsCards from "./JoinUsCards";
import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTitle";
import Cimg1 from "../../../public/assets/images1/volunteer/join-us/sevak-army-volunteer-join-us-2.jpg";
import Cimg2 from "../../../public/assets/images1/volunteer/join-us/sevak-army-volunteer-join-us-3.jpg";
import Cimg3 from "../../../public/assets/images/causes/3.jpg";
import Image from "next/image";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const joinUsData = [
  {
    id: 1,
    slug: "1",
    title: "Donate",
    image: Cimg1,
   //  Simage: Csimg1,
    description:
      "Your contribution helps us maintain and improve the platform, ensuring more opportunities for volunteers and a greater impact on communities.",
  },
  {
    id: 2,
    slug: "2",
    title: "Fundraise",
    image: Cimg2,
    //  Simage: Csimg2,
    description:
      "Help us spread the word and raise funds through your network, supporting more projects and volunteers.",
  },
];

const membershipData = [
  {
    id: 1,
    slug: "1",
    title: "Basic Membership (Free)",
    iconClass: "flaticon-volunteer",
    image: Cimg1,
   //  Simage: Csimg1,
    description: "Access to all volunteering tasks, newsletters and updates.",
  },
  {
    id: 2,
    slug: "2",
    title: "Silver Membership",
    iconClass: "flaticon-solidarity",
    image: Cimg2,
    //  Simage: Csimg2,
    description: "Earn extra points on completed tasks and gain early access to premium volunteer opportunities.",
  },
  {
    id: 3,
    slug: "3",
    title: "Gold Membership",
    iconClass: "flaticon-charity",
    image: Cimg3,
    // Simage: Csimg3,
    description:
      "Priority in task selection, special recognition on the leaderboard and exclusive invites to workshops.",
  },
];

const JoinUsInfo = (props) => {
  return (
    <section className="wpo-about-section-s2 section-padding" style={{ paddingTop: "100px" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-12 mb-5">
            <div className="wpo-about-img">
              <div className="bg-image">
                <Image src={abut3} alt="Volunteer Img" className="rounded-3" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-12">
            <div className="wpo-about-text mt-0">
              <div className="wpo-section-title mb-3">
                <h2>Become a Volunteer</h2>
              </div>
              <p>
                Ready to make a difference? At SevakArmy, we offer opportunities for you to connect with meaningful
                causes that align with your skills and interests. Whether you're looking to mentor students, help
                organise events or contribute your professional expertise, there's a task waiting for you.
              </p>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <JoinUsCards />
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <Link onClick={() => props.setShow(true)} to="#" className="theme-btn">
            Register Now
          </Link>
        </div>
        <section className="section-padding">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-12 col-12">
              <SectionTitle subtitle="Support Us" />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-12 col-12">
              <SectionTitle title="How Can You Support?" />
            </div>
          </div>
          <div className="wpo-service-single-wrap">
            <p class="text-center pb-4">
              Although volunteering on SevakArmy is free, we appreciate any support you can offer to keep the platform
              running and help us expand our outreach.
            </p>
          </div>
          <div className="row rowwwwwwwwww">
            {joinUsData.map((joinus, index) => (
              <div key={index} className="col-sm-6 col-12">
                <div className="causes-item">
                  <div className="image">
                    <Image src={joinus.image} alt={joinus.title} style={{ width: "100%" }} />
                  </div>
                  <div className="content">
                    <h2 className="text-center">
                      <Link onClick={ClickHandler} to={`/causes-single/${joinus.slug}`}>
                        {joinus.title}
                      </Link>
                    </h2>
                    <p>{joinus.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <Link onClick={ClickHandler} to="/donate" className="theme-btn">
              Support Us
            </Link>
          </div>
        </section>
        <section>
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-12 col-12">
              <SectionTitle subtitle="Memebership Levels" />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-12 col-12">
              <SectionTitle title="Flexible Membership Tiers" />
            </div>
          </div>

          <div className="wpo-service-single-wrap">
            <p class="text-center pb-4">
              SevakArmy offers a range of membership options to suit volunteers with different levels of commitment.
              Choose the level that fits your schedule and involvement.
            </p>
          </div>
          <div className="causes-top">
            <div className="container-fluid">
              <div className="row g-4">
                <div className="wpo-features-area">
                  <div className="features-wrap">
                    <div className="row">
                      {membershipData.map((feature, index) => (
                        <div className="col col-lg-4 col-md-6 col-12" key={index}>
                          <div className="feature-item-wrap">
                            <div className="feature-item">
                              <div className="feature-icon">
                                <div className="icon">
                                  <i className={`fi ${feature.iconClass}`}></i>
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
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default JoinUsInfo;
