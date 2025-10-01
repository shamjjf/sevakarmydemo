import React, { Fragment } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import Logo from "../../../public/assets/images/logo.svg";
import PageTitle from "../../components/pagetitle/PageTitle";
import VolunteerBlogsComponent from "./VolunteerBlogsComponent";

const VolunteerBlogsPage = () => {
  return (
    <>
      <Fragment>
        <Navbar Logo={Logo} hclass={"wpo-site-header"} />
        <PageTitle pageTitle={"Blogs"} pagesub={"Volunteer"} />
        <VolunteerBlogsComponent />
        <Scrollbar />
        <Footer />
        <Scrollbar />
      </Fragment>
    </>
  );
};
export default VolunteerBlogsPage;
