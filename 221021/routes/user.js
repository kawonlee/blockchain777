const router = require("express").Router();
const crypto = require("crypto-js");
const userList = {};
const jwt = require("jsonwebtoken");
router.post("/regist", (req, res) => {
  const tempJWT = jwt.sign({ name: "test" }, "sdasdsadasd", {
    algorithm: "HS256",
    expiresIn: "10m",
    issuer: "lkw",
  }); //jwt 생성
  console.log(tempJWT);
  const tempData = jwt.verify(tempJWT, "sdasdsadasd"); //jwt 파싱
  console.log(tempData);
  // 쿠키는 임시 데이터를 브라우저에 저장한다.
  // 크롬에서 로그인한 거, 쿠키에 남아있다 -> 파이어폭스에서 연동될까?
  // 안된다 -> 데이터 저장 공간이 다르다. 즉, 쿠키 저장한 파일이 다르다.

  const cookie_name = "cookie_name",
    cookie_data = "now testing";
  res.cookie(cookie_name, cookie_data, {
    expires: new Date(Date.now() + 30 * 1000),
    // 단위가 ms다 . 1ms = 0.001s => 1000ms = 1s
    // 10 * 60 * 1000 = 1000 => 1s * 60 => 1m * 10 = 10m
    // 30초로 수정
  });
  //응답으로 쿠키추가
  console.log(req.body);
  if (!userList[req.body.id]) {
    userList[req.body.id] = crypto.SHA256(req.body.pw).toString();
    // [req.body.id] = key
    // req.body.pw = value
    // => id: pw 구조로 저장됨
    // 2개가 아닌 3개이상인 경우 하나를 키로 주고 나머지를 값으로 객체 형식으로 정의하면된다.
    // userList[req.body.id] = {
    //pw : "asdas",
    //name : "pasafaf"
    //}

    res.send({ status: 200, data: "regist", userList });
  } else {
    res.send({ status: 401, data: "exist id", userList });
  }
});
// 객체에 대괄호를 넣는 이유는 변수를 쓰기 위함
router.post("/login", (req, res) => {
  console.log(req.cookies.cookie_name);
  // 요청을 통해 받은 쿠키
  if (userList[req.body.id] === crypto.SHA256(req.body.pw).toString()) {
    res.send({ status: 200, data: "login", userList });
  } else {
    res.send({ status: 401, data: "wrong password", userList });
  }
});
module.exports = router;
