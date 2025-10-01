import React, { Fragment } from "react";
import Logo from '../../../public/assets/images/logo.svg'
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import ReferAndEarnPage from "./ReferAndEarnPage";
import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";

function InfluencerReferAndEarn({show, setShow}) {
    return (
        <Fragment>
            <Navbar Logo={Logo} hclass={"wpo-site-header"} />
            <PageTitle pageTitle={"Refer And Earn"} pagesub={"Refer And Earn"} />
            <ReferAndEarnPage show={show} setShow={setShow}/>
            <Footer />
            <Scrollbar />
        </Fragment>
    );
}

export default InfluencerReferAndEarn;
