// 머클트리를 편하게 사용하게 해주는 라이브러리
// npm i merkle

const merkle = require("merkle");

const data = ["15131", "이가원", "77777", "블록체인"];
// 머클트리
// 값을 하나씩 넣어서 SHA256().toString().toUppserCase() 돌려서 더하면 root 값이랑 같아지는지

const merkleTree = merkle("sha256").sync(data);
// 인자값 : 암호화방식
// sync(data) 함수로 트리를 만들어준다.

const root = merkleTree.root();
// 생성한 머클트리의 root 값을 가져오는 함수

// SHA256(문자열).toString().toUpperCase();
// 머클 트리에서 sha256 알고리즘을 사용하는데 문자열로 변환과 대문자로 변환 둘 다 해주고 값을 반환해준다.

console.log(root);
