const request = axios.create({
  method: "POST",
  baseURL: "http://localhost:8545",
  headers: {
    "contenet-type": "application/json",
  },
});

const temp = async () => {
  const {
    data: { result },
  } = await request({
    data: {
      id: 1337,
      jsonrpc: "2.0",
      method: "eth_getBlockByNumber",
      params: ["latest", true],
    },
  });
  console.log(result);
};

// 블록 정보 받아서 HTML에 출력해보기
// 트랜잭션 정보 받아서 HTML에 출력해보기
