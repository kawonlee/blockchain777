// jwt : JsonWebToken
// JSON은 일종의 데이터 형식, 객체 형식을 그대로 가져와 스트링 형태로 사용한다.
// forms['dataName'] == forms.dataName
// jwt : 웹에서 사용하는 json 형식의 토큰(짧은 데이터)
const crypto = require("crypto-js");

const tempHeader = JSON.stringify({ name: "block7", alg: "HS256" });
// parse = json을 객체 형식으로 변환 // stringify = 객체를 json 형식으로 변환
// alg : 어떠한 알고리즘을 사용할 것인가
// HS256(default), HS384, HS512, RS256, RS384, RS512, ES256, ES384, ES512, PS256, PS384, PS512
// 알고리즘을 사용한다. -> 암호화한다.

const base64Header = Buffer.from(tempHeader).toString("base64url");
// jwt는 base64url 형식의 포맷을 사용한다.
// base64가 뭘까? << ASCII코드를 기준으로 데이터를 저장하는 포맷
const JWTHeader = base64Header.replaceAll("=", "");
// 상위 코드까지 header를 완성했다.

const tempPayload = JSON.stringify({ maker: "tester", expiresIn: "10m" });
// 10m => 세션이 종료되는 기점
const base64Payload = Buffer.from(tempPayload).toString("base64url");
const JWTPayload = base64Payload.replaceAll("=", "");
// 18 ~20 번줄로 payload를 완성했다.

const tempSignature = crypto
  .HmacSHA256(JWTHeader + "." + JWTPayload, "key")
  // HS256을 사용한 경우 그냥 SHA256알고리즘이 아닌 HmacSHA256을 사용해야한다.
  .toString(crypto.enc.Base64url)
  .replaceAll("=", "");

const jwt = `${JWTHeader}.${JWTPayload}.${tempSignature}`;
console.log(jwt);
// JSON Web Token은 'header.payload.signature'로 이루어져있다.
// header : jwt의 검증을 위한 데이터가 저장된다.
// payload : jwt가 갖고있는 데이터이다. << 개발자가 저장하고 싶은 데이터. 로그인 후의 그 사람의 닉네임, 어떠한 암호화된 토큰
// signature : 암호화된 서명이다. << 검증에 사용한다.
