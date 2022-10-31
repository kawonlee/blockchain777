import { Router } from "express";

const router = Router();
const todoList = [];

router
  .route("/")
  .get((req, res) => {
    res.send({
      list: todoList,
    });
  })
  .post((req, res) => {
    todoList.push({ text: req.body["do-name"], time: req.body.time });
    res.end();
  });
export default router;
// module.exports = router
