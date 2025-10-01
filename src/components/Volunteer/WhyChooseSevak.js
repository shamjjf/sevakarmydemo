import React from "react";
import ServiceCard from "../ServiceSection/ServiceCard";
import simg1 from "../../../public/assets/images/service/badge.png";
import simg2 from "../../../public/assets/images/service/trophy.png";
import SectionTitle from "../SectionTitle/SectionTitle";

import Rimg3 from "../../../public/assets/images/service-single/tracking.png";
import Rimg1 from "../../../public/assets/images/service-single/csr.png";

function WhyChooseSevak() {
  const Services = [
    {
      Id: "01",
      sImg: Rimg1,
      sImg: simg1,
      title: "Seamless Integration of CSR",
      slug: "2",
      description:
        "We provide a streamlined, user-friendly platform that makes it easy to incorporate CSR activities into your business operations without disrupting your workflow.",
    },
    {
      Id: "02",
      sImg: simg2,
      
      title: "Customized Volunteering Opportunities",
      slug: "1",
      description:
        "Whether your focus is environmental conservation, education or poverty alleviation, we offer tailored volunteer opportunities that align with your company’s mission and values.",
    },
    {
      Id: "03",
      sImg: Rimg3,
      
      title: "Real-Time Impact Tracking",
      slug: "3",
      description:
        "Our platform allows you to track every volunteer hour, every task completed and the overall social impact of your efforts. Measure your success and celebrate your milestones.",
    },
    {
      Id: "04",
      
      
      title: "Employee Engagement Made Easy",
      slug: "4",
      description:
        "Sevak Army’s intuitive tools empower your employees to get involved, increasing engagement, morale and retention. When your employees give back, they feel more connected to the company’s values.",
    },
    {
      Id: "05",
      
      
      title: "Recognition and Rewards",
      slug: "4",
      description:
        "With our comprehensive leaderboard and achievement system, we recognise the efforts of both organisations and individual employees, encouraging a culture of ongoing volunteerism.",
    },
  ];
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-md-12 col-12">
          <SectionTitle title="Why Choose Sevak Army?" />
          <p className="text-center">
            Choosing Sevak Army as your CSR partner offers your organisation a
            wealth of benefits that go beyond traditional volunteer platforms.
            Here’s why businesses across industries trust us to lead their
            volunteer efforts.
          </p>
        </div>
      </div>
      <div className="service-wrap mt-3">
        <div className="row justify-content-center">
          {Services.slice(0, 3).map((Service, sitem) => (
            <div className="col col-lg-4 col-md-7 col-sm-8 col-12" key={sitem}>
              <div className="service-card-wrapper d-flex flex-column h-100">
                <ServiceCard
                  height="395px" title={Service.title}
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

export default WhyChooseSevak;
