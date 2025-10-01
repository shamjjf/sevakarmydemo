import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";
import PageTitle from "../pagetitle/PageTitle";
import Logo from "../../../public/assets/images/logo.svg";

const Blank = ({ title }) => {
  return (
    <>
      <Navbar Logo={Logo} hclass={"wpo-site-header-s1"} />
      <PageTitle pageTitle={title} pagesub={title} />
      <Footer />
    </>
  );
};

export default Blank;
