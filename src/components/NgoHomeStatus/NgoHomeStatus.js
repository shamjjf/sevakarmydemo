import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import FunFact2 from "../../components/FunFact/FunFact2";


function NgoHomeStatus({ hclass }) {
  return (
    <div className="section-padding">
      <section className="pb-0 mb-3">
        <div className="container mb-0 pt-3">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-12 col-12">
              <SectionTitle
                subtitle="Ready to make a difference?"
                title="Join Sevak Army today, where volunteers unite with NGOs for impactful change"
              />
            </div>
          </div>
        </div>
      </section>

      <FunFact2 hclass={"wpo-fun-fact-section"} count={3} title1="NGOs registered nationally" count1={25} title2="Active volunteers" count2={500} title3="Hours of volunteer service" count3="100" />
    </div>
  );
}
export default NgoHomeStatus;
