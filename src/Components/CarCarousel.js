// src/CarCarousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import palisade from "../Assets/palisade.png"
import gv80 from "../Assets/gv80.png"
import sorento from "../Assets/sorento.png"
import carnival from "../Assets/canival.png"

const CarCarousel = () => {
    const cars = [
        { id: 1, model: '더 뉴 펠리세이드', trim: '가솔린 3.8 7인승 익스클루시브 2WD', price: '38,960,000원', noBond: '무보증: 월 639,000원', bond30: '선수금30%: 월 361,610원', url: palisade },
        { id: 2, model: 'New GV80', trim: '가솔린 2.5터보  5인승  2WD', price: '69,300,000원', noBond: '무보증: 월 1,033,000원', bond30: '선수금30%: 월 541,875원', url: gv80 },
        { id: 3, model: '더 뉴 쏘렌토', trim: '가솔린 2.5터보  5인승 프레스티지 2WD', price: '35,060,000원', noBond: '무보증: 월 561,440원', bond30: '선수금 30%: 월 312,684원',  url: sorento },
        { id: 4, model: '더 뉴 카니발', trim: '가솔린 2.5터보  5인승 프레스티지 2WD', price: '35,060,000원', noBond: '무보증: 월 561,440원', bond30: '선수금 30%: 월 22,015원', url: carnival },
        // { id: 5, model: 'Car Model 5', price: '$28,000', url: car5 },
        // { id: 6, model: 'Car Model 6', price: '$30,000', url: car6 },
        // { id: 7, model: 'Car Model 7', price: '$32,000', url: car7 },
        // { id: 8, model: 'Car Model 8', price: '$34,000', url: car8 },
        // { id: 9, model: 'Car Model 9', price: '$36,000', url: car9 },
        // { id: 10, model: 'Car Model 10', price: '$38,000', url: car10 }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <div className="carousel-container">
            <h1 className='suv'>SUV 특가 프로 모션</h1>

            <Slider {...settings}>
                {cars.map((car) => (
                    <div key={car.id} className="car-card">
                        <img src={car.url} alt={car.model} />
                        <div className="car-info">
                            <h3>{car.model}</h3>
                            <h4>{ car.trim }</h4>
                            <div className='car-price'>
                                <p>{car.price}</p>
                                <p>{car.noBond}</p>
                                <p>{car.bond30}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CarCarousel;
