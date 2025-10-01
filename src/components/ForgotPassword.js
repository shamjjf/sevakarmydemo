
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import Logo from "../../public/assets/images/logo.svg";
import Img1 from "../../public/assets/images1/volunteer/home/sevak-army-volunteer-home-3.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Image from "next/image";

const ForgotPassword = ({ defaultSign = "register", show, setShow }) => {
    const formDataDefault = {
        email: "",
    };

    const formErrorsDefault = {
        email: "",
    };

    const [formData, setFormData] = useState(formDataDefault);
    const [formErrors, setFormErrors] = useState(formErrorsDefault);
    const [sign, setSign] = useState(defaultSign);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setFormErrors({ ...formErrors, [name]: "" });
    };

    // Validate form inputs for registration
    const validateForgotPassword = () => {
        console.log("validate register");
        let isValid = true;
        const errors = {};

        if (!formData.email) {
            errors.email = "Email ID is Required.";
            isValid = false;
        } else if (!/^[A-Za-z0-9]+([._%+-]?[A-Za-z0-9]+)*@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(formData.email)) {
            errors.email = "Email Is Invalid.";
            isValid = false;
        }

        setFormErrors(errors);
        return isValid;
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const isValid = validateForgotPassword();
        if (isValid) {
            const message = "Please check your email for password reset instructions. ";
            toast.success(message);
            setFormData(formDataDefault);
            setValue("");
        }
    };

    const handleClose = () => {
        setShow(false);
        setFormData(formDataDefault);
        setFormErrors(formErrorsDefault);
        setValue("");
    };

    return (
        <>
            <Toaster containerStyle={{ zIndex: "9999999" }} position="top-right" />
            <div className="w-full d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <div className="d-flex justify-content-between gap-5 flex-lg-row flex-column p-4 div-shadoww" style={{ width: 'fit-content', height: 'fit-content' }}>
                    <div className="">
                        <Image src={Img1} className="h-100" width={600} alt="Sevak Army" />
                    </div>
                    <div style={{ width: "100%" }} className="d-flex flex-column w-100 justify-content-center align-items-center">
                        <h3 className="my-3 w-100 text-center" style={{ fontSize: "32px", fontWeight: "700" }}>
                            Forgot Password
                        </h3>
                        <form noValidate onSubmit={handleFormSubmit} className="w-100">
                            <div className="form-group py-2">
                                <label className="mb-1" style={{ fontWeight: "bold", color: "black" }} htmlFor="email">
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
                                {formErrors.email && <p className="text-danger mb-0">{formErrors.email}</p>}
                            </div>

                            <div className="my-4 w-100 d-flex justify-content-center">
                                <button type="submit" className="btn theme-btn theme-btn22 my-3 mb-0 px-4 py-2 fs-4 text-white">
                                    Continue
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ForgotPassword