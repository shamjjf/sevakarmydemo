import { Link, useNavigate } from "react-router-dom";
import React, { Fragment, useState } from "react";
import { useEffect } from "react";
import Image from "next/image";

import useMetaTags from "../../app/hooks/useMetaTags";
import metadata from './../../app/[[...slug]]/metadata.json';

// Components imports start from here
// import { DefaultSeo, NextSeo } from "next-seo";
import NewsletterPopup from "../../components/NewsletterPopup";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/hero/hero";
import CtaSection from "../../components/CtaSection/CtaSection";
import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";
import ServiceCard from "../../components/ServiceSection/ServiceCard";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

// Image imports are starting from here
import blog2 from "../../../public/assets/images1/team/sevak-army-team-3.webp";
import blog1 from "../../../public/assets/images1/team/sevak-army-team-7.webp";
import blog3 from "../../../public/assets/images1/team/sevak-army-team-8.webp";

// import Newsletter from "../../../public/assets/images1/volunteer/home/newsletter.webp";
import Newsletter from "../../../public/assets/new-images/common/newsletter.jpg";
// import abImg2 from "../../../public/assets/images1/volunteer/home/sevak-army-volunteer-home-3.webp";
import EarnRewards from "../../../public/assets/images1/volunteer/home/earn-rewards.webp";
import MoreTasks from "../../../public/assets/images1/volunteer/home/more-tasks.webp";
import HelpingNgos from "../../../public/assets/images1/volunteer/home/helping-ngos.webp";
import Chat from "../../../public/assets/images1/volunteer/home/chat.webp";
import Best from "../../../public/assets/images1/volunteer/home/best.webp";
import Trusted from "../../../public/assets/images1/volunteer/home/trusted.webp";

import Cta1 from "../../../public/assets/images/cta/shape-1.webp";
import Vision from "../../../public/assets/images/service/arrow.webp";
import Cta3 from "../../../public/assets/images/cta/shape-2.webp";
import Logo from "../../../public/assets/images/logo.svg";
import Volunter from "../../../public/assets/images/service/vol.webp";

// new images imports
import whatIsSevak from "../../../public/assets/new-images/home/what-sevak-army.webp"

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const featuresData = [
  {
    iconClass: "flaticon-volunteer",
    title: "Become a Volunteer",
    description:
      "Find projects that match your interests and use your skills to make a meaningful impact.",
    link: "/volunteer",
    color: "linear-gradient(180deg, #EBB011 0%, #ED861D 99.48%)",
  },
  {
    iconClass: "flaticon-charity",
    title: "Connect as an Organisation",
    description:
      "Get your team involved in CSR activities that create lasting social impact through volunteering.",
    link: "/organisation",
    color: "linear-gradient(rgb(213 17 235 / 50%) 0%, rgb(66, 29, 237) 99.48%)",
  },
  {
    iconClass: "flaticon-house",
    title: "Get Your Institute Involved",
    description:
      "Give students opportunities to volunteer and use their skills to make a real difference in the community.",
    link: "/school-college",
    color: "linear-gradient(180deg, #FF7888 0%, #C10000 94.79%)",
  },
  {
    iconClass: "flaticon-solidarity",
    title: "Join as an Influencer",
    description:
      "Inspire your followers to register as volunteers and support causes that create social impact.",
    link: "/influencer",
    color: "linear-gradient(180deg, #1ECFFE 0%, #1287FF 100%)",
  },
  {
    iconClass: "flaticon-profile",
    title: "Join as an NGO",
    description:
      "Easily find volunteers ready to help you achieve your mission and drive positive change.",
    link: "/ngo",
    color: "linear-gradient(180deg, #00AF90 0%, #00715D 97.92%)",
  },
];

const blogs = [
  {
    id: "1",
    title:
      "Sevak Army gave me a chance to use my marketing skills to help an NGO. I helped them raise money for their education programme and it felt really good to make a difference.",
    slug: "1",
    subtitle:
      "Neha wanted to use her skills for a good cause. Through Sevak Army, she found an NGO that needed help with fundraising. Using her marketing skills, Neha helped them raise money to support children’s education. It was a fulfilling experience for her.",
    bsing: blog1,
    athor: "Neha M., Volunteer",
  },
  {
    id: "2",
    title:
      "Thanks to Sevak Army, my company’s employees engaged in impactful CSR activities, contributing over 1,000 hours and strengthening our community bond.",
    slug: "2",
    subtitle:
      "Rohit wanted his employees to participate in community service but didn’t know where to start. Sevak Army made it easy for his team to find meaningful activities, resulting in over 1,000 volunteer hours on projects like environmental cleanups and student mentoring.",
    bsing: blog2,
    athor: " Rohit S., Corporate Partner",
  },
  {
    id: "3",
    title:
      "Sevak Army, through my school, connected me to a tutoring programme where I help kids with their studies. It feels great to make a real difference.",
    slug: "4",
    subtitle:
      "Priya, a student, wanted to volunteer but wasn’t sure where to start. Through her school’s involvement with Sevak Army, she found a tutoring programme to help underprivileged children. Now, she’s making a positive impact on their education and it’s been a rewarding experience for her.",
    bsing: blog3,
    athor: "Priya R., Student Volunteer",
  },
  {
    id: "4",
    title:
      "Sevak Army has been a huge help for our NGO. We found skilled volunteers who helped us finish a big project in half the time!",
    slug: "3",
    subtitle:
      "Smita’s NGO needed volunteers with specific skills to complete a project. Through Sevak Army, she found the perfect volunteers. Their help allowed her NGO to complete the project faster than expected, helping more people in the process.",
    bsing: blog3,
    athor: "Smita G., NGO Coordinator",
  },
  {
    id: "5",
    title:
      "Sevak Army helped me promote social causes to my followers. It feels amazing to see them join and volunteer for causes that matter.",
    slug: "5",
    subtitle:
      "Aditya, an influencer, wanted to use his platform to promote good causes. Through  Sevak Army, he shared volunteer opportunities with his followers. Many of them signed up as volunteers and Aditya was happy to see the positive impact he made through his influence.",
    bsing: blog3,
    athor: "Aditya J., Influencer",
  },
];

const Services = [
  {
    Id: "01",
    sImg: Trusted,

    title: "Trusted NGOs",
    slug: "1",
    description:
      "Work with verified and trusted NGOs to make sure your efforts contribute to important, impactful projects.",
  },
  {
    Id: "02",
    sImg: EarnRewards,

    title: "Earn Rewards",
    slug: "2",

    description:
      "Earn points for each task, unlock digital badges and digital certificates as you reach milestones and track your progress on the leaderboard.",
  },
  {
    Id: "03",
    sImg: MoreTasks,

    title: "Wide Range of Tasks",
    slug: "3",

    description:
      "Choose from a variety of tasks in fields like education, healthcare, the environment and more.",
  },
  {
    Id: "04",
    sImg: Chat,

    title: "Chat Directly with NGOs",
    slug: "4",

    description:
      "Once chosen for a task, NGOs can start a chat with you for easy coordination and updates, keeping communication simple and effective.",
  },
  {
    Id: "04",
    sImg: Best,

    title: "Find the Right Fit",
    slug: "4",

    description:
      "Use filters to find tasks that match your skills, interests and time availability.",
  },
];

  const HomePage = (props) => {

  const navigate = useNavigate();
  const path = props.path;
  const [shownewsletter, setShowNewsletter] = useState(false);
  const [metaData, setMetaData] = useState({title: "Loading...."})

  useMetaTags(metaData);
  useEffect(() => {

    // Load metadata 
    let data = metadata[path]
    
      if (!data) {
        data =  {
           title: "Page Not Found - Sevak Army",
           description: "The page you are looking for does not exist.",
           robots: "noindex, nofollow",
         }
        setMetaData(data)
      }

      setMetaData({
        title: data.title,
        description: data.description,
        keywords: data.keywords,
        robots: data.robots,
        alternates: {
          canonical: data.canonical,
        },
        openGraph: data.openGraph,
        twitter: data.twitter,
      });

  }, []);

  return (
    <>
      <Fragment>
        <style>
          {`
            .home-nav-link {
              transition: color 0.3s ease, transform 0.3s ease;
            }
            .home-nav-link:hover {
              color: #ED861D;
              cursor: pointer;
              transform: scale(1.07);
            }
          `}
        </style>

        <Navbar Logo={Logo} hclass={"wpo-site-header"} />
        <Hero />
        <section className="wpo-features-area mb-5 pt-5">
          <div className="container">
            <div className="features-wrap">
              <div className="row justify-content-center gy-4 align-items-stretch">
                {featuresData.map((feature, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      navigate(feature.link);
                      ClickHandler();
                    }}
                    className="home-nav-link col col-lg-4 col-md-6 col-12 my-2"
                  // style={{ minHeight: '100%' }}
                  >
                    <div className="feature-item-wrap h-100" style={{ minHeight: '100%' }}>
                      <div className="feature-item h-100" style={{ minHeight: '100%' }}>
                        <div className="feature-icon">
                          <div
                            className="icon"
                            style={{ background: feature.color }}
                          >
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
        </section>

        <CtaSection />
        <section className="section-padding wpo-about-section ">
          <div className="container">
            <div className="wpo-about-wrap mt-0">
              <div className="row">
                <div className="col-lg-6 col-md-12 col-12">
                  <div className="wpo-about-img">
                    {/* <div className="wpo-about-left">
                      <Image src={abImg2} alt="img" />
                    </div> */}
                    <div className="wpo-about-right pt-0">
                      {/* <Image width={369} height={527} src={abImg2} alt="Sevak Army - Social Change Impact" /> */}
                      <Image  height={527} src={whatIsSevak} alt="Sevak Army - Social Change Impact" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-12">
                  <div className="wpo-about-text mt-3">
                    <div className="wpo-section-title mb-3">
                      <span>What is Sevak Army?</span>
                      <h2 className="about-heading-second text-titleeee">
                        Your Platform for Social Change
                      </h2>
                    </div>
                    <p className="volunteer-home-text">
                      Sevak Army is a platform that connects volunteers with NGOs,
                      offering social work opportunities. Volunteers can register
                      to contribute their time and skills, while NGOs provide
                      meaningful social work opportunities. Companies, schools,
                      colleges and influencers support Sevak Army by encouraging
                      their teams, students and followers respectively to join as
                      volunteers.
                    </p>
                    <div className="about-info-wrap pb-0">
                      <div
                        className="about-info-item"
                        style={{ alignItems: "self-start" }}
                      >
                        <div className="about-info-icon mission-icon">
                          <div className="icon me-4" style={{ marginTop: '8px' }}>
                            <Image width={78} height={78} src={Vision} alt="Vision" />
                          </div>
                        </div>
                        <div className="about-info-text">
                          <h4>Our Vision for 2025</h4>
                          <p className="mission-paragraph volunteer-home-text">
                            By 2025, we aim to complete over 2 million hours of
                            volunteer work across India. Our goal is to unite
                            people, promote social responsibility and build
                            active communities through service.
                          </p>
                        </div>
                      </div>
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
                subtitle="Empowering Volunteers and NGOs to Work Together"
                title="Sevak Army – Your Solution to Volunteering Challenges"
              />
            </div>
          </div>
          <div className="mt-3">
            <section className={" pb-0 mb-0"} style={{ paddingBottom: '0px', marginBottom: '0px' }}>
              <div className="container mt-3">
                <div className="service-wrap">
                  <div className="row justify-content-center gap-3">
                    <div className="service-item px-4 py-4 col-lg-4 col-md-6 col-sm-6 col-11 sevak-custom-carddd">
                      <div className="info d-flex flex-column justify-content-center flex-no-wrap">
                        <div className="w-100 d-flex py-4 justify-content-center">
                          <div className="icon">
                            <Image src={Volunter} width={60} alt="img" />
                          </div>
                        </div>
                        <h2 className="text-center">
                          Find the Right Volunteer Opportunities
                        </h2>
                        <p
                          className="w-100 text-center ms-0"
                          style={{ maxWidth: "100%" }}
                        >
                          Many people want to volunteer but need help finding
                          tasks that match their skills. Sevak Army connects
                          volunteers with verified NGOs, offering opportunities
                          that align with their interests and availability.
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
                        <h2 className="text-center">
                          Helping NGOs Find Volunteers
                        </h2>
                        <p
                          className="w-100 text-center ms-0"
                          style={{ maxWidth: "100%" }}
                        >
                          NGOs often need skilled and committed volunteers. Sevak
                          Army makes it simple for NGOs to post tasks and connect
                          with volunteers who are a perfect fit for both
                          short-term and long-term needs.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>

        <div className="container section-padding pt-5 mt-md-0 pb-0">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-12 col-12">
              <SectionTitle
                subtitle="Transform Your Passion into Action"
                title="Why Choose Sevak Army?"
              />
            </div>
          </div>
          <div className="service-wrap mt-0 pt-0">
            <div className="row justify-content-center">
              {Services.slice(0, 5).map((Service, sitem) => (
                <div
                  className="col col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 align-items-stretch gy-4"
                  key={sitem}
                >
                  <div className="service-card-wrapper d-flex flex-column h-100">
                    <ServiceCard
                      // width="301px"
                      // height="365px"
                      bgColor={Service.sImg}
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

          <div className="w-100 d-flex justify-content-center align-items-center mb-2 mt-5">
            <Link to="/volunteer/about-us" onClick={ClickHandler} className="theme-btn">
              Learn More
            </Link>
          </div>
        </div>

        <section className="wpo-cta-section-s3 section-padding">
          <div className="container">
            <div className="bg-color" style={{ background: "#007560" }}>
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="cta-wrap">
                    {/* <div className="icon mx-2">
                    <Image src={icon} width={40} height={40} alt="Icon" />
                  </div> */}
                    <span>Empower Communities Through Volunteerism</span>
                    <h2 className="mb-3">Ready to Make a Difference?</h2>
                    <p className="text-center" style={{ color: "whitesmoke" }}>
                      Join us today to contribute to a social cause and be part of
                      a platform that creates lasting change.{" "}
                    </p>
                    <Link
                      to="https://app.sevakarmy.com/" target="_blank"
                      className="theme-btn"
                    >
                      Start Your Journey with Sevak Army Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-12 col-12">
              <SectionTitle
                subtitle="Celebrating Those Who Make a Difference"
                title="Heroes of Impact: Meet Our Top Contributors"
              />
            </div>
          </div>
          <div className="mt-3">
            <section className={" wpo-fun-fact-section-s3"}>
              <h2 className="w-100 text-center secondary-headerrrr">
                Top Volunteers
              </h2>
              <div className="container mt-3">
                <div className="fun-fact-wrap">
                  <div className="row justify-content-center gap-3">
                    <div className="blog-single-card py-4 col-lg-3 col-md-6 col-sm-6 col-12">
                      <div className="info d-flex flex-column justify-content-center flex-no-wrap">
                        <h4 className="blog-title-home">Amit Singh</h4>
                        <h3 className="w-100" style={{ fontSize: "50px" }}>
                          120
                        </h3>
                        <p
                          className="w-100 text-nowrap text-center ms-0"
                          style={{ maxWidth: "100%" }}
                        >
                          hours contributed
                        </p>
                      </div>
                    </div>
                    <div className="blog-single-card py-4 col-lg-3 col-md-6 col-sm-6 col-12">
                      <div className="info d-flex flex-column justify-content-center flex-no-wrap">
                        <h4 className="blog-title-home">Meera Patel</h4>
                        <h3 style={{ fontSize: "50px" }}>
                          {" "}
                          110
                        </h3>
                        <p
                          className="w-100 text-nowrap text-center ms-0"
                          style={{ maxWidth: "100%" }}
                        >
                          hours contributed
                        </p>
                      </div>
                    </div>
                    <div className="blog-single-card py-4 col-lg-3 col-md-6 col-sm-6 col-12">
                      <div className="info d-flex flex-column justify-content-center flex-no-wrap">
                        <h4 className="blog-title-home">Rahul Sharma</h4>
                        <h3 style={{ fontSize: "50px" }}>
                          95
                        </h3>
                        <p
                          className="w-100 text-nowrap text-center ms-0"
                          style={{ maxWidth: "100%" }}
                        >
                          hours contributed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="mt-md-3">
            <section className={"wpo-fun-fact-section-s3"}>
              <h2 className="w-100 text-center secondary-headerrrr">
                Top NGO&apos;s
              </h2>
              <div className="container mt-3">
                <div className="fun-fact-wrap">
                  <div className="row justify-content-center gap-3">
                    <div className="blog-single-card py-4 col-lg-3 col-md-6 col-sm-6 col-12">
                      <div className="info d-flex flex-column justify-content-center flex-no-wrap">
                        <h4 className="blog-title-home">
                          Green Earth Foundation
                        </h4>
                        <h3 className="w-100" style={{ fontSize: "50px" }}>
                          80
                        </h3>
                        <p
                          className="w-100 text-nowrap text-center ms-0"
                          style={{ maxWidth: "100%" }}
                        >
                          {" "}
                          projects completed
                        </p>
                      </div>
                    </div>
                    <div className="blog-single-card py-4 col-lg-3 col-md-6 col-sm-6 col-12">
                      <div className="info d-flex flex-column justify-content-center flex-no-wrap">
                        <h4 className="blog-title-home">Helping Hands Trust</h4>
                        <h3 style={{ fontSize: "50px" }}>
                          75
                        </h3>
                        <p
                          className="w-100 text-nowrap text-center ms-0"
                          style={{ maxWidth: "100%" }}
                        >
                          {" "}
                          projects completed
                        </p>
                      </div>
                    </div>
                    <div className="blog-single-card py-4 col-lg-3 col-md-6 col-sm-6 col-12">
                      <div className="info d-flex flex-column justify-content-center flex-no-wrap">
                        <h4 className="blog-title-home">Care for All</h4>
                        <h3 style={{ fontSize: "50px" }}>
                          70
                        </h3>
                        <p
                          className="w-100 text-nowrap text-center ms-0"
                          style={{ maxWidth: "100%" }}
                        >
                          {" "}
                          projects completed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="mt-md-3">
            <section className={"wpo-fun-fact-section-s3"}>
              <h2 className="w-100 text-center secondary-headerrrr">
                Top Organisations
              </h2>
              <div className="container mt-3">
                <div className="fun-fact-wrap">
                  <div className="row justify-content-center gap-3">
                    <div className="blog-single-card py-4 col-lg-3 col-md-6 col-sm-6 col-12">
                      <div className="info d-flex flex-column justify-content-center flex-no-wrap">
                        <h4 className="blog-title-home">
                          Global Innovations Inc.
                        </h4>
                        <h3 className="w-100" style={{ fontSize: "50px" }}>
                          1500
                        </h3>
                        <p
                          className="w-100 text-nowrap text-center ms-0"
                          style={{ maxWidth: "100%" }}
                        >
                          {" "}
                          employee hours contributed
                        </p>
                      </div>
                    </div>
                    <div className="blog-single-card py-4 col-lg-3 col-md-6 col-sm-6 col-12">
                      <div className="info d-flex flex-column justify-content-center flex-no-wrap">
                        <h4 className="blog-title-home">BrightFuture Tech</h4>
                        <h3 style={{ fontSize: "50px" }}>
                          1300
                        </h3>
                        <p
                          className="w-100 text-nowrap text-center ms-0"
                          style={{ maxWidth: "100%" }}
                        >
                          {" "}
                          employee hours contributed
                        </p>
                      </div>
                    </div>
                    <div className="blog-single-card py-4 col-lg-3 col-md-6 col-sm-6 col-12">
                      <div className="info d-flex flex-column justify-content-center flex-no-wrap">
                        <h4 className="blog-title-home">EcoVision Enterprises</h4>
                        <h3 style={{ fontSize: "50px" }}>
                          1200
                        </h3>
                        <p
                          className="w-100 text-nowrap text-center ms-0"
                          style={{ maxWidth: "100%" }}
                        >
                          {" "}
                          employee hours contributed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="mt-md-3">
            <section className={"wpo-fun-fact-section-s3"}>
              <h2 className="w-100 text-center secondary-headerrrr">
                Top Schools/Colleges
              </h2>
              <div className="container mt-3">
                <div className="fun-fact-wrap">
                  <div className="row justify-content-center gap-3">
                    <div className="blog-single-card py-4 col-lg-3 col-md-6 col-sm-6 col-12">
                      <div className="info d-flex flex-column justify-content-center flex-no-wrap">
                        <h4 className="blog-title-home">Delhi Public School</h4>
                        <h3 className="w-100" style={{ fontSize: "50px" }}>
                          200
                        </h3>
                        <p
                          className="w-100 text-nowrap text-center ms-0"
                          style={{ maxWidth: "100%" }}
                        >
                          {" "}
                          student hours contributed{" "}
                        </p>
                      </div>
                    </div>
                    <div className="blog-single-card py-4 col-lg-3 col-md-6 col-sm-6 col-12">
                      <div className="info d-flex flex-column justify-content-center flex-no-wrap">
                        <h4 className="blog-title-home">Mumbai University</h4>
                        <h3 style={{ fontSize: "50px" }}>
                          180
                        </h3>
                        <p
                          className="w-100 text-nowrap text-center ms-0"
                          style={{ maxWidth: "100%" }}
                        >
                          {" "}
                          student hours contributed{" "}
                        </p>
                      </div>
                    </div>
                    <div className="blog-single-card py-4 col-lg-3 col-md-6 col-sm-6 col-12">
                      <div className="info d-flex flex-column justify-content-center flex-no-wrap">
                        <h4 className="blog-title-home">St. Xavier’s College</h4>
                        <h3 style={{ fontSize: "50px" }}>
                          150
                        </h3>
                        <p
                          className="w-100 text-nowrap text-center ms-0"
                          style={{ maxWidth: "100%" }}
                        >
                          {" "}
                          student hours contributed{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="mt-md-3">
            <section className={"wpo-fun-fact-section-s3"}>
              <h2 className="w-100 text-center secondary-headerrrr">
                Top Influencers
              </h2>
              <div className="container mt-3">
                <div className="fun-fact-wrap">
                  <div className="row justify-content-center gap-3">
                    <div className="blog-single-card py-4 col-lg-3 col-md-6 col-sm-6 col-12">
                      <div className="info d-flex flex-column justify-content-center flex-no-wrap">
                        <h4 className="blog-title-home">Riya Kapoor</h4>
                        <h3 className="w-100" style={{ fontSize: "50px" }}>
                          300
                        </h3>
                        <p
                          className="w-100 text-nowrap text-center ms-0"
                          style={{ maxWidth: "100%" }}
                        >
                          {" "}
                          followers signed up{" "}
                        </p>
                      </div>
                    </div>
                    <div className="blog-single-card py-4 col-lg-3 col-md-6 col-sm-6 col-12">
                      <div className="info d-flex flex-column justify-content-center flex-no-wrap">
                        <h4 className="blog-title-home">Kunal Verma</h4>
                        <h3 style={{ fontSize: "50px" }}>
                          250
                        </h3>
                        <p
                          className="w-100 text-nowrap text-center ms-0"
                          style={{ maxWidth: "100%" }}
                        >
                          {" "}
                          followers signed up{" "}
                        </p>
                      </div>
                    </div>
                    <div className="blog-single-card py-4 col-lg-3 col-md-6 col-sm-6 col-12">
                      <div className="info d-flex flex-column justify-content-center flex-no-wrap">
                        <h4 className="blog-title-home">Pooja Sen</h4>
                        <h3 style={{ fontSize: "50px" }}>
                          200
                        </h3>
                        <p
                          className="w-100 text-nowrap text-center ms-0"
                          style={{ maxWidth: "100%" }}
                        >
                          {" "}
                          followers signed up{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section> */}


        <section className={props.hclass} style={{ paddingTop: '0px', marginTop: '0px' }}>
          <div className="container">
            <div className="row justify-content-center mt-2">
              <div className="col-lg-6 col-md-12 col-12">
                <SectionTitle
                  subtitle="Inspiring Journeys of Change and Service"
                  title="Real Stories, Real Impact"
                />
              </div>
            </div>
            <div className="blog-wrap mt-3">
              <div className="row justify-content-center align-items-stretch gy-4">
                {blogs.map((blog, bl) => (
                  <div className="col col-lg-4 col-md-6 col-12" style={{ minHeight: '100%' }} key={bl}>
                    <div
                      className="blog-single-card"
                      style={{ position: "relative", minHeight: '100%' }}
                    >
                      <div className="content p-3">
                        <h2 className=" mt-2 text-importanttt">
                          <a
                            className=" mt-2"
                            style={{ fontSize: "20px", lineHeight: "34px" }}
                          >
                            {blog.title}
                          </a>
                        </h2>
                        <p>{blog.subtitle}</p>
                        <ul className="top-content mb-0" style={{ paddingLeft: '0px' }}>
                          <li className="mb-0" style={{ fontSize: "18px", fontWeight: '700' }}>
                            - {blog.athor}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding pt-3 pt-md-5 pb-0">
          <div className="wpo-cta-section">
            <div className="shape-1">
              <Image src={Cta1} alt="Home Page" />
            </div>
            <div className="bg-overlay">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="cta-wrap">
                      <p style={{ color: "whitesmoke", fontSize: '26px' }} className="text-center mt-2">
                        Every hour you contribute sparks transformation. Join Sevak Army and be part of a community creating positive change across India.
                      </p>
                      <Link
                        to="https://app.sevakarmy.com/" target="_blank"
                        className="theme-btn-cta"
                      >
                        Be A Sevak
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="shape-2">
              <Image src={Cta3} alt="Home Page" />
            </div>
          </div>
        </section>

        <section className="wpo-about-section section-padding">
          <div className="container">
            <div className="wpo-about-wrap">
              <div className="row ">
                <div className="col-lg-6 col-md-12 col-12">
                  <div className="wpo-about-text p-3 pt-md-3 pt-0 mt-0">
                    <div className="wpo-section-title mt-0">
                      <span>Stay Connected with Sevak Army</span>
                      <h2 className="about-heading-second text-titleeee w-100">
                        Join Our Volunteer Community Newsletter{" "}
                      </h2>
                    </div>
                    <p style={{ textAlign: "justify" }}>
                      Be part of our growing community! Receive inspiring
                      stories, volunteer highlights, updates on social impact,
                      and tips on making the most of your service. Stay informed
                      about the amazing work being done and how you can stay
                      engaged with Sevak Army.
                    </p>
                    <h3>Keep the Spirit Alive!</h3>
                    <p>
                      Subscribe now to stay updated with all the latest news and
                      inspiration from Sevak Army.
                    </p>
                    <div>
                      <button
                        className="theme-btn"
                        onClick={() => setShowNewsletter(true)}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Subscribe to Our Newsletter
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-12">
                  <div className="wpo-about-img">
                    <div className="wpo-about-right pt-3 pt-lg-5">
                      <Image src={Newsletter} width={440} alt="Stay Connected with Community - Sevak Army" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
        <Scrollbar />
        <NewsletterPopup
          shownewsletter={shownewsletter}
          setShowNewsletter={setShowNewsletter}
        />
      </Fragment></>
  );
};
export default HomePage;
