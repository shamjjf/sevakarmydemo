import React, { Fragment } from "react";
import Navbar from '../../components/Navbar/Navbar';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import Logo from "../../../public/assets/images/logo.svg";
import PageTitle from "../../components/pagetitle/PageTitle";
import Contact from "../../components/Organisation/contact";

const Leaderboard = () => {
    return (
        <>
        <Fragment>
            <Navbar Logo={Logo} hclass={'wpo-site-header'}/>
            <PageTitle pageTitle={'Contact Us'} pagesub={'Contact Us'} />
            <Contact />
            <Scrollbar />
            <Footer />
            <Scrollbar />
        </Fragment>
        </>
    );
};
export default Leaderboard