import React, { Fragment } from "react";
import { useEffect, useState } from "react";
import metadata from './../../app/[[...slug]]/metadata.json';
import useMetaTags from "../../app/hooks/useMetaTags";

import Navbar from "../../components/Navbar/Navbar";
import Logo from "../../../public/assets/images/logo.svg";
import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Home from "../../components/Organisation/home";

const OrganisationHome = ({ show, setShow, path }) => {

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
      <Fragment>
        <Navbar Logo={Logo} hclass={"wpo-site-header-s5"} />
        <Home show={show} setShow={setShow} />
        {/* <ServiceSection hclass={"wpo-service-section s1 "} /> */}
        <Footer />
        <Scrollbar />
      </Fragment>
    </>
  );
};
export default OrganisationHome;
