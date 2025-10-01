import React, { useState } from "react";
import SimpleReactValidator from "simple-react-validator";
import SectionTitle from "../SectionTitle/SectionTitle";
import Icon from '../../../public/assets/images/cta/top-icon.png'
import { Link } from "react-router-dom";
import Image from "next/image";

const ContactSection = (props) => {
  const [forms, setForms] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  const [now, setnow] = useState(Date.now());

  const [validator] = useState(
    new SimpleReactValidator({
      className: "errorMessage",
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
      setnow(Date.now());
      validator.showMessages();
    }
  };
  return (
    <section className="wpo-contact-pg-section section-padding">
      <div className="container">
        <div className="w-100 d-flex justify-content-center">
          <div className="col-lg-8 col-md-10 col-12">
            <SectionTitle subtitle="" title="We're Here to Assist You!" paragarap="We value your questions, feedback and support requests at Sevak Army. Whether you're a volunteer, NGO,  school/college organisation or influencer we’re just a message away. Feel free to contact us and we’ll reply promptly." />
          </div>
        </div>
        <div className="row pt-3">
          <div className="col-12 col-lg-10 offset-lg-1">
            <div className="office-info">
              <h3 className="w-100 text-center pb-2">How to Reach Us</h3>
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
                        <h2 className="mb-2 text-center">Address</h2>
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
                        <h2 className="mb-2">Email Us</h2>
                        <p className="text-center">info@SevakArmy.com</p>
                        <p className="pt-2 text-center">For general inquiries or assistance, send us an email and we'll respond within 24 hours.</p>

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
                        <h2 className="mb-2">Call Now</h2>
                        <p className="text-center">+91 95 5284 5284</p>
                        <p className="pt-2 text-center">Need immediate help? Call us during business hours for direct support.</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <section className="wpo-cta-section-s3 section-padding pt-0">
              <div className="container">
                <div className="bg-color" style={{ background: "#007560" }}>
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      <div className="cta-wrap">
                        {/* <div className="icon mx-2">
                          <Image src={icon} width={40} height={40} alt="Icon" />
                        </div> */}
                        <span style={{ fontSize: '32px' }}>Support</span>
                        <p className="pt-3 px-2 text-center" style={{ color: 'whitesmoke' }}>
                          If you need help with your volunteer profile, tasks or any platform issues, you can also submit a support ticket through our online help section.
                        </p>
                        <Link to="https://app.sevakarmy.com/" target="_blank" className="theme-btn mt-3">
                          Submit a Support Request
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>


            <div className="wpo-section-title" style={{ maxWidth: '860px' }}>
              <h2 className="text-capitalize">Do you have a question or need more information about SevakArmy?</h2>
              <p className="text-center">Use our general inquiry form to get in touch and our team will get back to you as soon as possible.</p>
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
                        placeholder="Your Name"
                      />
                      <div className="errorMessage mt-1" style={{ color: 'red' }}>
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
                        placeholder="Your Email"
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
                        placeholder="Your Phone"
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
          ></iframe>{" "}
        </div>
      </section>
    </section>
  );
};

export default ContactSection;
