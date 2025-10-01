import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import ContactSection from '../../components/ContactSection/ContactSection';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import Logo from "../../../public/assets/images/logo.svg"

const ContactPage = ({show, setShow}) => {
    return (
        <Fragment>
            <Navbar Logo={Logo} hclass={'wpo-site-header-s5'}/>
            <PageTitle pageTitle={'Contact Us'} pagesub={"Volunteer"}/>
            <ContactSection show={show} setShow={setShow}/>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default ContactPage;

