// 패키지 초기화 npm init -y

// 설치 명령어 npm i merkle crypto-js hex-to-binary

// 라이브러리들을 가져오기
const merkle = require("merkle");
const SHA256 = require("crypto-js").SHA256;

// 암호화
const hexToBinary = require("hex-to-binary");
// hex 방식(0~F)으로 지정된 데이터를 바이너리 방식(0~1)으로 변환시켜준다

// 최초블록에서 10번째 블록까지는 난이도가 0
// 그 이후 11~20 난이도 0으로 빠르게 생성
// 그 후 생성되는 블록의 21번째부터 난이도 수치가 조절될 수 있게

// 난이도 조절용 수치를 미리 정해놓는다. -> 블록 생성 시간을 조절하기 위해서
// 최초에 난이도 조절할 때 최초블록부터 이 수치까지는 난이도 증가 없이 0으로 주려고 만든 값
const DIFFICULTY_ADJUSTMENT_INTERVAL = 10;

// 난이도 조절에 대한 단위 개수, 난이도를 변경하는 기준
const BLOCK_GENRATION_INTERVAL = 10;

//블록이 하나당 걸리는 시간
const TIME_UNIT = 60 * 1000;
// 블록 10개를 만드는데 걸리는 시간 10분
// 1개에 대한 시간 단위(1m = 60s * 1000ms)

module.exports = {
  lib: {
    merkle,
    SHA256,
    hexToBinary,
  },
  constant: {
    DIFFICULTY_ADJUSTMENT_INTERVAL,
    BLOCK_GENRATION_INTERVAL,
    TIME_UNIT,
  },
};
