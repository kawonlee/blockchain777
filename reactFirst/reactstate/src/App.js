import "./App.css";
import React, { useState } from "react";

function App() {
  let count = 0;
  const [count2, setCount2] = useState(0);
  // useState를 React에서 가져오고 useState()함수는 array를 반환한다.
  // 배열에는 두개의 아이템이 있다. 함수에 선언된 매개변수(초기값)를 담고있는 state변수(예시에선 count2) 하나와 state값을 바꿔주는 set함수(예시에선 setCount2)를 배열에 리턴해준다.
  // set함수는 비동기적이다. 함수가 끝나고 난 후 ui를 그려준다. 고로 한 박자씩 느리다. 실제로 콘솔로그를 찍어보면 버튼을 눌러 값이 증가해도 그 이전의 값이 보여진다.
  // ui를 바꾸는 모든 set함수들을 모아서 함수가 끝나고 난 후 처리한다. state 쓸 때 주의하면 좋다.
  const increase = () => {
    count = count + 1;
    // 카운터 변수는 왜 업데이트가 안될까 -> state업데이트할 때 마다 function App(컴포넌트)가 다시 실행된다.
    // 그러면서 새로운 값으로 UI 업데이트 -> 다시 실행시키니까 count =0으로 계속 초기화된다. 그래서 계속 1인 것이다.
    // 고로 React에서 변수는 잠깐 저장해두는 값들을 쓰고 나머지는 state로 쓸 예정
    setCount2(count2 + 1);
    console.log("count work?", count, "state count2", count2);

    // const three = 5 > 3 ? console.log("5ㄴ는3보다 커") : console.log("작아");
    // thre?.item.id
  };
  return (
    <div className="App">
      <div>{count}</div>
      <div>state:{count2}</div>
      <button onClick={increase}>증가</button>
    </div>
  );
}

export default App;
