// React의 구조
// Component란? << 기능적으로 최소 단위
// - 기능을 포함하는(JS) HTML 구조 단위 -> JS + HTML
//  - 컴포넌트는 항상 HTML 구조를 return해야한다.
//    - 함수형에서는 함수 자체가 return된다.
//    - 클래스형에서는 render 메서드에서 return된다.
// 컴포넌트(root)
//  - App
//    - UserBox
//      - Regist
//      - LogIn
//      - LogOut
//    - BoardBox

import React from "react";
import "./App.css";

function App() {
  let num = 1;
  let bool = true;
  let str = "문자열";
  let arr = [1, 2, 3, 4];
  let obj = { name: "객체" };
  let nul = null;
  let und = undefined;

  // '값을 내보낸다, 가져온다' 얘기할 수 있는 것들과 if, for, while 의 차이가 무엇인가?
  // '값을 내보낸다, 가져온다' << 변수, 함수 << 수다.
  // if 조건문, for, while 반복문 << 말 그대로 문장일 뿐이다.

  function testing() {
    return "함수 테스팅";
  }

  function increase() {
    num = num + 1;
    console.log(num);
  }

  let arrDiv = [
    <div key={0}>1</div>,
    <div key={1}>2</div>,
    <div key={2}>3</div>,
    <div key={3}>4</div>,
  ];

  function arrFunc(arr) {
    const tempArr = [];
    // for (let i = 0; i < arr.length; ++i) {
    //   tempArr.push(<div key={i}>{arr[i]}</div>);
    // }

    arr.forEach((item, index) => {
      tempArr.push(<div key={index}>{item}</div>);
    });
    return tempArr;
    // if 조건문을 쓰고싶으면 함수안에 if문을 통해 원하는 값을 조건에 따라 return해주면 사용할 수 있다.
  }

  return (
    <div className="App">
      <App1 />
      <div onClick={increase}>{num}</div>
      <div>{bool}</div>
      <div>{str}</div>
      <div>{arr}</div>
      <div>{obj.name}</div>
      {/* obj 자체는 출력이 안된다. 키 이름을 통해 단일 출력은 가능하다. */}
      {/* {}는 값을 가져야만 출력할 수 있다. 단 object의 경우에는 출력 방법이 모호하기 때문에 출력하지 못한다. */}
      <div>{nul}</div>
      <div>{und}</div>
      <div>{!bool ? "true" : "false"}</div>
      <div>{testing()}</div>
      <div>
        {arrDiv} {arrFunc(arr)}{" "}
        {arr.map((item, index) => {
          return <div key={index}>{item}</div>;
        })}
      </div>
    </div>
  );
  // HTML 태그 내에서 {}를 사용하여 변수를 출력할 수 있다.
}

export default App;

class App1 extends React.Component {
  // 우리가 컴포넌트를 만들 때 컴포넌트의 모든 코드를 알고 있나? << 모른다. 그렇기 때문에 상속을 받도록 한다.
  num = 0;
  // 여기서 정의한 것은 this의 property로 추가된다.
  constructor(props) {
    // 클래스를 생성할 때 실행되는 코드
    super(props);
    console.log("constructor");
    console.log(this);
    // 상속을 받았을 때 부모의 해당 메서드를 실행한다. << constructor

    this.state = { name: "상태 값", num: 0, classNames: ["app3"] };
  }

  divRef = React.createRef(); // useRef

  componentDidMount() {
    console.log("componentDidMount");
    console.log(this);
    console.log(this.num);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
    console.log(this);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    console.log(this);
  }

  increaseFunc() {
    console.log(this);
    console.log(this.state.num);
  }

  increase = () => {
    // this.num = this.state.num + 1;
    this.setState({ num: this.state.num + 1 });
    console.log(this.state.num);
    // this.state.name = this.state.name + "1";
    // "상태값" + "1" => "상태값1"
    // 여기서의 this App1이 된다.
  };

  changeName = () => {
    // this.state.name = this.state.name + "1" // << 이건 권장하지 않는다.
    // '상태 값' + '1' > '상태값1'
    this.setState({ name: this.state.name + "1" });
    console.log(this.state.name);
    console.log(this.divRef);
  };
  // this를 최상단을 향하게 하고 싶으면 화살표 함수로 기재한다.
  // 화살표 함수 사용 시 bind 메서드를 적지 않아도 된다.
  // 일반 함수형의 this는 그 함수 자체의 메서드이다.  ex) increase() {}
  // 호출하는 곳에서 bind로 this를 클래스에 전달해야한다.

  changeClass = () => {
    if (this.state.classNames.indexOf("app4") === -1)
      this.setState({ classNames: [...this.state.classNames, "app4"] });
    else this.setState({ classNames: [...this.state.classNames.slice(0, 1)] });
  };

  render() {
    console.log("render");
    console.log(this);
    return (
      <>
        <div onClick={this.increaseFunc.bind(this)}>{this.state.num}</div>
        <div onClick={this.increase}>{this.state.num}</div>
        <div ref={this.divRef} onClick={this.changeName}>
          {this.state.name}
        </div>
        <div
          className={this.state.classNames.join(" ")}
          onClick={this.changeClass}
        >
          {" "}
          클래스 이름 설정 테스트중
        </div>
      </>
    );
  }
}
