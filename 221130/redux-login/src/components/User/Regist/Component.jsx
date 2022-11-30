import { useState } from "react";
import styled from "styled-components";

// 3. onClick을 부모 컴포넌트(RegistContainer)로부터 props로 받는다.
const RegistComponent = ({ onClick }) => {
  const [userId, setId] = useState("");
  const [userPw, setPw] = useState("");
  const [userName, setName] = useState("");
  console.log("2, 3. RegistComponent", onClick);
  return (
    <RegistBox>
      <input
        value={userId}
        type={"text"}
        onInput={(e) => {
          setId(e.target.value);
        }}
        placeholder={"아이디"}
      />
      <input
        value={userPw}
        type={"password"}
        onInput={(e) => {
          setPw(e.target.value);
        }}
        placeholder={"비밀번호"}
      />
      <input
        value={userName}
        type={"text"}
        onInput={(e) => {
          setName(e.target.value);
        }}
        placeholder={"이름"}
      />
      <button
        onClick={() => {
          console.log("4. button onClick");
          // 4. 사용자가 Regist버튼을 클릭했을 때 onClick함수를 호출한다. 매개 변수로 userId, userPw, userName을 전달한다.
          onClick(userId, userPw, userName);
        }}
      >
        회원가입
      </button>
    </RegistBox>
  );
};

export default RegistComponent;

const RegistBox = styled.div`
  input {
    padding: 5px;
    margin-right: 10px;
    border: none;
    border-radius: 3px;
  }
  button {
    border: none;
    color: white;
    background-color: royalblue;
    width: 70px;
    height: 30px;
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;
  }
`;
