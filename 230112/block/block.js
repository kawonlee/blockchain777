const merkle = require("merkle");
const SHA256 = require("crypto-js").SHA256;

class BlockHeader {
  version;
  merkleRoot;
  timestamp;
  height;
  difficulty;
  nonce;

  constructor(_data, _previousBlock) {
    this.version = "1.0.0";

    const merkleRoot = this.createMerkleRoot(_data);

    if (merkleRoot.isError) {
      this.merkleRoot = "";
      console.error(merkleRoot.msg);
    } else {
      this.merkleRoot = merkleRoot.value;
    }
    this.setTimestamp();
    this.height = _previousBlock ? _previousBlock.height + 1 : 0;
    this.difficulty = 0;
    this.nonce = 0;
  }

  setTimestamp() {
    this.timestamp = Date.now();
  }

  createMerkleRoot(_data) {
    if (!Array.isArray(_data) || !_data.length) {
      return { isError: true, msg: "data가 배열이 아니거나 빈 배열이다." };
    }
    return { isError: false, value: merkle("sha256").sync(_data).root() };
  }

  getDifficulty({
    previousDifficulty, // 이전 블록의 난이도
    adjustmentDifficulty, // 난이도 조절 단위 개수 이전의 블록 난이도 (현재 코드 기준 10개 전 난이도)
    adjustmentTimestamp, // 난이도 조절 단위 개수 이전의 블록 생성 시간
    DAI, // 난이도 조절 단위 개수
    averageGenerationTime, // 블록 세대 당 생성 시간(코드 기준 블록 10개당 생성 시간)
  }) {
    if (this.height < DAI) {
      this.difficulty = 0;
    }
    // 10개 이전에는 제네시스 블록 생성 시 설정한 난이도(0)로 설정(정의)
    else if (this.height < DAI * 2) {
      this.difficulty = 1;
    }
    // 20개 이전에는 제네시스 블록 생성 시 설정한 난이도보다 하나 더 높은 난이도가 설정된다.
    else if (this.height % DAI !== 0) {
      // 높이가 난이도 조절 단위 개수에 맞지 않을 때 이전 블록의 난이도로 설정한다. (즉, 10개 단위이면 단위에 포함되는 블록들은 이전 블록의 난이도를 따라간다.)
      this.difficulty = previousDifficulty;
    } else {
      const timeToken = this.timestamp - adjustmentTimestamp;
      // 10개 전 블록과 현재 블록의 생성 시간 차이 비교

      console.log("블록 생성 시간 :", this.timestamp);
      console.log("10개 전 블록 생성 시간 :", adjustmentTimestamp);
      console.log("10개 전 블록과 현재 블록의 생성 시간 차이 :", timeToken);
      console.log("10개당 블록 생성 시간 기준 :", averageGenerationTime);
      if (timeToken < averageGenerationTime * 0.5) {
        // 이전 10개 생성 시간이 5분보다 적게 걸렸을 때
        this.difficulty = adjustmentDifficulty + 1; // 난이도를 올려서 시간이 더 걸리도록 한다.
      } else if (timeToken > averageGenerationTime * 1.5) {
        // 이전 10개 생성 시간이 15분보다 오래 걸렸을 때
        this.difficulty = adjustmentDifficulty - 1;
      } else {
        // 생성 시간이 무난한 경우 난이도를 유지한다.
        this.difficulty = adjustmentDifficulty;
      }
    }
  }
}

class Block extends BlockHeader {
  previousHash;
  hash;
  data;

  constructor(_data, _previousBlock, _adjustmentBlock, _config) {
    super(_data, _previousBlock);
    this.previousHash = _previousBlock ? _previousBlock.hash : "0".repeat(64);
    if (this.merkleRoot) {
      if (_adjustmentBlock && _config) {
        // 제네시스 블록 생성 시 전달하지 않음으로 예외 처리
        this.getDifficulty({
          previousDifficulty: _previousBlock.difficulty,
          adjustmentDifficulty: _adjustmentBlock.difficulty,
          adjustmentTimestamp: _adjustmentBlock.timestamp,
          DAI: _config.DAI,
          averageGenerationTime: _config.averageGenerationTime,
        });
      }
      this.hash = Block.createHash(this);
    } else {
      this.hash = "";
    }
    this.data = _data;
  }

  static createHash(_block) {
    let tempStr = "";
    const keys = Object.keys(_block);
    for (let i = 0; i < keys.length; i++) {
      if (keys[i] === "hash" || keys[i] === "data") {
        continue;
      }
      tempStr += _block[keys[i]]; // string 형식
    }
    return SHA256(tempStr).toString().toUpperCase();
  }

  static isValidBlock(_newBlock, _previousBlock) {
    if (_newBlock.height !== _previousBlock.height + 1) {
      return { isError: true, msg: "높이가 달라유" };
    }
    if (_newBlock.previousHash !== _previousBlock.hash) {
      return {
        isError: true,
        msg: "이전 블록의 hash와 새로운 블록의 이전 hash가 달라유",
      };
    }
    if (_newBlock.hash !== Block.createHash(_newBlock)) {
      return { isError: true, msg: "hash 생성 중 오류 발생" };
    }
    return { isError: false, value: _newBlock };
  }
}

const temp = new Block();

console.log(temp);
Block.createHash(temp);

module.exports = Block;
