import React, { Fragment } from "react";
import Logo from '../../public/assets/images/logo.svg'
import Navbar from "./Navbar/Navbar";
import PageTitle from "./pagetitle/PageTitle";
import Footer from "./footer/Footer";
import Scrollbar from "./scrollbar/scrollbar";
import ReferAndEarnPage from "./Volunteer/ReferAndEarnPage";

function ReferAndEarn() {
    return (
        <Fragment>
            <Navbar Logo={Logo} hclass={"wpo-site-header"} />
            <PageTitle pageTitle={"Refer And Earn"} pagesub={" Refer And Earn "} />
            <ReferAndEarnPage />
            <Footer />
            <Scrollbar />
        </Fragment>
    );
}

export default ReferAndEarn;
