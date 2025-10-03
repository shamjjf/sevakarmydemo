import Image from "next/image";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css";
import "swiper/css/navigation";


// import MeetNetwork from "../../../public/assets/images1/volunteer/home/meet-network.png";
// import icon from "../../../public/assets/images/cta/top-icon.png";
import ServiceCard from "../../components/ServiceSection/ServiceCard";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

// import Path from "../../../public/assets/images1/volunteer/opportunities/ambassador.webp";
import Path from "../../../public/assets/new-images/common/celebration-img.jpg"
// import Ambassador from "../../../public/assets/images1/school-college/ambassador/ambassador-1.webp";
import Ambassador from "../../../public/assets/new-images/school-college/ambassdor/what-is-ambassador.jpg";

// import Networking from "../../../public/assets/images1/school-college/ambassador/culture.webp";
import Networking from "../../../public/assets/new-images/school-college/ambassdor/culture-service.jpg";

import StudentLeadership from "../../../public/assets/images1/school-college/ambassador/student-leadership.webp";
// import Newsletter from "../../../public/assets/images1/volunteer/home/influencer.webp";
import Newsletter from "../../../public/assets/new-images/school-college/ambassdor/tree-plant.jpg";

import Institute from "../../../public/assets/images1/school-college/ambassador/institute.webp";
import Reputationn from "../../../public/assets/images1/school-college/ambassador/reputation.webp";
import rImg1 from "../../../public/assets/images1/school-college/ambassador/leadership.webp";
import rImg2 from "../../../public/assets/images1/school-college/ambassador/coordination.webp";
import rImg3 from "../../../public/assets/images1/school-college/ambassador/volunteer.webp";
import rImg4 from "../../../public/assets/images1/school-college/ambassador/ngo.webp";
import rImg5 from "../../../public/assets/images1/school-college/ambassador/recognition.webp";
import erImg3 from "../../../public/assets/images1/school-college/ambassador/inspiration.webp";
import erImg4 from "../../../public/assets/images1/school-college/ambassador/opportunity.webp";


const Services = [
  {
    Id: "01",
    sImg: rImg1,

    title: "Local Leadership",
    slug: "1",
    description:
      "Ambassadors serve as the primary point of contact between SevakArmy and their institution, representing the platform’s values and goals. They are responsible for guiding students in selecting volunteer opportunities and managing the collaboration between students and NGOs.",
  },
  {
    Id: "02",
    sImg: rImg2,

    title: "Task Coordination",
    slug: "2",
    description:
      "Ambassadors help schools and colleges organise and execute volunteer tasks.  Ambassadors will also track task progress, ensuring that students are actively contributing to causes they care about.",
  },
  {
    Id: "03",
    sImg: rImg3,

    title: "Volunteer Promotion",
    slug: "3",
    description:
      "By actively promoting volunteer opportunities, ambassadors foster a culture of service within their institution. They encourage students to get involved, participate in various volunteer programmes, and spread awareness about the importance of community service. They help recruit students for roles ranging from event planning, tutoring, or community outreach.",
  },
  {
    Id: "04",
    sImg: rImg4,

    title: "Engaging with NGOs",
    slug: "4",
    description:
      "Ambassadors work closely with NGOs to source meaningful tasks that align with students’ skills and interests. They facilitate the connection between student volunteers and community organisations, ensuring students have access to impactful projects that benefit both their development and society.",
  },
  {
    Id: "05",
    sImg: rImg5,

    title: "Recognition and Motivation",
    slug: "4",
    description:
      "Ambassadors are responsible for recognising the contributions of student volunteers and motivating them to participate actively. They will track accomplishments and reward volunteers, encouraging continued involvement.",
  },
];

const Services2 = [
  {
    Id: "01",
    sImg: rImg1,

    title: "Develop Leadership Skills",
    slug: "1",
    description:
      "Ambassadors take on the responsibility of leading volunteer initiatives, managing teams and working with NGOs. They gain hands-on experience in leadership and project management, skills that are highly valuable for their future careers.",
  },
  {
    Id: "02",
    sImg: rImg5,

    title: "Gain Recognition and digital certification",
    slug: "2",
    description:
      "Ambassadors receive official digital certificates of recognition for their contribution to SevakArmy platform and their role in promoting volunteerism. This recognition not only enhances their CVs but also showcases their commitment to community service.",
  },
  {
    Id: "03",
    sImg: erImg3,

    title: "Inspire Change in Others",
    slug: "3",
    description:
      "As role models within their schools or colleges, ambassadors inspire their peers to join volunteer efforts, create a culture of giving and positively influence their local communities. They can play an essential role in changing the lives of others while developing their own sense of purpose.",
  },
  {
    Id: "04",
    sImg: erImg4,

    title: "Exclusive Opportunities",
    slug: "4",
    description:
      "Outstanding ambassadors may be publicly acknowledged and recognised for their contributions. They may be invited to special events or forums where they can network with like-minded individuals, NGOs and professionals from different fields, further enhancing their experience and exposure.",
  },
];

const SchoolCollegeAmbassadorPage = (props) => {
  // const ClickHandler = () => {
  //     window.scrollTo(10, 0);
  // };

  useEffect(() => {
    const rotate = () => {
      const lastChild = document
        .querySelector(".manroted div:last-child")
        .cloneNode(true);
      document
        .querySelectorAll(".manroted div")
        .forEach((div) => div.classList.remove("firstSlide"));
      document.querySelector(".manroted div:last-child").remove();
      document.querySelector(".manroted").prepend(lastChild);
    };

    const intervalId = setInterval(rotate, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <section className="wpo-about-section pt-0">
        <div className="container section-padding pt-5 pb-0">
          <div className="wpo-about-wrap">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-img">
                  <div className="wpo-about-right pt-3">
                    <Image src={Path} height={400} alt="SevakArmy School-College Ambassador Program" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-text p-3 mt-0 pb-1 pb-lg-2 pt-1 pt-lg-2">
                  <div className="wpo-section-title mt-0 mb-3">
                    {/* <span>Benefits</span> */}
                    <h2 className="about-heading-second text-titleeee">
                      SevakArmy School/College Ambassador Programme
                    </h2>
                  </div>
                  <p className="mt-0 pt-0" style={{ textAlign: "justify" }}>
                    SevakArmy School/College Ambassador Programme provides
                    a unique opportunity for schools and colleges to nominate
                    enthusiastic students to lead volunteering efforts in their
                    institutions. These ambassadors will connect students, NGOs,
                    and the community, playing a vital role in encouraging a
                    culture of service and social responsibility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wpo-about-section pt-0">
        <div className="container section-padding pt-4 pt-lg-5">
          <div className="wpo-about-wrap">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-text p-3 mt-0 pb-1 pb-lg-2 pt-1 pt-lg-2">
                  <div className="wpo-section-title mt-0 mb-3">
                    {/* <span>Benefits</span> */}
                    <h2 className="about-heading-second text-titleeee mt-0">
                      What is the Ambassador Programme?
                    </h2>
                  </div>
                  <p className="mt-0 pt-0" style={{ textAlign: "justify" }}>
                    The Ambassador Programme is designed to empower students to
                    take on leadership roles in their schools and colleges by
                    promoting volunteer work through SevakArmy. Ambassadors are
                    the face of the platform within their institution,
                    responsible for managing volunteer activities, promoting
                    events and motivating their peers to contribute to
                    meaningful causes. This role helps ambassadors develop
                    essential life skills like leadership, teamwork, project
                    management and communication while making a tangible impact
                    in their communities.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-img">
                  {/* <div className="wpo-about-left">
                    <Image src={abImg5} alt="img" />
                  </div> */}
                  <div className="wpo-about-right pt-3 pt-lg-5">
                    <Image src={Ambassador} height={384} alt="Ambassador Program for School & College - SevakArmy" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container section-padding pt-0">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-12 col-12">
            <SectionTitle subtitle="Leading Change and Inspiring Action" title="Role of Ambassadors" />
          </div>
        </div>
        <div className="service-wrap mt-3">
          <div className="row justify-content-center  align-items-stretch gy-4">
            {Services.slice(0, 10).map((Service, sitem) => (
              <div
                className="col col-xl-4 col-lg-5 col-md-6 col-sm-8 col-10"
                key={sitem}
              >
                <div className="service-card-wrapper d-flex flex-column h-100">
                  <ServiceCard
                    // width="313px"
                    // height="425px"
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

      <div className="container section-padding pt-3 pt-1">
        <div className="row justify-content-center mb-2">
          <div className="col-lg-6 col-md-12 col-12">
            <SectionTitle
              subtitle="Unlock Leadership "
              title="Why Become an Ambassador?"
            // paragarap="SevakArmy Ambassador Programme offers students more than just volunteer opportunities – it’s a leadership development platform that enhances personal growth and makes a lasting impact in society. By becoming an ambassador, students will: "
            />
          </div>
        </div>
        <div className="service-wrap mt-3">
          <div className="row justify-content-center  align-items-stretch gy-4">
            {Services2.slice(0, 10).map((Service, sitem) => (
              <div
                className="col col-xl-3 col-lg-4 col-md-6 col-sm-8 col-10"
                key={sitem}
              >
                <div className="service-card-wrapper d-flex flex-column h-100">
                  <ServiceCard
                    // width="313px"
                    // height="472px"
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

      <section className="container section-padding pt-3 pt-1">
        <section className="">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-12 col-12">
              <SectionTitle subtitle="Strengthening Student Engagement" title="Benefits for Schools and Colleges" />
            </div>
          </div>
        </section>

        <div className="wpo-about-wrap pt-3">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="wpo-about-text p-3 mt-0 pb-1 pb-lg-2 pt-1 pt-lg-2">
                <div className="custom-panell">
                  <h3>Build a Culture of Service</h3>
                </div>
                <p className="mt-0 pt-0" style={{ textAlign: "justify" }}>
                  Schools and colleges that participate in SevakArmy
                  Ambassador Programme will foster a sense of responsibility and
                  service in their students. The programme encourages students
                  to become actively involved in the betterment of society,
                  which contributes to their overall personal development.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="wpo-about-img d-flex w-100 justify-content-end">
                <div className="wpo-about-right">
                  <Image src={Networking} width={500} alt="Networking & Community Building SevakArmy" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="wpo-about-wrap pt-5">
          <div className="row flex-wrap-reverse">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="wpo-about-img d-flex w-100 justify-content-start">
                <div className="wpo-about-right pt-lg-3">
                  <Image src={Reputationn} width={500} alt="Schools & Colleges Volunteers & Social Responsibilities - SevakArmy" />
                  {/* <Image src="https://placehold.co/324x304/png" alt="Register" /> */}
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="wpo-about-text p-3 mt-0 pb-1 pb-lg-2 pt-1 pt-lg-2">
                <div className="custom-panell">
                  <h3>Enhance Institutional Reputation</h3>
                </div>
                <p className="mt-0 pt-0" style={{ textAlign: "justify" }}>
                  By promoting volunteerism and social responsibility,
                  educational institutions can enhance their reputation as
                  organisations that care about the community. The programme
                  helps position schools and colleges as leaders in shaping
                  responsible, empathetic future citizens.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="wpo-about-wrap pt-5">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="wpo-about-text p-3 mt-0 pb-1 pb-lg-2 pt-1 pt-lg-2">
                <div className="custom-panell">
                  <h3>Recognition for Institutions</h3>
                </div>
                <p className="mt-0 pt-0" style={{ textAlign: "justify" }}>
                  Schools and colleges that support the ambassador programme
                  will also receive recognition for their role in promoting
                  community service. Institutions can highlight their
                  involvement in creating impactful social change through
                  student participation.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="wpo-about-img d-flex w-100 justify-content-end">
                <div className="wpo-about-right pt-lg-3">
                  <Image src={Institute} width={500} alt="Recognition for Institutions - SevakArmy" />
                  {/* <Image src="https://placehold.co/324x304/png" alt="Register" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wpo-about-section section-padding pt-0">
        <div className="container">
          <div className="wpo-about-wrap">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-img">
                  {/* <div className="wpo-about-left">
                    <Image src={abImg5} alt="img" />
                  </div> */}
                  <div className="wpo-about-right pt-0">
                    <Image src={StudentLeadership} height={383} alt="Become Ambassadors & Volunteer for change with SevakArmy" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-text p-3 mt-0 pb-1 pb-lg-2 pt-1 pt-lg-2">
                  <div className="wpo-section-title mt-0 mb-3">
                    <span>How to Get Involved?</span>
                    <h2 className="about-heading-second text-titleeee">
                      Unleash the Power of Student Leadership
                    </h2>
                  </div>
                  <p style={{ textAlign: "justify" }}>
                    Schools and colleges can nominate students who show
                    enthusiasm and dedication to serve as ambassadors. Once
                    selected, these ambassadors will be responsible for creating
                    volunteer teams, promoting upcoming projects and ensuring
                    active participation in events. They will work alongside
                    SevakArmy team and NGOs to organise and manage tasks that
                    align with the goals of the institution. <br />
                    By joining SevakArmy Ambassador Programme, schools and
                    colleges provide their students with a valuable platform to
                    grow, learn and make meaningful contributions to society.
                  </p>
                  {/* <p>
                                        Become a SevakArmy Ambassador today and inspire others to
                                        serve!
                                    </p> */}
                  {/* <div>
                                        <button
                                            className="theme-btn"
                                            onClick={() => props.setShow(true)}
                                        >
                                            Apply Now to Be an Ambassador
                                        </button>
                                    </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wpo-about-section section-padding pt-0">
        <div className="container">
          <div className="wpo-about-wrap">
            <div className="row ">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-text p-3 pt-0 mt-0 pb-1">
                  <div className="wpo-section-title mt-0 mb-3">
                    {/* <span>Key Responsibilities of Ambassadors</span> */}
                    <h2 className="about-heading-second text-titleeee w-100">
                      Key Responsibilities of Ambassadors
                    </h2>
                  </div>
                  <p style={{ textAlign: "justify" }}>
                    SevakArmy Ambassador Programme for schools and colleges
                    is an exceptional initiative that not only promotes
                    volunteerism but also empowers students to step up as
                    leaders and changemakers. It offers a structured way for
                    educational institutions to integrate community service into
                    their core values while providing students with real-world
                    experiences that will shape them into responsible,
                    compassionate leaders of tomorrow.
                  </p>
                  <ul className="list-style-disccc" style={{ paddingLeft: '0px' }}>
                    <li
                      className="mb-1"
                      style={{ width: "fit-content", color: "#1B1212" }}
                    >
                      <span className="list-bullet me-2"></span> Organising and
                      promoting volunteer tasks.
                    </li>
                    <li
                      className="mb-1"
                      style={{ width: "fit-content", color: "#1B1212" }}
                    >
                      <span className="list-bullet me-2"></span> Collaborating
                      with NGOs and community groups
                    </li>
                    <li
                      className="mb-1"
                      style={{ width: "fit-content", color: "#1B1212" }}
                    >
                      <span className="list-bullet me-2"></span> Ensuring smooth
                      execution of volunteer projects.
                    </li>
                    <li
                      className="mb-1"
                      style={{ width: "fit-content", color: "#1B1212" }}
                    >
                      <span className="list-bullet me-2"></span> Tracking and
                      reporting progress on tasks.
                    </li>
                    <li
                      className="mb-1"
                      style={{ width: "fit-content", color: "#1B1212" }}
                    >
                      <span className="list-bullet me-2"></span> Recognising and
                      motivating student volunteers.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-img">
                  {/* <div className="wpo-about-left">
                    <Image src={abImg5} alt="img" />
                  </div> */}
                  <div className="wpo-about-right pt-3 pt-lg-5">
                    <Image src={Newsletter} width={440} alt="Key Responsibilities of Ambassadors SevakArmy" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wpo-cta-section section-padding mt-0">
        <div className="bg-overlay">
          <div className="container">
            <div className="bg-color">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="cta-wrap">
                    <h2 className="mb-2">Join the Ambassador Programme Today</h2>
                    <p
                      className="text-center pt-2 px-2"
                      style={{ textAlign: "justify", color: "white" }}
                    >
                      Become an ambassador with SevakArmy and take on a leadership role that empowers you to inspire the next generation of student leaders. Gain valuable skills, create social impact, and represent your institution in meaningful ways.
                    </p>
                    <div className="d-flex flex-column gap-3 justify-content-center align-items-center w-100 mt-3">
                      <Link
                        to="https://app.sevakarmy.com/" target="_blank"
                        className="theme-btn"
                        style={{ width: "fit-content" }}
                      >
                        Join Now
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
  );
};

export default SchoolCollegeAmbassadorPage;
