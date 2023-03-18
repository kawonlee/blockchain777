```bash
mkdir 230314
cd 230314
npm init -y
npm i truffle @openzeppelin/contracts
npm i -D prettier-plugin-solidity
npx truffle init
```

# OpenSea 등 NFT 마켓에서 사용하는 컨트랙트

- NFT 토큰 컨트랙트 구현 => nftToken

# NFT 거래 컨트랙트 구현 => SaleToken

# 시나리오

- 민팅 => nftToken 컨트랙트의 mintToken을 호출한다.(이더도 보내야한다)
  -> require로 확인 후에 nftToken의 getRandomTokenData 메서드로 토큰 정보를 만든다.
  -> \_mint 메서드로 NFT 추가

- 판매 등록 => SaleToken 컨트랙트의 SalesToken 메서드를 호출한다.
  -> require로 확인 후에 가격 정의 및 판매 목록에 추가한다.

- 구매 => SaleToken 컨트랙트의 PurchaseToken 메서드를 호출한다.
  -> require로 확인 후에 이더 및 NFT 전송, 판매 목록에서 삭제한다.

- 웹페이지에서 판매 NFT 목록 출력 => SaleToken 컨트랙트의 getSaleTokenList 메서드를 호출한다.
  -> 판매 등록된 NFT 목록을 만들어서 반환한다.

  - NFT 목록을 만드는 도중 nftToken 컨트랙트의 getTokenRank, getTokenType 메서드를 사용해서 정보를 받아온다.
  - nftToken에서 모든 정보를 한 번에 받는 것이 아닌 따로따로 받은 후에 TokenInfo구조체를 사용해서 하나로 합쳐 배열에 담아 반환하게 된다.
  - 출력해서 보여줘야 사용자들이 판매 또는 구매 등등 가능

- 웹 페이지에서 나의 NFT 목록 출력 => 메타마스크의 지갑 계정 주소를 기준으로 SaleToken 컨트랙트의 getOwnerTokens 메서드를 호출한다.

  - 이후 내용은 판매 NFT 목록 출력과 같다

- 구현 시나리오에 따라 다르지만 만약 민팅 후에 NFT 정보 페이지로 이동 or 등록한 NFT 정보를 모달창으로 출력하여 확인할 경우 getLatestToken 메서드를 사용(호출)하게된다.
