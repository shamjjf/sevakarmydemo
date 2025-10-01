import React, { useState } from "react";

import Visa1 from "../../../public/assets/images/checkout/img-1.png";
import Visa2 from "../../../public/assets/images/checkout/img-2.png";
import Visa3 from "../../../public/assets/images/checkout/img-3.png";
import Visa4 from "../../../public/assets/images/checkout/img-4.png";

import Image from "next/image";

const DonateSection = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    note: "",
    cardHolderName: "",
    cardNumber: "",
    cvv: "",
    expiryDate: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="Donations section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-12">
            <div className='wpo-section-title'><h2 className="text-center pb-4">Make a Donation</h2></div>
            <form onSubmit={handleSubmit}>
              <div className="wpo-donations-amount">
                <h2>Your Donation</h2>
                <input
                  className="form-control"
                  type="number"
                  name="text"
                  id="text"
                  placeholder="Enter Donation Amount"
                  required
                />
              </div>
              <div className="wpo-donations-details">
                <h2>Details</h2>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                    <input
                      className="form-control"
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                    <input
                      className="form-control"
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group clearfix">
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                    <input
                      className="form-control"
                      type="text"
                      name="address"
                      placeholder="Address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-lg-12 col-12 form-group">
                    <textarea
                      className="form-control"
                      name="note"
                      id="note"
                      value={formData.note}
                      onChange={handleInputChange}
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="wpo-doanation-payment">
                <h2>Choose Your Payment Method</h2>
                <div className="wpo-payment-area">
                  <div className="row">
                    <div className="col-12">
                      <div className="wpo-payment-option" id="open4">
                        <div className="wpo-payment-select">
                          <div onChange={handlePaymentMethodChange}>
                            <ul>
                              <li className="addToggle">
                                <input
                                  type="radio"
                                  id="paymentCard"
                                  name="paymentMethod"
                                  value="card"
                                  checked={paymentMethod === "card"}
                                  onChange={handlePaymentMethodChange}
                                />
                                <label htmlFor="paymentCard">Payment By Card</label>
                              </li>
                              <li className="removeToggle">
                                <input
                                  type="radio"
                                  id="paymentOffline"
                                  name="paymentMethod"
                                  value="offline"
                                  checked={paymentMethod === "offline"}
                                  onChange={handlePaymentMethodChange}
                                />
                                <label htmlFor="paymentOffline">Offline Donation</label>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div id="open5" className="payment-name">
                          <ul>
                            <li className="visa">
                              <input id="1" type="radio" name="size" value="30" />
                              <label htmlFor="1">
                                <Image src={Visa1} alt="Visa1" />
                              </label>
                            </li>
                            <li className="mas">
                              <input id="2" type="radio" name="size" value="30" />
                              <label htmlFor="2">
                                <Image src={Visa2} alt="Visa1" />
                              </label>
                            </li>
                            <li className="ski">
                              <input id="3" type="radio" name="size" value="30" />
                              <label htmlFor="3">
                                <Image src={Visa3} alt="Visa1" />
                              </label>
                            </li>
                            <li className="pay">
                              <input id="4" type="radio" name="size" value="30" />
                              <label htmlFor="4">
                                <Image src={Visa4} alt="Visa1" />
                              </label>
                            </li>
                          </ul>
                          <div className="contact-form form-style">
                            {paymentMethod === "card" && (
                              <div className="row">
                                <div className="col-lg-6 col-md-12 col-12">
                                  <label>Card holder Name</label>
                                  <input
                                    type="text"
                                    name="cardHolderName"
                                    placeholder="Card holder Name"
                                    value={formData.cardHolderName}
                                    onChange={handleInputChange}
                                    required
                                  />
                                </div>
                                <div className="col-lg-6 col-md-12 col-12">
                                  <label>Card Number</label>
                                  <input
                                    type="text"
                                    name="cardNumber"
                                    placeholder="Card Number"
                                    value={formData.cardNumber}
                                    onChange={handleInputChange}
                                    required
                                  />
                                </div>
                                <div className="col-lg-6 col-md-12 col-12">
                                  <label>CVV</label>
                                  <input
                                    type="text"
                                    name="cvv"
                                    placeholder="CVV"
                                    value={formData.cvv}
                                    onChange={handleInputChange}
                                    required
                                  />
                                </div>
                                <div className="col-lg-6 col-md-12 col-12">
                                  <label>Expire Date</label>
                                  <input
                                    type="text"
                                    name="expiryDate"
                                    placeholder="Expire Date"
                                    value={formData.expiryDate}
                                    onChange={handleInputChange}
                                    required
                                  />
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="submit-area">
                <button type="submit" className="theme-btn submit-btn">
                  Donate Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateSection;
