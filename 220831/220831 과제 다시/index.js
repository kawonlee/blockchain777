const comSelect = parseInt(Math.random() * 99 + 1);
// 컴퓨터 선택 완료 +1을 한 이유는  *99 만 했을 시 0~99가 되기 때문이다.

let playerSelect;
let count = 0;
// 초기 카운트 변수를 0 으로 정의한다.
let max = 100;
let min = 0;
// 최대 최소 정해주기
let updown = "";
const maxCount = parseInt(prompt("몇번만에 맞출래? 숫자로만"));
// 본인이 맞출 횟수를 지정할 수 있다.

// 입력한 다음부터 돌아가야 하기 때문에 do while 문을 사용한다.
do {
  playerSelect = prompt(
    `${updown}
    숫자를 선택해주세요.
    컴퓨터가 선택한 숫자를 맞추시면 됩니다.
    최소 : ${min} / 최대 : ${max} / 남은횟수 : ${maxCount - count}`
  ); // prompt는 string이고, parseInt는 정수형으로 바꿔주는 함수이므로 number이다.
  //   console.log(playerSelect); <- 내가 입력창에 입력할때마다 콘솔창에 내가 입력한 값을 띄워준다.
  // 남은횟수 : ${10 - count} -> 횟수를 최대 10번까지만 줄거임.
  // 남은횟수 : ${maxCount - count} -> 상위에서 본인이 지정한 횟수에서 카운트 차감된다.
  playerSelect = parseInt(playerSelect);
  if (min > playerSelect || max < playerSelect) {
    // 최소와 최대 사이의 값만 확인하기 위해 최소 미만과 최대 초과를 먼저 처리한다.
    console.log("제외된 숫자들이다.");
    // if문을 두개 쓰지 않는 이유는(바로 하단 문장을 else if로 쓰는이유는)
    // if문이 두개 들어가는 경우 2개를 다 처리하므로, 구현하고자 하는 기능에서 멀어지기
    // 때문이다.
  } else if (playerSelect == comSelect) {
    console.log(`${count}번 만에 정답을 맞추셨습니다. 축하합니다!`);
    // 내가 마지막에 입력한 값도 카운트 하겠다 할때 ${count}앞에 ++을 붙인다.
    // console.log(`${++count}번 만에 정답을 맞추셨습니다. 축하합니다!`);
    break;
  } else if (playerSelect > comSelect) {
    // 플레이어가 선택한 숫자가 컴퓨터가 선택한 숫자보다 크다.
    max = playerSelect;
    // max가 현재 플레이어가 선택한 숫자가 된다.
    console.log("당신이 고른 숫자가 더 큽니다!");
    updown = "당신이 고른 숫자가 더 큽니다!";
    count++;
    //   플레이어가 정상적인 숫자를 입력했을때만 카운트를 늘리도록 UP, DOWN일 때 카운틀르 추가한다.
  } else if (playerSelect < comSelect) {
    // 플레이어가 선택한 숫자가 컴퓨터가 선택한 숫자보다 작다.
    min = playerSelect;
    // min이 현재 플레이어가 선택한 숫자가 된다.
    console.log("당신이 고른 숫자가 더 작습니다!");
    updown = "당신이 고른 숫자가 더 작습니다!";
  } else {
    console.log("숫자만 입력해주세요~");
    updown = "숫자만 입력해주세요~";
    count++;
    //   플레이어가 정상적인 숫자를 입력했을때만 카운트를 늘리도록 UP, DOWN일 때 카운틀르 추가한다.
  }
} while (playerSelect !== comSelect && count < maxCount);
// 컴퓨터가 숫자 선택 후 플레이어가 선택하는 것은 계속 반복되어야한다.
// 언제까지? 플레이어가 컴퓨터의 숫자를 맞출때까지.

if (count >= maxCount) {
  console.log("제한 횟수를 초과했네요. 안타깝게 됐습니다.");
}
