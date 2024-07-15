import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import blood from "../Assets/blood.jpg"

const Blood = () => {
  return (
    <div className="blood-container">
      <div className="blood-banner-container">
        <div className="blood-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="blood-text-section">
          <h1 className="primary-heading">
            많은 견적이 낮은 가격을 <br/>보장하지 않습니다.
          </h1>
          <h2>
            최동차와 상담하시는 많은 고객님들께서 <br/>견적을 많이 받을수록 심신이 <br/>복잡해지는 것 같다는 말씀을 하시곤 합니다. <br/>그 복잡한 마음 최동차가 다 풀어드립니다.
          </h2>
          
        </div>
        <div className="blood-image-section">
          <img className="blood-image" src={blood} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Blood;
