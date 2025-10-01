import React from "react";
import ServiceCard from "../ServiceSection/ServiceCard";
import simg1 from "../../../public/assets/images/service/1.svg";
import simg2 from "../../../public/assets/images/service/2.svg";

function VolunteerEventsCards() {
  const Services = [
    {
      Id: "01",
      sImg: simg1,

      slug: "1",
      description: "Browse events based on your interest and location.",
    },
    {
      Id: "02",
      sImg: simg2,

      slug: "2",
      description: "Register with a simple form.",
    },
    {
      Id: "03",

      slug: "3",
      description: "Receive event updates and guidelines.",
    },
  ];

  return (
    <section>
      <style>{`
            .service-paragraph {
                text-align: center !important;
            }
        `}</style>
      <div className="container">
        <div className="service-wrap">
          <div className="row justify-content-center">
            {Services.map((Service, sitem) => (
              <div className="col col-lg-3 col-md-6 col-sm-6 col-12" key={sitem} style={{ width: "28.3rem" }}>
                <ServiceCard img={Service.sImg} slug={Service.slug} sdescription={Service.description} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default VolunteerEventsCards;
