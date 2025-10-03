import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css";
import "swiper/css/navigation";
import DownloadResources from "../../../public/assets/images1/volunteer/home/download-resources.png";
import Image from "next/image";


const DownloadResourcesPage = (props) => {
  // const ClickHandler = () => {
  //   window.scrollTo(10, 0);
  // };

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

  return (
    <>
      <div className="container section-padding pt-5">
        <div className="wpo-about-wrap">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="wpo-about-img">
                <div className="wpo-about-right pt-3 pt-lg-5">
                  <Image src={DownloadResources} width={500} alt="Download Resources for Volunteers" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="wpo-about-text p-3 mt-0 pb-1 pb-lg-2 pt-1 pt-lg-2">
                <div className="wpo-section-title mt-0 mb-4" style={{textAlign:'left', marginLeft:'0px', margin:'0px'}}>
                  <span>Essential Materials to Help You Inspire Volunteers</span>
                  <h2 className="about-heading-second">Download Resources for Volunteers</h2>
                </div>
                <p className="mt-0 pt-0" style={{ textAlign: 'justify' }}>
                  Thank you for your dedication to spreading awareness about SevakArmy! Below, you can download a variety of materials that will help you promote volunteer opportunities within your community, school or organisation. Whether it's a banner, brochure or presentation, these resources are designed to help you inspire more people to join  SevakArmy platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section-padding pt-0 container">
        <div className="row justify-content-center">
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-12 col-12">
            <div className="mx-2">
              <div className="custom-panell" style={{border:'none'}}>
                <h3 className="text-center">Banners for Social Media and Websites</h3>
              </div>
              <p className="text-center">Use these banners to promote SevakArmy across social media platforms, websites and newsletters.</p>
            </div>
            <div className="w-full d-flex justify-content-center flex-wrap align-items-center gap-4 mt-5">
              <button className="theme-btn w-full d-flex align-items-center gap-2">
                <span className="text-nowrap">Download Social Media Banner</span>
                <span><svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="26px"
                  viewBox="0 -960 960 960"
                  width="26px"
                  fill="white"
                >
                  <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
                </svg>
                </span>
              </button>
              <button className="theme-btn w-full d-flex align-items-center gap-2">
                <span className="text-nowrap">Download Website Banner</span>
                <span><svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="26px"
                  viewBox="0 -960 960 960"
                  width="26px"
                  fill="white"
                >
                  <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
                </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0 container">
        <div className="row justify-content-center">
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-12 col-12">
            <div className="w-100 mx-2">
              <div className="custom-panell" style={{border:'none'}}>
                <h3 className="text-center">Posters for Schools, Colleges & Organisations</h3>
              </div>
              <p className="text-center">Display these posters on notice boards, hallways or community centres to reach a wider audience. </p>
            </div>
            <div className="w-full d-flex justify-content-center flex-wrap align-items-center gap-4 mt-5">
              <button className="theme-btn w-full d-flex align-items-center gap-2">
                <span className="text-nowrap">Download School/College Poster </span>
                <span><svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="26px"
                  viewBox="0 -960 960 960"
                  width="26px"
                  fill="white"
                >
                  <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
                </svg>
                </span>
              </button>
              <button className="theme-btn w-full d-flex align-items-center gap-2">
                <span className="text-nowrap">Download Organisation Poster</span>
                <span><svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="26px"
                  viewBox="0 -960 960 960"
                  width="26px"
                  fill="white"
                >
                  <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
                </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0 container">
        <div className="row justify-content-center">
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-12 col-12">
            <div className="w-100 mx-2">
              <div className="custom-panell" style={{border:'none'}}>
                <h3 className="text-center">Flyers and Notices</h3>
              </div>
              <p className="text-center">Distribute these printable flyers and notices to promote upcoming events or volunteer opportunities related to SevakArmy.</p>
            </div>
            <div className="w-full d-flex justify-content-center flex-wrap align-items-center gap-4 mt-5">
              <button className="theme-btn w-full d-flex align-items-center gap-2">
                <span className="text-nowrap">Download Flyer</span>
                <span><svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="26px"
                  viewBox="0 -960 960 960"
                  width="26px"
                  fill="white"
                >
                  <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
                </svg>
                </span>
              </button>
              <button className="theme-btn w-full d-flex align-items-center gap-2">
                <span className="text-nowrap">Download Notice</span>
                <span><svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="26px"
                  viewBox="0 -960 960 960"
                  width="26px"
                  fill="white"
                >
                  <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
                </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0 container">
        <div className="row justify-content-center">
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-12 col-12">
            <div className="w-100 mx-2">
              <div className="custom-panell" style={{border:'none'}}>
                <h3 className="text-center">SevakArmy Brochure</h3>
              </div>
              <p className="text-center">Share our official brochure with potential volunteers and NGOs to provide them with key information about the programme. </p>
            </div>
            <div className="w-100 d-flex justify-content-center flex-wrap align-items-center gap-4 mt-5">
              <button className="theme-btn w-full d-flex justify-content-center align-items-center gap-2">
                <span className="text-nowrap">Download Brochure</span>
                <span><svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="26px"
                  viewBox="0 -960 960 960"
                  width="26px"
                  fill="white"
                >
                  <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
                </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0 container">
        <div className="row justify-content-center">
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-12 col-12">
            <div className="w-100 mx-2">
              <div className="custom-panell" style={{border:'none'}}>
                <h3 className="text-center">SevakArmy Presentation (PPT) </h3>
              </div>
              <p className="text-center">For volunteers conducting events or meetings, this PowerPoint presentation highlights the vision, mission and key features of SevakArmy.</p>
            </div>
            <div className="w-100 d-flex justify-content-center flex-wrap align-items-center gap-4 mt-5">
              <button className="theme-btn w-full d-flex justify-content-center align-items-center gap-2">
                <span className="text-nowrap">Download PowerPoint Presentation </span>
                <span><svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="26px"
                  viewBox="0 -960 960 960"
                  width="26px"
                  fill="white"
                >
                  <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
                </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="section-padding pt-0 container">
        <p className="text-center mb-0" style={{fontWeight:'600', fontSize:'20px'}}>
          These resources are provided to make it easier for volunteers like you to promote SevakArmy.
        </p>
        <p className="text-center" style={{fontWeight:'600', fontSize:'20px'}}>
          Together, we can inspire more people to join the platform and contribute to positive social change.
        </p>
      </div>
    </>
  )
};

export default DownloadResourcesPage;
