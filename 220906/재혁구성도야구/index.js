// let comArr = [];
// for (i = 0; i < 3; i++) {
//   comNum = parseInt(Math.random() * 9 + 1);
//   comArr.push(comNum);
// }
// console.log(comArr);

// let randomIndexArray = [];
// for (i = 0; i < 3; i++) {
//   randomNum = parseInt(Math.random() * 9 + 1);
//   randomIndexArray.push(randomNum);

// }
// console.log(randomIndexArray);

//내가 배열로 랜덤숫자 뽑는다고 끄적여본 내용 (14줄까지)

const comSel = [];

//Math.random 메소드는 0 <= number  && number < 1
function comSelectFunc() {
  for (
    let tempNum = parseInt(Math.random() * 10);
    comSel.length < 3;
    tempNum = parseInt(Math.random() * 10)
  ) {
    if (!comSel.includes(tempNum)) comSel.push(tempNum);
    //중복방지를 위한 문장 includes 메소드는 매개변수가 배열에 포함되어있는지
    // Boolean 값을 반환(리턴)해준다.
  }
}
// for(변수 초기화; 조건; 반복 후 변경점(변경된 상황이 들어감))
// 1. for는 "변수 초기화"를 실행하고, 조건을 확인 후 내용을 실행한다.
// 2. 내용 실행이 끝나면 "반복 후 변경점" 코드를 실행한다.
// 3. "반복 후 변경점" 코드 실행 후 조건을 확인하여 true면 내용을 실행한다.
// 이후 2로 돌아가서 다시 진행한다. (조건이 false이 될 때 까지)

function comSelectFunc1() {
  for (; comSel.length < 3; ) {
    // for의 변수 초기화와 반복 후 변경점을 삭제
    const tempNum = parseInt(Math.random() * 10);
    // for 반복 내용에 tempNum을 초기화하여 comSel 배열 확인 후 배열에 추가하도록 수정
    // 위(comSelectFunc)에서 for 변수 초기화는 let인데 여기서는 왜 const인지?
    // comSelectFunc에서는 변수 초기화 후에 해당 변수를 계속 재정의하여 확인해야하지만
    // 여기서(comSelectFunc1)는 반복 내용에서 변수를 초기화 하기 때문에 재정의가 필요치
    // 않아 const가 가능하다.
    console.log(tempNum);
    if (!comSel.includes(tempNum)) comSel.push(tempNum);
    //중복방지를 위한 문장 includes 메소드는 매개변수가 배열에 포함되어있는지
    // Boolean 값을 반환(리턴)해준다.
  }
}

function comSelectFunc2() {
  while (comSel.length < 3) {
    // comSelectFunc1의 for 조건문은 조건만 남아있기 때문에 while로 대체 가능하다.
    const tempNum = parseInt(Math.random() * 10);
    console.log(tempNum);
    if (!comSel.includes(tempNum)) comSel.push(tempNum);
  }
}

// comSelectFunc();
// comSelectFunc1();
comSelectFunc2();
//함수를 호출함으로써 컴퓨터의 숫자를 3개 정한다. 3개의 함수를 뭘 선택해도 상관없음
// 단 여러개 호출 시 아래에서 호출된 것은 무시됨
// 무시되는 이유는 조건이 같기 때문에 위 조건에 충족하지 않을 시 아래의 조건 또한 충족
// 되지 않아 실행되지 않는다.

console.log(comSel);
let count = 0;
while (true) {
  let playerSel = [];
  while (playerSel.length < 3) {
    const tempInput = prompt(
      "3자리의 숫자를 입력하시오. \n0으로 시작가능 / 중복 숫자 불가"
    );
    // 입력 창에 대해서 취소를 누르면 tempInput은 정의되지않아 undefined를 갖게 된다.
    // 그래서 length를 갖지 못해 if에서 문제가 생기게 된다.
    if (!tempInput) {
      // tempInput이 undefined, '' 일 때 false를 갖게 되며 !를 사용해 부정함으로써
      // 빈값을 입력하거나 취소를 누를 시 게임을 종료한다.
      alert("게임을 종료합니다.");
      break;
    }
    if (tempInput.length != 3 || isNaN(parseInt(tempInput))) {
      // isNaN 함수는 매개변수가 NaN(즉, 숫자가 아닌 문자를 강제로 숫자로 바꿨는지 확인해줌)
      continue;
      // 아래의 코드를 실행하지 않고 반복을 다시 시작한다.
      // 쉽게 설명하면 밑에 코드를 다 무시하고 위로 올라감 (for나 while에서만 시작)
    }
    tempInput.split("").forEach((item) => {
      // forEach는 배열의 아이템을 하나하나 가져와서 매개변수 함수에 전달하여 함수를 실행한다.
      // (item) => {내용} << 화살표 함수이다.
      // item은 tempInput.split(') 배열의 하나하나의 아이템이다.
      // function(item){내용}으로 대체 가능하다. (97~99번 줄)
      // tempInput.split("").forEach(function(item) {
      //   if (!playerSel.includes(parseInt(item))) playerSel.push(parseInt(item));
      // });
      if (!playerSel.includes(parseInt(item))) playerSel.push(parseInt(item));
      // 컴퓨터가 선택한 랜덤 수는 정수기 때문에 플레이어가 입력한 숫자 또한 정수로 정의한다.
      // 컴퓨터가 선택한 랜덤 수와 마찬가지로 중복되면 안되기 때문에 playerSel배열에 숫자가 없는지 확인 후 추가한다.
    });
    console.log(playerSel);
    // 위의 forEach는 아래의 코드로 대체할 수 있다.

    // const tempArr = tempInput.split("");
    // // tempArr이라는 변수로 배열을 정의한다. << 그때그때마다 문자열(tempInput)을 split
    // // 메소드를 사용하여 자르면 시간이 그만큼 늘어난다.
    // for (let i = 0; i < tempArr.length; i++) {
    //   // 컴퓨터는 숫자를 0부터 세기 때문에 i(index)를 0부터 시작하여 tempArr 배열의 끝까지(길이 -1)
    //   // 코드를 실행한다.
    //   if (!playerSel.includes(parseInt(tempArr[i])))
    //     playerSel.push(parseInt(tempArr[i]));
    // }
    // console.log(playerSel);

    if (playerSel.length != 3) playerSel = [];
  }

  if (!playerSel.length) break;
  // 입력값이 없을 경우 playerSel은 빈 배열([])이 됨으로 배열의 길이를 확인하여 break로 while을 종료해준다.

  console.log("입력된 정상적인 플레이어의 선택 : " + playerSel);

  let strike = 0;
  let ball = 0;
  let out = 0;
  let tempNumber = comSel[0];
  if (playerSel[0] == tempNumber) {
    strike++;
  } else if (playerSel[1] == tempNumber || playerSel[2] == tempNumber) {
    ball++;
  } else {
    out++;
  }
  // 첫번째 자리를 확인한다.

  tempNumber = comSel[1];
  if (playerSel[1] == tempNumber) {
    strike++;
  } else if (playerSel[0] == tempNumber || playerSel[2] == tempNumber) {
    ball++;
  } else {
    out++;
  }
  // 두번째 자리를 확인한다.

  tempNumber = comSel[2];
  if (playerSel[2] == tempNumber) {
    strike++;
  } else if (playerSel[0] == tempNumber || playerSel[1] == tempNumber) {
    ball++;
  } else {
    out++;
  }

  if (strike == 3) {
    //strike가 3이면 게임을 종료한다.
    alert(++count + "번 만에 성공하셨네요^ㅁ^");
    break;
  }
  // strike가 3일 경우에 위에서 break로 while문이 종료되어 아래 코드는 실행되지 않는다.
  // 아래 코드는 coount를 증가시키고 count, ball, out을 표기해준다.

  alert(
    ++count +
      "번 시도함 / strike : " +
      strike +
      " / ball : " +
      ball +
      " / out : " +
      out
  );
  // 세번째 자리를 확인한다.
}

// while(true) { // 왜 true로 넣었는가?
//   // strike를 넣고 싶으면 while문 밖에서 선언해야된다.
//   break;
//   // 왜 break로 멈추나요? true일때만 break로 멈출 수 있나요?
//   // break와 true는 아무관계가 없다. 의미 없는 조건을 넣어주고(true) if문에 조건에 값을 넣어줘서 while 문을 끝낸 것이다.
// }

// let tempCount = 0;
// while (tempCount < 100) {
//   console.log(++tempCount);
//   if (tempCount == 10) break;
// }
// 해당 문장은 while문 조건에 tempCount를 100 미만으로 잡았지만, while문 안에 if문에 temCount를 10으로 주고 break를 검으로써 콘솔로그에는 10까지만 나온다.
