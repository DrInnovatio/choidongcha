import React from 'react';
import logo from '../Assets/cdc_logo.jpg';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="logo-section">
          <img src={ logo } alt="Logo" />
        </div>
        <div className="text-section">
            <p>최동차 & 노이만 아이디어(Neumann Idea)</p>
            <p>대표자: 최수진, 박재우</p>
            <p>주소: 서울특별시 서대문구 증가로25길 33 (309호)</p>
            <p>Email: choidongcha@gmail.com</p>
            <p>사업자등록번호: 858-23-01668</p>
            <p>Copyright ⓒ 노이만 아이디어 All rights reserved</p>
            <p><strong>광고대행사 및 마케팅 전화 절대 사절</strong></p>
        </div>
        
      </div>
    </div>
  );
}

export default Footer;
