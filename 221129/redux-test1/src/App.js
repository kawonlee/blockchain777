import { useState } from "react";
import store from "./store";
import { COUNT1, actions as count1Actions } from "./action/count1";
// 변수명 as 불러온 변수명을 지칭할 이름 -> 불러와서 as 뒤에 있는 이름으로 사용하겠다.
function App() {
  const [inputCount, setCount] = useState(0);
  const [inputText, setText] = useState("");
  const [_, setRender] = useState(false);
  // _란 보통 사용하지 않을 변수의 이름으로 설정한다. 업계에서 사용하는 일종의 관례
  // _라는 라이브러리도 있다. << 이건 주의해야함(lowbar)

  return (
    <>
      <div>
        <div>{store.getState().count1}</div>
        {/* store.getState()는 store로 가져온다. */}
        {/* store.getState()로 받아온 store의 객체는 React의 랜더링에 관여하지 않는다. 그래서 Class 컴포넌트에서는 
        forceupdate()를 사용해서 강제로 랜더링을 해준다.*/}
        {/* function 컴포넌트에서는 state를 하나 만들어서 setState()를 통해 랜더링을 강제한다. */}
        <button
          onClick={() => {
            store.dispatch(count1Actions.plus(inputCount));
            setRender((state) => !state);
          }}
        >
          Plus
        </button>
        <button
          onClick={() => {
            store.dispatch(count1Actions.minus(inputCount));
            setRender((state) => !state);
          }}
        >
          Minus
        </button>
        <input
          placeholder="number"
          type={"number"}
          value={inputCount}
          onInput={(e) => {
            setCount(+e.target.value);
          }}
        />
        <input
          placeholder="입력해"
          type={"text"}
          value={inputText}
          onInput={(e) => {
            setText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            store.dispatch({
              type: "input/input",
              payload: { input: inputText },
            });
            setRender((state) => !state);
          }}
        >
          눌러
        </button>
        <button
          onClick={() => {
            store.dispatch({
              type: "input/output",
            });
            setRender((state) => !state);
          }}
        >
          삭제해
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            store.dispatch({ type: "count2/plus" });
            setRender((state) => !state);
          }}
        >
          플러스
        </button>
        <button
          onClick={() => {
            store.dispatch({ type: "count2/minus" });
            setRender((state) => !state);
          }}
        >
          마이너스
        </button>
      </div>
    </>
  );
}

export default App;
