import React from "react";
import mainImg from "../aespamain.jpg";
// import로 이미지 받아와서 쓸 수 있음

export default function BodyComp() {
  return (
    <div>
      {/* <img src={require("../aespamain.jpg")} /> */}
      <img className="main-img" src={mainImg} alt="mainImg" />
    </div>
  );
}
