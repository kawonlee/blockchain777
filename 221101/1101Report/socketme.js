const socket = require("socket.io");

module.exports = (server) => {
  // 매개변수로 들어가는 명칭은 server가 아닌 다른 명칭으로 기재해도된다.
  const io = socket(server); // io = server 그 자체임
  io.on("connection", (ws) => {
    // 각각의 소켓(클라이언트)들 = ws, io = 소켓서버
    console.log("정상연결");
    ws.on("hi", (data) => {
      // "hi" emit으로 보낸것은
      //"hi" on만을 찾기 때문에 다시 값을 보낼 때
      //emit에 같은 "hi"를 보내도 중첩되지 않는다.
      console.log(data);
      ws.broadcast.emit("hi", data); //broadcast = 나를 제외한 모두, io = 서버 자체이므로 나를 포함한 모두
    });
    ws.on("bye", (data) => {
      io.emit("bye", data);
    });
    ws.on("chatting", (data) => {
      io.emit("chatting", data);
    });
  });
  // 콜백함수 = 무언가를 했을때만 동작한다. ex) onclick -> 클릭했을 때만 뒤에 함수 내용을 실행하겠다.
};
