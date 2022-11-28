import { reducer } from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";
// 브라우저의 Redux DevTool과 연결해준다. 함수이다.
import { createStore } from "redux";
// createStore는 이름 그대로 store를 만드는 함수. Deprecated 됐다.
//  - Deprecated : 중요도가 떨어져 더 이상 사용되지 않고 앞으로는 사라지게 될 (컴퓨터 시스템 기능 등)
// createStore를 대신하는 함수가 @reduxjs/toolkit 라이브러리의 configureStore메서드이다.
// createStore가 왜 살아났느냐?? << 기존의 코드들이 너무 많아서 사용자가 너무 많다.

export const store = createStore(
  reducer,
  { test: "testing" },
  composeWithDevTools()
);
