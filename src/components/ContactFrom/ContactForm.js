import React, { useState } from 'react'
import SimpleReactValidator from 'simple-react-validator';


const ContactForm = () => {

    const [forms, setForms] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
    });
    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));
    const changeHandler = e => {
        setForms({ ...forms, [e.target.name]: e.target.value })
        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    const submitHandler = async e => {
        e.preventDefault();
        if (validator.allValid()) {
            await fetch(
                "https://marscms-api.mini91.com/api/enquiry",
                {
                    method: "POST",
                    body: JSON.stringify({
                        ...formData,
                        site: "6799c755eff04168d66d32a1",
                    }),
                    headers: { "Content-Type": "application/json" },
                }
            )
                .then((response) => {
                    console.log(response.status);

                    validator.hideMessages();
                    setForms({
                        name: '',
                        email: '',
                        subject: '',
                        phone: '',
                        message: ''
                    })
                }).catch((error) => {
                    // Handle error
                    console.error(error);

                });

        } else {
            validator.showMessages();
        }
    };

    return (
        <form onSubmit={(e) => submitHandler(e)} className="contact-validation-active" >
            <div className="row">
                <div className="col col-lg-6 col-12">
                    <div className="form-field">
                        <input
                            value={forms.name}
                            type="text"
                            name="name"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Your Name" />
                        {validator.message('name', forms.name, 'required|alpha_space')}
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
                            placeholder="Your Email" />
                        {validator.message('email', forms.email, 'required|email')}
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
                            placeholder="Your phone" />
                        {validator.message('phone', forms.phone, 'required|phone')}
                    </div>
                </div>
                <div className="col col-lg-6 col-12">
                    {/* <div className="form-field">
                        <select
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            value={forms.subject}
                            type="text"
                            name="subject">
                            <option>Subject 1</option>
                            <option>Subject 2</option>
                            <option>Subject 3</option>
                        </select>
                        {validator.message('subject', forms.subject, 'required')}
                    </div> */}
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
                        placeholder="Message">
                    </textarea>
                    {validator.message('message', forms.message, 'required')}
                </div>
            </div>
            <div className="submit-area">
                <button type="submit" className="theme-btn">Submit Now</button>
            </div>
        </form >
    )
}

export default ContactForm;