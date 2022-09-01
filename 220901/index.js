// 함수란 기능을 실행하는 코드에 이름을 지은 것이다.
// 변수가 데이터에 이름을 짓는다.
function test() {
  // function 이름 () {} 의 형태로 씁니다.
  // {}안에 실행할 코드가 들어갑ㄴ디ㅏ.
  // ()안에는 함수를 사용할 때 함수에게 줄 정보를 입력합니다.(매개변수라고함)

  console.log("넣고싶은걸 넣어보세요.");
}

function test1() {
  console.log("함수를 초기화합니다.");
  console.log("해당 형식으로 함수를 초기화하는 방식 : 함수 선언문");
  // function 이름() {} << 함수선언문이라고 한다.
}

let test2 = function () {
  console.log("함수를 초기화합니다.");
  console.log("해당 형식으로 함수를 초기화하는 방식 : 함수 표현식");
  //변수에게 함수를 보내는 것 = 함수 표현식
  // const/let 이름 = function(){} << 함수 표현식이라고 한다.
};

const test3 = () => {
  console.log("함수를 초기화합니다.");
  console.log("해당 형식으로 함수를 초기화하는 방식 : 화살표 함수");
  // const/let 이름 = () => {} << 화살표 함수라고 한다.
};

// 결과물 자체는 같음 -> 선언방식의 차이이다.
//함수도 변수처럼 불러와서 사용해야 하는 것이다!

test1();
test2();
test3();
// 함수를 호출합니다. 즉 함수에 있는 코드를 실행합니다.

//매개변수란, 함수에게 데이터를 전달한다.
// 함수가 사용해야 할 데이터를 호출할 때 전해준다.

function addFunc(firstNum, secondNum) {
  // firstNum, secondNum가 매개변수임.
  console.log(firstNum + secondNum);
}

addFunc(2, 3);
// 2가 firstNum이고 3이 secondNum이다.

function addFunc2(firstNum, secondNum) {
  return firstNum + secondNum;
  // return = 되돌린다. 정식명칭으론 반환값이라고 한다. addFunc2가 끝났을 때
  // 함수가 반출하는(돌려주는) 값이다.
}

let answer = addFunc2(6, 13);
console.log(answer);
// addFunc2 함수는 return이 있기 때문에 answer 변수에 addFunc2의 return값이 정의된다.
// 현재 19가 정의된다.

answer = addFunc(56, 3);
// addFunc 함수를 찾아가서 거기에 선언 된 코드를 실행한 것이기 때문에
// 브라우저 콘솔창에서 윗줄에 선언된 function addFunc() {} ~ 문장으로 갔다.
// 56, 3 값은 고대로 들고가서 매개변수 순서에 맞게 들어갔다.
console.log(answer);
// addFunc 함수는 return이 없기 때문에(돌려줄 값이 없기 때문에) answer 변수에 정의되지 않았다를 뜻하는
// undefined가 정의된다.

console.log(Math.random());
// 0~1 사이의 무작위 소숫점을 가져온다
console.log(console.log("아아아아"));
console.log(console.log(addFunc2(1, 2)));
// 제일 바깥의 콘솔 로그를 실행했더니 매개변수로 2번째 콘솔로그
// 2번째 콘솔로그를 실행 --> 매개변수로 addFunc2
// addFunc2를 실행 > return으로 1+2 = 3이 나옴
// 2번째 콘솔로그가 3을 로그로 출력
// 2번째 콘솔로그가 return값을 첫번째 콘솔로그가 로그로 출력하는데
// 콘솔로그는 return값이 없다 -> undefined

function sel(num) {
  switch (num) {
    case 1:
      return "검";
      // 아래의 console.log는 출력되지 않는다.
      // 이유는 함수는 return이 정해지는 순간 끝난다. return밑에 무슨 코드를 넣어도
      // 바보가 된다~
      //  console.log("검을 선택했어요.");
      break;
    case 2:
      return "활";
      break;
    case 3:
      return "방패";
      break;
    case 4:
      return "도끼";
      break;
    default:
      return false; // << case 이외의 값이 들어가면 false가 반환된다.
  }
  //console.log("dhkdkdkdk");
  // 이 console.log도 출력되지 않는다.
  // 이유는 이미 switch문 안에서 default return선에서 끝나기 때문이다.
}

let playerSel;
// 플레이어 선택을 받는다, 처음에 선언만 했기 때문에 undefined 다.
do {
  playerSel = prompt("무기를 선택하세요.");
  // 플레이어의 선택을 받는다.
  playerSel = sel(parseInt(playerSel));
  // sel 함수를 호출하며 위에서 받은 플레이어의 선택을 정수로 바꾸어 전달한다.
  // sel 은 받은 정수(매개변수이자 플레이어가 선택한 숫자)를 사용해서 값을 반환한다.
  // sel이 반환한 값을 playerSel에 다시 정의한다. (재정의)
} while (!playerSel);
// playerSel이 false면 계속 반복한다.
console.log(playerSel);
