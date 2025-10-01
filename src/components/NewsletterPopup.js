import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FormFeedback } from "reactstrap";
import Image from "next/image";

import Logo from "../../public/assets/images/logo.svg";
import Img1 from "../../public/assets/images1/sevak-army.webp";

const NewsletterPopup = ({ shownewsletter, setShowNewsletter }) => {
  const [email, setEmail] = useState("");
  const [formError, setFormError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleClose = () => {
    setShowNewsletter(false);
    setFormError("");
    setSuccessMessage("");
    setEmail("");
  };

  const handleInputChange = (e) => {
    setEmail(e.target.value);
    setFormError("");
  };

  const validateEmail = (email) => {
    const emailRegex =
      /^[A-Za-z0-9]+([._%+-]?[A-Za-z0-9]+)*@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const invalidPatterns = /@[-]|@.*-.*\./;
    return emailRegex.test(email) && !invalidPatterns.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setFormError("Please enter a valid email address.");
      return;
    }
    // await fetch(`${process.env.NEXT_PUBLIC_API_URL}/newsletter`, {
    await fetch(`https://marscms-api.mini91.com/api/newsletter`, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        site: "6799c755eff04168d66d32a1",
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then(async (response) => {
        console.log(response);
        // On successful validation
        if (response?.ok) {
          setSuccessMessage("Thank you for subscribing to our newsletter!");
          setEmail("");
          setTimeout(() => {
            handleClose();
          }, 3000); // Close the modal after 3 seconds
        } else {
          let error = await response.json();
          setFormError(error?.error);
        }
      })

      .catch((error) => {
        // Handle error
        console.log(error);
      });
  };

  return (
    <div
      className={`modal fade bd-example-modal-lg ${
        shownewsletter ? "show d-block" : "d-none"
      }`}
      tabIndex="-1"
      data-target=".bd-example-modal-lg"
      role="dialog"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div
        className="modal-dialog modal-xl d-flex justify-content-center"
        role="document"
      >
        <div className="modal-content d-flex p-3 pt-0">
          <div>
            <div className="modal-header w-100 d-flex justify-content-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#5f6368"
                style={{
                  cursor: "pointer",
                }}
                onClick={handleClose}
              >
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            </div>
            <div className="w-100 d-flex justify-content-between gap-5 flex-lg-row flex-column">
              <div className="py-4">
                <Image
                  src={Img1}
                  className="h-100"
                  width={600}
                  alt="Sevak Army"
                />
              </div>
              <div className="w-100 d-flex flex-column align-items-center justify-content-center">
                <div className="w-100 d-flex justify-content-center align-items-center">
                  <Image src={Logo} width={80} alt="Logo" />
                </div>
                <h2
                  className="mt-4 text-center w-100"
                  style={{ fontSize: "40px", fontWeight: "700" }}
                >
                  Stay Informed, Stay Inspired: <br />
                  <span className="secondary-headerrrr">
                    Join  Sevak Army Newsletter!
                  </span>
                </h2>
                <form className="mt-5 w-100 px-5" onSubmit={handleSubmit}>
                  <div className="form-group py-2">
                    <label
                      className="mb-1"
                      style={{
                        fontWeight: "bold",
                        color: "black",
                      }}
                      htmlFor="email"
                    >
                      Your Email ID
                    </label>
                    <input
                      style={{
                        borderRadius: 10,
                        outline: "none",
                      }}
                      type="text"
                      className={`form-control py-3 ${
                        formError ? "is-invalid" : ""
                      }`}
                      id="email"
                      name="email"
                      value={email}
                      onChange={handleInputChange}
                      placeholder="Your Email ID"
                    />
                    {formError && (
                      <div className="invalid-feedback mt-2">{formError}</div>
                    )}
                  </div>
                  <div className="w-100 d-flex justify-content-center align-items-center mt-4 mb-2">
                    <button
                      type="submit"
                      className="theme-btn w-100"
                      style={{ fontWeight: 700 }}
                      >
                      Subscribe to our Newsletter
                    </button>
                  </div>
                      {successMessage && (
                        <div className="alert alert-success mt-3">
                          {successMessage}
                        </div>
                      )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterPopup;
