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


import simg1 from "../../../public/assets/images/service/university-card.webp";
import simg2 from "../../../public/assets/images/service/industry.webp";
import simg3 from "../../../public/assets/images/service/goal.webp";
import simg4 from "../../../public/assets/images/service/organisation-1.webp";
import simg5 from "../../../public/assets/images/service/assessment.webp";
import simg6 from "../../../public/assets/images/service/reward-1.webp";
import simg7 from "../../../public/assets/images/service/leaderboard.webp";
import simg8 from "../../../public/assets/images/service/tasks-1.webp";
import simg9 from "../../../public/assets/images/service/track.webp";
import simg10 from "../../../public/assets/images/service/employee-engagement.webp";
import simg11 from "../../../public/assets/images/service/opportunity-2.webp";
import simg12 from "../../../public/assets/images/service/engagement.webp";
// import abImg1 from "../../../public/assets/images1/organisation/registration/sevak-army-organization-registration-2.webp";
import abImg1 from "../../../public/assets/new-images/organizations/register.jpg";
import abImg4 from "../../../public/assets/images1/organisation/home/corporate.webp";
import About4 from "../../../public/assets/images1/organisation/registration/sevak-army-organization-registration-1.webp";
import About4s2 from "../../../public/assets/images/slider/stick-man.svg";
import Oimg from "../../../public/assets/images/service-single/leaderboard.webp";

const OrganisationRegistration = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const Services = [
    {
      Id: "01",
      sImg: simg8,

      slug: "1",
      description: [
        <h3>Various Social Tasks For Your CSR Goals</h3>,
        <br></br>,
        "We understand that every organisation is different. Our platform provides you with various volunteer opportunities so you can choose the ones that align with your values and objectives. This means your employees can engage in causes that truly matter to them, creating a more meaningful impact.",
      ],
    },
    {
      Id: "02",
      sImg: simg10,

      slug: "2",
      description: [
        <h3>Easy Employee Engagement</h3>,
        <br></br>,
        "Getting your employees involved has never been easier! Our user-friendly platform lets you invite and motivate your employees to register and participate in volunteer tasks effortlessly. With just a few clicks, you can foster a culture of giving back within your organisation.",
      ],
    },
    {
      Id: "03",
      sImg: simg9,


      slug: "3",
      description: [
        <h3>Track Your Impact in Real-Time</h3>,
        <br></br>,
        "Stay informed about your team's progress with our comprehensive tracking tools. You can easily monitor volunteer hours, completed tasks and overall contributions. This insight allows you to report on your CSR achievements and demonstrate your organisation’s commitment to social responsibility.",
      ],
    },
    {
      Id: "04",
      sImg: Oimg,
      sImg: simg7,

      slug: "3",
      description: [
        <h3>Get Top On Organisation Leaderboard</h3>,
        <br></br>,
        "We give recognition to your organisation’s efforts towards social work through our organisation’s leaderboard. The more social work is done by your organisation the more points you will receive and will be ranked at the the top of the leaderboard.",
      ],
    },
  ];

  const Services2 = [
    {
      Id: "01",
      sImg: simg1,

      title: "Organisation Name",
      slug: "2",
      description: "Register your business under its official name.",
    },
    {
      Id: "02",
      sImg: simg2,

      title: "Industry",
      slug: "1",
      description:
        "Tell us which industry you belong to so we can match you with relevant volunteering opportunities.",
    },
    {
      Id: "03",
      sImg: simg3,


      title: "CSR Goals",
      slug: "3",
      description:
        "Share your organisation’s CSR vision and the causes that matter most to your organisation.",
    },
    {
      Id: "04",
      sImg: simg4,


      title: "Organisation Details",
      slug: "4",
      description:
        "Provide contact information and details about your organisation size to help us customise opportunities for your business.",
    },
  ];

  const Services3 = [
    {
      Id: "01",
      sImg: simg11,

      title: "Custom Volunteer Opportunities",
      slug: "2",
      description:
        "Choose activities matching your organisation’s values and industry.",
    },
    {
      Id: "02",
      sImg: simg12,

      title: "Employee Engagement Tools",
      slug: "1",
      description:
        "Easily invite and track your employees' volunteer activities, creating a culture of responsibility and kindness.",
    },
    {
      Id: "03",
      sImg: simg5,


      title: "Impact Tracking",
      slug: "3",
      description:
        "Monitor volunteer hours and completed tasks to show the positive change your organisation is making.",
    },
    {
      Id: "04",
      sImg: simg6,


      title: "Recognition and Rewards",
      slug: "4",
      description:
        "Showcase your organisation’s volunteer work with our public leaderboard and achievements system to build brand loyalty.",
    },
  ];

  // useEffect(() => {
  //   const rotate = () => {
  //     const lastChild = document
  //       .querySelector(".manroted div:last-child")
  //       .cloneNode(true);
  //     document
  //       .querySelectorAll(".manroted div")
  //       .forEach((div) => div.classList.remove("firstSlide"));
  //     document.querySelector(".manroted div:last-child").remove();
  //     document.querySelector(".manroted").prepend(lastChild);
  //   };

  //   const intervalId = setInterval(rotate, 4000);

  //   return () => clearInterval(intervalId);
  // }, []);


  return (
    <>
      <section className="wpo-about-section-s4 section-padding">
        <div className="container">
          <div className="wpo-about-wrap">
            <div className="flex-containerrr justify-content-center gap-3 align-items-center">
              <div className="w-lg-50 w-100 order-lg-2 d-flex justify-content-center">
                <div className="wpo-about-img-s5">
                  <div className="image">
                    <Image className="" src={About4} priority={true} height="auto" style={{height:'auto', objectFit:'contain'}} alt="Volunteering with SevakArmy made easy" />
                  </div>
                  <div className="wpo-supporter">
                    <div className="wpo-supporter-text">
                      <div className="icon">
                        <i>
                          <Image src={About4s2} alt="About Organisation" />
                        </i>
                      </div>
                      <div className="content">
                        <h3>100+</h3>
                        <p>Happy Organisations</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" order-lg-1">
                <div className="wpo-about-text">
                  <div className="wpo-section-title">
                    <span>Register with SevakArmy</span>
                    <h2 className="about-heading-third text-titleeee">
                      Making Corporate Social Responsibility Easy
                    </h2>
                  </div>
                  <p>
                    At SevakArmy, we believe every organisation can make an
                    impact on society. Our platform helps organisations register
                    and encourage their employees to participate in volunteer
                    activities posted by NGOs. Whether you&apos;re a small business
                    or a big organisation, we provide the tools you need to
                    reach your CSR goals and support important causes.{" "}
                  </p>
                  <p>
                    {" "}
                    Get started today! Register your organisation with Sevak
                    Army and encourage your employees to make a positive impact!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="section-padding pt-md-5 mt-md-3 pb-0">
          {" "}
          <div className="container pt-3">
            <div className="row justify-content-center">
              <div className="col-lg-10 col-md-12 col-12">
                <SectionTitle
                  title="Register Your Organisation and Make a Difference"
                  paragarap="Joining SevakArmy is quick and straightforward. Simply fill out our Organisation Registration Form with your basic details. Once you’ve completed the form, you’ll gain access to your organisation’s dashboard."
                />
              </div>
            </div>
            <div className="service-wrap mt-3">
              <div className="row justify-content-center align-items-stretch gy-3">
                {Services2.slice(0, 5).map((Service, sitem) => (
                  <div
                    className="col col-lg-6 col-md-6 col-sm-6 col-12"
                    style={{ minHeight: '100%' }}
                    key={Service.Id}
                  >
                    <ServiceCard
                      heightClass=""
                      title={Service.title}
                      img={Service.sImg}
                      slug={Service.slug}
                      sdescription={Service.description}
                    />
                    {/* </div> */}
                  </div>
                ))}
              </div>
            </div>
            <div className="row justify-content-center mt-4">
              <div className="col-lg-8 col-md-12 col-12">
                <p className="text-center" style={{ fontWeight: "600" }}>
                  Once your organisation is registered, you can invite
                  employees, manage your volunteer efforts and track your
                  social impact from a single platform.
                </p>
                <div className="w-full d-flex justify-content-center">
                  <Link
                    to="https://app.sevakarmy.com/" target="_blank"
                    className="theme-btn mt-1"
                  >
                    Fill Out the Registration Form
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container section-padding pb-0">
          <div className="wpo-about-wrap">
            <div className="flex-containerrr just-fy-content-center gap-3">
              <div className="">
                <div className="wpo-about-text mt-0">
                  <div className="wpo-section-title mb-3">
                    <h2 className="about-heading-third text-titleeee">
                      Setup Your Organisation’s Profile
                    </h2>
                  </div>
                  <div>
                    <p className="mb-0">Once your organisation is registered, it’s time to set up
                      your Organisation Profile. This is where you showcase your
                      organisation’s CSR mission and valuable commitment to
                      volunteerism.</p>
                    <p className="mb-2">
                      Your organisation profile includes:
                    </p>
                    <p className="mb-1">
                      <b>Organisation Logo: </b>Upload your logo to personalise
                      your profile and reinforce your brand’s commitment to CSR.
                    </p>
                    <p className="mb-1">
                      <b>Industry Information:</b> Share details about your
                      industry and the types of volunteer opportunities you’re
                      most interested in.
                    </p>
                    <p className="mb-1">
                      <b>CSR Goals:</b> Highlight your organisation’s long-term
                      goals for social responsibility, showing potential
                      partners, clients and employees that your organisation is
                      dedicated to making a difference.
                    </p>
                    <p className="mb-1">
                      <b>Volunteering History:</b> As your employees complete
                      volunteer tasks, their contributions will be tracked and
                      displayed in your organisation’s history, showcasing the
                      impact made through  SevakArmy platform.
                    </p>
                    <p className="mb-0"> This profile helps you manage your volunteer efforts and
                      serves as a public commitment to social good, enhancing your
                      organisation’s reputation and value.</p>
                  </div>
                </div>
              </div>
              <br></br>
              <div className="">
                <div className="wpo-about-img">
                  {/* <div className="wpo-about-left-side">
                    <Image src={abImg2} alt="img" />
                  </div> */}
                  <div className="wpo-about-right pt-0">
                    <Image src={abImg1} width={512} height={700} alt="Setup Your organisation’s Profile with SevakArmy" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="section-padding">
          <div className="container">
            <div className="wpo-about-wrap flex-wrap-reverse">
              <div className="row flex-wrap-reverse">
                <div className="col-lg-6 col-md-12 col-12 pt-3 pt-lg-0">
                  <div className="wpo-about-img">
                    {/* <div className="wpo-about-left">
                      <Image src={abImg3} alt="img" />
                    </div> */}
                    <div className="wpo-about-right pt-0" style={{ textAlign: 'left' }}>
                      <Image src={abImg4} height={560} alt="Invite Your Employees for volunteer oppertunity" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-12">
                  <div className="wpo-about-text mt-0">
                    <div className="wpo-section-title mb-3">
                      <h2 className="about-heading-second text-titleeee mt-0">
                        Invite Your Employees
                      </h2>
                    </div>
                    <div>
                      <p className="mb-0"> Getting your employees involved in volunteering is easy
                        with SevakArmy. After registering your organisation, you
                        can send Employee Registration Invitations directly from
                        our platform. Invite them to join your CSR initiatives.{" "}</p>
                      <span className="mb-2">Employees can: </span>
                      <ul className="list-style-disccc" style={{ paddingLeft: '0px' }}>
                        <li
                          className="mb-1"
                          style={{ width: "fit-content", color: "#1B1212", flexWrap: 'nowrap' }}
                        >
                          <span className="list-bullet me-2"></span> Create their accounts using your referral link.
                        </li>
                        <li
                          className="mb-1"
                          style={{ width: "fit-content", color: "#1B1212", flexWrap: 'nowrap' }}
                        >
                          <span className="list-bullet me-2"></span>{" "}
                          Choose from a variety of volunteer tasks that match their interests.
                        </li>
                        <li
                          className="mb-1"
                          style={{ width: "fit-content", color: "#1B1212", flexWrap: 'nowrap' }}
                        >
                          <span className="list-bullet me-2"></span> Track their volunteering hours and progress.
                        </li>
                        <li
                          className="mb-1"
                          style={{ width: "fit-content", color: "#1B1212", flexWrap: 'nowrap' }}
                        >
                          <span className="list-bullet me-2"></span> Earn recognition for their efforts, such as digital badges, digital certificates and rankings on the employee leaderboard.
                        </li>
                      </ul>
                      Start building a culture of volunteerism within your
                      organisation by inviting your team today.
                      <p style={{ fontWeight: "600" }}>
                        It’s simple, effective and it starts with a click!
                      </p>
                      <Link
                        to="https://app.sevakarmy.com/" target="_blank"
                        className="theme-btn"
                      >
                        Get Started Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 col-md-12 col-12">
                <SectionTitle
                  title="Why Register with SevakArmy?"
                  paragarap="When you register for SevakArmy, you unlock features to boost
                  your CSR efforts."
                />
              </div>
            </div>
            <div className="service-wrap mt-3">
              <div className="row justify-content-center align-items-stretch gy-4">
                {Services3.slice(0, 5).map((Service, sitem) => (
                  <div
                    className="col col-lg-6 col-md-6 col-sm-6 col-12"
                    key={Service.Id}
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
            <p className="text-center mt-4" style={{ fontWeight: "600" }}>
              Register Today and take the first step.
            </p>
          </div>

          <section className="mt-3">
            <div className="d-flex justify-content-center">
              <Link
                to="https://app.sevakarmy.com/" target="_blank"
                className="theme-btn "
              >
                Register Now
              </Link>
            </div>
          </section>
        </div>
      </section>
      <section className={"mb-5 pt-0 p-0" + props.hclass}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-12 col-12 ">
              <SectionTitle
                // subtitle="Why Choose Us?"
                title="Why Choose Us?"
                paragarap="At SevakArmy, we offer a unique approach to corporate social responsibility that stands out from the rest. Here’s why your organisation should register with us."
              />
            </div>
          </div>
          <div className="service-wrap mt-3">
            <div className="row justify-content-center align-items-stretch gy-4">
              {Services.slice(0, 4).map((Service, sitem) => (
                <div
                  className="col col-lg-6 col-md-6 col-sm-6 col-12 "
                  key={Service.Id}
                >
                  <ServiceCard
                    // height="550px"
                    img={Service.sImg}
                    slug={Service.slug}
                    sdescription={Service.description}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      <section className="wpo-cta-section section-padding">
        <div className="bg-overlay">
          <div className="container">
            <div className="bg-color">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="cta-wrap">
                    <h2 className="mb-2">Organisation Registration</h2>
                    <p
                      className="text-center pt-2 px-2"
                      style={{ textAlign: "justify", color: "white" }}
                    >
                      Join SevakArmy today and amplify your Organisation impact!
                      By registering, your Organisation can collaborate with changemakers, participate in community-driven initiatives, and gain access to a network of passionate volunteers. Get involved and make a difference in your community!
                    </p>
                    <div className="d-flex flex-column gap-3 justify-content-center align-items-center w-100">
                        <Link to="https://app.sevakarmy.com/" target="_blank" className="theme-btn" style={{ width: "fit-content" }}>
                          Register Your Organisation
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

export default OrganisationRegistration;
