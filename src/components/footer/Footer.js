import { Link, useLocation } from "react-router-dom";
import Logo from "../../../public/assets/images/logoo.png";
import Image from "next/image";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const knowMoreContent = {
  default: [
    // { name: "Contact Us", path: "/contact-us" },
    { name: "Terms and Conditions", path: "/terms-and-conditions" },
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Cookie Policy", path: "/cookie-policy" },
  ],
  volunteer: [
    // { name: "Contact Us", path: "/volunteer/contact-us" },
    { name: "Terms and Conditions", path: "/terms-and-conditions" },
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Cookie Policy", path: "/cookie-policy" },
    { name: "Refer and Earn", path: "/volunteer/refer-and-earn" },
    // { name: "Download Resources", path: "/volunteer/download-resources" },
  ],
  influencer: [
    // { name: "Contact Us", path: "/influencer/contact-us" },
    { name: "Terms and Conditions", path: "/terms-and-conditions" },
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Cookie Policy", path: "/cookie-policy" },
    { name: "Refer and Earn", path: "/influencer/refer-and-earn" },
  ],
  schoolCollege: [
    // { name: "Contact Us", path: "/school-college/contact-us" },
    { name: "Terms and Conditions", path: "/terms-and-conditions" },
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Cookie Policy", path: "/cookie-policy" },
  ],
  organisation: [
    // { name: "Contact Us", path: "/organisation/contact-us" },
    { name: "Terms and Conditions", path: "/terms-and-conditions" },
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Cookie Policy", path: "/cookie-policy" },
  ],
};


const links = [
  {
    icon: "fi flaticon-instagram",
    path: "https://www.instagram.com/TeamSevakArmy/",
  },
  {
    icon: "fi flaticon-linkedin",
    path: "https://www.linkedin.com/company/TeamSevakArmy/",
  },
  { 
    icon: "fi flaticon-facebook-app-symbol",
    path: "https://www.facebook.com/TeamSevakArmy/"
  },
  {
    svg: (
      <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
    ),
    path: "https://www.youtube.com/@TeamSevakArmy/",
  },
  {
    svg: (
      <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
    ),
    path: "https://x.com/TeamSevakArmy/",
  },
  {
    svg: (
      <path d="M331.5 235.7c2.2 .9 4.2 1.9 6.3 2.8c29.2 14.1 50.6 35.2 61.8 61.4c15.7 36.5 17.2 95.8-30.3 143.2c-36.2 36.2-80.3 52.5-142.6 53h-.3c-70.2-.5-124.1-24.1-160.4-70.2c-32.3-41-48.9-98.1-49.5-169.6V256v-.2C17 184.3 33.6 127.2 65.9 86.2C102.2 40.1 156.2 16.5 226.4 16h.3c70.3 .5 124.9 24 162.3 69.9c18.4 22.7 32 50 40.6 81.7l-40.4 10.8c-7.1-25.8-17.8-47.8-32.2-65.4c-29.2-35.8-73-54.2-130.5-54.6c-57 .5-100.1 18.8-128.2 54.4C72.1 146.1 58.5 194.3 58 256c.5 61.7 14.1 109.9 40.3 143.3c28 35.6 71.2 53.9 128.2 54.4c51.4-.4 85.4-12.6 113.7-40.9c32.3-32.2 31.7-71.8 21.4-95.9c-6.1-14.2-17.1-26-31.9-34.9c-3.7 26.9-11.8 48.3-24.7 64.8c-17.1 21.8-41.4 33.6-72.7 35.3c-23.6 1.3-46.3-4.4-63.9-16c-20.8-13.8-33-34.8-34.3-59.3c-2.5-48.3 35.7-83 95.2-86.4c21.1-1.2 40.9-.3 59.2 2.8c-2.4-14.8-7.3-26.6-14.6-35.2c-10-11.7-25.6-17.7-46.2-17.8H227c-16.6 0-39 4.6-53.3 26.3l-34.4-23.6c19.2-29.1 50.3-45.1 87.8-45.1h.8c62.6 .4 99.9 39.5 103.7 107.7l-.2 .2zm-156 68.8c1.3 25.1 28.4 36.8 54.6 35.3c25.6-1.4 54.6-11.4 59.5-73.2c-13.2-2.9-27.8-4.4-43.4-4.4c-4.8 0-9.6 .1-14.4 .4c-42.9 2.4-57.2 23.2-56.2 41.8l-.1 .1z" />
    ),
    path: "https://www.threads.net/@TeamSevakArmy/",
  },
  {
    svg: (
      <path d="M440.5 386.7h-29.3c-1.5 13.5-10.5 30.8-33 30.8-20.5 0-35.3-14.2-49.5-35.8 44.2-34.2 74.7-87.5 74.7-153C403.5 111.2 306.8 32 205 32 105.3 32 7.3 111.7 7.3 228.7c0 134.1 131.3 221.6 249 189C276 451.3 302 480 351.5 480c81.8 0 90.8-75.3 89-93.3zM297 329.2C277.5 300 253.3 277 205.5 277c-30.5 0-54.3 10-69 22.8l12.2 24.3c6.2-3 13-4 19.8-4 35.5 0 53.7 30.8 69.2 61.3-10 3-20.7 4.2-32.7 4.2-75 0-107.5-53-107.5-156.7C97.5 124.5 130 71 205 71c76.2 0 108.7 53.5 108.7 157.7 .1 41.8-5.4 75.6-16.7 100.5z" />
    ),
    path: "https://www.quora.com/profile/TeamSevakArmy/",
  },
  {
    svg: (
      <path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3 .8-3.4 5-20.3 6.9-28.1 .6-2.5 .3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z" />
    ),
    path: "https://in.pinterest.com/TeamSevakArmy/",
  },
  {
    svg: (
      <path d="M180.5 74.3C80.8 74.3 0 155.6 0 256S80.8 437.7 180.5 437.7 361 356.4 361 256 280.2 74.3 180.5 74.3zm288.3 10.6c-49.8 0-90.2 76.6-90.2 171.1s40.4 171.1 90.3 171.1 90.3-76.6 90.3-171.1H559C559 161.5 518.6 84.9 468.8 84.9zm139.5 17.8c-17.5 0-31.7 68.6-31.7 153.3s14.2 153.3 31.7 153.3S640 340.6 640 256C640 171.4 625.8 102.7 608.3 102.7z" />
    ),
    path: "https://medium.com/@TeamSevakArmy/",
  },
];

const Footer = (props) => {
  const location = useLocation();

  const getCurrentMenu = () => {
    if (location.pathname.startsWith("/volunteer")) return "volunteer";
    if (location.pathname.startsWith("/influencer")) return "influencer";
    if (location.pathname.startsWith("/school-college")) return "schoolCollege";
    if (location.pathname.startsWith("/organisation")) return "organisation";
    return "default";
  };

  const currentMenu = getCurrentMenu();
  const knowMore = knowMoreContent[currentMenu];

  return (
    <footer className="wpo-site-footer">
      <div className="wpo-top-footer pb-0 pb-lg-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-12 footer-logooo">
              <div className="widget" style={{ width: "fit-content" }}>
                <div className="logo" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Link className="navbar-brand mr-0" to="/" onClick={ClickHandler} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Image src={Logo} alt="SevakArmy Logo" width={80} />
                    <span className="text-white mt-1">SevakArmy</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12 footer-logooo footer-links-top-margin">
              <div className="widget">
                <div className="social socialll mt-3">
                  <ul className="logo-wrappp">
                    {links.map((link, index) => {
                      return (
                        <li key={index} className="ms-0">
                          <a href={link.path} target="_blank" rel="noreferrer">
                            {link.svg ? (
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 550 512" fill="white" height={23}>
                                {link.svg}{" "}
                              </svg>
                            ) : (
                              <i className={link.icon}></i>
                            )}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wpo-upper-footer">
        <div className="container">
          <div className="row gy-5">
            <div className="col col-xl-3 col-lg-4 col-md-6 col-12 col-md-6 col-sm-12 col-12 mt-2">
              <div className="widget about-widget">
                <div className="d-flex flex-column mt-2">
                  <Link to="/refer-and-earn" onClick={ClickHandler} className="footer-linksssss" style={{ fontSize: '22px' }}>Refer and Earn</Link>
                  <span style={{ fontSize: '14px', color: 'whitesmoke' }}>Invite friends to join SevakArmy and earn points for every referral.</span>
                </div>
                {/* <div className="d-flex flex-column mt-2">
                  <Link to="/download-resources" onClick={ClickHandler} className="footer-linksssss" style={{ fontSize: '22px' }}>Download Resources</Link>
                  <span style={{ fontSize: '14px', color: 'whitesmoke' }}>Access promotional materials to support and spread the word about SevakArmy.</span>
                </div> */}
                <div className="d-flex flex-column mt-2">
                  <Link to="/contact-us" className="footer-linksssss" onClick={ClickHandler} style={{ fontSize: '22px' }}>Contact Us</Link>
                  <span style={{ fontSize: '14px', color: 'whitesmoke' }}>We're here to help! Reach out to us with any queries or support needs.</span>
                </div>
              </div>
            </div>
            <div className="col col-xl-3 col-lg-4 col-md-6 col-12 col-md-6 col-sm-12 col-12 mt-2 ps-lg-5">
              <div className="widget link-widget">
                <div className="widget-title">
                  <h3>Quick Links</h3>
                </div>
                <ul style={{ paddingLeft: '12px' }}>
                  <li>
                    <Link to="/volunteer" onClick={ClickHandler}>
                      Volunteer
                    </Link>
                  </li>
                  <li>
                    <Link to="/influencer" onClick={ClickHandler}>
                      Influencer
                    </Link>
                  </li>
                  <li>
                    <Link to="/school-college" onClick={ClickHandler}>
                      School/College
                    </Link>
                  </li>
                  <li>
                    <Link to="/organisation" onClick={ClickHandler}>
                      Organisation
                    </Link>
                  </li>
                  {/* <li>
                    <Link to="/school-college" onClick={ClickHandler}>
                      School/College
                    </Link>
                  </li>
                  <li>
                    <Link to="/influencer" onClick={ClickHandler}>
                      Influencer
                    </Link>
                  </li> */}
                  <li>
                    <Link to="/ngo" onClick={ClickHandler}>
                      NGO
                    </Link>
                  </li>
                  <li>
                    <Link to="/faqs" onClick={ClickHandler}>
                      FAQs
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col col-xl-3 col-lg-4 col-md-6 col-12 col-md-6 col-sm-12 col-12 mt-2">
              <div className="widget link-widget s2">
                <div className="widget-title">
                  <h3>Know More</h3>
                </div>
                <ul style={{ paddingLeft: '12px' }}>
                  {knowMore.map((element, index) => (
                    <li key={index}>
                      <Link onClick={ClickHandler} to={element.path}>
                        {element.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col col-xl-3 col-lg-4 col-md-6 col-12 col-md-6 col-sm-12 col-12 mt-2">
              <div className="widget newsletter-widget" style={{paddingLeft:'0px'}}>
                <div className="widget-title">
                  <h3>Contact Us</h3>
                </div>
                <p> </p>
                <style>
                  {`
                    li a {
                      text-decoration: none;
                      color: white;
                      &:hover {
                        color: #ff8c00;
                      }
                    }
                  `}
                </style>
                <ul className="info" style={{ paddingLeft: '12px' }}>
                  <li className="justify-content-start" style={{ flexWrap: "nowrap", flexDirection: 'row' }}>
                    <i className="flaticon-email"></i> <a href="mailto:info@SevakArmy.com" target="_blank" rel="noreferrer" style={{ display: 'flex', flexDirection: 'row', fontSize:'16px' }}>
                      info@SevakArmy.com
                    </a>
                  </li>
                  <li className="justify-content-start" style={{ flexWrap: "nowrap" }}>
                    <i className="flaticon-telephone pt-1"></i> <a href="tel:+919552845284" target="_blank" rel="noreferrer" className="linkkkkk2" style={{fontSize:'16px'}}>+91 95 5284 5284</a>
                  </li>
                  <li className="justify-content-start d-flex" style={{ flexWrap: "nowrap" }}>
                    <i className="flaticon-location"></i>{" "}
                    <a href="https://maps.app.goo.gl/mifPYTS9pSiC14bb6" target="_blank" rel="noreferrer" style={{fontSize:'16px'}}>
                      <span className="d-flex">
                        Jainam Tower, Sai Park, Thergaon, Pune - 411033, Maharashtra, India
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wpo-lower-footer">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12">
              <ul>
                <li className="d-flex" style={{ justifyContent: "center", width: "100%" }}>
                  &copy; 2024 - {new Date().getFullYear()}<a href="https://sevakarmy.com/" target="_blank" className="mx-2 footer-auth-link">
                    SevakArmy</a> - An Initiative by <a href="https://jjfindia.com/" target="_blank" className="ps-1 footer-auth-link"> Jainam Jivika Foundation</a>. All rights reserved.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
