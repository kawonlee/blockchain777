const Router = require("express");
const db = require("../models/index");
const Web3 = require("web3");

const router = Router();

const web3 = new Web3(
  new Web3.providers.WebsocketProvider("ws://localhost:8085")
);

router.post("/blockInfo", (req, res) => {
  db.Block.findOne({
    where: { number: req.body.blockNum },
    include: {
      model: db.Transaction,
      required: false,
    },
  }).then((data) => {
    console.log("높이데이터", data);
    res.send(data);
  });
});

router.post("/allBlock", (req, res) => {
  db.Block.findAll({
    limit: req.body.limit,
    offset: req.body.limit * req.body.page,
    order: [["number", "DESC"]],
    include: {
      model: db.Transaction,
      required: false,
    },
  }).then((data) => {
    res.send(data);
  });
});

router.post("/blockHeight", async (req, res) => {
  const bHeight = await web3.eth.getBlockNumber();
  res.send(bHeight.toString());
});

module.exports = router;
