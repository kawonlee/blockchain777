// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Fundraising {
  uint256 public targetAmount;
  // 목표 금액
  address public owner;
  // 펀딩 주최자, 후원을 받는 사람(계정)
  mapping(address => uint256) public donations;
  // 후원자 => 후원한 돈, 후원자 목록
  uint256 raisedAmount;
  // 후원된 금액
  uint256 public finishTime;

  // 마감 기한(후원 받는 기간)

  constructor(
    uint256 _targetAmount,
    uint _week,
    uint _days,
    uint _hours,
    uint _minutes,
    uint _seconds
  ) {
    targetAmount = _targetAmount;
    owner = msg.sender;
    raisedAmount = 0;
    finishTime =
      block.timestamp +
      _week *
      1 weeks +
      _days *
      1 days +
      _hours *
      1 hours +
      _minutes *
      1 minutes +
      _seconds *
      1 seconds;
    // (컨트랙트가 저장된 트랜잭션)이 저장된 블록의 정보를 받아올 수 있다. 블록 => 트랜잭션 => 컨트랙트 저장
    // Block : { transactions : bytecode(컨트랙트) }
    // weeks : 주 단위로 시간
  }

  receive() external payable {
    // 익명함수, data가 없이 value만 들어왔을 때 실행
    // transaction : { data : value }
    // 트랜잭션 내의 value(변수명임) => 보내는 금액
    // 트랜잭션 내의 data(변수명임) => 스마트 컨트랙트 사용으로 인한 데이터 변경에 대한 데이터
    //  - 스마트 컨트랙트로 발생한 데이터 변경(함수 호출)은 data 변수에 bytecode로 변환하여 담아서 보냈다.
    // 스마트 컨트랙트 CA 계정으로 돈(이더)을 보냈을 때 실행된다.
    require(block.timestamp < finishTime, "This funding is over");

    donations[msg.sender] += msg.value;
    // 후원자에 대한 후원금 저장
    raisedAmount += msg.value;
    // 총 후원된 금액에 추가
  }

  function withdrawDonations() external {
    // 주최자가 후원금을 받기 위해 실행하는 메서드
    require(msg.sender == owner, "Funds will only be released to the owner");
    // 트랜잭션 보낸 계정이 주최자 계정인가?
    require(raisedAmount >= targetAmount, "The funding did not reach the goal");
    // 후원금이 충분히 모였나?
    require(block.timestamp > finishTime, "This funding is not over yet");
    // 후원 기간이 종료되었나?

    payable(owner).transfer(raisedAmount);
    // 기간 만료됐고 후원금이 다 모였으면 주최자에게 후원금 전송
  }

  function refund() external payable {
    // 기간 종료 후 후원금이 충분히 모이지 않았을 때 후원금 환불을 위한 메서드
    //  - 단, 후원자가 안챙겨갈 수 있음
    require(block.timestamp > finishTime, "This funding is not over yet");
    // 후원 기간이 끝났는가?
    require(raisedAmount > targetAmount, "The funding did reached the goal");
    // 후원금이 충분히 모이지 않았는가?
    require(donations[msg.sender] > 0, "You did not donate to this funding");
    // 후원한 적이 있는가?
    uint256 toRefund = donations[msg.sender];
    donations[msg.sender] = 0;
    payable(msg.sender).transfer(toRefund);
  }

  function cancelFund() external payable {
    require(block.timestamp < finishTime, "This funding is not over");
    require(donations[msg.sender] > 0, "You did not donate to this funding");

    uint256 toRefund = donations[msg.sender];
    donations[msg.sender] = 0;
    raisedAmount -= toRefund;
    payable(msg.sender).transfer(toRefund);
  }

  function getDonation() external view returns (uint256) {
    return donations[msg.sender];
  }
}
