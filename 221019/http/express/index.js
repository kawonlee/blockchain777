const express = require("express");
const session = require("express-session");
const dotenv = require("dotenv");
const morgan = require("morgan");
const path = require("path");
const cookieParser = require("cookie-parser");

dotenv.config();

const app = express();

app.set("port", process.env.PORT || 8080);

app.use((req, res, next) => {
  if (process.env.NODE_ENV === "production") morgan("combined")(req, res, next);
  else morgan("dev")(req, res, next);
});

app.use("/", express.static(path.join(__dirname, "public")));

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
    name: "session",
  })
);

//http://localhost:8080/testing?lunch=sadasdasdas%27
// https:// -> 프로토콜
// localhost -> 주소, IP주소/도메인(DNS) 주소
// :8080 -> 포트번호
// /testing -> 라우터
// ?lunch=sadasdasdas%27 -> 대망의 쿼리스트링

// 보낼때 (req)
// GET 공개적으로 보낼때 사용 / querystring으로 url 뒤에 기재됨
// POST 우리가 볼 수 없는 형식으로 body라는 내용물로 들어가게됨
// get 메서드 형식을 사용할 때는 query, 즉 쿼리스트링을 사용한다.
// post 메서드 형식을 사용할 때는 body로 데이터에 접근한다.
// use는 메서드 형식을 따로 따지지 않는다.
app.use("/testing", (req, res) => {
  console.log(req.query.lunch);
  res.end(`<div>${req.query.lunch}</div>`);
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send(err.message);
});

app.listen(app.get("port"), () => {
  console.log("열었다.");
});
