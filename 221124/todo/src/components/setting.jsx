import styled from "styled-components";
// export는 여러개 내보낼 수 있다.
// default는 파일 하나당 하나만 가능하다.
// default를 쓰지 않으면 {}를 사용해 구조분해할당 형식으로 가져와야한다.

// 여러개를 내보낼 때 default를 빼고 불러오는 곳에서 구조분해할당 느낌으로 불러온다. 그래서 파일 이름을 소문자로 했다. 컴포넌트를 여러개 만들 예정
export const TodoBtn = styled.div`
  display: inline-block;
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  color: black;

  &.todo {
    color: gray;
    border-color: gray;
  }

  &.in-progress {
    color: orange;
    border-color: orange;
  }

  &.complete {
    color: green;
    border-color: green;
  }

  &.sky {
    color: skyblue;
    border-color: skyblue;
  }

  &.on {
    color: black;

    &.todo {
      background-color: gray;
    }

    &.in-progress {
      background-color: orange;
    }

    &.complete {
      background-color: green;
    }
  }
`;

// 전부 대문자인 변수명 : 고정된 설정값
// 개발자들끼리의 규칙이다.
export const STATUS = {
  Todo: 0,
  InProgress: 1,
  Complete: 2,
};

export const STATUSLIST = ["ToDo", "In Progress", "Complete"];
