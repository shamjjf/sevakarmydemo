import React from "react";
import Slider from "react-slick";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SectionTitle from "../SectionTitle/SectionTitle";

import Shape from "../../../public/assets/images/testimonial/bg.webp";
import image1 from "../../../public/assets/images1/team/sevak-army-team-4.webp";
import image2 from "../../../public/assets/images1/team/sevak-army-team-9.webp";
import image3 from "../../../public/assets/images1/team/sevak-army-team-1.webp";

function NgoHomeTestimonal({ props }) {
  const TestimonialData = [
    {
      id: "01",
      text: "As an NGO director, I believe SevakArmy is a game-changer for organisations like ours. It helps us find committed volunteers and provides resources to amplify impact. Since joining, we’ve seen greater involvement, support, and are building a sustainable future for those we serve.",
      title: "Rajesh K, NGO Director",
      // subtitle: "Manager",
      image: image1,
    },
    {
      id: "02",
      text: "SevakArmy has truly transformed the way we engage with volunteers. The platform helps us find skilled individuals quickly, which has made a huge difference in the success of our projects. With SevakArmy, we've been able to reach more people and improve lives faster than ever before.",
      title: ' Priya S, NGO Coordinator',
      // subtitle: "Leader",
      image: image2,
    },
    {
      id: "03",
      text: "For our NGO, SevakArmy has been a blessing. We no longer struggle with volunteer recruitment and the easy-to-use platform makes managing tasks simple. Our work has become more organised and efficient and we’ve seen a significant boost in community support.",
      // subtitle: "Driving Environmental Sustainability Initiatives",
      title: "Anjali M, NGO Project Manager",
      image: image3,
    },
  ];

  const CustomPrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <i className="flaticon-right-arrow-1"></i>
      </div>
    );
  };

  const CustomNextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <i className="flaticon-left-arrow"></i>
      </div>
    );
  };
  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
          arrows: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };
  return (
    <section className={"" + props} style={{ paddingBottom: '50px', paddingTop:'50px' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-12 col-12">
            <SectionTitle subtitle="Real Voices, Real Impact" title="Testimonials" />
          </div>
        </div>
        <div className="wpo-testimonial-slider mt-3">
          <Slider {...settings}>
            {TestimonialData.map((Testimonial, item) => (
              <div className="testimonial-item" style={{minHeight:'100%'}} key={item}>
                <div className="content">
                  <div className="icon">
                    <i className="flaticon-quote"></i>
                  </div>
                  <p style={{ textAlign: "justify" }}>{Testimonial.text}</p>
                  <div className="shape">
                    <Image src={Shape} alt="Blogs" />
                  </div>
                </div>
                <div className="bottom-content">
                  <div className="text">
                    <h3>{Testimonial.title}</h3>
                    <span>{Testimonial.subtitle}</span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default NgoHomeTestimonal;
