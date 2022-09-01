let firstNum = 0;
let secondNum = 0;
// 여기서 선언한 변수와 함수의 ()안에 있는 값은 엄연히 다르다.(둘다 변수긴함/ 근데 다른녀석임)

function addFN() {
  firstNum++;
  // firstNum을 하나 증가시킨다.
  console.log("firstNum :" + firstNum);
  // firstNum을 콘솔창에 출력한다.
}

const addSN = function () {
  secondNum++;
  console.log("secondNum :" + secondNum);
};

const sum = () => {
  console.log(firstNum + secondNum);
};

function examAddFN(firstNum) {
  // 매개변수는 위에 변수와 다른 변수가 된다.
  // 1번줄에서 선언한 firstNum와 매개변수로 선언된 firstNum은 엄연히 다른 녀석이다.
  console.log(firstNum);
  firstNum++;
  firstNum += 1;
  firstNum = firstNum + 1;
  console.log(firstNum);
}

examAddFN(); // 여기서 매개변수가 없음, 그래서 20번째 줄의 firstNum은 Undefined가 됨
