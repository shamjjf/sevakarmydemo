import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { Navigation, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css/navigation";

import SectionTitle from "../SectionTitle/SectionTitle";
import NewsletterPopup from "../NewsletterPopup";
import ServiceCard from "../ServiceSection/ServiceCard";

// import icon from "../../../public/assets/images/cta/top-icon.png";
// import Services from "../../api/Services";
// import ServiceCard from "./ServiceCard";
// import SectionTitle from "../SectionTitle/SectionTitle";
// import blogs from "../../api/blogs";
// import Instagram from "../../api/Instagram";


import vsImg1 from "../../../public/assets/images/service/opportunity.webp";
import abImg2 from "../../../public/assets/images1/school-college/ambassador/corporate-responsibility.webp";
// import Newsletterrr from "../../../public/assets/images1/organisation/home/news.webp";
import Newsletterrr from "../../../public/assets/new-images/common/newsletter.jpg";
import vsImg2 from "../../../public/assets/images/service/experience.webp";
import vsImg3 from "../../../public/assets/images/service/accredited.webp";
import vsImg4 from "../../../public/assets/images/service/customer-service.webp";

/* team imags */
import team1 from "../../../public/assets/images1/team/sevak-army-team-1.webp";
import team2 from "../../../public/assets/images1/team/sevak-army-team-2.webp";
import team3 from "../../../public/assets/images1/team/sevak-army-team-7.webp";
import team4 from "../../../public/assets/images1/team/sevak-army-team-5.webp";
import team5 from "../../../public/assets/images1/team/sevak-army-team-10.webp";

/* HeroSlide Image  */
import HeroSlide1 from "../../../public/assets/images1/organisation/home/sevak-army-organization-home-slider-11.webp";
import HeroSlide2 from "../../../public/assets/images1/organisation/home/sevak-army-organization-home-slider-2.webp";
import HeroSlide3 from "../../../public/assets/images1/organisation/home/sevak-army-organization-home-slider-33.webp";
import HeroSlide4 from "../../../public/assets/images1/organisation/home/sevak-army-organization-home-slider-14.webp";

// import About4 from "../../../public/assets/images1/organisation/home/sevak-army-organization-home-1.webp";
import About4 from "../../../public/assets/new-images/organizations/hero-image-1.jpg";
import About4s2 from "../../../public/assets/images/slider/stick-man.svg";
import image1 from "../../../public/assets/images1/team/sevak-army-team-8.webp";
import image2 from "../../../public/assets/images1/team/sevak-army-team-4.webp";
import image3 from "../../../public/assets/images1/team/sevak-army-team-5.webp";
import Shape from "../../../public/assets/images/testimonial/bg.webp";
import Difference from "../../../public/assets/images1/volunteer/home/difference.webp";
import Pace from "../../../public/assets/images1/volunteer/home/speed.webp";
import Productivity from "../../../public/assets/images1/volunteer/home/productivity.webp";

const Services2 = [
  {
    Id: "01",
    sImg: Difference,
    //
    title: "ABC Tech Pvt Ltd",
    slug: "1",
    description: "1,500 Volunteer Hours",
    subdes: "CSR Focus: Education and Sustainability.",
  },
  {
    Id: "02",
    sImg: Pace,
    //
    title: "Green Earth Solutions ",
    slug: "2",
    description: "1,350 Volunteer Hours",
    subdes: "CSR Focus: Environmental Conservation.",
  },
  {
    Id: "03",
    sImg: Productivity,
    //
    title: "Inspire Enterprises",
    slug: "3",
    description: "950 Volunteer Hours",
    subdes: "CSR Focus: Education and Youth Mentorship.",
  },
  {
    Id: "04",
    sImg: Productivity,
    //
    title: "Harmony Innovations",
    slug: "3",
    description: "700 Volunteer Hours",
    subdes: "CSR Focus: Women’s Empowerment and Child Welfare.",
  },
];

const Services = [
  {
    Id: "01",
    sImg: vsImg1,
    title: "Motivate Employees to Volunteer",
    slug: "1",
    description:
      "Motivate Employees to Volunteer Organisations can inspire employees to join the Sevak Army, where they can use their skills to contribute to important causes. This helps build a strong sense of community and responsibility.",
  },
  {
    Id: "02",
    sImg: vsImg2,

    title: "Digital Certificates for Recognition",
    slug: "2",
    description:
      "Employees earn digital certificates for their volunteering work, recognising their dedication to helping others. They can proudly share these accomplishments, which are great for both personal and professional growth.",
  },
  {
    Id: "03",
    sImg: vsImg3,
    title: "Measure CSR Impact",
    slug: "3",
    description:
      "Each employee’s volunteer hours count towards the organisation’s overall CSR impact, making it easy to showcase results and the organisation’s dedication to giving back.",
  },
  {
    Id: "04",
    sImg: vsImg4,

    title: "Create a Culture of Service",
    slug: "3",
    description:
      "Our points, digital badges and leaderboard make volunteering more engaging for employees. This system keeps them motivated to participate, enhancing the organisation’s overall CSR impact.",
  },
];

const Testimonial = [
  {
    id: "01",
    text: "Sevak Army enabled our organisation to give back meaningfully. Through CSR initiatives, we engaged employees in impactful volunteer projects, strengthening our community ties and fostering a culture of social responsibility.",
    title: "CSR Manager",
    subtitle: "Manager",
    image: image1,
    alt: 'CSR Manager',
  },
  {
    id: "02",
    text: "Registering with Sevak Army transformed our CSR efforts. The platform provided seamless access to volunteer opportunities that aligned with our values, making it easy for us to contribute to lasting change.",
    title: "CSR Lead",
    subtitle: "Leader",
    image: image2,
    alt: 'CSR Lead',
  },
  {
    id: "03",
    text: "Sevak Army made our CSR initiatives more impactful. Their streamlined approach allowed us to connect with causes that resonated with our mission, helping us drive real social impact.",
    subtitle: "CSR Coordinator",
    title: "CSR Coordinator",
    image: image3,
    alt: 'CSR Coordinator',
  },
];

const Home = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const CustomPrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <i className="flaticon-right-arrow-1"></i>
      </div>
    );
  };

  const CustomNextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <i className="flaticon-left-arrow"></i>
      </div>
    );
  };

  const settings1 = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
          arrows: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };
  const [shownewsletter, setShowNewsletter] = useState(false);

 

  return (
    <>
      <section className="static-hero-s3">
        <div className="hero-container">
          <div className="hero-inner align-items-center">
            <div className="container-fluid">
              <div className="hero-content heroo-contenttt">
                <div className="slide-title-sub">
                  <h6>Empowering Purpose Through Service</h6>
                </div>
                <div className="slide-title">
                  <h2>Helping You Achieve Your CSR Goals</h2>
                </div>
                <div className="slide-text">
                  <p>
                    Register your organisation on Sevak Army platform and encourage your employees to engage in social
                    work.
                  </p>
                </div>
                <div className="hero-btn">
                  <Link to="https://app.sevakarmy.com/" target="_blank" className="theme-btn">
                    Join Sevak Army
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Swiper
          modules={[Autoplay, Navigation, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          speed={1000}
          parallax={true}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 1800,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <div className="slide-inner slide-bg-image slide-bg-image9" style={{ backgroundImage: `url(${HeroSlide1})` }}></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-inner slide-bg-image slide-bg-image10" style={{ backgroundImage: `url(${HeroSlide2})` }}></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-inner slide-bg-image slide-bg-image11" style={{ backgroundImage: `url(${HeroSlide3})` }}></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-inner slide-bg-image slide-bg-image12" style={{ backgroundImage: `url(${HeroSlide4})` }}></div>
          </SwiperSlide>
          ...
        </Swiper>
      </section>
      <section className="wpo-about-section-s4 section-padding">
        <div className="container">
          <div className="wpo-about-wrap">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12  order-lg-2">
                <div className="wpo-about-img-s5">
                  <div className="image">
                    <Image src={About4} width={498} height={498} style={{height:'auto', }} alt="Achive Organisation CSR Goals with Sevak Army" />
                  </div>
                  <div className="wpo-supporter">
                    <div className="wpo-supporter-text">
                      <div className="icon">
                        <i>
                          <Image src={About4s2} alt="Achive Organisation CSR Goals with Sevak Army" />
                        </i>
                      </div>
                      <div className="content">
                        <h3>100+</h3>
                        <p>Happy Organisations</p>
                      </div>
                    </div>
                    <div className="wpo-supporter-img">
                      <ul className="wpo-supporter-slide">
                        <Slider {...settings}>
                          <li data-bs-toggle="tooltip" data-bs-html="true" title="Aliza Anny">
                            <Image src={team1} width={60} alt="Team" />
                          </li>
                          <li data-bs-toggle="tooltip" data-bs-html="true" title="David Miller">
                            <Image src={team2} alt="Team" />
                          </li>
                          <li data-bs-toggle="tooltip" data-bs-html="true" title="Maria Silva">
                            <Image src={team3} alt="Team" />
                          </li>
                          <li data-bs-toggle="tooltip" data-bs-html="true" title="Takila Mas">
                            <Image src={team4} alt="Team" />
                          </li>
                          <li data-bs-toggle="tooltip" data-bs-html="true" title="Jenny Lawba">
                            <Image src={team5} alt="Team" />
                          </li>
                        </Slider>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 order-lg-1">
                <div className="wpo-about-text">
                  <div className="wpo-section-title">
                    <span>We Are Here To Help You!</span>
                    <h2 className="text-titleeee">Achieve Your CSR Goals With Ease</h2>
                  </div>
                  <p>
                    By registering your organisation with Sevak Army, you can encourage your employees to engage in
                    social work and strengthen your CSR initiatives while creating a meaningful impact in society.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wpo-about-section pt-0">
        <div className="container section-padding pt-0">
          <div className="wpo-about-wrap">
            <div className="row flex-wrap-reverse">
              <div className="col-lg-5 col-md-12 col-12">
                <div className="wpo-about-img">
                  <div className="wpo-about-right pt-3" style={{textAlign:'center'}}>
                    <Image src={abImg2} height={275} alt="CSR Responsibilities helping organisation - Sevak Army" />
                  </div>
                </div>
              </div>
              <div className="col-lg-7 col-md-12 col-12">
                <div className="wpo-about-text p-3 mt-0 pb-1 pb-lg-2 pt-1 pt-lg-2 pt-0 pb-0">
                  <div className="wpo-section-title mt-0 mb-3">
                    <h2 className="about-heading-second text-titleeee">
                      Who Are We?
                    </h2>
                  </div>
                  <p className="mt-0 pt-0 mb-0" style={{ textAlign: "justify" }}>
                    We’re a platform dedicated to helping organisations engage their employees in impactful volunteer
                    work, making it easier to support communities and achieve Corporate Social Responsibility (CSR)
                    goals. Our mission is to enable businesses to make a difference by integrating social responsibility
                    into their daily work. We envision a future where organisations lead the way in creating positive
                    change - focusing not only on profit but also on uplifting communities and contributing to a better
                    world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={"section-padding pt-0 mt-3" + "wpo-service-section pt-0"}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xxl-8 col-md-12 col-12">
              <SectionTitle
                // subtitle="How Does It Work?"
                title="How Organisations can Drive CSR through Sevak Army?"
                paragarap="Sevak Army is a platform for organisations to involve their employees in meaningful volunteer work as part of Corporate Social Responsibility (CSR) efforts. By registering organisations can encourage their teams to take part in various social initiatives, making a real change in communities."
              />
            </div>
          </div>
          <div className="service-wrap mt-3">
            <div className="row justify-content-center  align-items-stretch gy-4">
              {Services.slice(0, 4).map((Service, sitem) => (
                <div className="col col-xl-6 col-lg-6 col-md-7 col-sm-8 col-12" key={sitem}>
                  <ServiceCard
                    // height="390px"
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

      <section className="wpo-cta-section-s3 section-padding pt-0 pb-0">
        <div className="container">
          <div className="bg-color" style={{ background: "#007560" }}>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="cta-wrap">
                  <h2 className="mb-3">Start Your CSR Journey Today</h2>
                  <p className="text-center" style={{ color: "whitesmoke" }}>
                    Empower your teams, encourage community service and make a positive impact. Join us today!{" "}
                  </p>
                  <Link to="https://app.sevakarmy.com/" target="_blank" className="theme-btn mt-3">
                    Get Started Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={"section-padding pb-0"}>
        <div className="container">
          <div className="row justify-content-center mb-3">
            <div className="col-lg-6 col-md-12 col-12">
              <SectionTitle subtitle="Success Stories from Organisations" title="Testimonials" />
            </div>
          </div>
          <div className="wpo-testimonial-slider">
            <Slider {...settings1}>
              {Testimonial.map((Testimonial, item) => (
                <div className="testimonial-item" key={item}>
                  <div className="content" style={{ height: "540px" }}>
                    <div className="icon">
                      <i className="flaticon-quote"></i>
                    </div>
                    <p>{Testimonial.text}</p>
                    <div className="shape">
                      <Image src={Shape} alt="Team" />
                    </div>
                  </div>
                  <div className="bottom-content">
                    <div className="image">
                      <Image src={Testimonial.image} width={60} alt="Team" />
                    </div>
                    <div className="text">
                      <h3>{Testimonial.title}</h3>
                      <span>{Testimonial.subtitle}</span>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="w-100 d-flex justify-content-center mt-5 mb-3">
            <div className="col-lg-6 col-md-12 col-12 justify-content-center">
              <h2 className="text-center" style={{ fontWeight: "bold" }}>
                Register Your Organisation on Sevak Army and Make a Positive Impact
              </h2>
              <p className="text-center">Take the first step towards building a socially responsible organisation.</p>
              <div className="d-flex justify-content-center mt-3">
                <button className="theme-btn" to="https://app.sevakarmy.com/" target="_blank">
                  Register Your organisation Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section added as per requirement */}

      <div className="container section-padding">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-12 col-12">
            <SectionTitle
              subtitle="Leaderboard"
              title="Celebrate Your Impact!"
              paragarap="Climb the ranks, track your CSR contributions and see your team's community impact grow."
            />
          </div>
        </div>
        <div className="service-wrap">
          <p className="w-100 text-center"></p>
          <div
            className="row justify-content-center align-items-stretch gy-4 pt-2"
            style={{ rowGap: "30px" }}
          >
            {Services2.slice(0, 19).map((Service, sitem) => (
              <div className="col col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12" key={sitem}>
                <div className="service-card-wrapper d-flex flex-column h-100">
                  <div
                    className="service-item px-3"
                    style={{
                      // height: "400px",
                      // width: "313px",
                      alignSelf: "stretch",
                      marginBottom: "10px",
                      margin: "auto",
                    }}
                  >
                    <div className="icon">
                      <Image src={Service.sImg} width={60} alt="img" />
                    </div>
                    <div className="text">
                      <h2 className="services-title-text fw-bold mt-4">
                        {/* <Link className="services-title-text" to={``} style={{ cursor: "default" }}> */}
                        {Service.title}
                        {/* </Link> */}
                      </h2>
                      <p className="service-paragraph volunteer-home-text text-center" style={{ textAlign: "justify" }}>
                        {" "}
                        {Service.description} <br />
                        {Service.subdes}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      

      <div className="container section-padding pt-0">
        <div className="wpo-about-wrap">
          <div className="row ">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="wpo-about-text p-3 mt-0 pb-1 pb-lg-2 pt-1 pt-lg-2">
                <div
                  className="wpo-section-title  mt-0"
                  style={{
                    textAlign: "left",
                    margin: "0px",
                    marginBottom: "10px",
                  }}
                >
                  <span>Stay Connected with Sevak Army!</span>
                  <h2 className="about-heading-second text-titleeee w-100">Join Us in Making a Difference! </h2>
                </div>
                <p style={{ textAlign: "justify" }}>
                  Get the latest updates on volunteer opportunities, CSR initiatives and impactful stories. Be the
                  first to know about events, resources and ways to make a difference.
                </p>
                <h3>Subscribe to Our Newsletter</h3>

                <div>
                  <button
                    className="theme-btn mt-3"
                    onClick={() => setShowNewsletter(true)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Subscribe to us
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="wpo-about-img">
                {/* <div className="wpo-about-left">
                    <Image src={abImg5} alt="img" />
                  </div> */}
                <div className="wpo-about-right pt-3 pt-lg-5">
                  <Image src={Newsletterrr} width={540} alt="Subscribe to Sevak Army  Newsletter" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      

      <section className="wpo-cta-section-s3 section-padding pt-0 pb-5">
        <div className="container">
          <div className="bg-color" style={{ background: "#007560" }}>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="cta-wrap">
                  <h2 className="mb-3 mt-0 ">Become a CSR Ambassador! </h2>
                  <p className="text-center" style={{ color: "whitesmoke" }}>
                    Lead your team’s social initiatives, inspire others and drive positive change.{" "}
                  </p>
                  <Link onClick={ClickHandler} to="ambassador-programme" className="theme-btn mt-3">
                    Join as Ambassador
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wpo-cta-section section-padding mt-1">
        <div className="bg-overlay">
          <div className="container">
            <div className="bg-color">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="cta-wrap">

                    <h2 className="mb-2">Get Recognised for Your Commitment!</h2>
                    <p className="text-center pt-2 px-2" style={{ textAlign: "justify", color: "white" }}>
                      Join us in celebrating milestones, achievements and your dedication to social good.
                    </p>
                    <div className="d-flex flex-column gap-3 justify-content-center align-items-center w-100">
                      <Link
                        to="certificates-recognition"
                        onClick={ClickHandler}
                        className="theme-btn"
                        style={{ width: "fit-content" }}
                      >
                        Explore Recognition Events
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NewsletterPopup shownewsletter={shownewsletter} setShowNewsletter={setShowNewsletter} />
    </>
  );
};

export default Home;
