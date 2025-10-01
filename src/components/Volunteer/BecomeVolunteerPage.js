import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css";
import "swiper/css/navigation";

import SectionTitle from "../SectionTitle/SectionTitle";

// import icon from "../../../public/assets/images/cta/top-icon.png";
import Sevak from "../../../public/assets/new-images/volunteer/registration/become-a-volunteer.jpg";
import Opportunities from "../../../public/assets/images1/volunteer/home/equal-rights.webp";
import Volunterring from "../../../public/assets/images1/volunteer/home/volunterring.webp";
import Reviewapp from "../../../public/assets/images1/volunteer/home/review-application.webp";
import United from "../../../public/assets/images1/volunteer/home/united.webp";
import SignUp from "../../../public/assets/images1/volunteer/home/sign-up.webp";
import Task from "../../../public/assets/images1/volunteer/home/task.webp";
import Apply from "../../../public/assets/images1/volunteer/home/apply-transformed.webp";
import Connect from "../../../public/assets/images1/volunteer/home/connect.webp";
import StartVolunteering from "../../../public/assets/images1/volunteer/home/track-progress-1.webp";


const featuresData = [
  {
    // iconClass: "flaticon-volunteer",
    svg: Opportunities,
    title: "Diverse Opportunities",
    description:
      "Discover causes that match your passion - education, healthcare, the environment and more.",
  },
  {
    // iconClass: "flaticon-charity",
    title: "Flexible Volunteering",
    svg: Volunterring,
    description:
      "You decide when and how you contribute based on your skills and schedule.",
  },
  {
    // iconClass: "flaticon-solidarity",
    svg: United,
    title: "Direct Collaboration with NGOs",
    description:
      "Work closely with NGOs, ensuring smooth coordination and communication.",
  },
];

const BecomeVolunteerPage = (props) => {
  // const ClickHandler = () => {
  //     window.scrollTo(10, 0);
  // };

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
      <section className="wpo-about-section pt-0">
        <div className="container section-padding pt-2 pt-md-5">
          <div className="wpo-about-wrap">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-img">
                  {/* <div className="wpo-about-left">
                    <Image src={abImg5} alt="img" />
                  </div> */}
                  <div className="wpo-about-right pt-3">
                    <Image src={Sevak} alt="Join Savek Army - Volunteer Oppertunities" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-text p-3 mt-0 pb-1 pb-lg-2 pt-1 pt-lg-2">
                  <div className="wpo-section-title mt-0 mb-3">
                    <span>Become a Volunteer</span>
                    <h2 className="about-heading-second text-titleeee">
                      Join Sevak Army: Your Path to Make a Difference
                    </h2>
                  </div>
                  <div className="mt-0 pt-0" style={{ textAlign: "justify" }}>
                    <p> Discover how easy it is to volunteer and contribute to
                      meaningful causes with Sevak Army.</p>
                    <div className="custom-panell">
                      <h3>How It Works: From Sign-Up to Service</h3>
                    </div>
                    <p>  At Sevak Army, we’ve made it simple for anyone to join our
                      platform, find tasks matching their skills and make an
                      impact.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h3 className="text-center">
            Follow these easy steps to become a volunteer and start creating
            real change in your community.
          </h3>
        </div>

        <div className="container pt-3 pt-lg-3">
          <div className="wpo-about-wrap">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-text p-3 mt-0 pb-1 pb-lg-2 pt-1 pt-lg-2">
                  <div className="custom-panell">
                    <h3>Step 1: Register and Create Your Profile</h3>
                  </div>
                  <p className="mt-0 pt-0" style={{ textAlign: "justify" }}>
                    The first step to becoming a Sevak Army volunteer is
                    registering on our platform. Simply <b>register</b> by
                    providing basic details, such as your name, email and
                    contact information. Once registered, you’ll create a
                    volunteer profile highlighting your skills, interests and
                    availability.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-img d-flex w-100 justify-content-center">
                  <div className="wpo-about-right pt-lg-4">
                    {/* <Image src={abImg7} alt="img" /> */}
                    <Image width={450} src={SignUp} alt="Sign-up to Sevak Army" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container pt-3">
          <div className="wpo-about-wrap">
            <div className="row flex-wrap-reverse">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-img d-flex w-100 justify-content-center">
                  <div className="wpo-about-right pt-lg-5">
                    {/* <Image src={abImg7} alt="img" /> */}
                    <Image width={500} src={Task} alt="Filtering out your Volunteering task with Sevak Army" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-text p-3 mt-0 pb-1 pb-lg-2 pt-1 pt-lg-2">
                  {/* <div className="wpo-section-title mt-0 mb-5">
                                        <span>Become a Volunteer</span>
                                        <h2 className="about-heading-second">Join Sevak Army: Your Path to Make a Difference</h2>
                                    </div> */}
                  <div className="custom-panell">
                    <h3>Step 2: Browse & Filter Volunteer Tasks</h3>
                  </div>
                  <div className="mt-0 pt-0" style={{ textAlign: "justify" }}>
                    <p>After completing your profile, you can start exploring a
                      wide range of volunteer opportunities. With our easy-to-use
                      search and filter features, you can find tasks that match
                      your:</p>
                    <ul className="list-disc list-inside ms-0 ps-0">
                      <li>
                        <p className="mb-0">
                          {" "}
                          <b>Skills : </b> Whether you’re experienced in
                          teaching, event planning or logistics, there’s a task
                          for you.
                        </p>
                      </li>
                      <li>
                        <p className="mb-0">
                          {" "}
                          <b>Interests : </b> Passionate about the environment?
                          Love helping in education? Filter tasks to suit your
                          passion.
                        </p>
                      </li>
                      <li>
                        <p className="mb-0">
                          <b>Time Availability : </b> Whether you have a few
                          hours or want a regular commitment, choose tasks that
                          fit your schedule.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container pt-3">
          <div className="wpo-about-wrap">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-text p-3 mt-0 pb-1 pb-lg-2 pt-1 pt-lg-2">
                  <div className="custom-panell">
                    <h3>Step 3: Apply for Volunteer Opportunities</h3>
                  </div>
                  <p className="mt-0 pt-0" style={{ textAlign: "justify" }}>
                    When you find a task that interests you, apply for the
                    opportunity by filling out the NGO’s eligibility form. In
                    this form, you’ll share why you are the right person for the
                    task based on your experience and skills. This helps NGOs
                    ensure that the right volunteers are matched with the right
                    roles.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-img d-flex w-100 justify-content-center">
                  <div className="wpo-about-right pt-3">
                    <Image
                      src={Apply}
                      width={450}
                      alt="Apply for Volunteering with Verified NGO over Sevak Army"
                    />
                    {/* <Image src="https://placehold.co/324x324/png" alt="Register" /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container pt-3 pt-lg-5">
          <div className="wpo-about-wrap">
            <div className="row flex-wrap-reverse">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-img d-flex w-100 justify-content-center">
                  <div className="wpo-about-right pt-3">
                    <Image src={Reviewapp} width={500} alt="Become a Volunteer" />
                    {/* <Image src="https://placehold.co/324x324/png" alt="Register" /> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-text p-3 mt-0 pb-1 pb-lg-2 pt-1 pt-lg-2">
                  <div className="custom-panell">
                    <h3>Step 4: NGO Reviews Your Application</h3>
                  </div>
                  <p className="mt-0 pt-0" style={{ textAlign: "justify" }}>
                    Once you have applied, the NGO will review your application
                    to see if you meet the requirements for the task. If you’re
                    selected, you’ll be notified and the next steps will be set
                    in motion. Don’t worry! We will keep you updated every step
                    of the way.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container pt-3 pt-lg-5">
          <div className="wpo-about-wrap">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-text p-3 mt-0 pb-1 pb-lg-2 pt-1 pt-lg-2">
                  <div className="custom-panell">
                    <h3>Step 5: Connect & Chat with the NGO</h3>
                  </div>
                  <p className="mt-0 pt-0" style={{ textAlign: "justify" }}>
                    After your application is approved, the chat feature between
                    you and the NGO will be activated. This allows you to
                    communicate directly, coordinate the task details, ask
                    questions and receive updates. You will have everything you
                    need to start volunteering smoothly and efficiently.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-img d-flex w-100 justify-content-center">
                  <div className="wpo-about-right pt-lg-5">
                    <Image src={Connect} width={440} alt="Get connected with Verified NGO with Sevak Army" />
                    {/* <Image src="https://placehold.co/324x324/png" alt="Register" /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container pt-3 pt-lg-5">
          <div className="wpo-about-wrap">
            <div className="row flex-wrap-reverse">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-img d-flex w-100 justify-content-center">
                  <div className="wpo-about-right pt-lg-3 ">
                    <Image src={StartVolunteering} height={400} alt="Start Volunteer today & track your work with Sevak Army" style={{ objectFit: 'contain' }} />
                    {/* <Image src="https://placehold.co/324x324/png" alt="Register" /> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-text p-3 mt-0 pb-1 pb-lg-2 pt-1 pt-lg-2">
                  <div className="custom-panell">
                    <h3>Step 6: Start Volunteering and Track Your Progress</h3>
                  </div>
                  <p className="mt-0 pt-0" style={{ textAlign: "justify" }}>
                    Once you are set up with the NGO, it’s time to start making
                    a difference! Whether you’re working on-site or remotely,
                    you can log your hours, track your progress and earn
                    recognition for your efforts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding container">
        <div className="row justify-content-center">
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-12 col-12">
            <SectionTitle subtitle="Empowering Growth, Bringing Impact" title="Why Choose Sevak Army?" />
          </div>
        </div>

        <div className="wpo-features-area pt-3">
          <div className="features-wrap">
            <div className="row justify-content-center gy-4 align-items-stretch">
              {featuresData.map((feature, index) => (
                <div
                  className="col col-lg-4 col-md-6 col-12"
                  key={index}
                >
                  <div
                    className="feature-item-wrap h-100"
                    style={{ display: "flex", alignItems: "flex-start", minHeight: '100%' }}
                  >
                    <div
                      className="feature-item"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        minHeight: '100%'
                        // width: "460px",
                        // height: "220px",
                      }}
                    >
                      <div
                        style={{ display: "flex", alignItems: "flex-start" }}
                      >
                        <div className="feature-icon">
                          <div className="icon">
                            {feature.iconClass ? (
                              <i className={`fi ${feature.iconClass}`}></i>
                            ) : (
                              <Image src={feature.svg} alt={feature.svg} />
                            )}
                          </div>
                        </div>
                        <div className="feature-text">
                          <h2 className="fs-5">{feature.title}</h2>
                          <p className="fs-6" style={{ textAlign: "justify" }}>
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
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
                    <h2 className="mb-2">Start Your Volunteer Journey Today</h2>
                    <p
                      className="text-center pt-2 px-2"
                      style={{ textAlign: "justify", color: "white" }}
                    >
                      Join Sevak Army today and be part of a platform that’s
                      transforming communities across India. It only takes a few
                      minutes to register and you’ll be on your way to finding
                      the perfect volunteer opportunities that match your
                      passion and skills.
                    </p>
                    <div className="d-flex flex-column gap-3 justify-content-center align-items-center w-100">
                      <Link
                       to="https://app.sevakarmy.com/" target="_blank"
                        className="theme-btn"
                        style={{ width: "fit-content", textTransform: 'none' }}
                      >
                        Register Now to Volunteer
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

export default BecomeVolunteerPage;
