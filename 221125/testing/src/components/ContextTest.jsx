// useContext 라는 Hook을 사용한다.
// Context란 무언인가? 전역 상태 관리이다.
// React에서 사용하는 변수, 상태값들은 거의 대부분이 지역 변수, 상태값(state)이다.
// 특히! 상태값은 무조건 지역 스코프에 포함되어 외부로 나갈 수 없다. >> 지역 변수와 같다.
// 전역 스코프에서 상태값을 쓰고싶다. => 이를 위해 Context라는 녀석이 나왔다.

import { useState } from "react";
import { Component, useContext } from "react";
import { createContext } from "react";

const TestContext = createContext();

export default function ContextTest() {
  const [num, setNum] = useState(12);
  return (
    <TestContext.Provider value={{ num, setNum }}>
      {/* {}한 번은 자바스크립트 변수를 가져오는 것. {{}} 하나로 묶은 이유는 하나밖에 못보내기 때문에 객체 또는 배열로 보낸다. */}
      {/* 하위 컴포넌트 내에서 어디서든지 쓸 수 있도록 변수를 쓸 수 있도록 하기 위해 Provider 컴포넌트로 감싼다. */}
      {/* Provider 컴포넌트의 value props를 사용해 전역 변수로 사용할 데이터 값을 정의한다. */}
      <Child1 />
    </TestContext.Provider>
  );
}

function Child1({}) {
  return <Child2 />;
}

function Child2({}) {
  return <Child3 />;
}

function Child3({}) {
  const item = useContext(TestContext);
  return (
    <div
      onClick={() => {
        item.setNum(item.num - 1);
      }}
    >
      child3 {item.num}
      <Child4 />
    </div>
  );
}

function Child4({}) {
  return <Child5 />;
}

function Child5({}) {
  const item = useContext(TestContext);
  // Context를 가져오기 위해 useContext를 사용한다.
  // 매개변수로 생성한 Context를 전달한다.

  return (
    <div>
      <div
        onClick={(e) => {
          e.stopPropagation();
          item.setNum(item.num + 1);
        }}
      >
        child5{item.num}
      </div>
      <Child6 />
    </div>
  );
}

class Child6 extends Component {
  render() {
    return (
      <TestContext.Consumer>
        {(item) => (
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            Child6 {item.num}
          </div>
        )}
        {/* 상단에 정의한 value값이 item이다. */}
      </TestContext.Consumer>
    );
  }
}

// 함수형은 변수에 선언해서 useContext를 사용하는 방식과 Consumer를 통해 불러오는 방식 둘 다 가능하다.
// 클래스형은 Counsumer를 통해 불러오는 방식만 사용가능하다.
// 버블링 : 위로 올라가는 것 / 버블링을 막는 것 : 위로 올라가는 애한테 걸어준다. 하위컴포넌트가 실행되면 타고 올라가면서 상위컴포넌트가 실행된다.
