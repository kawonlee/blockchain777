import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducer, initialize } from "./count";
import reduxThunk from "redux-thunk";

const store = createStore(
  combineReducers({ count: reducer }),
  { count: initialize },
  composeWithDevTools(applyMiddleware(reduxThunk))
  // middleWare로 추가한다.
);

export default store;
