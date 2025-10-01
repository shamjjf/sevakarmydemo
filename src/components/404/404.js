import React from "react";
import { Link } from "react-router-dom";
import erimg from "../../../public/assets/images/error-404.png";
import Image from "next/image";

const Error = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className="error-404-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col col-xs-12">
            <div className="content clearfix">
              <div className="error">
                <Image src={erimg} alt="error" />
              </div>
              <div className="error-message">
                <h3>UpComing Page</h3>
                {/* <p>We’re sorry but we can’t seem to find the page you requested. This might be because you have typed the web address incorrectly.</p> */}
                <Link onClick={ClickHandler} to="/home" className="theme-btn">
                  {" "}
                  Back to home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Error;
