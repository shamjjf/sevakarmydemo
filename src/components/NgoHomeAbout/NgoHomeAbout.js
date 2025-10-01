import React from "react";
// import abImg1 from "../../../public/assets/images1/ngo/home/sevak-army-ngo-home-4.jpg";

import NgoPromotes from "../NgoPromotes/NgoPromotes";
import Image from "next/image";

// import abImg1 from "../../../public/assets/images1/ngo/home/ngo-home.webp";
import abImg1 from "../../../public/assets/new-images/ngo/together.jpg";
import Vision from "../../../public/assets/images/service/arrow.webp";

function NgoHomeAbout({ show, setShow }) {
  // const ClickHandler = () => {
  //   window.scrollTo(10, 0);
  // };
  return (
    <section className="wpo-about-section section-padding">
      <div className="container">
        <div className="wpo-about-wrap">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="wpo-about-img">
                {/* <div className="wpo-about-left">
                  <Image src={abImg2} alt="img" />
                </div> */}
                <div className="wpo-about-right pt-0">
                  <Image src={abImg1} alt="Together, We Empower Change Sevak Army - Your Partner in Growth" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="wpo-about-text">
                <div className="wpo-section-title mb-3">
                  <span>Together, We Empower Change</span>
                  <h2 className="about-heading-second text-titleeee mt-0">
                    Sevak Army - Your Partner in Growth
                  </h2>
                </div>
                <p className="mb-2" style={{ textAlign: "justify" }}>
                  At Sevak Army, we help NGOs find the right support to drive their missions forward. We understand that every NGO has unique needs, whether it's finding skilled professionals to organise events, assist with fundraising, design promotional materials, or manage logistics. That’s why we created a user-friendly platform where NGOs can easily post their requirements and get the right assistance they need. </p>
                <p>
                  NGOs can register, list their projects, and efficiently manage tasks through our platform. We make the process straightforward and effective, ensuring that NGOs can focus on their core missions. With our tools, NGOs can also streamline communication, track progress, and oversee all aspects of their projects with ease.
                </p>
              </div>
            </div>
          </div>
          <div className="about-info-wrap w-100 row justify-content-center gap-5 mt-3">
            <div className="about-info-item align-items-start col-lg-5 col-12">
              <div className="about-info-icon">
                <div className="icon">
                  <Image src={Vision} width={78} height={78} alt="Vision" />
                </div>
              </div>
              <div className="about-info-text">
                <h4>Our Mission</h4>
                <p className="mission-paragraph">
                  Our mission is to support NGOs by connecting them with the
                  resources they need. Sevak Army simplifies the process, making
                  it easier for NGOs to succeed in their initiatives.
                </p>
              </div>
            </div>
            <div className="about-info-item align-items-start col-lg-5 col-12">
              <div className="about-info-icon">
                <div className="icon">
                  <i className="fi flaticon-mountain"></i>
                </div>
              </div>
              <div className="about-info-text">
                <h4>Our Vision</h4>
                <p className="vision-paragraph">
                  By 2025, Sevak Army aims to be the platform of choice for NGOs
                  across India, helping them achieve 2 million hours of
                  impactful projects. We strive to empower NGOs to build
                  stronger, more connected communities, creating a brighter
                  future for all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <NgoPromotes show={show} setShow={setShow} />
      </div>
    </section>
  );
}

export default NgoHomeAbout;
