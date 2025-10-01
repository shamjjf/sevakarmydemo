import React, { useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ContactSectionMain = (props) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        subject: "",
        message: "",
        phone: "",
    });
    const [phoneError, setPhoneError] = useState(false);

    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);

    const validateForm = () => {
        const errors = {};
        const nameRegex = /^[a-zA-Z\s]{2,50}$/;
        const emailRegex =
            /^(?!\.)([a-zA-Z0-9]+[._%+-]?)*[a-zA-Z0-9]@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?<!\.)$/;
        const phoneRegex = /^[6-9]\d{9}$/;
        const messageRegex = /^[A-Za-z0-9.,!?'"()\s-]{10,500}$/;

        // Normalize input values
        const normalizeInput = (value) => value.replace(/\s+/g, " ").trim();

        const normalizedName = normalizeInput(formData.name);
        const normalizedEmail = normalizeInput(formData.email);
        const normalizedSubject = normalizeInput(formData.subject);
        const normalizedMessage = normalizeInput(formData.message);

        // Validate Name
        if (!normalizedName || !nameRegex.test(normalizedName)) {
            errors.name =
                "Full Name must be 2-50 characters, no numbers or special symbols and cannot be empty.";
        }

        // Validate Email
        if (!normalizedEmail || !emailRegex.test(normalizedEmail)) {
            errors.email = "Please enter a valid Email ID.";
        }

        // Validate Phone
        if (!formData.phone) {
            errors.phone = "Contact Number is required.";
        } else if (!/^\d+$/.test(formData.phone)) {
            errors.phone = "Contact Number should only contain numbers.";
        } else if (phoneError) {
            errors.phone = "Contact Number must be valid";
        }

        // Validate Subject
        if (!normalizedSubject || normalizedSubject.length < 2) {
            errors.subject =
                "Subject must be at least 2 characters and cannot be empty.";
        }

        // Validate Message
        if (!normalizedMessage || !messageRegex.test(normalizedMessage)) {
            errors.message =
                "Message must be a valid sentence (10-500 characters) and cannot be empty.";
        }

        return errors;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        // Replace multiple spaces with a single space
        const cleanedValue = value.replace(/  +/g, " ");

        // Update form data and reset errors
        setFormData({ ...formData, [name]: cleanedValue });
        setErrors({ ...errors, [name]: "" });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validateForm();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }


        try {
            const response = await fetch(`https://marscms-api.mini91.com/api/enquiry`, {
                method: "POST",
                body: JSON.stringify({
                    ...formData,
                    site: "6799c755eff04168d66d32a1",
                    mobile: formData.phone,
                    ccode: formData.phoneCode,
                }),
                headers: { "Content-Type": "application/json" },
            });


            if (response.ok) {
                setErrors({});
                setSuccess(true);

                setFormData({
                    name: "",
                    email: "",
                    mobile: "",
                    subject: "",
                    message: "",
                    phone: "",
                    phoneCode: "91",
                });

                setTimeout(() => setSuccess(false), 3000);
            } else {
                const errorData = await response.json();
                console.log("API Error Response:", errorData);
                setErrors({ submit: errorData.error });
                setSuccess(false);
            }
        } catch (error) {
            console.error("Form submission error:", error);
        }
    };

    return (
        <section className="wpo-contact-pg-section section-padding">
            <div className=" justify-content-center container">
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
                            <form onSubmit={handleSubmit} className="contact-validation-active">
                                <div className="row">
                                    <div className="col col-lg-6 col-12">
                                        <div className="form-field">
                                            <input
                                                value={formData.name}
                                                type="text"
                                                name="name"
                                                onChange={handleInputChange}
                                                placeholder="Full Name"
                                            />
                                            {errors.name && <div style={{ color: "red" }}>{errors.name}</div>}
                                        </div>
                                    </div>

                                    <div className="col col-lg-6 col-12">
                                        <div className="form-field">
                                            <input
                                                value={formData.email}
                                                type="email"
                                                name="email"
                                                onChange={handleInputChange}
                                                placeholder="Email ID"
                                            />
                                            {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
                                        </div>
                                    </div>

                                    <div className="col col-lg-6 col-12">
                                        <div className={`relative mt-1 rounded-xl form-field mb-0`}>
                                            <PhoneInput
                                                className="focus:outline-none rounded-md"
                                                preferredCountries={["in"]}
                                                placeholder="+91 95 2523 2523"
                                                enableLongNumbers={true}
                                                value={formData.phoneCode + formData.phone}
                                                buttonStyle={{
                                                    width: "52px",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    backgroundColor: "white",
                                                    borderLeft: "none",
                                                    borderTop: "none",
                                                    borderBottom: "none",
                                                    borderTopLeftRadius: "0px",
                                                    borderBottomLeftRadius: "0px",
                                                    border: "1px solid #ebebeb",
                                                }}
                                                dropdownStyle={{
                                                    top: "50px",
                                                    left: "0px",
                                                }}
                                                country={"in"}
                                                inputStyle={{
                                                    fontSize: "16px",
                                                    border: "none",
                                                    marginLeft: "15px",
                                                    color: "#344054",
                                                    width: "98%",
                                                    height: "50px",
                                                    outline: "none",
                                                    boxShadow: "none",
                                                    backgroundColor: "white",
                                                    border: "1px solid #ebebeb",
                                                    borderRadius: "0px",
                                                }}
                                                onChange={(value, country, e, formattedValue) => {
                                                    const phone = formattedValue.split(" ");

                                                    const conditionLength =
                                                        country.format.length === formattedValue.length ||
                                                        (country.dialCode === "971" &&
                                                            (formattedValue.length == 16 ||
                                                                formattedValue.length == 18));
                                                    if (conditionLength) {
                                                        setPhoneError(false);
                                                    } else {
                                                        setPhoneError(true);
                                                    }
                                                    const newphone = phone
                                                        .filter((ph, i) => i !== 0)
                                                        .join("")
                                                        .replace("-", "");
                                                    setFormData({
                                                        ...formData,
                                                        phone: newphone,
                                                        phoneCode: country.dialCode,
                                                    });
                                                }}
                                            />
                                        </div>
                                        {errors.phone && (
                                            <div className="text-red-500 text-sm">
                                                {errors.phone}
                                            </div>
                                        )}
                                    </div>

                                    <div className="col col-lg-6 col-12">
                                        <div className="form-field">
                                            <input
                                                value={formData.subject}
                                                type="text"
                                                name="subject"
                                                onChange={handleInputChange}
                                                placeholder="Subject"
                                            />
                                            {errors.subject && <div style={{ color: "red" }}>{errors.subject}</div>}
                                        </div>
                                    </div>

                                    <div className="col col-lg-12 col-12">
                                        <textarea
                                            value={formData.message}
                                            name="message"
                                            onChange={handleInputChange}
                                            placeholder="Message"
                                        ></textarea>
                                        {errors.message && (
                                            <div style={{ color: "red" }}>{errors.message}</div>
                                        )}
                                    </div>
                                </div>

                                <div className="submit-area">
                                    <button type="submit" className="theme-btn">
                                        Submit Now
                                    </button>
                                </div>

                                {success && (
                                    <div className="success-message mt-2 text-center" style={{ color: "green", marginTop: "10px", fontSize: '24px', textAlign:'center', width:'100%' }}>
                                        Form submitted successfully!
                                    </div>
                                )}
                                {errors?.submit && (
                                    <div className="error-message mt-1">{errors?.submit}</div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>


            {/* <section className="wpo-contact-map-section">
                <div className="wpo-contact-map">
                    <iframe
                        title="comtact-map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15124.300180275144!2d73.76044731268452!3d18.61569405507691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b909d331ee29%3A0x14a8ae0caf64c564!2sThergaon%2C%20Pimpri-Chinchwad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1727685250723!5m2!1sen!2sin"
                    ></iframe>{" "}
                </div>
            </section> */}
        </section>
    );
};

export default ContactSectionMain;
