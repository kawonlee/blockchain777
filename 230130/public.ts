// npm i elliptic << 타원곡선알고리즘을 사용하는 암호화 라이브러리
// npm i -D @types/elliptic << typescript 사용하니까 타입도 불러옴
import cryptoJS from "crypto-js";
import elliptic from "elliptic";

const privateKey: string = cryptoJS.lib.WordArray.random(32)
  .toString()
  .toUpperCase();

const ec: elliptic.ec = new elliptic.ec("secp256k1");
// 타원 곡선을 생성한다.
// ec에 전달하는 매개변수 "secp256k1"은 elliptic에서 제공하는 사전 설정 중 하나이다.
//  - 사전 설정으로는 secp256k1, p192, p224 등등이 있다.
//  - 그럼 왜 secp256k1 설정을 사용하는가? => 비트코인과 이더리움에서 사용하는 설정이다. => y^2 = x^3 + 7, G = "02 ....."

const keyPair: elliptic.ec.KeyPair = ec.keyFromPrivate(privateKey);
// 개인키를 사용해서 키페어를 생성한다.
//  - 즉, 공개키를 생성한다.
// keyFromPrivate(개인키) << 개인키를 사용하여 키페어(개인키 + 공개키)를 생성한다.

const publicKey: string = keyPair.getPublic().encode("hex", true).toUpperCase();
// 생성된 키페어에서 공개키를 가져온다.
// getPublic() << 키페어에서 공개키를 가져온다.
// encode(인코딩 형식, true) << 암호문을 저장하기 위해 객체 형식으로 되어있는 데이터를 문자열(hex)로 변환한다.
console.log("privateKey", privateKey);
console.log("privateKey 길이", privateKey.length);
console.log("publicKey", publicKey);
console.log("publicKey 길이", publicKey.length);
// 타원곡선에서 공개키는 찾은 점의 좌표이다. => x, y 두 수로 이루어져있다.
// 공개키는 문자열로 나타낼 시 "x" + "y" = `${x}${y}` << 두 좌표를 문자로써 연결한 문자열(string)이다.
// x, y는 256 bits의 크기를 가진다. => 공개키는 512bits의 크기를 가진다. => 128자가 나와야한다. (64자 * 2)
// 128자는 너무 길어서 압축하게 된다. => x의 값은 그대로 가져오고 y의 값은 짝수일 때는 "02", 홀수일 때는 "03"을 사용하게 된다. => 02XXXXXXX || 03XXXXX가 나오게된다.
// y를 버릴 수가 없어서 홀수와 짝수로 나누어 간단하게 추가한다. (짝수: 02, 홀수 :03) y에 대한 값은 앞에 붙인다.
// y가 짝수일 때 02를 앞에 추가하고 홀수있 때 03을 앞에 추가한다. => x + y를 모두 사용할 때 128자일까? => 앞에 04를 붙인다. 즉 130자가 된다.

const data: string = "checking data";
const hash: string = cryptoJS.SHA256(data).toString().toUpperCase();
// 전송할 데이터(입력된 값 : checking data), hash로 암호화해두자
console.log("hash", hash);
console.log("hash 길이", hash.length);

const signature: elliptic.ec.Signature = keyPair.sign(hash, "hex");
// sign(데이터, 인코딩형식) << 키페어를 사용해서 서명을 만든다.
console.log(signature);

// 위에서 만든 서명을 확인하자.
const verify: boolean = ec.verify(
  hash,
  signature,
  ec.keyFromPublic(publicKey, "hex")
);
// verify(데이터, 서명, 키페어) << 서명을 키페어를 사용해서 복호화하여 데이터와 비교한다. 같은 데이터라면 true가 반환된다.
// keyFromPublic(공개키, 인코딩 형식) << 공개키를 사용하여 키페어를 생성한다. 인코딩 형식은 필수가 아니다. keyFromPrivate도 똑같은 형식
console.log("verify :", verify);
// 정상적으로 복호화되어 hash가 확인된다면 true가 반환된다(return)

const newPrivateKey: string = cryptoJS.lib.WordArray.random(32)
  .toString()
  .toUpperCase();

const newKeyPair = ec.keyFromPrivate(newPrivateKey);
const newPublicKey = newKeyPair.getPublic().encode("hex", true).toUpperCase();
const newVerify = ec.verify(
  hash,
  signature,
  ec.keyFromPublic(newPublicKey, "hex")
);

console.log("newVerify", newVerify);
// 새로운 공개키로 확인했기 때문에 false가 반환된다.
//  - keyFromPublic에서 "hex" 없으면 터진다.
//  - hash(= 데이터)와 signature(= 서명)과 publicKey(= 공개키)가 정확히 일치하지 않는다. => 상대가 보낸 것인지 확신할 수 없다. 해킹일수도있다

const myWallet = publicKey.slice(26); // publicKey.length = 66 그러므로 26을 잘라서 40자만 사용한다.
console.log(myWallet.length);
