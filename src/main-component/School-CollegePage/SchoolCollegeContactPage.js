import React, { useState } from "react";
import SimpleReactValidator from "simple-react-validator";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Image from "next/image";

const SchoolCollegeContactPage = (props) => {
  const [forms, setForms] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Name validation
    if (!forms.name.trim()) {
      newErrors.name = 'Name is required.';
    } else if (!/^[A-Za-z\s]+$/.test(forms.name)) {
      newErrors.name = 'Name can only contain letters.';
    } else if (forms.name.trim().length < 3 || forms.name.trim().length > 50) {
      newErrors.name = 'Name must be between 3 and 50 characters.';
    }

    // Email validation
    if (!forms.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (
      !/^[A-Za-z0-9]+([._%+-]?[A-Za-z0-9]+)*@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(forms.email)
    ) {
      newErrors.email = 'Email address is invalid.';
    }

    // Subject validation
    if (!forms.subject.trim()) {
      newErrors.subject = 'Subject is required.';
    } else if (!/^[A-Za-z]/.test(forms.subject)) {
      newErrors.subject = 'Subject must start with a letter.';
    } else if (!/^[A-Za-z\s]+$/.test(forms.subject)) {
      newErrors.subject = 'Subject can only contain letters and spaces.';
    } else if (forms.subject.trim().length < 3 || forms.subject.trim().length > 100) {
      newErrors.subject = 'Subject must be between 3 and 100 characters.';
    }

    // Message validation
    if (!forms.message.trim()) {
      newErrors.message = 'Message is required.';
    } else if (forms.message.trim().length <= 10) {
      newErrors.message = 'Message must be more than 10 characters.';
    } else if (/^[0-9]+$/.test(forms.message)) {
      newErrors.message = 'Message cannot contain only numbers.';
    } else if (/^[!@#$%^&*(),.?":{}|<>]+$/.test(forms.message)) {
      newErrors.message = 'Message cannot contain only special characters.';
    }

    // Validate Phone
    if (!forms.phone.trim()) {
      newErrors.phone = "Mobile number is required.";
      isValid = false;
    } else if (!/^[6-9]\d{9}$/.test(forms.phone)) {
      newErrors.phone = "Enter a valid indian mobile number.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const changeHandler = (e) => {
    const trimmedValue = e.target.value.replace(/\s+/g, ' ').trimStart();
    setForms({ ...forms, [e.target.name]: trimmedValue });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setForms({
        name: "",
        email: "",
        subject: "",
        phone: "",
        message: "",
      });
      setErrors({});
      setSuccessMessage("Form submitted successfully!");
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    } else {
      setSuccessMessage("");
    }
  };


  return (
    <section className="wpo-contact-pg-section section-padding">
      <div className="container">
        <div className=" col-12">
          <SectionTitle subtitle="" title="We're Here to Assist You!" />
          <p className="text-center">We value your questions, feedback and support requests at SevakArmy. Whether you're a volunteer, NGO,  school/college organisation or influencer we’re just a message away. Feel free to contact us and we’ll reply promptly.
          </p>
        </div>
        <div className="row pt-3">
          <div className="col-12 col-lg-10 offset-lg-1">
            <div className="office-info">
              <h3 className="w-100 text-center pb-4">How to Reach Us</h3>
              <div className="row">
                <div className="col col-xl-4 col-lg-6 col-md-6 col-12 ">
                  <div className="office-info-item" style={{ height: "100%" }}>
                    <div>
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
                          <a href="https://maps.app.goo.gl/oVRTouCpHxFcknBd7" target="_blank" className="linkkkkk"> Jainam Jivika Foundation <br />
                            3, Jainam Tower, 3, Sai Park, <br />
                            Belthika Nagar, Thergaon (Chinchwad), <br />
                            Pune - 411033, Maharashtra, India. </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col col-xl-4 col-lg-6 col-md-6 col-12 ">
                  <div className="office-info-item" style={{ height: "100%" }}>
                    <div>
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
                        <p className="text-center"><a href="mailto:info@SevakArmy.com" target="_blank" className="linkkkkk">info@SevakArmy.com</a></p>
                        <p className="pt-2 text-center">For general inquiries or assistance, send us an email and we'll respond within 24 hours.</p>

                        {/* <p>+91 9235 247 365</p> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col col-xl-4 col-lg-6 col-md-6 col-12 ">
                  <div className="office-info-item" style={{ height: "100%" }}>
                    <div>
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
                        <p className="text-center"><a href="tel:+919552845284" className="linkkkkk" target="_blank" rel="noreferrer">+91 95 5284 5284</a></p>
                        <p className="pt-2 text-center">Need immediate help? Call us during business hours for direct support.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="wpo-section-title" style={{ maxWidth: '860px' }}>
              <h2 className="text-capitalize">Do you have a question or need more information about SevakArmy?</h2>
              <p className="text-center">Use our general inquiry form to get in touch and our team will get back to you as soon as possible.</p>
            </div>
            <div className="wpo-contact-form-area">
              <form onSubmit={submitHandler} className="contact-validation-active">
                <div className="row">
                  {/* Name Field */}
                  <div className="col col-lg-6 col-12">
                    <div className="form-field">
                      <input
                        value={forms.name}
                        type="text"
                        name="name"
                        onChange={changeHandler}
                        placeholder="Full Name"
                      />
                      {errors.name && <div style={{ color: "red" }}>{errors.name}</div>}
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="col col-lg-6 col-12">
                    <div className="form-field">
                      <input
                        value={forms.email}
                        type="email"
                        name="email"
                        onChange={changeHandler}
                        placeholder="Email ID"
                      />
                      {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
                    </div>
                  </div>

                  {/* Phone Field */}
                  <div className="col col-lg-6 col-12">
                    <div className="form-field">
                      <input
                        value={forms.phone}
                        type="text"
                        name="phone"
                        onChange={changeHandler}
                        placeholder="Contact Number"
                      />
                      {errors.phone && <div style={{ color: "red" }}>{errors.phone}</div>}
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div className="col col-lg-6 col-12">
                    <div className="form-field">
                      <input
                        value={forms.subject}
                        type="text"
                        name="subject"
                        onChange={changeHandler}
                        placeholder="Subject"
                      />
                      {errors.subject && <div style={{ color: "red" }}>{errors.subject}</div>}
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="col col-lg-12 col-12">
                    <textarea
                      value={forms.message}
                      name="message"
                      onChange={changeHandler}
                      placeholder="Message"
                    ></textarea>
                    {errors.message && (
                      <div style={{ color: "red" }}>{errors.message}</div>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="submit-area">
                  <button type="submit" className="theme-btn">
                    Submit Now
                  </button>
                </div>

                {/* Success Message */}
                {successMessage && (
                  <div className="w-100 text-center" style={{ color: "green", marginTop: "10px", fontSize: '24px' }}>
                    {successMessage}
                  </div>
                )}
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

export default SchoolCollegeContactPage;
