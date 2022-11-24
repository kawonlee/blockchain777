import "./App.css";
import React, { useState } from "react";

function App() {
  const [color, setColor] = useState(0);
  let num = 0;

  const increase = () => {
    num += 1;
    console.log(num);
  };
  return (
    <div className="App" onClick={increase}>
      함수형 :{" "}
      <ChildFunc text="이가원" num={num} color={color} setColor={setColor} />
      클래스형 : <ChildComp text="string" num={num} color={color} />
    </div>
  );
}

export default App;

class ChildComp extends React.Component {
  constructor(props) {
    // props란 부모 컴포넌트가 전달한 데이터
    // 보통은 읽기 전용으로 쓴다. << 재정의를 하지 않는다. 받아온 그대로 씀
    super(props);
    // 클래스형 컴포넌트에서는 constructor(생성자)에서 매개변수로 받아 상속 부모 클래스(React.Component)의 constructor(super)를 호출한다.
    // 이후 this.props를 사용하여 호출할(가져올) 수 있다.
    console.log(this.props);
  }
  render() {
    return (
      <div style={{ color: "#" + this.props.color.toString(16) }}>
        {/* toString(여기에 숫자가 들어오면) 해당 진수로 바꿔준다.
            본문에선 16진수로 바꿔준다는 뜻. ex) #000000, #FFFFFFF 
            rgb(255, 255, 255), rgba(255,255,255,1) red green blue alpha
            (opacity : 0 ~ 1)
            #00ff00 << green 두개씩 노나서 r g b를 뜻한다.*/}
        {this.props.num}
      </div>
    );
  }
}

function ChildFunc(props) {
  // 함수형 컴포넌트에서는 매개변수로 바로 받는다.
  // {}를 사용하여 구조 분해 할당을 할 수 있다.
  // function ChildFunc({})
  // const {} = props와 같다.
  console.log(props);

  const changeColor = () => {
    console.log(props.color);
    // props.setColor(props.color + 100);
    props.setColor((color) => color + 100);
    // props의 setColor메서드를 호출한다.
    // state가 뭔가요?
    // setState(변경할 값)
    // setState((state) => {  << 여기서의 state는 기존의 값
    // return 변경할 값
    //})
  };
  return <div onClick={changeColor}>{props.num}</div>;
}
