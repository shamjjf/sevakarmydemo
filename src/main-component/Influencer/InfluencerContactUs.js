import React, { Fragment } from 'react';

import Logo from "../../../public/assets/images/logo.svg"

import InfluencerContactPage from './InfluencerContactPage';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';

const InfluencerContactUs = ({ show, setShow }) => {
    return (
        <Fragment>
            <Navbar Logo={Logo} hclass={'wpo-site-header-s5'} />
            <PageTitle pageTitle={'Contact Us'} pagesub={"Influencer"}  />
            <InfluencerContactPage show={show} setShow={setShow} />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default InfluencerContactUs;

