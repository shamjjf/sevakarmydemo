import React from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";

const FunFact = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };
  return (
    <section className={" section-padding " + props.hclass}>
      <div className="container">
        <div className="fun-fact-wrap">
          <div className="row justify-content-center gap-3">
            <div className="blog-single-card py-4 col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="info d-flex flex-column justify-content-center flex-no-wrap">
                <h4 className="blog-title-home">Amit Singh</h4>
                <h3 className="w-100">
                  <span style={{ fontSize: '50px' }}>
                    <CountUp end={120} enableScrollSpy />
                  </span>
                </h3>
                <p className="w-100 text-nowrap text-center ms-0" style={{ maxWidth: '100%' }}>hours contributed</p>
              </div>
            </div>
            <div className="blog-single-card py-4 col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="info d-flex flex-column justify-content-center flex-no-wrap">
                <h4 className="blog-title-home">Meera Patel</h4>
                <h3>
                  <span style={{ fontSize: '50px' }}>
                    <CountUp end={110} enableScrollSpy />
                  </span>
                </h3>
                <p className="w-100 text-nowrap text-center ms-0" style={{ maxWidth: '100%' }}>hours contributed</p>
              </div>
            </div>
            <div className="blog-single-card py-4 col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="info d-flex flex-column justify-content-center flex-no-wrap">
                <h4 className="blog-title-home">Rahul Sharma</h4>
                <h3>
                  <span style={{ fontSize: '50px' }}>
                    <CountUp end={95} enableScrollSpy />
                  </span>
                </h3>
                <p className="w-100 text-nowrap text-center ms-0" style={{ maxWidth: '100%' }}>hours contributed</p>
              </div>
            </div>
          </div>
          <h4 className="blog-title-home w-100 text-center">See Full Leaderboard</h4>
          <p className="w-100 text-center">Explore the leaderboard to track your progress and see how you can make your way to the top! </p>
          <div className="w-100 d-flex justify-content-center">
            <Link onClick={ClickHandler} className="theme-btn" to='/volunteer/leaderboard'>
              View Leaderboard
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunFact;
