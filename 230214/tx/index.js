// npm i ethereumjs-tx
//  - 트랜잭션 관련 라이브러리
const ethTx = require("ethereumjs-tx").Transaction;

const tx = new ethTx({
  from: "0xcf2CC9c2115FE3Bfe5B4CE789DBa49f1Ed7C2e2D",
  to: "0x8c72Be33d362c427F5C484e783a0F86dc038F841",
  value: "0x" + Math.pow(10, 18).toString(16),
});
console.log(tx);
console.log(tx.r);
console.log(tx.v);
console.log(tx.s);

tx.sign(
  Buffer.from(
    "745fcd5b0d8b00955b3e1084cd99a1a92a260c6772e4fac61e7872bb4c2c3010",
    "hex"
  )
);

console.log(tx);
console.log(tx.r);
console.log(tx.v);
console.log(tx.s);

console.log(tx.serialize().toString("hex"));

// sendTransaction을 하면 txpool에 있든 block에 들어가든 이미 서명이 되어있는 상태다. 수동으로 서명해줄 일이 없다.
// 트랜잭션에 포함된 rvs데이터의 유무에 따라 서명을 했는지 안했는지 구분할 수 있다.
