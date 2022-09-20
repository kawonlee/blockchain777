// 객체?? -> {}로 묶인 키와 값으로 이루어진 변수(상자)?
const obj = {
  // obj = 객체
  a: 1,
  // a= 키, 1 = 값
  // 키의 정식 명칭은 property(프로퍼티)다.
  b: function () {
    console.log("b");
  },
  // b와 c는 함수지만 여기서는 메서드(method)이다.
  c: () => {
    return "c";
  },
};

// const arr = [1, 2, 3];
const arr = ["정재훈", "염예나", "김성진", "최원겸", "김선주"];
// 배열도 객체다.
arr.push("이가원");
console.log(arr);
// push 메서드를 호출
console.log(arr.length);
// 배열의 길이를 나타내는 프로퍼티 => 배열의 가짓수
//단축키에서 보라상자 메서드, 파란상자는 프로퍼티
// 코드 상에서는 .을 기준으로 하늘색 프로퍼티(앞), 연한노랑 메서드(뒤)
let tempReturn = arr.indexOf("김선주");
console.log(tempReturn);
// 배열에 있는 아이템을 찾아서 그 위치를 알려준다. 즉 위치를 리턴해준다.
// 없으면 -1, 첫번째 있으면 0을 반환해준다. 리턴해준다.
// 해당 예시에선 3을 넣었으므로 3번째 자리에 있으므로 2가 콘솔창에 출력된다.

tempReturn = arr.find(function (item) {
  console.log(`item + ${item}`);
  return item === 2;
});
// find는 검색할 때 사용할 코드를 넣어준다.
// 코드의 반환값이 true가 나오는 함수를 넣어준다.
// find의 반환 값은 아이템의 순서가 아닌 아이템 그 자체다.
// find 메서드는 매개변수로 함수를 전달한다.
// 매개변수에 해당하는 함수의 매개변수(item)은 배열의 각 아이템을 적용한다.
// find 함수는 배열의 각 아이템을 순서대로 매개변수 함수에 전달하여 return값을 확인한다.
// 매개변수함수에게서 받은 리턴 값이 true면 해당 아이템을 return하고 find 함수를 종료한다.
//  후에 특강으로 마저
const tempFind = (item) => {
  //첫번째로 함수 읽을 때
  // item = arr[0] << item = 1
  return item === 3;
  // item이 3이랑 같으면 true를 리턴하고 아니면 false를 리턴한다.
};
const arrFind = function () {
  for (let i = 0; i < arr.length; i++) {
    console.log(`i : ${i}`);
    console.log(`arr[${i}] : ${arr[i]}`);

    //i 는 0부터 arr의 길이까지 하나씩 증가하면서 반복한다.
    if (tempFind(arr[i])) return arr[i];
    //tempFind함수를 호출하고 매개변수로 arr의 i번째 아이템을 전달한다.
    // tempFind 함수가 true를 리턴(반환)하면 arr의 i번째 아이템을 리턴(반환)한다.
  }
};
console.log(arrFind());

tempReturn = arr.find((item) => {
  return item[0] === "김";
});
// find는 매개변수함수가 true인 아이템들 중 첫번째만 리턴해준다.
console.log(tempReturn);

tempReturn = arr.filter((item) => {
  return item[0] === "김";
});
// filter는 매개변수함수가 true인 아이템들을 배열로 리턴해준다.
console.log(tempReturn);

tempReturn = arr.findIndex((item) => {
  return item[0] === "김";
});
// find는 매개변수함수가 true인 아이템들 중 첫번째의 배열(array) 내에서 몇번째인지 리턴해준다.
console.log(tempReturn);

tempReturn = arr.map((item) => {
  return item + "출석함";
  return item[0] === "김";
});
console.log(tempReturn);
// map은 매개변수함수의 return값 자체를 배열의 양식 그대로(array에 push) 리턴해준다.

//테스트용 코드

const tempArr = [
  {
    name: "이가원",
    age: 27,
    area: "구의동",
  },
  { name: "김선주", age: 23, area: "상도동" },
  { name: "장정현", age: 29, area: "위례동" },
];

console.log(tempArr.find((item) => item.area === "구의동"));
console.log(tempArr.findIndex((item) => item.area === "구의동"));
console.log(tempArr.filter((item) => item.area === "구의동"));
console.log(tempArr.map((item) => item.area === "구의동"));
// 수정하면서 테스트해봐!!!!!!!!

arr.forEach((item) => console.log("forEach :" + item)); // 104번째 줄과 105~107줄은 같은 내용이다.
for (let i = 0; i < arr.length; i++) {
  console.log("for : " + arr[i]);
}
// forEach 메서드는 아이템을 하나씩 함수에게 매개변수로 전달해 함수를 호출한다.
// 아래의 for문과 같다.

console.log(arr);
arr.reverse();
// 순서 거꾸로
console.log(arr);

console.log(arr.join(" / "));
// 배열을 문자열로 바꿔줍니다. 매개변수로 아이템 사이에 넣을 문자를 입력합니다.
console.log(arr.toString()); // 문자열로 바꿈(거의 모든 객체에 포함되어 있음)

console.log(arr.slice(1, 3));
// [1, 2, 3] 이라고 했을 때 1 앞이 0이고 각 , 마다 숫자가 늘어난다고 생각하면 편하다.
// [0"정재훈", 1"염예나", 2"김성진", 3"최원겸", 4"김선주", 5] << 1에서 시작해서 3에서 끝난다.
// 결과 값 "염예나", "김성진" << 이런 배열을 리턴한다.
console.log(arr.slice(1, -1));
// - 는 뒤에서 부터 체크한다. 즉 5가 0이고 4가 -1이 되므로 염예나~최원겸까지 출력된다.
//순서가 꼬이면 안된다. 본문에 매개변수 값을 반대로 쓰면 암것도 안뜸

// arr.splice(1, 3) 1부터 3개를 자른다. 단 arr을 수정해버린다. << 이래서 안씀

console.log(
  arr.sort((curr, next) => {
    if (curr > next) return 1;
    else if (curr < next) return -1;
    else return 0;
    // sort 메서드는 정렬을 해주는 메서드입니다.
    // 1, 0, -1로 정렬방식을 선택합니다.
    // 현재가 큰 것을 1로 주고 다음 것이 큰 것을 -1로 주면 오름차순으로 정렬된다.
  })
);

console.log(
  arr.sort((curr, next) => {
    if (curr > next) return -1;
    else if (curr < next) return 1;
    else return 0;
    // 위와 반대 조건 시 내림차순으로 정렬된다.
  })
);

console.log(arr.sort());
// sort 메서드는 정렬을 해준다. (오름차순이 기본값이다.)
console.log(arr.sort().reverse());
// sort 메서드에 리버스를 사용하면 내림차순이 된다.
// 하나의 객체에 여러개의 메서드를 사용할 수 있다.
