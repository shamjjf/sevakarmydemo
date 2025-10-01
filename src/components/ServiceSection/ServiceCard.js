import React from "react";
import Image from "next/image";

const ServiceCard = ({ img, title, sdescription, slug, width, height, bgColor, heightClass }) => {
  // const ClickHandler = () => {
  //   window.scrollTo(10, 0);
  // };
  return (
    <div
      className={`service-item px-4 ${heightClass}`}
      style={{ height: height, alignSelf: "stretch", marginBottom: "10px", minHeight:'100%' }}
    >
      <div className="icon">
        <Image src={img} width={60} height={60} alt="img" />
      </div>
      <div className="text">
        <h2 className="services-title-text fw-bold mt-4">
          {/* <Link className="services-title-text" to={``} style={{ cursor: "default" }}> */}
          {title}
          {/* </Link> */}
        </h2>
        <p className="service-paragraph volunteer-home-text text-center" style={{ textAlign: "center" }}>
          {sdescription}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
