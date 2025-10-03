import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Image from "next/image";

import SectionTitle from "../SectionTitle/SectionTitle";

// import About1 from "../../../public/assets/images1/ngo/about-us/sevak-army-ngo-about-us-3.webp";
import About1 from "../../../public/assets/new-images/ngo/about/about.jpg";
import Collaboration from '../../../public/assets/images1/ngo/home/collab.webp'
import Simplicity from '../../../public/assets/images1/ngo/home/like.webp'
import Trust from '../../../public/assets/images1/ngo/home/trust.webp'
import Impact from '../../../public/assets/images1/ngo/home/impact.webp'
import Growth from '../../../public/assets/images1/ngo/home/graph.webp'
// import About2 from "../../../public/assets/images1/volunteer/about-us/sevak-army-volunteer-about-us-2.webp";
import About2 from "../../../public/assets/new-images/common/our-mission.jpg";
// import About3 from "../../../public/assets/images1/volunteer/about-us/sevak-army-volunteer-about-us-3.webp";
import About3 from "../../../public/assets/new-images/common/our-vision.jpg";

// import icon from "../../../public/assets/images/cta/top-icon.png";

const featuresData2 = [
  {
    // iconClass: 'flaticon-volunteer',
    svg: Collaboration,
    title: 'Collaboration',
    description: 'Bringing NGOs and volunteers together to achieve more.'
  },
  {
    // iconClass: 'flaticon-volunteer',
    svg: Simplicity,
    title: 'Simplicity',
    description: 'Making it easy for NGOs to find the right help.'
  },
  {
    // iconClass: 'flaticon-volunteer',
    svg: Trust,
    title: 'Trust',
    description: 'Ensuring all connections are reliable and trustworthy.'
  },
  {
    // iconClass: 'flaticon-volunteer',
    svg: Impact,
    title: 'Community Impact',
    description: 'Creating positive change in local communities across the nation.'
  },
  {
    // iconClass: 'flaticon-volunteer',
    svg: Growth,
    title: 'Growth',
    description: 'Helping NGOs grow by providing skilled volunteers.'
  },
];

function NgoAboutFirstSection() {

  const featuresData = [
    {
      iconClass: "flaticon-volunteer",
      title: "Our Mission",
      alt: 'Our Mission',
      img: About2,
      description: (
        <>
          Our mission is to support NGOs by connecting them with the resources they need. SevakArmy simplifies the process, making it easier for NGOs to succeed in their initiatives.
        </>
      ),
    },
    {
      iconClass: "flaticon-solidarity",
      title: "Our Vision",
      alt: 'Our Vision',
      img: About3,
      description: (
        <>
          By 2025, SevakArmy aims to be the platform of choice for NGOs across India, helping them achieve 2 million hours of impactful project work. We strive to empower NGOs to build stronger, more connected communities, creating a brighter future for all.
        </>
      ),
    },
  ];


  return (
    <Fragment>
      <>
        <section className="wpo-about-section mb-0 mt-3 pb-0 pt-5">
          <div className="container ">
            <div className="wpo-about-wrap">
              <div className="flex-containerrr justify-content-center">
                <div className="">
                  <div className="wpo-about-img">
                    <div className="bg-image">
                      <Image src={About1} width={650} priority={true} style={{height:'auto'}} alt="About Us - NGO SevakArmy" />
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="wpo-about-text mt-0">
                    <div className="wpo-section-title">
                      <h2 className="text-titleeee">About Us</h2>
                    </div>
                    <p className="volunteer-home-text">
                      SevakArmy is a platform that connects NGOs with volunteers from all walks of life. We make it simple for NGOs to find passionate and skilled volunteers who can help with various tasks, from teaching to organising events and more. We aim to create a space where NGOs can easily find the right volunteers for their needs. Our goal is to solve the challenges NGOs face in recruiting committed volunteers and to provide volunteers with diverse opportunities to use their skills meaningfully.
                    </p>

                  </div>
                </div>
              </div>
              <section className="wpo-features-area pt-5">
                <div className="features-wrap">
                  <div className="row justify-content-center">
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

              <section className="section-padding pb-3">
                <div className='container'>
                  <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-12 col-12">
                      <SectionTitle subtitle="Our Values" title="Our Pillars of Impact" />
                    </div>
                  </div>

                  <div className="wpo-features-area pt-3 mb-0">
                    <div className="features-wrap">
                      {/* <p className="pb-2 w-100" style={{ width: '100%', textAlign: 'center', display: 'flex', justifyContent: 'center' }}>Connect with Skilled Volunteers and Grow Your Impact </p> */}
                      <div className="row justify-content-center align-items-start column-gappp">
                        {featuresData2.map((feature, index) => (
                          <div className="col col-lg-4 col-md-6 col-12" key={index}>
                            <div className="feature-item-wrap">
                              <div className="feature-item d-flex align-items-center mb-0" style={{ height: '158px' }}>
                                <div className="feature-icon">
                                  <div className="icon">
                                    {feature.iconClass ? <i className={`fi ${feature.iconClass}`}></i> : <Image src={feature.svg} alt={feature.svg} />}
                                  </div>
                                </div>
                                <div className="feature-text">
                                  <h2 className="fs-5 mb-0">{feature.title}</h2>
                                  <p className="fs-6" style={{ textAlign: 'justify' }}>{feature.description}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>

            </div>
          </div>
        </section>



      </>
    </Fragment>
  );
}

export default NgoAboutFirstSection;
