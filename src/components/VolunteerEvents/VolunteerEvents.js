import React, { Fragment } from "react";
import Navbar from "../Navbar/Navbar";
import PageTitle from "../pagetitle/PageTitle";
import Footer from "../footer/Footer";
import Scrollbar from "../scrollbar/scrollbar";
import Logo from '../../../public/assets/images/logo.svg'
import EventsInfo from "./EventsInfo";

function VolunteerEvents() {
    return (
        <Fragment>
            <Navbar Logo={Logo} hclass={'wpo-site-header'} />
            <PageTitle pageTitle={'Events'} pagesub={'Volunteer'} />
            <EventsInfo />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
}

export default VolunteerEvents