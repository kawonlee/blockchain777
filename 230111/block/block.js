const merkle = require("merkle");
const SHA256 = require("crypto-js").SHA256;

class BlockHeader {
  version;
  merkleRoot;
  timestamp;
  height;
  difficulty;
  nonce;
  // private 키로 정의(생성)할 경우 키들이 객체에서 보이지 않는다.
  // 후에 통신할 때 다른 처리를 하려 했으나 쉽게 가기 위해서 private를 취소하겠다.

  constructor(_data, _previousBlock) {
    // 1-3
    this.version = "1.0.0";
    // this.merkleRoot = _data
    //   ? merkle("sha256").sync(_data).root()
    //   : "0".repeat(64);
    const merkleRoot = this.createMerkleRoot(_data);
    // 머클루트 생성 메서드 호출
    if (merkleRoot.isError) {
      // 오류일때 => isError = true일 때,
      this.merkleRoot = "";
      console.error(merkleRoot.msg);
    } else {
      // 오류가 아닐 때 => isError = false 일 때,
      this.merkleRoot = merkleRoot.value;
    }
    this.setTimestamp();
    // Date << 클래스, now << static 정의된 메서드
    // 이후에 체인에 블록을 연결하는 시점으로 블록 생성 시간을 정의하기 위해서 메서드를 만들었다.
    this.height = _previousBlock ? _previousBlock.height + 1 : 0;
    this.difficulty = 0;
    this.nonce = 0;
    // 1-4
  }

  setTimestamp() {
    this.timestamp = Date.now();
    // 밀리초(ms, 0.001s) 기준이다. 이 기준으로 시간을 재설정
  }

  createMerkleRoot(_data) {
    if (!Array.isArray(_data) || !_data.length) {
      // Array.isArray는 매개변수가 배열인지 확인한다.
      return { isError: true, msg: "data가 배열이 아니거나 빈 배열이다." };
    }
    return { isError: false, value: merkle("sha256").sync(_data).root() };
  }
}

class Block extends BlockHeader {
  previousHash;
  hash;
  data;

  constructor(_data, _previousBlock) {
    // 1-2
    super(_data, _previousBlock);
    // super는 부모 클래스의 constructor를 호출한다.(실행)
    this.previousHash = _previousBlock ? _previousBlock.hash : "0".repeat(64);
    // 1-5
    // this.hash =
    //   _data && _previousBlock ? Block.createHash(this) : "0".repeat(64);
    if (this.merkleRoot) {
      // 머클 루트가 있으면 = 정상적인 배열로 된 데이터가 입력(전달)되었다.
      this.hash = Block.createHash(this);
    } else {
      // 머클 루트가 없으면 = 배열이 아닌 데이터가 입력(전달)되었다.
      this.hash = "";
      // 이후 오류 발생 여부 확인용
    }
    this.data = _data;
    // 1-7
  }

  static createHash(_block) {
    // 1-6
    // 2-2
    let tempStr = "";
    // 블록의 정보를 임시로 합칠 string

    // _block.setTimestamp();
    // 이 과정이 끝나면 체인에 연결하게 된다.

    // tempStr += _block.version;
    // tempStr += _block.merkleRoot;
    // tempStr += _block.timestamp;
    // tempStr += _block.height;
    // tempStr += _block.difficulty;
    // tempStr += _block.nonce;
    // tempStr += _block.previousHash;
    // hash는 현재 만들고 있는 키라서 추가하지 않는다.
    // data는 merkleRoot로 합쳐져 있기 때문에 merkleRoot 대체한다.
    const keys = Object.keys(_block);
    // Object.keys => 객체의 키들을 배열로 가져온다(반환한다.)
    for (let i = 0; i < keys.length; i++) {
      if (keys[i] === "hash" || keys[i] === "data") {
        continue; // for, while 같은 반복문에서 아래의 코드를 실행하지 않고 위로 올라간다.
        // i가 0일 때 continue 시 아래의 코드를 실행하지 않고 위로 올라가 i++부터 실행하게 된다. 건너뛴다의 개념으로 생각하면 됨
      }
      tempStr += _block[keys[i]]; // string 형식
    }
    return SHA256(tempStr).toString().toUpperCase();

    // 2-3
  }

  static isValidBlock(_newBlock, _previousBlock) {
    // 생성된 블록이 정상인지 확인해보자
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
// 1-1

console.log(temp);
Block.createHash(temp);
// 2-1

module.exports = Block;
