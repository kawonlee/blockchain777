// let firstNum = 0;
// let secondNum =0;

// function number(firstNum){
//     do{
//         switch (firstNum) {

//         }

//     } while (firstNum < 10);
// }

let firstNum, secondNum;
let count = 0;

// if (count == 1) {
//   firstNum;
//   console.log("첫번째 고른 숫자는" + firstNum + "입니다.");
// } else if (count == 2) {
//   secondNum;
// }
let main;
function num(main) {
  count++;
  if (count == 1) {
    main = firstNum;
    console.log("첫번째 고른 숫자는" + firstNum + "입니다.");
  } else if (count == 2) {
    main = secondNum;
    console.log("두번째 고른 숫자는" + secondNum + "입니다.");
  }
}

function zero() {
  count++;
  if (count == 1) {
    firstNum = 0;
    console.log("첫번째 고른 숫자는" + firstNum + "입니다.");
  } else if (count == 2) {
    secondNum = 0;
    console.log(`두번째 고른 숫자는 ${secondNum} 입니다.`);
  }
}
function one() {
  count++;
  if (count == 1) {
    firstNum = 1;
    console.log("첫번째 고른 숫자는" + firstNum + "입니다.");
  } else if (count == 2) {
    secondNum = 1;
    console.log("두번째 고른 숫자는" + secondNum + "입니다.");
  }
}

function two() {
  count++;
  if (count == 1) {
    firstNum = 2;
    console.log("첫번째 고른 숫자는" + firstNum + "입니다.");
  } else if (count == 2) {
    secondNum = 2;
    console.log("두번째 고른 숫자는" + secondNum + "입니다.");
  }
}

function three() {
  count++;
  if (count == 1) {
    firstNum = 3;
    console.log("첫번째 고른 숫자는" + firstNum + "입니다.");
  } else if (count == 2) {
    secondNum = 3;
    console.log("두번째 고른 숫자는" + secondNum + "입니다.");
  }
}

function four() {
  count++;
  if (count == 1) {
    firstNum = 4;
    console.log("첫번째 고른 숫자는" + firstNum + "입니다.");
  } else if (count == 2) {
    secondNum = 4;
    console.log("두번째 고른 숫자는" + secondNum + "입니다.");
  }
}

function five() {
  count++;
  if (count == 1) {
    firstNum = 5;
    console.log("첫번째 고른 숫자는" + firstNum + "입니다.");
  } else if (count == 2) {
    secondNum = 5;
    console.log("두번째 고른 숫자는" + secondNum + "입니다.");
  }
}

function six() {
  count++;
  if (count == 1) {
    firstNum = 6;
    console.log("첫번째 고른 숫자는" + firstNum + "입니다.");
  } else if (count == 2) {
    secondNum = 6;
    console.log("두번째 고른 숫자는" + secondNum + "입니다.");
  }
}

function seven() {
  count++;
  if (count == 1) {
    firstNum = 7;
    console.log("첫번째 고른 숫자는" + firstNum + "입니다.");
  } else if (count == 2) {
    secondNum = 7;
    console.log("두번째 고른 숫자는" + secondNum + "입니다.");
  }
}

function eight() {
  count++;
  if (count == 1) {
    firstNum = 8;
    console.log("첫번째 고른 숫자는" + firstNum + "입니다.");
  } else if (count == 2) {
    secondNum = 8;
    console.log("두번째 고른 숫자는" + secondNum + "입니다.");
  }
}

function nine() {
  count++;
  if (count == 1) {
    firstNum = 9;
    console.log("첫번째 고른 숫자는" + firstNum + "입니다.");
  } else if (count == 2) {
    secondNum = 9;
    console.log("두번째 고른 숫자는" + secondNum + "입니다.");
  }
}

function sum() {
  if (count == 2) {
    alert(`계산된 값은 ${firstNum + secondNum}입니다.`);
  }
}

function minus() {
  if (count == 2) {
    alert(`계산된 값은 ${firstNum - secondNum}입니다.`);
  }
}

function div() {
  if (count == 2) {
    alert(`계산된 값은 ${firstNum / secondNum}입니다.`);
  }
}
function mul() {
  if (count == 2) {
    alert(`계산된 값은 ${firstNum * secondNum}입니다.`);
  }
}
