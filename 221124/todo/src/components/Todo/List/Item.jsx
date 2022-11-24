import styled from "styled-components";
import { TodoBtn } from "../../setting";
import penImg from "./pencil-square.svg";
import trashImg from "./trash.svg";
import { Link } from "react-router-dom";
import { STATUSLIST } from "../../setting";

export default function Item({ item, index, setList }) {
  return (
    <ItemTr>
      <td>{index + 1}</td>
      <td>{item.taskName}</td>
      <td>
        <TodoBtn
          className={STATUSLIST[item.status].toLowerCase().replace(" ", "-")}
          style={{ cursor: "default" }}
        >
          {STATUSLIST[item.status]}
        </TodoBtn>
      </td>
      <td>
        <Link to={"/edit"} state={{ index, item }}>
          <TodoBtn className="sky">
            <img
              src={penImg}
              alt="dl"
              style={{
                filter:
                  " invert(82%) sepia(13%) saturate(1377%) hue-rotate(165deg) brightness(93%) contrast(98%)",
              }}
            ></img>
          </TodoBtn>
        </Link>
      </td>
      <td>
        <TodoBtn
          className="todo"
          onClick={() => {
            setList((list) => {
              const before = list.slice(0, index);
              const after = list.slice(index + 1);
              return [...before, ...after];
            });
          }}
        >
          <img
            src={trashImg}
            alt="dl"
            style={{
              filter:
                "invert(54%) sepia(18%) saturate(0%) hue-rotate(198deg) brightness(90%) contrast(90%)",
            }}
          ></img>
        </TodoBtn>
      </td>
    </ItemTr>
  );
}

const ItemTr = styled.tr`
  text-align: center;
  height: 50px;

  td {
    border-bottom: 1px solid lightgray;
  }
`;
