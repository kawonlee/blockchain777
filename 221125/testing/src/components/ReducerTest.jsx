// useReducer << reducer를 사용하는 Hook
// reducer가 무엇인가? << 변수를 정의함에 있어서 선행 작업? 정도 되는 함수이다.
// state / action / dispatch / reducer
// state : 상태값이다.
// action : 요청이다. (보통 객체이다.)
// dispatch : 요청을 받는 함수이다.
// reducer : 요청을 실행하는 함수이다.
// 동사무소에 가서 주민등록등본을 발급한다.
//  - 가서 번호표 뽑고 기다렸다가 순서가 되면 접수원에게 가서 서류를 제출 / '발급해주세요.' 라고 말하고 민증, 지문, 돈을 준다.
//      - 서류 제출, "발급해주세요" << 이 녀석이 action이다. action = {등본발행(어떤 작업을 원하는지), 민증, 지문, 돈}
//      - 접수원이 요청을 받는다. << dispatch
//      - 접수원이 작업 후에 서류를 준다. << reducer역할도 같이 한다.
//  - 접수원이 모든 것을 받아서 확인 후에 정보를 찾아서 출력해서 우리에게 전달해준다.

import { useReducer, createContext } from "react";

export const OfficeContext = createContext();

const reducer = (state, action) => {
  // reducer : 작업해서 state를 정의하는 함수
  console.log(state, action);
  switch (action.type) {
    case "주민등록등본":
      if (action.payload.pay < 500) return "돈 내놔.";
      return "주민등록등본이 발급되었습니다.";
    case "주민등록초본":
      if (action.payload.pay < 700) return "돈이 모자르다.";
      return "주민등록초본이 발급되었습니다.";
    case "건축물 대장":
      return "건축물 대장이 발급되었습니다.";
    case "지방세납세증명":
      return "지방세납세증명.";
    case "운전면허 정보":
      return "운전면허 정보가 발급되었습니다.";
    case "전입신고":
      return "전입신고가 완료되었습니다.";
    case "코로나19 격리통지서":
      return "코로나19 격리통지서가 발급되었습니다.";
    case "병적증명서 발급":
      return "병적증명서 발급이 완료되었습니다.";

    default:
      return "요청이 없습니다.";
  }
};

export default function ReducerTest({ children }) {
  // children은 컴포넌트의 자식 컴포넌트(엘리먼트)이다.
  const [result, requestDispatch] = useReducer(reducer, "요청이 없습니다.");
  // const [state, dispatch] = useReducer(reducer, initialState) // initialState = 처음 상태
  return (
    <OfficeContext.Provider value={{ result, requestDispatch }}>
      {children}
    </OfficeContext.Provider>
  );
}
