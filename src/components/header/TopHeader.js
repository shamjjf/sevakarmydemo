import React, { useEffect } from "react";
import "./TopHeader.css";
import { Link, useLocation } from "react-router-dom";

const TopHeader = ({ curr, setCurr, isOpen, setIsOpen }) => {
  const location = useLocation();
  // const navigate = useNavigate();

  useEffect(() => {
    setCurr(location.pathname.split("/")[1]);
  }, [location.pathname]);

  const routes = [
    { name: "Main Page", path: "" },
    { name: "Volunteer", path: "volunteer" },
    { name: "Influencer", path: "influencer" },
    { name: "School/College", path: "school-college" },
    { name: "Organisation", path: "organisation" },
    { name: "NGO", path: "ngo" },
  ];

  return (
    <>
      {/* {
        location.pathname !== '/' && ( */}
          <header className={`d-flex justify-content-center top-header ${location.pathname === "/" ? "absolute-top-header" : ""}`}>
            <div className="responsive-sticky-header">
              <ul
                className="nav nav-pills bg-dark justify-content-center px-2 py-1 px-5"
                style={{ borderBottomLeftRadius: "25px", borderBottomRightRadius: "25px" }}
              >
                {routes.map(({ name, path }) => (
                  <li className="nav-item" key={path}>
                    <Link
                      to={"/" + path}
                      className={`${curr === path ? "nav-link active" : "nav-link"} ${isOpen === path ? "sub-active" : ""}`}
                      onClick={() => {
                        setIsOpen(path);
                      }}
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </header>
        {/* ) } */}
      </>
  );
};

export default TopHeader;
