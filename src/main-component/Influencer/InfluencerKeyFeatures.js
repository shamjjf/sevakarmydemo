import React, { Fragment, useEffect, useState } from "react";
import metadata from './../../app/[[...slug]]/metadata.json';
import useMetaTags from "../../app/hooks/useMetaTags";

import InfluencerKeyFeaturesPage from "./InfluencerKeyFeaturesPage";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";

import Logo from "../../../public/assets/images/logo.svg";

function InfluencerKeyFeatures({show, setShow, path}) {

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
      <PageTitle pageTitle={"Key Features"} pagesub={"Key Features"} link={"/influencer"} />
      <InfluencerKeyFeaturesPage show={show} setShow={setShow}/>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
}

export default InfluencerKeyFeatures;
