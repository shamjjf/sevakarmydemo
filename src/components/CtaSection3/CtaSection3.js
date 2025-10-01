import { Link } from "react-router-dom";
import icon from  "../../../public/assets/images/cta/top-icon.png"

import Image from "next/image";

const CtaSection3 = () => {

    const clickHandler = () => {
        window.scrollTo(10,0)
    }
    return(
        <section className="wpo-cta-section-s3">
            <div className="container">
                <div className="bg-color">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="cta-wrap">
                                <div className="icon">
                                    <Image src={icon} width={40} height={40} alt="Icon" />
                                </div>
                                <span>Help us raise them up.</span>
                                <h2>Your donation means a lot to them.
                                    Donate what you can.</h2>
                                <Link onClick={clickHandler} to="/donate" className="theme-btn">Start Donating Them</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CtaSection3;