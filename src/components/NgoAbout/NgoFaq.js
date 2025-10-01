import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Services from "../../api/Services";
import SectionTitle from "../SectionTitle/SectionTitle";

const accordionData = [
  {
    title: "What are the benefits of registering with Sevak Army?",
    content:
      "By registering with Sevak Army, NGOs can access a dedicated pool of volunteers, manage tasks through our platform and track volunteer impact efficiently. Our platform also provides visibility and the ability to connect with compassionate individuals who are eager to make a difference.",
  },
  {
    title: " Can my NGO post tasks for volunteers on Sevak Army?",
    content:
      "Yes, once your NGO is registered and approved, you can post tasks for volunteers directly on the platform through the 'NGO Dashboard'. You can set task requirements, deadlines and track volunteer progress.",
  },
  {
    title: "How do we ensure our tasks are completed by volunteers?",
    content:
      "Sevak Army allows you to track task progress and communicate with volunteers directly through the platform. You can also set deadlines and send reminders to ensure tasks are completed on time.",
  },
  {
    title: " Can my NGO provide feedback on volunteer performance?",
    content:
      "Yes, NGOs can provide feedback on volunteers after they complete tasks. This feedback helps improve future volunteer experiences and allows volunteers to grow and improve their skills.",
  },
  {
    title: " How can my NGO track volunteer hours?",
    content:
      "Through the NGO dashboard, you can monitor and approve volunteer hours logged for each task. This helps maintain transparency and ensures accurate tracking of volunteer contributions.",
  },
];

function NgoFaq() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };
  return (
    <section className="wpo-service-single-section mt-0 mb-0 section-padding pb-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-12 col-12">
            <SectionTitle subtitle=" Find Answers Here" title="FAQs" />
          </div>
        </div>
        <div className="row mb-3 mt-3">
          <div className="col-lg-12 col-md-12">
            <div className="wpo-service-single-wrap">
              <div className="wpo-benefits-section pt-0">
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

export default NgoFaq;
