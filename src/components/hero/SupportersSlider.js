import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

/* images */
import img1 from '../../../public/assets/images1/team/sevak-army-team-1.webp'
import img2 from '../../../public/assets/images1/team/sevak-army-team-2.webp'
import img3 from '../../../public/assets/images1/team/sevak-army-team-3.webp'
import img4 from '../../../public/assets/images1/team/sevak-army-team-4.webp'
import img5 from '../../../public/assets/images1/team/sevak-army-team-5.webp'
import Image from "next/image";



const SupportersSlider = () => {

    const settings = {
        dots: false,
        arrows:false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,

    };

    return (
        <div className="wpo-supporter-img">
            <ul className="wpo-supporter-slide place-items-center">
                <Slider {...settings}>
                    <li>
                        <Image height={47} src={img1} alt="Aliza Anny" className="slider-image-widthh" style={{minWidth: '47px', height: '47px'}} />
                    </li>
                    <li>
                        <Image height={47} src={img2} alt="David Miller" className="slider-image-widthh" style={{minWidth: '47px', height: '47px'}} />
                    </li>
                    <li>
                        <Image height={47} src={img3} className="image-margin-toppp slider-image-widthh" alt="Maria Silva" style={{minWidth: '47px', height: '47px'}} />
                    </li>
                    <li>
                        <Image height={47} src={img4} alt="Takila Mas" className="slider-image-widthh" style={{minWidth: '47px', height: '47px'}} />
                    </li>
                    <li>
                        <Image height={47} src={img5} alt="Jenny Lawba" className="slider-image-widthh" style={{minWidth: '47px', height: '47px'}} />
                    </li>
                </Slider>
            </ul>
        </div>
    );
};

export default SupportersSlider;
