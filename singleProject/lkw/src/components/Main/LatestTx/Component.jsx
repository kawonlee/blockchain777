import styled from "styled-components";
import { Link } from "react-router-dom";

import transactionImg from "../../../Img/transactionIcon.jpg";
import { useEffect } from "react";

const LatestTxComponent = ({ txGet, txArr }) => {
  useEffect(() => {
    txGet();
  }, []);

  const latestTx = txArr.slice(0, 10);
  return (
    <LastTxBox>
      {latestTx?.map((item, idx) => {
        return (
          <div className="tx-list" key={`txlist${idx}`}>
            <div>
              <img className="tx" src={transactionImg}></img>
            </div>
            <div>
              <Link to={`/tx/${item.hash}`} key={`id${idx}`}>
                {item.hash}
              </Link>
            </div>
            <div>
              <Link to={`/address/${item.from}`}>From: {item.from}</Link>
            </div>
            <div>
              <Link to={`/address/${item.to}`}>To: {item.to}</Link>
            </div>
            <div>{item.value}eth</div>
          </div>
        );
      })}
      <Link to={"/txs"}>
        <button>VIEW ALL TRANSACTIONS</button>
      </Link>
    </LastTxBox>
  );
};

export default LatestTxComponent;

const LastTxBox = styled.div`
  .tx {
    width: 45px;
    border-radius: 8px;
  }

  .tx-list {
    display: flex;
    align-items: center;
    column-gap: 2%;
    width: 100%;
    border: 1px solid #adb5bd;
    border-radius: 8px;
    cursor: pointer;
    & > div {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    & > div > a {
      /* width: 20%; */

      text-decoration: none;
      color: black;
      &:hover {
        color: #0784c3;
      }
    }
    & > div:nth-child(1) {
      width: 10%;
    }
    & > div:nth-child(2) {
      width: 25%;

      &:hover {
        color: #0784c3;
      }
    }
    & > div:nth-child(3) {
      width: 25%;
      &:hover {
        color: #0784c3;
      }
    }
    & > div:nth-child(4) {
      width: 25%;
      &:hover {
        color: #0784c3;
      }
    }

    & > div:nth-child(5) {
      width: 7%;
    }
  }

  /* .tx-list:hover {
    color: #0784c3;
  } */

  & > a > button {
    width: 100%;
    border: 1px solid #adb5bd;
    border-radius: 8px;
    height: 40px;
    font-weight: 600;
    cursor: pointer;
  }

  & > a > button:hover {
    color: #0784c3;
  }
`;
