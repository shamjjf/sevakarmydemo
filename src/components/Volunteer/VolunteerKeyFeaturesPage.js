import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css";
import "swiper/css/navigation";

import ServiceCard from "../ServiceSection/ServiceCard";
import SectionTitle from "../SectionTitle/SectionTitle";
import Reward from "../../../public/assets/images1/volunteer/opportunities/reward.png";

// import icon from "../../../public/assets/images/cta/top-icon.png";
// import Image from "next/image";

// All images imports are here
import kImg1 from "../../../public/assets/images1/volunteer/feature/ngo.webp";
import kImg2 from "../../../public/assets/images1/volunteer/feature/project.webp";
import kImg3 from "../../../public/assets/images1/volunteer/feature/volunteer.webp";
import kImg4 from "../../../public/assets/images1/volunteer/feature/impact.webp";
import kImg6 from "../../../public/assets/images1/volunteer/feature/chat.webp";
import kImg7 from "../../../public/assets/images1/influencer/features/community-building.webp";
import kImg8 from "../../../public/assets/images1/volunteer/feature/add-friend.webp";
import kImg9 from "../../../public/assets/images1/volunteer/feature/certificate.webp";
import kImg10 from "../../../public/assets/images1/volunteer/feature/rate.webp";


const Services = [
  {
    Id: "01",
    sImg: kImg1,

    title: "Work with Verified NGOs",
    slug: "1",
    description:
      "We make sure all the NGOs on our platform are trustworthy and verified. This means your time and skills are spent on genuine causes that need your help, so you know your efforts are making a difference.",
  },
  {
    Id: "02",
    sImg: kImg2,

    title: "Find Tasks that Match Your Skills",
    slug: "2",
    description:
      "We offer a variety of tasks that suit your skills and interests - whether you want to teach, organise events, help with community work, or support environmental projects. You can easily search for tasks that fit what you enjoy and have time for.",
  },
  {
    Id: "03",
    sImg: kImg3,

    title: "Volunteer when it’s Convenient for You",
    slug: "3",
    description:
      "With Sevak Army, you can volunteer at your own pace. Whether you have just a few hours or want to help regularly, we have tasks that fit your schedule. Volunteering has never been this flexible!",
  },
  {
    Id: "04",
    sImg: kImg4,

    title: "See Your Impact",
    slug: "4",
    description:
      "Our platform allows you to track your progress. You can log your hours, see your completed tasks and track how you’re making a difference over time. This helps you stay motivated and see the positive effects of your work.",
  },
  {
    Id: "05",
    sImg: Reward,

    title: "Earn Points, Badges and Certificates",
    slug: "4",
    description:
      "Every time you complete a task, you earn points that lead to e-badges and e-certificates. These show your achievements and can be shared with others. It’s a great way to be recognised for your hard work and commitment.",
  },
  {
    Id: "06",
    sImg: kImg6,

    title: "Chat Directly with NGOs",
    slug: "4",
    description:
      "Once you are chosen for a task, you can chat directly with the NGO to coordinate and get updates. This makes communication easier and helps everything run smoothly, so you know exactly what’s needed.",
  },
  {
    Id: "07",
    sImg: kImg7,

    title: "Be Part of a Supportive Community",
    slug: "4",
    description:
      "Sevak Army is more than just a platform - it’s a community. You’ll connect with like-minded volunteers and NGOs who are all passionate about making a difference. You will never feel alone in your mission to help others.",
  },
  {
    Id: "08",
    sImg: kImg8,

    title: "Invite Friends and Earn Points",
    slug: "4",
    description:
      "Do you know someone who would like to volunteer, too? Invite them to join Sevak Army and you’ll earn points for each person who signs up. It’s a great way to expand our community and get rewarded for it!",
  },
  {
    Id: "09",
    sImg: kImg9,

    title: "Get e-Certificates for Your Contributions",
    slug: "4",
    description:
      "You will receive a certificate for every task you finish that recognises your contribution. These e-certificates add value to your personal and professional profile and show your dedication to social causes.",
  },
  {
    Id: "10",
    sImg: kImg10,

    title: "Rate Your Experience with NGOs",
    slug: "4",
    description:
      "Share your feedback after each task. Help improve the volunteering experience and guide others by rating the NGO you worked with.",
  },
];

const VolunteerKeyFeaturesPage = (props) => {
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
            <SectionTitle subtitle="Empower Your Impact, Connect with Purpose!" title="Key Features of Sevak Army" paragarap=" Here’s what makes our platform stand out and why it’s the right
            choice for you." />
          </div>
        </div>
        <div className="service-wrap mt-3">
          {/* <p className="w-100 text-center pt-3 pb-3 fs-4">
            Here’s what makes our platform stand out and why it’s the right
            choice for you.
          </p> */}
          <div className="row justify-content-center column-gappp">
            {Services.slice(0, 10).map((Service, sitem) => (
              <div
                className="col col-xl-4 col-lg-5 col-md-6 col-sm-8 col-12"
                key={sitem}
              >
                <div className="service-card-wrapper d-flex flex-column h-100">
                  <ServiceCard
                    // width="313px"
                    // height="418px"
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
                    <h2>Join Sevak Army Today</h2>
                    <p
                      className="text-center pt-2 px-2"
                      style={{ textAlign: "justify", color: "white" }}
                    >
                      Start your volunteer journey with us and be part of a
                      platform that’s changing lives for a better future.
                    </p>
                    <div className="d-flex flex-column gap-3 justify-content-center align-items-center w-100">
                      <Link
                       to="https://app.sevakarmy.com/" target="_blank"
                        className="theme-btn"
                        style={{ width: "fit-content", textTransform:'none' }}
                      >
                        Become a Volunteer Now
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

export default VolunteerKeyFeaturesPage;
