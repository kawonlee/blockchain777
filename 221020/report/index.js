const express = require("express");
const session = require("express-session");
const dotenv = require("dotenv");
const morgan = require("morgan");
const path = require("path");
const cookieParser = require("cookie-parser");

dotenv.config();

const postList = [];
const app = express();

app.set("port", process.env.PORT || 8080);
app.use((req, res, next) => {
  if (process.env.NODE_ENV === "production") morgan("combined")(req, res, next);
  else morgan("dev")(req, res, next);
});
app.use(express.json());
app.use("/", express.static(path.join(__dirname, "public")));
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
app.get("/api/list", (req, res) => {
  res.send({
    list: postList,
  });
});
app.post("/api/add", (req, res) => {
  postList.push(req.body.head);
  postList.push(req.body.post);
  res.end();
});

app.listen(app.get("port"), () => {
  console.log("서버를 그만 열게 해주세요.");
});
