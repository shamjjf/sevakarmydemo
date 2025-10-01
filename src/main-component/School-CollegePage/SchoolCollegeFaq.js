import React, { Fragment } from "react";
import Logo from "../../../public/assets/images/logo.svg";
import FaqPage from "./FaqPage";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";

function SchoolCollegeFaq () {
    return (
        <Fragment>
            <Navbar Logo={Logo} hclass={"wpo-site-header"} />
            <PageTitle pageTitle={"FAQs"} pagesub={"FAQs"} link={"/school-college"} />
            <FaqPage />
            <Footer />
            <Scrollbar />
        </Fragment>
    );
}

export default SchoolCollegeFaq;
