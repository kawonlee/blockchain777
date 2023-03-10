const solc = require("solc");
const fs = require("fs");
const path = require("path");

// const contractPath = path.join(__dirname, "contracts", "Test.sol");

// // fs.readFile(contractPath, { encoding: "utf-8" }, (err, data) =>
// //   console.log("data", data)
// // );
// // const temp = fs.readFileSync(contractPath, "utf-8");
// // console.log("temp", temp);

// const data = JSON.stringify({
//   language: "Solidity",
//   sources: {
//     "Test.sol": {
//       content: fs.readFileSync(contractPath, "utf-8"),
//     },
//   },
//   settings: {
//     outputSelection: {
//       "*": {
//         "*": ["*"],
//       },
//     },
//   },
// });

// const compiled = JSON.parse(solc.compile(data));
// // console.log(compiled);
// // fs.writeFileSync(path.join(__dirname, "Test.json"), JSON.stringify(compiled));

// // console.log(compiled.contracts["Test.sol"]);
// const {
//   abi,
//   evm: { bytecode },
// } = compiled.contracts["Test.sol"].Test;
// // const abi = compiled.contracts["Test.sol"].Test.abi;
// // const bin = compiled.contracts["Test.sol"].Test.evm.bytecode.object;
// // 38~39는 34~37번줄과 동일한 코드
// const bin = bytecode.object;

// console.log(abi);
// console.log(bytecode.object);

// fs.writeFileSync(
//   path.join(__dirname, "bytecode.json"),
//   JSON.stringify(bytecode)
// );

class Compiler {
  /**
   *
   * @param {string} _fileName 파일 이름 / **로 해당 주석 만들 수 있음
   */
  static compile(_fileName) {
    const contractPath = path.join(__dirname, "contracts", _fileName);
    const data = JSON.stringify({
      language: "Solidity",
      sources: {
        [_fileName]: {
          content: fs.readFileSync(contractPath, "utf-8"),
        },
      },
      settings: {
        outputSelection: {
          "*": {
            "*": ["*"],
          },
        },
      },
    });
    console.log("data", data);
    const compiled = solc.compile(data);
    return Compiler.writeOutput(JSON.parse(compiled));
  }
  /**
   *
   * @param {*} _compiled 컴파일 된 솔리디티 객체
   */

  static writeOutput(_compiled) {
    const result = {};
    for (const contractFileName in _compiled.contracts) {
      console.log(contractFileName);
      const [contractName] = contractFileName.split(".");
      // 구조분해할당
      console.log(contractName);
      const contract = _compiled.contracts[contractFileName][contractName];
      // 객체에서 키에 대한 값을 가져오는데 키를 변수로 입력할 경우 대괄호([])를 사용한다.
      const abi = contract.abi;
      const bytecode = contract.evm.bytecode.object;
      const tempObj = { abi, bytecode };
      const buildPath = path.join(__dirname, "build", `${contractName}.json`);
      fs.writeFileSync(buildPath, JSON.stringify(tempObj));
      //   fs.writeFileSync(
      //     path.join(__dirname, "build", `${contractName}.abi`),
      //     JSON.stringify(abi)
      //   );
      //   fs.writeFileSync(
      //     path.join(__dirname, "build", `${contractName}.bin`),
      //     bytecode
      //   );
      result[contractName] = tempObj; // contractName을 키로 tempObj라는 값을 가진다.
    }
    return result;
  }
}

const a = { b: "c" };
console.log(a.b, a["b"]);

module.exports = Compiler;
