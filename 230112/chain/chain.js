const Block = require("../block/block");

class Chain {
  #chain;
  // 난이도를 통해서 문제(퀴즈)를 풀게 되고 문제 해결된 블록을 체인에 추가하게 된다. << 문제 풀이 과정을 마이닝이라고 한다.
  // 왜 문제 풀이를 하는가? 블록의 생성 시간을 조절하기 위해서
  // 결국 난이도는 블록의 생성 시간을 조절하기 위해서 높아졌다가 낮아졌다가 하게 된다.
  #DIFFICULTY_ADJUSTMENT_INTERVAL = 10;
  // 난이도 조절을 결정하는 블록의 개수(난이도 조절 단위 개수)
  // 블록이 10개 생성될 때마다 난이도를 조절(재정의)한다.
  #BLOCK_GENERATION_INTERVAL = 10;
  // 블록 10개당 생성에 걸리는 시간(블록 세대당 생성 시간)
  // 10개는 위에서 설정한 수 (DIFFICULTY_ADJUSTMENT_INTERVAL)
  #TIME_UNIT = 60 * 1000;
  // 시간의 단위 설정(규격)
  // 60s * 1000ms => 1m(분)

  // 전부 대문자로 변수명을 적는 이유? : 상수라서. 즉 앞으로 절대 변하지 않는 변수, 상수라고 무조건적으로 모두 대문자로 적을 필요는 없다.
  // 일반적인 개발자들 사이에서의 관례, 규칙이기 때문
  constructor() {
    this.#chain = [];
    const genesis = new Block(`제네시스 블록 ${new Date()}`);
    this.#chain.push(genesis);
  }

  get chain() {
    return [...this.#chain];
  }

  get lastBlock() {
    return this.#chain[this.#chain.length - 1];
  }

  get config() {
    // 난이도 조절 관련 설정들을 한 번에 가져가서 사용할 수 있게 묶는다.
    return {
      DAI: this.#DIFFICULTY_ADJUSTMENT_INTERVAL,
      // 난이도 조절 단위 개수
      averageGenerationTime: this.#BLOCK_GENERATION_INTERVAL * this.#TIME_UNIT,
      // 10개 블록 생성 되는 시간
    };
  }

  get adjustmentBlock() {
    const length = this.#chain.length; // 현재 체인의 길이
    const interval = length - this.#DIFFICULTY_ADJUSTMENT_INTERVAL; // 난이도 조절 단위 개수 전 index
    if (interval < 0) return this.#chain[0]; // 음수 index는 말이 안되니까 제네시스 블록 내보냄
    return this.#chain[interval]; // 양수일 땐 index에 포함되니까 그대로 넣어서 내보냄
    // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10(얘에서 난이도 재설정)
    // 제네시스 블록 후 9개의 블록이 추가됐다. << 0
    // 10이 추가될 때 난이도를 수정하게 된다. << 1
    // 10, 11, .... 19 << 난이도 1
    // 20이 추가될 때 10 index의 블록 >> 단위로 잘랐을 때 첫번째 index의 블록 = adjustmentBlock
  }

  addBlock(_data) {
    const newBlock = new Block(
      _data,
      this.lastBlock,
      this.adjustmentBlock,
      this.config
    );

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

const chain = new Chain();

for (let i = 0; i < 32; i++) {
  // 테스트용 블록 32개 추가
  chain.addBlock([`test block ${i}`]);
}
console.log(chain.chain);

module.exports = Chain;
