import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Regist({ users, setUsers }) {
  const [userId, setId] = useState("");
  const [userPw, setPw] = useState("");
  const [ableId, setAbleId] = useState(false);
  const [ablePw, setAblePw] = useState(false);

  useEffect(() => {
    setId(userId.length ? userId.match(/[a-z]/gi)?.join("") : "");
    // a-z, A-Z 까지만 입력가능하도록 한다 (i는 대소문자 구별이 없이)
    if (userId.length < 5) setAbleId(false);
    else setAbleId(true);
    // ID 길이에 대한 예외처리
  }, [userId]);

  useEffect(() => {
    if (userPw.length < 10) setAblePw(false);
    else setAblePw(true);
  }, [userPw]);

  function onRegist() {
    if (!(ableId && ablePw)) return;
    if (users.find((item) => item.userId === userId)) return;
    setUsers([...users, { userId, userPw }]);
    // setUsers(state => ([...state, { userId, userPw }]));
    // user.push({userId, userPw}); // < 적용은 되나 절대적으로 권장되지 않는 방식
    // setUsers(users);
  }

  return (
    <RegistBox>
      <input
        type={"text"}
        onInput={(e) => {
          setId(e.target.value);
        }}
        placeholder="ID"
        value={userId}
        autoComplete={"off"}
      />
      <input
        type={"password"}
        onInput={(e) => {
          setPw(e.target.value);
        }}
        placeholder="PW"
        value={userPw}
      />
      <button onClick={onRegist}>정현이 가입</button>
    </RegistBox>
  );
}

const RegistBox = styled.div``;
