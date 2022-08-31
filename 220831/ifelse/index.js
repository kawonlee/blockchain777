console.log("이것은 개발자 도구 콘솔창에 로그를 남기는 것이다.");
console.log("fabicon 어쩌구 하는 오류는 무시해라.");

console.log('1 === "1" :' + (1 === "1"));

// 조건문, if && else if && else  --- else if는 자바스크립트에서는 명령어 선언할 때 띄어쓴다.
if (1 < 2) {
  // 만약에 ()안이 참이면 {}안의 코드를 실행한다.
  console.log("1 < 2는 true다");
} else {
  console.log("1 < 2는 false다");
  //   if의 () 안에 있는 조건이 거짓이면 {} 안의 코드를 실행한다.
}

if (1 < 2) console.log("1 < 2는 true다");
// if에서 조건이 참이어서 해당 코드가 실행되면 else if, else 등 아래의 코드를 건너 뛴다.
// 즉, 아래의 코드는 실행하지않는다.
else console.log("1 < 2는 false다");
// 위의 if, else if의 조건이 모두 충족되지 않았을 때 최후의 보루로 실행되는 코드다.
// 한줄의 코드면 {}가 없어도 된다. (대충 조건명령어 뒤에 문장이 하나여야한다.)

// if (1 < 2) console.log("1 < 2는 true다");
// console.log('asdf')
// else console.log("1 < 2는 false다");
// if와 elseif, else는 함께 붙어다녀야한다.

// else if는 else와 if가 합쳐진 것
if (1 > 2) {
  console.log("여기 조건이 거짓이면서");
} else if (2 < 3) {
  console.log("여기 조건이 참이면 else if의 {}코드가 실행된다.");
} else {
  console.log("위의 if, else if의 모든 조건이 거짓일 때 실행된다.");
}

console.log(1 < 2 ? "이것참이야" : "이건 거짓이야");
// 조건 ? 참일때 : 거짓일때
// 삼항연산자

let test1 = 10;
let test2 = 7;

if (test1 < test2) {
  console.log("꼴은 좀 보자.");
} else {
  console.log("꼴도 보기 싫다.");
}

let inputData;
// const inputData = prompt("넣고 싶은 값을 입력해보세요.");
// switch는 여러 조건을 한번에 확인한다.
// prompt는 받는 내용을 전부 string처리
// 숫자로의 형변환 -> Number(***)  || +*** || parseInt(***) || parseFloat(***)
// 우리의 적 NaN
switch (inputData) {
  // switch의 ()안에 있는 변수의 값을 확인한다.
  case "1":
    // case는 ()안에 있는 변수의 값이 같은지 확인한다.
    console.log("1을 넣었어.");
    break;
  // break는 해당 명령어가 있는 지점에서 코드를 정지한다.
  // 반복문에서 다시 하고, 더 확실하게 알 수 있다.
  case "2":
    console.log("2을 넣었어.");
    break;
  case "3":
    console.log("3을 넣었어.");
    break;
  case "4":
    console.log("4을 넣었어.");
    break;
  default:
    // if else 에서 else와 같은 놈이다. 즉 case에서 걸리지 않으면 실행되는 마지막 보류이다.
    console.log("1~4까지만 넣어라");
}
