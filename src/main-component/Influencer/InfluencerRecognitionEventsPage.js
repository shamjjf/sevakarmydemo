import React, { useEffect } from "react";
import Image from "next/image";
import { Link } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css";
import "swiper/css/navigation";

import Honour from "../../../public/assets/images1/volunteer/home/honour.webp";
import Certificates from "../../../public/assets/images1/volunteer/home/certificates.webp";
import Stories from "../../../public/assets/images1/volunteer/home/stories.webp";
import Networking from "../../../public/assets/new-images/common/networking.jpg";
import MeetNetwork from "../../../public/assets/new-images/common/celebration-img.jpg";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
// import icon from "../../../public/assets/images/cta/top-icon.png";

const featuresData = [
    {
        // iconClass: "flaticon-volunteer",
        svg: Honour,
        title: "Honour Top Influencers",
        description: "Acknowledge those significantly impacted by recruiting volunteers and promoting meaningful social causes.",
    },
    {
        // iconClass: "flaticon-charity",
        svg: Certificates,
        title: "Awards & Recognition",
        description: "Influencers will be honoured with awards and digital certificates for their outstanding efforts in driving volunteerism, marking key milestones in their journey as changemakers.",
    },
    {
        // iconClass: "flaticon-solidarity",
        svg: Stories,
        title: "Share Success Stories",
        description: "Influencers will have the chance to share their stories of how they inspired action, motivating others to step up and contribute to important causes.",
    },
];

const InfluencerRecognitionEventsPage = (props) => {

    // const ClickHandler = () => {
    //     window.scrollTo(10, 0);
    // };

    useEffect(() => {
        const rotate = () => {
            const lastChild = document.querySelector(".manroted div:last-child").cloneNode(true);
            document.querySelectorAll(".manroted div").forEach((div) => div.classList.remove("firstSlide"));
            document.querySelector(".manroted div:last-child").remove();
            document.querySelector(".manroted").prepend(lastChild);
        };

        const intervalId = setInterval(rotate, 4000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>

            <section className="container section-padding pt-5">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-12 col-12">
                        <SectionTitle subtitle="Recognising Impact, Celebrating Change" title="Awarding Exceptional Volunteers" paragarap="Influencers who rank highly on our Leaderboard or consistently inspire their followers to volunteer will be invited to our SevakArmy Influencer Recognition Events. At these events, we:" />
                    </div>
                </div>

                <div className="wpo-features-area pt-4 px-2">
                    <div className="features-wrap">
                        <div className="row justify-content-center gy-4 align-items-stretch">
                            {featuresData.map((feature, index) => (
                                <div className="col col-lg-4 col-md-6 col-12" key={index}>
                                    <div className="feature-item-wrap h-100" style={{ minHeight: '100%' }}>
                                        <div className="feature-item  align-items-center" style={{ alignItems: 'start', minHeight: '100%' }}>
                                            <div className="feature-icon">
                                                <div className="icon">
                                                    {feature.iconClass ? <i className={`fi ${feature.iconClass}`}></i> : <Image src={feature.svg} alt="Featured" />}
                                                </div>
                                            </div>
                                            <div className="feature-text">
                                                <h2 className="fs-5">{feature.title}</h2>
                                                <p className="fs-6" style={{ textAlign: 'justify' }}>{feature.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {/* new start */}

            <div className="container pt-3">
                <div className="wpo-about-wrap">
                    <div className="row">
                        <div className="col-lg-7 col-md-12 col-12">
                            <div className="wpo-about-text p-3 mt-0 pb-1 pb-lg-2 pt-1 pt-lg-2">
                                <div className="custom-panell">
                                    <h3>Networking and Community Building</h3>
                                </div>
                                <p className="mt-0 pt-0" style={{ textAlign: 'justify' }}>
                                    These events also allow influencers to meet and connect with like-minded individuals, NGOs and community leaders. It’s a fantastic way to build your network, collaborate on future projects and be part of a growing platform for social impact.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12 col-12">
                            <div className="wpo-about-img d-flex w-100">
                                <div className="wpo-about-right">
                                    {/* <Image src={abImg7} alt="img" /> */}
                                    <Image src={Networking} width={444} alt="Networking & Community Building SevakArmy" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container pt-5 section-padding">
                <div className="wpo-about-wrap">
                    <div className="row flex-wrap-reverse">
                        <div className="col-lg-5 col-md-12 col-12">
                            <div className="wpo-about-img d-flex w-100">
                                <div className="wpo-about-right pt-lg-3">
                                    <Image src={MeetNetwork} height={280} alt="Be a part of Celebration - SevakArmy" />
                                    {/* <Image src="https://placehold.co/324x304/png" alt="Register" /> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12 col-12">
                            <div className="wpo-about-text p-3 mt-0 pb-1 pb-lg-2 pt-1 pt-lg-2">
                                <div className="custom-panell">
                                    <h3>Be Part of the Celebration</h3>
                                </div>
                                <p className="mt-0 pt-0" style={{ textAlign: 'justify' }}>
                                    Whether you're just starting or have already made a big impact, these events are a chance to celebrate the collective power of SevakArmy influencers and recognise those who have led the charge for change.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="wpo-cta-section section-padding">
                <div className="bg-overlay">
                    <div className="container">
                        <div className="bg-color">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="cta-wrap">
                                        <h2 className="mb-2">Join SevakArmy and Start Inspiring Change!</h2>
                                        <p
                                            className="text-center pt-2 px-2"
                                            style={{ textAlign: "justify", color: "white" }}
                                        >
                                            Become a part of SevakArmy today and you could be among the influencers honoured for your contributions at our next recognition event. Your leadership and dedication deserve to be celebrated!
                                        </p>
                                        <div className="d-flex flex-column gap-3 justify-content-center align-items-center w-100">
                                            <Link
                                                to="https://app.sevakarmy.com/" target="_blank"
                                                className="theme-btn"
                                                style={{ width: "fit-content", textTransform: 'none' }}
                                            >
                                                Register Now to Inspire Change
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
    )
};

export default InfluencerRecognitionEventsPage;
