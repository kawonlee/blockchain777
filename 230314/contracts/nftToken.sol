// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "../node_modules/@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
// ERC721 기본 컨트랙트
import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";
// owner 관련 컨트랙트, _owner 등을 추가한다.
import "../node_modules/@openzeppelin/contracts/utils/Strings.sol";

// toString을 위한 라이브러리
// - 기존에 int, uint 등을 string화 하려면 byte로 바꿨다가 변경해야한다.
// - Strings 라이브러리는 위 기능을 편하게 제공한다.

contract nftToken is ERC721Enumerable, Ownable {
  // ERC721 기본 구현관 owner를 상속한다.
  uint public constant MAX_TOKEN_COUNT = 1000;
  // NFT 최대 발행량
  // constant << Javascript에서의 const, 바뀌지 않는 변수(상수)
  // 상수의 변수명을 정할 때 전부 대문자로 하곤 한다.
  uint public mint_price = 1 ether;
  // minting 가격, 사용자가 NFT를 올릴 때마다 1ether씩 받는다.
  // ether, gwei, second, minute, day << 단위를 사용할 수 있다.
  // ether의 경우 10 ** 18;

  string public metadataURI;
  // NFT의 tokenId 값에 매칭되는 tokenURI의 앞부분
  // Webpage 구현에서의 baseURL과 같은 기능
  struct TokenData {
    // 토큰의 데이터
    // 현재 구현된 코드에서는 랜덤하게 넣을 예정이다.
    uint Rank;
    uint Type;
  }
  // - OpenSea에서 attributes에 출력된다.
  // - attributes에 출력되는 내용에 관해서는 아래의 주소를 참조
  // - https://docs.opensea.io/docs/metadata-standards#attributes
  mapping(uint => TokenData) public TokenDatas;
  // tokenId => TokenData
  uint[4][4] public tokenCount;

  // 토큰 데이터에 따른 NFT 토큰 발행량 확인용
  // 4 * 4 이중배열
  // [[0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0]]

  constructor(
    string memory _name,
    string memory _symbol,
    string memory _metadataURI
  ) ERC721(_name, _symbol) {
    metadataURI = _metadataURI;
  }

  function tokenURI(
    uint _tokenId
  ) public view override returns (string memory) {
    // tokenURI 생성 메서드
    // ERC721에 virtual 옵션이 포함하여 구현되어있음
    string memory Rank = Strings.toString(TokenDatas[_tokenId].Rank);
    string memory Type = Strings.toString(TokenDatas[_tokenId].Type);
    // Strings 라이브러리를 사용해서 string화 한다.
    // Rank, Type은 uint 타입이다.
    return string(abi.encodePacked(metadataURI, "/", Rank, "/", Type, ".json"));
    // NFT에 대한 데이터를 저장한 URL 주소를 찾아 데이터를 받아올 수 있도록 구현됨
  }

  function mintToken() public payable {
    // NFT 생성 메서드
    require(msg.value >= mint_price);
    // 생성 시 이더를 받고 가격을 확인한다. 돈받고 NFT 만들어준다.
    require(MAX_TOKEN_COUNT > ERC721Enumerable.totalSupply());
    // NFT 최대 개수 확인, 현재 1000개 이하로만 생성 가능

    uint tokenId = ERC721Enumerable.totalSupply() + 1;
    // NFT 총 수량을 기준으로 ID 생성

    TokenData memory random = getRandomTokenData(msg.sender, tokenId);
    // 무작위 Rank와 Type을 만든다.
    TokenDatas[tokenId] = random;
    // 생성한 토큰 데이터를 ID와 매칭하여 저장
    tokenCount[random.Rank - 1][random.Type - 1] += 1;
    // Rank와 Type을 기준으로 NFT 수량 정리 // Rank와 Type은 1부터 시작하지만 배열의 index는 0부터 시작하기 때문에 -1씩

    payable(Ownable.owner()).transfer(msg.value);
    // 받은 이더 컨트랙트 소유자에게 전달(NFT 토큰 컨트랙트 등록자)
    _mint(msg.sender, tokenId);
    // NFT 생성(민팅)
  }

  function getRandomTokenData(
    address _owner,
    uint _tokenId
  ) private pure returns (TokenData memory) {
    // solidity에서는 random함수가 없다.
    // 해서 유일한 값인 tokenId를 가져와서 암호화한 뒤에 나머지 연산으로 0~99까지 랜덤한 수를 만든다.
    uint randomNum = uint(keccak256(abi.encodePacked(_owner, _tokenId))) % 100;

    TokenData memory data;
    // return 할 TokenData

    if (randomNum < 5) {
      data.Rank = 4;
      if (randomNum == 1) {
        data.Type = 1;
      } else if (randomNum == 2) {
        data.Type = 2;
      } else if (randomNum == 3) {
        data.Type = 3;
      } else {
        data.Type = 4;
      }
    } else if (randomNum < 13) {
      data.Rank = 3;
      if (randomNum < 7) {
        data.Type = 1;
      } else if (randomNum < 9) {
        data.Type = 2;
      } else if (randomNum < 11) {
        data.Type = 3;
      } else {
        data.Type = 4;
      }
    } else if (randomNum < 37) {
      data.Rank = 2;
      if (randomNum < 19) {
        data.Type = 1;
      } else if (randomNum < 25) {
        data.Type = 2;
      } else if (randomNum < 31) {
        data.Type = 3;
      } else {
        data.Type = 4;
      }
    } else {
      data.Rank = 1;
      if (randomNum < 52) {
        data.Type = 1;
      } else if (randomNum < 68) {
        data.Type = 2;
      } else if (randomNum < 84) {
        data.Type = 3;
      } else {
        data.Type = 4;
      }
    }

    return data;
  }

  function setMetadataURI(string memory _uri) public onlyOwner {
    // metadataURI를 변경하는 메서드
    // 컨트랙트 등록자(소유자)만 수정할 수 있다. (owner == msg.sender)
    // Ownable에 포함된 onlyOwner라는 접근제한자를 사용한다.
    // onlyOwner를 실행하고 문제가 없으면 메서드를 실행하고 문제가 있으면 메서드를 실행하지 않는다.
    metadataURI = _uri;
  }

  function getTokenRank(uint _tokenId) public view returns (uint) {
    return TokenDatas[_tokenId].Rank;
  }

  function getTokenType(uint _tokenId) public view returns (uint) {
    return TokenDatas[_tokenId].Type;
  }

  function getTokenCount() public view returns (uint[4][4] memory) {
    // Rank와 Type을 구분하여 NFT의 수량을 확인한다.
    return tokenCount;
  }
  // memory VS calldata
  // memory는 수정 가능 calldata는 수정 불가능
  // 저장 공간을 둘 다 임시 저장소
}
