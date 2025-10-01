import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import Logo from '../../../public/assets/images/logo.svg'
import TeamSectionS2 from '../../components/TeamSection2/TeamSection2';
const TeamPage = () => {
    return (
        <Fragment>
            <Navbar Logo={Logo} hclass={'wpo-site-header-s5'} />
            <PageTitle pageTitle={'Volunteer'} pagesub={'Volunteer'} />
            <TeamSectionS2/>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default TeamPage;
