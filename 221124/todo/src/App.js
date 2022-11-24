import styled from "styled-components";
import Todo from "./components/Todo";
import { useState } from "react";
import User from "./components/Todo/User/User";

function App() {
  const [user, setUser] = useState(""); // 오늘의 과제
  const [regist, setRegist] = useState([{ id: "testid", pw: "1234" }]);
  return (
    <AppBox>
      <User
        user={user}
        setUser={setUser}
        regist={regist}
        setRegist={setRegist}
      />
      <Todo></Todo>
    </AppBox>
  );
}

export default App;

// 반응형을 위한 초기 세팅을 해두고 11~12 // 14번 줄 부터 medial query를 통해 반응형 세팅
const AppBox = styled.div`
  max-width: 1300px;
  margin: auto;

  &.test {
    background-color: lightgray;
    height: 100px;
  }

  @media only screen and (max-width: 1400px) {
    max-width: 1000px;
  }

  @media only screen and (max-width: 1100px) {
    max-width: 600px;
  }

  @media only screen and (max-width: 700px) {
    max-width: 300px;
  }
`;
