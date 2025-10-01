import React from "react";
import CountUp from "react-countup";

const FunFact = (props) => {
  return (
    <section
      className={" section-padding " + props.hclass}
      style={{ paddingBottom: "100px" }}
    >
      <div className="container">
        <div className="fun-fact-wrap">
          <div className="row pt-5 justify-content-center">
            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
              <div
                className="info"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <h3 className="d-flex">
                  <span>
                    <CountUp end={props.count1 ? props.count1 : 5} enableScrollSpy />
                  </span>{" "}
                  +
                </h3>
                <p className="ml-0" style={{ marginLeft: '0px', maxWidth: '100%' }}>
                  {" "}
                  <span>{props.title1 ? props.title1 : "Active Campaigns"}</span>{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
              <div
                className="info "
                style={{ display: "flex", flexDirection: "column" }}
              >
                <h3 className="d-flex">
                  <span>
                    <CountUp end={props.count2 ? props.count2 : 100} enableScrollSpy />
                  </span>{" "}
                  k+
                </h3>
                <p className="ml-0" style={{ marginLeft: '0px', maxWidth: '100%' }}>{props.title2 ? props.title2 : "Hours Contributed"}</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
              <div
                className="info"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <h3 className="d-flex">
                  <span>
                    <CountUp end={props.count3 ? props.count3 : 50} enableScrollSpy />
                  </span>{" "}
                  +
                </h3>
                <p className="ml-0" style={{ marginLeft: '0px', maxWidth: '100%' }}>{props.title3 ? props.title3 : "Registered Volunteers"}</p>
              </div>
            </div>
            {props.count !== 3 &&
              <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                <div
                  className="info"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <h3 className="d-flex">
                    <span>
                      <CountUp end={25} enableScrollSpy />
                    </span>{" "}
                    +
                  </h3>
                  <p className="ml-0" style={{ marginLeft: '0px', maxWidth: '100%' }}>Days Since Launch</p>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunFact;
