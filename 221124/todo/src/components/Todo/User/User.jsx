import { useState } from "react";
import styled from "styled-components";

export default function User({ user, setUser, regist, setRegist }) {
  const [userId, setId] = useState("");
  const [userPw, setPw] = useState("");
  const [loginText, setloginText] = useState("");

  function onRegist() {
    if (userId === "" || userPw === "") return;
    console.log(userId, userPw);
    setRegist([...regist, { id: userId, pw: userPw }]);
    console.log(regist);
  }

  function onLogin() {
    let canLogin = false;
    console.log(regist);
    for (let i = 0; i < regist.length; i++) {
      console.log(regist[i].id === userId, regist[i].id, userId);
      if (regist[i].id === userId && regist[i].pw === userPw) {
        canLogin = true;
        break;
      }
    }
    setloginText(
      canLogin === true ? `${userId}님 어서오세요.` : `다시 로그인해주세요.`
    );
    setUser(userId);
  }

  function onLogout() {
    setUser("");
    setloginText("로그인을 해주세요.");
    setId("");
    setPw("");
  }

  return (
    <>
      <UserBox>
        <InfoBox className={user ? "logon" : " "}>
          <span>ID : </span>
          <input
            type="text"
            value={userId}
            onInput={(e) => {
              console.log(e.target.value);
              setId(e.target.value);
            }}
          />
        </InfoBox>
        <InfoBox className={user ? "logon" : " "}>
          <span>PW : </span>
          <input
            type="password"
            value={userPw}
            onInput={(e) => {
              setPw(e.target.value);
            }}
          />
        </InfoBox>
        <BtnBox>
          <button onClick={user ? onLogout : onLogin}>
            {user === "" ? "로그인" : "로그아웃"}
          </button>
          <button onClick={onRegist}>회원가입</button>
        </BtnBox>
      </UserBox>
      <div>{loginText}</div>
    </>
  );
}

const UserBox = styled.div`
  width: 350px;
  height: 150px;
  background-color: darkseagreen;
  margin-top: 20px;
  margin-left: calc(100% - 350px);
`;

const InfoBox = styled.div`
  padding-top: 10px;
  & > input {
    border: 2px solid green;
    border-radius: 2px;
    height: 25px;
  }

  & > span {
    padding-left: 15px;
  }

  &.logon {
    display: none;
  }
`;

const BtnBox = styled.div`
  padding: 10px 10px;
  & > button {
    margin-right: 10px;
    border: none;
    background-color: darkcyan;
    width: 80px;
    height: 30px;
    color: white;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
  }
`;
