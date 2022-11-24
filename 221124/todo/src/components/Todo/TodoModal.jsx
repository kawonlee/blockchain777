import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { STATUS, TodoBtn } from "../setting";
import { STATUSLIST } from "../setting";

export default function TodoModal({ setList, func }) {
  const index = useLocation().state?.index;
  const item = useLocation().state?.item;
  const [taskName, setTaskName] = useState(item ? item.taskName : "");
  const [status, setStatus] = useState(item ? item.status : STATUS.Todo);
  // 11번째 줄. 삼항연산자. 아이템이 있는가? 있는게 참이면 item의 status값을 사용한다. 수정할 때 수정을 위해 선택한 친구의 상태값에 체크되어있음. 아닌경우 초기값으로 ToDo에 체크
  return (
    <TodoModalBox>
      <TodoModalInnerBox>
        <div>
          <input
            type="text"
            placeholder="Task Name"
            value={taskName}
            // 가상돔에 있는 taskName의 값을 react가 실제 돔에 출력해주기 위함
            onInput={(e) => {
              setTaskName(e.target.value);
            }}
          />
        </div>
        <div>
          {STATUSLIST.map((item, index) => (
            <TodoBtn
              className={
                STATUSLIST[index].toLowerCase().replace(" ", "-") +
                (status === index ? " on" : "")
              }
              onClick={() => {
                setStatus(index);
              }}
              key={`TodoBtn=${index}`}
            >
              {item}
            </TodoBtn>
          ))}
        </div>
        <div>
          <Link to={"/"}>
            <TodoBtn
              onClick={() => {
                if (func === "Add")
                  setList((state) => [...state, { taskName, status }]);
                else if (func === "Edit") {
                  setList((list) => {
                    const before = list.slice(0, index);
                    const after = list.slice(index + 1);
                    return [...before, { taskName, status }, ...after];
                  });
                }
              }}
            >
              {func}
            </TodoBtn>
          </Link>
          <Link to={"/"}>
            <TodoBtn>Cancel</TodoBtn>
          </Link>
        </div>
      </TodoModalInnerBox>
    </TodoModalBox>
  );
}

const TodoModalBox = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TodoModalInnerBox = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  width: 50%;

  input {
    width: 100%;
    padding: 5px 10px;
  }

  & > div {
    margin: 10px 0;
    display: flex;
    justify-content: space-evenly;

    &:last-child {
      justify-content: space-between;
    }
  }
`;
