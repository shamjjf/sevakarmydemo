import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Logo from "../../../public/assets/images/logo.svg";
import Footer from "../../components/footer/Footer";
import Cta1 from "../../../public/assets/images/cta/shape-1.png";
import Cta2 from "../../../public/assets/images/cta/top-icon.png";
import Cta3 from "../../../public/assets/images/cta/shape-2.png";
import abImg1 from "../../../public/assets/images1/school-college/events/sevak-army-school-college-events-2.png";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Image from "next/image";

// const ClickHandler = () => {
//   window.scrollTo(10, 0);
// };

const SchoolCollegeEvents = (props) => {
  return (
    <>
      <Navbar Logo={Logo} hclass={"wpo-site-header"} />
      <PageTitle pageTitle={"Events"} pagesub={"Events"} />
      <section className="wpo-about-section-s4 section-padding mt-5">
        <div className="container">
          <div className="wpo-about-wrap">
            <div className="row">
              <div className="col-lg-6 col-md-12  order-lg-1" style={{ borderRight: "1px solid #e5e5e5" }}>
                <div className="wpo-about-text">
                  <div className="wpo-section-title">
                    <h3 className="display-4 fw-bold text-titleeee">Marketing and Promotion</h3>
                  </div>
                  <p>
                    At Sevak Army, we are deeply committed to building lasting and impactful connections with schools
                    and colleges through well-crafted marketing strategies that showcase meaningful volunteer
                    opportunities.
                  </p>
                </div>
              </div>

              <div className="col-lg-6 col-md-12  order-lg-1 px-5" style={{ borderLeft: "1px solid #e5e5e5" }}>
                <div className="wpo-about-text">
                  <div className="wpo-section-title">
                    <h3 className="display-4 fw-bold text-titleeee">Promoting Volunteer Opportunities</h3>
                  </div>
                  <p>
                    At Sevak Army, we understand the importance of keeping schools and colleges informed about volunteer
                    opportunities that align with their goals. Our marketing efforts are designed to ensure that
                    institutions are not only aware of upcoming opportunities but also engaged and motivated to
                    participate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wpo-cta-section">
        <div className="shape-1">
          <Image src={Cta1} alt="Events" />
        </div>
        <div className="bg-overlay">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="cta-wrap">
                  <div className="icon">
                    <Image src={Cta2} alt="Events" />
                  </div>
                  <span>Subscribe To Our Newsletter</span>
                  <h2 className="text-capitalize" style={{ color: "orange" }}>
                    Stay Updated! Register for School and College Alerts
                  </h2>
                  <p className="text-white">
                    Don’t miss out on new volunteer opportunities. Register for school and college alerts tailored to
                    your institution’s goals and interests and stay informed about upcoming projects and initiatives.
                  </p>
                  <Link onClick={() => props.setShow(true)} to="#" className="theme-btn-cta">
                    Subscribe now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shape-2">
          <Image src={Cta3} alt="Events" />
        </div>
      </section>

      <section className="wpo-about-section section-padding">
        <div className="container">
          <div className="wpo-about-wrap">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-img">
                  {/* <div className="wpo-about-left">
                    <Image src={abImg2} alt="img" />
                  </div> */}
                  <div className="wpo-about-right pt-0">
                    <Image src={abImg1} alt="img" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-text">
                  <div className="wpo-section-title">
                    {/* <span>Who Are We?</span> */}
                    <h6 className="about-heading-second fw-bold text-titleeee">Recognition and Rewards</h6>
                  </div>
                  <p>
                    At Sevak Army, we place immense value on the dedication and hard work of our volunteers, as well as
                    the schools and colleges that support them. Our Recognition and Rewards program is designed to
                    celebrate these contributions, providing volunteers with the acknowledgment they deserve, while
                    motivating them to continue their incredible work.
                  </p>

                  <div className="wpo-section-title mt-5">
                    {/* <span>Welcome to Sevak Army!</span> */}
                    <h2 className="about-heading-third text-titleeee">Volunteer Recognition</h2>
                  </div>
                  <p>
                    Sevak Army strongly believes in acknowledging the contributions of every volunteer. We understand
                    that behind every successful task is the commitment and energy of volunteers who dedicate their time
                    and skills to making a difference.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <Scrollbar />
    </>
  );
};

export default SchoolCollegeEvents;
