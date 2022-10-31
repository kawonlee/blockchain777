const fs = require("fs");
const path = require("path");

// console.log("dirname : " + path.dirname(__filename));
// // 파일의 경로
// console.log("extname : " + path.extname(__filename));
// // 파일의 확장자
// console.log(" basename : " + path.basename(__filename));
// // 파일의 이름
// console.log(path.join(__dirname, "..", ".."));
// // 경로를 합친다. __dirname의 경로와 뒤로가기 두번을 합친거임
// // path란 경로에 대해서 관리하는 모듈이다.(가져와야 사용가능하기 때문에 객체가 아닌 모듈)
// fs.writeFile("./test.txt", "안녕못합니다", (data) => {
//   console.log(data);
// });
// // 파일을 생성한다. 파일명, 파일내용

// fs.readFile("./test.txt", (err, data) => {
//   console.log(data);
//   console.log(data.toString());
// });

// const fsProm = fs.promises;

// fsProm
//   .writeFile("./test1.txt", "프라미스입니다.")
//   .then(() => {
//     return fsProm.readFile("./test1.txt");
//   })
//   .then((data) => {
//     console.log(data);
//     console.log(data.toString());
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// fs.writeFileSync("./test2.txt", "싱크 확인");

let data = fs.readFileSync("./test.txt");
console.log("data :" + data.toString());
data = fs.readFileSync("./test1.txt");
console.log("data :" + data.toString());
data = fs.readFileSync("./test2.txt");
console.log("data :" + data.toString());

async function readFileSyncFunc(filePath) {
  const data = await fs.promises.readFile(filePath);
  console.log("test :" + data);
}

function tryTest() {
  try {
    let data = fs.readFileSync("./test11.txt");
    console.log("data :" + data);
  } catch (err) {
    console.error("err :" + err);
  }
}

tryTest();
// fs.createReadStream()
// 알아서 찾아봐라

console.log(__filename);
// 파일 이름을 포함한 경로
console.log(__dirname);
// 현재 파일의 경로
// 단 위 변수들은 ES6에 없다.

// import fs from "fs";
// ES6 문법이다.
