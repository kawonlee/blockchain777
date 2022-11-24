import styled from "styled-components";
import { TodoBtn } from "../setting";
import { Link, Route, Routes } from "react-router-dom";
import List from "./List/List";
import TodoModal from "./TodoModal";
import { useState } from "react";
// default가 아닌 데이터를 가져올 때는 (import 시) {}를 사용해 구조분해할당 형식으로 가져온다.

export default function Todo() {
  const [list, setList] = useState([
    {
      taskName: "이게나야",
      status: 0,
    },
    {
      taskName: "이게너야",
      status: 1,
    },
    {
      taskName: "배고파",
      status: 2,
    },
  ]);
  return (
    <div>
      <h1>Todo List</h1>
      <TodoModalBtnBox>
        <Link to={"add"}>
          {/* Add Task를 누르면 add 경로로 이동하기 위해 Link로 감싸줬다. */}
          <TodoBtn className="sky">Add Task</TodoBtn>
        </Link>
      </TodoModalBtnBox>
      <List list={list} setList={setList} />
      <Routes>
        {/* Add Task를 눌렀을 때 바뀌는 공간에 대한 코드 */}
        {/* link = 주소를 바꿔준다. / Routes = 주소를 인식해서 그 위치에 있는 컴포넌트로 들어가는 역할을한다. 즉 link만 설정한 경우 url만 바뀐다. */}
        <Route
          path={"add"}
          element={<TodoModal setList={setList} func={"Add"} />}
        />
        <Route
          path={"edit"}
          element={<TodoModal setList={setList} func={"Edit"} />}
        />
      </Routes>
    </div>
  );
}

const TodoModalBtnBox = styled.div`
  text-align: right;
`;
