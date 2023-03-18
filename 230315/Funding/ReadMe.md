```bash
mdkir 230315
cd 230315
npm init -y
npm i truffle @openzeppelin/contracts @remix-project/remixd
npm i -D prettier-plugin-solidity
npx truffle init
```

# Funding Contract

- Funding: 소규모 후원이나 다수의 개인으로부터 자금을 모집하는 행위
- 컨트랙트 기능
  - 후원 기능이 종료되면
    - 후원 금액이 원하는 이상 모였다면 주최자에게 후원금 전송
    - 후원 금액이 미달됐다면 기존 후원자들에게 원금 돌려주기

```bash
npx remixd -s . -u https://remix.ethereum.org
```
