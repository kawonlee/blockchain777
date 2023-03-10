const counter = artifacts.require("Counter");

module.exports = function (deployer) {
  deployer.deploy(counter);
};

// 4번줄이 돌 때 마다 1트랜잭션이라고 생각하면됨/ 그래서 각기 블록에 존재함
