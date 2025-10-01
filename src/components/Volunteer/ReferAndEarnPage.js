import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css";
import "swiper/css/navigation";

import ServiceCard from "../ServiceSection/ServiceCard";
import SectionTitle from "../SectionTitle/SectionTitle";

// import icon from "../../../public/assets/images/cta/top-icon.png";
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


const Services = [
    {
        Id: '01',
        sImg: BigImpact,
        
        title: 'Make a Bigger Impact',
        slug: '1',
        description: 'Help expand the volunteer community, bringing more hands and hearts together for meaningful work.',
    },
    {
        Id: '02',
        sImg: RewardPoints,
        
        title: 'Earn Points & Recognition',
        slug: '2',
        description: 'Move up the leaderboard, unlock e-badges and earn e-certificates for your contributions.',
    },
    {
        Id: '03',
        sImg: HelpOthers,
        
        title: 'Help Others Get Involved',
        slug: '3',
        description: "Volunteering becomes easier when it's shared! You can inspire those around you to contribute their time and skills to help communities in need."

    }
]

const Services1 = [
    {
        Id: '01',
        sImg: Points,
        
        title: 'Points',
        slug: '1',
        description: 'Earn points for every new volunteer who registers and starts contributing.',
    },
    {
        Id: '02',
        sImg: Badges,
        
        title: 'Badges & Certificates',
        slug: '2',
        description: 'Unlock e-badges and receive e-certificates for every milestone reached through your referrals.',
    },
    {
        Id: '03',
        sImg: Leaderboard,
        
        title: 'Leaderboard',
        slug: '3',
        description: "The more people you refer, the higher you climb up the leaderboard, gaining recognition for your efforts."

    }
]

const featuresData = [
    {
        // iconClass: "flaticon-volunteer",
        svg: ShareReferral,
        title: "Share Your Referral Link",
        description: "After registering with Sevak Army, you'll receive a unique referral link. Share it via WhatsApp, email or social media to invite others to join.",
    },
    {
        iconClass: "flaticon-charity",
        title: "Earn Points for Every Sign-Up",
        description: "For every person who signs up and volunteers through your referral link, you will earn points that boost your rank on  Sevak Army leaderboard.",
    },
    {
        iconClass: "flaticon-solidarity",
        title: "Watch Your Impact Grow",
        description: "The more people you refer, the more points you earn, allowing you to rise up the leaderboard and receive recognition for your efforts.",
    },
];

const featuresData1 = [
    {
        // iconClass: "flaticon-volunteer",
        svg: SocialMedia,
        title: "",
        description: "Post it on social media platforms with a personal message about your experience with Sevak Army.",
    },
    {
        // iconClass: "flaticon-charity",
        svg: Whatsapp,
        title: "",
        description: "Send it via WhatsApp or email to friends, family and colleagues.",
    },
    {
        // iconClass: "flaticon-solidarity",
        svg: Blogs,
        title: "",
        description: "Include it in blog posts or on your website if you are a content creator.",
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
                                        <Image src={GrowPlatform} width={500} alt="Grow the Platform and Earn Points!" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-12">
                                <div className="wpo-about-text p-3 mt-0 pb-1 pb-lg-2 pt-1 pt-lg-2">
                                    <div className="wpo-section-title mt-0 mb-4">
                                        <span>Invite & Earn with Sevak Army </span>
                                        <h2 className="about-heading-second text-titleeee">Grow the Platform and Earn Points!</h2>
                                    </div>
                                    <p className="mt-0 pt-0" style={{ textAlign: 'justify' }}>
                                        At Sevak Army, we believe in the power of community. That’s why we’re making it easy for you to invite others to join our platform and help make an even bigger impact. By using your unique referral link, you can introduce your friends, family and followers to Sevak Army and earn points for every person who signs up and volunteers through your link.
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
                        <SectionTitle title="How It Works?" />
                    </div>
                </div>

                <div className="wpo-features-area pt-4">
                    <div className="features-wrap">
                        <div className="row justify-content-center align-items-stretch gy-4">
                            {featuresData.map((feature, index) => (
                                <div className="col col-lg-4 col-md-6 col-12" key={index}>
                                    <div className="feature-item-wrap h-100" style={{ display: 'flex', alignItems: 'flex-start' }}>
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

            <div className="container section-padding pt-0">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-12 col-12">
                        <SectionTitle subtitle="" title="Why Refer Others?" />
                    </div>
                </div>
                <div className="service-wrap">
                    <div className="row justify-content-center column-gappp pt-4">
                        {Services.slice(0, 19).map((Service, sitem) => (
                            <div className="col col-lg-3 col-md-6 col-sm-6 col-12" key={sitem}>
                                <div className="service-card-wrapper d-flex flex-column h-100">
                                    <ServiceCard height="371px" width="313px" title={Service.title} img={Service.sImg} slug={Service.slug} sdescription={Service.description} />
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
                        <SectionTitle title="How to Share Your Referral Link:" />
                    </div>
                </div>

                <div className="wpo-features-area pt-3">
                    <div className="features-wrap">
                        <div className="row justify-content-center column-gappp">
                            {featuresData1.map((feature, index) => (
                                <div className="col col-lg-4 col-md-6 col-12" key={index} style={{}}>
                                    <div className="feature-item-wrap" style={{ display: 'flex', alignItems: 'flex-start' }}>
                                        <div className="feature-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '460px', height: '220px' }}>
                                            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', }}>
                                                <div className="feature-icon" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                                    <div className="icon">
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

            <div className="container section-padding pt-50 pb-0">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-12 col-12">
                        <SectionTitle subtitle="" title="The Rewards" />
                    </div>
                </div>
                <div className="service-wrap">
                    <div className="row justify-content-center column-gappp pt-3">
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

            <section className="wpo-cta-section-s3 section-padding">
                <div className="container">
                    <div className="bg-color" style={{ background: "#007560" }}>
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="cta-wrap">

                                    <span>Ready to Spread the Word?</span>
                                    <p className="pt-3 px-2" style={{ color: 'whitesmoke' }}>
                                        Help Sevak Army grow and earn rewards while doing it! Share your referral link today and start inviting others to be a part of the revolutionary platform.
                                    </p>
                                    <Link to="https://app.sevakarmy.com/" target="_blank" className="theme-btn mt-3">
                                        Start Referring and Earn Points Now!
                                    </Link>
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
