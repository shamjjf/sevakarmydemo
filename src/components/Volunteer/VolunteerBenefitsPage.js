import React, { useEffect } from "react";
// import Image from "next/image";
// import icon from "../../../public/assets/images/cta/top-icon.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css";
import "swiper/css/navigation";

// All components are here
import ServiceCard from "../ServiceSection/ServiceCard";
import SectionTitle from "../SectionTitle/SectionTitle";
import { Link } from "react-router-dom";

// All images imports starts from here
import Difference from '../../../public/assets/images1/volunteer/home/difference.webp'
import Pace from '../../../public/assets/images1/volunteer/home/speed.webp' 
import Productivity from '../../../public/assets/images1/volunteer/home/productivity.webp'
import Recognition from '../../../public/assets/images1/volunteer/home/recognition.webp'
import GrowSkills from '../../../public/assets/images1/volunteer/home/grow-skills.webp'
import BuildConnections from '../../../public/assets/images1/volunteer/home/community-building.webp'
import CommunityPart from '../../../public/assets/images1/volunteer/home/community-part.webp'
import Choice from '../../../public/assets/images1/volunteer/home/choice.webp'
import Conversation from '../../../public/assets/images1/volunteer/home/conversation.webp'
import TrackProgress from '../../../public/assets/images1/volunteer/home/track-progress.webp'
import Leadership from '../../../public/assets/images1/volunteer/home/leadership.webp'
import CV from '../../../public/assets/images1/volunteer/home/cv.webp'
import Inspiration from '../../../public/assets/images1/volunteer/home/inspiration.webp'
import RewardReference from '../../../public/assets/images1/volunteer/home/reward-for-reference.webp'
import Social from '../../../public/assets/images1/volunteer/home/social.webp'
import Dependable from '../../../public/assets/images1/volunteer/home/dependable.webp'
import Help from '../../../public/assets/images1/volunteer/home/help-others.webp'
import Change from '../../../public/assets/images1/volunteer/home/change.webp'
import Giving from '../../../public/assets/images1/volunteer/home/giving.webp'

const Services = [
    {
        Id: '01',
        sImg: Difference,

        title: 'Make a Real Difference',
        slug: '1',
        description: 'Every hour you spend volunteering with Sevak Army helps improve lives and communities across India.',
    },
    {
        Id: '02',
        sImg: Pace,

        title: 'Volunteer at Your Own Pace',
        slug: '2',
        description: 'Choose tasks based on your availability. Whether it’s a few hours a week or a one-time project, you decide when and how you can contribute.',
    },
    {
        Id: '03',
        sImg: Productivity,

        title: ' Find Tasks That Match Your Skills',
        slug: '3',
        description: 'Sevak Army helps you find tasks that fit your skills and interests, ensuring you enjoy what you do while making an impact.'

    },
    {
        Id: '04',
        sImg: Recognition,

        title: 'Gain Recognition for Your Efforts',
        slug: '4',
        description: 'Earn points, e-badges and e-certificates for each task you complete. Share these recognitions on your CV or social media profiles.',
    },
    {
        Id: '05',
        sImg: GrowSkills,

        title: 'Grow Your Personal and Professional Skills',
        slug: '4',
        description: 'Volunteering helps you learn new skills like leadership, communication and teamwork, boosting your confidence and your CV.',
    },
    {
        Id: '06',
        sImg: BuildConnections,

        title: ' Build Connections with NGOs',
        slug: '4',
        description: 'Work directly with trusted NGOs. You’ll build relationships with organisations making a real impact, expanding your network.',
    },
    {
        Id: '07',
        sImg: CommunityPart,

        title: 'Be Part of a Community',
        slug: '4',
        description: 'Join a group of like-minded volunteers and make new friends who share your passion for helping others.',
    },
    {
        Id: '08',
        sImg: Choice,

        title: 'Flexible Volunteering Options',
        slug: '4',
        description: 'Whether you want to volunteer locally, remotely or for a short-term or a long-term project, Sevak Army has options that suit your needs.',
    },
    {
        Id: '09',
        sImg: Conversation,

        title: 'Easy Communication with NGOs',
        slug: '4',
        description: 'Once selected, chat directly with NGOs to coordinate tasks and stay updated easily, ensuring smooth collaboration.',
    },
    {
        Id: '10',
        sImg: TrackProgress,

        title: 'Track Your Progress',
        slug: '4',
        description: 'Log your hours, track your contributions and watch your impact grow as you rise on the leaderboard.',
    },
    {
        Id: '11',
        sImg: Leadership,

        title: 'Take on Leadership Roles',
        slug: '4',
        description: 'Grow your influence by becoming a Sevak Army Ambassador, where you’ll lead others and help promote volunteering in your community.',
    },
    {
        Id: '12',
        sImg: CV,

        title: 'Boost Your CV',
        slug: '4',
        description: 'Volunteering is a great way to add value to your CV. Your skills, achievements, and certifications from Sevak Army show your dedication to giving back to society.',
    },
    {
        Id: '13',
        sImg: Inspiration,

        title: 'Inspire Others',
        slug: '4',
        description: 'By sharing your volunteering journey, you encourage friends, family and colleagues to join the platform and make a difference.',
    },
    {
        Id: '14',
        sImg: RewardReference,

        title: 'Get Rewarded for Referrals',
        slug: '4',
        description: 'Invite others to join Sevak Army and for every referral, you will earn extra points, moving up the leaderboard faster.',
    },
    {
        Id: '15',
        sImg: Social,

        title: 'Build a Reputation for Social Responsibility',
        slug: '4',
        description: 'Regular volunteering shows you are committed to helping others, enhancing your reputation as a socially responsible individual.',
    },
    {
        Id: '16',
        sImg: Dependable,

        title: 'Join a Trusted Platform',
        slug: '4',
        description: 'Sevak Army works only with verified NGOs, so you know your time and effort will go to the real, impactful causes.',
    },
    {
        Id: '17',
        sImg: Help,

        title: 'Help Tackle Different Causes',
        slug: '4',
        description: 'Support various causes like education, healthcare, environmental protection, community welfare, etc., based on your passion.',
    },
    {
        Id: '18',
        sImg: Change,

        title: 'Be a Force for Positive Change',
        slug: '4',
        description: 'Every task you complete, no matter how big or small, spreads positive change, creating a lasting impact in society.',
    },
    {
        Id: '19',
        sImg: Giving,

        title: 'Feel Good About Giving Back',
        slug: '4',
        description: 'Nothing feels better than knowing you have made a real impact. Volunteering with Sevak Army gives you the satisfaction of knowing you’re contributing to a better future and better world.',
    },

]

const VolunteerBenefitsPage = (props) => {

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
            <div className="container section-padding">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-12 col-12">
                        <SectionTitle subtitle="Benefits" title="Why Volunteering with Sevak Army is the Right Choice!" paragarap="See how volunteering with Sevak Army helps both you and our community! From growing as a person to making a real difference, here’s why you should join today." />
                    </div>
                </div>
                <div className="service-wrap">
                    {/* <p className="w-100 text-center"></p> */}
                    <div className="row justify-content-center column-gappp pt-3">
                        {Services.slice(0, 19).map((Service, sitem) => (
                            <div className="col col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12" key={sitem}>
                                <div className="service-card-wrapper d-flex flex-column h-100">
                                    <ServiceCard title={Service.title} img={Service.sImg} slug={Service.slug} sdescription={Service.description} />
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
                                        <h2 className="mb-2">Join Sevak Army Today</h2>
                                        <p
                                            className="text-center pt-2 px-2"
                                            style={{ textAlign: "justify", color: "white" }}
                                        >
                                            Ready to start making a difference? Register now and become part of a community dedicated for creating a lasting change.
                                        </p>
                                        <div className="d-flex flex-column gap-3 justify-content-center align-items-center w-100">
                                            <Link
                                             to="https://app.sevakarmy.com/" target="_blank"
                                                className="theme-btn"
                                                style={{ width: "fit-content" }}
                                            >
                                                Join Now
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

export default VolunteerBenefitsPage;
