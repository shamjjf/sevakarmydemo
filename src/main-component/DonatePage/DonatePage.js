import React, { Fragment } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import Logo from "../../../public/assets/images/logo.svg";
import DonateSection from "../../components/DonateSection/DonateSection";
import useMetaTags from "../../app/hooks/useMetaTags";

const EventPagetwo = () => {
  useMetaTags({
    title: "Support the Sevak Army – Be the Change"
  })
  return (
    <Fragment>
      <Navbar Logo={Logo} hclass={"wpo-site-header-s5"} />
      <PageTitle pageTitle={"Donations"} />
      <DonateSection />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default EventPagetwo;
