const router = require("express").Router();

const { Table1, Table2 } = require("../models/index.js");
// router.get("/", (req, res, next) => {
//   res.cookie("middle", "testing", {
//     expires: new Date(Date.now() + 1000 * 60),
//   });
//   next();
// });
// 3~6번째 줄이 미들웨어다.

router.get("/", async (req, res) => {
  const { body, query } = req;
  const options = {
    include: [
      {
        model: Table2,
        as: "Table2s",
      },
    ],
  };
  if (query.column2) {
    options.where = {
      // 어떤 조건으로 찾을거냐?
      column2: query.column2, // column2가 query.column2인 애를 찾겠다.
    };
  }
  const tempTables = await Table1.findAll(options);
  /* 
  const tempTables = await Table1.findAll({
    where : {
        column2: query.column2
    }
  });
  
  */
  res.send({ name: "get", body, query, tempTables });
});

router.post("/", async (req, res) => {
  const { body, query } = req;
  const tempTable = await Table1.create({
    column1: body.column1,
  });
  res.send({ name: "post", body, query, tempTable });
});

router.put("/", async (req, res) => {
  // 수정 시 전부 수정을 요청할 때 = put
  const { body, query } = req;
  const tempTable = await Table1.update(
    {
      column1: body.column1,
      // 수정할 정보를 입력한다. (value)
    },
    {
      where: {
        column2: body.column2, // option
      },
    }
  );
  res.send({ name: "put", body, query });
});

router.patch("/", (req, res) => {
  // 일부분 수정을 요청할 때 = patch
  const { body, query } = req;
  res.send({ name: "patch", body, query });
});

router.delete("/", async (req, res) => {
  const { body, query } = req;
  const tempTable = await Table1.destroy({
    where: {
      column1: query.column1,
    },
  });
  res.send({ name: "delete", body, query, tempTable });
});

// GET / POST / PUT / PATCH / DELETE
// 이렇게 다섯가지 방식을 사용하는 것을 REST Api라고 한다.
// REST API = RESTFUL API = RESTFUL
// HTTP 통신, 즉 Web 통신을 할 때 기본적으로 사용되는 방식이다.
// REST API VS GraphGL << 요런 놈도 있긴 하다.

// CRUD => sequelize / mySQL
// Create => create 메서드 / 쿼리문에선 insert
// Read => finedAll || findOne 메서드 / 쿼리문에선 select
// Update => update 메서드 / 쿼리문에서도 update
// Delete => destroy 메서드 / 쿼리문에선 delete
module.exports = router;
