import React from 'react';
import blackbox from "../Assets/blackbox.png";
import wind_shield from '../Assets/wind_shield.jpeg';
import engine from '../Assets/engine.jpeg';
import car_met from '../Assets/carmet.jpeg';

import { Link as ScrollLink } from 'react-scroll';
import { FiArrowRight } from "react-icons/fi";

function Benefits() {
  const images = [
    { src: blackbox, text: '최고 사양 블랙 박스' },
    { src: wind_shield, text: '썬팅 기본 부착' },
    { src: engine, text: '정기적인 순회 정비\n(일부 차종 제외)' },
    { src: car_met, text: '실내 청소가 간편한\n 코일 매트' },
  ];

return (
    <div className="bene">
      <h1>최동차가 드리는 다양한 혜택들!</h1>
      <div className="bene-image-container">
        {images.map((image, index) => (
          <div className="bene-image-wrapper" key={index}>
            <img src={image.src} alt={image.text} />
            <div className="bene-overlay">
              <div className="text">{image.text}</div>
            </div>
          </div>
        ))}
    </div>
    <ScrollLink 
              to="customer-form-container" 
              smooth={true} 
              duration={500} 
              offset={-70} // Adjust offset for fixed headers if any
    >
      <button className="talk-secondary-button">최동차와 대화하기 <FiArrowRight />{" "}</button>
    </ScrollLink>
    </div>
  );
}

export default Benefits;
