import React, { Fragment } from 'react';
import Logo from "../../../public/assets/images/logo.svg"
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import ContactSectionMain from '../../components/ContactSection/ContactSectionMain';

const ContactPageMain = ({show, setShow}) => {
    return (
        <Fragment>
            <Navbar Logo={Logo} hclass={'wpo-site-header-s5'} />
            <PageTitle pageTitle={'Contact Us'} pagesub={"Contact Us"}  />
            <ContactSectionMain show={show} setShow={setShow}/>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default ContactPageMain;

