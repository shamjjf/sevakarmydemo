import React, { Fragment } from "react";
import { useEffect, useState } from "react";
import metadata from './../../app/[[...slug]]/metadata.json';
import useMetaTags from "../../app/hooks/useMetaTags";

import Logo from "../../../public/assets/images/logo.svg";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import OrganisationBenefitsPage from "./OrganisationBenefitsPage";
import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";

function OrganisationBenefits({show, setShow, path}) {
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
      <PageTitle pageTitle={"Benefits"} pagesub={"Benefits"} link={"/organisation"} />
      <OrganisationBenefitsPage show={show} setShow={setShow}/>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
}

export default OrganisationBenefits;
