import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import metadata from './../../app/[[...slug]]/metadata.json';
import useMetaTags from "../../app/hooks/useMetaTags";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import NewsletterPopup from "../../components/NewsletterPopup";

import Logo from "../../../public/assets/images/logo.svg";
import abImg2 from "../../../public/assets/new-images/school-college/about-us-home.jpg";
// import About2 from "../../../public/assets/images1/volunteer/about-us/sevak-army-volunteer-about-us-2.webp";
import About2 from "../../../public/assets/new-images/common/our-mission.jpg";
// import About3 from "../../../public/assets/images1/volunteer/about-us/sevak-army-volunteer-about-us-3.webp";
import About3 from "../../../public/assets/new-images/common/our-vision.jpg";

// import icon from "../../../public/assets/images/cta/top-icon.png";

const featuresData = [
  {
    iconClass: "flaticon-volunteer",
    title: "Our Mission",
    img: About2,
    alt: 'Our Misson SevakArmy',
    description:
      "At SevakArmy, we connect students with meaningful volunteering opportunities to promote leadership, teamwork, and social responsibility through real-world experiences that positively impact society. To motivate students further, they will earn leaderboard points for their contributions, encouraging healthy competition and recognition of their efforts in making a difference.",
  },
  {
    iconClass: "flaticon-solidarity",
    title: "Our Vision",
    img: About3,
    alt: 'Our Vision - SevakArmy',
    description:
      "At SevakArmy, our vision is to provide a platform to schools and colleges to engage students in volunteering, fostering responsibility, and community involvement. We aim to develop key life skills like leadership, teamwork, and problem-solving, empowering students to become socially conscious individuals committed to making a positive impact in society.",
  },
];


const SchoolCollegePages = ({props, path}) => {
  const [shownewsletter, setShowNewsletter] = useState(false);

  const [metaData, setMetaData] = useState({title: "Loading...."})

  useMetaTags(metaData);

  useEffect(() => {

    // Load metadata 
    let data = metadata[path]
    
      if (!data) {
        data =  {
           title: "Page Not Found - SevakArmy",
           description: "The page you are looking for does not exist.",
           robots: "noindex, nofollow",
         }
        setMetaData(data)
      }

      setMetaData({
        title: data.title,
        description: data.description,
        keywords: data.keywords,
        robots: data.robots,
        alternates: {
          canonical: data.canonical,
        },
        openGraph: data.openGraph,
        twitter: data.twitter,
      });

  }, []);

  return (
    <>
      <Navbar Logo={Logo} hclass={"wpo-site-header"} />
      <PageTitle pageTitle={"About Us"} pagesub={"About Us"} link={"/school-college"} />

      <section className="wpo-about-section section-padding pb-0">
        <div className="container">
          <div className="wpo-about-wrap">
            <div className="row align-items-center mt-3">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-img">
                  {/* <div className="wpo-about-left">
                    <Image src={abImg1} alt="img" />
                  </div> */}
                  <div className="">
                    <Image src={abImg2} style={{height:'auto', objectFit:'contain'}} alt="Volenteering oppertunities for Shools & Colleges - SevakArmy" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-text mt-4 mb-0 pb-0">
                  <div className="wpo-section-title mb-3">
                    <span>About Us</span>
                    <h6 className="about-heading-second fw-bold text-titleeee">
                      Who We Are?
                    </h6>
                  </div>
                  <div className="pb-0 mb-0">
                    <h4>Promoting volunteerism among the youth!</h4>
                    <p className="mb-0"> SevakArmy is a platform that connects schools, colleges,
                      and students with meaningful volunteer opportunities to make
                      a positive impact in society. We aim to inspire students to
                      participate in community service by offering flexible,
                      real-world tasks that align with their skills and interests.
                      Our goal is to nurture a culture of social responsibility,
                      leadership and compassion among students, empowering the
                      next generation to build stronger, more caring communities.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="wpo-features-area pt-3 mt-5 section-padding">
            <div className="features-wrap">
              <div className="row justify-content-center align-items-stretch">
                {featuresData.map((feature, index) => (
                  <div className="col col-lg-5 col-md-6 col-12" style={{ minHeight: '100%' }} key={index}>
                    <div className="feature-item-wrap h-100">
                      <div className="feature-item h-100">
                        <div className="feature-text h-100">
                          <div className="mb-4 d-flex justify-content-center align-items-center">
                            <Image
                              src={feature.img}
                              alt={feature.alt}
                              className="img-fluid"
                              style={{
                                height: "300px",
                                width: "100%",
                                objectFit: "cover",
                                maxHeight: "320px",
                              }}
                            />
                          </div>
                          <h2 className="fw-bold px-2">{feature.title}</h2>
                          <div className="p-2 h-100">
                            {<p className="p-2">{feature.description}</p>}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>

      <section className="wpo-cta-section section-padding">
        <div className="bg-overlay">
          <div className="container">
            <div className="bg-color">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="cta-wrap">
                    <h2 className="mb-2">Crafting Active Volunteers</h2>
                    <p
                      className="text-center pt-2 px-2"
                      style={{ textAlign: "justify", color: "white" }}
                    >
                      Empower your students with real-world experiences that
                      build leadership, teamwork and social responsibility.
                      Join SevakArmy today to inspire the next generation of
                      change-makers!
                    </p>
                    <div className="d-flex flex-column gap-3 justify-content-center align-items-center w-100">
                      <Link
                        to="https://app.sevakarmy.com/" target="_blank"
                        className="theme-btn"
                        style={{ width: "fit-content" }}
                      >
                        Get Involved Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Scrollbar />
      <NewsletterPopup
        shownewsletter={shownewsletter}
        setShowNewsletter={setShowNewsletter}
      />
    </>
  );
};

export default SchoolCollegePages;
