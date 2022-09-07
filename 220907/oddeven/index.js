// 기존의 odd, even 클릭과 달리 oddeven에서 호출받으며 전달받은 매개변수를 사용하기 위해
// count를 매개변수로 선언한다. 괄호 안의 count << 문자열인 '123'
function odd(count) {
  //   const count = parseInt(prompt("몇까지 찍을까?"));
  // odd 클릭 시 count는 입력된 값이 없기 때문에 undefined가 된다.
  // oddeven 함수에서 호출받았을 시에는 count에 oddeven 함수에서 전달한 매개변수가
  // count에 정의 된다. << '123' -> true
  if (!count) count = parseInt(prompt("몇까지 찍을까?"));
  // undefined는 boolean 값으로 따졌을 때 false가 되기 때문에 매개변수가 없는지 확인하여
  // 입력 받을 수 있도록 처리한다.
  count = parseInt(count);
  // oddeven 함수에서 전달받은 count는 문자열(string)이기 때문에 parseInt 함수를 호출하여
  // 정수로 변환해준다.

  //   for (let i = 0; i <= count + 1; i++) {
  //     if (i % 2) console.log(i);
  //   }
  // i % 2 << 나머지를 조건으로 쓰는 상황이 많이 나올것
  // 홀수일 때 1 -> 홀수를 판단할 수 있다. -> 1은 true이기 때문에 참이다.

  // 위 코드는 아래 코드들보다 안좋다. (3~4번 줄) -> 반복의 횟수가 다르다.
  // 위 코드는 예를 들어 10을 넣었을 시 10번을 반복한다.
  // 아래 코드는 마찬가지로 예로 10을 넣었을 시 5번을 반복한다.
  // 반복의 횟수 차이가 입력된 수에 대해서 기하급수적으로 늘어날 수 있다.

  // 다른 도출 방법

  //   for (let i = 0; i < count / 2; i++) {
  //     console.log(i * 2 + 1);
  //   }

  for (let i = 1; i < count + 1; i += 2) {
    console.log(i);
  }
}

const even = function (count) {
  //   const count = parseInt(prompt("몇까지 찍을까?"));
  if (!count) count = parseInt(prompt("몇까지 찍을까?"));
  count = parseInt(count);

  //   for (let i = 0; i <= count + 1; i++) {
  //     if (!(i % 2)) console.log(i);
  //   }
  // i % 2 << 짝수일 때 0 -> 0은 false이기 때문에 부정을 해준다.

  // 다른 도출 방법

  //   for (let i = 0; i < (count + 1) / 2; i++) {
  //     console.log(i * 2);
  //   }

  for (let i = 0; i < count + 1; i += 2) {
    console.log(i);
  }
};

const oddeven = () => {
  const count = prompt(
    "몇까지 찍을까? 그리고 홀이야 짝이야?\n형식은 숫자&홀짝"
  );
  // '123&홀' 형식의 문자열(string)을 받게 된다.
  // split메소드를 호출해서 &를 기준으로 분리한다.
  // 문자열(string) 아이템을 가진 배열을 반환(return)받는다. >> count.split("&")
  // -> ['123', '홀']
  const number = count.split("&")[0]; // '123'
  const isOdd = count.split("&")[1]; // '홀'
  // 숫자와 홀짝이 나누어졌다.
  if (isOdd == "홀") {
    // isOdd가 홀인지 확인하여 홀이면 odd 함수를 호출한다.
    // 함수를 호출하면서 받았던 숫자(number)를 매개변수로 전달한다.
    odd(number);
    //매개변수로 입력된 숫자를 전달한다.
  } else {
    even(number);
  }
};
