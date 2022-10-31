const express = require("express");
const session = require("express-session");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const path = require("path");
const crypto = require("crypto-js");
const jwt = require("jsonwebtoken");

dotenv.config();

const memberList = [];
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

const app = express();

app.set("port", process.env.PORT || 8080);
app.use((req, res, next) => {
  if (process.env.NODE_ENV === "production") morgan("combined")(req, res, next);
  else morgan("dev")(req, res, next);
});
app.use("/", express.static(path.join(__dirname, "web")));
app.use(express.json());
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
    name: "report-session",
  })
);

app.post("/api/user/regist", (req, res) => {
  memberList.push({
    id: req.body.id,
    pw: crypto.SHA256(req.body.pw).toString(),
    name: req.body.name,
    age: req.body.age,
    sex: req.body.sex,
  });
  console.log(memberList);
  res.send({ status: 200, data: "회원가입완료" });
});

app.post("/api/user/login", (req, res) => {
  let result = false;
  console.log(req.body);
  for (let i = 0; i < memberList.length; i++) {
    if (
      memberList[i].id == req.body.id &&
      memberList[i].pw == crypto.SHA256(req.body.pw).toString()
    )
      result = true;
  }
  res.send(result);
});

app.post("/api/board/add", (req, res) => {
  boardList.unshift(req.body);
  res.send({ status: 200, data: "정상입력완료" });
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
    maxCount:
      parseInt(
        (boardList.length ? boardList.length - 1 : boardList.length) / 5
      ) + 1,
  });
});
app.listen(app.get("port"), () => {
  console.log("서버는 언제까지");
});
