import image1 from "../../../public/assets/images1/team/sevak-army-team-1.jpg";
import image2 from "../../../public/assets/images1/team/sevak-army-team-6.jpg";
import image3 from "../../../public/assets/images1/team/sevak-army-team-2.jpg";
import Shape from "../../../public/assets/images/testimonial/bg.png";
import SectionTitle from "../SectionTitle/SectionTitle";
import Slider from "react-slick";
import Image from "next/image";

const Testimonial = [
  {
    id: "01",
    text: "When I joined SevakArmy, I realised volunteering could transform my life. Teaching underprivileged children in remote villages was especially rewarding,  giving me a profound sense of purpose and fulfillment.",
    title: "Aarav M.",
    subtitle: "Volunteer",
    image: image1,
  },
  {
    id: "02",
    text: "Before joining SevakArmy, I felt something was missing in my life. Volunteering with an NGO that supports elderly care ignited a passion within me, allowing me to rediscover my purpose through sharing laughter and stories.",
    title: "Priya S.",
    subtitle: "Volunteer",
    image: image2,
  },
  {
    id: "03",
    text: "As a busy professional, Rahul found deeper meaning and fulfillment through SevakArmy by teaching digital literacy to underprivileged youth, empowering them with essential computer skills for better career opportunities.",
    title: "Rahul V.",
    subtitle: "Volunteer",
    image: image3,
  },
];

const Volunteerhomestories = (props) => {
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
    <>
      <section className="mt-5">
        <SectionTitle title="Volunteer Stories" />
        <div className={props.hclass}>
          <div className="container mt-5">
            <div className="wpo-testimonial-slider">
              <Slider {...settings}>
                {Testimonial.map((Testimonial, item) => (
                  <div className="testimonial-item" key={item}>
                    <div className="content">
                      <div className="icon">
                        <i className="flaticon-quote"></i>
                      </div>
                      <p className="fs-5">{Testimonial.text}</p>
                      <div className="shape">
                        <Image src={Shape} alt="Volunteer Home" />
                      </div>
                    </div>
                    <div className="bottom-content">
                      <div className="image">
                        <Image src={Testimonial.image} alt="Volunteer Home" />
                      </div>
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
        </div>
      </section>
    </>
  );
};

export default Volunteerhomestories;
