import React from "react";
// import Difference from "../../../public/assets/images1/organisation/home/social-responsibility.jpg";
import Difference from "../../../public/assets/new-images/organizations/make-deference.jpg";
// import Helporg from "../../../public/assets/images1/organisation/home/help.png";
import Helporg from "../../../public/assets/new-images/common/our-mission.jpg";
// import abImg5 from "../../../public/assets/images1/organisation/about-us/sevak-army-organization-about-us-5.jpg";
import abImg5 from "../../../public/assets/new-images/common/our-vision.jpg";
import Image from "next/image";
// import CtaSection from "../CtaSection/CtaSection";

const AboutSection = (props) => {
  // const ClickHandler = () => {
  //   window.scrollTo(10, 0);
  // };

  return (
    <>
      <section className="wpo-about-section pt-0">
        <div className="container">
          <div className="wpo-about-wrap">
            <div className="row align-items-start mt-5 pt-2">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-img">
                  <div className="wpo-about-right pt-3 pt-1 pt-lg-1">
                    <Image src={Difference} alt="Make a Difference with Corporate Social Responsibility" height={400} />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-text mt-0">
                  <div className="wpo-section-title mb-3 p-2">
                    <span>About Us</span>
                    <h2 className="" style={{ whiteSpace: 'pre-wrap' }}>
                      Make a Difference with Corporate Social Responsibility
                    </h2>
                  </div>
                  <p className="mb-0">
                    Welcome to Sevak Army! We are a platform where organisations
                    can register and encourage their employees to get involved in
                    volunteer work. Our aim is to make it easy for businesses to
                    help communities and reach their CSR (Corporate Social
                    Responsibility) goals. We believe every organisation, big or
                    small, can make the world a better place. By working with us,
                    businesses can give back to society and help solve important
                    problems while keeping their employees engaged in meaningful
                    activities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="container section-padding">
          <div className="wpo-about-wrap">
            <div className="flex-containerrr gap-x-5 column-gappp">
              <div className="pt-0">
                <div
                  className="wpo-about-text mt-0"
                >
                  <div className="wpo-section-title mb-3 p-2">
                    <span>Our Mission</span>
                    <h2 className="">
                      Help Organisations Lead Social Work
                    </h2>
                  </div>
                  <p className="p-1">
                    Our mission is simple: to help businesses do good in the
                    world. We make it easy for organisations to include social
                    responsibility in their daily work. Whether it's helping the
                    environment, improving education or supporting health and
                    well-being, Sevak Army is a platform where organisations
                    encourage their employees to join as volunteers for their CSR
                    activities that make a real difference. We believe every
                    organisation can help make the world better.
                  </p>
                </div>
              </div>
              <div className="">
                <div className="wpo-about-img">
                  <div className="wpo-about-right mr-0 pt-3">
                    <Image src={Helporg} alt="Mission - Help organisations Lead Social Work" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container">
          <div className="wpo-about-wrap">
            <div className="row flex-wrap-reverse gy-4">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-img">
                  <div className="wpo-about-right pt-3 pt-0 pt-lg-2">
                    <Image src={abImg5} width={556} height={371} alt="Vision - A World Where Businesses Help Change The Communities" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-text p-2 mt-0">
                  <div className="wpo-section-title mt-0 mb-0">
                    <span>Our Vision</span>
                    <h2 className="">
                      A World Where Businesses Help Change the Communities
                    </h2>
                  </div>
                  <p>
                    We dream of a world where businesses lead the way in making
                    positive changes. Our vision is for organisations to not only
                    focus on making money but also on helping others. We want to
                    inspire businesses to give back to their communities, creating
                    a wave of positive action that changes lives. By joining Sevak
                    Army, your organisation can be part of this change.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </section>
    </>
  );
};

export default AboutSection;
