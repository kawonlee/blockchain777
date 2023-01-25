const net = require("net");
// net은 Node.js에서 제공하는 TCP 서버를 열 수 있는 모듈이다.
const reqParser = require("./lib/req");
const resParser = require("./lib/res");
global.isJson = true;
// app.use(express.json())

const server = net.createServer((client) => {
  // TCP 서버를 생성한다.

  client.on("data", (data) => {
    // 매개변수 data => 요청을 받은 data
    console.log(data.toString());
    // 01.17 오늘은 req, res 구현할거임
    const req = reqParser(data.toString());
    console.log("req", req);
    const res = resParser(client, req);

    // res.send("Hi Block 7 with res send");
    res.sendFile("index.html");
    //express 서버에서 응답 보낼 때 => res.send(보낼 데이터)

    //     client.write(`HTTP/1.1 200 OK
    // Connection: Close
    // Content-Type: image/avif,image/webp,image/apng,*/*;q=0.8; charset=UTF-8
    // Content-Length: 10

    // Hi Block 7`);
  });
});

server.on("close", () => {
  // Socket 했을 때와 마찬가지로 통신에 대한 이벤트를 추가한다.
  console.log("연결 중지");
});

server.on("connection", () => {
  //
  console.log("연결 완료");
});

server.listen(4193, "127.0.0.1", () => {
  // listen << 서버가 들을 준비를 한다.
  // 즉, 요청을 받을 수 있도록 대기한다.
  // 매개변수로는 (port, ip, 서버 열고 실행할 함수)
  console.log("서버 열어따");
});
