import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import pa1 from "../Assets/pa1.jpg";
import pa2 from "../Assets/pa2.jpg";
import pa3 from "../Assets/pa3.jpg";
import pa4 from "../Assets/pa4.jpg";

const style = {
  textAlign: 'center',
  fontSize: '3rem',
}
    
const Partners = () => {
  return (
    <div className="partner-container">
      <h1 style={style}>제휴사</h1>
      <div className="partner-banner-container">
        <div className="partner-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        
        <div className="partner-image-section">
          <img className="partner-image" src={pa3} alt="" />
        </div>
        
        <div className="partner-image-section">
          <img className="partner-image" src={pa4} alt="" />
        </div>
      </div>
      <div className="partner-banner-container">
        <div className="partner-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="partner-image-section">
          <img className="partner-image" src={pa1} alt="" />
        </div>
        
        <div className="partner-image-section">
          <img className="partner-image" src={pa2} alt="" />
        </div>
        
      </div>
    </div>
  );
};

export default Partners;
