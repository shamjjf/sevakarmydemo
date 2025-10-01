import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Image from "next/image";

import metadata from './../../app/[[...slug]]/metadata.json';
import useMetaTags from "../../app/hooks/useMetaTags";

import { Navigation, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css";
import "swiper/css/navigation";

// import FunFact2 from "../../components/FunFact/FunFact2";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ServiceCard from "../../components/ServiceSection/ServiceCard";
import NewsletterPopup from "../../components/NewsletterPopup";
import Instagram from "../../api/Instagram";

// import icon from "../../../public/assets/images/cta/top-icon.png";

/* team imags */
import Logo from "../../../public/assets/images/logo.svg";
import blog1 from "../../../public/assets/images1/team/sevak-army-team-7.webp";
import blog2 from "../../../public/assets/images1/team/sevak-army-team-3.webp";
import blog3 from "../../../public/assets/images1/team/sevak-army-team-8.webp";
import team1 from "../../../public/assets/images1/team/sevak-army-team-1.webp";
import team2 from "../../../public/assets/images1/team/sevak-army-team-7.webp";
import team3 from "../../../public/assets/images1/team/sevak-army-team-3.webp";
import team4 from "../../../public/assets/images1/team/sevak-army-team-6.webp";
import team5 from "../../../public/assets/images1/team/sevak-army-team-5.webp";
// import abImg4 from "../../../public/assets/images1/school-college/home/sevak-army-influencer-services-12.webp";
import abImg4 from "../../../public/assets/new-images/school-college/home/join-sevak-army.jpg"
import sImg1 from "../../../public/assets/images/service/inspirational-2.webp";
import sImg2 from "../../../public/assets/images/service/encourage.webp";
import sImg3 from "../../../public/assets/images/service/share-link-2.webp";
import sImg4 from "../../../public/assets/images/service/collaboration.webp";
import sImg5 from "../../../public/assets/images/service/hard-work.webp";
import vsImg1 from "../../../public/assets/images/service/opportunity.webp";
import vsImg2 from "../../../public/assets/images/service/experience.webp";
import vsImg3 from "../../../public/assets/images/service/accredited.webp";
import Img1 from "../../../public/assets/images/service-single/awareness.webp";
import Img2 from "../../../public/assets/images/service-single/social-support.webp";
import Img3 from "../../../public/assets/images/service-single/school.webp";

const SchoolCollegeHome = ({props, path}) => {
  const [shownewsletter, setShowNewsletter] = useState(false);

  // const CustomPrevArrow = (props) => {
  //   const { className, onClick } = props;
  //   return (
  //     <div className={className} onClick={onClick}>
  //       <i className="flaticon-right-arrow-1"></i>
  //     </div>
  //   );
  // };

  // const CustomNextArrow = (props) => {
  //   const { className, onClick } = props;
  //   return (
  //     <div className={className} onClick={onClick}>
  //       <i className="flaticon-left-arrow"></i>
  //     </div>
  //   );
  // };

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const Services = [
    {
      Id: "01",
      sImg: vsImg1,

      title: "Regular Updated Opportunities",
      slug: "1",
      description:
        "Sevak Army frequently updates the platform with new volunteer tasks and projects, offering students from schools and colleges fresh opportunities to get involved and make a difference in the communities.",
    },
    {
      Id: "02",
      sImg: vsImg2,

      title: "Gain Real-World Experience",
      slug: "2",
      description:
        "Sevak Army allows students to participate in hands-on projects that directly benefit communities. These experiences help build essential skills like teamwork, leadership and problem-solving.",
    },
    {
      Id: "03",
      sImg: vsImg3,

      title: "Earn Recognition and Certificates",
      slug: "3",
      description:
        "Volunteers receive digital certificates of achievement for their contributions, providing recognition that can be shared on social media or used in future career opportunities.",
    },
  ];

  const Services1 = [
    {
      Id: "01",
      sImg: sImg1,

      title: "Inspire to Serve",
      slug: "1",
      description:
        "Sevak Army offers schools and colleges a platform to inspire students to volunteer for impactful causes, encouraging a commitment to social service and community welfare.",
    },
    {
      Id: "02",
      sImg: sImg2,

      title: "Develop a Culture of Service",
      slug: "4",
      description:
        "Encouraging students to volunteer nurtures a culture of service within your institute, building students' leadership skills, empathy, and a deep commitment to social good.",
    },
    {
      Id: "03",
      sImg: sImg3,


      title: "Share a Unique Link",
      slug: "2",
      description:
        "After registering, your institute will receive a unique link to share with students, allowing them to easily register as volunteers and start making a difference.",
    },
    {
      Id: "04",
      sImg: sImg4,


      title: "Support Meaningful Causes",
      slug: "3",
      description:
        "By promoting Sevak Army, your institution helps students participate in causes like education, healthcare, and environmental sustainability, fostering a sense of responsibility and empathy.",
    },
    {
      Id: "05",
      sImg: sImg5,

      title: "Recognise Efforts",
      slug: "4",
      description:
        "Through Sevak Army’s leaderboard and achievement system, students and your institute are recognised for their contributions, motivating them to stay engaged and celebrate their impact on society.",
    },
  ];

  const blogs = [
    {
      id: "1",
      title: "Cultivating Empathy and Responsibility",
      slug: "1",
      subtitle:
        "We believe that education goes beyond the classroom. When we registered at Sevak Army, we found the perfect way to introduce our students to the importance of community service. Our students volunteered with NGOs that needed help with various tasks, including organising charity events, assisting in local environmental projects and many more. The impact on the students was remarkable. They learned valuable life lessons in empathy, teamwork and responsibility while earning digital certificates that acknowledged their efforts. Watching them grow through these experiences made us proud and we know this involvement with Sevak Army will shape them into compassionate and socially responsible individuals.",
      bsing: blog1,
      athor: "Principal",
    },
    {
      id: "2",
      title: "Learning Through Service",
      slug: "2",
      subtitle:
        "We always encourage students to engage in extracurricular activities, but registering with Sevak Army took it to the next level. Our students participated in a range of volunteering tasks, from teaching underprivileged children to organising fundraisers for local NGOs. Sevak Army connected us with NGOs needing support, allowing students to dedicate their time and energy to meaningful causes. Our students gained valuable leadership and teamwork skills through these experiences and many reflected on how much they learned about themselves and the importance of community service. Sevak Army provides a platform that not only benefits society but also nurtures personal growth in our students.",
      bsing: blog2,
      athor: "Coordinator",
    },
    {
      id: "4",
      title: "Building Future Leaders Through Social Impact",
      slug: "4",
      subtitle:
        <>We strive to create future leaders who excel academically and understand the value of social responsibility. Registering with Sevak Army gave our college students the opportunity to participate in impactful volunteer projects, such as assisting in health camps and awareness campaigns with local NGOs. <br /> Through these experiences, students developed organisational and communication skills while engaging in community service. The certificates they received were a meaningful recognition of their contributions. Sevak Army helped our students grow as socially conscious individuals, prepared to make a difference in society.</>,
      bsing: blog3,
      athor: "Dean",
    },
    {
      id: "5",
      title: "Encouraging Volunteerism for Personal Growth",
      slug: "5",
      subtitle:
        "We have always encouraged our students to be active members of society and Sevak Army helped us make this vision a reality. Our students volunteered with various NGOs, supporting causes like educational programmes for children and community welfare projects. Many students shared that volunteering with Sevak Army increased their empathy and awareness of social issues. The certificates they earned were a valuable recognition of their dedication and we’re proud to have fostered a strong spirit of volunteerism at our college.",
      bsing: blog3,
      athor: "Faculty Advisor",
    },
    // {
    //   id: "3",
    //   title: "Instilling the Value of Seva in Young Minds",
    //   slug: "3",
    //   subtitle:
    //     "When we registered with Sevak Army, we aimed to go beyond academics and instil in our students the value of ‘seva’ or selfless service. Through the platform, our students engaged in meaningful volunteer tasks, such as food distribution drives and environmental clean-up activities in collaboration with local NGOs. The experience was impactful, as students developed a sense of gratitude, learned the importance of humility and felt empowered by their ability to contribute to society. The certificates they received recognised their efforts and the positive impact on their character was evident. Sevak Army has strengthened our school’s commitment to holistic education.",
    //   bsing: blog3,
    //   athor: "Vice Principal",
    // },
  ];


  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const featuresData = [
    {
      iconClass: "flaticon-volunteer",
      img: Img1,
      title: "Service Opportunities",
      description:
        "Providing students a platform to actively engage and serve our communities.",
    },
    {
      iconClass: "flaticon-solidarity",
      title: "Student Engagement",
      img: Img2,
      description:
        "Inspire students to join meaningful community service projects through Sevak Army.",
    },
    {
      iconClass: "flaticon-charity",
      img: Img3,
      title: "Real Impact",
      description:
        "Schools and colleges can directly impact society by encouraging students to participate in social causes.",
    },
  ];

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

  return (
    <>

      <Navbar Logo={Logo} hclass={"wpo-site-header"} />
      <section className="static-hero-s3">
        <div className="hero-container">
          <div className="hero-inner">
            <div className="container-fluid">
              <div className="hero-content">
                <div className="slide-title-sub titleeee">
                  <h6>
                    Inspiring Students to Serve Through Volunteer Opportunities
                  </h6>
                </div>
                <div className="slide-title titleeee2">
                  <h2>A Platform to Volunteer and Serve</h2>
                </div>
                <div className="slide-text slideee-texttt">
                  <p>
                    Give your students a chance to contribute to society by
                    registering your institution and encouraging your students
                    to join as volunteers on our platform promoting a culture of
                    service in young minds.
                  </p>
                </div>
                <div className="hero-btn">
                  <Link
                    to="https://app.sevakarmy.com/" target="_blank"
                    className="theme-btn"
                  >
                    Register Your Institution
                  </Link>
                  <div className="wpo-supporter-img">
                    <ul className="wpo-supporter-slide" style={{ paddingLeft: '12px' }}>
                      <Slider {...settings}>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          title="Aliza Anny"
                        >
                          <Image src={team1} width={54} height={55} alt="Teams" />
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          title="David Miller"
                        >
                          <Image src={team2} width={54} height={55} alt="Teams" />
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          title="Maria Silva"
                        >
                          <Image src={team3} width={54} height={55} alt="Teams" />
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          title="Takila Mas"
                        >
                          <Image src={team4} width={54} height={55} alt="Teams" />
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          title="Jenny Lawba"
                        >
                          <Image src={team5} width={54} height={55} alt="Teams" />
                        </li>
                      </Slider>
                    </ul>
                  </div>
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
            <div
              className="slide-inner slide-bg-image slide-bg-image5"
            // style={{ backgroundImage: `url(${HeroSlide1})` }}
            ><div className="overlay"></div></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="slide-inner slide-bg-image slide-bg-image6"
            // style={{ backgroundImage: `url(${HeroSlide2})` }}
            ><div className="overlay"></div></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="slide-inner slide-bg-image slide-bg-image7"
            // style={{ backgroundImage: `url(${HeroSlide3})` }}
            ><div className="overlay"></div></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="slide-inner slide-bg-image slide-bg-image8"
            // style={{ backgroundImage: `url(${HeroSlide4})` }}
            ><div className="overlay"></div></div>
          </SwiperSlide>
          ...
        </Swiper>
      </section>

      {/* <FeatureSection /> */}
      <section className="wpo-features-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-12 col-12">
              <SectionTitle
                subtitle="Creating Impactful Opportunities for Students and Institutions"
                title="Empowering Communities Through Service"
              />
            </div>
          </div>
          <div className="features-wrap mt-3">
            <div className="row justify-content-center align-items-stretch">
              {featuresData.map((feature, index) => (
                <div className="col col-lg-4 col-md-6 col-12" key={index} style={{ minHeight: '100%' }}>
                  <div className="feature-item-wrap" style={{ height: '100%' }}>
                    <div
                      className="feature-item h-100"
                      style={{ alignItems: "start", minHeight: '100%' }}
                    >
                      <div className="feature-icon">
                        <div className="icon">
                          <Image src={feature.img} width={110} height={110} className="h-[40px]" alt="Features" />
                        </div>
                      </div>
                      <div className="feature-text">
                        <h2 className="fs-5">{feature.title}</h2>
                        <p className="fs-6">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* <About /> */}

      <section className="wpo-about-section section-padding pt-0 mt-3">

        <section className="section-padding pb-0">
          <div className="container">
            <div className="wpo-about-wrap">
              <div className="flex-containerrr justify-content-center">
                <div className="pt-4">
                  <div className="wpo-about-text mt-0">
                    <div className="wpo-section-title mt-0">
                      {/* <span>Welcome to Sevak Army!</span> */}
                      <h2 className="about-heading-third text-titleeee mt-0">
                        {" "}
                        Join Sevak Army{" "}
                      </h2>
                    </div>
                    <p>
                      <b>Be the Change:</b> Encourage students to make a
                      difference through volunteer opportunities with Sevak
                      Army.{" "}
                    </p>
                    <p>
                      <b>Guide Students:</b> Join Sevak Army today to guide your
                      students towards meaningful volunteer opportunities and
                      real-world experiences.{" "}
                    </p>
                    <p>
                      <b>Leadership Path:</b> Help students take the lead in
                      serving our communities through Sevak Army's volunteer
                      platform.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-12">
                  <div className="wpo-about-img">
                    <div className="wpo-about-right pt-0">
                      <Image src={abImg4} width={480} height={480} alt="Sevak Army - Engage students to drive change" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* <ServiceSection hclass={"wpo-service-section"} /> */}
      <section className={"section-padding " + "pt-0"}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-12 col-12">
              <SectionTitle
                subtitle="Gain Real-World Experience"
                title="Volunteer, Grow and Shine"
              />
            </div>
          </div>
          <div className="service-wrap mt-3">
            <div className="row justify-content-center align-items-stretch gy-4">
              {Services.slice(0, 4).map((Service, sitem) => (
                <div
                  className="col col-xl-4 col-lg-5 col-md-7 col-sm-8 col-12"
                  key={sitem}
                >
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

      {/* <FunFact2 hclass={"wpo-fun-fact-section"} /> */}


      <section className={"pt-0" + "wpo-service-section"}>
        <div className="container section-padding pb-0">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-12 col-12">
              <SectionTitle
                subtitle="Why Join Sevak Army?"
                title="Create a Spirit of Service in Students"
              />
            </div>
          </div>
          <div className="service-wrap mt-3">
            <div className="row justify-content-center align-items-stretch gy-4">
              {Services1.slice(0, 5).map((Service, sitem) => (
                <div
                  className="col col-lg-4 col-md-6 col-sm-8 col-12"
                  key={sitem}
                >
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

      {/* Features2 */}

      {/* Below section not in requirement */}
      {/* section start */}
      {/* 
      <section className="wpo-features-area">
        <div className="container">
          <div className="features-wrap">
            <div className="row justify-content-center">
              {featuresData1.map((feature, index) => (
                <div className="col col-lg-4 col-md-6 col-12 mb-5" key={index}>
                  <div className="feature-item-wrap">
                    <div
                      className="feature-item"
                      style={{ alignItems: "start" }}
                    >
                      <div className="feature-icon">
                        <div className="icon">
                          <Image src={feature.img} className="h-[40px]" alt="Features" />
                        </div>
                      </div>
                      <div className="feature-text">
                        <h2 className="fs-5">{feature.title}</h2>
                        <p className="fs-6">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* section end */}

      <section className="section-padding pb-0">
        <div className="container">
          <div className="row justify-content-center mt-3">
            <div className="col-lg-6 col-md-12 col-12">
              <SectionTitle subtitle="Testimonials" title="Voices of Impact" />
            </div>
          </div>
          <div className="blog-wrap mt-3">
            <div className="row align-items-stretch justify-content-center gy-4">
              {blogs.map((blog, bl) => (
                <div className="col col-lg-6 col-md-6 col-12" key={bl}>
                  <div
                    className="blog-single-card d-flex flex-wrap h-100 px-2"
                    style={{ position: "relative" }}
                  >
                    <div className="content p-3">
                      <h2 className="blog-title-home mt-2">
                        <a
                          className="blog-title-home mt-2 w-100 text-left"
                          style={{ textAlign: "left" }}
                        >
                          {blog.title}
                        </a>
                      </h2>
                      <p style={{ textAlign: 'justify' }}>{blog.subtitle}</p>
                      <ul
                        className="top-content"
                        style={{ position: "", bottom: "15px" }}
                      >
                        <li className="mb-3 fs-5">
                          {/* <div className="image-single">
                          <Image src={blog.bsing} alt="Teams" />
                        </div> */}
                          - {blog.athor}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-100 d-flex justify-content-center mt-4">
            <p className="fs-3 mt-0">
              <b>Join the Platform</b>: Register your Institution with Sevak Army!
            </p>
          </div>
        </div>
      </section>

      <section className="wpo-instagram-section s2 section-padding pb-0">
        <div className="container">
          <div className="instagram-wrap">
            <div className="wpo-section-title mb-5">
              <span>Gallery</span>

              <SectionTitle
                subtitle=""
                title="Our Gallery"
                paragarap="Explore our gallery to witness the inspiring efforts of the
                students as volunteers of Sevak Army."
              />

              {/* <h2 className="about-heading-third">Our Gallery</h2>
              <p className="text-center">
                Explore our gallery to witness the inspiring efforts of the
                students as volunteers of Sevak Army.
              </p> */}
            </div>
            <div className="row">
              {Instagram.map((item) => (
                <div className="col col-lg-4 col-md-6 col-12" key={item.id}>
                  <div className="instagram-card">
                    <div className="image">
                      <Link
                        to={item.imag}
                        className="fancybox"
                        data-fancybox-group="gall-1"
                        onClick={(e) => {
                          e.preventDefault();
                          openModal(item.imag);
                        }}
                      >
                        <Image
                          src={item.imag}
                          width={417}
                          height={278}
                          alt={`Instagram ${item.id}`}
                          className="img img-responsive"
                        />
                        {/* <div className="popup-icon">
                          <i className="ti-plus"></i>
                        </div> */}
                      </Link>
                    </div>
                    <div className="text">
                      <span>{item.title}</span>
                      <h2>{item.subtitle}</h2>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {modalOpen && (
          <div className="modal" onClick={closeModal}>
            <div className="modal-wrap">
              <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
              >
                <span className="close" onClick={closeModal}>
                  &times;
                </span>
                <Image src={selectedImage} alt="Modal" />
              </div>
            </div>
          </div>
        )}
      </section>

      <section className="wpo-cta-section section-padding mt-5">
        <div className="bg-overlay">
          <div className="container">
            <div className="bg-color">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="cta-wrap">
                    <h2 className="mb-2">Stay Informed, Stay Inspired!</h2>
                    <p
                      className="text-center pt-2 px-2"
                      style={{ textAlign: "justify", color: "white" }}
                    >
                      Register for our newsletter to receive updates on impactful
                      volunteer opportunities for students and tips on creating
                      positive change. Empower your students to get involved and
                      make a difference with Sevak Army.
                    </p>
                    <div className="d-flex flex-column gap-3 justify-content-center align-items-center w-100">
                      <button
                        onClick={() => setShowNewsletter(true)}
                        className="theme-btn"
                        style={{ width: "fit-content" }}
                      >
                        Subscribe Now
                      </button>
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

export default SchoolCollegeHome;
