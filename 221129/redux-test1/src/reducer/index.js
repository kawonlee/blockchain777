import { combineReducers } from "redux";
// combineReducers 메서드는 전달받은 reducer의 모음 객체를 하나로 묶어준다.

import count1 from "./count1";
import count2 from "./count2";
import inputArr from "./input";
// import로 불러온 변수명만 state로 쓰겠다. 해당 경로에 있는 js파일에서

export default combineReducers({ count1, count2, inputArr });
// combineReducers 메서드는 하나로 통합된 reducer 메서드를 반환한다.
