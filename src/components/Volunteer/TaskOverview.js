import React from "react";
import ServiceCard from "../ServiceSection/ServiceCard";
import SectionTitle from "../SectionTitle/SectionTitle";

import pImg1 from "../../../public/assets/images1/school-college/about-us/check-list.png";
import pImg2 from "../../../public/assets/images1/school-college/about-us/completed.png";
import pImg3 from "../../../public/assets/images1/school-college/about-us/track.png";

function TaskOverview() {
  const Services = [
    {
      Id: "01",
      sImg: pImg1,
      
      title: "Pending Approval Tasks",
      slug: "2",
      description:
        "Quickly see which tasks are awaiting approval from volunteers or administrators, ensuring no delays in project start dates.",
    },
    {
      Id: "02",
      sImg: pImg2,
      
      title: "Completed Tasks",
      slug: "1",
      description:
        "Review all completed tasks to evaluate the outcomes, assess the volunteers’ contributions and mark the tasks as finalised.",
    },
    {
      Id: "03",
      sImg: pImg3,
      
      title: "Volunteer Assignment Tracking",
      slug: "3",
      description:
        "Monitor which volunteers have been assigned to specific tasks, track their progress and ensure they meet deadlines.",
    },
  ];
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-md-12 col-12">
          <SectionTitle title="An Overview of Tasks In Progress" />
          <p className="text-center">
            View all active tasks and their current status, whether they are
            underway, paused or waiting for volunteer feedback.
          </p>
        </div>
      </div>
      <div className="service-wrap mt-3">
        <div className="row justify-content-center">
          {Services.slice(0, 3).map((Service, sitem) => (
            <div className="col col-lg-3 col-md-6 col-sm-6 col-12" key={sitem}>
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
  );
}

export default TaskOverview;
