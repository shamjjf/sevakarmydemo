import React, { Fragment } from 'react'
import Navbar from '../Navbar/Navbar'
import PageTitle from '../pagetitle/PageTitle'
import Footer from '../footer/Footer'
import Scrollbar from '../scrollbar/scrollbar'
import Logo from '../../../public/assets/images/logo.svg'
import JoinUsInfo from './JoinUsInfo'

const VounteerJoinUs = () => {
    return (
        <Fragment>
            <Navbar Logo={Logo} hclass={'wpo-site-header'} />
            <PageTitle pageTitle={'Join Us'} pagesub={'Volunteer'} />
            <JoinUsInfo />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
}

export default VounteerJoinUs