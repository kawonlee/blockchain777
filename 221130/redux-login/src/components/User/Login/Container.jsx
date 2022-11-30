import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import LoginComponent from "./Components";
import { action } from "../../../modules/userInfo";
import store from "../../../modules/store";
import { useEffect } from "react";

const LogInContainer = ({ userName }) => {
  const navigate = useNavigate(); //location.href같은 훅이다.
  const onClick = (userId, userPw) => {
    store.dispatch(action.logIn(userId, userPw, store.getState().userDB));
  };

  useEffect(() => {
    if (userName) navigate("/");
  }, [userName]);
  return <LoginComponent onClick={onClick} />;
};

const mapStateToProps = (state, props) => {
  return {
    userName: state.userInfo.userName,
  };
};

export default connect(mapStateToProps)(LogInContainer);
