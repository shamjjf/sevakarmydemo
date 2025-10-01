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

import Path from "../../../public/assets/new-images/school-college/key-features/home.jpg";
import Reward from "../../../public/assets/images1/volunteer/opportunities/reward.webp";
import fImg1 from "../../../public/assets/images1/school-college/benefits/encourage.webp";
import fImg2 from "../../../public/assets/images1/school-college/features/share-link.webp";
import fImg3 from "../../../public/assets/images1/school-college/features/history.webp";
import fImg4 from "../../../public/assets/images1/school-college/features/leaderboard.webp";
import fImg6 from "../../../public/assets/images1/school-college/features/csr.webp";
import fImg7 from "../../../public/assets/images1/school-college/features/volunteer.webp";
import fImg8 from "../../../public/assets/images1/school-college/features/social-media.webp";
import fImg9 from "../../../public/assets/images1/school-college/features/benefit.webp";
import fImg10 from "../../../public/assets/images1/school-college/features/connection.webp";


const Services = [
  {
    Id: "01",
    sImg: fImg1,

    title: "Encourage Student Involvement ",
    slug: "1",
    description:
      "Inspire students to engage in impactful social work and make a difference in their communities by joining volunteer projects.",
  },
  {
    Id: "02",
    sImg: fImg2,

    title: "Personalised Referral Link",
    slug: "2",
    description:
      "Receive a unique link for your institution to share with students, making it easy for them to register as volunteers on Sevak Army.",
  },
  {
    Id: "03",
    sImg: fImg3,

    title: "Track Volunteer Hours and Achievements",
    slug: "3",
    description:
      "Monitor students' contributions through a streamlined dashboard that tracks volunteer hours, completed tasks and overall impact.",
  },
  {
    Id: "04",
    sImg: fImg4,

    title: "Leaderboard for Institutions",
    slug: "4",
    description:
      "Boost healthy competition with an exclusive leaderboard for schools/colleges, showcasing top student contributors and recognising active institutions.",
  },
  {
    Id: "05",
    sImg: Reward,

    title: "Recognition and Certificates",
    slug: "4",
    description:
      "Students earn digital certificates and digital badges for their volunteer work, providing official recognition that they can add to their portfolios or CVs. ",
  },
  {
    Id: "06",
    sImg: fImg6,

    title: "Support CSR Goals",
    slug: "4",
    description:
      "Colleges can fulfil CSR requirements by promoting social responsibility among students and encouraging participation in meaningful causes.",
  },
  {
    Id: "07",
    sImg: fImg7,

    title: "Flexible Volunteering Options",
    slug: "4",
    description:
      "NGOs may offer students a variety of tasks, both virtual and on-site, making it convenient for them to volunteer regardless of their schedules.",
  },
  {
    Id: "08",
    sImg: fImg8,

    title: "Social Media Recognition",
    slug: "4",
    description:
      "Institutions receive positive visibility when students reach volunteering milestones, boosting the school/college’s community-oriented reputation.",
  },
  {
    Id: "09",
    sImg: fImg9,

    title: "Points and Rewards for Students",
    slug: "4",
    description:
      "Students earn points for each completed task, appearing on leaderboards and motivating them to stay active in their volunteer roles.",
  },
  {
    Id: "10",
    sImg: fImg10,

    title: "Build a Strong Community Connection",
    slug: "4",
    description:
      "Strengthen ties with NGOs and community projects, helping your institution contribute to the well-being of society and foster a culture of giving back.",
  },
];

const SchoolCollegeFeaturesPage = (props) => {
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
      <section className="wpo-about-section pt-0 pb-0">
        <div className="container section-padding mt-3 pb-0">
          <div className="wpo-about-wrap">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-img">
                  {/* <div className="wpo-about-left">
                    <Image src={abImg5} alt="img" />
                  </div> */}
                  <div className="wpo-about-right pt-0">
                    <Image src={Path} width={556} height={371} alt="Sevak Army - Connecting Students with Impactful Opportunities" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-text p-3 pt-0 mt-0 pb-1">
                  <div className="wpo-section-title mt-0 mb-3">
                    <span>Key Features </span>
                    <h2 className="about-heading-second text-titleeee">
                      Sevak Army: Connecting Students with Impactful Opportunities
                    </h2>
                  </div>
                  <p className="mt-0 pt-0 mb-0" style={{ textAlign: "justify" }}>
                    Sevak Army for schools and colleges offers a platform that connects students with meaningful
                    volunteering opportunities through NGOs and community organisations. It allows institutions to
                    engage their students in tasks that range from teaching support, event organisation, to food
                    collection drives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container section-padding">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-12 col-12">
            <SectionTitle subtitle="Sevak Army Features" title="Key Features for Schools/Colleges on Sevak Army" />
          </div>
        </div>
        <div className="service-wrap mt-3">
          <div className="row justify-content-center  align-items-stretch gy-4">
            {Services.slice(0, 10).map((Service, sitem) => (
              <div className="col col-xl-4 col-lg-5 col-md-6 col-sm-8 col-10" key={sitem}>
                <div className="service-card-wrapper d-flex flex-column h-100">
                  <ServiceCard
                    // width="313px"
                    // height="425px"
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
                    <h2 className="mb-2">Join Sevak Army Today</h2>
                    <p className="text-center pt-2 px-2" style={{ textAlign: "justify", color: "white" }}>
                      Start building a generation of leaders with Sevak Army. Engage your students in meaningful
                      volunteer projects, enhance their skills and inspire positive change in communities.
                    </p>
                    <div className="d-flex flex-column gap-3 justify-content-center align-items-center w-100">
                      <span>Empower Your Students to Make a Real Impact in Society</span>
                      <Link
                        to="https://app.sevakarmy.com/" target="_blank"
                        className="theme-btn"
                        style={{ width: "fit-content" }}
                      >
                        Get Started Now
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

export default SchoolCollegeFeaturesPage;
