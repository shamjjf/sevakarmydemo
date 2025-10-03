import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import Logo from "../../../public/assets/images/logo.svg";

const NgoLoginRegister = (props) => {
  const { slug } = useParams();
  // const EventDetails = events.find((item) => item.slug === slug);

  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const tabStyles = (isActive) => ({
    display: "block",
    textAlign: "center",
    color: isActive ? "#fff" : "#333",
    backgroundColor: isActive ? "#FFC107" : "#f9f9f9",
    transition: "background-color 0.3s ease, transform 0.3s ease",
    fontWeight: "600",
    margin: "0 5px",
    border: "none",
    borderRadius: "8px",
    borderTop: `5px solid ${isActive ? "#FFC107" : "transparent"}`,
    lineHeight: "24px",
    height: "60px",
    padding: "12px 15px",
    cursor: "pointer",
    boxShadow: isActive ? "0px 4px 15px rgba(0, 0, 0, 0.3)" : "0px 2px 5px rgba(0, 0, 0, 0.1)",
    fontSize: "18px",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    outline: "none",
    "&:hover": {
      backgroundColor: !isActive ? "#e0e0e0" : "#FFC107",
      transform: !isActive ? "scale(1.05)" : "none",
    },
  });

  return (
    <Fragment>
      <Navbar Logo={Logo} hclass={"wpo-site-header"} />
      <PageTitle pageTitle={"NGO Login/Register"} pagesub={"NGO"} />

      <div style={{ padding: "50px 0", background: "#f2f2f2" }}>
        <div className="container">
          <div className="row">
            <div className="col col-lg-12">
              <div className="w-100">
                <div style={{ marginBottom: "30px", textAlign: "center" }}>
                  <h2 className="wpo-section-title text-titleeee mb-1">NGO Login/Register</h2>
                  <p className="w-100">
                    If your organisation is a recognised and registered NGO, you can log in or register to access a
                    personalised dashboard tailored to support your initiatives. This portal allows you to manage
                    projects, track progress and collaborate with other organisations. New NGO partners can register to
                    join our growing network and unlock exclusive resources and support.
                  </p>
                </div>
              </div>
              <div
                style={{
                  border: "1px solid #ebebeb",
                  marginTop: "40px",
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <ul
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      width: "100%",
                      listStyle: "none",
                      padding: "0",
                      margin: "0",
                    }}
                  >
                    <li style={{ margin: "5px" }}>
                      {" "}
                      <a style={tabStyles(activeTab === 0)} onClick={() => handleTabClick(0)}>
                        NGO Login
                      </a>
                    </li>
                    <li style={{ margin: "5px" }}>
                      <a style={tabStyles(activeTab === 1)} onClick={() => handleTabClick(1)}>
                        Admin Panel
                      </a>
                    </li>
                    <li style={{ margin: "5px" }}>
                      <a className="pt-0 pt-sm-3" style={tabStyles(activeTab === 2)} onClick={() => handleTabClick(2)}>
                        Donation History (For Logged-In NGOs)
                      </a>
                    </li>
                  </ul>
                </div>

                <div
                  style={{
                    padding: "35px",
                    backgroundColor: "#fff",
                    borderRadius: "8px",
                    border: "1px solid #ebebeb",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <div>
                    {activeTab === 0 && (
                      <div>
                        <h2 style={{ fontSize: "1.5rem", color: "#333" }}>NGO Login</h2>
                        <p style={{ color: "#555", lineHeight: "1.6" }}>
                          Already a registered partner? Log in to your account to manage ongoing projects, submit
                          reports, update your profile and connect with donors and volunteers. Keep your organisation’s
                          information current and monitor your performance through the comprehensive NGO dashboard.
                        </p>
                        <Link
                          onClick={() => props.setShow(true)}
                          to="#"
                          style={{
                            display: "inline-block",
                            padding: "10px 20px",
                            backgroundColor: "#FFC107",
                            color: "#fff",
                            borderRadius: "4px",
                            textDecoration: "none",
                            transition: "background-color 0.3s",
                          }}
                        >
                          Register Here
                        </Link>
                        <hr />
                        <h4 style={{ color: "#333" }}>Forgot Your Password?</h4>
                        <p style={{ color: "#555", lineHeight: "1.6" }}>
                          If you've forgotten your password, follow the steps to reset it. You'll receive an email with
                          instructions on how to change your password and regain access to your account securely.
                        </p>
                        <Link
                          onClick={() => props.setShow(true)}
                          to="#"
                          style={{
                            display: "inline-block",
                            padding: "10px 20px",
                            backgroundColor: "#FFC107",
                            color: "#fff",
                            borderRadius: "4px",
                            textDecoration: "none",
                            transition: "background-color 0.3s",
                          }}
                        >
                          Reset Password
                        </Link>
                      </div>
                    )}
                    {activeTab === 1 && (
                      <div>
                        <h2 style={{ fontSize: "1.5rem", color: "#333" }}>Admin Panel</h2>
                        <p style={{ color: "#555", lineHeight: "1.6" }}>
                          The Admin Panel provides a robust management tool for platform administrators. Here, you can
                          monitor NGO activities, track project statuses and generate detailed reports. Additionally,
                          admins can verify new NGO registrations, update profiles and ensure smooth platform
                          operations.
                        </p>
                        <Link
                          onClick={() => props.setShow(true)}
                          to="#"
                          style={{
                            display: "inline-block",
                            padding: "10px 20px",
                            backgroundColor: "#FFC107",
                            color: "#fff",
                            borderRadius: "4px",
                            textDecoration: "none",
                            transition: "background-color 0.3s",
                          }}
                        >
                          Access Admin Panel
                        </Link>
                        <hr />
                        <h4 style={{ color: "#333" }}>Admin Login</h4>
                        <p style={{ color: "#555", lineHeight: "1.6" }}>
                          Administrators can log in to manage platform functions, verify NGO credentials and oversee
                          project categorisation. Stay on top of system-wide updates to ensure the platform operates
                          efficiently.
                        </p>
                        <Link
                          onClick={() => props.setShow(true)}
                          to="#"
                          style={{
                            display: "inline-block",
                            padding: "10px 20px",
                            backgroundColor: "#FFC107",
                            color: "#fff",
                            borderRadius: "4px",
                            textDecoration: "none",
                            transition: "background-color 0.3s",
                          }}
                        >
                          Admin Register Here
                        </Link>
                      </div>
                    )}
                    {activeTab === 2 && (
                      <div>
                        <h2 style={{ fontSize: "1.5rem", color: "#333" }}>Donation History</h2>
                        <p style={{ color: "#555", lineHeight: "1.6" }}>
                          Track your organisation’s donation history through your dashboard. Access detailed reports on
                          contributions received, project allocations and donor engagement metrics. This information is
                          crucial for maintaining transparency and building trust with supporters.
                        </p>
                        <Link
                          onClick={() => props.setShow(true)}
                          to="#"
                          style={{
                            display: "inline-block",
                            padding: "10px 20px",
                            backgroundColor: "#FFC107",
                            color: "#fff",
                            borderRadius: "4px",
                            textDecoration: "none",
                            transition: "background-color 0.3s",
                          }}
                        >
                          View Donation History
                        </Link>
                        <hr></hr>
                        <h4 style={{ color: "#333" }}>Donor Login</h4>
                        <p style={{ color: "#555", lineHeight: "1.6" }}>
                          Donors can log in to manage their contributions, view past donations and explore upcoming
                          campaigns. Stay connected with the causes you support and maintain transparency in how your
                          donations are utilised.
                        </p>
                        <Link
                          onClick={() => props.setShow(true)}
                          to="#"
                          style={{
                            display: "inline-block",
                            padding: "10px 20px",
                            backgroundColor: "#FFC107",
                            color: "#fff",
                            borderRadius: "4px",
                            textDecoration: "none",
                            transition: "background-color 0.3s",
                          }}
                        >
                          Donor Register Here
                        </Link>
                      </div>
                    )}

                    <div className="wpo-event-details-text">
                      <p>
                        For assistance, contact our support team at
                        <a href="mailto:donor.support@sevakarmy.org"> Email Donor Support </a>
                        if you encounter any issues or require help with receipts or donation history.
                      </p>
                      <p>Ready to make an impact? Join SevakArmy today . Let’s make a difference together!</p>
                      <Link
                        onClick={ClickHandler}
                        to="/register"
                        style={{
                          display: "inline-block",
                          padding: "10px 20px",
                          backgroundColor: "#FFC107",
                          color: "#fff",
                          borderRadius: "4px",
                          textDecoration: "none",
                          transition: "background-color 0.3s",
                        }}
                      >
                        Register now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default NgoLoginRegister;
