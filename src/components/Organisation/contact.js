import React, { useState } from "react";
import Mail from "../../../public/assets/images1/volunteer/home/mail.png";
import Phone from "../../../public/assets/images1/volunteer/home/support.png";
import Path from "../../../public/assets/images1/volunteer/home/ambassador-photoroom.png";
import SectionTitle from "../SectionTitle/SectionTitle";
import gimg2 from "../../../public/assets/images/service/growth.png";
import gimg3 from "../../../public/assets/images/service/benefits.png";
import gimg1 from "../../../public/assets/images/service/employee.png";
import gimg4 from "../../../public/assets/images/service/bubble-chat.png";
import Image from "next/image";

import ServiceCard from "../ServiceSection/ServiceCard";
import CotactFormModal from "../CotactFormModal";

const Contact = () => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };
  const [showContact, setShowContact] = useState(false);

  const Services = [
    {
      Id: "01",
      sImg: gimg1,
      // 
      // title: 'Name',
      slug: "2",
      description: "Maximising Employee Engagement: Best Practices.",
    },
    {
      Id: "02",
      sImg: gimg2,
      // 
      // title: 'Email Address',
      slug: "1",
      description:
        "Success Stories: How Organisations Are Making a Difference?",
    },
    {
      Id: "03",
      sImg: gimg3,
      // 
      // title: 'Subject',
      slug: "3",
      description:
        "The Benefits of Corporate Volunteering: Why Your Organisation Should Get Involved?",
    },
    {
      Id: "04",
      sImg: gimg4,
      // 
      // title: 'Message',
      slug: "4",
      description:
        "Innovative Volunteer Programmes: Ideas to Inspire Your Organisation.",
    },
  ];

  return (
    <>
      <section className="wpo-about-section section-padding pt-5 mt-3 pb-0">
        <div className="container">
          <div className="wpo-about-wrap">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-text p-3 mt-0 pb-1 pb-lg-2 pt-1 pt-lg-2">
                  <div className="wpo-section-title mt-0 mb-3">
                    <span>We’re Always Here to Help You</span>
                    <h2 className="about-heading-second text-titleeee">
                      Get in Touch
                    </h2>
                  </div>
                  <p className="mt-0 pt-0" style={{ textAlign: "justify" }}>
                    We're here to help you! If you have questions, need support,
                    or want to share your thoughts, this is the place to connect
                    with us. Your feedback is important, as we want to help you
                    use our platform effectively.
                    <p className="mb-1 mt-1">
                      <b>Contact Us Anytime: </b> You can reach out to us in
                      different ways to get the support you need for your
                      corporate social responsibility efforts.
                    </p>
                    <p className="mb-1">
                      <b>Contact Form: Quick and Easy: </b> Our Contact Form
                      makes it simple for you to ask questions or share your
                      concerns. Just fill in your details and message and we'll
                      make sure the right team member gets back to you.
                    </p>
                    <div className="w-100 d-flex justify-content-start mt-3">
                      <button
                        onClick={() => setShowContact(true)}
                        className="theme-btn"
                      >
                        Fill out the form
                      </button>
                    </div>
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-img">
                  {/* <div className="wpo-about-left">
                    <Image src={abImg5} alt="img" />
                  </div> */}
                  <div className="wpo-about-right pt-3 pt-lg-5">
                    <Image src={Path} alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wpo-about-section section-padding pb-0">
        <div className="container">
          {/* <section className="">
            <WhyMatterContact />
          </section> */}

          <section className="container section-padding pt-0">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-12 col-12">
                <SectionTitle
                  subtitle=""
                  title="Customer Support: Get Help Fast"
                />
              </div>
            </div>
            <div className="mt-3">
              <section className={"wpo-fun-fact-section-s3 pb-0"}>
                <div className="container mt-3">
                  <div className="service-wrap">
                    <div className="row justify-content-center gap-3">
                      <div className="service-item px-4 py-4 col-xl-3 col-lg-4 col-md-7 col-sm-8 col-11 sevak-custom-carddd">
                        <div className="info d-flex flex-column justify-content-center flex-no-wrap">
                          <div className="w-100 d-flex py-4 justify-content-center">
                            <div className="icon">
                              <Image src={Mail} width={60} alt="img" />
                            </div>
                          </div>
                          <h2 className="text-center">Email Support</h2>
                          <p
                            className="w-100 text-center ms-0"
                            style={{ maxWidth: "100%" }}
                          >
                            Email us at{" "}
                            <b>
                              <a
                                href="mailto:info@SevakArmy.com "
                                className="linkkkkk"
                              >
                                info@SevakArmy.com{" "}
                              </a>
                            </b>{" "}
                            for any questions or problems. We’ll reply quickly
                            to help you.
                          </p>
                        </div>
                      </div>
                      <div className="service-item px-4 py-4 col-xl-3 col-lg-4 col-md-7 col-sm-8 col-11 sevak-custom-carddd">
                        <div className="info d-flex flex-column justify-content-center flex-no-wrap">
                          <div className="w-100 d-flex py-4 justify-content-center">
                            <div
                              className="icon"
                              style={{
                                backgroundColor: "#FFFCF4",
                                border: "1px solid #EBB011",
                              }}
                            >
                              <Image src={Phone} width={60} alt="img" />
                            </div>
                          </div>
                          <h2 className="text-center">Phone Support</h2>
                          <p
                            className="w-100 text-center ms-0"
                            style={{ maxWidth: "100%" }}
                          >
                            Call us at{" "}
                            <b>
                              <a href="tel:+919552845284" target="_blank" className="linkkkkk">
                                +91 95 5284 5284
                              </a>
                            </b>{" "}
                            during business hours for immediate help. Our team
                            is ready to assist you.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="w-100 text-center">
                    Reach out to us using the details above for direct support.
                  </p>
                  <div className="d-flex justify-content-center mt-3">
                    <button
                      onClick={() => setShowContact(true)}
                      className="theme-btn"
                    >
                      Contact us today and we’ll be happy to help
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </section>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-12 col-12">
              <SectionTitle
                title="Blogs"
                paragarap="Explore our latest insights on corporate volunteerism and CSR."
              />
            </div>
          </div>
          <div className="service-wrap mt-3">
            <div className="row justify-content-center">
              {Services.slice(0, 4).map((Service, sitem) => (
                <div
                  className="col col-lg-3 col-md-6 col-sm-6 col-12"
                  key={sitem}
                >
                  <div className="service-card-wrapper d-flex flex-column h-100">
                    <ServiceCard
                      height="310px"
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

      <CotactFormModal
        showContact={showContact}
        setShowContact={setShowContact}
      />
    </>
  );
};

export default Contact;
