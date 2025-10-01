import React, { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./style.css";

const Scrollbar = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset === 0) {
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    !isAtTop && (
      <div className="col-lg-12">
        <div className="header-menu">
          <ul className="smothscroll">
            <li>
              <AnchorLink href="#scrool" offset="100">
                <i className="ti-arrow-up"></i>
              </AnchorLink>
            </li>
          </ul>
        </div>
      </div>
    )
  );
};

export default Scrollbar;
