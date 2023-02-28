const express = require("express");
const session = require("express-session");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const routes = require("./routes/index.js");
const db = require("./models/index.js");

const Web3 = require("web3");

dotenv.config();

const app = express();
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.use([express.static("public"), express.json()]);
app.set("port", process.env.PORT || 8081);

app.use((req, res, next) => {
  if (process.env.NODE_ENV === "production") morgan("combined")(req, res, next);
  else morgan("dev")(req, res, next);
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));

app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
    name: "single project",
  })
);

db.sequelize
  .sync({ force: false })
  .then(() => {
    console.log("디비 연결했다");
    const web3 = new Web3(
      new Web3.providers.WebsocketProvider("ws://localhost:8085")
    );

    web3.eth
      .subscribe("newBlockHeaders", (error, result) => {
        if (!error) {
          console.log(result);
        }
      })
      .on("data", async (blockHeader) => {
        const currBlock = await web3.eth.getBlock(blockHeader.number);
        console.log("신상블록", currBlock);
        let txData = currBlock.transactions;
        db.Block.create({
          ...currBlock,
          // transactions: JSON.stringify(currBlock.transactions),
        }).then(() => {
          if (txData.length === 0) return;
          for (let j = 0; j < txData.length; j++) {
            web3.eth.getTransaction(txData[j]).then((currBlock) => {
              console.log(currBlock);
              db.Transaction.create({
                ...currBlock,
                value: web3.utils.fromWei(currBlock.value),
              });
            });
          }
        });
      });

    const blockDB = () => {
      let currBlockNum = -1;
      db.Block.findOne({ order: [["number", "DESC"]] }).then((block) => {
        if (!block) currBlockNum = 0;
        else currBlockNum = block.number;
        web3.eth.getBlockNumber().then((num) => {
          console.log("블록높이", num);
          for (let i = currBlockNum + 1; i < num + 1; i++) {
            web3.eth.getBlock(i).then((data) => {
              let txData = data.transactions;
              db.Block.create({
                ...data,
                // transactions: JSON.stringify(data.transactions),
              }).then(() => {
                if (txData.length === 0) return;
                for (let j = 0; j < txData.length; j++) {
                  web3.eth.getTransaction(txData[j]).then((data) => {
                    console.log(data);
                    db.Transaction.create({
                      ...data,
                      value: web3.utils.fromWei(data.value),
                    });
                  });
                }
              }); // ...data로 then을 통해 받아온 getBlock 정보를 그대로 가져와서 transactions를 JSON을 통해 수정했다.
            });
          }
        });
      });
    };

    blockDB();
  })
  .catch((err) => {
    console.error(err);
  });

app.post("/getBlock", (req, res) => {
  db.Block.findAll({
    include: {
      model: db.Transaction,
      required: false, // 미포함된것도 가져온다. 조건식에 포함된 것만 가져오려면 true
    },
  }).then((data) => {
    console.log("tx포함", data[0].Transactions.length);
    res.send(data);
  });
});

app.post("/getTx", (req, res) => {
  db.Transaction.findAll().then((data) => {
    res.send(data);
  });
});

app.use("/api", routes);

app.listen(app.get("port"), () => {
  console.log(`${app.get("port")}` + "포트 열었따");
});

// node 8081 http 8080 ws 8085
