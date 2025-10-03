import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css";
import "swiper/css/navigation";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ServiceCard from "../../components/ServiceSection/ServiceCard";

// import Path from "../../../public/assets/images1/volunteer/home/path.png";
import Path from "../../../public/assets/images1/volunteer/home/benefit.webp";

import cImg1 from "../../../public/assets/images1/school-college/benefits/encourage.webp";
import cImg2 from "../../../public/assets/images1/school-college/benefits/experience.webp";
import cImg3 from "../../../public/assets/images1/school-college/benefits/time.webp";
import cImg4 from "../../../public/assets/images1/school-college/benefits/recognition.webp";
import cImg5 from "../../../public/assets/images1/school-college/benefits/register.webp";
import cImg6 from "../../../public/assets/images1/school-college/benefits/volunteering.webp";
import cImg7 from "../../../public/assets/images1/school-college/benefits/diagram.webp";
import cImg8 from "../../../public/assets/images1/school-college/benefits/reward.webp";
import cImg9 from "../../../public/assets/images1/school-college/benefits/award-symbol.webp";
import cImg10 from "../../../public/assets/images1/school-college/benefits/build.webp";
import cImg11 from "../../../public/assets/images1/school-college/benefits/marketing.webp";
import cImg12 from "../../../public/assets/images1/school-college/benefits/tracking.webp";
import cImg13 from "../../../public/assets/images1/school-college/benefits/institution.webp";
import cImg14 from "../../../public/assets/images1/school-college/benefits/shuttle.webp";
import cImg15 from "../../../public/assets/images1/school-college/benefits/job.webp";
import cImg16 from "../../../public/assets/images1/school-college/benefits/expand.webp";
import cImg17 from "../../../public/assets/images1/school-college/benefits/ngo.webp";
import cImg18 from "../../../public/assets/images1/school-college/benefits/foster-family.webp";
import cImg19 from "../../../public/assets/images1/school-college/benefits/community-building.webp";
import cImg20 from "../../../public/assets/images1/school-college/benefits/encouragement.webp";
// import icon from "../../../public/assets/images/cta/top-icon.png";

const Services = [
  {
    Id: "01",
    sImg: cImg1,

    title: "Encourage Student Engagement",
    slug: "1",
    description:
      "Engage students in impactful community service, promoting a culture of responsibility and social contribution.",
  },
  {
    Id: "02",
    sImg: cImg2,

    title: "Real-World Experience",
    slug: "2",
    description:
      "Provide students with practical experience through diverse tasks like event management and community projects, helping them gain valuable skills.",
  },
  {
    Id: "03",
    sImg: cImg3,

    title: "Efficient Task Tracking",
    slug: "3",
    description:
      "Schools and colleges can easily monitor ongoing tasks, ensuring effective management of student activities.",
  },
  {
    Id: "04",
    sImg: cImg4,

    title: "Recognition and Motivation",
    slug: "4",
    description:
      "With gamified features like leaderboards, students are recognised for their contributions, motivating higher participation and enthusiasm.",
  },
  {
    Id: "05",
    sImg: cImg5,

    title: "Register with SevakArmy",
    slug: "5",
    description:
      "Institutions can register seamlessly, encouraging students to volunteer in a wide range of volunteering tasks.",
  },
  {
    Id: "06",
    sImg: cImg6,

    title: "Flexible Volunteering",
    slug: "6",
    description:
      "Students can choose tasks that align with their interests and fit within their academic schedules, enabling balanced participation.",
  },
  {
    Id: "07",
    sImg: cImg7,

    title: "Grow Student Engagement in Community",
    slug: "7",
    description:
      "Encourage students to join community projects across sectors like education, healthcare and the environment, fostering a sense of social responsibility.",
  },
  {
    Id: "08",
    sImg: cImg8,

    title: "Earn Points and Track Progress on the Leaderboard",
    slug: "8",
    description:
      "Every completed task contributes points to your institution’s ranking on SevakArmy’s leaderboard. More engagement leads to a higher institutional rank!",
  },
  {
    Id: "09",
    sImg: cImg9,

    title: "Award Students with digital Badges and digital Certificates",
    slug: "9",
    description:
      "Recognise student achievements with digital badges and digital certificates, adding motivation to their volunteer journey.",
  },
  {
    Id: "10",
    sImg: cImg10,

    title: "Build a Culture of Changemakers",
    slug: "10",
    description:
      "Inspiring students to volunteer reflects your institution’s commitment to social responsibility, positioning you as a leader in community service.",
  },
  {
    Id: "11",
    sImg: cImg11,

    title: "Create a Purpose-Driven Campus Culture",
    slug: "11",
    description:
      "Promote a campus environment where students work together on meaningful causes, building lifelong values and relationships.",
  },
  {
    Id: "12",
    sImg: cImg12,

    title: "Track Collective Impact Easily",
    slug: "12",
    description:
      "Use SevakArmy’s platform to monitor student participation, completed tasks and the overall community impact created by your institution.",
  },
  {
    Id: "13",
    sImg: cImg13,

    title: "Get Recognised for Institutional Contributions",
    slug: "13",
    description:
      "Gain recognition for your institution’s social impact as students complete tasks, showcasing your role in driving positive change.",
  },
  {
    Id: "14",
    sImg: cImg14,

    title: "Boost Your Institution’s Reputation for Social Engagement",
    slug: "14",
    description:
      "Supporting student volunteering enhances your institution’s image as a socially responsible educational entity.",
  },
  {
    Id: "15",
    sImg: cImg15,

    title: "Offer Students Practical Real-World Experience",
    slug: "15",
    description:
      "Enable students to develop hands-on skills through volunteer roles that complement their academic learning.",
  },
  {
    Id: "16",
    sImg: cImg16,

    title: "Expand Influence Beyond the Classroom",
    slug: "16",
    description:
      "Connecting students with real-world causes expands your institution’s impact beyond academics, nurturing well-rounded, socially conscious graduates.",
  },
  {
    Id: "17",
    sImg: cImg17,

    title: "Connect Students with Trusted NGOs",
    slug: "17",
    description:
      "Partner students with verified NGOs through SevakArmy, ensuring their efforts go to impactful, trustworthy causes.",
  },
  {
    Id: "18",
    sImg: cImg18,

    title: "Foster Lasting Positive Change in Communities",
    slug: "18",
    description:
      "Each student’s volunteer work strengthens communities, allowing your institution to make a meaningful social impact.",
  },
  {
    Id: "19",
    sImg: cImg19,

    title: "Strengthen Your Institution’s Social Responsibility Profile",
    slug: "18",
    description:
      "Consistently promoting community involvement positions your school or college as a champion of social responsibility.",
  },
  {
    Id: "20",
    sImg: cImg20,

    title: "Encourage and Recognise Student Leadership",
    slug: "18",
    description:
      "Motivate students to take on leadership roles through volunteer initiatives, nurturing them as compassionate, active citizens.",
  },
];

const SchoolCollegeBenefitsPage = (props) => {
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
      <section className="wpo-about-section pt-0">
        <div className="container section-padding pt-5 pb-0">
          <div className="wpo-about-wrap">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-img">
                  {/* <div className="wpo-about-left">
                    <Image src={abImg5} alt="img" />
                  </div> */}
                  <div className="wpo-about-right pt-3">
                    <Image src={Path} alt="Benefits to Register Your Institute - SevakArmy" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-text p-3 mt-0 pb-1 pb-lg-2 pt-1 pt-lg-2">
                  <div className="wpo-section-title mt-0 mb-3">
                    <span>Benefits</span>
                    <h2 className="about-heading-second text-titleeee">
                      Benefits to Register Your Institute
                    </h2>
                  </div>
                  <p className="mt-0 pt-0" style={{ textAlign: "justify" }}>
                    SevakArmy offers schools and colleges a platform to
                    register and connect students with meaningful volunteer
                    opportunities. By registering with SevakArmy,
                    institutions can provide students with real-world
                    experiences that foster leadership, teamwork and social
                    responsibility. This platform simplifies the process of
                    engaging students in community service while tracking their
                    progress and recognising their efforts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container section-padding">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-12 col-12">
            <SectionTitle subtitle="Inspiring Social Responsibility" title="Empowering Students to Make a Real Impact" />
          </div>
        </div>
        <div className="service-wrap mt-3">
          <div className="row justify-content-center  align-items-stretch gy-4">
            {Services.slice(0, 20).map((Service, sitem) => (
              <div
                className="col col-xl-4 col-lg-5 col-md-6 col-sm-8 col-10"
                key={sitem}
              >
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
                    <h2 className="mb-2">Benefits for Schools & Colleges</h2>
                    <p
                      className="text-center pt-2 px-2"
                      style={{ textAlign: "justify", color: "white" }}
                    >
                      Partner with SevakArmy and empower students to lead, serve, and create impact!
                      Our volunteer programs provide hands-on learning, leadership development, and community engagement opportunities—enhancing student resumes while fostering a culture of social responsibility.
                    </p>
                    <div className="d-flex flex-column gap-3 justify-content-center align-items-center w-100">
                      <Link to="https://app.sevakarmy.com/" target="_blank" onClick={ClickHandler}>
                        <button className="theme-btn" style={{ width: "fit-content" }}>
                          Partner with Us
                        </button>
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

export default SchoolCollegeBenefitsPage;
