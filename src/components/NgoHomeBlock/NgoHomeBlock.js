import React from "react";
import Image from "next/image";

import blogImg1 from "../../../public/assets/images1/ngo/home/sevak-army-ngo-home-8.webp";
import blogImg2 from "../../../public/assets/images1/ngo/home/camp.webp";
import blogImg3 from "../../../public/assets/images1/ngo/home/tide.webp";
import blogImg4 from "../../../public/assets/images1/ngo/home/sevak-army-ngo-home-11.webp";

// import blog1 from "../../../public/assets/images/blog/single/img-1.jpg";
// import blog2 from "../../../public/assets/images/blog/single/img-2.jpg";
// const ClickHandler = () => {
//   window.scrollTo(10, 0);
// };

function NgoBlockHome() {

  const blogs = [
    {
      id: "1",
      title: "Harnessing Community Power: Volunteering Transforms Lives",
      slug: "1",
      subtitle:
        "Explore how volunteerism can drive significant social change and the impact it has on individuals and communities.",
      create_at: "5th September 2024",
      screens: blogImg1,
      // bsing: blog1,
      // recent: recent1,
      // blogSingleImg: blogSingleImg1,
      comment: "35",
      day: "28",
      month: "AUGUST",
      blClass: "format-standard-image",
      athor: "Sanket Kamble",
      alt:'Sevak Army Blog - Harnessing Community Power: Volunteering Transforms Lives'
    },
    {
      id: "2",
      title: "Sevak Army Launches New Environmental Campaign",
      slug: "2",
      subtitle:
        " Discover the details of our latest environmental campaign aimed at promoting sustainability and reducing waste.",
      create_at: "25th January, 24",
      screens: blogImg2,
      // bsing: blog2,
       // recent: recent2,
      // blogSingleImg: blogSingleImg2,
      comment: "35",
      day: "28",
      month: "AUGUST",
      blClass: "format-standard-image",
      athor: "Rishi Rathod",
      alt:'Blog - Sevak Army Launches New Environmental Campaign'
    },
  ];

  const blogs2 = [
    {
      id: "1",
      title: "Turning Tides: How a Clean-Up Drive Revitalised Local Parks?",
      slug: "1",
      subtitle:
        "Read about the transformative effects of our recent clean-up drive and how it has improved local green spaces.",
      create_at: "5th September 2024",
      screens: blogImg3,
      // bsing: blog1,
      // recent: recent1,
      // blogSingleImg: blogSingleImg1,
      comment: "35",
      day: "28",
      month: "AUGUST",
      blClass: "format-standard-image",
      athor: "Sanket Kamble",
      alt:'Sevak Army Blog - How a Clean-Up Drive Revitalised Local Parks?'
    },
    {
      id: "2",
      title: "Meet Maria: A Dedicated Volunteer Who Made a Difference.",
      slug: "2",
      subtitle:
        " Get inspired by Maria’s journey as a volunteer and her contributions to our educational outreach programmes.",
      create_at: "25th January, 24",
      screens: blogImg4,
      // bsing: blog2,
       // recent: recent2,
      // blogSingleImg: blogSingleImg2,
      comment: "35",
      day: "28",
      month: "AUGUST",
      blClass: "format-standard-image",
      athor: "Rishi Rathod",
      alt:'Sevak Army Blog - A Dedicated Volunteer Who Made a Difference.'
    },
  ];

  return (
    <>
      {/* 1-block */}
      {/* <section className="wpo-blog-section-s2 section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <div className="wpo-section-title mb-0">
                <span>From The Blog</span>
                <h2>Our Latest News and Articles </h2>
              </div>
            </div>
          </div>
          <div className="row mt-4 align-items-stretch gy-4">
            {blogs.slice(0, 3).map((blog, bl) => (
              <div className="col-lg-6 col-md-6 col-12" key={bl}>
                <div className="blog-single-card h-100">
                  <div className="image text-center">
                    <Image
                      className="img-fluid"
                      height={400}
                      width={400}
                      src={blog.screens}
                      alt={blog.alt}
                    />
                  </div>
                  <div className="content">
                    <span>{blog.create_at}</span>
                    <h3>{blog.title}</h3>
                    <p>{blog.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="container pb-5 pt-5">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <div className="wpo-section-title mb-5">
                <h2>Stories of Impact</h2>
              </div>
            </div>
          </div>
          <div className="row align-items-stretch gy-4">
            {blogs2.slice(0, 3).map((blog, bl) => (
              <div className="col-lg-6 col-md-6 col-12" key={bl}>
                <div className="blog-single-card h-100">
                  <div className="image text-center">
                    <Image
                      className="img-fluid"
                      src={blog.screens}
                      alt={blog.alt}
                    />
                  </div>
                  <div className="content">
                    <span>{blog.create_at}</span>
                    <h3>{blog.title}</h3>
                    <p>{blog.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </>
  );
}

export default NgoBlockHome;
