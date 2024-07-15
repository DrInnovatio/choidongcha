import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import BannerBackground from "../Assets/home-banner-background.png";
import ksr from "../Assets/ksr_1.jpg"
import { FiArrowRight } from "react-icons/fi";

const style= {
  fontSize: '3.5rem',
  backgroundColor: '#3dfe20',
}

const Home = () => {

 
  return (
    <div className="home-container">
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            <span>신차 장기 리스의 믿을 수 있는 파트너</span><br/>
            <span>신차 장기 렌트의 AI 수준의 전문가</span><br/>
          </h1>
          <h1>
            2012년 창립. 12년 된 회사.
            매출 8천억을 달성 한 <br />강력한 파트너 오토다이렉트카와 함께하는<br/>
          </h1>
          <h1 style={style}>최동차 입니다.</h1>

          <ScrollLink 
              to="customer-form-container" 
              smooth={true} 
              duration={500} 
              offset={-70} // Adjust offset for fixed headers if any
    >
              <button className="secondary-button">최동차와 대화하기 <FiArrowRight />{" "}</button>
          </ScrollLink>
          
        </div>
        <div className="home-image-section">
          <img className="ksr-image" src={ksr} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
