import { useState } from "react";
import { useContext } from "react";

import { OfficeContext } from "./ReducerTest";

export default function Office() {
  const { result, requestDispatch } = useContext(OfficeContext);
  const [balance, setBalance] = useState(10000); // 발급받을 때마다 잔금이 줄어들도록 설정 // 발급 금액도 달라야한다.
  const infoList = [
    { type: "주민등록등본", payload: { idetitycard: "신분증", pay: 500 } },
    { type: "주민등록초본", payload: { idetitycard: "신분증", pay: 700 } },
    {
      type: "건축물 대장",
      payload: { idetitycard: "건축등록증서", pay: 1000 },
    },
    {
      type: "지방세납세증명",
      payload: { idetitycard: "카드내역서", pay: 1200 },
    },
    { type: "운전면허 정보", payload: { idetitycard: "운전면허증", pay: 800 } },
    { type: "전입신고", payload: { idetitycard: "신분증", pay: 1500 } },
    {
      type: "코로나19 격리통지서",
      payload: { idetitycard: "병원진단서", pay: 300 },
    },
    { type: "병적증명서 발급", payload: { idetitycard: "진단서", pay: 2000 } },
  ];

  return (
    <div>
      {" "}
      {infoList.map((item, index) => (
        <div
          key={index}
          onClick={() => {
            requestDispatch(item);
          }}
        >
          {item.type}
        </div>
      ))}
      <div>{result}</div>
    </div>
  );
}

//  className="office"
// onClick={() => {
//   requestDispatch({
//     type: "주민등록등본",
//     // 어떠한 작업을 할 것인가?
//     payload: {
//       // 작업에 필요한 데이터
//       identityCard: "주민등록증",
//       pay: 500,
//     },
//   });
// }}
