import React, { Fragment } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import ServiceCard from "../ServiceSection/ServiceCard";
// import icon from "../../../public/assets/images/cta/top-icon.png";

import kImg2 from "../../../public/assets/images1/ngo/feature/business-report.webp";
import Task from "../../../public/assets/images1/ngo/home/task.webp";
import Volunteers from "../../../public/assets/images1/ngo/home/volunteer.webp";
import Tools from "../../../public/assets/images1/ngo/home/tools.webp";
import kImg3 from "../../../public/assets/images1/ngo/feature/two-way-communication.webp";
import kImg4 from "../../../public/assets/images1/ngo/feature/clipboard.webp";
import kImg5 from "../../../public/assets/images1/ngo/feature/coordination.webp";
import kImg6 from "../../../public/assets/images1/ngo/feature/monitor.webp";
import kImg7 from "../../../public/assets/images1/ngo/feature/process.webp";
import kImg8 from "../../../public/assets/images1/ngo/feature/adaptation.webp";
import kImg9 from "../../../public/assets/images1/ngo/feature/shield.webp";

import Image from "next/image";
import { Link } from "react-router-dom";

const Services = [
  {
    Id: "01",
    sImg: Volunteers,
    // 
    title: "Simple Volunteer Management",
    slug: "1",
    description:
      "Manage volunteers easily with a user-friendly dashboard. Post tasks, assign them, and track progress all in one place. Save time and streamline your operations.",
  },
  {
    Id: "02",
    sImg: kImg2,
    // 
    title: "Detailed Reporting for Better Oversight",
    slug: "3",
    description:
      "Access comprehensive reports to track volunteer hours, task completions and overall impact. Use these insights for internal assessments or to showcase results to donors and stakeholders.",
  },
  {
    Id: "03",
    sImg: kImg3,
    // 
    title: "Direct Communication with Volunteers",
    slug: "4",
    description:
      "Keep in touch with volunteers through in-platform messaging. Send updates, instructions and reminders directly, ensuring clear communication and efficient task management.",
  },
  {
    Id: "04",
    sImg: kImg4,
    // 
    title: "Wide Range of Task Options",
    slug: "4",
    description:
      "Post different types of tasks, from one-time activities to regular commitments, online or in-person. Engage volunteers in ways that suit their availability and skills, enhancing flexibility.",
  },
  {
    Id: "05",
    sImg: kImg5,
    // 
    title: "Flexible Volunteer Coordination",
    slug: "4",
    description:
      "Coordinate easily with volunteers, no matter where they are. Whether it's remote assistance or on-site support, manage your team’s activities seamlessly through the platform.",
  },
  {
    Id: "06",
    sImg: kImg6,
    // 
    title: "Easy Task Monitoring and Updates",
    slug: "4",
    description:
      "Track ongoing tasks in real-time, making it easier to monitor volunteer activities and progress. Update tasks and volunteers as needed to ensure everything runs smoothly.",
  },
  {
    Id: "07",
    sImg: kImg7,
    // 
    title: "Quick Recruitment Process",
    slug: "4",
    description:
      "Avoid lengthy recruitment procedures. Simply post your task and volunteers can apply directly. Choose the best candidates quickly, reducing time and effort spent on finding support.",
  },
  {
    Id: "08",
    sImg: kImg8,
    // 
    title: "Skill-Based Volunteer Matching",
    slug: "4",
    description:
      "Get volunteers with the right skills for each project. Set specific qualifications so only the most suitable candidates apply, ensuring tasks are completed effectively.",
  },
  {
    Id: "9",
    sImg: kImg9,
    // 
    title: "Secure and Trusted Platform",
    slug: "4",
    description:
      "Work with verified volunteers on a trusted platform. SevakArmy ensures both NGOs and volunteers are authentic, creating a safe and reliable environment for collaboration.",
  },
  {
    Id: "10",
    sImg: Task,
    // 
    title: "Customisable Task Posting",
    slug: "2",
    description:
      "Tailor tasks to meet specific needs. Set skills, deadlines and requirements to ensure you get the right volunteers for every job, making the process efficient and effective.",
  },
];

function NgoKeyFeaturesSection(props) {

  return (
    <Fragment>
      <>

        <section className="wpo-about-section section-padding">
          <div className="container">
            <div className="wpo-about-wrap">
              <div className="row">
                <div className="col-lg-6 col-md-12 col-12">
                  <div className="wpo-about-img">
                    <div className="wpo-about-right pt-0">
                      <Image src={Tools} width={544} height={332} alt="Efficient Tools for NGOs to Manage Volunteers- SevakArmy" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-12">
                  <div className="wpo-about-text mt-1">
                    <div className="wpo-section-title mb-3">
                      <span>Tools to Empower Your Mission</span>
                      <h2 className="about-heading-second text-titleeee mt-0">
                        Efficient Tools for NGOs to Manage Volunteers
                      </h2>
                    </div>
                    <p style={{ textAlign: "justify" }}>
                      SevakArmy equips NGOs with powerful, easy-to-use tools to
                      simplify volunteer management. With features like
                      customisable task posting, detailed reports and smooth
                      communication, NGOs can focus on their mission rather than
                      getting caught up in administrative work. Whether it’s
                      recruiting, managing or tracking volunteer efforts, Sevak
                      Army supports NGOs at every step.
                    </p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-5">
          <div className="container mt-2">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-12 col-12">
                <SectionTitle
                  subtitle="Built for NGOs to Achieve More"
                  title="Key Features of SevakArmy for NGOs"
                />
              </div>
            </div>
            <div className="service-wrap mt-4">
              <div className="row justify-content-center align-items-stretch gy-4">
                {Services.slice(0, 10).map((Service, sitem) => (
                  <div
                    className="col col-xl-4 col-lg-5 col-md-5 col-sm-8 col-10"
                    key={sitem}
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
          </div>
        </section>

        <section className="wpo-cta-section section-padding">
          <div className="bg-overlay">
            <div className="container">
              <div className="bg-color">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="cta-wrap">
                      <h2 className="mb-2">Unite with Us for Lasting Changey</h2>
                      <p
                        className="text-center pt-2 px-2"
                        style={{ textAlign: "justify", color: "white" }}
                      >
                        Join our platform today and start connecting with
                        passionate volunteers ready to support your cause.
                        Streamline your operations, track your progress and see
                        the real impact your NGO can make.
                      </p>
                      <div className="d-flex flex-column gap-3 justify-content-center align-items-center w-100">
                        <span> Ready to Empower Your NGO with SevakArmy?</span>
                        <Link
                           to="https://app.sevakarmy.com/" target="_blank"
                          className="theme-btn"
                          style={{ width: "fit-content" }}
                        >
                          Register Your NGO Today
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
    </Fragment>
  );
}

export default NgoKeyFeaturesSection;
