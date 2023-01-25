// 1. 10진수 -> 16진수
// 2. 16진수 -> 10진수
// 3. 10진수 -> 2진수
// 4. 2진수 -> 10진수

// 2진수 -> 10진수

let binary2 = "01011000";

console.log(binary2.split(""));

// 자리수가 1인 애들만 더해준다.

Math.pow(2, binary2.length);

let tempArr = [];
tempArr = binary2.split("").reverse();
let answer = 0;
for (let i = 0; i < tempArr.length; i++) {
  if (tempArr[i] === "1") {
    answer += Math.pow(2, i);
    console.log("악");
    console.log(i);
    console.log("포문", answer);
  }
}
console.log("답", answer);

// 10진수 -> 2진수
// 2로 나눠서 몫이 1이 남을때까지

let binary10 = 88;
let answer2 = "";
while (binary10 > 0) {
  answer2 = (binary10 % 2) + answer2;
  console.log("답답", answer2);
  binary10 = parseInt(binary10 / 2);
}

// 16진수 -> 10진수

let binary16 = "13F";
let tempArr2 = [];
tempArr2 = binary16.split("").reverse();
let answerReturn = 0;

console.log("???", tempArr2);

let answer3 = tempArr2?.map((item, idx) => {
  switch (item) {
    case "A":
      return (answer3 = 10 * Math.pow(16, idx));
    case "B":
      return 11 * Math.pow(16, idx);
    case "C":
      return 12 * Math.pow(16, idx);
    case "D":
      return 13 * Math.pow(16, idx);
    case "E":
      return 14 * Math.pow(16, idx);
    case "F":
      return 15 * Math.pow(16, idx);

    default:
      return item * Math.pow(16, idx);
  }
});
console.log("3번답", answer3);

answer3?.map((item) => {
  answerReturn += item;
});

console.log(answerReturn);

// 10진수 -> 16진수

let hex = 127;
let answer4 = "";
while (hex > 0) {
  let extra = hex % 16;
  switch (extra) {
    case 10:
      extra = "A";
      break;
    case 11:
      extra = "B";
      break;
    case 12:
      extra = "C";
      break;
    case 13:
      extra = "D";
      break;
    case 14:
      extra = "E";
      break;
    case 15:
      extra = "F";
      break;

    default:
      extra = extra + "";
  }
  answer4 = extra + answer4;
  hex = parseInt(hex / 16);
}
console.log("4번 답", answer4);
