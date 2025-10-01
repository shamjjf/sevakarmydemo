import React from "react";

const featuresData = [
  {
    iconClass: "flaticon-volunteer",
    title: "Register Your Company",
    description: "A registered commitment today, a brighter future tomorrow.",
  },
  {
    iconClass: "flaticon-solidarity",
    title: "Encourage Your Employees",
    description: "Empowered employees, endless possibilities.",
  },
  {
    iconClass: "flaticon-charity",
    title: "Bring Positive Change",
    description: "One action sparks change, together we ignite transformation.",
  },
];

const FeatureSection = () => {
return (
    <section className="wpo-features-area">
      <div className="container">
        <div className="features-wrap">
          <div className="row">
            {featuresData.map((feature, index) => (
              <div className="col col-lg-4 col-md-6 col-12" key={index}>
                <div className="feature-item-wrap">
                  <div className="feature-item">
                    <div className="feature-icon">
                      <div className="icon">
                        <i className={`fi ${feature.iconClass}`}></i>
                      </div>
                    </div>
                    <div className="feature-text">
                      <h2 className="fs-5">{feature.title}</h2>
                      <p className="fs-6">{feature.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
