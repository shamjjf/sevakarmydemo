import React, { Fragment } from "react";
import Image from "next/image";

import SectionTitle from "../SectionTitle/SectionTitle";
import ServiceCard from "../ServiceSection/ServiceCard";
import CtaSection from "../CtaSection/CtaSection";

import StrongCommunity from "../../../public/assets/new-images/volunteer/about-us/community.jpg";
import Trust from "../../../public/assets/images1/volunteer/home/trust.webp";
import CreateImpact from "../../../public/assets/images1/volunteer/home/create-impact.webp";
import Welcome from "../../../public/assets/images1/volunteer/home/welcome-back.webp";
import TeamWork from "../../../public/assets/images1/volunteer/home/teamwork.webp";
import About2 from "../../../public/assets/new-images/common/our-mission.jpg";
// import About3 from "../../../public/assets/images1/volunteer/about-us/sevak-army-volunteer-about-us-3.webp";
import About3 from "../../../public/assets/new-images/common/our-vision.jpg";

function VolunteerAboutUsPage() {
  // const ClickHandler = () => {
  //   window.scrollTo(10, 0);
  // };
  
  const featuresData = [
    {
      iconClass: "flaticon-volunteer",
      title: "Our Mission",
      img: About2,
      alt: 'Our Misson SevakArmy',
      description:
        "To connect people with meaningful volunteer opportunities, helping them contribute their skills to causes they care about. We want to make volunteering easy so everyone can take part and feel the joy of giving back.",
    },
    {
      iconClass: "flaticon-solidarity",
      title: "Our Vision",
      img: About3,
      alt: 'Our Vision - SevakArmy',
      description:
        "To build a stronger, more connected society by reaching over 2 million hours of volunteer work across India by 2025. We believe that we can help transform lives and communities for the better through volunteerism.",
    },
  ];

  const Services = [
    {
      Id: "01",
      sImg: TeamWork,

      title: "Working Together",
      slug: "1",
      description:
        "We believe change happens when people and communities work together.",
    },
    {
      Id: "02",
      sImg: Trust,

      title: "Trust and Honesty",
      slug: "2",
      description:
        "We ensure that all the NGOs we work with are verified so you know your time is getting invested in the right place.",
    },
    {
      Id: "03",
      sImg: CreateImpact,

      title: "Creating Impact",
      slug: "3",
      description:
        "Every small action counts and has the potential to create real change.",
    },
    {
      Id: "04",
      sImg: Welcome,

      title: "Everyone is Welcome",
      slug: "4",
      description:
        "We offer volunteering opportunities for people of all ages and backgrounds, making sure everyone can serve in a way that suits them.",
    },
  ];

  return (
    <Fragment>
      <section className="wpo-about-section pt-md-2 mb-0">
        <div className="container">
          <div className="wpo-about-wrap">
            <div className="flex-containerrr justify-content-between pt-lg-5">
              <div className="w-100 wpoimg">
                <div className="wpo-about-img">
                  <div className="bg-image">
                    <Image src={StrongCommunity} alt="Making Communities Stronger, Together SevakArmy" style={{ objectFit: 'contain', height:'fit-content' }} />
                  </div>
                </div>
              </div>
              <div className="w-100 wpodesc">
                <div className="wpo-about-text mt-2">
                  <div className="wpo-section-title">
                    <h2 className="about-heading-second text-titleeee">
                      Making Communities Stronger, Together
                    </h2>
                  </div>
                  <p className="volunteer-home-text mb-1">
                    At SevakArmy, we bring people together to help create
                    positive change in communities across India. Our platform
                    connects volunteers like you with trusted NGOs, offering a
                    simple way to give back to society using your time and
                    skills.
                  </p>
                  <p className="volunteer-home-text">  Whether you&apos;re a student, working professional or retiree,
                    SevakArmy makes it easy for everyone to find volunteer
                    tasks that fit their interests and schedule. From teaching
                    and organising events to supporting causes like education,
                    healthcare and the environment, there’s a way for everyone
                    to make a difference.</p>
                </div>
              </div>
            </div>

            <section className="wpo-features-area pt-0 pt-md-3 mt-0 section-padding">
              <div className="features-wrap">
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
            </section>

            <section className="pb-5">
              <div className="container mt-2">
                <div className="row justify-content-center">
                  <div className="col-lg-6 col-md-12 col-12">
                    <SectionTitle subtitle="Top Volunteers Leading the Way" title="Our Values" />
                  </div>
                </div>
                <div className="service-wrap">
                  <div className="row pt-3 justify-content-center gy-4 align-items-stretch">
                    {Services.slice(0, 4).map((Service, sitem) => (
                      <div
                        className="col col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12"
                        key={sitem}
                      >
                        <div className="service-card-wrapper d-flex flex-column h-100">
                          <ServiceCard
                            // width="301px"
                            // height="383px"
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
            </section>
          </div>
        </div>
      </section>

      <CtaSection/>
    </Fragment>
  );
}

export default VolunteerAboutUsPage;
