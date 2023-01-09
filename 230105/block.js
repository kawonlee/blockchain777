const merkle = require("merkle");
const SHA256 = require("crypto-js/sha256");

// block Header 클래스
class Header {
  constructor(_height, _previoutHash) {
    // _는 매개변수, _없으면 변수
    this.version = Header.getVersion();
    // 블록의 버전

    this.height = _height;
    // 블록의 높이

    this.timeStamp = Header.getTimeStamp();
    // 블록의 생성시간

    this.previousHash = _previoutHash || "0".repeat(64); // 이전 해시가 있는지 없는지 모르기 때문에 조건문으로
    // 이전 블록의 해시 값
    // 최초 블록은 이전 블록의 해시값이 없으니까 값이 없으면
    // 0으로 만들려고 문자열 넣어줌

    // static으로 함수를 생성하는 경우 this로 불러오는 것이 아닌 class명.함수로 불러와야한다.
  }
  // static으로 만들어서 전역으로 사용할 수 있는 함수
  // class 동적할당하는데 일반적인 함수로 만들면 생성된 객체의 함수
  // static으로 만들면 불필요한 데이터를 절약할 수 있다. 클래스 자체에 전역적으로 만들어지고, 동적할당할 때 생기지 않는다.
  static getVersion() {
    return "1.0.0";
  }
  static getTimeStamp() {
    return Date.now();
  }
}

// 예를 들어 일반적인 함수는 New로 동적할당 할 때마다 C라는 함수가 있으면
// 동적할당한 A와 B에 둘 다 생성한 객체 안에 함수가 들어있지만
// static 선언 시 클래스에 전역함수 하나만 있게 된다. 동적할당할 때마다 생성 될 필요가 없는 함수는 static으로 선언해주는것이 좋다.

// 그냥 블록 자체가 될 클래스
class Block {
  constructor(_header, _data) {
    this.version = _header.version;
    // 받아온 헤더의 버전을 블록에게 주고
    this.height = _header.height;
    // 블록의 높이 받아옴
    this.timeStamp = _header.timeStamp;
    // 헤더에서 블록 생성 시간 가져옴
    this.previousHash = _header.previousHash;
    // 이전 해시 헤더에서 가져옴
    this.merkleRoot = Block.getMerkleRoot(_data);
    // 블록의 머클루트
    this.hash = Block.createBlockHash(_header, Block.getMerkleRoot(_data));
    // 블록의 해시
    this.data = _data;
  }

  // 머클루트를 반환해줄 함수
  static getMerkleRoot(_data) {
    const merkleRoot = merkle("sha256").sync(_data).root();
    // merkle 라이브러리를 사용해서 sha256 알고리즘으로 암호화 트리구조 만들고 루트 값 반환
    return merkleRoot;
  }

  // 블록의 해시값을 반환해줄 함수
  static createBlockHash(_header, _merkleRoot) {
    // _header의 value들을 뽑아서 담고
    const values = Object.values(_header);
    // join은 배열을 문자열로 합쳐준다. 매개변수로 전달된 값이 구분점
    // ex) [1,2,3,4,5,6] => join(",") => "1,2,3,4,5,6" || join("") => "123456"
    const data = values.join("") + _merkleRoot;
    // 데이터를 다 더해서 값을 해싱해서 반환
    return SHA256(data).toString().toUpperCase();
  }
}

// 변수에 데이터 내용을 담고
const data = [
  "The Time 03/Jan/2009 Chancellor on brink of second ballout for banks",
];

// block Header 생성
// 첫 블록이라서 이전 해시값은 넣지 않는다.
const header = new Header(0);
const block = new Block(header, data);

console.log(block);

// 두번째 블록
const secondHeader = new Header(1, block.hash);
const secondBlock = new Block(secondHeader, ["난 두번째 블록"]);

console.log("2 :", secondBlock);
