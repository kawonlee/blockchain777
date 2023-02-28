const Compiler = require("./compiler");
const Client = require("./web3");
const {
  Test: { abi, bytecode },
} = Compiler.compile("Test.sol");

const client = new Client("http://127.0.0.1:8545");

const txObj = { data: bytecode };

const contract = new client.web3.eth.Contract(abi); // 클래스로 인스턴스 생성
// 어제의 contract=eth.contract(...)와 같다.

async function init() {
  const instance = await contract.deploy(txObj).send({
    from: "0xdF5DbFe4Fb619E965e05792c51BE4B40767B98e4",
    gas: 1000000,
  });
  // 어제의 eth.sendTransaction(txObj)와 같다.
  console.log(instance);
  console.log(instance.options.address); // CA : 0x774C9AB66B4570a8776ae7956D74c3eAb9Bec52e
}
// init();

async function test() {
  const accounts = await client.web3.eth.getAccounts(); // 함수 호출
  //   console.log(accounts.length);

  const ca = "0x774C9AB66B4570a8776ae7956D74c3eAb9Bec52e";
  const deployed = new client.web3.eth.Contract(abi, ca); // 어제자 수업 4,5번이 합쳐져있음

  let text = await deployed.methods.getText().call();
  console.log("text", text);

  await deployed.methods.setText("I want go Home").send({ from: accounts[1] });
  text = await deployed.methods.getText().call();
  console.log("text2", text);

  const balance = await client.web3.eth.getBalance(accounts[1]);
  console.log(balance);
}
test();
