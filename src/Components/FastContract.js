import React from "react";
import talk from "../Assets/talk.svg";
import docs from "../Assets/docs.svg";
import contract from "../Assets/contract.svg";
import getCar from "../Assets/getCar.svg";

const FastContract = () => {
  const contractInfoData = [
    {
      image: talk,
      title: "맞춤 상담",
    },
    {
      image: docs,
      title: "서류 심사",
    },
    {
      image: contract,
      title: "계약 체결",
    },
    {
      image: getCar,
      title: "차량 출고",
    },
  ];
  return (
    <div className="fast-section-wrapper">
      <div className="fast-section-top">
        <h1 className="fast-heading">바쁜 고객님을 위한 빠른 계약 절차</h1>
      </div>
      <div className="fast-section-bottom">
        {contractInfoData.map((data) => (
          <div className="fast-section-info" key={data.title}>
            <div className="fast-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FastContract;
