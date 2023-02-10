# Ganache

- 테스트용 로컬 이더리움 네트워크

- 장점
  - Geth등 보다 속도가 빠르다
  - 별 다른 세팅 없이 바로 테스트 가능하다
  - 기본으로 10개의 계정이 생성되며 각 계정의 100코인씩 지급된다
- 단점
  - 채굴해도 보상이 없다(마이닝은 한다)
  - 외부 네트워크 피어로 연결이 안된다(only local)
  - 일회성이라 서버를 재시작하면 시작 시 생성됐던 계정들이 날라간다. (서버 종료 시 모든 데이터 삭제)

## 설치

```sh
npm i -g ganache-cli
```

## 실행

```sh
npx ganache-cli
```

- cli = Commend Line Interface

### 실행 시 사용 가능한 options

```sh
-a | --accounts #시작 시 생성할 계정의 수, 기본값 10 ex) npx ganache-cli -a 100 || npx ganache-cli --accounts 100
-e | --defaultBalanceEther # 서버 시작 시 생성되는 계정의 소지 Ether, 기본값 100 ex) npx ganache-cli -e 1000 || npx ganache-cli --defaultBalanceEther 1000
-b | --blockTime # 자동 마이닝 시간 간격, 초 단위이며 지정하지 않는 게 좋음, 기본적으로 트랜잭션 발생 시 마이닝을 바로 진행한다.
# ex) npx ganache-cli -b 60 || npx ganache-cli --blockTime 60
-p | --port # 사용할 포트, 기본값 8545
-h | --host | --hostname # 기본 접속 주소, http.addr 랑 같은 기능을 한다고 생각하면 된다. 기본값 127.0.0.1
-g | --gasPrice # wei의 가스 가격, 기본값 20000000000 (20Wei)
-l | --gasLimit # 블록 가스 한도, 기본값 0x6691b7
--chainId # 체인 아이디, 기본값 1337
```

- url = http://localhost:8080
  http << 프로토콜
  localhost << domain, host
  127.0.0.1 << ip, host
- 8080 << port
  docker - linux에서 우리 눈에는 보이지 않지만 백그라운드에서 돌아갈 수 있게끔 지원해줌

# RPC

- admin, eth, miner, net, personal, rpc, txpool, web3 // geth attach http://localhost:8080 으로 쳤을 때 나온 modules

## geth와 같은 RPC (RPC열 때 console붙이면 터미널에서 쓸 수 있음, request로 보낼 때 data안에 method에서 사용가능)

- eth

  - accounts
  - blockNumber
  - coinbase
  - getBalance
  - sendTransaction

- miner

  - start : 자동 마이닝 시작
  - stop : 자동 마이닝 종료

- personal

  - unlockAccount
  - newAccount
  - sendTransaction : eth의 sendTransaction과 같다.

  ## Ganache 만의 RPC

  - evm
    - snapshot : 현재 상태를 저장한다
    ```sh
    curl -X POST -H "content-type:application/json" --data '{"id": 1337, "jsonrpc": "2.0", "method": "evm_snapshot"}' http://localhost:8545
    결과
    {"id":1337,"jsonrpc":"2.0","result":"0x1"}
    ```
    - revert : snapshot으로 상태를 되돌린다. 되돌린 스냅샷 기준으로 이후 스냅샷은 삭제된다.
    ```sh
    curl -X POST -H "content-type:application/json" --data '{"id": 1337, "jsonrpc": "2.0", "method": "evm_revert", "params":"0x2"}' http://localhost:8545
    결과
    {"id":1337,"jsonrpc":"2.0","result":true} # 0x2를 삭제하고 나면 그 뒤에 0x3이 있는 경우 그 녀석도 삭제된다.
    ```
    - mine : 강제 채굴
    - unlockUnknownAccount : unlockAccount와 같다, 단 비밀번호 없이
    - lockUnknownAccount : lockAccount와 같다, 단 비밀번호 없이

블록 정보 받아서 HTML에 출력해보기
트랜잭션 정보 받아서 HTML에 출력해보기
