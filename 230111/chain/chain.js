const Block = require("../block/block");

class Chain {
  // 체인은 배열로 만들거다.
  #chain;
  // 아무 데이터, 정보 등등을 체인에 넣지 못하도록 외부에서의 접근을 막기 위해 private로 설정/ 해당 설정 후 23번 줄 push가 먹지 않는다.

  constructor() {
    this.#chain = [];
    const genesis = new Block(`제네시스 블록 ${new Date()}`);
    console.log(new Date());
    this.#chain.push(genesis);
  }

  get chain() {
    return [...this.#chain];
    // 외부에서 #chain 접근 시 새로운 배열을 만들어서 준다.(반환한다)
  }

  get lastBlock() {
    return this.#chain[this.#chain.length - 1];
  }

  addBlock(_data) {
    const newBlock = new Block(_data, this.lastBlock);
    // 제네시스 블록만 있을 때 체인의 길이는? 1 [제네시스 블록]
    // - 제네시스 블록의 인덱스는? 0
    // 블록 하나를 추가했다. [제네시스 블록, 추가 블록]
    // - 체인의 길이 : 2
    // - 제네시스 블록의 인덱스는? 0
    // - 제네시스 블록의 다음 블록의 인덱스는? 1
    // - 제네시스 블록의 다음 블록의 다음 블록의 인덱스는? 없음. 추가안했으니까
    // - 마지막 블록의 인덱스는 1 << 길이가 2일 때 1을 구해야함

    // const isValid = Block.isValidBlock(newBlock, this.lastBlock);
    // if (isValid.isError) {
    //   console.error(isValid.msg);
    //   return null;
    // } else {
    //   this.#chain.push(newBlock);
    //   return newBlock;
    // }

    // chain = [1,2,3] => 4번 블록 추가
    // 4번 블록은 3번 블록을 알고 있어야한다.(previousHash)
    // chain 기준으로 2번 인덱스의 블록을 가져와야함 => 즉 3을 가져와야함

    return this.add2Chain(newBlock);
  }

  add2Chain(_newBlock) {
    const isValid = Block.isValidBlock(_newBlock, this.lastBlock);
    if (isValid.isError) {
      console.error(isValid.msg);
      return null;
    } else {
      this.#chain.push(_newBlock);
      return _newBlock;
    }
  }
}

// const chain = new Chain();
// console.log(chain.chain);
// const block = new Block(["qwer"], chain.lastBlock); // 이때 기준 chain.lastBlock = genesis Block / block 높이 1
// console.log("블락임", block);
// chain.addBlock(["1234"]);
// chain.addBlock(["5678"]);
// chain.addBlock(["asdf"]);
// // 블록 세개 추가 = 높이 3

// chain.add2Chain(block); // 이후에 만들었던 블록을 추가하려고 하니 높이가 다르다가 뜨는 것. block은 높이 1, 생성한 블록들 높이 3
// // 서순을 바꿔주면 정상 출력

// console.log(chain.chain);

module.exports = Chain;
