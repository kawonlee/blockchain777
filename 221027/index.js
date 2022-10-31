const express = require("express");
const session = require("express-session");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const path = require("path");

const db = require("./models/index.js");
// models 폴더에 있는 index.js에서 디비 연결 설정 후 불러오기
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
    name: "db-session",
  })
);

db.sequelize
  .sync({ force: true }) // DB서버와 연결한다, force는 설정된 테이블을 강제로 생성한다.
  //우리가 express 서버에서 설정한 테이블 데이터와 실제 DB 서버의 테이블 데이터가 다를 경우에 서버의 테이블을 새로 생성하기 위해 사용한다.
  .then(() => {
    // 연결되고 나면 42번째 문장을 실행한다.
    console.log("db connected");
  })
  .catch((err) => {
    // 정상적으로 연결 안될 경우 에러 띄우겠다.
    console.log(err);
  });

// 테이블에 데이터 추가
// db.NewTable1.create({
//   idx: 11,
//   name: "asdasd",
//   password: "qqqqq",
//   id: "12321",
// });

db.NewTable1.findOne({
  where: {
    idx: 1,
    name: "1",
  },
})
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

app.listen(app.get("port"), () => {
  console.log("디비연결서버");
});
