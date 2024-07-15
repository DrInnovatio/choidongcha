/* eslint-disable no-dupe-keys */
import React from "react";
import AboutBackground from "../Assets/about-background.png";
import csj from '../Assets/csj_1.jpg'

//import AboutBackgroundImage from "../Assets/about-background-image.png";

const style_a = {
  textAlign: 'center',
  backgroundColor: '#3dfe20',
  textAlign: 'left',
  fontSize: '1.7rem',
    
}

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img className="csj-image" src={csj} alt="" />
      </div>
      <div className="about-section-text-container">
        <h1 className="primary-heading">
          CEO 최수진
        </h1>
        <p className="primary-text"><strong>
          최저가라는 건 회사 입장에서 마진이 없다는 뜻입니다.<br/>
          그게 가능할까요? 속지 마세요.<br/>
          최동차는 최저가 보장이라고 거짓말하지 않습니다.<br/>
          하지만 정직한 가격으로 대기업보다는<br/>
          월 만 원이라도 저렴한 가격에 드리겠습니다. <br />
          여기저기 견적 알아보시느라 <br />
          시간 낭비하고 계신 거 저도 알고 있습니다..<br/>
          제가 고객님의 마지막 상담이 되어드리겠습니다.<br />
          시간 낭비하지 마세요.</strong>
        </p>
        <br/>
        <p style={style_a}className="primary-text">
          <strong>최동차는 동탄뿐 아니라 상담과 계약을 원하시는 <br/>어디라도 찾아갑니다.</strong>
        </p>
        </div>
      </div>
  );
};

export default About;
