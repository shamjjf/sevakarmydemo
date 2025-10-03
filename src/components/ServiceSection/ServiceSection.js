import React from "react";
import Services from "../../api/Services";
import ServiceCard from "./ServiceCard";
import SectionTitle from "../SectionTitle/SectionTitle";

const ServiceSection = (props) => {
  return (
    <section className={"section-padding " + props.hclass}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 col-md-12 col-12">
            <SectionTitle
              subtitle="How Does It Work?"
              title="SevakArmy makes volunteer management easy and rewarding."
            />
          </div>
        </div>
        <div className="service-wrap mt-3">
          <div className="row">
            {Services.slice(0, 4).map((Service, sitem) => (
              <div className="col col-lg-3 col-md-6 col-sm-6 col-12" key={sitem}>
                <ServiceCard
                  title={Service.title}
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
  );
};

export default ServiceSection;
