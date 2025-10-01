import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AuthModal from "../../auth-modal/index.js";
import Image from "next/image";

// const ClickHandler = () => {
//   window.scrollTo(10, 0);
// };

// const formatDate = (dateString) => {
//   const date = new Date(dateString);
//   const day = String(date.getDate()).padStart(2, "0");
//   const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
//   const year = date.getFullYear();
//   return `${day}/${month}/${year}`;
// };

const BlogSingle = () => {
  const { slug } = useParams();
  const [BlogDetails, setBlogDetails] = useState({});
  const [activeTab, setActiveTab] = useState(0);
  const [show, setShow] = useState(false);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch("https://api.ipify.org/?format=json", {
          method: "GET",
        });

        const ip = await response.json();

        console.log("ip", ip.ip);

        const blog = await fetch(`https://api.sevakarmy.com/api/v1/admin/getOpportunityById?id=${slug}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            ipAddress: ip.ip,
          },
        });
        const blogJson = await blog.json();
        setBlogDetails(blogJson.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBlog();
  }, []);

  let aboutOpportunity = [
    { svg: "", name: "Opportunity Type", value: BlogDetails.opportunity_type },
    {
      svg: "",
      name: "Application Start-End Date",
      // value: `${formatDate(BlogDetails.start_date)} - ${formatDate(BlogDetails.end_date)}`,
    },
    { svg: "", name: "Volunteering Days", value: BlogDetails.days },
    { svg: "", name: "Volunteering Frequency", value: BlogDetails.frequency },
    { svg: "", name: "Perks", value: BlogDetails.perks },
    { svg: "", name: "Points", value: BlogDetails.points },
  ];
  let requirements = [
    { svg: "", name: "Skills", value: BlogDetails.skills?.map((item) => item).join(", ") },
    { svg: "", name: "Gender", value: BlogDetails.gender },
    { svg: "", name: "Age Range", value: BlogDetails.age_range },
    { svg: "", name: "Language Competence", value: BlogDetails.languages?.map((item) => item).join(", ") },
    { svg: "", name: "Qualifications", value: BlogDetails.qualification },
  ];

  let aboutNGO = [
    {
      svg: "",
      name: "Address",
      value:
        BlogDetails.ngo?.address_line_1 +
        ", " +
        BlogDetails.ngo?.city +
        " - " +
        BlogDetails.ngo?.pincode +
        ", " +
        BlogDetails.ngo?.state +
        ", " +
        BlogDetails.ngo?.country,
    },
    { svg: "", name: "Cities Present In", value: BlogDetails.ngo?.cities_present },
    { svg: "", name: "Team Size", value: BlogDetails.ngo?.team_size || "Employee" },
    { svg: "", name: "Year of Establishment", value: BlogDetails.ngo?.year_of_establishment },
    {
      svg: "",
      name: "NGO Cause Areas",
      value: BlogDetails.ngo?.ngo_causes?.map((item) => item.name).join(", ") || "No causes available",
    },
    { svg: "", name: "Days of Operation", value: BlogDetails.qualification },
    { svg: "", name: "Ongoing Volunteering Activities", value: BlogDetails.qualification },
  ];

  return (
    <>
    <section className="wpo-blog-single-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col col-lg-12 col-12">
            <div className="wpo-blog-content">
              <div className="post format-standard-image">
                {BlogDetails.average_rating && (
                  <div className="entry-meta">
                    <ul>
                      <li className="self-center" style={{ alignSelf: "center" }}>
                        Average Ratings:{" "}
                        {[...Array(BlogDetails.average_rating || 0)].map((_, index) => (
                          <svg
                            key={index}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                            fill="orange"
                            width={20}
                            className="ms-2"
                          >
                            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                          </svg>
                        ))}{" "}
                      </li>
                    </ul>
                  </div>
                )}
                <div className="d-flex flex-wrap justify-content-between">
                  <div className="col-lg-6 col-12">
                    <Image
                      style={{
                        height: "400px",
                        width: "auto",
                      }}
                      className="col-6"
                      src={BlogDetails.opportunity_image || BlogDetails.file || BlogDetails.ngo?.ngo_logo}
                      alt="hello"
                    />
                  </div>

                  <div className="col-lg-6 col-12 d-flex flex-column justify-content-between">
                    <div className="mt-4">
                      <h2 style={{ color: "orange" }}>{BlogDetails.title}</h2>
                      <p>{BlogDetails.details}</p>
                    </div>
                    <div>
                      <div className="d-flex">
                        <div className="col-6">
                          <div className="d-flex flex-column">
                            <span>
                              {Array.isArray(BlogDetails.qualification)
                                ? BlogDetails.qualification.join(", ")
                                : BlogDetails.qualification}
                            </span>
                            <span>{BlogDetails.days} Days</span>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="d-flex flex-column">
                            <span>{BlogDetails.opportunity_type}</span>
                            <span className="fw-bold" style={{ color: "orange" }}>
                              {BlogDetails.price === 0 ? "Free" : BlogDetails.price}
                            </span>
                          </div>
                        </div>
                      </div>
                      <button
                        className="btn my-4"
                        onClick={() => setShow(true)}
                        style={{ backgroundColor: "orange", color: "white", height: "40px", width: "100px" }}
                      >
                        Register
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="wpo-case-details-tab">
                <style>
                  {`
                    .isActive{
                      color: #fff !important;
                      background: orange !important;
                    }

                    .active {
                      color: #000 !important;
                      font-weight: 400;
                    }
                    .social-link {
                      color: orange !important;
                    }
                  `}
                </style>
                <ul className="nav nav-tabs">
                  <li className="nav-item ">
                    <span className={activeTab === 0 ? "isActive" : ""} onClick={() => handleTabClick(0)}>
                      About Opportunity
                    </span>
                  </li>
                  <li className="nav-item">
                    <span className={activeTab === 1 ? "isActive" : ""} onClick={() => handleTabClick(1)}>
                      Requirements
                    </span>
                  </li>
                  <li className="nav-item">
                    <span className={activeTab === 2 ? "isActive" : ""} onClick={() => handleTabClick(2)}>
                      About The NGO
                    </span>
                  </li>
                </ul>
              </div>
              <div className="wpo-case-details-text">
                <div className="tab-content">
                  <div className={activeTab === 0 ? "active" : "hidden"}>
                    <div className="col-12">
                      <div className="d-flex flex-wrap row">
                        {aboutOpportunity?.map((item, index) => {
                          return item ? (
                            <div className="d-flex flex-column col-lg-4 col-12 col-md-6">
                              <div className="border mb-3 py-3" style={{ borderRadius: "10px" }}>
                                <div className="d-flex justify-content-center">
                                  <span>{item.svg}</span>
                                  <span className="fs-5 fw-bold my-2">{item.name}</span>
                                </div>
                                <div className="d-flex justify-content-center">
                                  <span>{item.value}</span>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <></>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className={activeTab === 1 ? "active" : "hidden"}>
                    <div className="col-12 d-flex flex-column my-4">
                      <span className="fs-4 fw-bold" style={{ color: "orange" }}>
                        Selection Criteria Description
                      </span>
                      <span style={{ fontWeight: "100 !important" }}>{BlogDetails.selection_criteria}</span>
                    </div>
                    <div className="col-12">
                      <div className="d-flex flex-wrap row">
                        {requirements?.map((item, index) => {
                          return item ? (
                            <div className="d-flex flex-column col-lg-4 col-12 col-md-6">
                              <div className="border mb-3 py-3" style={{ borderRadius: "10px" }}>
                                <div className="d-flex justify-content-center">
                                  <span>{item.svg}</span>
                                  <span className="fs-5 fw-bold my-2">{item.name}</span>
                                </div>
                                <div className="d-flex justify-content-center">
                                  <span>{item.value}</span>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <></>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className={activeTab === 2 ? "active" : "hidden"}>
                    <div className="col-12 d-flex flex-column my-4">
                      <div>
                        <span className="fs-4 fw-bold" style={{ color: "orange" }}>
                          <div className="author-avatar mb-3">
                            <Image
                              style={{
                                maxHeight: "50px",
                                width: "auto",
                                borderRadius: "50%",
                              }}
                              className="mx-2"
                              src={BlogDetails.ngo?.ngo_logo}
                              alt="hello"
                            />
                            {BlogDetails.ngo?.name}
                          </div>
                        </span>
                        <span style={{ fontWeight: "100 !important" }}>{BlogDetails.ngo?.about}</span>
                      </div>
                      <div className="d-flex flex-wrap row mt-4">
                        {aboutNGO?.map((item, index) => {
                          return item ? (
                            <div className="d-flex flex-column col-12 col-md-6 mb-lg-5 mb-3">
                              <span className="fs-5 fw-bold ">{item.name}</span>
                              <span>{item.value}</span>
                            </div>
                          ) : (
                            <></>
                          );
                        })}
                        <div className="d-flex flex-column col-12 col-md-6 mb-lg-5 mb-3">
                          <span className="fs-5 fw-bold ">Email ID</span>
                          <a href={`mailto:${BlogDetails.ngo?.email}`} target="_blank" rel="noreferrer">
                            {BlogDetails.ngo?.email}
                          </a>
                        </div>
                        <div className="d-flex flex-column col-12 col-md-6 mb-lg-5 mb-3">
                          <span className="fs-5 fw-bold ">Social Links</span>
                          <div className="d-flex">
                            {BlogDetails.ngo?.facebook && (
                              <a
                                href={`https://facebook.com/${BlogDetails.ngo.facebook}`}
                                target="_blank"
                                rel="noreferrer"
                                className="social-link me-3"
                              >
                                <i className="ti-facebook"></i>
                              </a>
                            )}
                            {BlogDetails.ngo?.twitter && (
                              <a
                                href={`https://twitter.com/${BlogDetails.ngo.twitter}`}
                                target="_blank"
                                rel="noreferrer"
                                className="social-link me-3"
                              >
                                <i className="ti-twitter-alt"></i>
                              </a>
                            )}
                            {BlogDetails.ngo?.linkedin && (
                              <a
                                href={`https://linkedin.com/in/${BlogDetails.ngo.linkedin}`}
                                target="_blank"
                                rel="noreferrer"
                                className="social-link me-3"
                              >
                                <i className="ti-linkedin"></i>
                              </a>
                            )}
                            {BlogDetails.ngo?.instagram && (
                              <a
                                href={`https://instagram.com/${BlogDetails.ngo.instagram}`}
                                target="_blank"
                                rel="noreferrer"
                                className="social-link me-3"
                              >
                                <i className="ti-instagram"></i>
                              </a>
                            )}
                          </div>
                        </div>
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
    <AuthModal show={show} setShow={setShow} />

    </>
  );
};

export default BlogSingle;
