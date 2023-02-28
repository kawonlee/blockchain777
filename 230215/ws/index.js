const express = require("express");
const Web3 = require("web3");

const app = express();

const web3 = new Web3(
  new Web3.providers.WebsocketProvider("ws://localhost:8081")
);

//geth에서 websocket 열기
// --ws --ws.port 8081 --ws.addr "0.0.0.0" --ws.origins "*" => console.log(result) 안찍히는 경우 ws.addr 라인 빼버리기(node ver 문제로 추정 난 16 되는사람은 대부분 18점대)

web3.eth.subscribe("newBlockHeaders", (error, result) => {
  if (!error) {
    console.log(result);
  }
});

app.listen(8000, () => {
  console.log("8080 server open");
});

// node 8000 | ws 8001 | http 5501 | geth 8080
