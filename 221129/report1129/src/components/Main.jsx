import { useState } from "react";

const MainComp = ({ regist }) => {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");
  return (
    <div>
      <div>
        ID :
        <input
          type={"text"}
          placeholder={"ID입력"}
          value={inputId}
          onInput={(e) => {
            setInputId(e.target.value);
          }}
        />
      </div>
      <div>
        PW :
        <input
          type={"text"}
          placeholder={"PW입력"}
          value={inputPw}
          onInput={(e) => {
            setInputPw(e.target.value);
          }}
        />
      </div>
      <div>
        <button
          onClick={() => {
            regist({ userId: inputId, userPw: inputPw });
          }}
        >
          회원가입
        </button>
        <button>로그인</button>
      </div>
    </div>
  );
};
export default MainComp;
