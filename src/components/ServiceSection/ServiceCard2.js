import React from "react";
import Image from "next/image";

const ServiceCard2 = ({ img, title, sdescription, slug, width, height }) => {
  // const ClickHandler = () => {
  //   window.scrollTo(10, 0);
  // };
  return (
    <div className="service-item px-4" style={{ alignSelf: "stretch" }}>
      <div className="w-100 d-flex gap-3 flex-column align-items-center justify-content-center">
        <div className="icon" style={{ margin: "0px", width: "80px", height: "80px" }}>
          <Image src={img} width={60} alt="img" />
        </div>
        <div className="text text-center">
          <h2 className="services-title-text fw-bold mt-0">{title}</h2>
        </div>
      </div>
      <div className="text">
        <p className="service-paragraph volunteer-home-tex text-center" style={{ textAlign: "justify" }}>
          {sdescription}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard2;
