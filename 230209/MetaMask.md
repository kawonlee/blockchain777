## geth를 HTTP 통신으로 사용할 수 있도록 실행에 추가

```sh
geth --datadir ~/myGeth --http --http.addr "0.0.0.0" --http.port 8080 --http.corsdomain "*" --http.api "admin,miner,txpool,web3,personal,eth,net" --allow-insecure-unlock --syncmode full --networkid 50 console
```

# MetaMask 설정

1. 설정에서 네트워크로 들어간다.
2. 현재 http://localhost:8545로 되어있는 네트워크를 수정한다.
   - 네트워크 이름 : 자유
   - 새 RPC URL : 현재 잡으려는 이더리움 네트워크의 주소 (서버에서 4번줄을 통해 열었던 거, 포트 포함) --> http://localhost:8080
   - 체인 ID : 체인 ID
   - 통화 기호 : 사용하는 코인 표기법
