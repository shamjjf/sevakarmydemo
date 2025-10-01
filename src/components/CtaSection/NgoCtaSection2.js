import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthModal from "../../auth-modal";
import Image from "next/image";

import Cta1 from "../../../public/assets/images/cta/shape-1.webp";
import Cta3 from "../../../public/assets/images/cta/shape-2.webp";

// import Cta2 from "../../../public/assets/images/cta/top-icon.png";

const NgoCtaSection2 = () => {
    // const ClickHandler = () => {
    //   window.scrollTo(10, 0);
    // };
    const [show, setShow] = useState(false);
    return (
        <>
            <section className="wpo-cta-section" style={{marginTop:'50px'}}>
                <div className="shape-1">
                    <Image src={Cta1} alt="Cta1" />
                </div>
                <div className="bg-overlay">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="cta-wrap">
                                    <span className="subtitle">Unlock Potential, Achieve Greater Change</span>
                                    <h2 className="my-3 text-white" style={{fontSize:'32px'}}>Expand Your Reach, Empower Your Mission</h2>
                                    <p style={{ color: 'whitesmoke' }}>Join Sevak Army to connect with skilled volunteers who are passionate about supporting your cause. Register your NGO, post tasks and find the right people to help you make a greater impact. Together, we can achieve more and drive real change in communities across India.</p>
                                    <Link  to="https://app.sevakarmy.com/" target="_blank" className="theme-btn-cta">
                                        Register Your NGO Today
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

export default NgoCtaSection2;
