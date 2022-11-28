import { useState } from "react";
import store from "./store";

function App() {
  const [inputCount, setCount] = useState(0);
  const [inputText, setText] = useState("");
  return (
    <>
      <div>
        <button
          onClick={() => {
            store.dispatch({
              type: "count1/plus",
              payload: { input: inputCount },
            });
          }}
        >
          Plus
        </button>
        <button
          onClick={() => {
            store.dispatch({
              type: "count1/minus",
              payload: { input: inputCount },
            });
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
          }}
        >
          눌러
        </button>
        <button
          onClick={() => {
            store.dispatch({
              type: "input/output",
            });
          }}
        >
          삭제해
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            store.dispatch({ type: "count2/plus" });
          }}
        >
          플러스
        </button>
        <button
          onClick={() => {
            store.dispatch({ type: "count2/minus" });
          }}
        >
          마이너스
        </button>
      </div>
    </>
  );
}

export default App;
