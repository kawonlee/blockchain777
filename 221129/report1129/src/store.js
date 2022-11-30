import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { initialize as registIni } from "./modules/regist";

import { reducer as regist } from "./modules/regist";
import { reducer as login } from "./modules/login";
const store = createStore(
  combineReducers({ regist, login }),
  { regist: registIni, login: "" },
  composeWithDevTools()
);

export default store;
