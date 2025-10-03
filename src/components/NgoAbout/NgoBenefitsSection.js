import React, { Fragment } from "react";
import Image from "next/image";
import { Link } from "react-router-dom";

import SocialImpact from "../../../public/assets/images1/ngo/home/social-impact.webp";
import Free from "../../../public/assets/images1/ngo/home/free.webp";
import User from "../../../public/assets/images1/ngo/home/user.webp";
import Expansion from "../../../public/assets/images1/ngo/home/expansion.webp";
import Communication from "../../../public/assets/images1/ngo/home/communication.webp";
import Clipboards from "../../../public/assets/images1/ngo/home/clipboard.webp";
import Flexibility from "../../../public/assets/images1/ngo/home/flexibility.webp";
import Matching from "../../../public/assets/images1/ngo/home/link.webp";
import Visibility from "../../../public/assets/images1/ngo/home/high-visibility.webp";
import Requirements from "../../../public/assets/images1/ngo/home/personal-assistant.webp";
import SimplifiedCommunication from "../../../public/assets/images1/ngo/home/simplified-communication.webp";
import Growth from "../../../public/assets/images1/ngo/home/growth.webp";
import Reliability from "../../../public/assets/images1/ngo/home/reliability.webp";
import Ranking from "../../../public/assets/images1/ngo/home/ranking.webp";
import Events from "../../../public/assets/images1/ngo/home/event.webp";
import Feedback from "../../../public/assets/images1/ngo/home/customer-feedback.webp";
import Project from "../../../public/assets/images1/ngo/home/project-management.webp";
import Support from "../../../public/assets/images1/ngo/home/customer.webp";
import Improvement from "../../../public/assets/images1/ngo/home/continuous-improvement.webp";
// import icon from "../../../public/assets/images/cta/top-icon.webp";


function NgoBenefitsSection(props) {
    return (
        <Fragment>
            <>


                <section className="wpo-about-section section-padding pb-0">
                    <div className="container">
                        <div className="wpo-about-wrap">
                            <div className="row">
                                <div className="col-lg-6 col-md-12 col-12">
                                    <div className="wpo-about-img">
                                        <div className="wpo-about-right pt-0">
                                            <Image src={SocialImpact} priority={true} width={539} height={470} alt="Why Should NGOs Register on SevakArmy?" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-12">
                                    <div className="wpo-about-text mt-1">
                                        <div className="wpo-section-title mb-3">
                                            <span>Amplify Your Reach with SevakArmy</span>
                                            <h2 className="about-heading-second text-titleeee mt-0">
                                                Why Should NGOs Register on SevakArmy?
                                            </h2>
                                        </div>
                                        <p style={{ textAlign: "justify" }}>
                                            SevakArmy is more than just a platform; it's a powerful tool designed to connect NGOs with dedicated volunteers across India. By joining SevakArmy, your organisation gains access to passionate individuals, streamlined task management and increased visibility - all to help you make a bigger, more lasting impact.
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="wpo-causes-section-s2 pb-5 pt-5">
                    <div className="causes-wrap">
                        <div className="container">
                            <h3 className="text-center">Here's why you should register your NGO with SevakArmy:  </h3>

                            <section className="container mt-3">
                                <div className="">
                                    <section className={" wpo-fun-fact-section-s3 pb-0"}>
                                        <div className="container mt-3">
                                            <div className="w-100 service-wrap">
                                                <div className="w-100 col-12 row justify-content-center gap-3 align-items-stretch gy-4">
                                                    <div className="service-item px-4 py-4 col-xl-3 col-lg-4 col-md-8 col-sm-10 col-11 sevak-custom-carddd mb-0" style={{ minHeight: '100%' }}>
                                                        <div className="info d-flex flex-column justify-content-center flex-no-wrap">
                                                            <div className="w-100 d-flex py-4 justify-content-center">
                                                                <div className="icon">
                                                                    <Image src={Free} width={60} alt="img" />
                                                                </div>
                                                            </div>
                                                            <h2 className="text-center">No Cost for Registration</h2>
                                                            <p className="w-100 text-center ms-0" style={{ maxWidth: '100%' }}>Registering your NGO on SevakArmy is free, allowing you to connect with volunteers without any financial burden.</p>
                                                        </div>
                                                    </div>
                                                    <div className="service-item px-4 py-4 col-xl-3 col-lg-4 col-md-8 col-sm-10 col-11 sevak-custom-carddd mb-0" style={{ minHeight: '100%' }}>
                                                        <div className="info d-flex flex-column justify-content-center flex-no-wrap">
                                                            <div className="w-100 d-flex py-4 justify-content-center">
                                                                <div className="icon" style={{ backgroundColor: '#FFFCF4', border: '1px solid #EBB011' }}>
                                                                    <Image src={User} width={60} alt="img" />
                                                                </div>
                                                            </div>
                                                            <h2 className="text-center">Access to Committed Volunteers</h2>
                                                            <p className="w-100 text-center ms-0" style={{ maxWidth: '100%' }}>Connect with a dedicated pool of volunteers who are eager to support your cause. Save time by finding passionate individuals ready to make a real difference.</p>
                                                        </div>
                                                    </div>
                                                    <div className="service-item px-4 py-4 col-xl-3 col-lg-4 col-md-8 col-sm-10 col-11 sevak-custom-carddd mb-0" style={{ minHeight: '100%' }}>
                                                        <div className="info d-flex flex-column justify-content-center flex-no-wrap">
                                                            <div className="w-100 d-flex py-4 justify-content-center">
                                                                <div className="icon" style={{ backgroundColor: '#F3FFFC', border: '1px solid #00AF90' }}>
                                                                    <Image src={Expansion} width={60} alt="img" />
                                                                </div>
                                                            </div>
                                                            <h2 className="text-center">Expand Your Reach Across India </h2>
                                                            <p className="w-100 text-center ms-0" style={{ maxWidth: '100%' }}>SevakArmy brings visibility to NGOs nationwide, helping you reach volunteers from cities, towns and rural areas who might otherwise not have known about your organisation.</p>
                                                        </div>
                                                    </div>
                                                    <div className="service-item px-4 py-4 col-xl-3 col-lg-4 col-md-8 col-sm-10 col-11 sevak-custom-carddd mb-0" style={{ minHeight: '100%' }}>
                                                        <div className="info d-flex flex-column justify-content-center flex-no-wrap">
                                                            <div className="w-100 d-flex py-4 justify-content-center">
                                                                <div className="icon" style={{ backgroundColor: '#F5FFF8', border: '1px solid #66BB6A' }}>
                                                                    <Image src={Communication} width={60} alt="img" />
                                                                </div>
                                                            </div>
                                                            <h2 className="text-center">Direct Communication with Volunteers</h2>
                                                            <p className="w-100 text-center ms-0" style={{ maxWidth: '100%' }}>Once you select a volunteer for your task after reviewing their application, you can directly chat with them through the platform. This makes coordination easy and ensures smooth task management.</p>
                                                        </div>
                                                    </div>
                                                    <div className="service-item px-4 py-4 col-xl-3 col-lg-4 col-md-8 col-sm-10 col-11 sevak-custom-carddd mb-0" style={{ minHeight: '100%' }}>
                                                        <div className="info d-flex flex-column justify-content-center flex-no-wrap">
                                                            <div className="w-100 d-flex py-4 justify-content-center">
                                                                <div className="icon" style={{ backgroundColor: '#F5FDFF', border: '1px solid #1ECFFE' }}>
                                                                    <Image src={Clipboards} width={60} alt="img" />
                                                                </div>
                                                            </div>
                                                            <h2 className="text-center">Easy Task Posting & Management</h2>
                                                            <p className="w-100 text-center ms-0" style={{ maxWidth: '100%' }}>Simplify your operations by posting tasks directly on the platform. Easily assign, track and manage volunteer tasks with a user-friendly interface.</p>
                                                        </div>
                                                    </div>
                                                    <div className="service-item px-4 py-4 col-xl-3 col-lg-4 col-md-8 col-sm-10 col-11 sevak-custom-carddd mb-0" style={{ minHeight: '100%' }}>
                                                        <div className="info d-flex flex-column justify-content-center flex-no-wrap">
                                                            <div className="w-100 d-flex py-4 justify-content-center">
                                                                <div className="icon" style={{ backgroundColor: '#FFFCF4', border: '1px solid #EBB011' }}>
                                                                    <Image src={Flexibility} width={60} alt="img" />
                                                                </div>
                                                            </div>
                                                            <h2 className="text-center">Flexible Volunteer Options</h2>
                                                            <p className="w-100 text-center ms-0" style={{ maxWidth: '100%' }}>Find volunteers for both short-term and long-term projects, giving your NGO the flexibility to manage different kinds of tasks as needed.</p>
                                                        </div>
                                                    </div>
                                                    <div className="service-item px-4 py-4 col-xl-3 col-lg-4 col-md-8 col-sm-10 col-11 sevak-custom-carddd mb-0" style={{ minHeight: '100%' }}>
                                                        <div className="info d-flex flex-column justify-content-center flex-no-wrap">
                                                            <div className="w-100 d-flex py-4 justify-content-center">
                                                                <div className="icon" style={{ backgroundColor: '#F3FFFC', border: '1px solid #00AF90' }}>
                                                                    <Image src={Matching} width={60} alt="img" />
                                                                </div>
                                                            </div>
                                                            <h2 className="text-center">Efficient Volunteer Matching</h2>
                                                            <p className="w-100 text-center ms-0" style={{ maxWidth: '100%' }}>Save time on recruitment. SevakArmy helps match your tasks with volunteers who have the skills and passion to meet your needs.</p>
                                                        </div>
                                                    </div>
                                                    <div className="service-item px-4 py-4 col-xl-3 col-lg-4 col-md-8 col-sm-10 col-11 sevak-custom-carddd mb-0" style={{ minHeight: '100%' }}>
                                                        <div className="info d-flex flex-column justify-content-center flex-no-wrap">
                                                            <div className="w-100 d-flex py-4 justify-content-center">
                                                                <div className="icon" style={{ backgroundColor: '#F5FFF8', border: '1px solid #66BB6A' }}>
                                                                    <Image src={Visibility} width={60} alt="img" />
                                                                </div>
                                                            </div>
                                                            <h2 className="text-center">Enhanced Visibility for Your Cause</h2>
                                                            <p className="w-100 text-center ms-0" style={{ maxWidth: '100%' }}>Gain exposure to a larger audience and attract more support for your initiatives. Let more people learn about the great work you and your NGO are doing.</p>
                                                        </div>
                                                    </div>
                                                    <div className="service-item px-4 py-4 col-xl-3 col-lg-4 col-md-8 col-sm-10 col-11 sevak-custom-carddd mb-0" style={{ minHeight: '100%' }}>
                                                        <div className="info d-flex flex-column justify-content-center flex-no-wrap">
                                                            <div className="w-100 d-flex py-4 justify-content-center">
                                                                <div className="icon" style={{ backgroundColor: '#F5FDFF', border: '1px solid #1ECFFE' }}>
                                                                    <Image src={Requirements} width={60} alt="img" />
                                                                </div>
                                                            </div>
                                                            <h2 className="text-center">Customisable Volunteer Requirements</h2>
                                                            <p className="w-100 text-center ms-0" style={{ maxWidth: '100%' }}>Specify the skills, time commitment and other requirements you need and get volunteers who fit those needs perfectly.</p>
                                                        </div>
                                                    </div>
                                                    <div className="service-item px-4 py-4 col-xl-3 col-lg-4 col-md-8 col-sm-10 col-11 sevak-custom-carddd mb-0" style={{ minHeight: '100%' }}>
                                                        <div className="info d-flex flex-column justify-content-center flex-no-wrap">
                                                            <div className="w-100 d-flex py-4 justify-content-center">
                                                                <div className="icon" style={{ backgroundColor: '#FFFCF4', border: '1px solid #EBB011' }}>
                                                                    <Image src={SimplifiedCommunication} width={60} alt="img" />
                                                                </div>
                                                            </div>
                                                            <h2 className="text-center">Simplified Communication</h2>
                                                            <p className="w-100 text-center ms-0" style={{ maxWidth: '100%' }}>Easily communicate with volunteers through the platform’s chat feature. Coordinate tasks, share updates and keep everyone informed without hassle.</p>
                                                        </div>
                                                    </div>
                                                    <div className="service-item px-4 py-4 col-xl-3 col-lg-4 col-md-8 col-sm-10 col-11 sevak-custom-carddd mb-0" style={{ minHeight: '100%' }}>
                                                        <div className="info d-flex flex-column justify-content-center flex-no-wrap">
                                                            <div className="w-100 d-flex py-4 justify-content-center">
                                                                <div className="icon" style={{ backgroundColor: '#F3FFFC', border: '1px solid #00AF90' }}>
                                                                    <Image src={Growth} width={60} alt="img" />
                                                                </div>
                                                            </div>
                                                            <h2 className="text-center">Track Progress Effortlessly</h2>
                                                            <p className="w-100 text-center ms-0" style={{ maxWidth: '100%' }}>Monitor the progress of tasks in real-time. Stay updated on volunteer activities, ensuring everything runs smoothly and efficiently.</p>
                                                        </div>
                                                    </div>
                                                    <div className="service-item px-4 py-4 col-xl-3 col-lg-4 col-md-8 col-sm-10 col-11 sevak-custom-carddd mb-0" style={{ minHeight: '100%' }}>
                                                        <div className="info d-flex flex-column justify-content-center flex-no-wrap">
                                                            <div className="w-100 d-flex py-4 justify-content-center">
                                                                <div className="icon" style={{ backgroundColor: '#F5FFF8', border: '1px solid #66BB6A' }}>
                                                                    <Image src={Reliability} width={60} alt="img" />
                                                                </div>
                                                            </div>
                                                            <h2 className="text-center">Reliable and Verified Volunteers</h2>
                                                            <p className="w-100 text-center ms-0" style={{ maxWidth: '100%' }}>All volunteers on SevakArmy are verified, so you can trust that you’re connecting with genuine, motivated individuals who are committed to helping.</p>
                                                        </div>
                                                    </div>
                                                    <div className="service-item px-4 py-4 col-xl-3 col-lg-4 col-md-8 col-sm-10 col-11 sevak-custom-carddd mb-0" style={{ minHeight: '100%' }}>
                                                        <div className="info d-flex flex-column justify-content-center flex-no-wrap">
                                                            <div className="w-100 d-flex py-4 justify-content-center">
                                                                <div className="icon" style={{ backgroundColor: '#F5FDFF', border: '1px solid #1ECFFE' }}>
                                                                    <Image src={Ranking} width={60} alt="img" />
                                                                </div>
                                                            </div>
                                                            <h2 className="text-center">Gamified Leaderboards for Engagement</h2>
                                                            <p className="w-100 text-center ms-0" style={{ maxWidth: '100%' }}>SevakArmy’s leaderboard feature encourages volunteers to stay active and engaged. NGOs can also see which tasks are most popular and learn from top performers.</p>
                                                        </div>
                                                    </div>
                                                    <div className="service-item px-4 py-4 col-xl-3 col-lg-4 col-md-8 col-sm-10 col-11 sevak-custom-carddd mb-0" style={{ minHeight: '100%' }}>
                                                        <div className="info d-flex flex-column justify-content-center flex-no-wrap">
                                                            <div className="w-100 d-flex py-4 justify-content-center">
                                                                <div className="icon" style={{ backgroundColor: '#FFFCF4', border: '1px solid #EBB011' }}>
                                                                    <Image src={Events} width={60} alt="img" />
                                                                </div>
                                                            </div>
                                                            <h2 className="text-center">Promote Your Events & Initiatives</h2>
                                                            <p className="w-100 text-center ms-0" style={{ maxWidth: '100%' }}>Easily share information about your NGO’s events, drives or campaigns on SevakArmy, attracting more volunteers and gaining wider support.</p>
                                                        </div>
                                                    </div>
                                                    <div className="service-item px-4 py-4 col-xl-3 col-lg-4 col-md-8 col-sm-10 col-11 sevak-custom-carddd mb-0" style={{ minHeight: '100%' }}>
                                                        <div className="info d-flex flex-column justify-content-center flex-no-wrap">
                                                            <div className="w-100 d-flex py-4 justify-content-center">
                                                                <div className="icon" style={{ backgroundColor: '#F3FFFC', border: '1px solid #00AF90' }}>
                                                                    <Image src={Feedback} width={60} alt="img" />
                                                                </div>
                                                            </div>
                                                            <h2 className="text-center">Feedback Mechanism for Improvement</h2>
                                                            <p className="w-100 text-center ms-0" style={{ maxWidth: '100%' }}>Provide feedback on volunteer performance to help them grow and receive feedback to improve your own volunteer programmes. </p>
                                                        </div>
                                                    </div>
                                                    <div className="service-item px-4 py-4 col-xl-3 col-lg-4 col-md-8 col-sm-10 col-11 sevak-custom-carddd mb-0" style={{ minHeight: '100%' }}>
                                                        <div className="info d-flex flex-column justify-content-center flex-no-wrap">
                                                            <div className="w-100 d-flex py-4 justify-content-center">
                                                                <div className="icon" style={{ backgroundColor: '#F5FFF8', border: '1px solid #66BB6A' }}>
                                                                    <Image src={Project} width={60} alt="img" />
                                                                </div>
                                                            </div>
                                                            <h2 className="text-center">Effortless Project Coordination</h2>
                                                            <p className="w-100 text-center ms-0" style={{ maxWidth: '100%' }}>Manage various projects simultaneously with user-friendly tools. Focus on your core mission while SevakArmy simplifies volunteer coordination and task tracking.</p>
                                                        </div>
                                                    </div>
                                                    <div className="service-item px-4 py-4 col-xl-3 col-lg-4 col-md-8 col-sm-10 col-11 sevak-custom-carddd mb-0" style={{ minHeight: '100%' }}>
                                                        <div className="info d-flex flex-column justify-content-center flex-no-wrap">
                                                            <div className="w-100 d-flex py-4 justify-content-center">
                                                                <div className="icon" style={{ backgroundColor: '#F5FDFF', border: '1px solid #1ECFFE' }}>
                                                                    <Image src={Support} width={60} alt="img" />
                                                                </div>
                                                            </div>
                                                            <h2 className="text-center">Support for Urban & Rural Initiatives</h2>
                                                            <p className="w-100 text-center ms-0" style={{ maxWidth: '100%' }}>Whether you operate in a city or a village, SevakArmy helps you reach volunteers who are ready to support your local projects.</p>
                                                        </div>
                                                    </div>
                                                    <div className="service-item px-4 py-4 col-xl-3 col-lg-4 col-md-8 col-sm-10 col-11 sevak-custom-carddd mb-0" style={{ minHeight: '100%' }}>
                                                        <div className="info d-flex flex-column justify-content-center flex-no-wrap">
                                                            <div className="w-100 d-flex py-4 justify-content-center">
                                                                <div className="icon" style={{ backgroundColor: '#FFFCF4', border: '1px solid #EBB011' }}>
                                                                    <Image src={Improvement} width={60} alt="img" />
                                                                </div>
                                                            </div>
                                                            <h2 className="text-center">Continuous Improvement Through Insights</h2>
                                                            <p className="w-100 text-center ms-0" style={{ maxWidth: '100%' }}>Access insights from volunteer feedback and platform data, helping you improve your programmes and strategies over time.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </section>

                        </div>
                    </div>
                </section>

                <section className="wpo-cta-section section-padding">
                    <div className="bg-overlay">
                        <div className="container">
                            <div className="bg-color">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <div className="cta-wrap">
                                            <h2 className="mb-2">Join Hands, Amplify Impact</h2>
                                            <p
                                                className="text-center pt-2 px-2"
                                                style={{ textAlign: "justify", color: "white" }}
                                            >
                                                Join SevakArmy today and start connecting with volunteers who share your passion for making a difference. Together, we can drive real, positive change.
                                            </p>
                                            <div className="d-flex flex-column gap-3 justify-content-center align-items-center w-100">
                                                <span>Ready to Empower Your Mission?</span>
                                                <Link
                                                    to="https://app.sevakarmy.com/" target="_blank"
                                                    className="theme-btn"
                                                    style={{ width: "fit-content" }}
                                                >
                                                    Register Now
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        </Fragment>
    );
}

export default NgoBenefitsSection;
