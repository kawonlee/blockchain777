const B7Token = artifacts.require("B7Token");

module.exports = function (deployer) {
  deployer.deploy(B7Token, "Block7 Token", "B7T", 1000);
};
