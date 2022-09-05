let p1, p2, p3;
let c1, c2, c3;
let count = 0;

c1 = parseInt(Math.random() * 9 + 1); // 1~9 사이 랜덤한 숫자 뽑기(첫번째)
console.log(c1);

do {
  c2 = parseInt(Math.random() * 9 + 1); // 1~9사이 랜덤한 숫자 뽑기(두번째)
} while (c1 == c2);
console.log(c2);

do {
  c3 = parseInt(Math.random() * 9 + 1); // 1~9사이 랜덤한 숫자 뽑기(세번째)
} while (c1 == c3 || c2 == c3);
console.log(c3);

// 컴퓨터가 숫자 3개 뽑음
do {
  p1 = prompt("첫 번째 숫자를 입력해주세요.");
  console.log(`첫 번째 숫자: ${p1}`);
  if (p1 == c1) {
    count++;
    alert("스트라이크입니다.");
    console.log("스트라이크");
  } else if (p1 == c2 || p1 == c3) {
    count++;
    alert("볼입니다.");
    console.log("볼");
  } else if (p1 !== c1) {
    count++;
    alert("아웃입니다.");
    console.log("아웃");
  }
  do {
    p2 = prompt("두 번째 숫자를 입력해주세요."); // 여기에 중복입력인 경우 경고창도 띄워줘야함
  } while (p1 == p2);
  console.log(`두 번째 숫자: ${p2}`);
  if (p2 == c2) {
    count++;
    alert("스트라이크입니다.");
    console.log("스트라이크");
  } else if (p2 == c1 || p2 == c3) {
    count++;
    alert("볼입니다.");
    console.log("볼");
  } else if (p2 !== c2) {
    count++;
    alert("아웃입니다.");
    console.log("아웃");
  }

  do {
    p3 = prompt("세 번째 숫자를 입력해주세요."); // 여기에 중복입력인 경우 경고창도 띄워줘야함
  } while (p1 == p3 || p2 == p3);
  console.log(`세 번째 숫자: ${p3}`);
  if (p3 == c3) {
    count++;
    alert("스트라이크입니다.");
    console.log("스트라이크");
  } else if (p3 == c2 || p3 == c1) {
    count++;
    alert("볼입니다.");
    console.log("볼");
  } else if (p3 !== c3) {
    count++;
    alert("아웃입니다.");
    console.log("아웃");
  }
  // 컴퓨터와 플레이어 숫자를 하나씩 비교
} while (!(c1 == p1 && c2 == p2 && c3 == p3));
alert(`축하합니다! ${count / 3}번 만에 맞추셨습니다~^ㅁ^`);
