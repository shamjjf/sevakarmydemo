import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Image from "next/image";

import metadata from './../../app/[[...slug]]/metadata.json';
import useMetaTags from "../../app/hooks/useMetaTags";

// All component imports srart from here
import SectionTitle from "../SectionTitle/SectionTitle";
import Volunteerhomecards from "../Volunteer/Volunteerhomecards";
import volunteerhomeEvents from "../Volunteer/Volunteerhomeevents";
import Volunteerhometestmonial from "../Volunteer/Volunteerhometestmonial";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";
import Scrollbar from "../scrollbar/scrollbar";
import SupportersSlider from "../hero/SupportersSlider";
import ServiceCard from "../ServiceSection/ServiceCard";
import NewsletterPopup from "../NewsletterPopup";

// All image imports starts from here
import Vision from "../../../public/assets/images/service/arrow.webp";
// import ShareInspire from "../../../public/assets/images1/volunteer/home/share-inspire-2.webp";
import ShareInspire from "../../../public/assets/new-images/volunteer/social-share.jpg";
import NGO from "../../../public/assets/images1/volunteer/home/ngo.webp";
// const Opportunities = '/assets/images1/volunteer/home/Opportunities.webp';
import Opportunities from "../../../public/assets/images1/volunteer/home/Opportunities.webp";
import Progress from "../../../public/assets/images1/volunteer/home/progress.webp";
import Impact from "../../../public/assets/images1/volunteer/home/impact.webp";
import Newsletter from "../../../public/assets/new-images/volunteer/newsletter.jpg";
import Imgs1 from "../../../public/assets/images/volunteer/add-user.webp";
import Imgs2 from "../../../public/assets/images/volunteer/data-discovery.webp";
import Imgs3 from "../../../public/assets/images/volunteer/apply.webp";
import Imgs4 from "../../../public/assets/images/volunteer/search.webp";
import Imgs5 from "../../../public/assets/images/volunteer/chat.webp";
import abImg2 from "../../../public/assets/new-images/volunteer/who-we-are.jpg";
import InspireOthers from "../../../public/assets/new-images/volunteer/lead-change.jpg";
// import Image1 from "../../../public/assets/images1/ngo/home/sevak-army-ngo-home-1.webp";
import Image1 from "../../../public/assets/new-images/volunteer/hero-sec.jpg";
import Videobg from "../../../public/assets/images1/ngo/home/sevak-army-ngo-home-2.webp";
import ShapeBg from "../../../public/assets/images/slider/stick-man.svg";
import Logo from "../../../public/assets/images/logo.svg";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const featuresData = [
  {
    svg: NGO,
    title: "Work with Trusted NGOs",
    description:
      "Apply for opportunities with verified NGOs to make a real difference.",
  },
  {
    svg: Opportunities,
    title: "Find the Right Opportunities",
    description: "Choose short-term or long-term tasks that fit your skills, interests, and schedule.",
  },
  {
    svg: Progress,
    title: "Track Your Progress",
    description:
      "Log your hours, earn e-certificates and move up the leaderboard.",
  },
  {
    iconClass: "flaticon-solidarity",
    title: "Be Part of a Caring Community",
    description: "Join a group of volunteers dedicated to helping others.",
  },
  {
    svg: Impact,
    title: "Make a Real Impact",
    description:
      "Every task you complete contributes to meaningful social work and drives positive change.",
  },
];

const howWorksData = [
  {
    iconClass: "flaticon-volunteer",
    img: Imgs1,
    title: "Register",
    description: "Register on Sevak Army and create your volunteer profile.",
  },
  {
    iconClass: "flaticon-charity",
    title: "Browse & Filter Tasks",
    img: Imgs2,
    description:
      "Search and filter volunteer opportunities based on your skills and interests.",
  },
  {
    iconClass: "flaticon-solidarity",
    img: Imgs3,
    title: "Apply for Opportunities",
    description:
      "If an opportunity suits your profile, apply and fill out the eligibility form required by the NGO.",
  },
  {
    iconClass: "flaticon-solidarity",
    img: Imgs4,
    title: "NGO Review",
    description:
      "The NGO will review your application and accept it if you meet the criteria for the role.",
  },
  {
    iconClass: "flaticon-solidarity",
    img: Imgs5,
    title: "Connect & Chat",
    description:
      "Once accepted, the chat portal will activate, allowing you to communicate directly with the NGO to coordinate and begin your task.",
  },
];

const Volunteerhome = ({ path }) => {
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
      {/* <Helmet>
        <title>Volunteer | Sevak Army</title>
        <meta name="keywords" content="NGO, volunteer, social work" />
        <link rel="canonical" href="https://sevakarmy.com/volunteer" />
      </Helmet> */}

      <Navbar Logo={Logo} hclass={"wpo-site-header"} />
      <section className="static-hero">
        <div className="hero-container">
          <div className="hero-inner">
            <div className="container-fluid">
              <div className="hero-content">
                <div className="slide-title-sub">
                  <span>Discover the Best Way to Serve</span>
                </div>
                <div className="slide-title">
                  <h2 className="slide-heading">
                    Find Your Perfect Role in Volunteering with Sevak Army
                  </h2>
                </div>
                <div className="slide-text">
                  <p style={{ textAlign: "justify" }}>
                    Sevak Army makes it easy for you to find the right volunteer
                    opportunity. We connect passionate individuals with verified
                    NGOs to match your skills, interests and availability.
                  </p>
                </div>
                <div className="clearfix"></div>
                <div data-swiper-parallax="500" className="slide-video-content">
                  <div className="slide-video-img">
                    <Image src={Videobg} width={152} height={151} alt="Volunteers for NGO - Sevak Army" />
                  </div>
                  <div className="slide-video-text">
                    <h4 className="slide-video-text-show">
                      Join Us Today and Start Making a Real Difference!
                    </h4>
                    <p className="slide-video-para">
                      Explore volunteering opportunities in various fields like
                      education, healthcare, community outreach or
                      environmental work and make your contribution count!
                    </p>
                  </div>
                </div>
                <div className="mt-5">
                  <Link
                    to="https://app.sevakarmy.com/" target="_blank"
                    className="theme-btn"
                  >
                    Join as a Volunteer Today
                  </Link>
                </div>
                <div className="charius-pic image-positionnnn pt-0">
                  <div className="charius-pic-main">
                    <Image src={Image1} width={700} height={700} style={{ height: 'fit-content' }} alt="img" />
                  </div>

                  <div className="wpo-supporter">
                    <div className="wpo-supporter-text">
                      <div className="icon">
                        <i>
                          <Image src={ShapeBg} alt="img" />
                        </i>
                      </div>
                      <div className="content">
                        <h3>63823+</h3>
                        <p>Volunteers Partnered</p>
                      </div>
                    </div>
                    <SupportersSlider />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wpo-cta-section section-padding">
        <div className="bg-overlay">
          <div className="">
            <div className="bg-color">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="cta-wrap">
                    <span>Join Sevak Army</span>
                    <h2>Register Now and Start Volunteering</h2>
                    <p
                      className="px-2 text-center"
                      style={{ textAlign: "justify", color: "white" }}
                    >
                      We are on a mission to achieve 2 million volunteer hours
                      by 2025. Your time and dedication can help us get there.
                      Register today, find the right task and be part of
                      something extraordinary.
                    </p>
                    <Link
                      to="https://app.sevakarmy.com/" target="_blank"
                      className="theme-btn"
                    >
                      Join as a Volunteer Today
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wpo-about-section section-padding pb-0 pt-0 pb-0">
        <div className="container">

          <section className="section-padding pb-0">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-12 col-12">
                <SectionTitle subtitle="Serve with Impact" title="Step Into Purpose with Sevak Army" />
              </div>
            </div>

            <div className="wpo-features-area pt-3">
              <div className="features-wrap">
                <div className="row justify-content-center gy-4 align-items-stretch">
                  {featuresData.map((feature, index) => (
                    <div className="col col-lg-4 col-md-6 col-12" key={index}>
                      <div className="feature-item-wrap h-100" style={{ minHeight: '100%' }}>
                        <div
                          className="feature-item d-flex align-items-center mb-0"
                          style={{ minHeight: '100%' }}
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
                            <p
                              className="fs-6"
                              style={{ textAlign: "justify" }}
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

          <section className="section-padding">
            <div className="wpo-about-wrap mt-md-5">
              <div className="row">
                <div className="col-lg-6 col-md-12 col-12">
                  <div className="wpo-about-img">

                    <div className="wpo-about-right pt-0">
                      <Image src={abImg2} width={408} height={612} alt="Empowering Community - SevakArmy" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-12">
                  <div className="wpo-about-text mt-2">
                    <div className="wpo-section-title">
                      <span>Who Are We?</span>
                      <h2 className="about-heading-second text-titleeee">
                        Empowering People to Serve with Purpose
                      </h2>
                    </div>
                    <p className="volunteer-home-text">
                      Sevak Army connects people of all ages, including
                      students, professionals and retirees, with verified NGOs
                      to make a lasting social impact. Everyone has something to
                      offer, whether a few hours or a long-term commitment.
                      Instead of simply volunteering, why not choose
                      opportunities that match your interests, skills and
                      schedule! This way, your efforts will help the community
                      and bring you personal satisfaction. <br />
                      We welcome volunteers from all walks of life - corporate
                      employees looking for meaningful CSR activities, retirees
                      wanting to give back, students eager to learn the value of
                      service and anyone who wishes to contribute to society.
                    </p>
                  </div>
                </div>
                <div className="col-12 d-flex flex-column justify-content-center align-items-center">
                  <div className="about-info-wrap col-10 justify-content-center align-items-center gap-5 mission-vission-responsive">
                    <div
                      className="about-info-item "
                      style={{ alignItems: "self-start" }}
                    >
                      <div className="about-info-icon mission-icon">
                        <div className="icon me-3" style={{ marginTop: '8px' }}>
                          <Image width={78} height={78} src={Vision} alt="Vision" />
                        </div>
                      </div>
                      <div className="about-info-text">
                        <h4>Our Mission</h4>
                        <p className="mission-paragraph volunteer-home-text">
                          To create a platform where individuals can connect
                          with trusted NGOs, engage in meaningful service and
                          contribute to society through tasks that match their
                          skills, interests and time.
                        </p>
                      </div>
                    </div>
                    <div
                      className="about-info-item "
                      style={{ alignItems: "self-start" }}
                    >
                      <div className="about-info-icon">
                        <div className="icon me-3" style={{ marginTop: '8px' }}>
                          <i className="fi flaticon-mountain"></i>
                        </div>
                      </div>
                      <div className="about-info-text ">
                        <h4>Our Vision</h4>
                        <p className="vision-paragraph volunteer-home-text">
                          By 2025, we aim to achieve 2 million hours of
                          volunteer work across India, building active,
                          compassionate communities that grow through social
                          responsibility.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-100 d-flex justify-content-center align-items-center">
                    <Link
                      to="https://app.sevakarmy.com/" target="_blank"
                      className="theme-btn"
                    >
                      Register Now
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </section>

          <Volunteerhomecards />


          <section className="wpo-cta-section-s3 section-padding">
            <div className="container">
              <div className="bg-color" style={{ background: "#007560" }}>
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="cta-wrap">
                      <span>Lend a Hand, Change a Life</span>
                      <h2>Join Sevak Army and Make Your Contribution Count.</h2>
                      <Link
                        to="https://app.sevakarmy.com/" target="_blank"
                        className="theme-btn"
                      >
                        Register to volunteer today!
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="service-wrap mt-2">
            <SectionTitle
              subtitle="Empower. Engage. Impact."
              title="Why Volunteer with Sevak Army?"
            />
            <div className="row justify-content-center mt-0 align-items-stretch gy-4">
              {volunteerhomeEvents.slice(0, 10).map((Service, sitem) => (
                <div
                  className="col col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12"
                  key={sitem}
                >
                  <div className="service-card-wrapper d-flex flex-column h-100">
                    <ServiceCard
                      // height="380px"
                      title={Service.title}
                      img={Service.pimg}
                      slug={Service.slug}
                      sdescription={Service.description}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <section className="section-padding pb-0 mt-2">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-12 col-12">
                <SectionTitle subtitle="Get Involved Easily" title="How It Works?" />
              </div>
            </div>

            <div className="wpo-features-area pt-3">
              <div className="features-wrap">
                {/* <p className="pb-2" style={{ width: '100%', textAlign: 'center' }}>Apply for opportunities with verified NGOs to make a real difference.</p> */}
                <div className="row justify-content-center gy-4 align-items-stretch">
                  {howWorksData.map((feature, index) => (
                    <div className="col col-lg-4 col-md-6 col-12" key={index}>
                      <div className="feature-item-wrap h-100" style={{ minHeight: '100%' }}>
                        <div
                          className="feature-item d-flex align-items-center mb-0"
                          style={{ minHeight: '100%' }}
                        >
                          <div className="d-flex align-items-start">
                            <div className="feature-icon">
                              <div className="icon">
                                <Image width={110} height={110} src={feature.img} alt="Features" />
                              </div>
                            </div>
                            <div className="feature-text">
                              <h2 className="fs-5">{feature.title}</h2>
                              <p
                                className="fs-6"
                                style={{ textAlign: "justify" }}
                              >
                                {feature.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="w-100 d-flex justify-content-center mt-5">
                  <Link onClick={ClickHandler} to="become-volunteer" className="theme-btn">
                    Know more
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="pb-5 pt-2">
            <Volunteerhometestmonial />
          </section>

          {/* <section className="">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-12 col-12">
                <SectionTitle subtitle="Leading to Inspire Change" title="Top Volunteers Leading the Way" paragarap=" Celebrate the dedication of our top volunteers who are making a
              real difference through their service. These individuals have
              contributed the most hours and earned top spots on the
              leaderboard."/>
              </div>
            </div>
            <div className="mt-3">
              <FunFact hclass="wpo-fun-fact-section-s3" />
            </div>
          </section> */}

          <div className="container section-padding">
            <div className="wpo-about-wrap">
              <div className="row">
                <div className="col-lg-6 col-md-12 col-12">
                  <div className="wpo-about-img">
                    <div className="wpo-about-right pt-0">
                      <Image src={InspireOthers} width={530} height={530} alt="Become a Sevak Army Brand Ambassador" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-12">
                  <div className="wpo-about-text p-3 mt-0 pb-1 pb-lg-2 pt-1 pt-lg-2">
                    <div className="wpo-section-title mt-0">
                      <span>Become a Sevak Army Ambassador</span>
                      <h2 className="about-heading-second text-titleeee">
                        Lead the Change, Inspire Others
                      </h2>
                    </div>
                    <p style={{ textAlign: "justify" }}>
                      Take your volunteer journey to the next level by becoming
                      a Sevak Army Ambassador. Share your passion, promote
                      volunteering opportunities and help expand our community
                      of change-makers. As an ambassador, you will be a leader,
                      inspiring others to join and make a real difference.
                    </p>

                    <h3>Ready to Lead?</h3>
                    <p>
                      Become a Sevak Army Ambassador today and inspire others to
                      serve!
                    </p>
                    <div>
                      <Link
                        className="theme-btn"
                        to="https://app.sevakarmy.com/" target="_blank"
                      >
                        Apply Now to Be an Ambassador
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container section-padding pt-0">
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
                      <Image src={Newsletter} width={440} height={440} alt="Stay Connected with Community - Sevak Army" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="container section-padding pt-0 pb-4">
            <div className="wpo-about-wrap">
              <div className="row">
                <div className="col-lg-6 col-md-12 col-12">
                  <div className="wpo-about-img">
                    {/* <div className="wpo-about-left">
                    <Image src={abImg5} alt="img" />
                  </div> */}
                    <div className="wpo-about-right pt-0 pt-md-1 pb-5">
                      <Image src={ShareInspire} alt="Social Media and Referrals Earn Points with Sevak Army" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-12">
                  <div className="wpo-about-text p-3 mt-0 pb-1 pb-lg-2 pt-1 pt-lg-2">
                    <div className="wpo-section-title mt-0">
                      <span className="">
                        Make a Bigger Impact through Social Media and Referrals
                      </span>
                      <h2 className="about-heading-second text-titleeee">
                        Share, Inspire and Earn Points with Sevak Army{" "}
                      </h2>
                    </div>
                    <p style={{ textAlign: "justify" }}>
                      Share your volunteering experiences on social media using
                      #SevakArmy to inspire others and grow our community of
                      volunteers. By sharing your journey, you can motivate
                      friends and followers to join in making a difference.{" "}
                      <br />
                      Earn extra points by inviting others! Use your unique
                      referral link and for every person who registers and
                      volunteers through your link, you will move up the
                      leaderboard. The more you share, the more you contribute,
                      and the more you earn! Start Sharing & Invite Others to
                      Earn Points Today!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wpo-cta-section section-padding pt-5">
        <div className="bg-overlay">
          <div className="container">
            <div className="bg-color">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="cta-wrap">
                    <h2 className="mb-2">Volunteer with Flexibility</h2>
                    <p
                      className="text-center pt-2 px-2"
                      style={{ textAlign: "justify", color: "white" }}
                    >
                      Sevak Army understands that everyone’s time is unique.
                      Whether you're a student, a working professional or a
                      retiree, we offer tasks that fit into your schedule—from
                      one-time events to ongoing projects. You decide how you
                      want to contribute!
                    </p>
                    <div className="d-flex flex-column gap-3 justify-content-center align-items-center w-100">
                      <span>Register Now and Start Volunteering</span>
                      <Link
                        to="https://app.sevakarmy.com/" target="_blank"
                        className="theme-btn"
                        style={{ width: "fit-content" }}
                      >
                        Join as a Volunteer Today
                      </Link>
                    </div>
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
    </>
  );
};

export default Volunteerhome;
