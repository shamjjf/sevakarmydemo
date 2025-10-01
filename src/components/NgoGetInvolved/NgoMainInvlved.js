import React, { Fragment } from 'react'
import Footer from '../footer/Footer'
import Scrollbar from "../../components/scrollbar/scrollbar";
import Logo from "../../../public/assets/images/logo.svg";
import Navbar from '../Navbar/Navbar';
import NgoGetInvolvedSection from './NgoGetInvolvedSection';
import PageTitle from '../pagetitle/PageTitle';

function NgoMainInvlved({}) {
  return (
    <Fragment>
      <Navbar Logo={Logo} hclass={"wpo-site-header"} />
      <PageTitle pageTitle={'Get Involved'} pagesub={'Get Involved'} />
      <NgoGetInvolvedSection/>
      <Footer />
      <Scrollbar />
    </Fragment>
  )
}

export default NgoMainInvlved