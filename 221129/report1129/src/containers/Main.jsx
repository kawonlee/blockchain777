import MainComp from "../components/Main";
import { action } from "../modules/regist";
import store from "../store";

const MainContainer = () => {
  const regist = (input) => {
    store.dispatch(action.regist(input));
  };
  return <MainComp regist={regist} />;
};

export default MainContainer;
