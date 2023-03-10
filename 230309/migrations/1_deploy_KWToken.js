const KWToken = artifacts.require("KWToken");

module.exports = function (deployer) {
  deployer.deploy(KWToken, "KWToken", "KW", 1000);
};
