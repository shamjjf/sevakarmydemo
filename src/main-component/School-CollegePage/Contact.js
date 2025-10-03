import { useState } from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Logo from "../../../public/assets/images/logo.svg";
import About1 from "../../../public/assets/images1/school-college/contact-us/sevak-army-school-college-contact-us-6.jpg";
import SimpleReactValidator from "simple-react-validator";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Image from "next/image";

const SchoolContact = () => {
  const [now, setNow] = useState(Date.now());
  // const ClickHandler = () => {
  //   window.scrollTo(10, 0);
  // };
  // const settings = {
  //   dots: false,
  //   arrows: false,
  //   infinite: true,
  //   speed: 500,
  //   autoplay: true,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  // };

  const [forms, setForms] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });
  const [validator] = useState(
    new SimpleReactValidator({
      className: "errorMessage red-texttt",
    })
  );
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
      // console.log("first", errorMessage);
      validator.showMessages();
    }
    setNow(Date.now());
  };

  return (
    <>
      <Navbar hclass={"wpo-site-header "} Logo={Logo} />
      <PageTitle pageTitle={"Contact Us"} pagesub={"Contact Us"} />

      <section className="wpo-about-section section-padding">
        <div className="container">
          <div className="wpo-about-wrap">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-img">
                  <div className="">
                    <Image src={About1} width={650} alt="Contact Us" />
                  </div>
                  {/* <div className="img-1">
                    <Image width={140} className="img-fluid" src={About2} alt="img-1" />
                  </div>
                  <div className="img-2">
                    <Image width={140} className="img-fluid" src={About3} alt="img-2" />
                  </div> */}
                  {/* <div className="img-3">
                    <Image width={140} className="img-fluid" src={About4} alt="Contact Us" />
                  </div> */}
                  {/* <div className="img-4">
                    <Image width={140} className="img-fluid" src={About5} alt="img-4" />
                  </div>
                  <div className="img-5">
                    <Image width={140} className="img-fluid" src={About6} alt="img-5" />
                  </div> */}
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-text">
                  <div className="wpo-section-title">
                    <span>Connect with us</span>
                    <h2 className="text-titleeee"> SevakArmy Schools/Colleges</h2>
                  </div>
                  <p className="volunteer-home-text">
                    At SevakArmy, we are always here to assist you. Whether you're interested in volunteering, need
                    help with school/college registration or looking to partner with us, we have multiple ways to
                    connect with you. Explore the sections below to find the right contact method for your needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="wpo-contact-pg-section">
        <SectionTitle title={"Connect With Us"} />
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 offset-lg-1">
              <div className="office-info">
                <div className="row">
                  <div className="col col-xl-4 col-lg-6 col-md-6 col-12 ">
                    <div className="office-info-item" style={{ height: "100%" }}>
                      <a href="https://maps.app.goo.gl/oVRTouCpHxFcknBd7" target="_blank" rel="noreferrer">
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
                          <p>
                            {" "}
                            Jainam Jivika Foundation <br />
                            Jainam Tower, Sai Park, Thergaon, <br />
                            Pune - 411033, Maharashtra, India <br />
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
                          <p>info@SevakArmy.com</p>

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
                        <div className="office-info-text text-center">
                          <h2>Call Now</h2>
                          <p className=""><a href="tel:+919552845284" className="linkkkkk">+91 95 5284 5284</a></p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wpo-section-title" style={{ maxWidth: "860px" }}>
                <h2 className="text-capitalize text-titleeee">
                  Do you have a question or need more information about SevakArmy?
                </h2>
                <p>
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
                        <div className="red-texttt mt-1" style={{ color: 'red' }}>{validator.message("name", forms.name, "required|alpha_space")} </div>
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
      <section>
        <div className="col-lg-12">
          <div className="header-menu">
            <ul className="smothscroll">
              <li>
                <AnchorLink href="#scrool">
                  <i className="ti-arrow-up"></i>
                </AnchorLink>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Scrollbar />
      <Footer />
    </>
  );
};

export default SchoolContact;
