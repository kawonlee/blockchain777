// ES6에서부터는 const express = require("express"); 처럼 선언 하는 것이 아닌 다음과 같이 선언하여 사용한다.
import express from "express";
import session from "express-session";
import dotenv from "dotenv";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";
import objTest, { minus as objMinus } from "./objtest/index.js";
// as 는 앞에 export 된 이름과 뒤에 여기서 쓸 이름을 정의한다. 본문은 minus를 objMinus라는 이름으로 정의한다.

console.log(objTest.multiply(1, 2));
console.log(objMinus(1, 2));
dotenv.config();

const app = express();

app.set("port", process.env.PORT || 8080);

app.use((req, res, next) => {
  if (process.env.NODE_ENV === "production") morgan("combined")(req, res, next);
  else morgan("dev")(req, res, next);
});

const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use("/", express.static(path.join(__dirname, "web")));

app.listen(app.get("port"), () => {
  console.log("서버 오픈!!");
});

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
    name: "sesseion-cookie",
  })
);
