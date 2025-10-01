import React, { Fragment, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import { NavLink } from "react-router-dom";
import "./style.css";

const menus = [
  {
    id: 1,
    title: "Main Page",
    link: "/",
  },

  {
    id: 3,
    title: "Volunteer",
    link: "/volunteer",
    submenu: [
      { id: 30, title: "Home", link: "/volunteer" },
      { id: 31, title: "About Us", link: "/volunteer/about-us" },
      { id: 32, title: "Key Features", link: "/volunteer/key-features" },
      { id: 33, title: "Benefits", link: "/volunteer/benefits" },
      { id: 35, title: "Leaderboard", link: "/volunteer/leaderboard" },
      { id: 36, title: "Recognition Events", link: "/volunteer/recognition-events" },
      { id: 37, title: "Become a Volunteer", link: "/volunteer/become-volunteer" },
      { id: 38, title: "FAQ", link: "/volunteer/faqs" },
    ],
  },
  {
    id: 8,
    title: "Influencer",
    link: "/influencer",
    submenu: [
      { id: 81, title: "Home", link: "/influencer" },
      { id: 82, title: "About Us", link: "/influencer/about-us" },
      { id: 83, title: "Key Features", link: "/influencer/key-features" },
      { id: 84, title: "Benefits", link: "/influencer/benefits" },
      { id: 86, title: "Leaderboard", link: "/influencer/leaderboard" },
      { id: 87, title: "Recognition Events", link: "/influencer/recognition-events" },
      { id: 88, title: "Join Sevak Army", link: "/influencer/join-sevak-army" },
      { id: 89, title: "FAQ", link: "/influencer/faqs" },
    ],
  },
  {
    id: 7,
    title: "School/College",
    link: "/school-college",
    submenu: [
      { id: 71, title: "Home", link: "/school-college" },
      { id: 72, title: "About Us", link: "/school-college/about-us" },
      { id: 73, title: "Key Features", link: "/school-college/key-features" },
      { id: 74, title: "Benefits", link: "/school-college/benefits" },
      { id: 76, title: "Ambassador Programme", link: "/school-college/ambassador-programme" },
      { id: 77, title: "Leaderboard", link: "/school-college/leaderboard" },
      { id: 78, title: "Recognition Events", link: "/school-college/recognition-events" },
      { id: 79, title: "Register Your Institution", link: "/school-college/register-institute" },
      { id: 80, title: "FAQ", link: "/school-college/faqs" },
    ],
  },
  {
    id: 4,
    title: "Organisation",
    link: "/organisation",
    submenu: [
      { id: 41, title: "Home", link: "/organisation" },
      { id: 42, title: "About Us", link: "/organisation/about-us" },
      { id: 43, title: "Key Features", link: "/organisation/key-features" },
      { id: 44, title: "Benefits", link: "/organisation/benefits" },
      { id: 45, title: "Registration", link: "/organisation/registration" },
      { id: 46, title: "Ambassador Programme", link: "/organisation/ambassador-programme" },
      { id: 47, title: "Employee Engagement", link: "/organisation/employee-engagement" },
      { id: 48, title: "Leaderboard", link: "/organisation/leaderboard" },
      { id: 49, title: "Certificates and Recognition", link: "/organisation/certificates-recognition" },
    ],
  },
  {
    id: 9,
    title: "NGO",
    link: "/ngo",
    submenu: [
      { id: 91, title: "Home", link: "/ngo" },
      { id: 92, title: "About Us", link: "/ngo/about-us" },
      { id: 93, title: "Benefits", link: "/ngo/benefits" },
      { id: 94, title: "Key Features", link: "/ngo/key-features" },
      { id: 95, title: "Registration Process", link: "/ngo/registration-process" },
      { id: 96, title: "FAQ", link: "/ngo/faqs" },
    ],
  },
];

const MobileMenu = () => {
  const [openId, setOpenId] = useState(0);
  const [menuActive, setMenuState] = useState(false);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <div>
      <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
        <div className="menu-close">
          <div className="clox" onClick={() => setMenuState(!menuActive)}>
            <i className="ti-close"></i>
          </div>
        </div>

        <ul className="responsivemenu">
          {menus.map((item, mn) => {
            return (
              <ListItem className={item.id === openId ? "active" : null} key={mn}>
                {item.submenu ? (
                  <Fragment>
                    <p onClick={() => setOpenId(item.id === openId ? 0 : item.id)}>
                      {item.title}
                      <i className={item.id === openId ? "fa fa-angle-up" : "fa fa-angle-down"}></i>
                    </p>
                    <Collapse in={item.id === openId} timeout="auto" unmountOnExit>
                      <List className="subMenu">
                        <Fragment>
                          {item.submenu.map((submenu, i) => {
                            return (
                              <ListItem key={i}>
                                <NavLink onClick={ClickHandler} className="active" to={submenu.link}>
                                  {submenu.title}
                                </NavLink>
                              </ListItem>
                            );
                          })}
                        </Fragment>
                      </List>
                    </Collapse>
                  </Fragment>
                ) : (
                  <NavLink className="active" to={item.link}>
                    {item.title}
                  </NavLink>
                )}
              </ListItem>
            );
          })}
        </ul>
      </div>

      <div className="showmenu mobail-menu" onClick={() => setMenuState(!menuActive)}>
        <button type="button" className="navbar-toggler open-btn">
          <span className="icon-bar first-angle"></span>
          <span className="icon-bar middle-angle"></span>
          <span className="icon-bar last-angle"></span>
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
