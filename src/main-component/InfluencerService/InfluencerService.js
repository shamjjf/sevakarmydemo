import Logo from "../../../public/assets/images/logo.svg";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import React, { useEffect } from "react";
import PageTitle from "../../components/pagetitle/PageTitle";

import hero1 from "../../../public/assets/images1/influencer/services/sevak-army-influencer-services-13.jpg";
import hero2 from "../../../public/assets/images1/influencer/services/sevak-army-influencer-services-14.jpg";
import hero3 from "../../../public/assets/images1/influencer/services/sevak-army-influencer-services-15.jpg";
import HeroShape1 from "../../../public/assets/images/slider/shape/1.png";
import HeroShape2 from "../../../public/assets/images/slider/shape/2.png";
import HeroShape3 from "../../../public/assets/images/slider/shape/3.png";
import HeroShape4 from "../../../public/assets/images/slider/shape/4.png";
import HeroShape5 from "../../../public/assets/images/slider/shape/5.png";
import HeroShape6 from "../../../public/assets/images/slider/shape/6.png";
import { Link } from "react-router-dom";
import abImg1 from "../../../public/assets/images1/influencer/services/sevak-army-influencer-services-1.jpg";
import abImg3 from "../../../public/assets/images1/influencer/services/sevak-army-influencer-services-3.jpg";
import abImg6 from "../../../public/assets/images1/influencer/services/sevak-army-influencer-services-6.jpg";
import abImg7 from "../../../public/assets/images1/influencer/services/sevak-army-influencer-services-7.jpg";
import abImg10 from "../../../public/assets/images1/influencer/services/sevak-army-influencer-services-10.jpg";
import abImg12 from "../../../public/assets/images1/influencer/services/sevak-army-influencer-services-13.png";
import Encouragement from "../../../public/assets/images1/volunteer/home/encouragement.png";
import Community from "../../../public/assets/images1/volunteer/home/public-relation.png";
import Action from "../../../public/assets/images1/volunteer/home/data-collection.png";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Cta1 from "../../../public/assets/images/cta/shape-1.png";
import Cta2 from "../../../public/assets/images/cta/top-icon.png";
import Cta3 from "../../../public/assets/images/cta/shape-2.png";
import Image from "next/image";
//   };
import Referral from "../../components/Volunteer/Referral";

const featuresData = [
  {
    iconClass: "flaticon-volunteer",
    title: "Become an Influencer",
    description: "Alone, your voice is powerful. Together, we can change the world.",
  },
  {
    iconClass: "flaticon-solidarity",
    title: "Join a Campaign",
    description: "Alone, you can raise awareness. Together, we can spark movements.",
  },
  {
    iconClass: "flaticon-charity",
    title: "Support a Cause",
    description: "Alone, your impact is meaningful. Together, we can create lasting change.",
  },
];

const InfluencerService = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  useEffect(() => {
    const rotate = () => {
      const lastChild = document.querySelector(".manroted div:last-child").cloneNode(true);
      document.querySelectorAll(".manroted div").forEach((div) => div.classList.remove("firstSlide"));
      document.querySelector(".manroted div:last-child").remove();
      document.querySelector(".manroted").prepend(lastChild);
    };

    const intervalId = setInterval(rotate, 4000);

    return () => clearInterval(intervalId);
  }, []);
  // const ClickHandler2 = () => {
  //   window.scrollTo(10, 0);
  // };
  return (
    <>
      <Navbar hclass={"wpo-site-header"} Logo={Logo} />
      <PageTitle pageTitle={"Services"} pagesub={"Services"} />
      <section className="static-hero-s4">
        <div className="hero-container">
          <div className="hero-inner ">
            <div className="container-fluid ">
              <div className="hero-content">
                <div className="slide-title">
                  <h2 className="mb-0 pb-0 margin-toppppppp">
                    Influencer <br /> Services
                  </h2>
                  {/* <h2>Services</h2> */}
                </div>
                <div className="slide-text">
                  <p>
                    At SevakArmy Influencer, we believe that influencers have the power to amplify social causes, raise
                    awareness and inspire real action. By leveraging your platform and unique voice, you can contribute
                    to initiatives that uplift communities, empower individuals and drive social progress. Here’s how
                    you, as an influencer, can make a difference with SevakArmy.
                  </p>
                </div>
                <div className="hero-btn">
                  <Link onClick={ClickHandler} to="/influencer/contact-us" className="theme-btn">
                    Discover More
                  </Link>
                </div>
                <div className="hero-slider-img image-padding-bottommmm">
                  <div className="hero-slider-wrap">
                    <div className="manroted">
                      <div className="box1">
                        <Image src={hero1} alt="Influencer Service" />
                      </div>
                      <div className="box2">
                        <Image src={hero2} alt="Influencer Service" />
                      </div>
                      <div className="box3 ">
                        <Image src={hero3} alt="Influencer Service" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shape-icon-1">
          <Image src={HeroShape1} alt="Influencer Service" />
        </div>
        <div className="shape-icon-2">
          <Image src={HeroShape2} alt="Influencer Service" />
        </div>
        <div className="shape-icon-3">
          <Image src={HeroShape3} alt="Influencer Service" />
        </div>
        <div className="shape-icon-4">
          <Image src={HeroShape3} alt="Influencer Service" />
        </div>
        <div className="shape-icon-5">
          <Image src={HeroShape4} alt="Influencer Service" />
        </div>
        <div className="shape-icon-6">
          <Image src={HeroShape1} alt="Influencer Service" />
        </div>
        <div className="shape-icon-7">
          <Image src={HeroShape4} alt="Influencer Service" />
        </div>
        <div className="shape-icon-8">
          <Image src={HeroShape3} alt="Influencer Service" />
        </div>
        <div className="shape-icon-9">
          <Image src={HeroShape5} alt="Influencer Service" />
        </div>
        <div className="shape-icon-10">
          <Image src={HeroShape6} alt="Influencer Service" />
        </div>
        <div className="shape-icon-11">
          <Image src={HeroShape4} alt="Influencer Service" />
        </div>
      </section>
      {/* <section className={"section-padding " + props.hclass} >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-12 col-12">
                        <SectionTitle subtitle="How Does It Work?" title="SevakArmy makes volunteer management easy and rewarding." />
                    </div>
                </div>
                <div className="service-wrap">
                    <div className="row">
                        {Services.slice(0, 4).map((Service, sitem) => (
                            <div className="col col-lg-6 col-md-6 col-sm-6 col-12" key={sitem}>
                                <ServiceCard title={Service.title} img={Service.sImg} slug={Service.slug} sdescription={Service.description} />
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section> */}
      <div>
        <section className="wpo-about-section section-padding pb-0">
          <div className="container">
            <div className="wpo-about-wrap">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12 col-12">
                  <div className="wpo-about-img">
                    {/* <div className="wpo-about-left">
                      <Image src={abImg2} alt="img" />
                    </div> */}
                    <div className="wpo-about-right pt-0">
                      <Image src={abImg1} alt="img" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-12">
                  <div className="wpo-about-text">
                    <div className="wpo-section-title">
                      <h2 className="about-heading-second text-titleeee">Raise Awareness for Social Causes</h2>
                    </div>
                    <p>
                      As an influencer, your platform can be a beacon of awareness for pressing issues. Partner with
                      SevakArmy to promote causes that align with your values, whether education, healthcare, women’s
                      empowerment or environmental sustainability. You’ll receive access to:
                    </p>

                    <div className="about-info-wrap">
                      <div className="about-info-item align-items-start" style={{ marginRight: "30px" }}>
                        <div className="about-info-icon"></div>
                        <div className="about-info-text">
                          <h4>Custom Campaigns</h4>
                          <p className="mission-paragraph">
                            Participate in exclusive campaigns tailored to your niche and audience. Share stories,
                            visuals and call-to-action posts to raise awareness and inspire your followers to take
                            action.{" "}
                          </p>
                        </div>
                      </div>
                      <div className="about-info-item align-items-start">
                        <div className="about-info-icon"></div>
                        <div className="about-info-text">
                          <h4>Real Impact Stories</h4>
                          <p className="vision-paragraph">
                            Use authentic narratives from our partner NGOs to create compelling content that resonates
                            with your audience. Help amplify voices that are working towards change but often go
                            unheard.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container section-padding pb-5">
            <div className="wpo-about-wrap">
              <div
                className="flex-containerrr justify-content-center gap-5"
                style={{ margin: "0", gap: "0px", padding: "0" }} // Reduce the row spacing
              >
                <div
                  className=""
                  style={{ paddingRight: "10px" }} // Adjust padding as needed
                >
                  <div className="wpo-about-text p-3 mt-0 pb-1 pb-lg-2 pt-1 pt-lg-2" style={{ marginBottom: "10px" }}>
                    <div className="wpo-section-title">
                      <h2 className="about-heading-third text-titleeee">Collaborate with Charitable Organisations</h2>
                    </div>
                    <p>
                      Influencers have the opportunity to directly collaborate with NGOs that need help raising funds,
                      driving participation in campaigns or spreading awareness for specific initiatives. You can:
                    </p>
                    <div className="about-info-wrap">
                      <div className="about-info-item align-items-start" style={{ marginRight: "15px" }}>
                        {/* Adjusted marginRight */}
                        <div className="about-info-text">
                          <h4>Promote Fundraisers</h4>
                          <p className="mission-paragraph">
                            Partner with NGOs to promote fundraising campaigns, helping them reach a larger audience and
                            achieve their goals.
                          </p>
                        </div>
                      </div>
                      <div className="about-info-item align-items-start">
                        <div className="about-info-text">
                          <h4>Campaign Advocacy</h4>
                          <p className="vision-paragraph">
                            Join hands with organisations to advocate for causes such as climate action, child education
                            or healthcare access, using your platform to drive real-world impact.
                          </p>
                        </div>
                      </div>
                    </div>
                    <p style={{fontWeight:'700'}}>
                      By joining forces with these organisations, you’ll ensure your influence is used to support
                      life-changing efforts.
                    </p>
                  </div>
                </div>
                <div
                  className=""
                  style={{ paddingLeft: "10px" }} // Adjust padding as needed
                >
                  <div className="wpo-about-img">
                    {/* <div className="wpo-about-left-side">
                      <Image src={abImg4} alt="img" />
                    </div> */}
                    <div className="wpo-about-right">
                      <Image src={abImg3} width={700} alt="img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="wpo-cta-section">
          <div className="shape-1">
            <Image src={Cta1} alt="Influencer Service" />
          </div>
          <div className="bg-overlay">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="cta-wrap">
                    <div className="icon">
                      <Image src={Cta2} alt="Influencer Service" />
                    </div>
                    <span>Subscribe to SevakArmy.</span>
                    <h2>Stay informed and inspired by subscribing to our Influencers updates.</h2>
                    <Link onClick={() => props.setShow(true)} to="#" className="theme-btn-cta">
                      Subscribe now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="shape-2">
            <Image src={Cta3} alt="Influencer Service" />
          </div>
        </section>
        <section className="wpo-about-section section-padding">
          <div className="container">
            <div className="wpo-about-wrap">
              <div className="row">
                <div className="col-lg-6 col-md-12 col-12">
                  <div className="wpo-about-img">
                    {/* <div className="wpo-about-left">
                      <Image src={abImg6} alt="img" />
                    </div> */}
                    <div className="wpo-about-right pt-0">
                      <Image src={abImg6} alt="img" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-12">
                  <div className="wpo-about-text">
                    <div className="wpo-section-title">
                      <h2 className="about-heading-second text-titleeee">Influence with Purpose: Lead by Example</h2>
                    </div>
                    <p>
                      By collaborating with SevakArmy, you can influence others to participate in community service.
                      Your followers look up to you and your active participation in social causes can inspire them to
                      contribute to a greater cause. Here’s how you can lead by example:
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="container mt-5">
            <div className="">
              <section className={" wpo-fun-fact-section-s3 pb-0"}>
                <div className="container mt-3">
                  <div className="w-100 service-wrap">
                    <div className="row justify-content-center gap-3">
                      <div className="service-item px-4 py-4 col-xl-3 col-lg-4 col-md-7 col-sm-8 col-11 sevak-custom-carddd">
                        <div className="info d-flex flex-column justify-content-center flex-no-wrap">
                          <div className="w-100 d-flex py-4 justify-content-center">
                            <div className="icon">
                              <Image src={Encouragement} width={60} alt="img" />
                            </div>
                          </div>
                          <h2 className="text-center">Encourage Volunteerism</h2>
                          <p className="w-100 text-center ms-0" style={{ maxWidth: '100%' }}>Encourage your audience to volunteer for specific campaigns, whether it’s participating in
                            donation drives, joining environmental clean-ups or contributing to educational initiatives.</p>
                        </div>
                      </div>
                      <div className="service-item px-4 py-4 col-xl-3 col-lg-4 col-md-7 col-sm-8 col-11 sevak-custom-carddd">
                        <div className="info d-flex flex-column justify-content-center flex-no-wrap">
                          <div className="w-100 d-flex py-4 justify-content-center">
                            <div className="icon" style={{ backgroundColor: '#FFFCF4', border: '1px solid #EBB011' }}>
                              <Image src={Community} width={60} alt="img" />
                            </div>
                          </div>
                          <h2 className="text-center">Engage Communities</h2>
                          <p className="w-100 text-center ms-0" style={{ maxWidth: '100%' }}>Start meaningful conversations about the causes you care about and engage your community to
                            participate in charity work or support grassroots movements.</p>
                        </div>
                      </div>
                      <div className="service-item px-4 py-4 col-xl-3 col-lg-4 col-md-7 col-sm-8 col-11 sevak-custom-carddd">
                        <div className="info d-flex flex-column justify-content-center flex-no-wrap">
                          <div className="w-100 d-flex py-4 justify-content-center">
                            <div className="icon" style={{ backgroundColor: '#F3FFFC', border: '1px solid #00AF90' }}>
                              <Image src={Action} width={60} alt="img" />
                            </div>
                          </div>
                          <h2 className="text-center">Drive Collective Action</h2>
                          <p className="w-100 text-center ms-0" style={{ maxWidth: '100%' }}>Use your influence to mobilise your audience for impactful causes, prompting them to take
                            collective action that brings tangible benefits to communities in need.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </section>

          <div className="container section-padding pb-0">
            <div className="wpo-about-wrap">
              <div className="flex-containerrr gap-5">
                <div className="">
                  <div className="wpo-about-text p-3 mt-0 pb-1 pb-lg-2 pt-1 pt-lg-2">
                    <div className="wpo-section-title mt-0">
                      {/* <span>Welcome to SevakArmy!</span> */}
                      <h2 className="about-heading-third text-titleeee">Referral programme: Grow the Movement</h2>
                    </div>
                    <p>
                      Expand the reach of SevakArmy by referring fellow influencers to the platform. Every referral
                      contributes to growing our community and as an influencer, you'll earn recognition for bringing
                      more voices into the fold. With  SevakArmy Referral programme, you can:
                    </p>
                  </div>

                  {/* <div className="about-info-wrap">
                      <div className="about-info-item align-items-start" style={{ marginRight: "30px" }}>
                        <div className="about-info-text">
                          <h4>Refer Fellow Influencers</h4>
                          <p className="mission-paragraph">
                            Spread the word about SevakArmy to other influencers in your network and earn points as
                            they join.
                          </p>
                        </div>
                      </div>
                      <div className="about-info-item align-items-start" style={{ marginRight: "30px" }}>
                        <div className="about-info-icon"></div>
                        <div className="about-info-text">
                          <h4>Track Your Impact</h4>
                          <p className="vision-paragraph">
                            Your referrals contribute to your overall impact on the Influencer Leaderboard and you’ll be
                            recognised for your efforts in growing the movement.
                          </p>
                        </div>
                      </div>
                      <div className="about-info-item align-items-start">
                        <div className="about-info-icon"></div>
                        <div className="about-info-text">
                          <h4>Compete and Lead</h4>
                          <p className="vision-paragraph">
                            Stay motivated by participating in our friendly leaderboard competition, where top
                            influencers who refer the most people are recognised and rewarded.
                          </p>
                        </div>
                      </div>
                    </div> */}
                </div>
                <div className="">
                  <div className="wpo-about-img">
                    {/* <div className="wpo-about-left-side">
                      <Image src={abImg8} alt="img" />
                    </div> */}
                    <div className="wpo-about-right pt-3 pt-lg-5">
                      <Image src={abImg7} alt="img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Referral />
        </section>
        <section className="wpo-features-area pt-0">
          <div className="container">
            <div className="features-wrap">
              <div className="row">
                {featuresData.map((feature, index) => (
                  <div className="col col-lg-4 col-md-6 col-12" key={index}>
                    <div className="feature-item-wrap">
                      <div className="feature-item">
                        <div className="feature-icon">
                          <div className="icon">
                            <i className={`fi ${feature.iconClass}`}></i>
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
        <section className="wpo-about-section section-padding">
          <div className="container">
            <div className="wpo-about-wrap">
              <div className="flex-containerrr justify-content-center gap-5">
                <div className="">
                  <div className="wpo-about-img">
                    {/* <div className="wpo-about-left">
                      <Image src={abImg10} alt="img" />
                    </div> */}
                    <div className="wpo-about-right pt-3 pt-lg-5">
                      <Image src={abImg10} alt="img" />
                    </div>
                  </div>
                </div>
                <div className="w-lg-50 w-100">
                  <div className="wpo-about-text">
                    <div className="wpo-section-title">
                      <h2 className="about-heading-second text-titleeee">Exclusive Resources for Influencers</h2>
                    </div>
                    <p>
                      SevakArmy provides influencers with a wealth of resources to help create powerful, engaging
                      content. You’ll have access to:
                    </p>

                    <div className="about-info-wrap">
                      <div className="about-info-item align-items-start" style={{ marginRight: "30px" }}>
                        <div className="about-info-icon"></div>
                        <div className="about-info-text">
                          <h4>Campaign Toolkits</h4>
                          <p className="mission-paragraph">
                            Receive detailed guides on structuring your posts, including talking points, hashtags and
                            other vital resources to boost your campaign’s reach.
                          </p>
                        </div>
                      </div>
                      <div className="about-info-item align-items-start">
                        <div className="about-info-icon"></div>
                        <div className="about-info-text">
                          <h4>Ready-to-Use Media</h4>
                          <p className="vision-paragraph">
                            Get high-quality social media graphics, videos and behind-the-scenes stories to make your
                            content more engaging.
                          </p>
                        </div>
                      </div>
                      <div className="about-info-item align-items-start">
                        <div className="about-info-icon"></div>
                        <div className="about-info-text">
                          <h4>Personal Support</h4>
                          <p className="vision-paragraph">
                            Our team will assist you in aligning with causes and provide continuous support as you craft
                            your social campaigns.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container section-padding">
            <div className="wpo-about-wrap">
              <div className="flex-containerrr justify-content-center gap-5">
                <div className="">
                  <div className="wpo-about-text p-3">
                    <div className="wpo-section-title">
                      {/* <span>Welcome to SevakArmy!</span> */}
                      <h2 className="about-heading-third text-titleeee">Lead with Influence, Inspire with Action</h2>
                    </div>
                    <p>
                      By partnering with SevakArmy, you can transform your platform into a force for good. Whether it’s
                      raising awareness, driving donations or inspiring volunteerism, your influence can directly impact
                      lives and bring about positive change. As part of  SevakArmy Influencer community, you’ll have
                      the tools, partnerships and opportunities to turn your passion into action.
                    </p>
                  </div>
                </div>
                <div className="">
                  <div className="wpo-about-img">
                    {/* <div className="wpo-about-left-side">
                      <Image src={abImg12} alt="img" />
                    </div> */}
                    <div className="wpo-about-right pt-3 pt-lg-5">
                      <Image src={abImg12} alt="img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <Scrollbar />
    </>
  );
};

export default InfluencerService;
