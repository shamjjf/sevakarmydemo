import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css";
import "swiper/css/navigation";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ServiceCard from "../../components/ServiceSection/ServiceCard";

// import icon from "../../../public/assets/images/cta/top-icon.png";
// import Leadership from '../../../public/assets/images1/volunteer/home/leadership.png'
// import RewardReference from '../../../public/assets/images1/volunteer/home/reward-for-reference.png'
// import Social from '../../../public/assets/images1/volunteer/home/social.png'
// import Dependable from '../../../public/assets/images1/volunteer/home/dependable.png'
// import Help from '../../../public/assets/images1/volunteer/home/help-others.png'
// import Change from '../../../public/assets/images1/volunteer/home/change.png'
// import Giving from '../../../public/assets/images1/volunteer/home/giving.png'

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
import CV from '../../../public/assets/images1/volunteer/home/cv.webp'
import Inspiration from '../../../public/assets/images1/volunteer/home/inspiration.webp'


const Services = [
    {
        Id: '01',
        sImg: Difference,

        title: 'Grow Your Social Impact',
        slug: '1',
        description: 'By inspiring your followers to volunteer, you contribute to positive change across multiple causes, such as education, healthcare and the environment. You become a voice for good, amplifying the impact of your community.',
    },
    {
        Id: '02',
        sImg: Pace,

        title: 'Earn Points and Climb the Leaderboard',
        slug: '2',
        description: 'For every follower who signs up and volunteers through your referral link, you earn points that help you rise on  SevakArmy leaderboard. The more impact you generate, the higher you go.',
    },
    {
        Id: '03',
        sImg: Productivity,

        title: 'Receive Digital Badges and Certificates',
        slug: '3',
        description: 'As you and your followers contribute to the platform, you earn recognition in the form of digital badges and digital certificates. These achievements add value to your profile and showcase your leadership in promoting social responsibility.'

    },
    {
        Id: '04',
        sImg: Recognition,

        title: 'Boost Your Reputation as a Changemaker',
        slug: '4',
        description: 'Regularly encouraging followers to volunteer shows your commitment to social responsibility, enhancing your reputation as a positive influence in the world. Your followers will see you as more than an influencer - they’ll see you as a leader for change.',
    },
    {
        Id: '05',
        sImg: GrowSkills,

        title: 'Build a Loyal, Purpose-driven Community',
        slug: '4',
        description: 'By aligning with causes that matter, you’ll attract like-minded followers who are passionate about making a difference. This strengthens the bond between you and your followers, building a deeper, purpose-driven community.',
    },
    {
        Id: '06',
        sImg: BuildConnections,

        title: 'Track Your Collective Impact',
        slug: '4',
        description: 'With SevakArmy’s platform, you can easily track the number of volunteers who have joined through your referral link, the tasks they’ve completed and the overall impact you’ve created together.',
    },
    {
        Id: '07',
        sImg: CommunityPart,

        title: 'Get Recognised for Your Contributions',
        slug: '4',
        description: 'As your followers complete tasks, you’ll receive recognition not only for bringing them on board but also for the cumulative social impact they help generate. This gives you a tangible measure of your influence.',
    },
    {
        Id: '08',
        sImg: Choice,

        title: 'Earn Extra Points for Referrals',
        slug: '4',
        description: 'Every time you refer someone to  SevakArmy, you earn extra points, giving you even more opportunities to move up the leaderboard and gain greater recognition within the platform.',
    },
    {
        Id: '09',
        sImg: Conversation,

        title: 'Expand Your Influence Beyond Social Media',
        slug: '4',
        description: 'By connecting your platform to real-world causes, you’ll expand your influence into meaningful areas. This allows you to make a lasting difference and stand out as an influencer who’s dedicated to making the world a better place.',
    },
    {
        Id: '10',
        sImg: TrackProgress,

        title: 'Engage with Trusted NGOs',
        slug: '4',
        description: 'You’ll encourage your followers to join as volunteers at SevakArmy, guiding them toward working with verified, trusted NGOs. This means you can confidently promote volunteering opportunities, knowing they’re contributing to impactful and legitimate causes.',
    },
    // {
    //     Id: '11',
    //     sImg: Leadership,

    //     title: 'Create Lasting Positive Change',
    //     slug: '4',
    //     description: 'Every volunteer who joins through your referral link is contributing to the betterment of communities. You’re not just promoting content, you’re actively making a difference and creating lasting change.',
    // },
    {
        Id: '11',
        sImg: CV,

        title: 'Strengthen Your Personal Brand',
        slug: '4',
        description: 'By consistently promoting volunteering and social responsibility, you strengthen your personal brand as an influencer who cares about making the world better. This aligns you with causes that matter and opens doors to future partnerships with brands that share your values.',
    },
    {
        Id: '12',
        sImg: Inspiration,

        title: 'Inspire and Lead Others',
        slug: '4',
        description: 'Your role in encouraging followers to join  SevakArmy puts you in a leadership position. You’re not just promoting a product - you’re inspiring your community to take action and make a difference, further solidifying your status as a changemaker.',
    },
]

const InfluencerBenefitsPage = (props) => {

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
                    <div className="col-lg-6 col-md-12 col-12">
                        <SectionTitle subtitle="Benefits" title="Benefits for Influencers on SevakArmy" />
                    </div>
                </div>
                <div className="service-wrap">
                    <p className="w-100 text-center pt-3 pb-3 fs-4">Here’s why joining as a SevakArmy influencer is the right choice: </p>
                    <div className="row justify-content-center column-gappp align-items-stretch gy-3">
                        {Services.slice(0, 19).map((Service, sitem) => (
                            <div className="col col-xl-4 col-lg-5 col-md-6 col-sm-8 col-12" key={sitem}>
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
                                        <h2 className="mb-2">Join SevakArmy Today</h2>
                                        <p
                                            className="text-center pt-2 px-2"
                                            style={{ textAlign: "justify", color: "white" }}
                                        >
                                            Ready to take your influence to the next level? Share your unique referral link, encourage your followers to join and start building a community of changemakers!
                                        </p>
                                        <div className="d-flex flex-column gap-3 justify-content-center align-items-center w-100">
                                            <Link
                                                to="https://app.sevakarmy.com/" target="_blank"
                                                className="theme-btn"
                                                style={{ width: "fit-content" }}
                                            >
                                                Share Your Link Now
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

export default InfluencerBenefitsPage;
