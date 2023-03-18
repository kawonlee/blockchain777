```bash
mkdir 230313
cd 230313
mkdir swap
cd swap
npm init -y
npm i truffle @openzeppelin/contracts
npm i -D prettier-plugin-solidity
npx truffle init
```

# 토큰 스왑

- token swap : 이름 그대로 토큰을 다른 토큰으로 변경하는 것
- 보통 이전 토큰을 새로운 토큰으로 교환한다.
- 거래소에서 '스왑기간', '스왑 지원 거래소', '마이그레이션 지원' 등으로 토큰 스왑 가능 지원을 표기한다.
- 토큰의 업데이트, 돈을 벌기 위한 방법

- Swap 스마트 컨트랙트는 토큰의 변경을 위해 사용하기 때문에 거래 관련 내용만 존재한다.
- address(스마트 컨트랙트) << 전달된 스마트 컨트랙트의 CA를 가져온다. (CA는 string)
