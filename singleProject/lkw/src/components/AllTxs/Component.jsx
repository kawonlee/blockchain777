import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const AllTxsComponent = ({ txArr, txGet, txLen }) => {
  const [nowPage, setNowPage] = useState(0);

  useEffect(() => {
    txGet(nowPage);
  }, [nowPage]);

  const ListTitle = ["Txn Hash", "Block", "From", "To", "value"];
  return (
    <AllTxBox>
      <TitleBox>
        <div>
          <h2>Transactions</h2>
          <img src="/Img/transaction.gif" />
        </div>
      </TitleBox>
      <div className="list-name">
        {ListTitle?.map((item, idx) => {
          return <span key={`title${idx}`}>{item}</span>;
        })}
      </div>
      {txArr?.map((item, idx) => {
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
      <TxBtn>
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
      </TxBtn>
    </AllTxBox>
  );
};

export default AllTxsComponent;

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

const AllTxBox = styled.div`
  width: 90%;
  margin: 0 auto;
  .list-name {
    font-weight: 500;
    display: flex;
    column-gap: 20px;
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
    column-gap: 20px;
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

const TxBtn = styled.div`
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
