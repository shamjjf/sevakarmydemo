import ServiceCard from "../ServiceSection/ServiceCard";

import SectionTitle from "../SectionTitle/SectionTitle";

import ConnectNGO from "../../../public/assets/images1/ngo/home/connection.webp";
import Support from "../../../public/assets/images1/ngo/home/volunteer-support.webp";
import NGO from "../../../public/assets/images1/ngo/home/ngo.webp";
import Civic from "../../../public/assets/images1/ngo/home/civic.webp";

function NgoWhatWeDo() {
  const Services = [
    {
      Id: "01",
      sImg: ConnectNGO,
      // 
      title: "Connect NGOs with Passionate Volunteers",
      slug: "1",
      description:
        "Sevak Army reduces the gap between NGOs and dedicated volunteers, helping you find the right people to support your cause and drive impactful change.",
    },
    {
      Id: "02",
      sImg: Support,
      // 
      title: "Provide Various Volunteer Support",
      slug: "2",
      description:
        "We enable NGOs to post a wide range of tasks, from short-term to long-term projects and connect with volunteers who have the skills and passion to meet your needs.",
    },
    {
      Id: "03",
      sImg: NGO,
      // 
      title: "Support for All Types of NGOs",
      slug: "3",
      description:
        "No matter the size or focus of your NGO, Sevak Army is here to support your efforts, from community outreach to specialised projects.",
    },
    {
      Id: "04",
      sImg: Civic,
      // 
      title: "Enable Effective Volunteer Engagement",
      slug: "4",
      description: "Our platform helps you manage volunteers efficiently, ensuring they contribute in ways that fit their time while making a meaningful impact on your NGO's mission.",
    },
  ];

  return (
    <section>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-12 col-12">
            <SectionTitle subtitle="What We Do?" title="Creating Impact, Together" />
          </div>
        </div>
        <div className="service-wrap mt-3">
          <div className="row justify-content-center align-items-stretch gy-4">
            {Services.slice(0, 4).map((Service, sitem) => (
              <div className="col col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12" key={sitem}>
                <ServiceCard
                  // height="450px"
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
}

export default NgoWhatWeDo;
