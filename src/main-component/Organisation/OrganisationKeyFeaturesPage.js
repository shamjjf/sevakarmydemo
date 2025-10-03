import React, { useEffect } from "react";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css";
import "swiper/css/navigation";

// import icon from "../../../public/assets/images/cta/top-icon.png";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ServiceCard from "../../components/ServiceSection/ServiceCard";

import kImg1 from "../../../public/assets/images1/influencer/features/share-link.webp";
import Reward from "../../../public/assets/images1/volunteer/opportunities/reward.webp";
import kImg2 from "../../../public/assets/images1/influencer/features/shuttle.webp";
import kImg3 from "../../../public/assets/images1/influencer/features/ngo.webp";
import kImg4 from "../../../public/assets/images1/influencer/features/volunteering.webp";
import kImg6 from "../../../public/assets/images1/influencer/features/reward.webp";
import kImg7 from "../../../public/assets/images1/influencer/features/community-building.webp";
import kImg8 from "../../../public/assets/images1/influencer/features/chat.webp";
import { Link } from "react-router-dom";

const Services = [
    {
        Id: "01",
        sImg: kImg1,

        title: "A Simple Way to Achieve Your CSR Goals",
        slug: "1",
        description:
            "SevakArmy empowers organisations to make a meaningful difference in society by encouraging their employees to register as volunteers for impactful social work. Our platform provides you with features that will align with your organisational CSR goal.",
    },
    {
        Id: "02",
        sImg: kImg2,

        title: "Empower Your Employees",
        slug: "2",
        description:
            "SevakArmy makes it easy for organisations to empower their employees to give back to society. By registering on our platform organisations can encourage employees to engage in social tasks that align with their Corporate Social Responsibility (CSR) goals.",
    },
    {
        Id: "03",
        sImg: kImg3,

        title: "Simple Registration Process",
        slug: "3",
        description:
            "Organisations can quickly register on SevakArmy portal. After registration, organisations can share referral links with their employees, making it easy for them to join the platform and participate in meaningful volunteer activities.",
    },
    {
        Id: "04",
        sImg: kImg4,

        title: "Access to Social Tasks",
        slug: "4",
        description:
            "Employees can browse and choose from a variety of social tasks posted by NGOs on the platform. This flexibility allows employees to engage in causes they are passionate about while contributing to their organisation's CSR objectives.",
    },
    {
        Id: "05",
        sImg: Reward,

        title: "Tracking and Reporting",
        slug: "4",
        description:
            "SevakArmy provides comprehensive tracking tools that allow organisations to monitor employee engagement and volunteer hours. Organisations can generate reports to measure the impact of their CSR efforts and celebrate their collective achievements.",
    },
    {
        Id: "06",
        sImg: kImg6,

        title: "Recognition and Digital Badges",
        slug: "4",
        description:
            "Employees' contributions are recognised through digital badges and digital certificates, which can be displayed on their profiles. This feature motivates employees to participate actively and fosters a culture of social responsibility within the organisation.",
    },
    {
        Id: "07",
        sImg: kImg7,

        title: "Leaderboard Feature",
        slug: "4",
        description:
            "The platform features a public leaderboard showcasing the top-performing organisations and individual volunteers. This promotes healthy competition and encourages more employees to get involved in volunteer activities.",
    },
    {
        Id: "08",
        sImg: kImg8,

        title: "Support for Organisations",
        slug: "4",
        description:
            "Our dedicated support team is here to assist organisations with any questions or concerns. We offer guidance to ensure organisations can maximise their impact and make a difference in their communities.",
    },
];

const OrganisationKeyFeaturesPage = (props) => {
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
            <div className="container section-padding">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-12 col-12">
                        <SectionTitle
                            subtitle=""
                            title="Key Features of SevakArmy Organisation"
                            paragarap="Here’s What Makes SevakArmy the Ideal Platform for Organisations:"
                        />
                        {/* <h4 className="text-center">As an influencer on SevakArmy, you have the unique opportunity to inspire your followers to volunteer and make a real impact. Our platform is designed to make this process seamless, rewarding and impactful for you and your followers.</h4> */}
                    </div>
                </div>
                <div className="service-wrap mt-3">

                    {/* <p className="w-100 text-center pb-3">
                        Here’s what makes SevakArmy the ideal platform for Organisations
                    </p> */}
                    <div className="row justify-content-center  align-items-stretch gy-4">
                        {Services.slice(0, 10).map((Service, sitem) => (
                            <div
                                className="col col-xl-4 col-lg-5 col-md-6 col-sm-8 col-10"
                                key={sitem}
                            >
                                <div className="service-card-wrapper d-flex flex-column h-100">
                                    <ServiceCard
                                        // width="313px"
                                        // height="465px"
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
                                        <h2 className="mb-2">Ready to inspire change!</h2>
                                        <p
                                            className="text-center pt-2 px-2"
                                            style={{ textAlign: "justify", color: "white" }}
                                        >
                                            Join SevakArmy today and let’s build a better future, together.
                                        </p>
                                        <div className="d-flex flex-column gap-3 justify-content-center align-items-center w-100">
                                            <Link
                                                to="https://app.sevakarmy.com/" target="_blank"
                                                className="theme-btn"
                                                style={{ width: "fit-content" }}
                                            >
                                                Register now
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

export default OrganisationKeyFeaturesPage;
