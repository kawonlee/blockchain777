import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { timeStampFunc } from "../utils";

const AllBlocksComponent = ({ blockArr, blockGet, bHeight }) => {
  const [nowPage, setNowPage] = useState(0);
  useEffect(() => {
    blockGet(nowPage);
  }, [nowPage]);

  const ListTitle = [
    "Block",
    "Age",
    "Txn",
    "Fee Recipient",
    "Gas Used",
    "Gas Limit",
  ];
  return (
    <AllBlockBox>
      <TitleBox>
        <div>
          <h2>Blocks</h2>
          <img src="/Img/block.gif" />
        </div>
      </TitleBox>
      <div className="list-name">
        {ListTitle?.map((item, idx) => {
          return <span key={`title${idx}`}>{item}</span>;
        })}
      </div>
      {blockArr?.map((item, idx) => {
        console.log(item);
        return (
          <div key={`blist${idx}`} className="bklist">
            <div key={`block1${idx}`}>
              <Link to={`/block/${item.number}`}>{item.number}</Link>
            </div>
            <div key={`block2${idx}`}>
              {timeStampFunc(item.timestamp).text}전
            </div>
            <div key={`block3${idx}`}>
              {item.Transactions.length === 0 ? (
                0
              ) : (
                <Link to={`/block/${item.number}/txs`}>
                  {item.Transactions.length}
                </Link>
              )}
            </div>
            <div key={`block4${idx}`}>
              <Link to={`/address/${item.miner}`}>{item.miner}</Link>
            </div>
            <div key={`block5${idx}`}>{item.gasUsed}</div>
            <div key={`block6${idx}`}>{item.gasLimit}</div>
          </div>
        );
      })}
      <BlockBtn>
        <button
          onClick={() => {
            if (nowPage == 0) return;
            setNowPage(nowPage - 1);
          }}
        >
          ◀
        </button>
        <div>{nowPage + 1}</div>
        <button
          onClick={() => {
            if (bHeight <= (nowPage + 1) * 20) return;
            setNowPage(nowPage + 1);
          }}
        >
          ▶{" "}
        </button>
      </BlockBtn>
    </AllBlockBox>
  );
};

export default AllBlocksComponent;
const TitleBox = styled.div`
  background-color: #e9ecef;

  & > div {
    display: flex;
    column-gap: 30px;
    background-color: white;
    width: 300px;
    justify-content: space-around;
    border-radius: 8px;
    padding: 0.5%;
    margin-left: 20px;

    & > img {
      width: 80px;
    }
  }
`;
const AllBlockBox = styled.div`
  width: 90%;
  margin: 0 auto;
  .list-name {
    font-weight: 500;
  }
  & > div {
    display: flex;
    border: 1px solid #e9ecef;
    padding: 1% 0;
    width: 100%;
    & > span:nth-child(1) {
      padding: 0 0 0 20px;
      width: 10%;
    }
    & > span:nth-child(2) {
      width: 15%;
    }
    & > span:nth-child(3) {
      width: 10%;
    }
    & > span:nth-child(4) {
      width: 35%;
    }

    & > span:nth-child(5) {
      width: 10%;
    }
    & > span:nth-child(6) {
      width: 15%;
    }
  }
  .bklist {
    & > div:nth-child(1) {
      padding: 0 0 0 20px;
      width: 10%;
    }
    & > div:nth-child(2) {
      width: 15%;
    }
    & > div:nth-child(3) {
      width: 10%;
    }
    & > div:nth-child(4) {
      width: 35%;
    }
    & > div:nth-child(5) {
      width: 10%;
    }
    & > div:nth-child(6) {
      width: 15%;
    }

    & div > a {
      text-decoration: none;
      color: #0784c3;
    }
  }
`;

const BlockBtn = styled.div`
  display: flex;
  justify-content: center;

  & > button {
    background-color: #0784c3;
    font-size: 20px;
    border: none;
    color: white;
    border-radius: 8px;
    cursor: pointer;
  }

  & > div {
    font-size: 20px;
    padding: 5px;
  }
`;
