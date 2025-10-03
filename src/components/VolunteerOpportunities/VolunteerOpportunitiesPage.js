import React, { Fragment, useState } from "react";
import { useEffect } from "react";
import metadata from './../../app/[[...slug]]/metadata.json';
import useMetaTags from "../../app/hooks/useMetaTags";

import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import Logo from "../../../public/assets/images/logo.svg";
import VolunteerOpportunities from "./VolunteerOpportunities";

const VolunteerOpportunitiesPage = () => {

  const [metaData, setMetaData] = useState({title: "Loading..."});
  
      useMetaTags(metaData);
  
      useEffect(() => {
    
        // Load metadata 
        let data = metadata[path]
        
          if (!data) {
            data = {
              title: "Page Not Found - SevakArmy",
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
      <PageTitle pageTitle={"Opportunities"} pagesub={"Volunteer"} />
      <VolunteerOpportunities />

      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default VolunteerOpportunitiesPage;
