
import { Link } from "react-router-dom"
import Image from "next/image";
import icon from "../../../public/assets/images/cta/top-icon.png";


import Shape from "../../../public/assets/images/cta/shape-1.png"
import Shape2 from "../../../public/assets/images/cta/left-img.png"
import Shape3 from "../../../public/assets/images/cta/right-img.png"
import Shape4 from "../../../public/assets/images/cta/shape-2.png"
import Icon from "../../../public/assets/images/cta/top-icon.png"

const CtaSection2 = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return(
        <section className="wpo-cta-section-s2">
            <div className="shape-1">
                <Image src={Shape} alt="Shape" />
            </div>
            <div className="left-img">
                <Image src={Shape2} alt="Shape" />
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="cta-wrap">
                            <div className="icon">
                                <Image src={icon} width={40} height={40} alt="Icon" />
                            </div>
                            <span>Help us raise them up.</span>
                            <h2>Your donation means a lot to them.
                                Donate what you can.</h2>
                            <Link to="/donate" className="theme-btn" onClick={ClickHandler}>Start Donating Them</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-img">
                <Image src={Shape3} alt="Shape" />
            </div>
            <div className="shape-2">
                <Image src={Shape4} alt="Shape" />
            </div>
        </section>
    )
}

export default CtaSection2;