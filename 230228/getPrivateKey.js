const keythereum = require("keythereum");
const path = require("path");

const address = "0xa2b4a86c5302773f4a21e2b41731327b41b367ea";
//0xA2B4a86C5302773f4a21e2b41731327B41B367ea

const keyObj = keythereum.importFromFile(address, __dirname);

const privateKey = keythereum.recover("1234", keyObj);

console.log(privateKey.toString("hex"));
