import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css";
import "swiper/css/navigation";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ServiceCard from "../../components/ServiceSection/ServiceCard";

// import abImg7 from "../../../public/assets/images1/volunteer/opportunities/sevak-army-volunteer-opportunities-5.jpg";
// import LeaderboardWorking from "../../../public/assets/images1/volunteer/home/leaderboard-work.png";
// import GivingBack from "../../../public/assets/images1/volunteer/home/giving-back.png";
// import icon from "../../../public/assets/images/cta/top-icon.png";
// import LeaderboardTable from "../../components/LeaderboardTable";

import abImg7 from "../../../public/assets/images1/volunteer/opportunities/bg-img.webp";
import LeaderboardWorking from "../../../public/assets/images1/volunteer/opportunities/image.webp";
import Growth from "../../../public/assets/images1/volunteer/home/growth.webp";
import Boost from "../../../public/assets/images1/volunteer/home/boost.webp";
import Podium from "../../../public/assets/images1/volunteer/home/podium.webp";
import Certification from "../../../public/assets/images1/volunteer/home/certification.webp";
import lImg1 from "../../../public/assets/images1/influencer/leaderboard/motivation.webp";
import lImg2 from "../../../public/assets/images1/influencer/leaderboard/influencer.webp";

const Services = [
  {
    Id: "01",
    sImg: Growth,

    title: "Track Your Progress in Real Time",
    slug: "1",
    description:
      "Each influencer can log in to their profile and view their standing on the leaderboard. You will also receive regular email updates showing your rank and progress. These updates keep you motivated and informed as you inspire your followers to join SevakArmy and make an impact.",
  },
  {
    Id: "02",
    sImg: Boost,

    title: "Boost Your Rank with Referrals",
    slug: "2",
    description:
      "Help grow SevakArmy community by inviting your followers to join. Each follower who signs up using your referral link will add to your points, helping you climb higher on the leaderboard.",
  },
  {
    Id: "03",
    sImg: Podium,

    title: "Why Does the Leaderboard Matters?",
    slug: "3",
    description:
      "SevakArmy Influencer Leaderboard isn’t just about competition - it’s about celebrating your dedication to driving social good. The more volunteers you inspire, the higher you climb, and the more recognition you earn. Plus, it helps you set personal goals and stay motivated as you work to create a better world.",
  },
  {
    Id: "04",
    sImg: Certification,

    title: "Earn Digital Badges and Certificates",
    slug: "4",
    description:
      "As you rise through the leaderboard, you’ll unlock digital badges and receive digital certificates for your achievements. These milestones showcase your leadership in social impact and can be shared on social media or added to your influencer portfolio, highlighting your dedication to meaningful causes.",
  },
  {
    Id: "05",
    sImg: lImg1,

    title: "Stay Motivated and Keep Inspiring Change",
    slug: "4",
    description:
      "Whether aiming for the top spot or simply wanting to track your success in inspiring others, SevakArmy Influencer Leaderboard keeps you engaged and driven. It’s more than just points - it’s about building a legacy of social change, one follower at a time.",
  },
  {
    Id: "06",
    sImg: lImg2,

    title: "Join the Influencer Leaderboard Today",
    slug: "4",
    description:
      "Become a SevakArmy influencer and earn points for every follower you inspire to volunteer. Track your progress, climb the ranks and gain recognition for your role in making a positive impact.",
  },
];

// const weeklyLeaderboard = [
//   {
//     rank: 1,
//     name: "Aarav Sharma",
//     hours: 15,
//     contributions: 3,
//     lastContribution: "2024-10-14 09:30",
//     badge: "Gold",
//   },
//   {
//     rank: 2,
//     name: "Vihaan Patel",
//     hours: 12,
//     contributions: 2,
//     lastContribution: "2024-10-13 16:20",
//     badge: "Silver",
//   },
//   {
//     rank: 3,
//     name: "Isha Gupta",
//     hours: 10,
//     contributions: 1,
//     lastContribution: "2024-10-12 11:15",
//     badge: "Bronze",
//   },
// ].map((item) => ({
//   ...item,
//   badge: item.hours >= 15 ? "Gold" : item.hours >= 12 ? "Silver" : "Bronze",
// }));

// const monthlyLeaderboard = [
//   {
//     rank: 1,
//     name: "Rohan Iyer",
//     hours: 60,
//     contributions: 10,
//     lastContribution: "2024-10-14 14:50",
//     badge: "Gold",
//   },
//   {
//     rank: 2,
//     name: "Neha Mehta",
//     hours: 55,
//     contributions: 9,
//     lastContribution: "2024-10-10 12:35",
//     badge: "Silver",
//   },
//   {
//     rank: 3,
//     name: "Anjali Kumar",
//     hours: 50,
//     contributions: 8,
//     lastContribution: "2024-10-08 17:45",
//     badge: "Bronze",
//   },
// ].map((item) => ({
//   ...item,
//   badge: item.hours >= 55 ? "Gold" : item.hours >= 50 ? "Silver" : "Bronze",
// }));

// const yearlyLeaderboard = [
//   {
//     rank: 1,
//     name: "Raj Malhotra",
//     hours: 300,
//     contributions: 50,
//     lastContribution: "2024-09-30 18:00",
//     badge: "Gold",
//   },
//   {
//     rank: 2,
//     name: "Priya Reddy",
//     hours: 280,
//     contributions: 48,
//     lastContribution: "2024-09-25 15:30",
//     badge: "Silver",
//   },
//   {
//     rank: 3,
//     name: "Dev Singh",
//     hours: 250,
//     contributions: 45,
//     lastContribution: "2024-09-20 10:00",
//     badge: "Bronze",
//   },
// ].map((item) => ({
//   ...item,
//   badge: item.hours >= 300 ? "Gold" : item.hours >= 200 ? "Silver" : "Bronze",
// }));

const InfluencerLeaderboardPage = (props) => {
  // const { slug } = useParams()

  // const EventDetails = events.find(item => item.slug === slug)

  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  // const SubmitHandler = (e) => {
  //     e.preventDefault()
  // }

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

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
      <section className="wpo-about-section">
        <div className="container section-padding pt-0 pt-lg-5">
          <div className="wpo-about-wrap">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-img">
                  <div className="wpo-about-right pt-0">
                    <Image width={556} height={354} src={LeaderboardWorking} alt="Leader Board - SevakArmy Influncer" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-text p-3 pt-0 mt-0 pb-1">
                  <div className="wpo-section-title mt-0 mb-3 pb-0">
                    <span>
                      Rise, Rank, & Get Rewarded!
                    </span>
                    <h2 className="about-heading-second text-titleeee mb-0 pb-0 mt-0">
                      Track Your Impact, Rise Through the Ranks and Gain
                      Recognition
                    </h2>
                  </div>
                  <h3 className="mt-0">
                    How SevakArmy Influencer Leaderboard Works?
                  </h3>
                  <p style={{ textAlign: "justify" }}>
                    At SevakArmy, we believe in recognising the efforts of influencers who help grow our volunteer community. Our Influencer Leaderboard tracks your progress, showing where you stand among other influencers and motivating you to continue inspiring action. You will earn points, digital badges, and digital certificates as your followers register and volunteer through your link.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container section-padding pt-0">
          <div className="wpo-about-wrap">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-text p-3 pt-0 mt-0 pb-1">
                  <div className="wpo-section-title mt-0">
                    <h2 className="about-heading-second text-titleeee mt-0">
                      Earn Points for Every Sign-Up{" "}
                    </h2>
                  </div>
                  <p style={{ textAlign: "justify" }}>
                    You will earn points for every follower who registers as a
                    volunteer using your unique link. Different actions, like
                    encouraging sign-ups for various tasks or causes, carry
                    different point values based on the number of volunteers
                    recruited and the overall impact generated. Whether it’s
                    promoting educational initiatives, environmental projects,
                    or social causes, your points will help you rise on the
                    leaderboard.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-img">
                  {/* <div className="wpo-about-left">
                    <Image src={abImg5} alt="img" />
                  </div> */}
                  <div className="wpo-about-right pt-3 pt-lg-5">
                    <Image src={abImg7} width={556} height={316} alt="Earn points for Every Sign-up - SevakArmy" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <div className="wpo-event-details-area section-padding pt-0">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-12">
              <div className="wpo-event-item">
                <div className="wpo-event-img">
                </div>
                <div className="wpo-event-details-text mt-0">
                  <SectionTitle
                    subtitle="Earn Recognition"
                    title="Climb the Weekly, Monthly and Yearly Leaderboards"
                    paragarap="We offer leaderboards that refresh on a weekly, monthly and
                    yearly basis so you can track your performance in real-time
                    and see how you compare with other influencers."
                  />
                </div>
                <div className="wpo-event-details-wrap">
                  <div className="wpo-event-details-tab">
                    <ul className="nav nav-tabs">
                      <li className="nav-item">
                        <a
                          className={
                            activeTab === 0
                              ? "nav-link active w-100"
                              : "nav-link w-100"
                          }
                          onClick={() => handleTabClick(0)}
                        >
                          Weekly Leaderboard
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className={
                            activeTab === 1
                              ? "nav-link active w-100"
                              : "nav-link w-100"
                          }
                          onClick={() => handleTabClick(1)}
                        >
                          Monthly Leaderboard
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className={
                            activeTab === 2
                              ? "nav-link active w-100"
                              : "nav-link w-100"
                          }
                          onClick={() => handleTabClick(2)}
                        >
                          Yearly Leaderboard
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="wpo-event-details-content">
                    <div className="tab-content">
                      <div className={activeTab === 0 ? "active" : "hidden"}>
                        <div id="Schedule" className="tab-pane active w-100">
                          <LeaderboardTable
                            data={weeklyLeaderboard}
                            title="Weekly Leaderboard"
                          />
                        </div>
                      </div>
                      <div className={activeTab === 1 ? "active" : "hidden"}>
                        <div id="Map" className="tab-pane">
                          <LeaderboardTable
                            data={monthlyLeaderboard}
                            title="Monthly Leaderboard"
                          />
                        </div>
                      </div>
                      <div className={activeTab === 2 ? "active" : "hidden"}>
                        <div id="Contact" className="tab-pane">
                          <LeaderboardTable
                            data={yearlyLeaderboard}
                            title="Yearly Leaderboard"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="container section-padding pt-3 pt-1">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-12 col-12">
            <SectionTitle
              subtitle="Track Your Impact and Earn Recognition for Social Good"
              title="Lead the Change: Join SevakArmy Influencer Leaderboard"
            />
          </div>
        </div>
        <div className="service-wrap mt-0">
          <div className="row justify-content-center column-gappp gy-4 align-items-stretch pt-3">
            {Services.slice(0, 19).map((Service, sitem) => (
              <div
                className="col col-lg-4 col-md-6 col-sm-8 col-12"
                key={sitem}
              >
                <div className="service-card-wrapper d-flex flex-column h-100">
                  <ServiceCard
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
        <div className="w-100 d-flex justify-content-center align-items-center mt-5">
          <Link style={{ textTransform: 'none' }} to="https://app.sevakarmy.com/" target="_blank" className="theme-btn">
            Register and Start Inspiring Change
          </Link>
        </div>
      </div>

      <section className="wpo-cta-section section-padding">
        <div className="bg-overlay">
          <div className="container">
            <div className="bg-color">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="cta-wrap">
                    <h2 className="mb-2">SevakArmy Leaderboard</h2>
                    <p
                      className="text-center pt-2 px-2"
                      style={{ textAlign: "justify", color: "white" }}
                    >
                      Compete. Inspire. Lead!
                      Stay on top of the SevakArmy Leaderboard by making an impact! Earn points, climb the ranks, and become a leading voice for change. Invite more people, engage actively, and secure your spot among the top influencers driving meaningful action.
                    </p>
                    <div className="d-flex flex-column gap-3 justify-content-center align-items-center w-100">
                      <Link to="https://app.sevakarmy.com/" target="_blank" className="theme-btn" style={{ width: "fit-content" }}>
                        Become a Sevak
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

export default InfluencerLeaderboardPage;
