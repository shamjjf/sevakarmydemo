// import {causesDataAbout} from "../../api/causes";
import SectionTitle from "../SectionTitle/SectionTitle";

import School from "../../../public/assets/images1/volunteer/home/school.webp";
// import School from "../../../public/assets/new-images/organizations/make-deference.jpg";
import Sustainability from "../../../public/assets/images1/volunteer/home/sustainability.webp";
import Donation from "../../../public/assets/images1/volunteer/home/food-donation.webp";
import Image from "next/image";

// const ClickHandler = () => {
//   window.scrollTo(10, 0);
// };

const CausesSecionS3About = (props) => {
  return (
    
    <section className="container section-padding">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-12 col-12">
          <SectionTitle
            subtitle="Impact"
            title="How do Companies Contribute to Social Change?"
          />
        </div>
      </div>
      <div className="mt-3">
        <section className={" wpo-fun-fact-section-s3 pb-0"}>
          <div className="container mt-3">
            <div className="service-wrap">
              <div className="row justify-content-center gap-3">
                <div className="service-item px-4 py-4 col-xl-3 col-lg-4 col-md-7 col-sm-8 col-11 sevak-custom-carddd">
                  <div className="info d-flex flex-column justify-content-center flex-no-wrap">
                    <div className="w-100 d-flex py-4 justify-content-center">
                      <div className="icon">
                        <Image src={School} width={60} alt="img" />
                      </div>
                    </div>
                    <h2 className="text-center">Provide Education</h2>
                    <p
                      className="w-100 text-center ms-0"
                      style={{ maxWidth: "100%" }}
                    >
                      Corporations are organising educational workshops, supporting schools, and providing mentorship to underprivileged students, helping close the educational gap.
                    </p>
                  </div>
                </div>
                <div className="service-item px-4 py-4 col-xl-3 col-lg-4 col-md-7 col-sm-8 col-11 sevak-custom-carddd">
                  <div className="info d-flex flex-column justify-content-center flex-no-wrap">
                    <div className="w-100 d-flex py-4 justify-content-center">
                      <div
                        className="icon"
                        style={{
                          backgroundColor: "#FFFCF4",
                          border: "1px solid #EBB011",
                        }}
                      >
                        <Image src={Sustainability} width={60} alt="img" />
                      </div>
                    </div>
                    <h2 className="text-center">
                      Environmental Sustainability
                    </h2>
                    <p
                      className="w-100 text-center ms-0"
                      style={{ maxWidth: "100%" }}
                    >
                      Companies are leading environmental initiatives such as tree planting, beach clean-ups, and energy conservation projects.
                    </p>Key Features of Sevak Army
                  </div>
                </div>
                <div className="service-item px-4 py-4 col-xl-3 col-lg-4 col-md-7 col-sm-8 col-11 sevak-custom-carddd">
                  <div className="info d-flex flex-column justify-content-center flex-no-wrap">
                    <div className="w-100 d-flex py-4 justify-content-center">
                      <div
                        className="icon"
                        style={{
                          backgroundColor: "#F3FFFC",
                          border: "1px solid #00AF90",
                        }}
                      >
                        <Image src={Donation} width={60} alt="img" />
                      </div>
                    </div>
                    <h2 className="text-center">Donate for healthy food</h2>
                    <p
                      className="w-100 text-center ms-0"
                      style={{ maxWidth: "100%" }}
                    >
                      From distributing food to volunteering at shelters,
                      businesses are helping to provide basic necessities to
                      those in need, ensuring no one is left behind.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default CausesSecionS3About;
