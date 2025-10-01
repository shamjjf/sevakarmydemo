import React from "react";
import { Link } from "react-router-dom";
import abImg1 from "../../../public/assets/images/about/img-1.jpg";
import abImg2 from "../../../public/assets/images/about/img-2.jpg";
import Image from "next/image";

const About = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className="wpo-about-section section-padding">
      <div className="container">
        <div className="wpo-about-wrap">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="wpo-about-img">
                <div className="wpo-about-left">
                  <Image src={abImg2} alt="img" />
                </div>
                <div className="wpo-about-right">
                  <Image src={abImg1} alt="img" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="wpo-about-text">
                <div className="wpo-section-title">
                  <span>Welcome to Sevak Army!</span>
                  <h2 className="about-heading-second">Raise A Helping Hand For Those In Need.</h2>
                </div>
                <p>
                  Sevak Army is a dedicated online platform where companies can register, mobilize their employees for
                  volunteer work and track the social impact of their efforts. Our goal is to help businesses engage in
                  impactful volunteerism while meeting their CSR objectives. We provide the tools you need to foster a
                  culture of service, empowering your employees to contribute to causes that matter to them - and to
                  you.
                </p>

                <div className="about-info-wrap">
                  <div className="about-info-item">
                    <div className="about-info-icon">
                      <div className="icon">
                        <i className="fi flaticon-target"></i>
                      </div>
                    </div>
                    <div className="about-info-text">
                      <h4>Our Mission</h4>
                      <p className="mission-paragraph">
                        Enable businesses to transform the world around them through organized volunteerism.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="about-info-item">
                    <div className="about-info-icon">
                      <div className="icon">
                        <i className="fi flaticon-mountain"></i>
                      </div>
                    </div>
                    <div className="about-info-text">
                      <h4>Our Vision</h4>
                      <p className="vision-paragraph">
                        Create a future where corporate volunteerism becomes the cornerstone of social change.
                      </p>
                    </div>
                  </div>
                </div>

                <Link onClick={() => props.setShow(true)} to="#" className="theme-btn">
                  Discover More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="wpo-about-wrap">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-12 about-text-left">
              <div className="wpo-about-text">
                <div className="wpo-section-title">
                  {/* <span>Welcome to Sevak Army!</span> */}
                  <h2 className="about-heading-third">Register Your Company and Make a Difference.</h2>
                </div>
                <p>
                  Take the first step towards building a socially responsible company by registering your organisation
                  with Sevak Army. By joining our platform, you gain access to a wide range of volunteering
                  opportunities, comprehensive task management tools and real-time tracking of your company’s impact.
                </p>
                <h4 className=".services-title-text">It’s simple, it’s effective and it starts with a click.</h4>
=

                <Link onClick={() => props.setShow(true)} to="#" className="theme-btn">
                  Register Now
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12 about-text-images">
              <div className="wpo-about-img">
                <div className="wpo-about-left-side">
                  <Image src={abImg2} alt="img" />
                </div>
                <div className="wpo-about-right">
                  <Image src={abImg1} alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
