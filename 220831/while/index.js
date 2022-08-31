let i = 0;
// 반복할 때 i, j, k 이런식으로 변수를 선언한다.
// i = index의 약자다. git은 아예 다르게 index라는 용어를 사용중(다른거니까 헷갈리지마)
// array[5] = 배열의 6번째 아이템을 가져온다 <-- 여기서 5가 index

while (i < 10) {
  // while은 반복문의 명령어 중 하나다.
  // ()안의 조건이 충족되면 실행된다.
  // {}안의 코드를 실행한 후 ()안의 조건을 확인한다.
  console.log("i = " + ++i);
}

let j = 0;
while (j < 10) {
  console.log("i = " + j++);
  //   break;
}

// while(true)console.log(new Date())
// 브라우저 멈추고 싶으면 위 코드를 실행하시오

while (true) {
  console.log(new Date());
  //   Date - 현재 시간을 출력해준다
  if (--i < 1) break;
  //   break는 코드를 멈춘다. 즉 반복을 멈추고 다음 코드를 실행한다.
}

let k = 0;
do {
  // do는 while 조건을 확인하기 전에 실행한다.
  console.log("k = " + ++k);
  // k를 출력하고 조건을 확인한다.
} while (k < 10);

// do를 적는것과 안적는 것의 차이는???
console.log(i);
while (i !== 0) {
  console.log("asdf1");
}
do {
  console.log("asdf2");
} while (i != 0);
