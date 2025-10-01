import React, { useState } from "react";

const CotactFormModal = ({ showContact, setShowContact }) => {
    const handleClose = () => {
        setShowContact(false);
    };

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const validate = () => {
        const newErrors = {};

        // Name validation
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required.';
        } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
            newErrors.name = 'Name can only contain letters.';
        } else if (formData.name.trim().length < 3 || formData.name.trim().length > 50) {
            newErrors.name = 'Name must be between 3 and 50 characters.';
        }

        // Email validation
        if (!formData.email.trim()) {
            newErrors.email = 'Email address is required.';
        } else if (
            !/^[A-Za-z0-9]+([._%+-]?[A-Za-z0-9]+)*@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(formData.email)
        ) {
            newErrors.email = 'Email address is invalid.';
        }

        // Subject validation
        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required.';
        } else if (!/^[A-Za-z]/.test(formData.subject)) {
            newErrors.subject = 'Subject must start with a letter.';
        } else if (!/^[A-Za-z\s]+$/.test(formData.subject)) {
            newErrors.subject = 'Subject can only contain letters and spaces.';
        } else if (formData.subject.trim().length < 3 || formData.subject.trim().length > 100) {
            newErrors.subject = 'Subject must be between 3 and 100 characters.';
        }

        // Message validation
        if (!formData.message.trim()) {
            newErrors.message = 'Your Message is required.';
        } else if (formData.message.trim().length <= 10) {
            newErrors.message = 'Your Message must be more than 10 characters.';
        } else if (/^[0-9]+$/.test(formData.message)) {
            newErrors.message = 'Your Message cannot contain only numbers.';
        } else if (/^[!@#$%^&*(),.?":{}|<>]+$/.test(formData.message)) {
            newErrors.message = 'Your Message cannot contain only special characters.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        // Prevent too much whitespace
        const trimmedValue = value.replace(/\s+/g, ' ').trimStart();

        setFormData({ ...formData, [name]: trimmedValue });
        setErrors({ ...errors, [name]: '' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log('Form submitted:', formData);
            setSuccessMessage('Your message has been successfully submitted!');
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
            });
            setErrors({});
            setTimeout(() => {
                setSuccessMessage('');
                setShowContact(false);
            }, 3000);
        }
    };

    return (
        <div
            className={`modal fade bd-example-modal-lg ${showContact ? "show d-block" : "d-none"
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
                    <div className="">
                        <div className="modal-header w-100 d-flex justify-content-end">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="24px"
                                viewBox="0 -960 960 960"
                                width="24px"
                                fill="#5f6368"
                                style={{ cursor: "pointer" }}
                                onClick={handleClose}
                            >
                                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                            </svg>
                        </div>
                        <h2 className="mt-4 text-center w-100" style={{ fontSize: "40px", fontWeight: "700" }}>
                            Reach Out to Us
                        </h2>
                        <form onSubmit={handleSubmit} className="my-5 w-100 d-flex justify-content-center">
                            <div className="col col-xl-8 col-lg-9 com-md-10 col-sm-11 col-12">

                                {/* Name Field */}
                                <div className="form-group py-2 pb-3">
                                    <label className="mb-1" style={{ fontWeight: 'bold', color: '#343434' }} htmlFor="name">
                                        Name
                                    </label>
                                    <input
                                        style={{ borderRadius: 10, outline: 'none' }}
                                        type="text"
                                        className="form-control py-3"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="Name"
                                    />
                                    {errors.name && <p className="text-red-500 mb-0">{errors.name}</p>}
                                </div>

                                {/* Email Field */}
                                <div className="form-group py-2 pb-3">
                                    <label className="mb-1" style={{ fontWeight: 'bold', color: '#343434' }} htmlFor="email">
                                        Email Address
                                    </label>
                                    <input
                                        style={{ borderRadius: 10, outline: 'none' }}
                                        type="email"
                                        className="form-control py-3"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Email Address"
                                    />
                                    {errors.email && <p className="text-red-500 mb-0">{errors.email}</p>}
                                </div>

                                {/* Subject Field */}
                                <div className="form-group py-2 pb-3">
                                    <label className="mb-1" style={{ fontWeight: 'bold', color: '#343434' }} htmlFor="subject">
                                        Subject
                                    </label>
                                    <input
                                        style={{ borderRadius: 10, outline: 'none' }}
                                        type="text"
                                        className="form-control py-3"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        placeholder="Subject"
                                    />
                                    {errors.subject && <p className="text-red-500 mb-0">{errors.subject}</p>}
                                </div>

                                {/* Message Field */}
                                <div className="form-group py-2">
                                    <label className="mb-1" style={{ fontWeight: 'bold', color: '#343434' }} htmlFor="message">
                                        Your Message
                                    </label>
                                    <textarea
                                        style={{ borderRadius: 10, outline: 'none' }}
                                        className="form-control py-3"
                                        name="message"
                                        id="message"
                                        rows="4"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        placeholder="Your Message"
                                    ></textarea>
                                    {errors.message && <p className="text-red-500 mb-0">{errors.message}</p>}
                                </div>

                                <div className="w-100 d-flex flex-column justify-content-center align-items-center mt-4 mb-2">
                                    <button type="submit" className="theme-btn w-100" style={{ fontWeight: 700 }}>
                                        Submit
                                    </button>

                                    {successMessage && <p className="text-green text-center" style={{ color: 'green' }}>{successMessage}</p>}

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CotactFormModal;
