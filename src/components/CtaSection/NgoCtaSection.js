import React, { useState } from "react";
import Image from "next/image";

import NewsletterPopup from "../NewsletterPopup";

// import Inform from "../../../public/assets/images1/ngo/home/newsletter.webp";
import Inform from "../../../public/assets/new-images/common/newsletter.jpg";

// import { Link } from "react-router-dom";
// import Cta1 from "../../../public/assets/images/cta/shape-1.png";
// import Cta2 from "../../../public/assets/images/cta/top-icon.png";
// import Cta3 from "../../../public/assets/images/cta/shape-2.png";
// import Newsletter from "../../../public/assets/images1/volunteer/home/newsletter.png";


const NgoCtaSection = () => {
  const [shownewsletter, setShowNewsletter] = useState(false);
  return (
    <>
      <div className="w-100 container ">
        <div className="container">
          <div className="wpo-about-wrap mt-0 pt-0">
            <div className="row ">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-text p-3 mt-0 pb-1 pb-lg-2 pt-1 pt-lg-2">
                  <div
                    className="wpo-section-title mt-0"
                    style={{ textAlign: "start", margin: "0px" }}
                  >
                    <span>Stay Informed, Stay Inspired</span>
                    <h2 className="about-heading-second w-100">
                      Stay Connected with SevakArmy{" "}
                    </h2>
                  </div>
                  <p style={{ textAlign: "justify" }}>
                    Subscribe to our newsletter and stay informed! Get the
                    latest updates on volunteer initiatives, upcoming events,
                    inspiring stories and valuable tips for your NGO. Be the
                    first to know about new projects, volunteer drives and
                    impactful collaborations happening across India.
                  </p>
                  <h3>Register Today</h3>
                  <p>
                    Join our network and receive regular updates straight to
                    your inbox.{" "}
                  </p>
                  <div className="mt-4">
                    <button
                      className="theme-btn"
                      onClick={() => setShowNewsletter(true)}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Subscribe to Our Newsletter
                    </button>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 col-md-12 col-12"
                style={{ display: "flex", justifyContent: "end" }}
              >
                <div className="wpo-about-img">
                  {/* <div className="wpo-about-left">
                    <Image src={abImg5} alt="img" />
                  </div> */}
                  <div className="wpo-about-right pt-3 pt-lg-5">
                    <Image src={Inform} width={580} alt="Subscribe to our Newsletter Stay Connected with SevakArmy" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <NewsletterPopup
        shownewsletter={shownewsletter}
        setShowNewsletter={setShowNewsletter}
      />
    </>
  );
};

export default NgoCtaSection;
