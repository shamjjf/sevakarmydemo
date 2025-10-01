import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "../HomePage/HomePage";
import AboutPage from "../AboutPage/AboutPage";
import DonatePage from "../DonatePage/DonatePage";
import BlogDetails from "../BlogDetails/BlogDetails";
import ContactPageMain from "../ContactPage/ContactPageMain";
import SchoolCollegeHome from "../School-CollegePage";
import SchoolCollegePages from "../School-CollegePage/Pages";
import OrganisationRegistration from "../Organisation/OrganisationRegistration";
import Influencer from "../Influencer/Influencer";
import EmployeeEngagement from "../Organisation/EmployeeEngagement";
import Leaderboard from "../Organisation/Leaderboard";
import OrganisationHome from "../Organisation/OrganisationHome";
import NgoHome from "../../components/NgoHome/NgoHome";
import Volunteerhome from "../../components/Volunteer/Volunteerhome";
import InflunencerPages from "../InfluencerPages/InflunencerPages";
import NgoAbout from "../../components/NgoAbout/NgoAbout";
import VolunteerAboutUs from "../../components/VolunteerAbout/VolunteerAboutUs";

// import ContactUs from "../Organisation/ContactUs";
// import Register from "../SignUpPage/index";
// import LoginPage from "../LoginPage/index";
// import VolunteerOpportunitiesPage from "../../components/VolunteerOpportunities/VolunteerOpportunitiesPage";
// import ContactPage from "../ContactPage/ContactPage";
// import ContactUsNgo from "../../components/ContactusNGO/ContactUsNgo";
// import VolunteerEvents from "../../components/VolunteerEvents/VolunteerEvents";
// import NgoMainInvlved from "../../components/NgoGetInvolved/NgoMainInvlved";
// import DownloadResourcesPage from "../../components/Volunteer/DownloadResourcesPage";
// import ReferAndEarnPage from "../ReferAndEarn";

import TermsAndConditions from "../Terms-Conditions";
import PrivacyPolicy from "../PrivacyPolicy";
import AuthModal from "../../auth-modal";
import VolunteerKeyFeatures from "../../components/Volunteer/VolunteerKeyFeatures";
import VolunteerBenefits from "../../components/Volunteer/VolunteerBenefits";
import VolunteerLeaderboard from "../../components/Volunteer/VolunteerLeaderboard";
import VolunteerRecognitionEvent from "../../components/Volunteer/VolunteerRecognitionEvent";
import BecomeVolunteer from "../../components/Volunteer/BecomeVolunteer";
import VolunteerFaq from "../../components/Volunteer/VolunteerFaq";
import ReferAndEarn from "../../components/ReferAndEarn";
import DownloadResources from "../../components/Volunteer/DownloadResources";
import FAQPage from "../../components/FAQPage";
import NgoBenefits from "../../components/NgoAbout/NgoBenefits";
import NgoKeyFeatures from "../../components/NgoAbout/NgoKeyFeatures";
import NgoRegistrationProcess from "../../components/NgoAbout/NgoRegistrationProcess";
import NgoFaqPage from "../../components/NgoAbout/NgoFaqPage";
import InfluencerKeyFeatures from "../Influencer/InfluencerKeyFeatures";
import InfluencerBenefits from "../Influencer/InfluencerBenefits";
import InfluencerLeaderboard from "../Influencer/InfluencerLeaderboard";
import InfluencerRecognitionEvents from "../Influencer/InfluencerRecognitionEvents";
import BecomeInfluencer from "../Influencer/BecomeInfluencer";
import InfluencerFaq from "../Influencer/InfluencerFaq";
import SchoolCollegeFeatures from "../School-CollegePage/SchoolCollegeFeatures";
import SchoolCollegeBenefits from "../School-CollegePage/SchoolCollegeBenefits";
import SchoolCollegeAmbassador from "../School-CollegePage/SchoolCollegeAmbassador";
import SchoolCollegeLeaderboard from "../School-CollegePage/SchoolCollegeLeaderboard";
import SchoolCollegeRecognitionEvents from "../School-CollegePage/SchoolCollegeRecognitionEvents";
import SchoolCollegeRegisterInstitute from "../School-CollegePage/SchoolCollegeRegisterInstitute";
import SchoolCollegeFaq from "../School-CollegePage/SchoolCollegeFaq";
import SchoolCollegeContact from "../School-CollegePage/SchoolCollegeContact";
import InfluencerContactUs from "../Influencer/InfluencerContactUs";
import InfluencerReferAndEarn from "../Influencer/InfluencerReferAndEarn";
import OrganisationKeyFeatures from "../Organisation/OrganisationKeyFeatures";
import OrganisationBenefits from "../Organisation/OrganisationBenefits";
import OrganisationAmbassadorProgramme from "../Organisation/OrganisationAmbassadorProgramme";
import OrganisationRecognition from "../Organisation/OrganisationRecognition";
import ForgotPassword from "../../components/ForgotPassword";
import Cookies from "../Cookies";

const AllRoute = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        {/* <Layout_SEO> */}
          <Routes>

            <Route path="/" element={<Homepage path="home" show={show} setShow={setShow} />} />
            <Route path="contact-us" element={<ContactPageMain show={show} setShow={setShow} />} />
            <Route path="donate" element={<DonatePage show={show} setShow={setShow} />} />
            
            {/* School and college related all the pagese are here */}
            <Route path="school-college" element={<SchoolCollegeHome path="school-college" show={show} setShow={setShow} />} />
            <Route path="school-college/about-us" element={<SchoolCollegePages path="school-college/about-us" show={show} setShow={setShow} />} />
            <Route path="school-college/key-features" element={<SchoolCollegeFeatures path="school-college/key-features" show={show} setShow={setShow} />} />
            <Route path="school-college/benefits" element={<SchoolCollegeBenefits path="school-college/benefits" show={show} setShow={setShow} />} />
            <Route path="school-college/ambassador-programme" element={<SchoolCollegeAmbassador path="school-college/ambassador-programme" show={show} setShow={setShow} />} />
            <Route path="school-college/leaderboard" element={<SchoolCollegeLeaderboard path="school-college/leaderboard" show={show} setShow={setShow} />} />
            <Route path="school-college/recognition-events" element={<SchoolCollegeRecognitionEvents path="school-college/recognition-events" show={show} setShow={setShow} />} />
            <Route path="school-college/register-institute" element={<SchoolCollegeRegisterInstitute path="school-college/register-institute" show={show} setShow={setShow} />} />
            <Route path="school-college/faqs" element={<SchoolCollegeFaq path="school-college/faqs" show={show} setShow={setShow} />} />
            <Route path="school-college/contact-us" element={<SchoolCollegeContact path="school-college/contact-us" show={show} setShow={setShow} />} />
            
            {/* NGO related all the pagese are here */}
            <Route path="/ngo" element={<NgoHome path="ngo" show={show} setShow={setShow} />} />
            <Route path="/ngo/about-us" element={<NgoAbout path="ngo/about-us" show={show} setShow={setShow} />} />
            <Route path="/ngo/benefits" element={<NgoBenefits path="ngo/benefits" show={show} setShow={setShow} />} />
            <Route path="/ngo/key-features" element={<NgoKeyFeatures path="ngo/key-features" show={show} setShow={setShow} />} />
            {/* <Route path="/ngo/contact-us" element={<ContactUsNgo show={show} setShow={setShow} />} /> */}
            <Route path="/ngo/registration-process" element={<NgoRegistrationProcess path="ngo/registration-process" show={show} setShow={setShow} />} />
            <Route path="/ngo/faqs" element={<NgoFaqPage path="ngo/faqs" show={show} setShow={setShow} />} />
            {/* <Route path="/ngo/get-involved" element={<NgoMainInvlved show={show} setShow={setShow} />} /> */}
            
            {/* Influencer related all the pagese are here */}
            {/* <Route path="influencer" element={<Influencer show={show} setShow={setShow} />} /> */}
            <Route path="influencer" element={<Influencer path="influencer" show={show} setShow={setShow} />} />
            
            {/* TODO: Change the component name to  InflunencerAboutUsPage*/}
            <Route path="influencer/about-us" element={<InflunencerPages path="influencer/about-us" show={show} setShow={setShow} />} />
            <Route path="influencer/key-features" element={<InfluencerKeyFeatures path="influencer/key-features" show={show} setShow={setShow} />} />
            <Route path="influencer/benefits" element={<InfluencerBenefits path="influencer/benefits" show={show} setShow={setShow} />} />
            <Route path="influencer/leaderboard" element={<InfluencerLeaderboard path="influencer/leaderboard" show={show} setShow={setShow} />} />
            <Route path="influencer/recognition-events" element={<InfluencerRecognitionEvents path="influencer/recognition-event" show={show} setShow={setShow} />} />
            <Route path="influencer/join-sevak-army" element={<BecomeInfluencer path="influencer/join-sevak-army" show={show} setShow={setShow} />} />
            <Route path="influencer/faqs" element={<InfluencerFaq show={show} path="influencer/faqs" setShow={setShow} />} />
            <Route path="influencer/contact-us" element={<InfluencerContactUs show={show} setShow={setShow} />} />
            <Route path="influencer/refer-and-earn" element={<InfluencerReferAndEarn show={show} setShow={setShow} />} />
            
            {/* Organisation related all the pagese are here */}
            <Route path="organisation" element={<OrganisationHome path="organisation" show={show} setShow={setShow} />} />
            <Route path="organisation/registration" element={<OrganisationRegistration path="organisation/registration" show={show} setShow={setShow} />} />
            <Route path="organisation/ambassador-programme" element={<OrganisationAmbassadorProgramme path="organisation/ambassador-programme" show={show} setShow={setShow} />} />
            <Route path="organisation/benefits" element={<OrganisationBenefits path="organisation/benefits" show={show} setShow={setShow} />} />
            <Route path="organisation/key-features" element={<OrganisationKeyFeatures path="organisation/key-features" show={show} setShow={setShow} />} />
            <Route path="organisation/employee-engagement" element={<EmployeeEngagement path="organisation/employee-engagement" show={show} setShow={setShow} />} />
            <Route path="organisation/leaderboard" element={<Leaderboard path="organisation/leaderboard" show={show} setShow={setShow} />} />
            <Route path="organisation/certificates-recognition" element={<OrganisationRecognition path="organisation/certificates-recognition" show={show} setShow={setShow} />} />
            {/* <Route path="organisation/contact-us" element={<ContactUs path="organisation/contact-us" show={show} setShow={setShow} />} /> */}
            <Route path="organisation/about-us" element={<AboutPage path="organisation/about-us" show={show} setShow={setShow} />} />
            
            {/* Volunteer related all the pagese are here */}
            <Route path="volunteer" element={<Volunteerhome path="volunteer" show={show} setShow={setShow} />} />
            <Route path="volunteer/about-us" element={<VolunteerAboutUs path="volunteer/about-us" show={show} setShow={setShow} />} />
            <Route path="volunteer/key-features" element={<VolunteerKeyFeatures path="volunteer/key-features" show={show} setShow={setShow} />} />
            <Route path="volunteer/benefits" element={<VolunteerBenefits path="volunteer/benefits"  show={show} setShow={setShow} />} />
            <Route path="volunteer/leaderboard" element={<VolunteerLeaderboard path="volunteer/leaderboard" show={show} setShow={setShow} />} />
            <Route path="volunteer/recognition-events" element={<VolunteerRecognitionEvent path="volunteer/recognition-event" show={show} setShow={setShow} />} />
            <Route path="volunteer/become-volunteer" element={<BecomeVolunteer path="volunteer/become-volunteer" show={show} setShow={setShow} />} />
            <Route path="volunteer/faqs" element={<VolunteerFaq path="volunteer/faqs" show={show} setShow={setShow} />} />
            {/* <Route path="volunteer/events" element={<VolunteerEvents show={show} setShow={setShow} />} /> */}
            {/* <Route path="volunteer/opportunities" element={<VolunteerOpportunitiesPage path="volunteer/opportunities" show={show} setShow={setShow} />} /> */}
            {/* <Route path="volunteer/contact-us" element={<ContactPage show={show} setShow={setShow} />} /> */}
            {/* <Route path="volunteer/download-resources" element={<DownloadResources show={show} setShow={setShow} />} /> */}
            <Route path="volunteer/refer-and-earn" element={<ReferAndEarn show={show} setShow={setShow} />} />
            
            <Route path="forgot-password" element={<ForgotPassword show={show} setShow={setShow} />} />
            <Route path="terms-and-conditions" element={<TermsAndConditions show={show} setShow={setShow} />} />
            <Route path="cookie-policy" element={<Cookies show={show} setShow={setShow} />} />
            <Route path="privacy-policy" element={<PrivacyPolicy show={show} setShow={setShow} />} />
            <Route path="refer-and-earn" element={<ReferAndEarn show={show} setShow={setShow} />} />
            <Route path="download-resources" element={<DownloadResources show={show} setShow={setShow} />} />
            <Route path="faqs" element={<FAQPage show={show} setShow={setShow} />} />
            <Route path="opportunities/:slug" element={<BlogDetails show={show} setShow={setShow} />} />
          </Routes>
        {/* </Layout_SEO> */}
        <AuthModal show={show} setShow={setShow} />
      </BrowserRouter>
    </div>
  );
};

export default AllRoute;
