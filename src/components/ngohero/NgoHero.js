import React from "react";
import { Link } from "react-router-dom";
import Image from "next/image";

import Image1 from "../../../public/assets/images1/ngo/home/sevak-army-ngo-home-1.webp";
import Videobg from "../../../public/assets/images1/ngo/home/sevak-army-ngo-home-2.webp";

import ShapeBg from "../../../public/assets/images/slider/stick-man.svg";
import SupportersSlider from "../hero/SupportersSlider";

function NgoHero(props) {
  return (
    <section className="static-hero">
      <div className="hero-container">
        <div className="hero-inner">
          <div className="container-fluid">
            <div className="hero-content">
              <div className="slide-title-sub">
                <span>Empowering Social Impact</span>
              </div>
              <div className="slide-title">
                <h2 className="slide-heading">
                  Simplifying Collaboration for Lasting Global Community Change{" "}
                </h2>
              </div>
              <div className="slide-text">
                <p style={{ maxWidth: '100%' }}>
                  Sevak Army brings NGOs and volunteers together to create
                  positive changes. Our platform helps NGOs find dedicated volunteers who want to use their skills to support social causes,
                  building a strong network to make a meaningful impact on
                  communities.
                </p>
              </div>
              <div className="clearfix"></div>
              <div
                data-swiper-parallax="500"
                className="slide-video-content"
                style={{ marginTop: "30px" }}
              >
                <div className="slide-video-img">
                  <Image src={Videobg} width={151} height={151} alt="Volunteers for NGO - Sevak Army" />
                </div>
                <div className="slide-video-text">
                  <h4 className="slide-video-text-show">
                    Join Us and Make a Difference!
                  </h4>
                  <p>
                    Register today and get dedicated volunteers to drive your
                    projects forward.
                  </p>
                </div>
              </div>
              <div className="mt-5">
                <Link
                  to="https://app.sevakarmy.com/" target="_blank"
                  className="theme-btn"
                >
                  Register Your NGO
                </Link>
              </div>
              <div className="charius-pic image-positionnnn pt-0 pt-md-3">
                <div className="charius-pic-main">
                  <Image src={Image1} width={700} height={"auto"} style={{ height: 'fit-content' }} alt="Volunteering with Sevak Army made easy" />
                </div>
                {/* <div className="charius-inner">
                  <Image src={Image2} alt="img" />
                </div> */}

                <div className="wpo-supporter">
                  <div className="wpo-supporter-text">
                    <div className="icon">
                      <i>
                        <Image src={ShapeBg} alt="img" />
                      </i>
                    </div>
                    <div className="content">
                      <h3>500+</h3>
                      <p>Verified NGOs Registered</p>
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
}

export default NgoHero;
