import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducer";
const store = createStore(
  reducer,
  { count1: 0, count2: 0, inputArr: [] },
  // 여기 정의된 이름은 reducer안에 있는 index.js에 있는 이름과 일치해야한다.
  composeWithDevTools()
);
// count2는 input없이 plus, minus 작성하기
export default store;
// 컴포넌트가 아니기 때문에 store.js << 대문자로 시작하는 파스칼 표기법을 사용하지 않고 카멜 표기법 사용, HTML 문법을 사용하지 않기 때문에 js
