import React, { Fragment } from "react";
import { useEffect, useState } from "react";
import metadata from './../../app/[[...slug]]/metadata.json';
import useMetaTags from "../../app/hooks/useMetaTags";

import Navbar from "../Navbar/Navbar";
import Logo from "../../../public/assets/images/logo.svg";
import Footer from "../footer/Footer";
import Scrollbar from "../scrollbar/scrollbar";
import PageTitle from "../pagetitle/PageTitle";
import NgoKeyFeaturesSection from "./NgoKeyFeaturesSection";

function NgoKeyFeatures({show, setShow, path }) {
    
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
            <PageTitle pageTitle={'Key Features'} pagesub={'Key Features'} link={"/ngo"} />
            <NgoKeyFeaturesSection show={show} setShow={setShow}/>
            <Footer />
            <Scrollbar />
        </Fragment>
    );
}

export default NgoKeyFeatures;
