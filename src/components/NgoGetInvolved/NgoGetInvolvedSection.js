import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import ServiceCard from "../ServiceSection/ServiceCard";
import simg1 from "../../../public/assets/images/service/1.svg";
import Collaboration from "../../../public/assets/images1/ngo/home/project-team.png";
import Resource from "../../../public/assets/images1/ngo/home/resource.png";
import Capacity from "../../../public/assets/images1/ngo/home/capacity.png";
import Application from "../../../public/assets/images1/ngo/home/application.png";
import Approve from "../../../public/assets/images1/ngo/home/talent-recognition.png";
import Collaborating from "../../../public/assets/images1/ngo/home/collaboration.png";
import Efficiency from "../../../public/assets/images1/ngo/home/efficiency.png";
import Donation from "../../../public/assets/images1/ngo/home/donation.png";
import Impact from "../../../public/assets/images1/ngo/home/save-the-world.png";
import Fundraising from "../../../public/assets/images1/ngo/home/fundraising.png";
import NgoBenifits from "./NgoBenifits";
import { Link } from "react-router-dom";
import Image from "next/image";

function NgoGetInvolvedSection() {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };
  const Services = [
    {
      Id: "01",
      sImg: simg1,
      // 
      title: "Partnership Programmes",
      slug: "1",
      description:
        "We offer a range of partnership opportunities for NGOs, including joint projects, resource sharing and capacity-building initiatives. Our partnership programmes are tailored to align with your organisation’s objectives and operational needs.",
    },
    {
      Id: "02",
      sImg: Collaboration,
      // 
      title: "Project Collaboration",
      slug: "2",
      description:
        "Engage in collaborative projects that leverage the strengths of both SevakArmy and your NGO. Whether it’s a community health campaign, an educational initiative or an environmental conservation effort, working together can amplify your impact and reach more beneficiaries.",
    },
    {
      Id: "03",
      sImg: Resource,
      // 
      title: "Resource Sharing",
      slug: "3",
      description:
        "Access a wide-ranging network of resources, including volunteer support, funding opportunities and specialized training workshops. By partnering with SevakArmy, you can tap into a wealth of valuable resources to further enhance your NGO’s capabilities and effectiveness.",
    },
    {
      Id: "04",
      sImg: Capacity,
      // 
      title: "Capacity Building",
      slug: "4",
      description:
        "Participate in capacity-building workshops and training sessions to strengthen your NGO’s operations, management and strategic planning. Our programmes aim to empower your team with the skills and knowledge for sustainable growth and impact.",
    },
  ];

  const Services2 = [
    {
      Id: "01",
      sImg: Application,
      // 
      title: "Submit Your Application",
      slug: "1",
      description:
        "Start by completing our online NGO Partnership Application Form. Provide detailed information about your organisation, which includes your mission, focus areas and previous projects.",
    },
    {
      Id: "02",
      sImg: Approve,
      // 
      title: "Review and Approval",
      slug: "2",
      description:
        "Our team will review your application to ensure alignment with our mission and values. We may request additional information or arrange a meeting to discuss potential collaboration opportunities in detail.",
    },
    {
      Id: "03",
      sImg: Collaborating,
      // 
      title: "Start Collaborating",
      slug: "3",
      description:
        "Begin working with SevakArmy on joint projects, resource-sharing initiatives and capacity-building programmes. Our partnership will involve coordination to maximise impact and achieve shared goals.",
    },
    {
      Id: "04",
      sImg: Efficiency,
      // 
      title: "Capacity Building",
      slug: "4",
      description:
        "Participate in workshops to strengthen your NGO’s operations, management and strategic planning. Our programmes aim to empower your team with the skills for sustainable growth and impact.",
    },
  ];
  const Services3 = [
    {
      Id: "01",
      sImg: Donation,
      // 
      title: "One-Time Donations for Your Projects",
      slug: "1",
      howItWorks:
        "NGOs can list their projects on the platform and donors can contribute directly through JJFIndia, ensuring the funds go where they are needed most.",
      description:
        "As an NGO partner, you can access one-time donations through SevakArmy to support specific projects and initiatives. These funds are directed towards urgent needs, providing critical services, resources and long-term solutions.",
    },
    {
      Id: "02",
      sImg: Impact,
      // 
      title: "Monthly Contributions for Sustained Impact",
      slug: "2",
      howItWorks:
        "NGOs can set up recurring funding options, enabling donors to contribute monthly through JJFIndia for sustained support and project development.",
      description:
        "Secure ongoing support through SevakArmy’s monthly contribution system, helping you maintain and expand long-term projects. These regular donations ensure stability and allow for better project planning and execution.",
    },
    {
      Id: "03",
      sImg: Fundraising,
      // 
      title: "Fundraising Campaigns to Boost Visibility",
      slug: "3",
      howItWorks:
        "Partner NGOs can create campaigns and SevakArmy will help you promote them, with all funds processed securely through JJFIndia.",
      description:
        "Organise or participate in fundraising campaigns hosted by SevakArmy to raise awareness and generate additional resources for your NGO. These campaigns provide greater exposure and community engagement.",
    },
  ];
  return (
    <section className="wpo-about-section-s2 mb-0 mt-4 pb-0 pt-5">
      <div className="container">
        <div className="row justify-content-center mb-3 ">
          <div className="col-lg-6 col-md-12 col-12">
            <SectionTitle subtitle="Get Involved (Services)" title="Programmes for NGOs" />
          </div>
          <p className="mt-0 pt-0 text-center">
            At SevakArmy, we are committed to fostering partnerships with NGOs to amplify our collective impact. Our
            collaborative programmes are designed to support NGOs in advancing their missions and achieving their goals.
            By joining forces with us, your organisation can benefit from enhanced resources, expanded reach and
            increased effectiveness in delivering social impact.
          </p>
        </div>
        <div className="service-wrap">
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
      {/* How to join */}
      <div className="container section-padding">
        <div className="row justify-content-center mb-3 ">
          <div className="col-lg-6 col-md-12 col-12">
            <SectionTitle title="How to Join?"/>
          </div>
          <p className="mt-0 pt-0 fw-bolder text-center">
            Becoming a partner NGO with SevakArmy is a straightforward process. We welcome NGOs of all sizes and
            sectors to collaborate to create positive change. Here’s how you can get involved:
          </p>
        </div>
        <div className="service-wrap">
          <div className="row">
            {Services2.slice(0, 4).map((Service, sitem) => (
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
          <p className="fs-6 fw-bold ms-2 text-center">
            For more information and to get started, visit our “Partner with Us page” or contact our “Partnerships
            Team”.
          </p>
        </div>
      </div>

      {/* Ngo Benifits */}
      <NgoBenifits />

      {/* Partner with SevakArmy: Empower Change Together */}
      <div className="container section-padding">
        <div className="row justify-content-center mb-3 ">
          <div className="col-lg-6 col-md-12 col-12">
            <SectionTitle title=" Empower Change Together" subtitle="Partner with SevakArmy" />
          </div>
          <p className="mt-0 pt-0 fw-bolder text-center">
            SevakArmy offers a unique platform for NGOs to connect with passionate volunteers and secure essential
            resources to amplify their impact. All donations to SevakArmy’s initiatives are handled via JJFIndia,
            ensuring secure and transparent contributions to support your mission.
          </p>
        </div>
        <div className="service-wrap">
          <div className="row">
            {Services3.slice(0, 4).map((Service, sitem) => (
              <div className="col col-lg-4 col-md-6 col-sm-6 col-12" key={sitem}>
                {/* <ServiceCard
                  title={Service.title}
                  img={Service.sImg}
                  slug={Service.slug}
                  sdescription={Service.description}
                /> */}
                <div className="service-item">
                  <div className="icon">
                    <Image src={Service.sImg} alt="img" />
                  </div>
                  <div className="text">
                    <h2>
                      <Link
                        className="services-title-text"
                        onClick={ClickHandler}
                        to={`/service-single/${Service.slug}`}
                      >
                        {Service.title}
                      </Link>
                    </h2>
                    <p className="service-paragraph">{Service.description}</p>
                  </div>
                  <hr />
                  <div className="mt-2">
                    <span className="fw-bold">How It Works</span>
                    <p className="service-paragraph">{Service?.howItWorks}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="fs-6 fw-bold ms-2 text-center">
            By partnering with SevakArmy, NGOs gain access to a broader network of volunteers, funding opportunities
            and project management support. Together, we can drive meaningful, long-lasting change in communities across
            India.
          </p>
        </div>
      </div>
    </section>
  );
}

export default NgoGetInvolvedSection;
