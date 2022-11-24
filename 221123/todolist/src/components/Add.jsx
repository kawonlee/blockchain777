import styled from "styled-components";
import { useState } from "react";

export default function Add({ list, setList }) {
  const [data, setData] = useState("");

  return (
    <AddStyled>
      <input
        onInput={(e) => {
          console.log(e.target.value);
          setData(e.target.value);
        }}
        value={data}
        type={"text"}
        placeholder={"내용을 입력하세요"}
      ></input>
      <button
        onClick={() => {
          console.log([...list]);
          setList([...list, data]);
        }}
      >
        추가
      </button>
    </AddStyled>
  );
}

const AddStyled = styled.div`
  padding: 30px 0;
  display: flex;
  align-items: center;
  width: fit-content;
  margin: 0 auto;

  & > input {
    width: 500px;
    height: 50px;
    margin: 0 15px;
    padding: 0 0 0 15px;
    border-radius: 5px;
  }
  & > input::placeholder {
    color: blue;
    letter-spacing: 5px;
  }

  & > button {
    border: none;
    background-color: gold;
    width: 60px;
    height: 54px;
    color: white;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    border-radius: 5px;
  }
  & > button:hover {
    color: gold;
    background-color: blue;
  }
`;
