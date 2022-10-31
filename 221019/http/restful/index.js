const express = require("express");
const session = require("express-session");
const dotenv = require("dotenv");
const path = require("path");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

dotenv.config();

const app = express();

app.set("port", process.env.PORT || 8080);

app.use((req, res, next) => {
  if (process.env.NODE_ENV === "production") morgan("combined")(req, res, next);
  else morgan("dev")(req, res, next);
});

app.use("/", express.static(path.join(__dirname, "public")));
// app.use("/", express.static("./public"))
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

app.use((req, res, next) => {
  console.log(req.body);
  next();
  // next ==> 다음 걸로 넘어가라
});

app.post("/*", (req, res, next) => {
  // front쪽에서 여러개의 주소를 한번에 처리할 때 주소를 다음과 같이 표기하여 사용한다.
  // nodejs쪽에서 use를 미들웨어로 제일 많이 사용한다. 미들웨어 -> 요청과 응답 사이의 어떤 작업을 추가할 때 그 작업들을 미들웨어라고 말한다.
  console.log("name :", req.body.name);
  next();
});

app.post("/api/user", (req, res) => {
  res.cookie("name", req.body.name);
  // 쿠키를 추가한다.
  res.end("정보를 추가했다.");
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send(err.message);
});

app.listen(app.get("port"), () => {
  console.log("그만열고싶다.");
});
