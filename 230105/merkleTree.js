// merkle, crypto-js 라이브러리 가져오고
const merkle = require("merkle");
const SHA256 = require("crypto-js/sha256");

// 트리를 만들고 루트값을 반환해주는 함수
const createMerkle = (_data) => {
  // _data = ["15131", "이가원", "77777", "블록체인"]
  // 받은 매개변수 값이 배열인지 확인
  if (!Array.isArray(_data)) return "너 배열 아님";

  // 배열의 값을 전체 암호화해서 반환 해준다.
  let merkleArr = _data.map((item) => SHA256(item).toString().toUpperCase());

  // 조건 : 머클루트가 한 개의 값으로 나올 때까지
  // merkleArr의 길이가 1이 될 때 까지 반복
  while (merkleArr.length > 1) {
    const tempArr = [];
    for (let i = 0; i < merkleArr.length; i += 2) {
      if (i + 1 === merkleArr.length) {
        tempArr.push(merkleArr[i]);
      } else {
        tempArr.push(
          SHA256(merkleArr[i] + merkleArr[i + 1])
            .toString()
            .toUpperCase()
        );
      }
    }

    merkleArr = tempArr;
  }
  return merkleArr[0];
};

const libMerkle = (_data) => {
  // 암호화방식은 sha256이고 매개변수로 전달받은 배열을 트리구조로 만들어주고 root값을 가져온다.
  const merkleRoot = merkle("SHA256").sync(_data).root();
  return merkleRoot;
};

const data = ["15131", "이가원", "77777", "블록체인", "11111"];

console.log("createMerkle :", createMerkle(data));
console.log("libMerkle :", libMerkle(data));

exports.createMerkle = createMerkle;
exports.libMerkle = createMerkle;
exports.data = data;
