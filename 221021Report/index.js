const express = require("express");
const session = require("express-session");
const dotenv = require("dotenv");
const morgan = require("morgan");
const path = require("path");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const crypto = require("crypto-js");

dotenv.config();

const memberList = []; // 회원가입 정보를 담기 위한 배열
const app = express();

app.set("port", process.env.PORT || 8080);

app.use((req, res, next) => {
  if (process.env.NODE_ENV === "production") morgan("combined")(req, res, next);
  else morgan("dev")(req, res, next);
});

app.use(express.json());
app.use("/", express.static(path.join(__dirname, "report")));
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
app.post("/api/user/add", (req, res) => {
  memberList.push({
    id: req.body.id,
    pw: crypto.SHA256(req.body.pw).toString(),
  });
  console.log(memberList);
  res.send({ status: 200, data: "회원가입완료" });
});

app.post("/api/user/login", (req, res) => {
  const tempJWT = jwt.sign({ name: "jwtData" }, "loginKey", {
    algorithm: "HS256",
    expiresIn: "10m",
    issuer: "lkw",
  });
  console.log(tempJWT);
  const tempData = jwt.verify(tempJWT, "loginKey");
  console.log(tempData);
  const cookie_name = req.body.id,
    cookie_data = "login_cookie";
  res.cookie(cookie_name, cookie_data, {
    expires: new Date(Date.now() + 10 * 1000),
  });
  let bool = false;
  for (let i = 0; i < memberList.length; i++) {
    console.log(memberList[i].id);
    console.log(req.body.id);
    if (
      memberList[i].id == req.body.id &&
      memberList[i].pw == crypto.SHA256(req.body.pw).toString()
    )
      bool = true;
  }
  res.send(bool);
});

app.listen(app.get("port"), () => {
  console.log("리포트입니다.");
});
