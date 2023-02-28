const Router = require("express");
const block = require("./block");
const tx = require("./tx");
const address = require("./address");
const search = require("./search");
const router = Router();

router.use("/block", block);
router.use("/tx", tx);
router.use("/address", address);
router.use("/search", search);

module.exports = router;
