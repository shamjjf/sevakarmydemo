import React, { useState } from "react";
import { Link } from "react-router-dom";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css";
import "swiper/css/navigation";

import AuthModal from "../../auth-modal";
import TrackEmployee from "../Volunteer/TrackEmployee";

// import icon from "../../../public/assets/images/cta/top-icon.png";
// import SectionTitle from "../SectionTitle/SectionTitle";
// import RangeOfTasks from "../Volunteer/RangeOfTasks";

import abImg2 from "../../../public/assets/images1/organisation/employee-engagement/helping.webp";
import abImg4 from "../../../public/assets/images1/organisation/home/volunteer.webp";
import abImg5 from "../../../public/assets/images1/organisation/employee-engagement/sevak-army-organization-employee-engagement-5.webp";
import abImg8 from "../../../public/assets/images1/organisation/employee-engagement/sevak-army-organization-employee-engagement-8.webp";

const EmployeeEngagementPage = (props) => {
  // const ClickHandler = () => {
  //   window.scrollTo(10, 0);
  // };
  // const settings = {
  //   dots: false,
  //   arrows: false,
  //   infinite: true,
  //   speed: 500,
  //   autoplay: true,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  // };
  const [show, setShow] = useState(false);
  return (
    <>
      <section className="wpo-about-section section-padding pt-0">
        <section className="section-padding">
          <div className="container">
            <div className="wpo-about-wrap">
              <div className="row">
                <div className="col-lg-6 col-md-12 col-12">
                  <div className="wpo-about-text mt-0">
                    <div className="wpo-section-title mb-3">
                      <h2 className="about-heading-second text-titleeee mt-0">
                        Helping Employees Make a Difference
                      </h2>
                    </div>
                    <p className="mb-0" style={{ textAlign: 'justify' }}>
                      At Sevak Army, we believe every employee can help make the
                      world a better place. By encouraging your employees to join
                      volunteer activities, your organisation can improve its
                      social responsibility and make employees feel good about
                      their work. Our platform makes it simple for organisations
                      to invite employees, track their volunteer hours and
                      celebrate their efforts.
                    </p>
                    <p style={{ fontWeight: "500", textAlign: 'justify' }}>
                      Get your team involved—invite them to register on Sevak
                      Army and choose tasks that matter to them today!
                    </p>
                  </div>
                </div>

                <div className="col-lg-6  col-md-12 col-12">
                  <div className="wpo-about-img justify-content-center">
                    <div className="wpo-about-right pt-0 d-flex justify-content-start">
                      <Image src={abImg2} alt="Invite them to register & Volunteer on Sevak Army" height={520} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-padding pt-0">
          <div className="container">
            <div className="wpo-about-wrap">
              <div className="row flex-wrap-reverse">
                <div className="col-lg-6 col-xxl-5 col-md-12 col-12 pt-3 pt-lg-0">
                  <div className="wpo-about-img justify-content-center">
                    <div className="wpo-about-right pt-0 d-flex justify-content-start">
                      <Image src={abImg4} alt="Engaging Employees in Volunteering" height={520} />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-xxl-7 col-md-12 col-12">
                  <div className="wpo-about-text mt-1">
                    <div className="wpo-section-title mb-3">
                      <h2 className="about-heading-second text-titleeee mt-0">
                        Engaging Employees in Volunteering
                      </h2>
                    </div>
                    <p className="mb-0" style={{ textAlign: 'justify' }}>
                      Getting your employees involved in volunteering is easy
                      with Sevak Army. Once your organisation is registered, you
                      can invite employees to choose volunteer tasks through our
                      platform. Here's how we help:
                    </p>
                    <p style={{ textAlign: 'justify' }} className="mt-2 mb-1">
                      <b>Custom Volunteer Tasks:</b> Employees pick tasks that
                      match their skills and interests. From helping the
                      environment to community projects, there are options for
                      everyone.
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                      <b>Track Progress:</b> Easily see who’s involved, how
                      many hours they’ve volunteered and the tasks they've
                      completed.
                    </p>
                    <p className="mb-1"> Sevak Army makes it simple for organisations to encourage
                      meaningful volunteer work while keeping employees engaged
                      in causes they care about.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <TrackEmployee />


        {/* section end */}
        <section className="section-padding">
          <div className="container">
            <div className="wpo-about-wrap">
              <div className="flex-containerrr justify-content-center gap-5">
                <div className="w-lg-50 w-100">
                  <div className="wpo-about-text mt-0">
                    <div className="wpo-section-title">
                      {/* <span>Welcome to Sevak Army!</span> */}
                      <h2 className="about-heading-third text-titleeee">
                        Celebrate Volunteer Work with Digital Badges
                      </h2>
                    </div>
                    <p style={{ textAlign: 'justify' }}>
                      Recognising and celebrating your employees' efforts is key
                      to keeping them engaged:
                    </p>
                    <p className="mt-2 mb-1">
                      <b>Achievement Badges:</b> Employees earn digital badges
                      when they reach certain milestones, like completing a
                      set number of volunteer hours or tasks.
                    </p>
                    <p className="mb-1">
                      <b>Top Volunteer Recognition:</b> Employees who
                      volunteer regularly can appear on the leaderboard,
                      showcasing the top contributors.{" "}
                    </p>
                    <p className="mb-1">
                      <b>Organisation Celebrations:</b> Highlight your top
                      volunteers during organisation events or meetings to
                      recognise their dedication.
                    </p>
                    <p className="mb-1"> Celebrating these milestones boosts engagement and shows
                      that your organisation values giving back.</p>
                  </div>
                </div>
                <div className="">
                  <div className="wpo-about-img">
                    {/* <div className="wpo-about-left-side">
                    <Image src={abImg6} alt="img" />
                  </div> */}
                    <div className="wpo-about-right pt-lg-5">
                      <Image src={abImg5} width={726} height={426} alt="Celebrate Volunteer Work with Sevak Army Digital Badges" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <div className="wpo-about-wrap">
            <div className="row flex-wrap-reverse">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-img">
                  {/* <div className="wpo-about-left">
                    <Image src={abImg8} alt="img" />
                  </div> */}
                  <div className="wpo-about-right pt-0" style={{ textAlign: 'left' }}>
                    <Image src={abImg8} width={545} height={721} alt="Why Employee Engagement Matters" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-text mt-0">
                  <div className="wpo-section-title">
                    <h2 className="about-heading-second text-titleeee">
                      Why Employee Engagement Matters?
                    </h2>
                  </div>
                  <p style={{ textAlign: 'justify' }}>
                    Getting employees involved in volunteering isn’t just good
                    for the community - it helps your organisation, too:
                  </p>
                  <p className="mt-2 mb-1">
                    <b>Better Employee Retention:</b> Employees who volunteer
                    feel more connected to their organisation and are more
                    likely to stay long-term.
                  </p>
                  <p className="mb-1">
                    <b>Improved Morale:</b> Volunteering builds stronger
                    relationships among employees and boosts team spirit.{" "}
                  </p>
                  <p className="mb-1">
                    <b>Stronger organisation Reputation:</b> organisations
                    that support social good are seen in a better light by
                    customers, partners and job seekers.
                  </p>
                  <p className="mb-1">
                    <b>Employee Growth:</b> Volunteering helps employees
                    develop new skills, grow as leaders and feel more
                    satisfied with their jobs.
                  </p>
                  <p className="mb-1"> Engaging employees in volunteering builds a positive work
                    culture where giving back and employee happiness go
                    together.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wpo-cta-section section-padding pt-0">
        <div className="bg-overlay">
          <div className="container">
            <div className="bg-color">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="cta-wrap">
                    <h2 className="mb-2">Get started with employee engagement today.</h2>
                    <p className="text-center text-white pt-3">
                      Sevak Army helps your organisation motivate, engage and
                      track employee volunteering. Our easy-to-use tools makes
                      it simple to encourage volunteerism and build a culture of
                      giving back that benefits your organisation and the
                      community.
                    </p>
                    <div className="d-flex flex-column gap-3 justify-content-center align-items-center w-100 mt-3">
                      <Link
                        to="https://app.sevakarmy.com/" target="_blank"
                        className="theme-btn"
                        style={{ width: "fit-content" }}
                      >
                        Register your organisation now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AuthModal show={show} setShow={setShow} />
    </>
  );
};

export default EmployeeEngagementPage;
