const TestToken = artifacts.require("TestToken");

module.exports = function (deployer) {
  deployer.deploy(TestToken, "ST");
};

// 0x44caa7422be32e9a25ede5b59d636d76aadeaeb6 - CA
// 가나슈에서 계정 불러온 다음 토큰 가져오기에 해당 CA를 입력하면 세팅해두었던 값을 불러온다.
