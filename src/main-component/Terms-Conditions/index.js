import { useEffect, useState } from "react";
import metadata from './../../app/[[...slug]]/metadata.json';
import useMetaTags from "../../app/hooks/useMetaTags";

import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Logo from "../../../public/assets/images/logo.svg";
import TermsAndConditionsContent from "./content";
import PageTitle from "../../components/pagetitle/PageTitle";
import { title } from "process";

const TermsAndConditions = () => {

  const [metaData, setMetaData] = useState({title: "Loading..."});
  const path = "dummy";
      useMetaTags(metaData);
      useMetaTags({
        title: "Terms and condition", 
        robots: "noindex, nofollow"
      });
  
      useEffect(() => {
    
        // Load metadata 
        let data = metadata[path]
        
          if (!data) {
            data = {
              title: "Page Not Found - SevakArmy",
              description: "The page you are looking for does not exist.",
              robots: "noindex, follow",
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
      <Navbar hclass={"wpo-site-header"} Logo={Logo} />
      <PageTitle pageTitle={"Terms and Conditions"} pagesub={"Terms and Conditions"} link={"/"} />
      <TermsAndConditionsContent />
      <Scrollbar />
      <Footer />
    </>
  );
};

export default TermsAndConditions;
