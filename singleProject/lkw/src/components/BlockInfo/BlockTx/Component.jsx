import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BlockTxComponent = ({ blockTxGet, blockTx, blockNum, txLen }) => {
  const [nowPage, setNowPage] = useState(0);
  useEffect(() => {
    blockTxGet(nowPage);
  }, [nowPage]);
  const ListTitle = ["Txn Hash", "Block", "From", "To", "value"];
  return (
    <BlockTxBox>
      <TitleBox>
        <div>
          <h3>Transactions</h3>
          <div>
            For Block <Link to={`/block/${blockNum}`}>{blockNum}</Link>
          </div>
        </div>
      </TitleBox>
      <div className="list-name">
        {ListTitle?.map((item, idx) => {
          return <span key={`title${idx}`}>{item}</span>;
        })}
      </div>
      {blockTx?.map((item, idx) => {
        return (
          <div key={`txlist${idx}`} className="txlist">
            <div key={`tx1${idx}`}>
              <Link to={`/tx/${item.hash}`}>{item.hash}</Link>
            </div>
            <div key={`tx2${idx}`}>
              <Link to={`/block/${item.blockNumber}`}>{item.blockNumber}</Link>
            </div>
            <div key={`tx3${idx}`}>
              <Link to={`/address/${item.from}`}>{item.from}</Link>
            </div>
            <div key={`tx4${idx}`}>
              <Link to={`/address/${item.to}`}>{item.to}</Link>
            </div>
            <div key={`tx5${idx}`}>{item.value}</div>
          </div>
        );
      })}
      <BlockTxBtn>
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
            if (txLen <= (nowPage + 1) * 20) return;
            setNowPage(nowPage + 1);
          }}
        >
          ▶{" "}
        </button>
      </BlockTxBtn>
    </BlockTxBox>
  );
};

export default BlockTxComponent;

const TitleBox = styled.div`
  background-color: #ced4da;

  & > div {
    background-color: white;
    width: 200px;
    border-radius: 8px;
    margin-left: 20px;

    & > h3 {
      margin: 10px;
    }

    & > div {
      margin: 10px;

      & > a {
        text-decoration: none;
        color: #0784c3;
      }
    }
  }
`;

const BlockTxBox = styled.div`
  width: 90%;
  margin: 0 auto;
  .list-name {
    font-weight: 500;
    display: flex;
    column-gap: 10px;
  }
  & > div {
    display: flex;
    border: 1px solid #e9ecef;
    padding: 1% 0;
    width: 100%;
    & > span:nth-child(1) {
      padding: 0 0 0 20px;
      width: 20%;
    }
    & > span:nth-child(2) {
      width: 10%;
    }
    & > span:nth-child(3) {
      width: 30%;
    }
    & > span:nth-child(4) {
      width: 30%;
    }

    & > span:nth-child(5) {
      width: 5%;
    }
  }
  .txlist {
    display: flex;
    column-gap: 10px;
    & > div {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;

      & > a {
        text-decoration: none;
        color: #0784c3;
      }
    }
    & > div:nth-child(1) {
      padding: 0 0 0 20px;
      width: 20%;
    }
    & > div:nth-child(2) {
      width: 10%;
    }
    & > div:nth-child(3) {
      width: 30%;
    }
    & > div:nth-child(4) {
      width: 30%;
    }
    & > div:nth-child(5) {
      width: 5%;
    }
  }
`;

const BlockTxBtn = styled.div`
  display: flex;
  justify-content: center;

  & > button {
    background-color: #0784c3;
    font-size: 20px;
    border: none;
    color: white;
    border-radius: 8px;
    cursor: pointer;
    width: 35px;
    height: 35px;
    padding-bottom: 5px;
  }

  & > div {
    font-size: 20px;
    padding: 5px;
  }
`;
