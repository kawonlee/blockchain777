// const a = 1;
// function func1() {
//   console.log("func1");
// }

// function func2() {
//   func1();
//   console.log("func2");
//   func4();
// }

// function func3() {
//   func2();
//   console.log("func3");
// }

// function func4() {
//   console.log("func4");
// }

// func3();

// const x = "x";
// function c() {
//   console.log("c", x);
// }

// function a() {
//   const x = "xx";
//   console.log("a", x);
//   function b() {
//     console.log("b", x);
//     c();
//   }
//   b();
// }

// a();

const strlist = ["We", "are", "the", "world!"];

function solution(strlist) {
  let answer = [];
  for (let i = 0; i < strlist.length; i++) {
    let temp = strlist[i].split("").length;
  }
}

solution(strlist);
