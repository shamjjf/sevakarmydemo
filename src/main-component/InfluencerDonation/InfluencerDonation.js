import React from "react";
import icon from "../../../public/assets/images/cta/top-icon.png";
import Navbar from "../../components/Navbar/Navbar";
import Logo from "../../../public/assets/images/logo.svg";
import Footer from "../../components/footer/Footer";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "../../style.css";
import PageTitle from "../../components/pagetitle/PageTitle";
import DonateSection from "../../components/DonateSection/DonateSection";
const InfluencerDonation = () => {
  // const clickHandler = () => {
  //   window.scrollTo(10, 0);
  // };
  // const [paymentMethod, setPaymentMethod] = useState("card");
  // const [formData, setFormData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   address: "",
  //   note: "",
  //   cardHolderName: "",
  //   cardNumber: "",
  //   cvv: "",
  //   expiryDate: "",
  // });

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  // const handlePaymentMethodChange = (e) => {
  //   setPaymentMethod(e.target.value);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

  return (
    <>
      <Navbar hclass={"wpo-site-header"} Logo={Logo} />
      <PageTitle pageTitle={"Donation"} pagesub={"Donation"} />
      <section className="wpo-cta-section-s3" style={{ marginTop: "100px" }}>
        <div className="container">
          <div className="bg-color" style={{ background: "#fff" }}>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="cta-wrap">
                  <span>Help us raise them up.</span>
                  <h2>Your donation means a lot to our influencers. Donate what you can.</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <DonateSection />
      <section>
        <div className="col-lg-12">
          <div className="header-menu">
            <ul className="smothscroll">
              <li>
                <AnchorLink href="#scrool">
                  <i className="ti-arrow-up"></i>
                </AnchorLink>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default InfluencerDonation;
