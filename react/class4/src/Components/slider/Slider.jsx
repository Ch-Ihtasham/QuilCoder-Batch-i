import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import '../../index.css'
export default function SimpleSlider() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
    };
    return (
        <Slider {...settings}>
            <div className="text-center bg-green-300">
                <h3>1</h3>
                <img src="/vite.svg" alt="img" />
            </div>
            <div className="text-center">
                <h3>2</h3>
            </div>
            <div className="text-center">
                <h3>3</h3>
            </div>
            <div className="text-center">
                <h3>4</h3>
            </div>
            <div className="text-center">
                <h3>5</h3>
            </div>
            <div className="text-center">
                <h3>6</h3>
            </div>
        </Slider>
    );
}