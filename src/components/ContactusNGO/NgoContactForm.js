import React, { useState } from "react";
import SimpleReactValidator from "simple-react-validator";

const NgoContactForm = () => {
  const [forms, setForms] = useState({
    name: "",
    email: "",
    phone: "",
    organisation: "",
    subject: "",
    message: "",
    preferredContactMethod: "",
    urgency: "",
    attachment: null,
  });
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

  const fileChangeHandler = (e) => {
    setForms({ ...forms, attachment: e.target.files[0] });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (validator.allValid()) {
      validator.hideMessages();
      setForms({
        name: "",
        email: "",
        phone: "",
        organisation: "",
        subject: "",
        message: "",
        preferredContactMethod: "",
        urgency: "",
        attachment: null,
      });
    } else {
      validator.showMessages();
    }
  };

  return (
    <form
      onSubmit={(e) => submitHandler(e)}
      className="contact-validation-active"
    >
      <div className="row">
        <div className="col col-lg-6 col-12">
          <div className="form-field">
            <label htmlFor="name">Full Name:</label>
            <input
              id="name"
              value={forms.name}
              type="text"
              name="name"
              onBlur={(e) => changeHandler(e)}
              onChange={(e) => changeHandler(e)}
              placeholder="Full Name"
            />
            {validator.message("name", forms.name, "required|alpha_space")}
          </div>
        </div>
        <div className="col col-lg-6 col-12">
          <div className="form-field">
            <label htmlFor="email">Email ID:</label>
            <input
              id="email"
              value={forms.email}
              type="email"
              name="email"
              onBlur={(e) => changeHandler(e)}
              onChange={(e) => changeHandler(e)}
              placeholder="Email ID"
            />
            {validator.message("email", forms.email, "required|email")}
          </div>
        </div>
        <div className="col col-lg-6 col-12">
          <div className="form-field">
            <label htmlFor="phone">Contact Number:</label>
            <input
              id="phone"
              value={forms.phone}
              type="text"
              name="phone"
              onBlur={(e) => changeHandler(e)}
              onChange={(e) => changeHandler(e)}
              placeholder="Contact Number"
            />
            {validator.message("phone", forms.phone, "required|phone")}
          </div>
        </div>
        <div className="col col-lg-6 col-12">
          <div className="form-field">
            <label htmlFor="organisation">Organisation (if applicable):</label>
            <input
              id="organisation"
              value={forms.organisation}
              type="text"
              name="organisation"
              onBlur={(e) => changeHandler(e)}
              onChange={(e) => changeHandler(e)}
              placeholder="Organisation Name (if applicable)"
            />
            {validator.message(
              "organisation",
              forms.organisation,
              "alpha_space"
            )}
          </div>
        </div>
        <div className="col col-lg-6 col-12">
          <div className="form-field">
            <label htmlFor="subject">Subject:</label>
            <input
              id="subject"
              value={forms.subject}
              type="text"
              name="subject"
              onBlur={(e) => changeHandler(e)}
              onChange={(e) => changeHandler(e)}
              placeholder="Subject"
            />
            {validator.message("subject", forms.subject, "required")}
          </div>
        </div>
        <div className="col col-lg-12 col-12">
          <div className="form-field">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              onBlur={(e) => changeHandler(e)}
              onChange={(e) => changeHandler(e)}
              value={forms.message}
              type="text"
              name="message"
              placeholder="Message"
            ></textarea>
            {validator.message("message", forms.message, "required")}
          </div>
        </div>
        <div className="col col-lg-6 col-12">
          <div className="form-field">
            <label htmlFor="preferredContactMethod">
              Preferred Contact Method:
            </label>
            <select
              id="preferredContactMethod"
              onBlur={(e) => changeHandler(e)}
              onChange={(e) => changeHandler(e)}
              value={forms.preferredContactMethod}
              name="preferredContactMethod"
            >
              <option value="">Select Preferred Contact Method</option>
              <option value="email">Email</option>
              <option value="phone">Phone</option>
            </select>
            {validator.message(
              "preferredContactMethod",
              forms.preferredContactMethod,
              "required"
            )}
          </div>
        </div>
        <div className="col col-lg-6 col-12">
          <div className="form-field">
            <label htmlFor="urgency">Urgency of Your Enquiry:</label>
            <select
              id="urgency"
              onBlur={(e) => changeHandler(e)}
              onChange={(e) => changeHandler(e)}
              value={forms.urgency}
              name="urgency"
            >
              <option value="">Select Urgency</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
            {validator.message("urgency", forms.urgency, "required")}
          </div>
        </div>

        <div className="col col-lg-12 col-12">
          <div className="form-field">
            <label htmlFor="attachment">Attachment (if any):</label>
            <input
              id="attachment"
              type="file"
              name="attachment"
              onChange={(e) => fileChangeHandler(e)}
            />
          </div>
        </div>
        <div className="col col-lg-6 col-12">
          <div className="form-field">
            <label htmlFor="urgency">How Did You Hear About Us? :</label>
            <select
              id="urgency"
              onBlur={(e) => changeHandler(e)}
              onChange={(e) => changeHandler(e)}
              value={forms.urgency}
              name="urgency"
            >
              <option value="">Select Category</option>
              <option value="high">Social Media</option>
              <option value="medium">Referral</option>
              <option value="low">Website</option>
              <option value="low">Event</option>
            </select>
            {validator.message("urgency", forms.urgency, "required")}
          </div>
        </div>
      </div>
      <div className="submit-area">
        <button type="submit" className="theme-btn">
          Submit Now
        </button>
      </div>
    </form>
  );
};

export default NgoContactForm;
