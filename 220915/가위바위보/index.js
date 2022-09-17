const mainImage = document.getElementById("computer-img");
const scissors = document.getElementById("scissors");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
// 가위 = 1, 바위 =2, 보 =3

const imageArr = ["./num1.jpg", "./num2.jpg", "./num3.jpg"];

const comSet = new Set();
while (comSet.size < 3) {
  comSet.add(parseInt(Math.random() * 3 + 1));
}
let comSel = [...comSet];
// let, const 등 선언 명령어를 사용하지 않을시 자동으로 var로 선언한 취급을 한다.

console.log(comSel);

let imageIndex = 0;

const changeImage = function () {
  mainImage.setAttribute("src", imageArr[imageIndex]);
  imageIndex++;
  if (imageIndex >= imageArr.length) {
    imageIndex = 0;
  }
};

let changeImgId = setInterval(changeImage, 1000);
// 컴퓨터의 가위바위보 이미지를 바꿔주는 함수를 변수에 초기화해준다.

let coin = 1000;

document.getElementById("coin").innerText = coin;
let clickFlag = false;
// start버튼을 한 번 눌러서 실행 후 추가적으로 눌리지 않도록 막는 변수를 초기화했다.
document.getElementById("start-button").onclick = () => {
  if (clickFlag == true) return;
  // clickFlag 값이 true이면 return해주겠다.
  console.log(`${(coin -= 100)}`);
  document.getElementById("coin").innerText = coin;
  clickFlag = true;
  // onclick함수가 한바퀴 돌면 clickFlag값은 true가 된다.
  // 따라서 함수가 한 번 더 실행되면 return값을 반환하면서 함수를 끝낸다.
  clearInterval(changeImgId);
  // setInterval 함수를 멈춰준다.
  changeImgId = setInterval(changeImage, 300);
  // start버튼을 눌렀을 때 가위바위보 이미지가 빠르게 바뀌도록 선언해준다.
};
// start버튼을 눌러 게임 시작

// console.log(scissors);
// 플레이어가 가위버튼을 눌렀을때
const playerSel1 = (document.getElementById("scissors").onclick = () => {
  console.log("가위를 선택했어");
  console.log(document.getElementById("scissors").value);
  let playerSel = parseInt(document.getElementById("scissors").value);
  console.log(typeof playerSel);
  if (comSel == playerSel) {
    clearInterval(changeImgId);
    mainImage = imageArr[0];
  }
});

// 플레이어가 바위버튼을 눌렀을때
const playerSel2 = (document.getElementById("rock").onclick = () => {
  console.log("바위를 선택했어");
});

const playerSel3 = (document.getElementById("paper").onclick = () => {
  console.log("보를 선택했어");
});
