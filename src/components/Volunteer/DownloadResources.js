import React, { Fragment } from "react";
import Logo from '../../../public/assets/images/logo.svg'
import DownloadResourcesPage from "./DownloadResourcesPage";
import Navbar from "../Navbar/Navbar";
import PageTitle from "../pagetitle/PageTitle";
import Footer from "../footer/Footer";
import Scrollbar from "../scrollbar/scrollbar";

function DownloadResources() {
    return (
        <Fragment>
            <Navbar Logo={Logo} hclass={"wpo-site-header"} />
            <PageTitle pageTitle={"Download Resources"} pagesub={"Download Resources"} />
            <DownloadResourcesPage />
            <Footer />
            <Scrollbar />
        </Fragment>
    );
}

export default DownloadResources;