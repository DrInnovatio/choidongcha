import React from "react";
import noMoney from "../Assets/noMoney.svg";
import noTax from "../Assets/noTax.svg";
import maintain from "../Assets/maintain.svg";
import trust from "../Assets/trust.svg";
import accident from "../Assets/accident.svg";
import noInsurance from "../Assets/noInsurance.svg";

const style = {
  textAlign: 'center',
  fontSize: '2.2rem',
    
}


const Work = () => {
  const workInfoData = [
    {
      image: noMoney,
      title: "초기비용 無 ",
      text: "취득세, 등록세, 보험료 등 초기자금 \n없이 현금 유동성을 확보하세요.",
    },
    {
      image: noTax,
      title: "세금 절감",
      text: "렌트비 전액 손비처리 가능",
    },
    {
      image: maintain,
      title: "간편한 유지 관리",
      text: "유지, 관리 대행 서비스 제공으로 \n차량 관리 부담 無 ",
    },
    {
      image: trust,
      title: "신용 점수 유지",
      text: "임대 상품이라 부채로 처리되지 않아 \n신용점수에 영향이 없음!",
    },
    {
      image: accident,
      title: "보험 할증 無",
      text: "사고가 나도 처음 렌트비만 납부! \n 간편한 보험처리까지!"
    },
    {
      image: noInsurance,
      title: "재산세와 건보료 상승 無",
      text: "장기렌트는 재산이 아니므로 \n자차 보다 세금 절감 UP!",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h5 style={style}>장기 렌트로 누릴 수 있는 혜택들!</h5>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        )) }
        
      </div>
      </div>
  );
};

export default Work;
