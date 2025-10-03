import React, { Fragment } from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import metadata from './../../app/[[...slug]]/metadata.json';
import useMetaTags from "../../app/hooks/useMetaTags";

import Navbar from "../Navbar/Navbar";
import NgoAboutFirstSection from "./NgoAboutFirstSection";
import NgoFaq from "./NgoFaq";
import Footer from "../footer/Footer";
import Scrollbar from "../scrollbar/scrollbar";
import PageTitle from "../pagetitle/PageTitle";

import Logo from "../../../public/assets/images/logo.svg";

// import Image from "next/image";
// import icon from "../../../public/assets/images/cta/top-icon.png";

function NgoAbout({path}) {

  // const ClickHandler = () => {
  //   window.scrollTo(10, 0);
  // };

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
    <Fragment>
      <Navbar Logo={Logo} hclass={"wpo-site-header"} />
      <PageTitle pageTitle={'About Us'} pagesub={'About Us'} link={"/ngo"} />
      <NgoAboutFirstSection />
      <NgoFaq />


      <section className="wpo-cta-section section-padding">
        <div className="bg-overlay">
          <div className="container">
            <div className="bg-color">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="cta-wrap">
                    <h2 className="mb-2">About Sevak Army</h2>
                    <p
                      className="text-center pt-2 px-2"
                      style={{ textAlign: "justify", color: "white" }}
                    >
                      Sevak Army is an NGO dedicated to empowering individuals and communities through volunteerism. Our mission is to inspire collective action for a better society. Join us in making a lasting impact!
                    </p>
                    <div className="d-flex flex-column gap-3 justify-content-center align-items-center w-100">
                        <Link  to="https://sevakarmy.com/" target="_blank" className="theme-btn" style={{ width: "fit-content" }}>
                          Learn More About Us
                        </Link>
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
    </Fragment>
  );
}

export default NgoAbout;
