const Router = require("express");
const db = require("../models/index");

const router = Router();

router.post("/txInfo", (req, res) => {
  db.Transaction.findOne({
    where: { hash: req.body.txHash },
    include: {
      model: db.Block,
      required: false,
    },
  }).then((data) => {
    console.log("트랜잭션", data);
    res.send(data);
  });
});

router.post("/allBlockTx", (req, res) => {
  db.Transaction.findAll({
    where: { blockNumber: req.body.blockNum },
    limit: req.body.limit,
    offset: req.body.offset * req.body.limit,
  }).then((data) => {
    res.send(data);
  });
});

router.post("/allTx", (req, res) => {
  db.Transaction.findAll({
    limit: req.body.limit,
    offset: req.body.offset * req.body.limit,
  }).then((data) => {
    res.send(data);
  });
});

router.post("/txLength", (req, res) => {
  db.Transaction.findAll().then((data) => res.send(data));
});

module.exports = router;
