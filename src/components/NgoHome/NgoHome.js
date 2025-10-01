import React, { Fragment } from "react";
import { useEffect, useState } from "react";
import metadata from './../../app/[[...slug]]/metadata.json';
import useMetaTags from "../../app/hooks/useMetaTags";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Logo from "../../../public/assets/images/logo.svg";
import NgoHero from "../ngohero/NgoHero";
import NgoFeaturesData from "../ngoFeaturesData/NgoFeaturesData";
import NgoHomeAbout from "../NgoHomeAbout/NgoHomeAbout";
import NgoWhatWeDo from "../NgoWhatWeDo/NgoWhatWeDo";
import NgoHomeTestimonal from "../NgoHomeTestimonal/NgoHomeTestimonal";
// import NgoBlockHome from "../NgoHomeBlock/NgoHomeBlock";
import NgoCtaSection from "../CtaSection/NgoCtaSection";
import NgoCtaSection2 from "../CtaSection/NgoCtaSection2";

// export const metadata = {
//   title: 'Sevak Army: Your NGO\'s Support Network',
//   description: 'Sevak Army connects NGOs with dedicated volunteers. Post tasks, find skilled help, and streamline projects to drive your mission forward with ease.',
//   keywords: 'Skilled volunteers for NGOs, Support for NGO tasks, Volunteer help for NGOs, Manage NGO projects, NGO task management platform',
//   icons: {
//     icon: '/favicon.png',
//   },
//   openGraph: {
//     title: 'Sevak Army: Your NGO\'s Support Network',
//     description: 'Sevak Army connects NGOs with dedicated volunteers. Post tasks, find skilled help, and streamline projects to drive your mission forward with ease.',
//     url: 'https://sevakarmy.mini91.com/ngo',
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: 'Sevak Army: Your NGO\'s Support Network',
//     description: 'Sevak Army connects NGOs with dedicated volunteers. Post tasks, find skilled help, and streamline projects to drive your mission forward with ease.',
//   },
//   robots: 'index, follow',
//   canonical: 'https://sevakarmy.mini91.com/ngo',
// };

function NgoHome({ show, setShow, path }) {

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

  console.log("Data ", metaData);

  return (
    <>

      <Fragment>
        <Navbar Logo={Logo} hclass={"wpo-site-header"} />
        <NgoHero show={show} setShow={setShow} />
        <NgoFeaturesData />
        <NgoHomeAbout show={show} setShow={setShow} />
        <NgoWhatWeDo />
        {/* <NgoHomeStatus hclass={"wpo-fun-fact-section"} /> */}
        <NgoHomeTestimonal hclass={"wpo-testimonial-section"} />
        <NgoCtaSection />
        <NgoCtaSection2 />
        {/* <NgoBlockHome /> */}
        <Footer />
        <Scrollbar />
      </Fragment></>
  );
}

export default NgoHome;
