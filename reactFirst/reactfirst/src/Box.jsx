import React from "react"; // 리액트 파일이라는 뜻

function Box(props) {
  const clickMe = () => {
    alert("리액트 강의 드가자~");
  };
  return (
    <div>
      <div className="box">
        {props.num} {props.name}
        <button onClick={clickMe}>클릭해라</button>
      </div>
      {/* props는 객체 타입 -> 정해준 이름으로 불러오면 끝 */}
    </div>
  );
}

export default Box;
// Box라는 Component를 내보낼 준비가 되었다.
