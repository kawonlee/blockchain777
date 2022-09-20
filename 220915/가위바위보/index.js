const STATE = {
  DEFAULT: 0,
  START: 1,
  SELECT: 2,
  COIN: 3,
};

const mainImage = document.getElementById("computer-img");
// const scissors = document.getElementById("scissors"); // 피드백 - 필요없음
// const rock = document.getElementById("rock"); // 피드백 - 필요없음
// const paper = document.getElementById("paper"); // 피드백 - 필요없음
// const boxCoin = document.getElementsByClassName("coin-box"); // 피드백 - 필요없음
// 5번째 줄. 코인박스를 위해 classname불러온것을 변수로 초기화했다.
const coinArr = [1, 4, 7, 8, 3, 1, 2, 3, 6, 9, 1, 4, 22, 11, 2];
console.log(coinArr);

// const coinBox = []; // 피드백 - 필요없음
// // console.log(boxCoin[0].innerText); // 피드백 - 필요없음
// for (let i = 0; i < 15; i++) { // 피드백 - 필요없음
//   coinBox.push(parseInt(boxCoin[i].innerText)); // 피드백 - 필요없음
// } // 피드백 - 필요없음
// console.log(coinBox); // 피드백 - 필요없음

// const imageArr = ["./num1.jpg", "./num2.jpg", "./num3.jpg"]; // 피드백 - 필요없음

// const comSet = new Set();
// while (comSet.size < 3) {
//   comSet.add(parseInt(Math.random() * 3 + 1));
// }
// let comSel = [...comSet];
// // let, const 등 선언 명령어를 사용하지 않을시 자동으로 var로 선언한 취급을 한다.

// console.log(comSel);

// const Comsel = [0, 1, 2]; // 피드백 - 필요없음
// 가위 =0 바위 =1 보 =2
// let comSel = 0; //  피드백 - 컴퓨터의 선택이 필요 -> 필요없어짐
let imageIndex = 0;

const changeImage = function () {
  // mainImage.setAttribute("src", imageArr[imageIndex]);
  mainImage.setAttribute("src", `./num${imageIndex + 1}.jpg`);
  // imageIndex++;
  imageIndex = (imageIndex + 1) % 3;
  // if (imageIndex >= imageArr.length) {
  //   imageIndex = 0;
  // }
};

let changeImgId = setInterval(changeImage, 1000);
// 컴퓨터의 가위바위보 이미지를 바꿔주는 함수를 변수에 초기화해준다.
let state = STATE.DEFAULT; // 피드백 - 상태변환으로 수정했다.
let coin = 1000;
console.log(typeof coin);

const coinElem = document.getElementById("coin"); // 피드백 - 이후 계속 변화시키기 위해 필요
// document.getElementById("coin").innerText = coin;
const changeCoin = (changeCoin = 0) => {
  // 피드백 - 코인 변경 시에 대한 함수 추가
  if (isNaN(parseInt(changeCoin))) return;
  coin += changeCoin;
  coinElem.innerText = coin;
  if (changeCoin > 0) state = STATE.COIN;
};
changeCoin();

// let clickFlag = false; // 피드백 - 상태 확인으로 수정
// start버튼을 한 번 눌러서 실행 후 추가적으로 눌리지 않도록 막는 변수를 초기화했다.
// const gameStart = function () { // 피드백 - 필요없음
document.getElementById("start-button").onclick = () => {
  // if (clickFlag == true) return; // 피드백 - 상태 확인으로 수정
  // clickFlag 값이 true이면 return해주겠다.
  if (state !== STATE.DEFAULT) return;
  // console.log(`${(coin -= 100)}`); // 피드백 - 필요없음
  // document.getElementById("coin").innerText = coin; // 피드백 - 함수로 수정
  changeCoin(-100);
  // clickFlag = true; // 피드백 - 상태로 수정
  state = STATE.START;
  // onclick함수가 한바퀴 돌면 clickFlag값은 true가 된다.
  // 따라서 함수가 한 번 더 실행되면 return값을 반환하면서 함수를 끝낸다.
  clearInterval(changeImgId);
  // setInterval 함수를 멈춰준다.
  changeImgId = setInterval(changeImage, 300);
  // start버튼을 눌렀을 때 가위바위보 이미지가 빠르게 바뀌도록 선언해준다.
};
// }; // 피드백 - 필요없음
// gameStart(); // 피드백 - 필요없음
// start버튼을 눌러 게임 시작

/* 피드백 - 하나하나 할 필요 없음
// console.log(scissors);
// 플레이어가 가위버튼을 눌렀을때
scissors.onclick = () => {
  console.log("가위를 선택했어");
  console.log("가위 = " + scissors.value);
  let playerSel = parseInt(scissors.value);
  // console.log(typeof playerSel);
  let randomComSel = Comsel[parseInt(Math.random() * 3)];
  console.log(`컴퓨터선택 ${randomComSel}`);
  if (playerSel == randomComSel) {
    clearInterval(changeImgId);
    mainImage.setAttribute("src", "./num1.jpg");
    console.log("비겼다");
    changeImgId = setInterval(changeImage, 300);
  } else if (randomComSel == 1) {
    clearInterval(changeImgId);
    mainImage.setAttribute("src", "./num2.jpg");
    console.log("졌다");
    changeImgId = setInterval(changeImage, 1000);
    gameStart();
  } else {
    clearInterval(changeImgId);
    mainImage.setAttribute("src", "./num3.jpg");
    console.log("이겼다");
    console.log(coinBox.length);
    let randomCoin = coinBox[parseInt(Math.random() * (coinBox.length - 1))];
    // coinBox 배열안의 값 중 하나를 랜덤으로 선택하여 randomCoin이라는 변수에 초기화했다.
    console.log(`지급할코인은${randomCoin}`);
    document.getElementById("coin").innerText =
      coin + parseInt(randomCoin * 100);

    changeImgId = setInterval(changeImage, 1000);
    gameStart();
  }
};

// 플레이어가 바위버튼을 눌렀을때
rock.onclick = () => {
  console.log("바위를 선택했어");
  console.log("바위 =" + rock.value);
  let playerSel = parseInt(rock.value);
  let randomComSel = Comsel[parseInt(Math.random() * 3)];
  console.log(`컴퓨터선택 ${randomComSel}`);
  if (playerSel == randomComSel) {
    clearInterval(changeImgId);
    mainImage.setAttribute("src", "./num2.jpg");
    console.log("비겼다.");
    changeImgId = setInterval(changeImage, 300);
  } else if (randomComSel == 2) {
    clearInterval(changeImgId);
    mainImage.setAttribute("src", "./num3.jpg");
    console.log("졌다.");
    changeImgId = setInterval(changeImage, 1000);
    gameStart();
  } else {
    clearInterval(changeImgId);
    mainImage.setAttribute("src", "./num1.jpg");
    console.log("이겼다.");
    let randomCoin = coinBox[parseInt(Math.random() * (coinBox.length - 1))];
    console.log(`지급할코인은${randomCoin}`);
    document.getElementById("coin").innerText =
      coin + parseInt(randomCoin * 100);

    changeImgId = setInterval(changeImage, 1000);
    gameStart();
  }
};

paper.onclick = () => {
  console.log("보를 선택했어");
  console.log("보 =" + paper.value);
  let playerSel = parseInt(paper.value);
  let randomComSel = Comsel[parseInt(Math.random() * 3)];
  console.log(`컴퓨터선택 ${randomComSel}`);
  if (playerSel == randomComSel) {
    clearInterval(changeImgId);
    mainImage.setAttribute("src", "./num3.jpg");
    console.log("비겼다.");
    changeImgId = setInterval(changeImage, 300);
  } else if (randomComSel == 0) {
    clearInterval(changeImgId);
    mainImage.setAttribute("src", "./num1.jpg");
    console.log("졌다.");
    changeImgId = setInterval(changeImage, 1000);
    gameStart();
  } else {
    clearInterval(changeImgId);
    mainImage.setAttribute("src", "./num2.jpg");
    console.log("이겼다.");
    let randomCoin = coinBox[parseInt(Math.random() * (coinBox.length - 1))];
    console.log(`지급할코인은${randomCoin}`);
    document.getElementById("coin").innerText =
      coin + parseInt(randomCoin * 100);

    changeImgId = setInterval(changeImage, 1000);
    gameStart();
  }
};
 */

[...document.getElementsByClassName("choice")].forEach((elem) => {
  elem.onclick = () => {
    if (state !== STATE.START) return;
    state = STATE.SELECT;
    // 피드백 - 가위바위보에 대한 엘리먼트 가져오기
    const playerSel = parseInt(elem.value);
    // const randomComSel = Comsel[parseInt(Math.random() * 3)]; // 피드백 - 배열의 필요성은?
    const randomComSel = parseInt(Math.random() * 3);

    if (playerSel == randomComSel) {
      clearInterval(changeImgId);
      mainImage.setAttribute("src", `./num${randomComSel + 1}.jpg`);
      console.log("비겼다");
      let motion = document.getElementById("draw");
      motion.classList.add("drawmo");
      setTimeout(() => {
        motion.classList.remove("drawmo");
      }, 3000);
      setTimeout(() => {
        changeImgId = setInterval(changeImage, 300);
        state = STATE.START;
      }, 1000);
    } else if (
      (randomComSel == 1 && playerSel == 0) ||
      (randomComSel == 2 && playerSel == 1) ||
      (randomComSel == 0 && playerSel == 2)
    ) {
      clearInterval(changeImgId);
      mainImage.setAttribute("src", `./num${randomComSel + 1}.jpg`);
      console.log("졌다");
      let motion = document.getElementById("defeat");
      motion.classList.add("defeatmo");
      setTimeout(() => {
        motion.classList.remove("defeatmo");
      }, 3000);
      setTimeout(() => {
        changeImgId = setInterval(changeImage, 1000);
        state = STATE.DEFAULT;
      }, 1000);
      // gameStart(); // 피드백 - 왜 onclick을 두번 정의하지?
    } else {
      clearInterval(changeImgId);
      mainImage.setAttribute("src", `./num${randomComSel + 1}.jpg`);
      console.log("이겼다");
      let motion = document.getElementById("win");
      motion.classList.add("winmo");
      setTimeout(() => {
        motion.classList.remove("winmo");
      }, 3000);

      let randomCoin = coinArr[parseInt(Math.random() * coinArr.length)];
      // Math.random 메서드는 0 <= 수 < 1
      // coinBox 배열안의 값 중 하나를 랜덤으로 선택하여 randomCoin이라는 변수에 초기화했다.
      let coinmotion = document.getElementsByClassName("coin-box");

      for (i = 0; i < coinmotion.length; i++) {
        coinmotion[i].classList.add("coinmo");
      }
      setTimeout(() => {
        alert(`지급할코인은${randomCoin * 100}입니다. 축하합니다!`);
        changeCoin(randomCoin * 100);
      }, 3000);
      // document.getElementById("coin").innerText =
      //   coin + parseInt(randomCoin * 100);
      setTimeout(() => {
        changeImgId = setInterval(changeImage, 1000);
        state = STATE.DEFAULT;
      }, 4000);
      // gameStart();
    }
  };
});
