import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import Cimg1 from "../../../public/assets/images1/ngo/home/sevak-army-ngo-home-5.jpg";
import Cimg2 from "../../../public/assets/images1/ngo/home/sevak-army-ngo-home-8.png";
import Cimg3 from "../../../public/assets/images1/ngo/home/sevak-army-ngo-home-7.jpg";
import Cimg4 from "../../../public/assets/images1/ngo/home/sevak-army-ngo-home-10.png";
import Encouragement from "../../../public/assets/images1/volunteer/home/encouragement.png";
import Recognition from "../../../public/assets/images1/ngo/home/recognition.png";
import Action from "../../../public/assets/images1/volunteer/home/data-collection.png";
import Volunteers from "../../../public/assets/images1/ngo/home/volunteers.png";
import Management from "../../../public/assets/images1/ngo/home/management.png";
import Time from "../../../public/assets/images1/ngo/home/save-time.png";
import Leaderboard from "../../../public/assets/images1/ngo/home/leaderboard.png";
import Image from "next/image";
// import Services from "../../api/Services";

function NgoPromotes(props) {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const causesData = [
    {
      id: 1,
      slug: "1",
      title: "Connect with skilled volunteers for your mission.",
      category: "Education",
      image: Cimg1,
      //  Simage: Csimg1,
      raisedAmount: 800,
      goalAmount: 1000,
      description:
        "Connect with skilled professionals and passionate activists through our system, ensuring seamless volunteer onboarding for your mission.",
    },
    {
      id: 2,
      slug: "2",
      title: "Seamless project execution with expert logistical support.",
      category: "Food",
      image: Cimg2,
      //  Simage: Csimg2,
      raisedAmount: 1500,
      goalAmount: 2000,
      description:
        "Receive expert assistance in project planning, resource allocation and coordination to ensure smooth, goal-oriented execution daily.",
    },
    {
      id: 3,
      slug: "3",
      title: "Increase visibility, attract volunteers, engage donors.",
      category: "Education",
      image: Cimg3,
      // Simage: Csimg3,
      raisedAmount: 2500,
      goalAmount: 3000,
      description:
        "Boost awareness and visibility for your projects through Sevak Army, attracting volunteers, engaging donors and raising impactful awareness.",
    },
    {
      id: 4,
      slug: "4",
      title: "Donate for healthy food",
      category: "Education",
      image: Cimg4,
      // Simage: Csimg4,
      raisedAmount: 5000,
      goalAmount: 10000,
      description:
        "Help provide nutritious meals to children in need, supporting their health and well-being. Your contribution ensures access to healthy food, fostering growth and enabling children to focus on their education and future.",
    },
  ];
  return (
    <>
      <section className="wpo-causes-section-s2 section-padding pt-3 pb-0">
        <div className="causes-wrap">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col col-lg-12 col-md-12 col-12">
                <SectionTitle subtitle="Why Join Sevak Army?" title="Join Sevak Army to easily connect with skilled volunteers and boost your impact" />
              </div>
            </div>

            <section className="container mt-2">
              <div className="">
                <section className={" wpo-fun-fact-section-s3 pb-0"}>
                  <div className="container mt-3">
                    <div className="w-100 service-wrap">
                      <div className="w-100 row justify-content-center gap-3 gy-3">
                        <div className="service-item px-4 py-4 col-xl-3 col-lg-4 col-md-7 col-sm-8 col-12 sevak-custom-carddd mb-0">
                          <div className="info d-flex flex-column justify-content-center flex-no-wrap">
                            <div className="w-100 d-flex py-4 justify-content-center">
                              <div className="icon">
                                <Image src={Encouragement} width={60} alt="img" />
                              </div>
                            </div>
                            <h2 className="text-center">Find the Right Volunteers</h2>
                            <p className="w-100 text-center ms-0" style={{ maxWidth: '100%' }}>Easily connect with skilled and passionate volunteers who match your needs.</p>
                          </div>
                        </div>
                        <div className="service-item px-4 py-4 col-xl-3 col-lg-4 col-md-7 col-sm-8 col-12 sevak-custom-carddd mb-0">
                          <div className="info d-flex flex-column justify-content-center flex-no-wrap">
                            <div className="w-100 d-flex py-4 justify-content-center">
                              <div className="icon" style={{ backgroundColor: '#FFFCF4', border: '1px solid #EBB011' }}>
                                <Image src={Volunteers} width={60} alt="img" />
                              </div>
                            </div>
                            <h2 className="text-center">Wide Range of Volunteers</h2>
                            <p className="w-100 text-center ms-0" style={{ maxWidth: '100%' }}>Access a diverse pool of volunteers of all ages, ready to support your cause.</p>
                          </div>
                        </div>
                        <div className="service-item px-4 py-4 col-xl-3 col-lg-4 col-md-7 col-sm-8 col-12 sevak-custom-carddd mb-0">
                          <div className="info d-flex flex-column justify-content-center flex-no-wrap">
                            <div className="w-100 d-flex py-4 justify-content-center">
                              <div className="icon" style={{ backgroundColor: '#F3FFFC', border: '1px solid #00AF90' }}>
                                <Image src={Management} width={60} alt="img" />
                              </div>
                            </div>
                            <h2 className="text-center">Simple Dashboard</h2>
                            <p className="w-100 text-center ms-0" style={{ maxWidth: '100%' }}>Post tasks, manage applications by volunteers and track progress with an easy-to-use dashboard.</p>
                          </div>
                        </div>
                        <div className="service-item px-4 py-4 col-xl-3 col-lg-4 col-md-7 col-sm-8 col-12 sevak-custom-carddd mb-0">
                          <div className="info d-flex flex-column justify-content-center flex-no-wrap">
                            <div className="w-100 d-flex py-4 justify-content-center">
                              <div className="icon" style={{ backgroundColor: '#F5FFF8', border: '1px solid #66BB6A' }}>
                                <Image src={Time} width={60} alt="img" />
                              </div>
                            </div>
                            <h2 className="text-center">Save Time and Effort</h2>
                            <p className="w-100 text-center ms-0" style={{ maxWidth: '100%' }}>Spend less time searching for volunteers - let them find you on Sevak Army.</p>
                          </div>
                        </div>
                        <div className="service-item px-4 py-4 col-xl-3 col-lg-4 col-md-7 col-sm-8 col-12 sevak-custom-carddd mb-0">
                          <div className="info d-flex flex-column justify-content-center flex-no-wrap">
                            <div className="w-100 d-flex py-4 justify-content-center">
                              <div className="icon" style={{ backgroundColor: '#F5FDFF', border: '1px solid #1ECFFE' }}>
                                <Image src={Recognition} width={60} alt="img" />
                              </div>
                            </div>
                            <h2 className="text-center">Gain Visibility and Recognition</h2>
                            <p className="w-100 text-center ms-0" style={{ maxWidth: '100%' }}>Boost your NGO's reach and build a strong presence in the volunteer community.</p>
                          </div>
                        </div>
                        <div className="service-item mb-2 px-4 py-4 col-xl-3 col-lg-4 col-md-7 col-sm-8 col-12 sevak-custom-carddd mb-0">
                          <div className="info d-flex flex-column justify-content-center flex-no-wrap">
                            <div className="w-100 d-flex py-4 justify-content-center">
                              <div className="icon" style={{ backgroundColor: '#FFFCF4', border: '1px solid #EBB011' }}>
                                <Image src={Leaderboard} width={60} alt="img" />
                              </div>
                            </div>
                            <h2 className="text-center">NGO Leaderboards</h2>
                            <p className="w-100 text-center ms-0" style={{ maxWidth: '100%' }}>Stand out on our leaderboard and showcase your NGO’s active role in driving social change.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </section>

          </div>
        </div>
      </section>

      <section className="wpo-cta-section-s3 section-padding pb-4">
        <div className="container">
          <div className="bg-color" style={{ background: "#007560" }}>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="cta-wrap">
                  <span>Strengthen Your Cause Today</span>
                  <h2 className="mb-3 mt-2">
                    Boost Your Impact – Join Sevak Army!
                  </h2>
                  <p className="text-center" style={{ color: 'whitesmoke' }}>Register now to find reliable volunteers and take your projects to the next level. </p>
                  <Link to="https://app.sevakarmy.com/" target="_blank" className="theme-btn">
                    Join the Platform
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NgoPromotes;
