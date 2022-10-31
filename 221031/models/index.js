"use strict"; // 엄격모드 = ES6안됨, var 안되고 코드 작성에 제한을 준다.

// DB의 Table에 관련해서 전부 관리한다.
// MVC = Model, View, Controller
// 프로그래밍의 기초, 디자인 패턴 중 하나로 보통의 프로그래밍에서 많이 사용된다.
// View : 보이는거, Controller: 조작, 통제하는 거, Model : 저장하는 거

const Sequelize = require("sequelize");
// sequelize : DB에 연결한다. => 무슨 DB든 다 가능하다.
// mysql2 : DB에 연결한다. => mySQL에 접근

const Table1 = require("./table1.js");
const Table2 = require("./table2.js");

const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = { Table1, Table2 };

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

Table1.init(sequelize);
Table2.init(sequelize);

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
