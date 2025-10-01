import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import About4 from "../../../public/assets/images1/influencer/contact-us/sevak-army-influencer-contact-1.jpg";
import About4s2 from "../../../public/assets/images/slider/stick-man.svg";
/* team imags */
import team1 from "../../../public/assets/images1/team/sevak-army-team-4.jpg";
import team2 from "../../../public/assets/images1/team/sevak-army-team-6.jpg";
import team3 from "../../../public/assets/images1/team/sevak-army-team-7.jpg";
import team4 from "../../../public/assets/images1/team/sevak-army-team-8.jpg";
import team5 from "../../../public/assets/images1/team/sevak-army-team-9.jpg";
import Navbar from "../../components/Navbar/Navbar";
import Logo from "../../../public/assets/images/logo.svg";
import Footer from "../../components/footer/Footer";
import SimpleReactValidator from "simple-react-validator";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Image from "next/image";

const InfluencerContact = () => {
  // const ClickHandler = () => {
  //   window.scrollTo(10, 0);
  // };
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const [forms, setForms] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });
  const [validator] = useState(
    new SimpleReactValidator({
      className: "errorMessage",
    })
  );
  const [now, setnow] = useState(Date.now());
  const changeHandler = (e) => {
    setForms({ ...forms, [e.target.name]: e.target.value });
    if (validator.allValid()) {
      validator.hideMessages();
    } else {
      validator.showMessages();
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (validator.allValid()) {
      validator.hideMessages();
      setForms({
        name: "",
        email: "",
        subject: "",
        phone: "",
        message: "",
      });
    } else {
      setnow(Date.now());
      validator.showMessages();
    }
  };
  return (
    <>
      <Navbar hclass="wpo-site-header" Logo={Logo} />
      <PageTitle pageTitle={"Contact Us"} pagesub={"Contact Us"} />
      <section className="wpo-about-section-s4" style={{ marginTop: "100px" }}>
        <div className="container">
          <div className="wpo-about-wrap">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12  order-lg-2">
                <div className="wpo-about-img-s5">
                  <div className="image">
                    <Image src={About4} alt="Influencer Contact" />
                  </div>
                  <div className="wpo-supporter">
                    <div className="wpo-supporter-text">
                      <div className="icon">
                        <i>
                          <Image src={About4s2} alt="Influencer Contact" />
                        </i>
                      </div>
                      <div className="content">
                        <h3>120+</h3>
                        <p>Happy Volunteer</p>
                      </div>
                    </div>
                    <div className="wpo-supporter-img">
                      <ul className="wpo-supporter-slide">
                        <Slider {...settings}>
                          <li data-bs-toggle="tooltip" data-bs-html="true" title="Aliza Anny">
                            <Image src={team1} alt="Influencer Contact" />
                          </li>
                          <li data-bs-toggle="tooltip" data-bs-html="true" title="David Miller">
                            <Image src={team2} alt="Influencer Contact" />
                          </li>
                          <li data-bs-toggle="tooltip" data-bs-html="true" title="Maria Silva">
                            <Image src={team3} alt="Influencer Contact" />
                          </li>
                          <li data-bs-toggle="tooltip" data-bs-html="true" title="Takila Mas">
                            <Image src={team4} alt="Influencer Contact" />
                          </li>
                          <li data-bs-toggle="tooltip" data-bs-html="true" title="Jenny Lawba">
                            <Image src={team5} alt="Influencer Contact" />
                          </li>
                        </Slider>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12  order-lg-1">
                <div className="wpo-about-text">
                  <div className="wpo-section-title">
                    <span>Contact Influencers</span>
                    <h2 className="text-titleeee">We're Happy to Connect with you</h2>
                  </div>
                  <p>
                    At Sevak Army Influencer, we are committed to making a difference and welcome any inquiries or
                    outreach. We'd love to hear from you whether you want to collaborate, learn more about our
                    initiatives or have questions. Here's how you can get in touch with us.
                  </p>

                  {/* <div className="about-btn">
                    <Link to="/influncer/contact-us" className="theme-btn">
                      Contact Us
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="wpo-contact-pg-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 offset-lg-1">
              <div className="office-info">
                <div className="row">
                  <div className="col col-xl-4 col-lg-6 col-md-6 col-12 ">
                    <div className="office-info-item" style={{ height: "100%" }}>
                      <a href="https://maps.app.goo.gl/4Tuo7G2cKtnx3riH9" target="_blank" rel="noreferrer">
                        <div
                          className="office-info-icon"
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <div className="icon">
                            <i className="fi flaticon-location text-warning"></i>
                          </div>
                        </div>
                        <div className="office-info-text">
                          <h3>Address</h3>
                          <p className="text-center">
                            {" "}
                            Jainam Jivika Foundation <br />
                            3, Jainam Tower, 3, Sai Park, <br />
                            Belthika Nagar, Thergaon (Chinchwad), <br />
                            Pune - 411033, Maharashtra, India.
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col col-xl-4 col-lg-6 col-md-6 col-12 ">
                    <div className="office-info-item" style={{ height: "100%" }}>
                      <a href="mailto:info@SevakArmy.com" target="_blank" rel="noreferrer">
                        <div
                          className="office-info-icon"
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <div className="icon">
                            <i className="fi flaticon-email text-warning"></i>
                          </div>
                        </div>
                        <div className="office-info-text">
                          <h2>Email Us</h2>
                          <p className="text-center">info@SevakArmy.com</p>

                          {/* <p>+91 9235 247 365</p> */}
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col col-xl-4 col-lg-6 col-md-6 col-12 ">
                    <div className="office-info-item" style={{ height: "100%" }}>
                      <a href="tel:+919552845284" target="_blank" rel="noreferrer">
                        <div
                          className="office-info-icon"
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <div className="icon">
                            <i className="fa fa-phone fa-3x text-warning"></i>
                          </div>
                        </div>
                        <div className="office-info-text">
                          <h2>Call Now</h2>
                          <p className="text-center"><a href="tel:+919552845284" className="linkkkkk">+91 95 5284 5284</a></p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wpo-section-title" style={{ maxWidth: '860px' }}>
                <h2 className="text-capitalize">Do you have a question or need more information about SevakArmy?</h2>
                <p className="text-center">
                  Use our general inquiry form to get in touch and our team will get back to you as soon as possible.
                </p>
              </div>
              <div className="wpo-contact-form-area">
                <form onSubmit={(e) => submitHandler(e)} className="contact-validation-active">
                  <div className="row">
                    <div className="col col-lg-6 col-12">
                      <div className="form-field">
                        <input
                          value={forms.name}
                          type="text"
                          name="name"
                          onBlur={(e) => changeHandler(e)}
                          onChange={(e) => changeHandler(e)}
                          placeholder="Full Name"
                        />
                        <div className="red-texttt mt-1" style={{ color: 'red' }}>
                          {validator.message("name", forms.name, "required|alpha_space")}
                        </div>
                      </div>
                    </div>
                    <div className="col col-lg-6 col-12">
                      <div className="form-field">
                        <input
                          value={forms.email}
                          type="email"
                          name="email"
                          onBlur={(e) => changeHandler(e)}
                          onChange={(e) => changeHandler(e)}
                          placeholder="Email ID"
                        />
                        <div className="red-texttt mt-1" style={{ color: 'red' }}>
                          {validator.message("email", forms.email, "required|email")}
                        </div>
                      </div>
                    </div>

                    <div className="col col-lg-6 col-12">
                      <div className="form-field">
                        <input
                          value={forms.phone}
                          type="phone"
                          name="phone"
                          onBlur={(e) => changeHandler(e)}
                          onChange={(e) => changeHandler(e)}
                          placeholder="Contact Number"
                        />
                        <div className="red-texttt mt-1" style={{ color: 'red' }}>
                          {validator.message("phone", forms.phone, "required|phone")}
                        </div>
                      </div>
                    </div>
                    <div className="col col-lg-6 col-12">
                      <div className="form-field">
                        <input
                          value={forms.subject}
                          type="text"
                          name="subject"
                          onBlur={(e) => changeHandler(e)}
                          onChange={(e) => changeHandler(e)}
                          placeholder="Subject" />
                        {validator.message('subject', forms.subject, 'required|alpha_space')}
                      </div>
                    </div>
                    <div className="col col-lg-12 col-12">
                      <textarea
                        onBlur={(e) => changeHandler(e)}
                        onChange={(e) => changeHandler(e)}
                        value={forms.message}
                        type="text"
                        name="message"
                        placeholder="Message"
                      ></textarea>
                      <div className="red-texttt mt-1" style={{ color: 'red' }}>
                        {validator.message("message", forms.message, "required")}
                      </div>
                    </div>
                  </div>
                  <div className="submit-area">
                    <button type="submit" className="theme-btn">
                      Submit Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <section className="wpo-contact-map-section">
          <div className="wpo-contact-map">
            <iframe
              title="comtact-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15124.300180275144!2d73.76044731268452!3d18.61569405507691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b909d331ee29%3A0x14a8ae0caf64c564!2sThergaon%2C%20Pimpri-Chinchwad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1727685250723!5m2!1sen!2sin"
            ></iframe>
          </div>
        </section>
      </section>
      <Scrollbar />
      <Footer />
    </>
  );
};

export default InfluencerContact;
