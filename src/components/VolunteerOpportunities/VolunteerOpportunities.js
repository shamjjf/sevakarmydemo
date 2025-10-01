import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css";
import "swiper/css/navigation";
import abImg4 from "../../../public/assets/images1/volunteer/opportunities/sevak-army-volunteer-opportunities-21.png";
import abImg5 from "../../../public/assets/images1/volunteer/opportunities/sevak-army-volunteer-opportunities-31.png";
import abImg7 from "../../../public/assets/images1/volunteer/opportunities/sevak-army-volunteer-opportunities-5.jpg";
import abImg9 from "../../../public/assets/images1/volunteer/opportunities/sevak-army-volunteer-opportunities-7.jpg";
import abImg11 from "../../../public/assets/images1/volunteer/opportunities/sevak-army-volunteer-opportunities-9.jpg";
import abImg14 from "../../../public/assets/images1/volunteer/opportunities/sevak-army-volunteer-opportunities-12.jpg";

import abut1 from "../../../public/assets/images1/volunteer/opportunities/sevak-army-volunteer-opportunities-13.jpg";
import BlogListPagination from "../BlogList/BlogListPagination";
import HowToVolunteer from "../Volunteer/HowToVolunteer";
import VolunteerSkills from "../Volunteer/VolunteerSkills";
import InternshipPrograms from "../Volunteer/InternshipPrograms";
import Image from "next/image";

const VolunteerOpportunities = (props) => {
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

  // const Services = [
  //   {
  //     Id: "01",
  //     sImg: simg1,
  //     
  //     slug: "1",
  //     description: [
  //       <h3>Register your Organisation</h3>,
  //       <br></br>,
  //       "Fill out our form to create your company profile.",
  //     ],
  //   },
  //   {
  //     Id: "02",
  //     sImg: simg2,
  //     
  //     slug: "2",
  //     description: [
  //       <h3>Invite your Employees</h3>,
  //       <br></br>,
  //       "Engage your workforce to register and browse opportunities.",
  //     ],
  //   },
  //   {
  //     Id: "03",
  //     
  //     
  //     slug: "3",
  //     description: [
  //       <h3>Setup Company Profile</h3>,
  //       <br></br>,
  //       " Allocate volunteer tasks based on skills and interests.",
  //     ],
  //   },
  // ];

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
      <section className="wpo-about-section pt-0">
        <div className="container section-padding">
          <div className="wpo-about-wrap">
            <div className="row justify-content-center ">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-text mt-0 p-3">
                  <div className="wpo-section-title">
                    <span>Welcome to Sevak Army!</span>
                    <h2 className="about-heading-third text-titleeee">
                      Join Sevak Army: Making Corporate Social Responsibility Simple.
                    </h2>
                  </div>
                  <p>
                    Discover tasks that align with your skills and passion. Whether you are interested in teaching,
                    designing or event management community outreach, Sevak Army offers a variety of volunteer
                    opportunities across different sectors.<br></br>
                    <b>How it Works:</b>
                  </p>
                  <p>
                    <b>Browse Tasks:</b> Use our filter options to find projects based on your skills and location.
                    <br />
                    <b>Apply:</b>
                    Submit your application, explaining why you're suited for the role.
                    <br />
                    <b>Get Started:</b>
                    Once approved, connect with the task organiser and begin your seva journey.
                  </p>
                  {/* <div className="about-info-wrap">
                    <div className="about-info-item">
                      <div className="about-info-icon">
                        <div className="icon">
                          <i className="fi flaticon-target"></i>
                        </div>
                      </div>
                      <div className="about-info-text">
                        <h4>Our Mission</h4>
                        <p className="mission-paragraph">
                          Enable businesses to transform the world around them through organized volunteerism.{" "}
                        </p>
                      </div>
                    </div>
                    <div className="about-info-item">
                      <div className="about-info-icon">
                        <div className="icon">
                          <i className="fi flaticon-mountain"></i>
                        </div>
                      </div>
                      <div className="about-info-text">
                        <h4>Our Vision</h4>
                        <p className="vision-paragraph">
                          Create a future where corporate volunteerism becomes the cornerstone of social change.
                        </p>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>

              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-img">
                  {/* <div className="wpo-about-left-side">
                    <Image src={abImg3} width={400} alt="img" />
                  </div> */}
                  <div className="wpo-about-right pt-0">
                    <Image src={abImg4} alt="img" />
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-start">
              {/* <Link to="/volunteer/about-us" className="theme-btn" onClick={ClickHandler}>
                Explore Now
              </Link> */}
            </div>
          </div>
        </div>
        <div className="container section-padding pt-5">
          <div className="wpo-about-wrap">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-img">
                  {/* <div className="wpo-about-left">
                    <Image src={abImg5} alt="img" />
                  </div> */}
                  <div className="wpo-about-right pt-0">
                    <Image src={abImg5} alt="img" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-text p-3 mt-0 pb-1 pb-lg-2 pt-1 pt-lg-2">
                  <div className="wpo-section-title mt-0">
                    <h2 className="about-heading-second">Volunteer Stories</h2>
                  </div>
                  <p>
                    Be inspired by volunteers who’ve made a real difference through Sevak Army.<br></br>
                    <b>Aarti</b> , a software developer, used her coding skills to build a website for an NGO, making
                    their work more visible online.<br></br>
                    <b>Sanjay</b> , a college student, helped organise a blood donation drive in his community, bringing
                    100+ donors. These stories showcase how ordinary individuals can contribute to extraordinary change.
                    <br></br>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <HowToVolunteer />
        <div className="section-padding pb-0"><VolunteerSkills/></div>
        <section className="d-flex  flex-wrap-containerrr align-items-start justify-content-center">
          {/* <div className="col-sm-4 col-md-5 d-flex align-items-center justify-content-center">
            <div className="col col-lg-11">
              <div className="wpo-event-item">
                <div className="wpo-event-details-text">
                  <h2>How to Volunteer?</h2>
                </div>
                <div className="wpo-event-details-wrap">
                  <div className="wpo-event-details-tab">
                    <ul className="nav nav-tabs"></ul>
                  </div>
                  <div className="wpo-event-details-content">
                    <div className="tab-content">
                      <div className="active">
                        <div id="Schedule" className="tab-pane active">
                          <ul>
                            <li className="about-section-list">
                              <p className="about-section-paragraph-list">
                                Volunteering with Sevak Army is simple and rewarding. Follow these steps:{" "}
                              </p>
                            </li>

                            <li className="about-section-list">
                              <p className="about-section-paragraph-list">
                                <strong className="heading-paragraph">Register:</strong>
                                Register on the portal with your basic details.{" "}
                              </p>
                            </li>
                            <li className="about-section-list ">
                              <p className="about-section-paragraph-list">
                                <strong className="heading-paragraph">Browse Tasks:</strong>
                                Use our filter system to find tasks that suit your skills and interests.
                              </p>
                            </li>
                            <li className="about-section-list">
                              <p className="about-section-paragraph-list">
                                <strong className="heading-paragraph">Apply:</strong>
                                Apply for the task of your choice.
                              </p>
                            </li>
                            <li className="about-section-list">
                              <p className="about-section-paragraph-list">
                                <strong className="heading-paragraph">Get Approved:</strong>Once the task organiser
                                reviews your profile, you’ll be able to start your work.
                              </p>
                            </li>
                            <li className="about-section-list">
                              <p className="about-section-paragraph-list">
                                <strong className="heading-paragraph">Earn Points:</strong>
                                Complete tasks and earn points through our gamified system, reflected on the
                                leaderboard.
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* <div className="col-sm-4 col-md-5 d-flex align-items-center justify-content-center">
            <div className="col col-lg-11">
              <div className="wpo-event-item">
                <div className="wpo-event-details-text">
                  <h2>Volunteer Skills</h2>
                </div>
                <div className="wpo-event-details-wrap">
                  <div className="wpo-event-details-tab">
                    <ul className="nav nav-tabs"></ul>
                  </div>
                  <div className="wpo-event-details-content">
                    <div className="tab-content">
                      <div className="active">
                        <div id="Schedule" className="tab-pane active">
                          <ul>
                            <li className="about-section-list">
                              <p className="about-section-paragraph-list">
                                At Sevak Army, we believe everyone has valuable skills to offer. Whether you're a
                                graphic designer, teacher, accountant or a event organiser, we provide opportunities
                                that match your expertise.
                              </p>
                            </li>

                            <li className="about-section-list">
                              <p className="about-section-paragraph-list">
                                <strong className="heading-paragraph">Design & Creativity:</strong>
                                Aid in website development, social media or online marketing.{" "}
                              </p>
                            </li>
                            <li className="about-section-list ">
                              <p className="about-section-paragraph-list">
                                <strong className="heading-paragraph">Teaching & Mentoring:</strong>
                                Support blood drives and food distribution charity events.
                              </p>
                            </li>
                            <li className="about-section-list">
                              <p className="about-section-paragraph-list">
                                <strong className="heading-paragraph">Event Management:</strong>
                                Assist with tutoring or mentoring students.
                              </p>
                            </li>
                            <li className="about-section-list">
                              <p className="about-section-paragraph-list">
                                <strong className="heading-paragraph">Digital Skills:</strong> Help NGOs with
                                eye-catching banners and websites for effective promotional materials.
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </section>

        <div className="container section-padding">
          <div className="wpo-about-wrap">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-5 col-md-12 col-12">
                <div className="wpo-about-img">
                  {/* <div className="wpo-about-left">
                    <Image src={abImg7} alt="img" />
                  </div> */}
                  <div className="wpo-about-right pt-0">
                    <Image src={abImg7} alt="img" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-text p-3 mt-0 pb-1 pb-lg-2 pt-1 pt-lg-2">
                  <div className="wpo-section-title">
                    <h2 className="about-heading-second text-titleeee">Corporate Volunteering</h2>
                  </div>
                  <p>
                    Corporate volunteering enables businesses to contribute to social good. Sevak Army partners with
                    companies looking to engage employees in impactful service projects.
                    <br></br>
                    <b>Team Building:</b> Engage your workforce in group volunteer tasks like organising events or
                    charity drives.
                    <br></br>
                    <b>Skill-Based Volunteering:</b> Leverage the expertise of your employees to help organisations in
                    need.
                    <br></br>
                    <b>CSR Reporting: </b> Track and report the impact your company is making through our volunteering
                    metrics system.
                    <br></br>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br></br>

        <div className="container">
          <div className="wpo-about-wrap">
            <div className="row ">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-text mt-0">
                  <div className="wpo-section-title">
                    <h2 className="about-heading-second text-titleeee mt-0">Volunteer Training Programs</h2>
                  </div>
                  <p>
                    Sevak Army offers volunteer training for individuals looking to upskill or enhance their
                    volunteering experience.
                    <br></br>
                    <b>Workshops on Leadership:</b> Learn how to lead and organise community initiatives.
                    <br></br>
                    <b>Skill-Based Training:</b> Gain insights into event management, digital marketing for social
                    causes and more.
                    <br></br>
                    <b>Soft Skills Development:</b> Improve communication, teamwork and problem-solving skills to be a
                    more effective volunteer.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-img">
                  {/* <div className="wpo-about-left">
                    <Image src={abImg9} alt="img" />
                  </div> */}
                  <div className="wpo-about-right pt-0">
                    <Image src={abImg9} alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="col-12 d-flex align-items-center justify-content-center">
          <div className="">
            <div className="wpo-event-item">
              <div className="wpo-event-details-text">
                <h2 className="text-center text-titleeee">Internship Programs</h2>
              </div>
              <div className="wpo-event-details-wrap">
                <div className="wpo-event-details-tab">
                  <ul className="nav nav-tabs"></ul>
                </div>
                <div className="wpo-event-details-content">
                  <div className="tab-content">
                    <div className="active">
                      <div id="Schedule" className="tab-pane active">
                        <ul>
                          <li className="about-section-list">
                            <p className="about-section-paragraph-list">
                              Sevak Army’s internship programs provide students with hands-on experience in volunteer
                              management and social work.
                            </p>
                          </li>

                          <li className="about-section-list">
                            <p className="about-section-paragraph-list">
                              <strong className="heading-paragraph">What You’ll Gain:</strong>
                              Real-world experience in project management, community outreach and social impact.
                            </p>
                          </li>
                          <li className="about-section-list ">
                            <p className="about-section-paragraph-list">
                              <strong className="heading-paragraph">Duration:</strong>
                              Our internship programs range from 3 to 6 months, depending on the project.{" "}
                            </p>
                          </li>
                          <li className="about-section-list">
                            <p className="about-section-paragraph-list">
                              <strong className="heading-paragraph">Certificate & Credits:</strong>
                              Get certified for your contributions, along with college credit for applicable courses.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-start">
                    <Link to="/register" className="theme-btn ">
                      Apply Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        
     <div className="section-padding pb-0">
     <InternshipPrograms/>
     </div>

        <section className="wpo-about-section-s3 section-padding pb-0">
          <div className="container">
            <div className="wpo-about-wrap">
              <div className="flex-containerrr gap-5 gap-y-4 justify-content-center ">
                <div className="">
                  <div className="">
                    <div className="">
                      <Image src={abut1} width={800} alt="Opportunities" />
                    </div>
                  </div>
                </div>
                <div className="center-containerrrr">
                  <div className="wpo-about-text">
                    <div className="wpo-section-title">
                      <span>Volunteering for Students</span>
                      <h3 className="display-5 fw-bold text-titleeee">
                        Students can gain valuable experience while making a difference.
                      </h3>
                    </div>

                    <p>
                      <ul>
                        <li>
                          <b>Why Volunteer?:</b> Enhance your resume, develop skills and contribute to social causes.
                        </li>
                        <li>
                          <b>Opportunities:</b> Work on tasks like tutoring, social media management, event coordination
                          and more.
                        </li>
                        <li>
                          <b>Flexible Timings:</b> Choose short-term or long-term projects based on your academic
                          schedule.
                        </li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <br></br>
        <div className="container section-padding">
          <div className="wpo-about-wrap">
            <div className="flex-containerrr justify-content-center gap-5">
              <div className="">
                <div className="wpo-about-text mt-0">
                  <div className="wpo-section-title p-3 pt-0">
                    {/* <span>Welcome to Sevak Army!</span> */}
                    <h2 className="about-heading-third text-titleeee">Long-Term Projects</h2>
                  </div>
                  <p style={{marginLeft:'20px'}}>
                    If you prefer to engage deeply with a cause, our long-term projects provide the opportunity for
                    sustained impact.
                    <br></br>
                    <b>Duration:</b> These projects can last several weeks or months.
                    <br></br>
                    <b>Examples:</b> Teaching underprivileged children, managing ongoing social media campaigns or
                    organising recurring events like blood donation drives.
                    <br></br>
                  </p>
                </div>
              </div>
              <div className="">
                <div className="wpo-about-img">
                  <div className="wpo-about-right pt-0">
                    <Image src={abImg11} width={700} alt="img" />
                  </div>
                  {/* <div className="wpo-about-right">
                    <Image src={abImg12} alt="img" />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="wpo-about-section-s3 section-padding pt-0">
          <div className="container">
            <div className="wpo-about-wrap">
              <div className="row align-items-center">
                {/* <div className="col-lg-6 col-md-12 col-12">
                  <div className="wpo-about-img-s3">
                    <div className="image">
                      <div className="shape">
                        <Image src={abut2} alt="Opportunities" />
                        <Image src={abutShape2} alt="Opportunities" />
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className="col-lg-12 col-md-12 col-12">
                  <div className="wpo-about-text w-100 mt-0">
                    <div className="wpo-section-title w-100 d-flex flex-column justify-content-center">
                      <span className="text-center w-100">Volunteering for Retirees</span>
                      <h3 className="display-5 fw-bold text-center text-titleeee">
                        Retirees bring a wealth of experience to volunteer work and SevakArmy provides opportunities
                        that allow them to give back.
                      </h3>
                    </div>

                    <div className="w-100 d-flex flex-column justify-content-center">
                      <div className="w-100 d-flex flex-wrap service-wrap justify-content-center gap-5">
                        <div className="col col-lg-3 col-md-6 col-sm-6 col-12" style={{width: '26.3rem', display:'flex', justifyContent:'center'}}>
                          <div className="service-item p-4">
                            <h4><b>Make an Impact:</b></h4>
                            Retired professionals can assist with mentorship, educational strategic
                            planning tasks.
                          </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-6 col-12" style={{width: '26.3rem', display:'flex', justifyContent:'center'}}>
                          <div className="service-item p-4">
                            <h4> <b>Flexible Schedule:</b></h4>
                            Engage in projects that fit your availability, from a few hours a
                            week to long-term commitments.
                          </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-6 col-12" style={{width: '26.3rem', display:'flex', justifyContent:'center'}}>
                          <div className="service-item p-4">
                            <h4> <b>Stay Active:</b></h4>
                            Volunteering helps retirees stay connected and contribute to their
                            community in meaningful ways.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container section-padding pt-0">
          <div className="wpo-about-wrap">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-img">
                  {/* <div className="wpo-about-left">
                    <Image src={abImg13} alt="img" />
                  </div> */}
                  <div className="wpo-about-right pt-0">
                    <Image src={abImg14} alt="img" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-text p-3 mt-0 pb-1 pb-lg-2 pt-1 pt-lg-2">
                  <div className="wpo-section-title">
                    <h2 className="about-heading-second text-titleeee">Short-Term Projects</h2>
                  </div>
                  <p>
                    For those looking for quick, impactful engagements, Sevak Army offers short-term volunteering
                    projects.
                    <br></br>
                    <b>Duration:</b> Tasks can range from a few hours to a week.
                    <br></br>
                    <b>Examples: </b> Distributing flyers for an upcoming event and creating promotional videos for
                    helping with food distribution drives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container pt-0">
          <div className="wpo-about-wrap">
            <div className="row align-items-center">
              <BlogListPagination />


            </div>
          </div>
        </div>

      </section>
    </>
  );
};

export default VolunteerOpportunities;
