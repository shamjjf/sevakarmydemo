import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css";
import "swiper/css/navigation";

import icon from "../../../public/assets/images/cta/top-icon.png";
import abImg7 from "../../../public/assets/images1/volunteer/home/earn-points.webp";
import LeaderboardWorking from "../../../public/assets/images1/volunteer/home/volunteer-leaderboard.webp";
import Growth from "../../../public/assets/images1/volunteer/home/growth.webp";
import Boost from "../../../public/assets/images1/volunteer/home/boost.webp";
import Podium from "../../../public/assets/images1/volunteer/home/podium.webp";
import Certification from "../../../public/assets/images1/volunteer/home/certification.webp";
import GivingBack from "../../../public/assets/images1/volunteer/home/giving-back.webp";

import ServiceCard from "../ServiceSection/ServiceCard";
import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTitle";
import Image from "next/image";
import LeaderboardTable from "../LeaderboardTable";

const Services = [
  {
    Id: "01",
    sImg: Growth,

    title: "Track Your Progress in Real Time",
    slug: "1",
    description:
      "Each volunteer can log in to their profile and view their standing on the leaderboard. You will also receive regular email updates showing your rank and progress. These updates keep you motivated and informed as you continue contributing your time and skills to meaningful causes.",
  },
  {
    Id: "02",
    sImg: Boost,

    title: "Boost Your Rank with Referrals",
    slug: "2",
    description:
      "Help grow  SevakArmy by referring others to the platform. You will earn additional points that boost your position on the leaderboard for every person who registers as a volunteer through your referral link. It's a great way to encourage others to get involved while increasing your own impact.",
  },
  {
    Id: "03",
    sImg: Podium,

    title: "Why the Leaderboard Matters?",
    slug: "3",
    description:
      "SevakArmy Leaderboard isn’t just about competition - it’s about celebrating your dedication and contribution to social good. The more you volunteer, the higher you climb and the more recognition you earn for your efforts. Plus, it helps you set personal goals and stay motivated as you serve your community.",
  },
  {
    Id: "04",
    sImg: Certification,

    title: "Earn Badges and Certificates",
    slug: "4",
    description:
      "As you rise through the leaderboard, you’ll unlock e-badges and receive e-certificates for your achievements. These milestones recognise your commitment to volunteerism and can be shared on social media or added to your CV, showcasing your dedication to making a positive impact.",
  },
  {
    Id: "05",
    sImg: GivingBack,

    title: "Stay Motivated and Keep Giving Back",
    slug: "4",
    description:
      "Whether aiming for the top spot or just wanting to track your volunteer hours,  SevakArmy Leaderboard keeps you engaged and inspired. It’s more than just points - it’s about building a legacy of service and making a difference, one task at a time.",
  },
];

const weeklyLeaderboard = [
  {
    rank: 1,
    name: "Aarav Sharma",
    hours: 15,
    contributions: 3,
    lastContribution: "2024-10-14 09:30",
    badge: "Gold",
  },
  {
    rank: 2,
    name: "Vihaan Patel",
    hours: 12,
    contributions: 2,
    lastContribution: "2024-10-13 16:20",
    badge: "Silver",
  },
  {
    rank: 3,
    name: "Isha Gupta",
    hours: 10,
    contributions: 1,
    lastContribution: "2024-10-12 11:15",
    badge: "Bronze",
  },
].map((item) => ({
  ...item,
  badge: item.hours >= 15 ? "Gold" : item.hours >= 12 ? "Silver" : "Bronze",
}));

const monthlyLeaderboard = [
  {
    rank: 1,
    name: "Rohan Iyer",
    hours: 60,
    contributions: 10,
    lastContribution: "2024-10-14 14:50",
    badge: "Gold",
  },
  {
    rank: 2,
    name: "Neha Mehta",
    hours: 55,
    contributions: 9,
    lastContribution: "2024-10-10 12:35",
    badge: "Silver",
  },
  {
    rank: 3,
    name: "Anjali Kumar",
    hours: 50,
    contributions: 8,
    lastContribution: "2024-10-08 17:45",
    badge: "Bronze",
  },
].map((item) => ({
  ...item,
  badge: item.hours >= 55 ? "Gold" : item.hours >= 50 ? "Silver" : "Bronze",
}));

const yearlyLeaderboard = [
  {
    rank: 1,
    name: "Raj Malhotra",
    hours: 300,
    contributions: 50,
    lastContribution: "2024-09-30 18:00",
    badge: "Gold",
  },
  {
    rank: 2,
    name: "Priya Reddy",
    hours: 280,
    contributions: 48,
    lastContribution: "2024-09-25 15:30",
    badge: "Silver",
  },
  {
    rank: 3,
    name: "Dev Singh",
    hours: 250,
    contributions: 45,
    lastContribution: "2024-09-20 10:00",
    badge: "Bronze",
  },
].map((item) => ({
  ...item,
  badge: item.hours >= 300 ? "Gold" : item.hours >= 200 ? "Silver" : "Bronze",
}));

const VolunteerLeaderboardPage = (props) => {
  // const { slug } = useParams()

  // const EventDetails = events.find(item => item.slug === slug)

  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  // const SubmitHandler = (e) => {
  //     e.preventDefault()
  // }

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
        <div className="container section-padding">
          <div className="wpo-about-wrap">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-img">
                  {/* <div className="wpo-about-left">
                    <Image src={abImg5} alt="img" />
                  </div> */}
                  <div className="wpo-about-right pt-3">
                    <Image width={580} src={LeaderboardWorking} alt="Volunteers Leader Board - SevakArmy" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-text p-3 mt-0 pb-1 pb-lg-2 pt-1 pt-lg-2">
                  <div className="wpo-section-title mt-0">
                    {/* <div className="custom-panell"> */}
                    <h2 className="about-heading-second text-titleeee">
                      How SevakArmy Leaderboard Works
                    </h2>
                    {/* </div> */}
                  </div>
                  <h3>
                    Track Your Progress, Rise Through the Ranks and Earn
                    Rewards
                  </h3>
                  <p className="mb-0" style={{ textAlign: "justify" }}>
                    At SevakArmy, we believe in recognising and celebrating the
                    contributions of our volunteers. Our Leaderboard tracks your
                    progress, showing where you stand among other volunteers and
                    motivating you to continue making an impact. You will earn
                    points, e-badges and e-certificates as you complete more
                    tasks and serve your community.
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
                    <h2 className="about-heading-second text-titleeee">
                      Earn Points for Every Task{" "}
                    </h2>
                  </div>
                  <p style={{ textAlign: "justify" }}>
                    For every volunteer task you complete, you will earn points.
                    Different tasks have different point values based on their
                    difficulty, time commitment and impact. Whether helping
                    organise events, teaching or supporting environmental
                    initiatives, your points add up and push you higher on the
                    leaderboard.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-img">
                  {/* <div className="wpo-about-left">
                    <Image src={abImg5} alt="img" />
                  </div> */}
                  <div className="wpo-about-right pt-3">
                    <Image src={abImg7} width={556} height={316} alt="Earn points for Every Task - SevakArmy" />
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
                <div className="wpo-event-details-text mt-2">
                  <SectionTitle
                    subtitle="Climb the Leaderboards, Earn Recognition!"
                    title="Climb the Weekly, Monthly and Yearly Leaderboards"
                    paragarap="We have leaderboards that refresh on a weekly, monthly and yearly basis. You can track your performance in real-time and see how you compare to other volunteers."
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
          <div className="col-lg-6 col-md-12 col-12">
            <SectionTitle
              subtitle="Earn Points, Get Recognised"
              title="Track Your Impact with SevakArmy Leaderboard"
            />
          </div>
        </div>
        <div className="service-wrap mt-3">
          <div className="row justify-content-center column-gappp pt-3">
            {Services.slice(0, 19).map((Service, sitem) => (
              <div
                className="col col-lg-4 col-md-8 col-sm-6 col-12"
                key={sitem}
              >
                <div className="service-card-wrapper d-flex flex-column h-100">
                  <ServiceCard
                    width="313px"
                    // height="445px"
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
                    <h2 className="mb-2">Join the Leaderboard Today</h2>
                    <p
                      className="text-center pt-2 px-2"
                      style={{ textAlign: "justify", color: "white" }}
                    >
                      Become a SevakArmy volunteer and earn points for every
                      task you complete. Track your progress, climb the ranks,
                      and gain recognition for the meaningful work you do.
                    </p>
                    <div className="d-flex flex-column gap-3 justify-content-center align-items-center w-100">
                      <span>Register Now and Start Volunteering</span>
                      <Link
                        to="https://app.sevakarmy.com/" target="_blank"
                        className="theme-btn"
                        style={{ width: "fit-content", textTransform: 'none' }}
                      >
                        Join as a Volunteer and Track Your Impact
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

export default VolunteerLeaderboardPage;
