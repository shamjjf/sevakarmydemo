import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css";
import "swiper/css/navigation";

// import icon from "../../../public/assets/images/cta/top-icon.png";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ServiceCard from "../../components/ServiceSection/ServiceCard";

import Reward from "../../../public/assets/images1/volunteer/opportunities/reward.webp";
import kImg1 from "../../../public/assets/images1/influencer/features/share-link.webp";
import kImg2 from "../../../public/assets/images1/influencer/features/shuttle.webp";
import kImg3 from "../../../public/assets/images1/influencer/features/ngo.webp";
import kImg4 from "../../../public/assets/images1/influencer/features/volunteering.webp";
import kImg6 from "../../../public/assets/images1/influencer/features/reward.webp";
import kImg7 from "../../../public/assets/images1/influencer/features/community-building.webp";
import kImg8 from "../../../public/assets/images1/influencer/features/chat.webp";
import kImg9 from "../../../public/assets/images1/influencer/features/recognition.webp";
import kImg10 from "../../../public/assets/images1/influencer/features/invitation.webp";

const Services = [
  {
    Id: "01",
    sImg: kImg1,

    title: "Inspire Action with Your Unique Referral Link",
    slug: "1",
    description:
      "You’ll receive a personalised referral link that makes it easy for your followers to join  SevakArmy. Each volunteer who signs up through your link contributes to positive change and you can track the collective impact of your community.",
  },
  {
    Id: "02",
    sImg: kImg2,

    title: "Boost Your Social Impact",
    slug: "2",
    description:
      "By encouraging your followers to volunteer, you’ll enhance your role as a changemaker. You’re not just influencing trends; you’re influencing real-world change, contributing to causes that matter and strengthening your community’s bond.",
  },
  {
    Id: "03",
    sImg: kImg3,

    title: "Engage with Verified NGOs",
    slug: "3",
    description:
      "Your followers will have peace of mind knowing they are working with verified, trustworthy NGOs. Each NGO is checked to ensure that their time and skills are used to support real causes that make a difference.",
  },
  {
    Id: "04",
    sImg: kImg4,

    title: "Tailor Volunteering to Your Followers’ Skills",
    slug: "4",
    description:
      "Your followers can find volunteer tasks that align with their talents and passions. Whether they are teachers, event planners, environmentalists or, simply passionate about helping, there’s something for everyone to get involved in.",
  },
  {
    Id: "05",
    sImg: Reward,

    title: "Track Your Influence and Impact",
    slug: "4",
    description:
      "SevakArmy provides tools for you to see how many followers have joined and contributed through your referral link. This gives you tangible results of your influence and helps you grow your status as a leader in driving social good.",
  },
  {
    Id: "06",
    sImg: kImg6,

    title: "Reward Your Efforts",
    slug: "4",
    description:
      "Every time a follower completes a task through your link, both you and your follower earn points. These points lead to digital badges, digital certificates and more, showcasing your collective efforts in creating positive change.",
  },
  {
    Id: "07",
    sImg: kImg7,

    title: "Be Part of a Purpose-driven Community",
    slug: "4",
    description:
      "Join a network of like-minded influencers and volunteers dedicated to making a difference. You’ll be part of a supportive community that values social responsibility and change-making efforts.",
  },
  {
    Id: "08",
    sImg: kImg8,

    title: "Easily Communicate with NGOs",
    slug: "4",
    description:
      "Your followers can communicate directly with NGOs once they register as volunteers and are accepted for a task, ensuring smooth coordination. This helps them stay connected and informed, leading to better volunteer experiences.",
  },
  {
    Id: "09",
    sImg: kImg9,

    title: "Earn Recognition as a Changemaker",
    slug: "4",
    description:
      "As your followers continue to join and volunteer through your link, you’ll be recognised as an influencer driving social impact. This boosts your brand and builds deeper trust and loyalty with your audience.",
  },
  {
    Id: "10",
    sImg: kImg10,

    title: "Amplify Your Reach by Inviting More Followers",
    slug: "4",
    description:
      "You can easily invite more followers to join  SevakArmy through your link, expanding your network of change agents. The more people you inspire to volunteer, the greater your influence and rewards.",
  },
];

const InfluencerKeyFeaturesPage = (props) => {
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
              subtitle="Key Features"
              title="Key Features for Influencers on SevakArmy"
            />
          </div>
        </div>
        <div className="service-wrap">
          <p className="w-100 text-center pb-2 pt-2 fs-4 p-1">
            Here’s what makes SevakArmy the ideal platform for influencers:
          </p>
          <div className="row justify-content-center column-gappp gy-2 align-items-stretch">
            {Services.slice(0, 10).map((Service, sitem) => (
              <div
                className="col col-xl-4 col-lg-5 col-md-6 col-sm-8 col-10"
                key={sitem}
              >
                <div className="service-card-wrapper d-flex flex-column h-100">
                  <ServiceCard
                    // width="313px"
                    // height="495px"
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
                    <h2 className="mb-2">
                      {" "}
                      Join  SevakArmy and Inspire Your Followers Today!
                    </h2>
                    <p
                      className="text-center pt-2 px-2"
                      style={{ textAlign: "justify", color: "white" }}
                    >
                      Encourage your followers to take action, volunteer and
                      make a difference. Share your personal referral link and
                      be a part of transforming communities across India.
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
  );
};

export default InfluencerKeyFeaturesPage;
