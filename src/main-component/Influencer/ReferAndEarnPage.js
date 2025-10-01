import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css";
import "swiper/css/navigation";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ServiceCard from "../../components/ServiceSection/ServiceCard";

import GrowPlatform from "../../../public/assets/images1/volunteer/home/grow-platform.webp";
import ShareReferral from "../../../public/assets/images1/volunteer/home/share-referral.webp";
import BigImpact from "../../../public/assets/images1/volunteer/home/big-impact.webp";
import RewardPoints from "../../../public/assets/images1/volunteer/home/reward-points.webp";
import SocialMedia from "../../../public/assets/images1/volunteer/home/social-media.webp";
import HelpOthers from "../../../public/assets/images1/volunteer/home/help-others1.webp";
import Whatsapp from "../../../public/assets/images1/volunteer/home/whatsapp.webp";
import Blogs from "../../../public/assets/images1/volunteer/home/blogs.webp";
import Points from "../../../public/assets/images1/volunteer/home/points.webp";
import Badges from "../../../public/assets/images1/volunteer/home/badges.webp";
import Leaderboard from "../../../public/assets/images1/volunteer/home/competition.webp";
import icon from "../../../public/assets/images/cta/top-icon.webp";

const Services = [
    {
        Id: '01',
        sImg: BigImpact,
        
        title: 'Inspire Change',
        slug: '1',
        description: 'By encouraging your audience to volunteer, you help connect them with meaningful causes that align with their skills and passions.',
    },
    {
        Id: '02',
        sImg: RewardPoints,
        
        title: 'Earn Points & Recognition',
        slug: '2',
        description: 'Watch your rank rise on the leaderboard and unlock exclusive digital certificates and digital badges as milestones are achieved.',
    },
    {
        Id: '03',
        sImg: HelpOthers,
        
        title: 'Build a Community of Changemakers',
        slug: '3',
        description: "You can help build a community of engaged volunteers, making a lasting difference through collective efforts."

    }
]

const Services1 = [
    {
        Id: '01',
        sImg: Points,
        
        title: 'Points',
        slug: '1',
        description: 'For every volunteer who registers and contributes, you’ll earn points that help you climb the leaderboard.',
    },
    {
        Id: '02',
        sImg: Badges,
        
        title: 'Digital Badges & Certificates',
        slug: '2',
        description: 'Unlock exciting digital badges and receive digital certificates as recognition for your growing impact.',
    },
    {
        Id: '03',
        sImg: Leaderboard,
        
        title: 'Influencer Leaderboard',
        slug: '3',
        description: "Refer more people to climb the leaderboard and showcase your impact in creating positive social change."
    }
]

const featuresData = [
    {
        // iconClass: "flaticon-volunteer",
        svg: ShareReferral,
        title: "Share Your Unique Referral Link",
        description: "Register as an influencer to get a referral link to share on social media, blogs, WhatsApp, email and more.",
    },
    {
        iconClass: "flaticon-charity",
        title: "Earn Points for Every New Volunteer",
        description: "Earn points for each person who registers through your link, boosting your rank on the Influencer Leaderboard.",
    },
    {
        iconClass: "flaticon-solidarity",
        title: "Grow Your Social Impact",
        description: "Increase your impact as your referrals grow, earning points, recognition and creating positive change.",
    },
];

const featuresData1 = [
    {
        // iconClass: "flaticon-volunteer",
        svg: SocialMedia,
        title: "",
        description: (
            <span>
                Post it across your <strong>social media</strong> platforms with a personal message explaining the importance of volunteering with  Sevak Army.
            </span>
        ),
    },
    {
        // iconClass: "flaticon-charity",
        svg: Whatsapp,
        title: "",
        description: (
            <span>
                Send it to your audience via <b>WhatsApp, email</b> or direct messages.
            </span>
        ),
    },
    {
        // iconClass: "flaticon-solidarity",
        svg: Blogs,
        title: "",
        description: (
            <span>
                If you’re a <b>content creator</b>, include your referral link in blog posts, newsletters or videos to maximise its reach.
            </span>
        ),
    },
];

const ReferAndEarnPage = (props) => {
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
            <section className="wpo-about-section">
                <div className="container section-padding pt-5">
                    <div className="wpo-about-wrap">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-12">
                                <div className="wpo-about-img">
                                    <div className="wpo-about-right pt-3 pt-lg-5">
                                        <Image src={GrowPlatform} width={500} alt="Refer & Earn with Sevak Army" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-12">
                                <div className="wpo-about-text p-3 mt-0 pb-1 pb-lg-2 pt-1 pt-lg-2">
                                    <div className="wpo-section-title mt-0 mb-4">
                                        <span>Refer & Earn with Sevak Army</span>
                                        <h2 className="about-heading-second text-titleeee">Invite, Inspire and Earn Rewards!</h2>
                                    </div>
                                    <p className="mt-0 pt-0" style={{ textAlign: 'justify' }}>
                                        At  Sevak Army, we believe in the strength of collaboration and community influence. As an influencer, you can help us make an even more significant impact by encouraging your followers to join our platform as volunteers. Through our <b>Refer & Earn</b> programme, you can introduce your audience to meaningful causes, grow our volunteer community and earn rewards for your contributions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding pt-0 container">
                <div className="row justify-content-center">
                    {/* <div className="col-lg-6 col-md-12 col-12">
                        <SectionTitle subtitle="Serve with Impact" />
                    </div> */}
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-12 col-12">
                        <SectionTitle title="How It Works for Influencers" />
                    </div>
                </div>

                <div className="wpo-features-area pt-4">
                    <div className="features-wrap">
                        <div className="row justify-content-center column-gappp">
                            {featuresData.map((feature, index) => (
                                <div className="col col-lg-4 col-md-6 col-12" key={index} style={{}}>
                                    <div className="feature-item-wrap" style={{ display: 'flex', alignItems: 'flex-start' }}>
                                        <div className="feature-item" style={{ display: 'flex', alignItems: 'center', width: '460px', height: '220px' }}>
                                            <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                                                <div className="feature-icon">
                                                    <div className="icon">
                                                        {feature.iconClass ? <i className={`fi ${feature.iconClass}`}></i> : <Image src={feature.svg} alt={feature.svg} />}
                                                    </div>
                                                </div>
                                                <div className="feature-text">
                                                    <h2 className="fs-5">{feature.title}</h2>
                                                    <p className="fs-6" style={{ textAlign: 'justify' }}>{feature.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <div className="container section-padding pt-2">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-12 col-12">
                        <SectionTitle subtitle="" title="Why Refer Your Followers?" />
                    </div>
                </div>
                <div className="service-wrap mt-3">
                    <div className="row justify-content-center column-gappp pt-3">
                        {Services.slice(0, 19).map((Service, sitem) => (
                            <div className="col col-lg-3 col-md-6 col-sm-6 col-12" key={sitem}>
                                <div className="service-card-wrapper d-flex flex-column h-100">
                                    <ServiceCard height="388px" width="313px" title={Service.title} img={Service.sImg} slug={Service.slug} sdescription={Service.description} />
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>

            <section className="container">
                <div className="row justify-content-center">
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-12 col-12">
                        <SectionTitle title="How to Share Your Referral Link" />
                    </div>
                </div>

                <div className="wpo-features-area pt-4">
                    <div className="features-wrap">
                        <div className="row justify-content-center column-gappp">
                            {featuresData1.map((feature, index) => (
                                <div className="col col-lg-4 col-md-6 col-12" key={index} style={{}}>
                                    <div className="feature-item-wrap" style={{ display: 'flex', alignItems: 'flex-start' }}>
                                        <div className="feature-item" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', width: '460px', height: '240px' }}>
                                            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', }}>
                                                <div className="feature-icon" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                                    <div className="icon" style={{ width: '90px', height: '90px' }}>
                                                        {feature.iconClass ? <i className={`fi ${feature.iconClass}`}></i> : <Image src={feature.svg} alt={feature.svg} />}
                                                    </div>
                                                </div>
                                                <div className="feature-text pt-3">
                                                    <p className="fs-6 px-3 text-center" style={{ textAlign: 'justify' }}>{feature.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <div className="container section-padding pt-100">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-12 col-12">
                        <SectionTitle subtitle="" title="The Rewards" />
                    </div>
                </div>
                <div className="service-wrap">
                    <div className="row justify-content-center column-gappp pt-4">
                        {Services1.slice(0, 19).map((Service, sitem) => (
                            <div className="col col-lg-3 col-md-6 col-sm-6 col-12" key={sitem}>
                                <div className="service-card-wrapper d-flex flex-column h-100">
                                    <ServiceCard height="371px" width="313px" title={Service.title} img={Service.sImg} slug={Service.slug} sdescription={Service.description} />
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>

            {/* <section className="wpo-cta-section-s3 section-padding">
                <div className="container">
                    <div className="bg-color" style={{ background: "#007560" }}>
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="cta-wrap">

                                    <span>Ready to Spread the Word?</span>
                                    <p className="pt-3 px-2 text-center" style={{ color: 'whitesmoke' }}>
                                        Help us grow  Sevak Army volunteer base and earn rewards while doing it! Use your influence for good by sharing your referral link and inspiring your followers to take action. The bigger the community, the greater the change we can make together.
                                    </p>
                                    <h3 className="w-100 text-center text-white">Start Referring and Earning Now!</h3>
                                    <Link onClick={() => props.setShow(true)} to="#" className="theme-btn mt-3">
                                        Share Your Link & Earn Points
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            <section className="wpo-cta-section section-padding">
                <div className="bg-overlay">
                    <div className="container">
                        <div className="bg-color">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="cta-wrap">
                                        <div className="icon mx-2">
                                            <Image src={icon} width={40} height={40} alt="Icon" />
                                        </div>
                                        <span>Ready to Spread the Word?</span>
                                        <p
                                            className="text-center pt-2 px-2"
                                            style={{ textAlign: "justify", color: "white" }}
                                        >
                                             Help us grow  Sevak Army volunteer base and earn rewards while doing it! Use your influence for good by sharing your referral link and inspiring your followers to take action. The bigger the community, the greater the change we can make together.
                                        </p>
                                        <div className="d-flex flex-column gap-3 justify-content-center align-items-center w-100">
                                            <span>Start Referring and Earning Now!</span>
                                            <button
                                                onClick={() => props.setShow(true)}
                                                className="theme-btn"
                                                style={{ width: "fit-content" }}
                                            >
                                                Share Your Link & Earn Points
                                            </button>
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

export default ReferAndEarnPage;
