import { useEffect, useState } from "react";
import metadata from './../../app/[[...slug]]/metadata.json';
import useMetaTags from "../../app/hooks/useMetaTags";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Logo from "../../../public/assets/images/logo.svg";
import PageTitle from "../../components/pagetitle/PageTitle";
import CookiesContent from "./content";

const Cookies = () => {
  
  const [metaData, setMetaData] = useState({title: "Loading..."});
  const path = "dummy";
      useMetaTags(metaData);
      useMetaTags({
    title: "Cookie Policy",
    robots: "noindex,follow",
  });
  
      useEffect(() => {
    
        // Load metadata 
        let data = metadata[path]
        
          if (!data) {
            data = {
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
      <Navbar hclass={"wpo-site-header"} Logo={Logo} />
      <PageTitle pageTitle={"Cookie Policy"} pagesub={"Cookie Policy"} link={"/"} />
      <CookiesContent />
      <Scrollbar />
      <Footer />
    </>
  );
};

export default Cookies;
