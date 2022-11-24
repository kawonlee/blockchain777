import React from "react";
import ReactDOM from "react-dom/client";
// React와 외부를 연결하는 라이브러리
import "./index.css";
import App from "./App"; // App이라는 컴포넌트를 가져온다.
import reportWebVitals from "./reportWebVitals"; // 성능 측정용 파일

const root = ReactDOM.createRoot(document.getElementById("root"));
// document.getElementById << ID를 기준으로 엘리먼트를 가져온다.
// React의 Root DOM을 만든다. << Virtual DOM의 시작점이 필요하기 때문에
// 리액트의 장점은 코드의 재활용이 쉽다.
root.render(
  // React의 Root DOM에 매개변수로 전달된 컴포넌트를 생성한다.(Mount)
  // <React.StrictMode>
  // React.StrictMode를 쓰면 왜 콘솔로그가 2번씩 출력되는가
  // 정확하게 출력하기 위해서 생성할 때 한 번 삭제 후에 다시 생성한다.
  //  mount -> unmount -> mount의 흐름이라 콘솔이 두 번 찍히는 것
  // Redux라는 것과 함께 설명할 것 같다.
  <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Redux쪽에서 설명할 내용 -> useContext, useReducer, StrictMode
