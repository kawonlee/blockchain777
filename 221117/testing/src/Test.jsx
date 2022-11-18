import React, { useState } from "react";

export default function Test({ test, children }) {
  //   let count = 0;
  // props다, 나중에 다시 설명
  // props는 상위 Component에서 설정된 값이다.
  // props.children은 상위 Component에서 해당 Component의 자식으로 설정된 값이다.
  const [count1, setCount1] = useState(0); // 배열도 구조분해할당이 가능하다.
  //   const tempArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const testArr = [
    { title: "누구세요", text: " 이가원입니다.", userName: " 이가원" },
    { title: "저는", text: " 박혜림입니다.", userName: " 가수왕" },
  ];
  return (
    <>
      <div style={{ fontSize: "30px", backgroundColor: "red" }}>
        {test} {children}
      </div>
      <div id="main">
        <div>
          {testArr.map((item, index) => {
            return (
              <div key={`testing-${index}`}>
                {`${index + 1}. `}
                {item.title}
                {item.text}
                {item.userName}
              </div>
            );
          })}
        </div>
        <div>
          ID:
          <input
            id="id-info"
            type="text"
            style={{
              borderRadius: "5px",
              border: "2px solid aqua",
              margin: "10px",
            }}
          />
          Password:
          <input
            id="pw-info"
            type="password"
            style={{
              borderRadius: "5px",
              border: "2px solid aqua",
              margin: "10px",
            }}
          />
        </div>
      </div>

      {/* <ul>
        {tempArr.map((item, index) => {
          return <li key={`test-${index}`}>{item}</li>;
        })}
      </ul> */}
      <button
        onClick={function () {
          console.log(count1);
          //   count++;
          setCount1(count1 + 1);
        }}
      >
        {count1}
      </button>
    </>
  );
  // 빈 태그가 가능하다.
  // HTML 태그의 형제 방식으로 return하지 못한다. 하나로 구조를 묶어서 return해야한다.

  // HTML 문법 내에 Javascript의 변수 or 함수 등등을 사용할 경우 {}로 묶어준다.
}

// Component란 여러 개의 함수들을 모아 하나의 특정한 기능을 수행할 수 있도록 구성한 작은 기능적 단위
// React는 View를 위한 라이브러리 >> 즉, FrontEnd에 보여주기 위한 라이브러리 >> 랜더링이 주된 기능 >> 기능은 div 등등의 Element 구조로 많이 나뉘어진다.
