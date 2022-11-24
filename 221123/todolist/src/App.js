import "./App.css";
import Add from "./components/Add";
import List from "./components/List";
import { useState } from "react";
import styled from "styled-components";

function App() {
  const [list, setList] = useState([
    "나는 쇠질이 좋다.",
    "나는 집에 가고 싶다.",
  ]);
  return (
    <MainStyled>
      <div>TodoList</div>
      <Add list={list} setList={setList} />
      <List list={list} setList={setList} />
      {/* setList는 수정시에 상태값이 변하기 때문에 필요하다! */}
    </MainStyled>
  );
}
const MainStyled = styled.div`
  & > div:first-child {
    padding: 20px 0;
    font-size: 40px;
    font-weight: 600;
    animation: titleani 4s infinite;
  }
  @keyframes titleani {
    15% {
      color: aqua;
    }
    30% {
      color: red;
    }
    45% {
      color: hotpink;
    }
    60% {
      color: blueviolet;
    }
    75% {
      color: blue;
    }
    100% {
      color: yellow;
    }
  }
  text-align: center;
  width: 80%;
  margin: 0 auto;
`;
export default App;
