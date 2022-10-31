// 암호화 : 입력한 데이터를 다른 사람이 알 수 없도록 변환한다.
// 1234 -> 암호화를 통해서 우리도 식별할 수 없는 무언가로 나온다. --> skadlkasndlasd123
// 복호화 : 암호화된 데이터를 원상 복구한다.
// skadlkasndlasd123 -> 복호화 작업 -> 1234
// 사용자가 입력한 데이터를 알 수 있어야 할까?
// 알면 안되는 것들도 있다. -> 단방향 / 양방향 암호화
// 단방향은 암호화만 가능하다. -> 복호화가 불가능하다.
// Hashing : 일종의 배열, 객체 ??
// 암호화된 중복되지 않는 키를 사용하여 데이터를 저장한다.
// [0,1,2,3,4,5] << 내가 원하는 위치의 값
// [easrv, sevr, sevrs, vesr, sve, btars] << 입력된 데이터
// hasing ex) SHA256(가장 많이 쓰인다.), RIPEMD160
// 중복이 최대한 되지 말아야한다.
// 양방향은 암,복호화가 가능하다.
// 대칭키 : 암호화와 복호화가 같은 키로 변환된다.
// 대칭키의 경우 키가 하나다.
// ex) AES, DES, SEED
// 비대칭키 : 암호화와 복호화가 다른키로 변환된다.
// 비대칭키의 경우 키가 두개다.
// public, private 키로 나뉜다.
// ex) RSA, ECC  << 테스트 해보려면 openSSL 등을 사용해야한다.

const express = require("express");
const session = require("express-session");
const dotenv = require("dotenv");
const path = require("path");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

// require("./api/cryptoTest.js");
// require("./api/jwt.js");

const routes = require("./routes/index.js");
const boardList = [
  {
    title: "오점뭐?",
    text: "배고프다",
  },
  {
    title: "오늘점심뭐먹지?",
    text: "코드어렵다",
  },
  {
    title: "오저뭐?",
    text: "드디어금요일",
  },
  {
    title: "야근",
    text: "금지",
  },
  {
    title: "퇴근은",
    text: "필수다",
  },
];

dotenv.config();

const app = express();

app.set("port", process.env.PORT || 8080);

app.use((req, res, next) => {
  if (process.env.NODE_ENV === "production") morgan("combined")(req, res, next);
  else morgan("dev")(req, res, next);
});
app.use(express.json());

app.use("/", express.static(path.join(__dirname, "web")));

app.use(express.urlencoded({ extended: false }));

app.use(cookieParser(process.env.COOKIE_SECRET));

app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
    name: "session",
  })
);

// app.use("/", (req, res, next) => {
//   console.log("url1 :" + req.url);
//   next();
// });

// app.use("/api", (req, res, next) => {
//   console.log("url2 :" + req.url);
//   next();
// });

app.post("/api/board/add", (req, res) => {
  boardList.unshift(req.body);
  res.send({ status: 200, data: "정상입력완료" }); // 클라이언트쪽의 data.data
});

app.post("/api/board/delete", (req, res) => {
  console.log(req.body);
  boardList.splice(+req.body.count * 5 + +req.body.num, 1);
  res.send({ status: 200, data: "쉿 삭제중" });
});

app.post("/api/board/update", (req, res) => {
  boardList[+req.body.count * 5 + +req.body.num].text = req.body.text;
  boardList[+req.body.count * 5 + +req.body.num].uptime = req.body.time;
  res.send({ status: 200, data: "쉿 수정중" });
});

app.get("/api/board", (req, res) => {
  res.send({
    status: 200,
    list: boardList.slice(+req.query.count * 5, (+req.query.count + 1) * 5),
    // 0~5 => 5~10
    maxCount:
      parseInt(
        (boardList.length ? boardList.length - 1 : boardList.length) / 5
      ) + 1,
    // 삼항연산자 조건 ? 참 : 거짓
  });
});

app.use("/api", routes);

app.listen(app.get("port"), () => {
  console.log("써버");
});
