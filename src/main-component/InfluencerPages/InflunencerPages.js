import { useEffect, useState } from "react";
import Image from "next/image";
import { Link } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import metadata from './../../app/[[...slug]]/metadata.json';
import useMetaTags from "../../app/hooks/useMetaTags";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import PageTitle from "../../components/pagetitle/PageTitle";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import ServiceCard from "../../components/ServiceSection/ServiceCard";

import Logo from "../../../public/assets/images/logo.svg";
import abut3 from "../../../public/assets/new-images/influencer/about-us/hero.jpg";
import Cimg1 from "../../../public/assets/images1/influencer/pages/sevak-army-influencer-pages-5.webp";
import Cimg2 from "../../../public/assets/images1/influencer/pages/sevak-army-influencer-pages-3.webp";
import Cimg3 from "../../../public/assets/images1/influencer/pages/sevak-army-influencer-pages-2.webp";
import Cta1 from "../../../public/assets/images/cta/shape-1.webp";
import Cta3 from "../../../public/assets/images/cta/shape-2.webp";
import tmImg1 from "../../../public/assets/images1/influencer/about-us/trustworthiness.webp";
import tmImg2 from "../../../public/assets/images1/influencer/about-us/compassion.webp";
import tmImg3 from "../../../public/assets/images1/influencer/about-us/sustainable-development.webp";
import tmImg4 from "../../../public/assets/images1/influencer/about-us/impact.webp";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const Testimonial = [
  {
    id: "01",
    img: tmImg1,
    text: "We believe in being honest and fair in everything we do. We make sure that our actions are transparent and that everyone involved in  Sevak Army community is treated with respect.",
    title: "Integrity",
  },
  {
    id: "02",
    img: tmImg2,
    text: "Compassion is very important to us. We focus on helping communities in need and encourage influencers to raise awareness about the issues that matter most to these groups.",
    title: "Compassion",
  },
  {
    id: "03",
    img: tmImg3,
    text: "We are committed to finding long-term solutions for big problems. We focus on education, healthcare and protecting the environment to create positive change that lasts.",

    title: "Sustainability",
  },
  {
    id: "04",
    img: tmImg4,
    text: "We want to see real and measurable change. Every action taken by influencers and their followers aims to improve lives, find lasting solutions to social challenges, and inspire future generations.",
    title: "Impact",
  },
];

const InflunencerPages = ({path}) => {

  const [metaData, setMetaData] = useState({title: "Loading...."})

  useMetaTags(metaData);

  useEffect(() => {

    // Load metadata 
    let data = metadata[path]
    
      if (!data) {
        data =  {
           title: "Page Not Found - Sevak Army",
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

  const causesData2 = [
    {
      id: 1,
      slug: "1",
      title: "Our Mission",
      campaign: "",
      image: Cimg1,
      //  Simage: Csimg1,
      raisedAmount: 8000,
      goalAmount: 10000,
      description:
        "Our mission is to inspire and encourage individuals to join  Sevak Army, aiming to achieve 2 million service hours committed to making a significant social impact. By fostering a culture of giving back, we strive to create a platform that uplifts underserved communities and enriches the lives of our volunteers.",
    },
    {
      id: 2,
      slug: "2",
      title: "Our Vision",
      campaign: "",
      image: Cimg2,
      //  Simage: Csimg2,
      raisedAmount: 4000,
      goalAmount: 10000,
      description:
        "We envision a world where everyone is empowered to contribute to the greater good. Our efforts aim to build a strong network of volunteers who work together to address pressing social issues, promote sustainability, and uplift those in need. We can create lasting change and inspire future generations to continue this mission by harnessing the power of collective action.",
    },
    {
      id: 3,
      slug: "3",
      title: "The Role of Influencers",
      campaign: "",
      image: Cimg3,
      // Simage: Csimg3,
      raisedAmount: 8692,
      goalAmount: 10000,
      description:
        "Influencers play a crucial role in our mission. By using their platforms, they can inspire their followers to join  Sevak Army and take action. Influencers help spread the word about important causes, encourage people to volunteer and support our message of social change. ",
    },
  ];


  return (
    <>
      <Navbar Logo={Logo} hclass={"wpo-site-header"} />
      <PageTitle pageTitle={"About Us"} pagesub={"About Us"} link={"/influencer"} />
      <Scrollbar />
      <section className="wpo-about-section-s3 pb-0 pt-5 mt-md-4">
        <div className="container">
          <div className="wpo-about-wrap">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-img">
                  <div className="">
                    <Image src={abut3} alt="Empowring Individuals in communities" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-text mt-3">
                  <div className="wpo-section-title">
                    <span>About Us</span>
                    <h2 className="text-titleeee">Together, We Build a Brighter Future!</h2>
                  </div>
                  <p className="" style={{ fontSize: '22px', textAlign: 'justify' }}>
                    At Sevak Army, we are dedicated to empowering individuals to make a positive difference in their
                    communities through volunteerism. Our platform connects passionate people with meaningful volunteer
                    opportunities, enabling them to contribute to vital causes such as education, healthcare and
                    sustainability. We believe that together, we can create a brighter future for all.
                  </p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container section-padding">
        <div className="">
          <section className={"wpo-fun-fact-section-s3 pb-0"}>
            <div className="container">
              <div className="service-wrap">
                <div className="row justify-content-center align-items-stretch gy-4">
                  {causesData2.map((Service, sitem) => (
                    <div className="col col-lg-4 col-md-8 col-sm-10 col-12" key={sitem}>
                      <div className="service-item px-4 sevak-custom-carddd h-100">
                        <div className="text">
                          <h2 className="fw-bold mt-0" style={{ fontSize: "30px" }}>
                            {Service.title}
                          </h2>
                          <p
                            className="service-paragraph volunteer-home-text text-center pt-3"
                            style={{ textAlign: "justify", fontSize: "26px" }}
                          >
                            {Service.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section className="wpo-about-section section-padding pt-0 mt-2">
        <div className="container">
          <div className="service-wrap">
            <SectionTitle subtitle="Driven by Integrity, Compassion, and Impact!" title="Guiding Principles of Sevak Army" paragarap="" />
            <div className="row justify-content-center align-items-stretch gy-4 mt-3">
              {Testimonial.slice(0, 10).map((Service, sitem) => (
                <div className="col col-xl-3 col-lg-5 col-md-6 col-sm-8 col-11" key={sitem}>
                  <div className="service-card-wrapper d-flex flex-column h-100">
                    <ServiceCard
                      // height="453px"
                      title={Service.title}
                      img={Service.img}
                      slug={Service.slug}
                      sdescription={Service.text}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      <section className="wpo-cta-section">
        <div className="shape-1">
          <Image src={Cta1} alt="Influencer" />
        </div>
        <div className="bg-overlay">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="cta-wrap">
                  <h2 className="mb-2"> Join Us in Creating Success Stories </h2>
                  <p style={{ color: 'whitesmoke' }}>
                    At Sevak Army, influencer involvement goes beyond raising awareness -it delivers real impact. As an
                    influencer, you have the power to inspire change. Encourage your followers to join  Sevak Army
                    and help drive meaningful social work. Together, we can support NGOs, empower communities and
                    amplify causes that matter. Whether contributing to education, the environment or women’s
                    empowerment,  Sevak Army offers the platform, resources and community to make a difference.
                    Invite your followers to subscribe and start making the world a better place today.
                  </p>

                  <Link
                   to="https://app.sevakarmy.com/" target="_blank"
                    className="theme-btn"
                    style={{ width: "fit-content", textTransform: 'none' }}
                  >
                    Join &amp; Inspire
                  </Link>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shape-2">
          <Image src={Cta3} alt="Influencer" />
        </div>
      </section>


      <Footer />
    </>
  );
};

export default InflunencerPages;
