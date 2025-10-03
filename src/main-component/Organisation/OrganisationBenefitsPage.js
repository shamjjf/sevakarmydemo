import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css";
import "swiper/css/navigation";

// import icon from "../../../public/assets/images/cta/top-icon.png";
import ServiceCard from "../../components/ServiceSection/ServiceCard";

import Path from "../../../public/assets/images1/volunteer/home/benefit.webp";
import cImg1 from "../../../public/assets/images1/school-college/benefits/encourage.webp";
import cImg2 from "../../../public/assets/images1/school-college/benefits/experience.webp";
import cImg3 from "../../../public/assets/images1/school-college/benefits/time.webp";
import cImg4 from "../../../public/assets/images1/school-college/benefits/recognition.webp";
import cImg5 from "../../../public/assets/images1/school-college/benefits/register.webp";
import cImg6 from "../../../public/assets/images1/school-college/benefits/volunteering.webp";
import cImg7 from "../../../public/assets/images1/school-college/benefits/diagram.webp";
import cImg8 from "../../../public/assets/images1/school-college/benefits/reward.webp";
import cImg9 from "../../../public/assets/images1/school-college/benefits/award-symbol.webp";
import cImg10 from "../../../public/assets/images1/school-college/benefits/build.webp";
import cImg11 from "../../../public/assets/images1/school-college/benefits/marketing.webp";
import cImg12 from "../../../public/assets/images1/school-college/benefits/tracking.webp";
import cImg13 from "../../../public/assets/images1/school-college/benefits/institution.webp";
import cImg14 from "../../../public/assets/images1/school-college/benefits/shuttle.webp";
import cImg15 from "../../../public/assets/images1/school-college/benefits/job.webp";
import cImg16 from "../../../public/assets/images1/school-college/benefits/expand.webp";
import cImg17 from "../../../public/assets/images1/school-college/benefits/ngo.webp";
import cImg18 from "../../../public/assets/images1/school-college/benefits/foster-family.webp";
import cImg19 from "../../../public/assets/images1/school-college/benefits/community-building.webp";
import cImg20 from "../../../public/assets/images1/school-college/benefits/encouragement.webp";


const Services = [
    {
        Id: "01",
        sImg: cImg1,

        title: "Better Employee Retention",
        slug: "1",
        description:
            "When employees engage in volunteer activities, they feel more connected to their organisation, promoting loyalty and long-term retention.",
    },
    {
        Id: "02",
        sImg: cImg2,

        title: "Enhanced Organisation Reputation",
        slug: "2",
        description:
            "Show your commitment to social responsibility, building a positive brand image that attracts customers, partners and top talent.",
    },
    {
        Id: "03",
        sImg: cImg3,

        title: "Increased Employee Engagement",
        slug: "3",
        description:
            "By encouraging volunteering, you foster a culture of community and engagement, helping employees feel valued and purpose-driven.",
    },
    {
        Id: "04",
        sImg: cImg4,

        title: "Strengthened Team Morale",
        slug: "4",
        description:
            "Volunteer projects encourage team-building, strengthening relationships and improving morale.",
    },
    {
        Id: "05",
        sImg: cImg5,

        title: "Easy CSR Tracking and Reporting",
        slug: "5",
        description:
            "Our platform provides easy tracking of volunteer hours and tasks, helping you meet and report CSR goals to stakeholders.",
    },
    {
        Id: "06",
        sImg: cImg6,

        title: "Attract and Retain Top Talent",
        slug: "6",
        description:
            "Organisations with active social initiatives appeal to job seekers, helping you attract potential candidates and retain motivated, values-driven employees.",
    },
    {
        Id: "07",
        sImg: cImg7,

        title: "Enhanced Community Relations",
        slug: "7",
        description:
            "Your organisation becomes a valued part of the community, contributing to projects that improve local well-being and welfare.",
    },
    {
        Id: "08",
        sImg: cImg8,

        title: "Skill Development for Employees",
        slug: "8",
        description:
            "Volunteering helps employees learn new skills, enhancing their professional and personal growth, which leads to greater job satisfaction.",
    },
    {
        Id: "09",
        sImg: cImg9,

        title: "Tailored Volunteer Opportunities",
        slug: "9",
        description:
            "Access a range of volunteer tasks across causes, allowing employees to choose roles that match their interests and values.",
    },
    {
        Id: "10",
        sImg: cImg10,

        title: "Recognition for Positive Impact",
        slug: "10",
        description:
            "Employees’ contributions are recognised with digital certificates and points, rewarding their dedication to social good.",
    },
    {
        Id: "11",
        sImg: cImg11,

        title: "Reduced Workplace Stress",
        slug: "11",
        description:
            "Volunteering encourages mindfulness and fulfilment, offering a break from daily routines and improving mental well-being.",
    },
    {
        Id: "12",
        sImg: cImg12,

        title: "Flexible Options for Participation",
        slug: "12",
        description:
            "Virtual and on-site tasks let employees volunteer at their convenience, ensuring balanced work-life integration.",
    },
    {
        Id: "13",
        sImg: cImg13,

        title: "Recognition Events and Awards",
        slug: "13",
        description:
            "Be celebrated for your organisation’s commitment to CSR with recognition events that highlight your impact.",
    },
    {
        Id: "14",
        sImg: cImg14,

        title: "Leaderboard Rankings",
        slug: "14",
        description:
            "Track your CSR contributions on SevakArmy’s leaderboard, motivating employees to climb ranks through service.",
    },
    {
        Id: "15",
        sImg: cImg15,

        title: "Meet CSR Requirements Easily",
        slug: "15",
        description:
            "Fulfil CSR objectives with structured volunteer programmes that align with your business’s social goals.",
    },
    {
        Id: "16",
        sImg: cImg16,

        title: "Positive Work Culture",
        slug: "16",
        description:
            "Encourage a collaborative and supportive work environment rooted in shared values of service and kindness.",
    },
    {
        Id: "17",
        sImg: cImg17,

        title: "Meet CSR Requirements Easily",
        slug: "17",
        description:
            "Fulfil CSR objectives with structured volunteer programmes that align with your business’s social goals.",
    },
    {
        Id: "18",
        sImg: cImg18,

        title: "Referral Programme Benefits",
        slug: "18",
        description:
            "Earn points and recognition by referring other organisations to join, amplifying your community impact.",
    },
    {
        Id: "19",
        sImg: cImg19,

        title: "Meaningful Employee Recognition",
        slug: "18",
        description:
            "Boost employee satisfaction by recognising individual contributions, showing that their efforts matter.",
    },
    {
        Id: "20",
        sImg: cImg20,

        title: "A Platform for Positive Impact",
        slug: "18",
        description:
            "Provide employees with a simple and structured way to make a difference, helping your organisation positively impact society.",
    },
];

const OrganisationBenefitsPage = (props) => {
    // const ClickHandler = () => {
    //     window.scrollTo(10, 0);
    // };

    useEffect(() => {
        const rotate = () => {
            const lastChild = document
                .querySelector(".manroted div:last-child")
                .cloneNode(true);
            document
                .querySelectorAll(".manroted div")
                .forEach((div) => div.classList.remove("firstSlide"));
            document.querySelector(".manroted div:last-child").remove();
            document.querySelector(".manroted").prepend(lastChild);
        };

        const intervalId = setInterval(rotate, 4000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <section className="wpo-about-section pt-0">
                <div className="container section-padding pt-4 pb-0 mt-3">
                    <div className="wpo-about-wrap">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-12">
                                <div className="wpo-about-img">
                                    {/* <div className="wpo-about-left">
                    <Image src={abImg5} alt="img" />
                  </div> */}
                                    <div className="wpo-about-right pt-3">
                                        <Image src={Path} alt="Benefits to Register Your Organisation - SevakArmy" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-12">
                                <div className="wpo-about-text p-3 mt-0 pb-1 pb-lg-2 pt-1 pt-lg-2 pb-0">
                                    <div className="wpo-section-title mt-0 mb-3">
                                        <span>Benefits</span>
                                        <h2 className="about-heading-second text-titleeee">
                                            Benefits of Joining SevakArmy
                                        </h2>
                                    </div>
                                    <p className="mt-0 pt-0 mb-0" style={{ textAlign: "justify" }}>
                                        Becoming part of SevakArmy is a powerful opportunity for organisations to make a positive social impact while boosting employee engagement and fulfilling CSR goals. Here’s how your organisation can benefit:
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container section-padding pt-3 pt-1">
                {/* <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-12 col-12">
                        <SectionTitle title="Empowering students to make a real impact" />
                    </div>
                </div> */}
                <div className="service-wrap">
                    <div className="row justify-content-center align-items-stretch gy-4">
                        {Services.slice(0, 20).map((Service, sitem) => (
                            <div
                                className="col col-xl-4 col-lg-5 col-md-6 col-sm-8 col-10"
                                key={sitem}
                            >
                                <div className="service-card-wrapper d-flex flex-column h-100">
                                    <ServiceCard
                                        // width="313px"
                                        // height="375px"
                                        title={Service.title}
                                        img={Service.sImg}
                                        slug={Service.slug}
                                        sdescription={Service.description}
                                    />
                                </div>
                            </div>
                        ))}
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
                                        <h2 className="mb-2">Join Us Today!</h2>
                                        <p
                                            className="text-center pt-2 px-2"
                                            style={{ textAlign: "justify", color: "white" }}
                                        >
                                            Joining SevakArmy is a great way for your organisation to make a positive impact.
                                        </p>
                                        <div className="d-flex flex-column gap-3 justify-content-center align-items-center w-100">
                                            <Link
                                                to="https://app.sevakarmy.com/" target="_blank"
                                                className="theme-btn"
                                                style={{ width: "fit-content" }}
                                            >
                                                Join Us Today!
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
    );
};

export default OrganisationBenefitsPage;
