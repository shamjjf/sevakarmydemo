import React, { useState } from "react";

const accordionData = [
  {
    title: "Increased Visibility",
    content:
      "Gain exposure through our platform, which connects you with a wide network of volunteers, donors and other NGOs. Your projects and initiatives will be showcased to a broader audience, increasing awareness and support.",
  },
  {
    title: "Access to Volunteers",
    content:
      "Leverage our extensive network of dedicated volunteers eager to support meaningful causes. We can connect you with volunteers with the skills and expertise needed for your projects.",
  },
  {
    title: "Funding Opportunities",
    content:
      "Benefit from potential funding opportunities through joint fundraising campaigns and grant applications. Our fundraising support can help you secure the resources needed to advance your initiatives.",
  },
  {
    title: "Capacity Building",
    content:
      "Enhance your organisation’s capabilities through training workshops, strategic planning sessions and best practice sharing. Our capacity-building programmes are designed to strengthen your team and improve operational effectiveness.",
  },
  {
    title: "Networking Opportunities",
    content:
      "Connect with other like-minded NGOs, community leaders and stakeholders through our events and networking sessions. Collaborate, share insights and build valuable relationships within the social sector.",
  },
];
function NgoBenifits() {
  // const { slug } = useParams();

  // const ClickHandler = () => {
  //   window.scrollTo(10, 0);
  // };

  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };
  return (
    <section className="wpo-service-single-section mt-0 mb-5">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-12 col-md-12">
            <div className="wpo-service-single-wrap">
              <div className="wpo-benefits-section">
                <h2>NGO Benefits</h2>
                <p>
                  Partnering with Sevak Army offers a range of benefits that can enhance your organisation’s
                  effectiveness and reach:
                </p>
                <div className="row">
                  <div className="col-lg-12 col-12">
                    <div className="wpo-benefits-item">
                      <div className="accordion" id="accordionExample">
                        {accordionData.map((item, index) => (
                          <div className="accordion-item" key={index}>
                            <h3 className="accordion-header" id={`heading${index}`}>
                              <button
                                className={`accordion-button ${activeAccordion === index ? "" : "collapsed"}`}
                                type="button"
                                onClick={() => toggleAccordion(index)}
                                aria-expanded={activeAccordion === index ? "true" : "false"}
                                aria-controls={`collapse${index}`}
                              >
                                {item.title}
                              </button>
                            </h3>
                            <div
                              id={`collapse${index}`}
                              className={`accordion-collapse collapse ${activeAccordion === index ? "show" : ""}`}
                              aria-labelledby={`heading${index}`}
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                <p>{item.content}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NgoBenifits;
