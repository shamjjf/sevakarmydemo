import React from "react";
import SupportersSlider from "./SupportersSlider";

// import Image1 from "../../../public/assets/images1/home/sevak-army-home-1.jpg";
import Videobg from "../../../public/assets/images1/home/sevak-army-home-2.jpg";
import ShapeBg from "../../../public/assets/images/slider/stick-man.svg";
import heroImg from "../../../public/assets/new-images/home/hero-section.jpg"

import Image from "next/image";

const Hero = () => {
  return (
    <section className="static-hero static-hero-main-page">
      <div className="hero-container">
        <div className="hero-inner" style={{alignItems:'flex-start'}}>
          <div className="container-fluid responsive-containerrr">
            <div className="hero-content hero-content-main">
              <div className="slide-title-sub">
                <span>Welcome to Sevak Army</span>
              </div>
              <div className="slide-title">
                <h2 className="slide-heading">
                  Empower India Through Service and Volunteering{" "}
                </h2>
              </div>
              <div className="slide-text">
                <p>
                  Connect with verified NGOs, take on meaningful tasks, track
                  your volunteer hours and make a lasting impact through social
                  work across India.
                </p>
              </div>
              <div className="clearfix"></div>
              <div data-swiper-parallax="500" className="slide-video-content">
                <div className="slide-video-img">
                  <Image style={{width:'auto', height:'auto'}} priority={true} src={Videobg} width={152} height={151} alt="Volunteers for NGO - Sevak Army" />
                </div>
                <div className="slide-video-text">
                  <h4 className="slide-video-text-show">
                    A Commitment to Service, A Brighter Tomorrow{" "}
                  </h4>
                  <p>
                    Every volunteer service hour counts. Every action sparks
                    transformation.{" "}
                  </p>
                </div>
              </div>
              <div className="charius-pic image-positionnnn pt-0 charius-pic-main">
                <div className="charius-pic-main">
                  <Image src={heroImg} width={600} priority={true} style={{height:'fit-content'}} alt="Volunteering made easy with SevakArmy" /> 
                </div>

                <div className="wpo-supporter">
                  <div className="wpo-supporter-text">
                    <div className="icon">
                      <i>
                        <Image width={20} height={80} src={ShapeBg} alt="img" style={{marginLeft: '6px'}} />
                      </i>
                    </div>
                    <div className="content">
                      <h3>63283+</h3>
                      <p>Happy Volunteers</p>
                    </div>
                  </div>
                  <SupportersSlider />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
