// let selectNum = parseInt(prompt("숫자를 입력하세요."));
// for (let i = 0; i < selectNum; i++) {
//   console.log(i);
// }
// 입력한 숫자 출력 ex) 3입력 -> 0,1,2 출력

function oddNum() {
  let selectNum = parseInt(prompt("숫자를 입력하세요."));
  for (let i = 0; i < selectNum + 1; i++) {
    if (i % 2 == 1) {
      console.log(`${i}`);
    }
  }
}
// 입력값 중 홀수만 띄우는 함수

function evenNum() {
  let selectNum = parseInt(prompt("숫자를 입력하세요."));
  for (let i = 0; i < selectNum + 1; i++) {
    if (i % 2 == 0) {
      console.log(`${i}`);
    }
  }
}
// 입력값 중 짝수만 띄우는 함수

// for를 써서 1부터 입력값까지 3/6/9가 아니면 숫자, 3/6/9면 '짝' 콘솔찍기
// 369게임 33일 경우(36의 수만큼) 짝짝 아니면 숫자)
// 못만들겠으면 플로우차트 짜와라
