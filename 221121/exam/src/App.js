import "./App.css";
import styled from "styled-components";
import UserBox from "./components/UserBox";
import BoardBox from "./components/BoardBox";

function App() {
  return (
    <AppBox>
      <UserBox />
      <BoardBox />
    </AppBox>
  );
}

const AppBox = styled.div``;

export default App;
