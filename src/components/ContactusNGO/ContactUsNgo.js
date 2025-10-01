import React, { Fragment } from "react";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Logo from "../../../public/assets/images/logo.svg";
import PageTitle from "../../components/pagetitle/PageTitle";
import NgoContactSection from "./NgoContactSection";

const ContactUsNgo = () => {
  
  return (
    <div>
      <Fragment>
        <Navbar Logo={Logo} hclass={"wpo-site-header"} />
        <PageTitle pageTitle={"Contact Us "} pagesub={"Contact Us"} />
        <NgoContactSection />
        <Footer />
        <Scrollbar />
      </Fragment>
    </div>
  );
};

export default ContactUsNgo;
