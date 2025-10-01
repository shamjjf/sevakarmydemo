import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import Logo from "../../public/assets/images/logo.svg";
import Img1 from "../../public/assets/images1/volunteer/home/sevak-army-volunteer-home-3.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Image from "next/image";

const AuthModal = ({ show, setShow, defaultSign = "register" }) => {
  const formDataDefault = {
    fullName: "",
    email: "",
    mobile: "",
    password: "",
  };

  const formErrorsDefault = {
    fullName: "",
    email: "",
    mobile: "",
    password: "",
  };
  const [phoneError, setPhoneError] = useState(false);

  const [formData, setFormData] = useState(formDataDefault);
  const [formErrors, setFormErrors] = useState(formErrorsDefault);
  const [value, setValue] = useState("");
  const [sign, setSign] = useState(defaultSign);
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setFormErrors({ ...formErrors, [name]: "" });
  };

  // Validate form inputs for registration
  const validateRegistration = () => {
    console.log("validate register");
    let isValid = true;
    const errors = {};

    if (!formData.fullName || formData.fullName.trim() === "") {
      isValid = false;
      errors.fullName = "Full Name is required.";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.fullName)) {
      isValid = false;
      errors.fullName = "Full Name can only contain letters and spaces.";
    } else if (
      !/^\s*([A-Za-z]{2,}(\s[A-Za-z]{2,})*)\s*$/.test(formData.fullName)
    ) {
      isValid = false;
      errors.fullName = "Please enter a valid name.";
    }

    if (!formData.password) {
      isValid = false;
      errors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      isValid = false;
      errors.password = "Password must be at least 6 characters.";
    } else if (!/[a-z]/.test(formData.password)) {
      isValid = false;
      errors.password = "Password must contain at least one lowercase letter.";
    } else if (!/[A-Z]/.test(formData.password)) {
      isValid = false;
      errors.password = "Password must contain at least one uppercase letter.";
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(formData.password)) {
      isValid = false;
      errors.password = "Password must contain at least one special symbol.";
    }

    // Mobile validation: checks if input is a valid 10-digit number
    if (!formData.phone) {
      errors.phone = "Contact Number is required";
    } else if (!/^\d+$/.test(formData.phone)) {
      errors.phone = "Contact Number should only contain numbers";
    } else if (phoneError) {
      errors.phone = "Contact Number must be valid";
    }

    if (!formData.email) {
      errors.email = "Email ID is Required.";
      isValid = false;
    } else if (
      !/^[A-Za-z0-9]+([._%+-]?[A-Za-z0-9]+)*@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(
        formData.email
      )
    ) {
      errors.email = "Email ID Is Invalid.";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  // Validate form inputs for login
  const validateLogin = () => {
    let isValid = true;
    const errors = {};

    if (!formData.email) {
      errors.email = "Email ID is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email ID is invalid.";
      isValid = false;
    }
    if (!formData.password) {
      isValid = false;
      errors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      isValid = false;
      errors.password = "Password must be at least 6 characters.";
    } else if (!/[a-z]/.test(formData.password)) {
      isValid = false;
      errors.password = "Password must contain at least one lowercase letter.";
    } else if (!/[A-Z]/.test(formData.password)) {
      isValid = false;
      errors.password = "Password must contain at least one uppercase letter.";
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(formData.password)) {
      isValid = false;
      errors.password = "Password must contain at least one special symbol.";
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const isValid =
      sign !== "register" ? validateLogin() : validateRegistration();
    if (isValid) {
      const message =
        sign === "register"
          ? "You have Registered Successfully!"
          : "Login Successful";
      if (sign === "register") {
        // await fetch(`${process.env.NEXT_PUBLIC_API_URL}/enquiry`, {
        await fetch(`https://marscms-api.mini91.com/api/enquiry`, {
          method: "POST",
          body: JSON.stringify({
            ...formData,
            name: formData.fullName,
            mobile: formData.phone,
            ccode: formData.phoneCode,
            site: "6798f689e5b0d99195ac3eb8",
          }),
          headers: { "Content-Type": "application/json" },
        })
          .then(async (response) => {
            console.log(response.status);
            if (response?.ok) {
              setFormData({
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
                phoneCode: "91",
              });
              setErrors({});
              toast.success(message);
              setFormData(formDataDefault);
              setValue("");
            } else {
              let error = await response.json();
              toast.error(error.error);
            }
          })
          .catch((error) => {
            // Handle error
            console.error(error);
          });
      } else {
        toast.success(message);
        setFormData(formDataDefault);
        setValue("");
      }
    }
  };

  const handleClose = () => {
    setShow(false);
    setFormData(formDataDefault);
    setFormErrors(formErrorsDefault);
    setValue("");
  };

  const buttons = [
    { label: "Volunteer" },
    { label: "NGO" },
    { label: "Organisation" },
    { label: "School/College" },
    { label: "Influencer" },
  ];

  return (
    <>
      <Toaster containerStyle={{ zIndex: "9999999" }} position="top-right" />
      <div
        className={`modal fade bd-example-modal-lg ${
          show ? "show d-block" : "d-none"
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
          <div className="modal-content d-flex p-3">
            {/* First Column */}
            {/* <div
            style={{
              width: 1200,
            }}
            className=" p-3"
          >
            <div className="modal-body">
              <img
                src="http://localhost:3036/static/media/sevak-army-home-1.95a4785f0b49d3c72119.jpg"
                alt="logo"
                style={{ width: "100%" }}
              />
            </div>
          </div> */}
            {/* Second Column */}
            <div
              // style={{
              //   width: 1200,
              // }}
              className=""
            >
              <div className="modal-header w-100 d-flex justify-content-end">
                {/* <h3 className=" slide-title-sub fs-2" style={{ fontWeight: "700" }}>
              <Image src={Logo} width={60} alt="Header"/>  Sevak Army
              </h3> */}
                <div>
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
              </div>
              {value ? (
                <div className="w-100 d-flex justify-content-between gap-5 flex-lg-row flex-column">
                  <div className="">
                    <Image
                      src={Img1}
                      className="h-100"
                      width={600}
                      alt="Sevak Army"
                    />
                  </div>
                  <div style={{ width: "100%" }}>
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "end",
                        flexDirection: "column",
                        alignItems: "end",
                        marginTop: "15px",
                        marginBottom: "15px",
                      }}
                    >
                      <button
                        className="btn theme-btn theme-btn22 px-4"
                        style={{ width: "fit-content" }}
                        onClick={() => {
                          setValue("");
                          setFormData(formDataDefault);
                          setFormErrors(formErrorsDefault);
                        }}
                      >
                        Back
                      </button>
                    </div>
                    <h3
                      className="my-3 w-100 text-center"
                      style={{ fontSize: "32px", fontWeight: "700" }}
                    >
                      {sign === "register" ? `${value ? value :''} Registration` : `${value ? value :''} Login`}
                    </h3>
                    <form noValidate onSubmit={handleFormSubmit}>
                      {sign === "register" && (
                        <>
                          <div className="form-group py-2">
                            <label
                              className="mb-1"
                              style={{ fontWeight: "bold", color: "black" }}
                              htmlFor="fullName"
                            >
                              Full Name
                            </label>
                            <input
                              style={{ borderRadius: 10 }}
                              type="text"
                              className="form-control py-2"
                              id="fullName"
                              name="fullName"
                              value={formData.fullName}
                              onChange={handleInputChange}
                              placeholder="Full Name"
                            />
                            {formErrors.fullName && (
                              <p className="text-danger mb-0">
                                {formErrors.fullName}
                              </p>
                            )}
                          </div>
                          <div className="w-full py-2">
                            <label
                              htmlFor="phone"
                              style={{ fontWeight: "bold", color: "black" }}
                            >
                              Contact Number
                            </label>
                            <div className={`relative mt-1 rounded-xl `}>
                              <PhoneInput
                                className="react-phoneee"
                                preferredCountries={["in"]}
                                placeholder="+91 12345-67890"
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                buttonStyle={{
                                  border: "1px solid #D1D5DB",
                                  borderTopRightRadius: "0px",
                                  borderBottomRightRadius: "0px",
                                  borderTopLeftRadius: "12px",
                                  borderBottomLeftRadius: "12px",
                                  width: "52px",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  backgroundColor: "white",
                                }}
                                dropdownStyle={{
                                  top: "50px",
                                  left: "0px",
                                }}
                                country={"in"}
                                inputStyle={{
                                  borderRadius: "12px",
                                  fontSize: "16px",
                                  border: "1px solid #D1D5DB",
                                  marginLeft: "15px",
                                  color: "#374151",
                                  width: "97.6%",
                                  height: "46px",
                                  outline: "none",
                                  boxShadow: "none",
                                }}
                                enableLongNumbers={true}
                                onChange={(
                                  value,
                                  country,
                                  e,
                                  formattedValue
                                ) => {
                                  const phone = formattedValue.split(" ");

                                  if (
                                    /^[1-5]/.test(
                                      formattedValue.replace(/\s+/g, "")
                                    )
                                  ) {
                                    setPhoneError(true);
                                    return;
                                  } else {
                                    setPhoneError(false);
                                  }
                                  console.log(
                                    country.format.length,
                                    formattedValue.length
                                  );
                                  if (
                                    country.format.length ===
                                      formattedValue.length ||
                                    (country.dialCode === "971" &&
                                      (formattedValue.length === 16 ||
                                        formattedValue.length === 18))
                                  ) {
                                    setPhoneError(false);
                                  } else {
                                    setPhoneError(true);
                                  }

                                  const newPhone = phone
                                    .filter((ph, i) => i !== 0)
                                    .join("")
                                    .replace("-", "");

                                  setFormData({
                                    ...formData,
                                    phone: newPhone,
                                    phoneCode: country.dialCode,
                                  });
                                }}
                              />
                            </div>
                            {formErrors.phone && (
                              <p className="text-red-500 text-sm">
                                {formErrors.phone}
                              </p>
                            )}
                          </div>
                        </>
                      )}
                      <div className="form-group py-2">
                        <label
                          className="mb-1"
                          style={{ fontWeight: "bold", color: "black" }}
                          htmlFor="email"
                        >
                          Email ID
                        </label>
                        <input
                          style={{ borderRadius: 10 }}
                          type="email"
                          className="form-control py-2"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Email ID"
                        />
                        {formErrors.email && (
                          <p className="text-danger mb-0">{formErrors.email}</p>
                        )}
                      </div>
                      <div className="form-group py-2">
                        <label
                          className="mb-1"
                          style={{ fontWeight: "bold", color: "black" }}
                          htmlFor="password"
                        >
                          Password
                        </label>
                        <div className="input-group relative">
                          <input
                            style={{ borderRadius: 10 }}
                            type={showPassword ? "text" : "password"}
                            className="form-control py-2"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            placeholder="Password"
                          />
                          <span
                            onClick={() => setShowPassword(!showPassword)}
                            className=""
                            style={{
                              position: "absolute",
                              right: "10px",
                              top: "7px",
                              zIndex: "999999",
                            }}
                          >
                            {!showPassword ? (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="24px"
                                viewBox="0 -960 960 960"
                                width="24px"
                                fill="#5f6368"
                              >
                                <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" />
                              </svg>
                            ) : (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="24px"
                                viewBox="0 -960 960 960"
                                width="24px"
                                fill="#5f6368"
                              >
                                <path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z" />
                              </svg>
                            )}
                          </span>
                        </div>
                        {formErrors.password && (
                          <p className="text-danger mb-0">
                            {formErrors.password}
                          </p>
                        )}
                      </div>
                      {sign !== "register" && (
                        <div className="w-100 flex justify-content-end mt-2">
                          <Link
                            to="/forgot-password"
                            onClick={() => setShow(false)}
                          >
                            Forgot Password?
                          </Link>
                        </div>
                      )}
                      <div className="my-4 w-100 d-flex justify-content-center">
                        <button
                          type="submit"
                          className="btn theme-btn theme-btn22 my-3 mb-0 px-4 py-2 fs-4"
                        >
                          {sign === "register" ? "Register" : "Login"}
                        </button>
                      </div>
                      {sign !== "register" ? (
                        <div
                          className="w-100 d-flex justify-content-center align-items-center"
                          style={{ color: "#525252", fontSize: "18px" }}
                        >
                          Don’t have an account?
                          <Link
                            to="#"
                            className="p-0 m-0"
                            onClick={() => {
                              setSign("register");
                              setFormData(formDataDefault);
                              setFormErrors(formErrorsDefault);
                            }}
                          >
                            &nbsp; Register
                          </Link>
                        </div>
                      ) : (
                        <p className="w-100 d-flex justify-content-center">
                          Already a Member?
                          <Link
                            className="ps-2"
                            to="#"
                            onClick={() => {
                              setSign("login");
                              setFormData(formDataDefault);
                              setFormErrors(formErrorsDefault);
                            }}
                          >
                            Log In
                          </Link>
                        </p>
                      )}
                    </form>
                  </div>
                </div>
              ) : (
                <div className="modal-body">
                  <div className="w-100 d-flex justify-content-between gap-5 flex-lg-row flex-column">
                    <div className="">
                      <Image
                        src={Img1}
                        className="h-100"
                        width={600}
                        alt="Sevak Army"
                      />
                    </div>

                    <div className="w-100">
                      <div className="w-100 d-flex justify-content-center align-items-center ">
                        <Image src={Logo} width={80} alt="Logo" />
                      </div>
                      <h2
                        className="mt-4 text-center w-100"
                        style={{ fontSize: "40px", fontWeight: "700" }}
                      >
                        Join
                        <span className="secondary-headerrrr"> Sevak Army</span>
                        : Empower Communities, Make a Difference!
                      </h2>
                      <div className="mt-4">
                        <h4 className="ms-md-4">Select an account type: </h4>
                        <div className="container d-flex justify-content-center">
                          <div className="row justify-content-center w-100">
                            {buttons.map((button) => (
                              <div
                                key={button.label}
                                className="col-md-6 col-12 d-flex  my-2"
                              >
                                <button
                                  onClick={() => setValue(button.label)}
                                  className="theme-btn theme-btn22 btn w-100"
                                >
                                  {button.label}
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthModal;