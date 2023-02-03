import Block from "@core/block/block";

class Chain {
  #chain: IBlock[];
  // #chain:Array<IBlock>

  #DIFFICULTY_ADJUSTMENT_INTERVAL: number = 10;

  #BLOCK_GENERATION_INTERVAL: number = 1;

  #TIME_UNIT: number = 1 * 1000;

  constructor() {
    this.#chain = [];
    const genesis = new Block([`제네시스 블록 ${new Date()}`]);
    this.#chain.push(genesis);
  }

  get chain(): Array<IBlock> {
    return [...this.#chain];
  }

  get lastBlock(): IBlock {
    return this.#chain[this.#chain.length - 1];
  }

  get config(): IConfig {
    return {
      DAI: this.#DIFFICULTY_ADJUSTMENT_INTERVAL,
      averageGenerationTime: this.#BLOCK_GENERATION_INTERVAL * this.#TIME_UNIT,
    };
  }

  get adjustmentBlock(): IBlock {
    const length: number = this.#chain.length;
    const interval: number = length - this.#DIFFICULTY_ADJUSTMENT_INTERVAL;
    if (interval < 0) return this.#chain[0];
    return this.#chain[interval];
  }

  addBlock(_data: Array<string>): IBlock | null {
    const newBlock = new Block(
      _data,
      this.lastBlock,
      this.adjustmentBlock,
      this.config
    );

    return this.add2Chain(newBlock);
  }

  add2Chain(_newBlock: IBlock): IBlock | null {
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

for (let i = 0; i < 200; i++) {
  chain.addBlock([`test block ${i}`]);
}
console.log(chain.chain);

export default Chain;
