import styled from "styled-components";
import { connect } from "react-redux";
import { Routes, Route, Link } from "react-router-dom";

import RegistContainer from "./Regist/Container";
import LogInContainer from "./Login/Container";
import InfoContainer from "./Info/Container";

// {" "} 코드에서 띄어쓰기 하고 싶을 때 19번째 줄처럼
const UserComponent = ({ userName }) => {
  return (
    <UserBox>
      <div className="link">
        <Link to={"/"}>홈</Link>
        {userName ? (
          <></>
        ) : (
          <>
            {" "}
            | <Link to={"/regist"}>회원가입</Link> |{" "}
            <Link to={"/login"}>로그인</Link>
          </>
        )}
      </div>

      {userName ? <InfoContainer /> : <></>}
      <Routes>
        <Route path="/regist" element={<RegistContainer />} />
        <Route path="/login" element={<LogInContainer />} />
      </Routes>
    </UserBox>
  );
};

const mapStateToProps = (state, props) => {
  return {
    userName: state.userInfo.userName,
  };
};

export default connect(mapStateToProps)(UserComponent);

const UserBox = styled.div`
  border: 1px solid black;
  background-color: steelblue;
  color: white;
  padding: 10px;
  border-radius: 5px;
  & > div > a {
    text-decoration: none;
    color: white;
  }
  .link {
    padding-bottom: 15px;
    font-weight: bold;
  }
`;
