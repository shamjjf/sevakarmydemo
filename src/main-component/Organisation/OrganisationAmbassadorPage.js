import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css";
import "swiper/css/navigation";

import ServiceCard from "../../components/ServiceSection/ServiceCard";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

// import Path from "../../../public/assets/images1/volunteer/home/path.png";
import Path from "../../../public/assets/new-images/organizations/ambassador-hero-section.jpg";
import Path2 from "../../../public/assets/images1/volunteer/home/ambassador.webp";
import School from "../../../public/assets/images1/volunteer/home/school.webp";
import Sustainability from "../../../public/assets/images1/volunteer/home/sustainability.webp";
import Donation from "../../../public/assets/images1/volunteer/home/food-donation.webp";

// import icon from "../../../public/assets/images/cta/top-icon.webp";
import Img1 from "../../../public/assets/images/service-single/awareness.webp";
import Img2 from "../../../public/assets/images/service-single/social-support.webp";
import Img3 from "../../../public/assets/images/service-single/school.webp";
import Img4 from "../../../public/assets/images/service-single/csr-initiatives-3.webp";
import rImg1 from "../../../public/assets/images1/school-college/ambassador/leadership.webp";
import rImg2 from "../../../public/assets/images1/school-college/ambassador/coordination.webp";
import rImg3 from "../../../public/assets/images1/school-college/ambassador/volunteer.webp";

const Services = [
  {
    Id: "01",
    sImg: rImg1,

    title: "Spread the Word",
    slug: "1",
    description:
      "Encourage colleagues to join SevakArmy through your organisation’s referral link. Share the benefits of volunteering and inspire team involvement.",
  },
  {
    Id: "02",
    sImg: rImg2,

    title: "Track Progress",
    slug: "2",
    description:
      "Monitor your team’s volunteer hours and completed tasks to help meet CSR targets and boost your organisation’s leaderboard ranking.",
  },
  {
    Id: "03",
    sImg: rImg3,

    title: "Celebrate Achievements",
    slug: "3",
    description:
      "Recognise and celebrate team successes, from digital badges and digital certificates to leaderboard positions, highlighting their positive community impact.",
  },
];

// const Services2 = [
//     {
//         Id: "01",
//         sImg: rImg1,
//         
//         title: "Leadership Recognition",
//         slug: "1",
//         description:
//             "Stand out as a CSR leader within your organisation.",
//     },
//     {
//         Id: "02",
//         sImg: rImg5,
//         
//         title: "Gain Recognition and e-certification",
//         slug: "2",
//         description:
//             "Ambassadors receive official e-certificates of recognition for their contribution to  SevakArmy platform and their role in promoting volunteerism. This recognition not only enhances their resumes but also showcases their commitment to community service.",
//     },
//     {
//         Id: "03",
//         sImg: erImg3,
//         
//         title: "Inspire Change in Others",
//         slug: "3",
//         description:
//             "As role models within their schools or colleges, ambassadors inspire their peers to join volunteer efforts, create a culture of giving and positively influence their local communities. They can play an essential role in changing the lives of others while developing their own sense of purpose.",
//     },
//     {
//         Id: "04",
//         sImg: erImg4,
//         
//         title: "Exclusive Opportunities",
//         slug: "4",
//         description:
//             "Outstanding ambassadors may be publicly acknowledged and recognised for their contributions. They may be invited to special events or forums where they can network with like-minded individuals, NGOs and professionals from different fields, further enhancing their experience and exposure.",
//     },
// ];

const featuresData = [
  {
    iconClass: "flaticon-volunteer",
    img: Img1,
    title: "Leadership Recognition",
    description: "Stand out as a CSR leader within your organisation.",
  },
  {
    iconClass: "flaticon-solidarity",
    title: "Professional Growth",
    img: Img2,
    description: "Develop leadership, communication and team-building skills.",
  },
  {
    iconClass: "flaticon-charity",
    img: Img3,
    title: "Exclusive Perks",
    description:
      "Ambassadors receive digital badges, digital certificates and rewards for driving CSR success.",
  },
  {
    iconClass: "flaticon-charity",
    img: Img4,
    title: "Influence on CSR Initiatives",
    description:
      "Shape how your organisation approaches CSR by inspiring colleagues to contribute.",
  },
];

const OrganisationAmbassadorPage = (props) => {
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
        <div className="container section-padding pt-5 pb-0">
          <div className="wpo-about-wrap">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-img">
                  {/* <div className="wpo-about-left">
                    <Image src={abImg5} alt="img" />
                  </div> */}
                  <div className="wpo-about-right pt-3">
                    <Image src={Path} alt="Ambassador Programm - Choose Your SevakArmy Ambassador" height={350} />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-text p-3 mt-0 pb-1 pb-lg-2 pt-1 pt-lg-2 pb-0">
                  <div className="wpo-section-title mt-0 mb-3">
                    {/* <span>Benefits</span> */}
                    <h2 className="about-heading-second text-titleeee">
                      Ambassador Programme: Choose Your SevakArmy Ambassador
                    </h2>
                  </div>
                  <h3>
                    Lead the Way in Social Impact and Corporate Responsibility
                  </h3>
                  <p className="mt-0 pt-0 mb-0" style={{ textAlign: "justify" }}>
                    Select a dedicated member of your team to drive your
                    organisation’s Corporate Social Responsibility (CSR) efforts
                    as a SevakArmy Ambassador. Our Ambassador Programme is
                    designed for employees who are ready to set an example and
                    take your organisation’s CSR goals further.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wpo-about-section pt-0">
        <div className="container section-padding pt-5">
          <div className="wpo-about-wrap">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-text p-3 pt-0 pt-md-3 mt-0 pb-0">
                  <div className="wpo-section-title mt-0 mb-3">
                    {/* <span>Benefits</span> */}
                    <h2 className="about-heading-second mb-0">
                      Why Choose an Ambassador?
                    </h2>
                  </div>
                  <div className="mt-0 pt-0 mb-0" style={{ textAlign: "justify" }}>
                    <p className="mb-0">Appointing a SevakArmy Ambassador gives your organisation a
                      committed leader to promote social impact. An Ambassador
                      will:</p>
                    <p className="mb-1 mt-1">
                      <b>Inspire Colleagues: </b> Lead by example, encouraging
                      others to get involved in volunteering activities that
                      align with your organisation’s values.
                    </p>
                    <p className="mb-1">
                      <b>Boost CSR Success: </b> Help reach CSR goals by
                      promoting volunteering opportunities and increasing team
                      participation.
                    </p>
                    <p className="mb-1">
                      <b>Earn Recognition: </b> Ambassadors earn digital badges,
                      digital certificates and points for each completed
                      volunteer task, showcasing your organisation’s
                      contribution.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-img">
                  {/* <div className="wpo-about-left">
                    <Image src={abImg5} alt="img" />
                  </div> */}
                  <div className="wpo-about-right pt-3 pt-lg-5">
                    <Image src={Path2} width={556} height={371} alt="Why Choose an Ambassador over SevakArmy" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container section-padding pt-0">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-12 col-12">
            <SectionTitle
              subtitle=""
              title="Ambassador Responsibilities"
              paragarap="As a SevakArmy Ambassador, the selected employee will:"
            />
          </div>
        </div>
        <div className="service-wrap mt-4">
          <div className="row justify-content-center align-items-stretch gy-4">
            {Services.slice(0, 10).map((Service, sitem) => (
              <div
                className="col col-xl-4 col-lg-5 col-md-6 col-sm-8 col-10"
                key={sitem}
              >
                <div className="service-card-wrapper d-flex flex-column h-100">
                  <ServiceCard
                    // width="313px"
                    // height="365px"
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

      <div className="container section-padding pt-0">
        <div className="row justify-content-center mb-2">
          <div className="col-lg-6 col-md-12 col-12">
            <SectionTitle
              subtitle=""
              title="Ambassador Benefits"
              paragarap="Ambassadors gain unique rewards, including:"
            />
          </div>
        </div>
        {/* <div className="service-wrap mt-3">
                    <div className="row justify-content-center column-gappp">
                        {Services2.slice(0, 10).map((Service, sitem) => (
                            <div
                                className="col col-xl-4 col-lg-5 col-md-6 col-sm-8 col-10"
                                key={sitem}
                            >
                                <div className="service-card-wrapper d-flex flex-column h-100">
                                    <ServiceCard
                                        width="313px"
                                        height="472px"
                                        title={Service.title}
                                        img={Service.sImg}
                                        slug={Service.slug}
                                        sdescription={Service.description}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div> */}
        <div className="wpo-features-area mt-0 pt-2">
          <div className="container">
            <div className="features-wrap">
              <div className="row justify-content-center gap-3">
                {featuresData.map((feature, index) => (
                  <div className="col col-lg-5 col-md-8 col-12" key={index}>
                    <div className="feature-item-wrap">
                      <div
                        className="feature-item"
                        style={{ alignItems: "center" }}
                      >
                        <div className="feature-icon">
                          <div className="icon">
                            <Image src={feature.img} width={100} className="h-[40px]" alt="Features" />
                          </div>
                        </div>
                        <div className="feature-text">
                          <h2 className="fs-5">{feature.title}</h2>
                          <p className="fs-6">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="container section-padding pt-0 mt-lg-3">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-12 col-12">
            <SectionTitle subtitle="Inspire and Engage Peers in volunteering" title="How to Choose an Ambassador?" />
          </div>
        </div>
        <div className="mt-3">
          <section className={" wpo-fun-fact-section-s3 pb-0"}>
            <div className="container mt-3">
              <div className="service-wrap">
                <div className="row justify-content-center gap-3">
                  <div className="service-item px-4 py-4 col-xl-3 col-lg-4 col-md-7 col-sm-8 col-11 sevak-custom-carddd mb-1">
                    <div className="info d-flex flex-column justify-content-center flex-no-wrap">
                      <div className="w-100 d-flex py-4 justify-content-center">
                        <div className="icon">
                          <Image src={School} width={60} alt="img" />
                        </div>
                      </div>
                      <h2 className="text-center">Register</h2>
                      <p
                        className="w-100 text-center ms-0"
                        style={{ maxWidth: "100%" }}
                      >
                        Register your organisation on SevakArmy or encourage
                        employees to join if you’re already registered.
                      </p>
                    </div>
                  </div>
                  <div className="service-item px-4 py-4 col-xl-3 col-lg-4 col-md-7 col-sm-8 col-11 sevak-custom-carddd mb-1">
                    <div className="info d-flex flex-column justify-content-center flex-no-wrap">
                      <div className="w-100 d-flex py-4 justify-content-center">
                        <div
                          className="icon"
                          style={{
                            backgroundColor: "#FFFCF4",
                            border: "1px solid #EBB011",
                          }}
                        >
                          <Image src={Sustainability} width={60} alt="img" />
                        </div>
                      </div>
                      <h2 className="text-center">Select an Ambassador</h2>
                      <p
                        className="w-100 text-center ms-0"
                        style={{ maxWidth: "100%" }}
                      >
                        Choose an enthusiastic employee to represent your
                        organisation as the official Ambassador.
                      </p>
                    </div>
                  </div>
                  <div className="service-item px-4 py-4 col-xl-3 col-lg-4 col-md-7 col-sm-8 col-11 sevak-custom-carddd mb-1">
                    <div className="info d-flex flex-column justify-content-center flex-no-wrap">
                      <div className="w-100 d-flex py-4 justify-content-center">
                        <div
                          className="icon"
                          style={{
                            backgroundColor: "#F3FFFC",
                            border: "1px solid #00AF90",
                          }}
                        >
                          <Image src={Donation} width={60} alt="img" />
                        </div>
                      </div>
                      <h2 className="text-center">Empower and Support</h2>
                      <p
                        className="w-100 text-center ms-0"
                        style={{ maxWidth: "100%" }}
                      >
                        Help your Ambassador promote CSR, engage employees and
                        make a lasting impact.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section className="wpo-cta-section section-padding pt-0">
        <div className="bg-overlay">
          <div className="container">
            <div className="bg-color">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="cta-wrap">
                    <h2 className="mb-2">Join the Ambassador Programme Today</h2>
                    <p className="text-center text-white pt-3">
                      Ready to create positive change? Choose a SevakArmy
                      Ambassador to lead your team towards a more responsible
                      and impactful future.
                    </p>
                    <div className="d-flex flex-column gap-3 justify-content-center align-items-center w-100 mt-3">
                      <Link
                        to="https://app.sevakarmy.com/" target="_blank"
                        className="theme-btn"
                        style={{ width: "fit-content" }}
                      >
                        Choose Your Ambassador
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

export default OrganisationAmbassadorPage;
