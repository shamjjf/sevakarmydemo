import React from "react";
import { Link } from "react-router-dom";
import volunteerUpcomingEvents from "../../api/volunteerUpcomingEvents";
import SectionTitle from "../SectionTitle/SectionTitle";
import VolunteerEventsCards from "./VolunteerEventsCards";
import blogImg1 from "../../../public/assets/images1/volunteer/events/sevak-army-volunteer-events-2.jpg";
import blogImg2 from "../../../public/assets/images1/volunteer/events/sevak-army-volunteer-events-3.jpg";
import blog1 from "../../../public/assets/images1/volunteer/events/sevak-army-volunteer-events-4.jpg";
import blog2 from "../../../public/assets/images1/volunteer/events/sevak-army-volunteer-events-5.jpg";
import LeftImg from "../../../public/assets/images1/volunteer/events/sevak-army-volunteer-events-1.jpg";
import Cimg1 from "../../../public/assets/images1/volunteer/events/sevak-army-volunteer-events-4.jpg";
import Cimg2 from "../../../public/assets/images1/volunteer/events/sevak-army-volunteer-events-5.jpg";
import VolunteerRecognition from "../Volunteer/VolunteerRecognition";
import AnnualGala from "../Volunteer/AnnualGala";
import Image from "next/image";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const organizeData = [
  {
    description: "Submit your event idea.",
    bgColor: "linear-gradient(180deg, #1ecffe, #1287ff)",
  },
  {
    description: "Get support from fellow volunteers.",
    bgColor: "linear-gradient(180deg, #ff7888, #c10000 94.79%)",
  },
  {
    description: "Promote it through our portal and reach out to potential participants.",
    bgColor: "linear-gradient(180deg, #00af90, #00715d 97.92%)",
  },
];

const fairsData = [
  {
    description: "Connect with event organisers.",
    bgColor: "linear-gradient(180deg, #00af90, #00715d 97.92%)",
  },
  {
    description: "Learn about ongoing and future projects.",
    bgColor: "linear-gradient(180deg, #1ecffe, #1287ff)",
  },
  {
    description: "Choose from multiple volunteer roles across different sectors.",
    bgColor: "linear-gradient(180deg, #ff7888, #c10000 94.79%)",
  },
];

const serviceDays = [
  {
    id: "1",
    title: "Tree Plantation Drive",
    slug: "1",
    create_at: "10th Oct, 24",
    screens: blogImg1,
    bsing: blog1,
    // recent: recent1,
    // blogSingleImg: blogSingleImg1,
  },
  {
    id: "2",
    title: "Clean-Up Drive in Pune",
    slug: "2",
    create_at: "15th Oct, 24",
    screens: blogImg2,
    bsing: blog2,
     // recent: recent2,
    // blogSingleImg: blogSingleImg2,
  },
];

const conferenceData = [
  {
    id: 1,
    slug: "1",
    title: "Volunteer Impact Summit 2024",
    image: Cimg1,
   //  Simage: Csimg1,
    description: "Focusing on innovations in volunteerism",
  },
  {
    id: 2,
    slug: "2",
    title: "Youth for Service Conference",
    image: Cimg2,
    //  Simage: Csimg2,
    description: "Highlighting youth involvement in service activities",
  },
];

const workshopData = [
  {
    iconClass: "flaticon-volunteer",
    title: "Register Your Company",
    description: "Event Management for Volunteers",
  },
  {
    iconClass: "flaticon-solidarity",
    title: "First Aid Training for Community Events",
    description: "Empowered employees, endless possibilities.",
  },
  {
    iconClass: "flaticon-charity",
    title: "Leadership Skills for Social Impact",
    description: "One action sparks change, together we ignite transformation.",
  },
];

function EventsInfo(props) {
  return (
    <section className="wpo-event-section section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-12 col-12">
            <SectionTitle subtitle="Upcoming Events" title="Join Events, Make Impact!" />
          </div>
        </div>
        <div className="wpo-service-single-wrap">
          <div className="wpo-service-single-content">
            <div className="wpo-service-single-content-des">
              <p class="text-center pb-4">
                Stay up-to-date with upcoming volunteer-driven events that you can be a part of. Whether it’s organising
                community outreach or participating in a donation drive, SevakArmy offers multiple opportunities to
                make an impact.
              </p>
            </div>
          </div>
        </div>
        <div className="event-wrap">
          <div className="row">
            {volunteerUpcomingEvents.slice(0, 3).map((event, index) => (
              <div className="col col-lg-4 col-md-6 col-12" key={index}>
                <div className="event-card">
                  <div className="top-date">
                    <span>{event.date}</span> {event.month}
                    <div className="shape">
                      <svg width="19" height="14" viewBox="0 0 19 14" fill="none">
                        <path d="M18.9999 14L0.5 14L18.9999 -3.6902e-05L18.9999 14Z" />
                      </svg>
                    </div>
                  </div>
                  <div className="image">
                    <Image src={event.pimg} alt="Events" />
                  </div>
                  <div className="text">
                    <h3 className="text-center text-white fw-bold">
                      {/* <Link onClick={ClickHandler} to={`/event-single/${event.slug}`}> */}
                      {event.title}
                      {/* </Link> */}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="d-flex align-items-center justify-content-center mt-2">
            <Link onClick={ClickHandler} to="#" className="theme-btn">
              View All
            </Link>
          </div> */}
        </div>
        <section className="section-padding">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-12 col-12">
              <SectionTitle subtitle="Organise an Event" />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-12 col-12">
              <SectionTitle title="How to Organise an Event?" />
            </div>
          </div>
          <div className="wpo-service-single-wrap">
            <p class="text-center pb-4">
              Interested in leading a community event? SevakArmy provides NGOs with a platform to organise their
              events.
            </p>
          </div>
          <div className="container">
            <div className="container-fluid">
              <div className="row">
                {organizeData.map((feature, index) => (
                  <div className="col col-lg-4 col-md-6 col-12" key={index}>
                    <div className="causes-item">
                      <div
                        className="content border-0 shadow"
                        style={{ height: "160px", background: feature.bgColor, borderRadius: "1rem" }}
                      >
                        <p className="text-white d-flex align-items-center text-center">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* <div className="d-flex align-items-center justify-content-center mt-2">
            <Link onClick={ClickHandler} to="#" className="theme-btn">
              Organise Now
            </Link>
          </div> */}
        </section>
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-12 col-12">
            <SectionTitle subtitle="Event Registration" />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-12 col-12">
            <SectionTitle title="Register to an Event" />
          </div>
        </div>
        <div className="wpo-service-single-wrap">
          <p class="text-center pb-4">
            NGOs can register for upcoming events in  SevakArmy. Volunteers get involved in community service and
            volunteering opportunities.
          </p>
        </div>
        <div className="container">
          <VolunteerEventsCards />
        </div>
        <div className="d-flex align-items-center justify-content-center mt-2">
          <Link onClick={() => props.setShow(true)} to="#" className="theme-btn">
            Register for Events
          </Link>
        </div>
        <section className="section-padding">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-12 col-12">
              <SectionTitle subtitle="Volunteer Fairs" />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-12 col-12">
              <SectionTitle title="What to Expect?" />
            </div>
          </div>
          <div className="wpo-service-single-wrap">
            <p class="text-center pb-4">
              SevakArmy regularly hosts virtual and physical volunteer fairs where individuals can explore various
              projects and opportunities.
            </p>
          </div>
          <div className="container">
            <div className="container-fluid">
              <div className="row justify-content-center">
                {fairsData.map((fair, index) => (
                  <div className="col col-lg-4 col-md-6 col-12" key={index}>
                    <div className="causes-item">
                      <div
                        className="content rounded-3 border-0 shadow"
                        style={{ height: "160px", background: fair.bgColor }}
                      >
                        <p className="text-center text-white">{fair.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* <div className="d-flex align-items-center justify-content-center mt-2">
            <Link onClick={ClickHandler} to="#" className="theme-btn">
              Attend a Volunteer Fair
            </Link>
          </div> */}
        </section>
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-12 col-12">
            <SectionTitle subtitle="Community Service Days" />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-12 col-12">
            <SectionTitle title="Upcoming Service Days" />
          </div>
        </div>
        <div className="wpo-service-single-wrap">
          <p class="text-center pb-4">
            Participate in our regular Community Service Days, where volunteers come together to execute impactful
            projects in their locality.
          </p>
        </div>
        <div className="causes-top">
          <div className="container-fluid">
            <div className="row g-2">
              <div className="col-lg-8 col-12">
                <div className="image" style={{ height: "100%" }}>
                  <Image
                    src={LeftImg}
                    alt="img"
                    style={{ width: "98%", height: "95%", objectFit: "cover" }}
                    className="rounded"
                  />
                </div>
              </div>
              <div className="col-lg-4 col-12 d-flex flex-column justify-content-between">
                {serviceDays.slice(0, 2).map((service, index) => (
                  <div
                    className="blog-single-card"
                    key={index}
                    style={{ width: "90%", height: "45%", maxHeight: "260px", flex: "0 1 auto" }}
                  >
                    <div className="image" style={{ height: "70%", objectFit: "cover" }}>
                      <Image src={service.screens} alt="Events" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      <div className="top-date">
                        {service.create_at}
                        <div className="shape">
                          <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                            <path d="M7.99999 9.0001L-9.79769e-05 9.00023L8.00005 0.500149L7.99999 9.0001Z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="content">
                      <h2 className="mt-0">
                        <Link className="blog-title-home" onClick={ClickHandler} to={`/event-single/${service.slug}`}>
                          {service.title}
                        </Link>
                      </h2>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="wpo-service-single-wrap">
          <p class="text-center">Join hands with like-minded individuals to make a lasting impact in your community.</p>
        </div>
        <section className="section-padding">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-12 col-12">
              <SectionTitle title="Conferences and Summits" />
            </div>
          </div>
          <div className="wpo-service-single-wrap">
            <p class="text-center pb-4">
              SevakArmy organises annual conferences and summits to discuss volunteerism, share experiences and foster
              community-driven change.
            </p>
          </div>
          <div className="row g-3">
            {conferenceData.map((conference, index) => (
              <div key={index} className="col-lg-6 col-md-6 col-12">
                <div className="causes-item">
                  <div className="image">
                    <Image src={conference.image} alt={conference.title} style={{ maxHeight: "25rem" }} />
                  </div>
                  <div className="content text-center p-4">
                    <h2>{conference.title}</h2>
                    <p>{conference.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="wpo-service-single-wrap">
            <p class="text-center pb-4">
              These conferences provide valuable insights, networking opportunities and discussions on creating a
              greater impact through volunteer efforts.
            </p>
          </div>
        </section>
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-12 col-12">
            <SectionTitle subtitle="Workshops and Training Sessions" />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-12 col-12">
            <SectionTitle title="Upcoming Workshops Include" />
          </div>
        </div>
        <div className="wpo-service-single-wrap">
          <p class="text-center pb-4">
            Gain the skills you need to excel in your volunteering journey by attending workshops and training sessions
            offered through SevakArmy.
          </p>
        </div>
        <div className="wpo-features-area pt-0">
          <div className="container">
            <div className="features-wrap">
              <div className="row justify-content-center">
                {workshopData.map((workshop, index) => (
                  <div className="col col-lg-4 col-md-6 col-12" key={index}>
                    <div className="feature-item-wrap">
                      <div className="feature-item">
                        <div className="feature-icon">
                          <div className="icon">
                            <i className={`fi ${workshop.iconClass}`}></i>
                          </div>
                        </div>
                        <div className="feature-text">
                          <h2 className="fs-5">{workshop.title}</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center mt-2 mt-5">
          <Link onClick={() => props.setShow(true)} to="#" className="theme-btn">
            Register for Training
          </Link>
        </div>
        <section className="section-padding pb-0">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-12 col-12">
              <SectionTitle title="Volunteer Recognition Ceremonies & Annual Gala" />
            </div>
          </div>
          <div className="wpo-service-single-wrap">
            <p class="text-center px-5">
              At SevakArmy, we celebrate the hard work and dedication of volunteers with recognition ceremonies. These
              ceremonies highlight the extraordinary efforts of our volunteers and inspire others to follow in their
              footsteps.
            </p>
          </div>
          {/* <div className="wpo-event-details-content border border-warning rounded-3">
            <div className="tab-content">
              <div className="active">
                <div id="Schedule" className="tab-pane active">
                  <div className="col-lg-12 col-md-12 col-12">
                    <SectionTitle subtitle="Volunteer Recognition Ceremonies" />
                  </div>
                  <ul>
                    <li className="about-section-list">
                      <p className="about-section-paragraph-list">
                        <strong className="heading-paragraph">Monthly Volunteer Recognition:</strong>
                        Acknowledge the top performers on the leaderboard.
                      </p>
                    </li>
                    <li className="about-section-list">
                      <p className="about-section-paragraph-list">
                        <strong className="heading-paragraph">Annual Volunteer of the Year Award:</strong>
                        Honour individuals who’ve made significant contributions throughout the year.
                      </p>
                    </li>
                    <li className="about-section-list">
                      <p className="about-section-paragraph-list">
                        <strong className="heading-paragraph">Awards Ceremony:</strong>
                        Honour top volunteers and event organisers.
                      </p>
                    </li>
                    <div className="col-lg-12 col-md-12 col-12">
                      <SectionTitle subtitle="Annual Gala" />
                    </div>
                    <li className="about-section-list">
                      <p className="about-section-paragraph-list">
                        <strong className="heading-paragraph">Special Guests:</strong>
                        Listen to inspiring stories from well-known personalities in the social sector.
                      </p>
                    </li>
                    <li className="about-section-list">
                      <p className="about-section-paragraph-list">
                        <strong className="heading-paragraph">Entertainment:</strong>
                        Enjoy performances and presentations.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div> */}
          <VolunteerRecognition />
          <div className="pt-2">
            <AnnualGala />
          </div>
          <div className="wpo-service-single-wrap">
            <p class="text-center pt-4 px-5">
              These ceremonies highlight the extraordinary efforts of our volunteers and inspire others to follow in
              their footsteps. The Annual Gala is a great way to celebrate the spirit of volunteerism and reflect on the
              year’s achievements.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
}

export default EventsInfo;
