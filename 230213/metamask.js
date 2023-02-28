const nowAccountElem = document.getElementById("now-account");
const nowBalanceElem = document.getElementById("balance");
const toElem = document.getElementById("to");
const etherElem = document.getElementById("ether");

console.log(window.ethereum); // 메타마스크 확장 프로그램에서 제공하는 객체

if (window.ethereum) {
  const isConnected = window.ethereum.isConnected();
  console.log("javascript 읽자마자 isConnected :", isConnected);

  const getBalance = async (accounts) => {
    nowAccountElem.innerHTML = accounts[0];

    const balance = await ethereum.request({
      method: "eth_getBalance",
      // params: ["0xD35934009b78777B35a35E64Ef62211fFd036036"],
      params: accounts,
    });
    console.log(parseInt(balance) / Math.pow(10, 18));
    nowBalanceElem.innerHTML = parseInt(balance) / Math.pow(10, 18);
  };

  ethereum.on("connect", async (connectInfo) => {
    console.log(connectInfo);
    console.log(parseInt(connectInfo.chainId));

    const isConnected = window.ethereum.isConnected();
    console.log("connect 후 isConnected :", isConnected);

    try {
      const accounts = await ethereum.request({
        // method: "eth_accounts", << 결과는 아래와 같은 지금은 아래로 이름이 변경됐다.
        method: "eth_requestAccounts",
      });

      //   nowAccountElem.innerHTML = accounts[0];

      //   const balance = await ethereum.request({
      //     method: "eth_getBalance",
      //     // params: ["0xD35934009b78777B35a35E64Ef62211fFd036036"],
      //     params: accounts,
      //   });
      //   console.log(parseInt(balance) / Math.pow(10, 18));
      //   nowBalanceElem.innerHTML = parseInt(balance) / Math.pow(10, 18);
      await getBalance(accounts);
    } catch (error) {
      console.log(error);
    }
  });

  ethereum.on("accountsChanged", async (accounts) => {
    console.log(accounts);
    // nowAccountElem.innerHTML = accounts[0];

    //   const balance = await ethereum.request({
    //     method: "eth_getBalance",
    //     // params: ["0xD35934009b78777B35a35E64Ef62211fFd036036"],
    //     params: accounts,
    //   });
    //   console.log(parseInt(balance) / Math.pow(10, 18));
    //   nowBalanceElem.innerHTML = parseInt(balance) / Math.pow(10, 18);
    await getBalance(accounts);
  });

  ethereum.on("chainChanged", (chainId) => {
    console.log(chainId);
  });

  document.getElementById("sendTransaction").onclick = () => {
    const from = nowAccountElem.innerHTML;
    const to = toElem.value;
    const value = "0x" + (+etherElem.value * Math.pow(10, 18)).toString(16); // number도 스트링으로 들어옴
    ethereum
      .request({
        method: "eth_sendTransaction",
        params: [
          {
            from,
            to,
            value,
          },
        ],
      })
      .then((result) => {
        console.log(result); // transaction의 거래번호 (해시값)
        getBalance([from]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
