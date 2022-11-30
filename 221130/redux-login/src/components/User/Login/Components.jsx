import { useState } from "react";
import styled from "styled-components";

const LoginComponent = ({ onClick }) => {
  const [userId, setId] = useState("");
  const [userPw, setPw] = useState("");
  return (
    <LoginBox>
      <input
        type={"text"}
        value={userId}
        placeholder={"ID"}
        onInput={(e) => {
          setId(e.target.value);
        }}
      />
      <input
        type={"password"}
        value={userPw}
        placeholder={"PW"}
        onInput={(e) => {
          setPw(e.target.value);
        }}
      />
      <button
        onClick={() => {
          onClick(userId, userPw);
        }}
      >
        로그인
      </button>
    </LoginBox>
  );
};

export default LoginComponent;

const LoginBox = styled.div`
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
