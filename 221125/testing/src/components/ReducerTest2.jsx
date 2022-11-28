// useReducer를 왜 하는가? << 언제 나왔는지는 모르나 교수님 할 땐 없었다.
// 교수님은 써본 기억이 없다 << 왜 수업했는가
// Redux의 기초에 도움이 된다 << 이해를 도울 수 있다.

import { useReducer } from "react";
import { useState } from "react";
import { reducer } from "./reducerTest";

// action : 요청, 즉 어떤 일을 해달라고 할지 그 내용과 데이터를 가진 변수이다. 목적(type)과 목적에 필요한 데이터(payload)
// dispatch : 요청을 받아서 일할 reducer에게 전달하는 함수
//  setState => state에 적용한다.
//  dispatch => reducer가 해당 내용을 가지고 작업을 한 후 state에 적용한다. => 중간 과정이 추가된다. 로직을 넣을 수 있으며 내가 입력한 데이터와 전혀 다른 데이터를 state에 정의할 수 있다.
// reducer : dispatch가 전달한 데이터로 작업을 진행한 후 결과를 state에 정의한다.

export default function ReducerTest2() {
  const [count, setCount] = useState(0);
  const [count2, count2Dispatch] = useReducer(reducer, 0);

  const plus = () => {
    const tempCount = count + 1;
    setCount(tempCount);
  };

  const minus = () => {
    const tempCount = count - 1;
    setCount(tempCount);
  };
  // this는 거의 대부분 class에서만 사용한다.

  const nanugi = () => {
    const tempCount = count / 10;
    setCount(tempCount);
  };

  const multi = () => {
    const tempCount = count * 10;
    setCount(tempCount);
  };
  return (
    <div>
      <div>count : {count}</div>
      <div>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
        <button onClick={nanugi}>/</button>
        <button onClick={multi}>*</button>
      </div>
      <div>count2 : {count2}</div>
      <div>
        <button
          onClick={() => {
            count2Dispatch({ type: "plus" });
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            count2Dispatch({ type: "minus" });
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            count2Dispatch({ type: "nanugi" });
          }}
        >
          /
        </button>
        <button
          onClick={() => {
            count2Dispatch({ type: "multi" });
          }}
        >
          *
        </button>
      </div>
    </div>
  );
}
