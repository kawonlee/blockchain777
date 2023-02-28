const Router = require("express");
const db = require("../models/index");
const Web3 = require("web3");
const Op = require("sequelize/lib/operators");

const router = Router();

const web3 = new Web3(
  new Web3.providers.WebsocketProvider("ws://localhost:8085")
);

router.post("/balance", (req, res) => {
  web3.eth.getBalance(req.body.wallet).then((balance) => {
    const etherBalance = web3.utils.fromWei(balance, "ether");
    res.send(etherBalance);
  });
});

router.post("/walletInfo", (req, res) => {
  db.Transaction.findAll({
    where: {
      [Op.or]: [{ from: req.body.wallet }, { to: req.body.wallet }],
    },
    include: {
      model: db.Block,
      required: false,
    },
  }).then((data) => {
    res.send(data);
  });
});
module.exports = router;
