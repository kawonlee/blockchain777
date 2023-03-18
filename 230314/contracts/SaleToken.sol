// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./nftToken.sol";

contract SaleToken {
  nftToken public Token;

  // 배포된 NFT 토큰 컨트랙트를 정의
  // 거래 코드를 구현

  constructor(address _tokenAddress) {
    Token = nftToken(_tokenAddress);
  }

  struct TokenInfo {
    // 토큰 정보 구조체
    uint tokenId;
    uint Rank;
    uint Type;
    uint price;
    // 가격, 0일 때 판매중이 아닌 것
  }
  mapping(uint => uint) public tokenPrices;
  // tokenId => price, NFT 가격 매핑
  uint[] public SaleTokenList;

  // 판매중인 NFT의 tokenId 목록

  function SalesToken(uint _tokenId, uint _price) public {
    // 판매 등록
    address tokenOwner = Token.ownerOf(_tokenId);
    // NFT의 소유자 찾기

    require(tokenOwner == msg.sender);
    // NFT 소유자가 판매 등록을 했는가?
    require(_price > 0);
    // 가격이 0 초과인가?
    require(Token.isApprovedForAll(msg.sender, address(this)));
    // NFT에 대한 권한이 현재 컨트랙트에 있는가?
    // OpenSea를 기준으로 했을 때 setApprovedForAll 메서드가 이미 있다.
    // - 메타마스크를 연결했을 때 / 로그인했을 때 => 메타마스크의 계정에 대해 권한을 위임받는다.(서명)
    // OpenSea에 토큰에 대한 권한을 위임했는지 확인한다.

    tokenPrices[_tokenId] = _price;
    // 가격 매핑
    SaleTokenList.push(_tokenId);
    // 판매 목록에 추가
  }

  function PurchaseToken(uint _tokenId) public payable {
    // 구매
    address tokenOwner = Token.ownerOf(_tokenId);
    // NFT 소유자 찾기

    require(tokenOwner != msg.sender);
    // 판매자가 구매하려고 하는가?
    require(tokenPrices[_tokenId] > 0);
    // 가격 확인, 판매중인가?
    require(tokenPrices[_tokenId] <= msg.value);
    // 가격 확인, 구매자가 충분한 이더를 보냈는가?

    payable(tokenOwner).transfer(msg.value);
    // 현재 컨트랙트가 NFT 소유자에게 구매자로부터 받은 이더 전달

    Token.transferFrom(tokenOwner, msg.sender, _tokenId);
    // NFT 소유자로부터 구매자에게 NFT 전송

    tokenPrices[_tokenId] = 0;
    // 가격 0, 즉 판매 중지
    popSaleToken(_tokenId);
    // 판매 목록에서 제외
  }

  function cancelSaleToken(uint _tokenId) public {
    // 판매 취소
    address tokenOwner = Token.ownerOf(_tokenId);

    require(tokenOwner == msg.sender);
    require(tokenPrices[_tokenId] > 0);

    tokenPrices[_tokenId] = 0;
    popSaleToken(_tokenId);
  }

  function popSaleToken(uint _tokenId) private returns (bool) {
    // 전달받은 토큰을 SaleTokenList에서 삭제하는 메서드
    // 만약에 SaleTokenList = [1,2,3,4,5,6] / 삭제할 토큰 3
    for (uint i = 0; i < SaleTokenList.length; i++) {
      if (SaleTokenList[i] == _tokenId) {
        // i = 2 => SaleTokenList[2] = 3 == (_tokenId =3)
        SaleTokenList[i] = SaleTokenList[SaleTokenList.length - 1];
        // SaleTokenList = [1,2,6,4,5,6]
        SaleTokenList.pop();
        // SaleTokenList = [1,2,6,4,5] 순서는 안따지고 목록만 가져옴
        return true;
      }
    }
    return false;
  }

  function getSaleTokenList() public view returns (TokenInfo[] memory) {
    // 판매중인 전체 NFT 목록 가져오기 메서드
    require(SaleTokenList.length > 0);
    // NFT 없는지 확인

    TokenInfo[] memory list = new TokenInfo[](SaleTokenList.length);
    // 등록된 NFT 개수를 크기로 NFT 정보 배열 생성
    // Javascript 상에서는 let list = new Array(SaleTokenList.length);
    for (uint i = 0; i < SaleTokenList.length; i++) {
      uint tokenId = SaleTokenList[i];
      uint Rank = Token.getTokenRank(tokenId);
      uint Type = Token.getTokenType(tokenId);
      uint price = tokenPrices[tokenId];

      list[i] = TokenInfo(tokenId, Rank, Type, price);
      // NFT 정보 생성해서 list에 저장
    }
    return list;
  }

  function getOwnerTokens(
    address _tokenOwner
  ) public view returns (TokenInfo[] memory) {
    // NFT 소유자 기준으로 등록된 NFT 목록 가져오기
    uint balance = Token.balanceOf(_tokenOwner);
    // 갖고있는 NFT 개수 가져오기
    require(balance > 0);
    // NFT 개수 확인, 없으면 멈춤

    TokenInfo[] memory list = new TokenInfo[](balance);

    for (uint i = 0; i < balance; i++) {
      uint tokenId = Token.tokenOfOwnerByIndex(_tokenOwner, i);
      // ERC721Enumerable 컨트랙트에 존재
      // 소유자의 NFT 목록 중 i 번째의 ID를 가져온다.
      uint Rank = Token.getTokenRank(tokenId);
      uint Type = Token.getTokenType(tokenId);
      uint price = tokenPrices[tokenId];

      list[i] = TokenInfo(tokenId, Rank, Type, price);
    }
    return list;
  }

  function getLatestToken(
    address _tokenOwner
  ) public view returns (TokenInfo memory) {
    // 소유자 기준의 마지막 NFT 정보를 가져온다.
    // 민팅 직후에 사용할 수 있다.
    uint balance = Token.balanceOf(_tokenOwner);
    uint tokenId = Token.tokenOfOwnerByIndex(_tokenOwner, balance - 1);
    uint Rank = Token.getTokenRank(tokenId);
    uint Type = Token.getTokenType(tokenId);
    uint price = tokenPrices[tokenId];

    return TokenInfo(tokenId, Rank, Type, price);
  }
}
