import { useEffect, useState } from "react";
import metadata from './../../app/[[...slug]]/metadata.json';
import useMetaTags from "../../app/hooks/useMetaTags";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Logo from "../../../public/assets/images/logo.svg";
import Scrollbar from "../../components/scrollbar/scrollbar";
import PrivacyPolicyContent from "./content";
import PageTitle from "../../components/pagetitle/PageTitle";

const PrivacyPolicy = () => {

  const [metaData, setMetaData] = useState({title: "Loading..."});
    const path = "dummy";
        useMetaTags(metaData);
        useMetaTags({
    title: "Privacy Policy",
    robots: "noindex,follow",
  });
    
        useEffect(() => {
      
          // Load metadata 
          let data = metadata[path]
          
            if (!data) {
              data = {
                title: "Page Not Found - Sevak Army",
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
      <PageTitle pageTitle={"Privacy Policy"} pagesub={"Privacy Policy"} link={"/"} />
      <PrivacyPolicyContent />
      <Footer />
      <Scrollbar />
    </>
  );
};

export default PrivacyPolicy;
