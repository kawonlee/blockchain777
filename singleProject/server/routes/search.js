const Router = require("express");
const db = require("../models/index");
const Op = require("sequelize/lib/operators");

const router = Router();

router.post("/searchData", (req, res) => {
  const temp = req.body.searchData.toString().slice(0, 2);
  console.log(
    "111",
    req.body.searchData.toString().length,
    typeof +req.body.searchData
  );
  if (req.body.searchData.toString().length === 66) {
    db.Transaction.findOne({
      where: {
        hash: req.body.searchData,
      },
    }).then((result) => {
      if (result) res.send({ data: "txHash", condition: true });
      else res.send({ condition: false });
    });
  } else if (req.body.searchData.toString().length === 42) {
    db.Transaction.findOne({
      where: {
        [Op.or]: [{ from: req.body.searchData }, { to: req.body.searchData }],
      },
    }).then((result) => {
      if (result) res.send({ data: "address", condition: true });
      else res.send({ condition: false });
    });
  } else if (
    req.body.searchData.toString().length < 42 &&
    temp != "0x" &&
    typeof req.body.searchData == "number"
  ) {
    db.Block.findOne({
      where: {
        number: req.body.searchData,
      },
    }).then((result) => {
      if (result) res.send({ data: "block", condition: true });
      else res.send({ condition: false });
    });
  } else res.send({ condition: false });
});

module.exports = router;
