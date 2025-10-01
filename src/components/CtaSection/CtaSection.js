import React, { useState } from "react";
import { Link } from "react-router-dom";
import Image from "next/image";

// components imports start from here
import AuthModal from "../../auth-modal";

// Images imports start here
import Cta1 from "../../../public/assets/images/cta/shape-1.webp";
import Cta3 from "../../../public/assets/images/cta/shape-2.webp";

const CtaSection = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <section className="wpo-cta-section">
        <div className="shape-1">
          <Image src={Cta1} alt="Cta1" />
        </div>
        <div className="bg-overlay">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="cta-wrap">
                  <span className="">Join the Movement, Make a Difference</span>
                  <h2 className="mb-2">Start Your Journey of Service</h2>
                  <p className="text-center" style={{ color: 'whitesmoke' }} >Use your time, skills and passion to create lasting change in the community. Whether you're a volunteer ready to contribute or an NGO seeking dedicated hands, together, we can make an outstanding social impact. </p>
                  <Link to="https://app.sevakarmy.com/" target="_blank" className="theme-btn-cta">
                    Become a Sevak Today
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shape-2">
          <Image src={Cta3} alt="Cta3" />
        </div>
      </section>
      <AuthModal show={show} setShow={setShow} />
    </>
  );
};

export default CtaSection;
