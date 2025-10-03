import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../style.css";
import "swiper/css/navigation";
import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper";
import { Autoplay } from "swiper";

import metadata from './../../app/[[...slug]]/metadata.json';
import useMetaTags from "../../app/hooks/useMetaTags";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import ServiceCard from "../../components/ServiceSection/ServiceCard";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import AnchorLink from "react-anchor-link-smooth-scroll";
import NewsletterPopup from "../../components/NewsletterPopup";


/* team imags */
import Newsletter from "../../../public/assets/new-images/common/newsletter.jpg";
import Shape from "../../../public/assets/images/testimonial/bg.webp";
import Inspire from "../../../public/assets/images1/influencer/home/award.webp";
import team1 from "../../../public/assets/images1/team/sevak-army-team-1.webp";
import team2 from "../../../public/assets/images1/team/sevak-army-team-2.webp";
import team3 from "../../../public/assets/images1/team/sevak-army-team-7.webp";
import team4 from "../../../public/assets/images1/team/sevak-army-team-8.webp";
import team5 from "../../../public/assets/images1/team/sevak-army-team-9.webp";
import Logo from "../../../public/assets/images/logo.svg";

/* HeroSlide Image  */
import simg1 from "../../../public/assets/images/service/inspiration.webp";
import simg2 from "../../../public/assets/images/service/share-link.webp";
import simg3 from "../../../public/assets/images/service/promote.webp";
import simg4 from "../../../public/assets/images/service/increase.webp";
import simg5 from "../../../public/assets/images/service/volunteer.webp";
import simg6 from "../../../public/assets/images/service/community.webp";

import img1 from "../../../public/assets/images/service/leadership.webp";
import img2 from "../../../public/assets/images/service/stars.webp";
import img3 from "../../../public/assets/images/service/social-media-engagement.webp";
import img4 from "../../../public/assets/images/service/progress.webp";

import image1 from "../../../public/assets/images1/influencer/home/image-4.webp";
import image4 from "../../../public/assets/images1/influencer/home/image-3.webp";
import image5 from "../../../public/assets/images1/influencer/home/image-2.webp";
import image2 from "../../../public/assets/images1/influencer/home/image-1.webp";
import image3 from "../../../public/assets/images1/team/sevak-army-team-7.webp";



const Services = [
  {
    Id: "01",
    sImg: simg1,

    title: "Inspire Your Followers",
    slug: "1",
    description:
      "Encourage your followers to join SevakArmy as volunteers, helping them find purposeful tasks that contributes to society.",
  },
  {
    Id: "02",
    sImg: simg2,

    title: "Share Your Unique Link",
    slug: "2",
    description:
      "After registering, you'll receive a personal referral link. Share it with your audience to make it easy for them to join as volunteers.",
  },
  {
    Id: "03",
    sImg: simg3,

    title: "Promote Important Causes",
    slug: "3",
    description:
      "Use your platform to raise awareness for causes that matter, like healthcare, education and environmental sustainability. Your reach can help make a real impact.",
  },
  {
    Id: "04",
    sImg: simg4,

    title: "Increase Your Social Impact",
    slug: "4",
    description:
      "Every new volunteer you bring to SevakArmy adds to your positive influence, growing your impact on communities across India.",
  },
  {
    Id: "05",
    sImg: simg5,

    title: "Get Recognised as a Changemaker",
    slug: "4",
    description:
      "By driving others toward volunteerism, you strengthen your image as someone dedicated to social change.",
  },
  {
    Id: "06",
    sImg: simg6,

    title: "Connect with Your Community",
    slug: "4",
    description:
      "Engaging in this mission deepens your bond with your followers, showing them your commitment to making the world a better place.",
  },
];
const Testimonial = [
  {
    id: "03",
    text: "I'm beyond proud to see the ripple effect of my efforts with SevakArmy. Each person who joined through my link was another step toward making a positive impact and I’m constantly inspired by the stories my followers share from their volunteer experiences. Seeing my name on the leaderboard was exciting, but the best part has been knowing that together, we’re creating a better future.",
    subtitle: "Zara",
    title: "Fitness Influencer",
    alt: 'Zara - Influencer Blogger',
    image: image1,
  },
  {
    id: "04",
    text: "SevakArmy has brought purpose and depth to my work as an influencer. Watching my followers embrace volunteerism and support causes they’re passionate about has been rewarding. Knowing that I’m helping people find ways to give back to society makes this journey incredibly fulfilling. I feel a deep connection to my followers and our shared purpose strengthens that bond daily.",
    subtitle: "Rishi",
    title: "Travel Blogger",
    image: image4,
    alt: 'Rishi - Travel Blogger',
  },
  {
    id: "04",
    text: "Being part of SevakArmy has allowed me to make a genuine impact. Within days of sharing my link, my followers signed up to volunteer and thanked me for helping them find meaningful ways to contribute. The appreciation on social media was amazing, but seeing my followers find joy and purpose through service was even more meaningful. This platform has changed how I think about my influence.",
    subtitle: "Ananya",
    title: "Food & Lifestyle Influencer",
    image: image5,
    alt: 'Food & lifestyle influencer - Ananya',
  },
  {
    id: "01",
    text: "Joining SevakArmy has been one of the most meaningful experiences of my career. I loved seeing my followers involved with causes that truly matter, from education to environmental conservation. Watching them find purpose through volunteering made me feel like I’m part of something bigger than myself. The sense of community and connection is powerful—together, we’re making a difference.",
    title: "Social Media Influencer",
    subtitle: "Maya",
    image: image3,
    alt: 'Maya - Social Media Influencer',
  },
  {
    id: "02",
    text: "Encouraging my followers to join SevakArmy gave my platform a whole new dimension. I was thrilled to see them connect with NGOs and contribute their skills to impactful causes. It’s fulfilling to know that my influence is sparking real change, not just online but in communities. The feedback I received was inspiring me to keep pushing for social good.",
    title: "Lifestyle Content Creator.",
    subtitle: "Jay",
    image: image2,
    alt: 'Jay - Lifestyle Content Creator',
  },
];

const featuresData = [
  {
    iconClass: "flaticon-volunteer",
    img: img1,
    title: "Increase Your Influence with SevakArmy",
    description:
      "Encourage your followers to join meaningful volunteer initiatives.",
  },
  {
    iconClass: "flaticon-solidarity",
    title: "Earn Points & Recognition",
    img: img2,
    description:
      "Share your unique referral link and earn points for every follower who completes their first task.",
  },
  {
    iconClass: "flaticon-charity",
    title: "Create and Share Content",
    img: img3,
    description:
      "Share reels, videos or posts with your referral link, encouraging your followers to join SevakArmy.",
  },
  {
    iconClass: "flaticon-charity",
    title: "Track Your Impact",
    img: img4,
    description:
      "Watch yourself grow on the leaderboard, and gain recognition for your contributions to society.",
  },
];


const Influencer = ({ path }) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

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

  const [shownewsletter, setShowNewsletter] = useState(false);
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

  const settingst = {
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

  return (
    <>
      <Navbar hclass="wpo-site-header wpo-site-header" Logo={Logo} />
      <section className="static-hero-s3">
        <div className="hero-container">
          <div className="hero-inner">
            <div className="container-fluid">
              <div className="hero-content">
                <div className="slide-title-sub">
                  <h6>Use Your Influence to Drive Positive Change</h6>
                </div>
                <div className="slide-title">
                  <h2>
                    Inspire Action, Encourage Volunteering
                  </h2>
                </div>
                <div className="slide-text slideee-texttt">
                  <p>
                    As an influencer, you can inspire your followers to make a difference & encourage them to join SevakArmy, where they can find meaningful volunteer opportunities with NGOs, supporting impactful causes. From education and healthcare to sustainability, your influence can lead more people to contribute their time and skills for a better future. Let's create a wave of positive change and make a lasting impact.
                  </p>
                </div>

                <h4 className="text-white fs-2">
                  Join us in spreading the word!
                </h4>
                <div className="hero-btn" style={{ marginTop: "35px" }}>
                  <Link
                   to="https://app.sevakarmy.com/" target="_blank"
                    className="theme-btn"
                    style={{whiteSpace:'nowrap'}}
                  >
                    Join Us
                  </Link>
                  <div className="wpo-supporter-img">
                    <ul className="wpo-supporter-slide" style={{ paddingLeft: '12px' }}>
                      <Slider {...settings}>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          title="Aliza Anny"
                        >
                          <Image src={team1} width={54} height={55} alt="Influencer" />
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          title="David Miller"
                        >
                          <Image src={team2} width={54} height={55} alt="Influencer" />
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          title="Maria Silva"
                        >
                          <Image src={team3} width={54} height={55} alt="Influencer" />
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          title="Takila Mas"
                        >
                          <Image src={team4} width={54} height={55} alt="Influencer" />
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          title="Jenny Lawba"
                        >
                          <Image src={team5} width={54} height={55} alt="Influencer" />
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
              className="slide-inner slide-bg-image slide-bg-image1"
              style={{ backgroundImage: `url('../../../public/assets/images1/influencer/home/sevak-army-influencer-home-slider-1.webp')` }}
            >
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="slide-inner slide-bg-image slide-bg-image2"
              style={{ backgroundImage: `url('../../../public/assets/images1/influencer/home/sevak-army-influencer-home-slider-2.webp')` }}
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="slide-inner slide-bg-image slide-bg-image3"
              style={{ backgroundImage: `url('../../../public/assets/images1/influencer/home/sevak-army-influencer-home-slider-3.webp')` }}
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="slide-inner slide-bg-image slide-bg-image4"
              style={{ backgroundImage: `url('../../../public/assets/images1/influencer/home/sevak-army-influencer-home-slider-4.webp')` }}
            ></div>
          </SwiperSlide>
          ...
        </Swiper>
      </section>

      <section className="wpo-features-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-12 col-12">
              <SectionTitle
                subtitle="Influence, Share, Track - Make a Difference!"
                title="Maximise Your Impact"
              />
            </div>
          </div>
          <div className="features-wrap mt-3">
            <div className="row gy-4 justify-content-center gy-4 align-items-stretch">
              {featuresData.map((feature, index) => (
                <div className="col col-lg-5 col-md-6 col-12" key={index}>
                  <div className="feature-item-wrap h-100">
                    <div className="feature-item h-100">
                      <div className="feature-icon">
                        <div className="icon">
                          <Image src={feature.img} width={110} height={110} className="h-[40px]" alt="Features" />
                        </div>
                      </div>
                      <div className="feature-text">
                        <h2 className="fs-5">{feature.title}</h2>
                        <p className="fs-6"><span style={{ textAlign: 'left' }}>{feature.description}</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className={"section-padding " + "mt-3"}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-12 col-12">
              <SectionTitle
                subtitle="Inspire Action, Drive Impact"
                title="Use Your Influence for Positive Change"
                paragarap="As an influencer, you have the power to make a significant difference by encouraging your followers to join meaningful volunteer work through SevakArmy. "
              />
            </div>
          </div>
          <div className="service-wrap">
            <div className="row ">
              {Services.map((Service, sitem) => (
                <div className="col col-xl-4 col-md-6 col-sm-6 col-12 align-items-stretch gy-4" key={sitem}>
                  <ServiceCard
                    className="service-carddd"
                    //  height="310px"
                    title={Service.title}
                    img={Service.sImg}
                    slug={Service.slug}
                    sdescription={Service.description}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="text-center w-full flex flex-column justify-content-center my-3 pt-2">
            <p className="fs-3 text-center">
              Let’s work together to inspire action and bring positive change to
              society!
            </p>
            <Link to="https://app.sevakarmy.com/" target="_blank" className="theme-btn">
              Join Now
            </Link>
          </div>
        </div>
      </section>

      <div className="">

      </div>

      <section className={"section-padding pt-3 mt-0" + ""}>
        <div className="container">
          <div className="wpo-testimonial-slider align-items-stretch">
            <Slider {...settingst}>
              {Testimonial.map((Testimonial, item) => (
                <div
                  className="testimonial-item h-100"
                  key={item}
                // style={{ minHeight: 700 }}
                >
                  <div className="content influencer-testimonial-responsive">
                    <div className="icon">
                      <i className="flaticon-quote"></i>
                    </div>
                    <p>{Testimonial.text}</p>
                    <div className="shape">
                      <Image src={Shape} alt="Influencer" />
                    </div>
                  </div>
                  <div className="bottom-content">
                    <div className="image">
                      <Image width={60} src={Testimonial.image} alt="Testimonial" />
                    </div>
                    <div className="text">
                      <h4>{Testimonial.title}</h4>
                      <span>{Testimonial.subtitle}</span>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      
      <section className="wpo-about-section ">
        <div className="container section-padding pt-3 pt-1">
          <div className="wpo-about-wrap">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-img">
                  {/* Image placeholder */}
                  <div className="wpo-about-right pt-0">
                    <Image src={Newsletter} height={530} alt="Sign-up Today & Subscribe now to Sevak Amry" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-text p-3 mt-0 pb-1 pb-lg-2 pt-1 pt-lg-2">
                  <div className="wpo-section-title mb-3 mt-0">
                    <span>Subscribe to SevakArmy</span>
                    <h2 className="about-heading-second">
                      Stay Updated with Our Newsletter!
                    </h2>
                  </div>
                  <p style={{ textAlign: "justify" }}>
                    Stay connected and inspired by subscribing to our updates for influencers. Be the first to know about new volunteer opportunities and campaigns that need your voice. Help motivate your followers to join SevakArmy and make a real change.
                  </p>
                  <p>
                    Be the first to know about new volunteer opportunities, impactful projects, and inspiring stories from across India. Join our newsletter to receive exclusive updates, tips, and resources to help you make a meaningful difference.
                  </p>
                  <div>
                    <button
                      className="theme-btn"
                      onClick={() => setShowNewsletter(true)}
                    >
                      Subscribe Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-12 col-12">
            <SectionTitle
            subtitle="Influence, Inspire, Shine - Lead the Change!"
              title="Climb the Leaderboard and Shine!"
              paragarap="Make an impact, gain recognition and see your name rise among top influencers who are driving real change. Every volunteer you inspire brings you closer to the top!"
            />
          </div>
        </div>

        <div className="mt-3">
          <section className={" section-padding wpo-fun-fact-section-s3"}>
            <div className="container">
              <div className="fun-fact-wrap">
                <div className="row justify-content-center gap-3">
                  <div className="blog-single-card py-4 col-lg-3 col-md-6 col-sm-6 col-12 mb-3">
                    <div className="info d-flex flex-column justify-content-center flex-no-wrap">
                      <h4 className="blog-title-home">@InspireWithMaya</h4>
                      <h3 className="w-100">
                        <span style={{ fontSize: "50px" }}>
                          <CountUp end={300} enableScrollSpy />
                        </span>
                      </h3>
                      <p
                        className="w-100 text-nowrap text-center ms-0"
                        style={{ maxWidth: "100%" }}
                      >
                        {" "}
                        Volunteers Recruited
                      </p>
                    </div>
                  </div>
                  <div className="blog-single-card py-4 col-lg-3 col-md-6 col-sm-6 col-12 mb-3">
                    <div className="info d-flex flex-column justify-content-center flex-no-wrap">
                      <h4 className="blog-title-home">@JayLifestyle</h4>
                      <h3>
                        <span style={{ fontSize: "50px" }}>
                          <CountUp end={250} enableScrollSpy />
                        </span>
                      </h3>
                      <p
                        className="w-100 text-nowrap text-center ms-0"
                        style={{ maxWidth: "100%" }}
                      >
                        Volunteers Recruited
                      </p>
                    </div>
                  </div>
                  <div className="blog-single-card py-4 col-lg-3 col-md-6 col-sm-6 col-12 mb-3">
                    <div className="info d-flex flex-column justify-content-center flex-no-wrap">
                      <h4 className="blog-title-home">@FitWithZara</h4>
                      <h3>
                        <span style={{ fontSize: "50px" }}>
                          <CountUp end={220} enableScrollSpy />
                        </span>
                      </h3>
                      <p
                        className="w-100 text-nowrap text-center ms-0"
                        style={{ maxWidth: "100%" }}
                      >
                        Volunteers Recruited
                      </p>
                    </div>
                  </div>
                  <div className="blog-single-card py-4 col-lg-3 col-md-6 col-sm-6 col-12 mb-3">
                    <div className="info d-flex flex-column justify-content-center flex-no-wrap">
                      <h4 className="blog-title-home">@ChangeMaker_Ravi</h4>
                      <h3>
                        <span style={{ fontSize: "50px" }}>
                          <CountUp end={180} enableScrollSpy />
                        </span>
                      </h3>
                      <p
                        className="w-100 text-nowrap text-center ms-0"
                        style={{ maxWidth: "100%" }}
                      >
                        Volunteers Recruited
                      </p>
                    </div>
                  </div>
                  <div className="blog-single-card py-4 col-lg-3 col-md-6 col-sm-6 col-12 mb-3">
                    <div className="info d-flex flex-column justify-content-center flex-no-wrap">
                      <h4 className="blog-title-home">@GreenFuture_Aditi</h4>
                      <h3>
                        <span style={{ fontSize: "50px" }}>
                          <CountUp end={150} enableScrollSpy />
                        </span>
                      </h3>
                      <p
                        className="w-100 text-nowrap text-center ms-0"
                        style={{ maxWidth: "100%" }}
                      >
                        Volunteers Recruited
                      </p>
                    </div>
                  </div>
                </div>
                <p className="w-100 text-center mt-4 fs-3">
                  Can you beat the top spot? Keep inspiring and climb higher!{" "}
                </p>
                <div className="w-100 d-flex justify-content-center">
                  <Link
                    onClick={ClickHandler}
                    className="theme-btn"
                    to="/volunteer/leaderboard"
                  >
                    Know More
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section> */}

      <section className="wpo-about-section pt-0">
        <div className="container section-padding pt-0">
          <div className="wpo-about-wrap">
            <div className="row flex-wrap-reverse">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-img">
                  {/* Image placeholder */}
                  <div className="wpo-about-center text-lg-center pt-3 pt-lg-0">
                    <Image src={Inspire} height={530} alt="Get Recognised for your influencing - SevakArmy" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-text p-3 mt-0 pb-1 pb-lg-2 pt-1 pt-lg-2">
                  <div className="wpo-section-title mb-3 mt-0">
                    <span>Get Recognised for Your Impact!</span>
                    <h2 className="about-heading-second">
                      Your Moment to Shine Awaits!
                    </h2>
                  </div>
                  <p style={{ textAlign: "justify" }}>
                    Your dedication deserves the spotlight. Attend exclusive recognition events, connect with fellow changemakers, and receive awards for your outstanding contributions. Together, let’s celebrate the positive difference we’re making in communities across India.
                  </p>
                  <h3>Stay Tuned for Upcoming Awards & Recognition Events</h3>
                  <div className="mt-4">
                    <Link
                      className="theme-btn" to="https://sevakarmy.com/" 
                    >
                      Know More
                    </Link>
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
                    <span>Ready to Use Your Influence for Good ?</span>
                    <p
                      className="text-center pt-2 px-2"
                      style={{ textAlign: "justify", color: "white" }}
                    >
                      Join us in inspiring change across India. Encourage your
                      followers to volunteer, support important causes and
                      build a legacy of social impact. Become an influencer with
                      a purpose - Start today with SevakArmy.
                    </p>
                    <div className="d-flex flex-column gap-3 justify-content-center align-items-center w-100">
                      <span>Register and Make a Difference Together!</span>
                      <Link
                       to="https://app.sevakarmy.com/" target="_blank"
                        className="theme-btn"
                        style={{ width: "fit-content", textTransform: 'none' }}
                      >
                        Join the Platform
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="col-lg-12">
          <div className="header-menu">
            <ul className="smothscroll">
              <li>
                <AnchorLink href="#scrool">
                  <i className="ti-arrow-up"></i>
                </AnchorLink>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
      <NewsletterPopup
        shownewsletter={shownewsletter}
        setShowNewsletter={setShowNewsletter}
      />
    </>
  );
};

export default Influencer;
