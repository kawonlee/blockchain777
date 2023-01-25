// 230111 과제 풀이
// Hex : 16진수 Hexadecimal
//  - 암호화했을 때 나오는 수의 형태
// Dex : 10진수 Decimal
// Oct : 8진수 Octal
// Bin : 2진수 Binary
//  - 컴퓨터가 사용하는 수 << bit / 평소에 쓰는거 byte == 8bit

function changeInt(number) {
  // 숫자의 소숫점을 버리기 위해서
  let str = `${number}`;
  let value = 0;
  for (let i = 0; i < str.length; i++) {
    let tempNumber = +str[i];
    if (tempNumber > -1 && tempNumber < 10) {
      value *= 10;
      value += tempNumber;
    } else {
      // NaN이 나왔다. 즉 숫자가 아니다.
      break;
    }
  }
  return value;
}

function pow(x, n) {
  // x를 n승으로 제곱
  let value = 1;
  for (let i = 0; i < n; i++) {
    value *= x;
  }
  return value;
}

function dec2hex(dec) {
  // 10진수를 16진수로
  let value = "";
  while (dec) {
    switch (dec % 16) {
      // 10진수를 16으로 나눠서 그 나머지를 사용한다.
      // 0~15까지 사용한다. 0~9까지는 그대로 사용한다. 10~15까지는 한자리로 나타내야하기 때문에 알파벳 A~F를 사용한다.

      //10~15까지 case문으로처리
      case 10:
        value = "A" + value;
        break;
      case 11:
        value = "B" + value;
        break;
      case 12:
        value = "C" + value;
        break;
      case 13:
        value = "D" + value;
        break;
      case 14:
        value = "E" + value;
        break;
      case 15:
        value = "F" + value;
        break;

      default:
        // 0~9까지를 처리한다.
        value = (dec % 16) + value;
        break;
    }
    // dec = +`${dec / 16}`.split(".")[0];
    dec = parseInt(dec / 16);
  }
  return value;
}

console.log("10진수를 16진수로", dec2hex(213123));
console.log("16진수를 10진수로", hex2dec(dec2hex(213123)));

function hex2dec(hex) {
  // 보통 프로그래밍 상에서 Hex, 즉 16진수는 string(문자열, 문장)으로 저장(정의)한다.
  let value = 0; // 10진수를 저장할 변수
  for (let i = 0; i < hex.length; ++i) {
    let temp = 0;
    switch (hex[i]) {
      case "A":
        temp = 10;
        break;
      case "B":
        temp = 11;
        break;
      case "C":
        temp = 12;
        break;
      case "D":
        temp = 13;
        break;
      case "E":
        temp = 14;
        break;
      case "F":
        temp = 15;
        break;

      default:
        temp = +hex[i];
        break;
    }
    value += temp * 16 ** (hex.length - i - 1);
    // **은 제곱이다.
    // value += temp * pow(16, hex.length -i -1)
  }
  return value;
}

function dec2bin(dec) {
  //10 진수를 2진수로 바꾸는 함수
  let value = "";
  while (dec) {
    value = (dec % 2) + value;
    dec = parseInt(dec / 2);
  }
  return value;
}

function bin2dec(bin) {
  // 2진수를 10진수로 바꾼다.
  let value = 0;
  for (let i = 0; i < bin.length; ++i) {
    value += +bin[i] * 2 ** (bin.length - 1 - i);
  }
  return value;
}

console.log(dec2bin(4123));
console.log(bin2dec(dec2bin(4123)));
