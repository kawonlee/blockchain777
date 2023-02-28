import styled from "styled-components";
import { useEffect } from "react";

import Spon from "../../Img/jerry.gif";
import { Link } from "react-router-dom";
import { timeStampFunc } from "../utils";

const TxComponent = ({ txInfo, tx, bk }) => {
  useEffect(() => {
    txInfo();
  }, []);
  return (
    <TxInfoBox>
      <div className="info-title">
        Transaction Details
        <div></div>
      </div>
      <TxBox>
        <div className="tx-info">
          <div>📄Transaction Hash: </div>
          <div>{tx.hash}</div>
        </div>
        <div className="tx-info">
          <div>📈Block: </div>
          <div>
            <Link to={`/block/${tx.blockNumber}`}>{tx.blockNumber}</Link>
          </div>
        </div>
        <div className="tx-info">
          <div>🕑Timestamp: </div>
          <div>{timeStampFunc(bk.timestamp).text}전</div>
        </div>
        <div className="tx-info">
          <div>🏙 Sponsored: </div>
          <div>
            <img src={Spon}></img>
          </div>
        </div>
        <div className="tx-info">
          <div>📦From : </div>
          <div>
            <Link to={`/address/${tx.from}`}>{tx.from}</Link>
          </div>
        </div>
        <div className="tx-info">
          <div>📬To : </div>
          <div>
            <Link to={`/address/${tx.to}`}>{tx.to}</Link>
          </div>
        </div>
        <div className="tx-info">
          <div>💲Value: </div>
          <div>{tx.value}eth</div>
        </div>
        <div className="tx-info">
          <div>⛽Gas Price : </div>
          <div>{tx.gasPrice}</div>
        </div>
        <div className="tx-info">
          <div>📋Input Data: </div>
          <div>{tx.input}</div>
        </div>
      </TxBox>
    </TxInfoBox>
  );
};

export default TxComponent;

const TxInfoBox = styled.div`
  background-color: #e9ecef;
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;

  .info-title {
    width: 90%;
    margin: 0 auto;
    font-weight: 500;
    font-size: 20px;
    padding: 10px;

    & > div {
      border: 1px solid #adb5bd;
      height: 1px;
      background-color: #adb5bd;
      margin-top: 10px;
    }
  }
`;

const TxBox = styled.div`
  background-color: white;
  border: 1px solid #adb5bd;
  border-radius: 8px;
  width: 90%;
  margin: 10px auto 40px auto;
  display: flex;
  flex-direction: column;

  .tx-info {
    display: flex;

    & > div > a {
      text-decoration: none;
      color: #0784c3;
    }

    & > div:nth-child(1) {
      width: 30%;
      color: #6c757d;
      padding: 10px;
    }

    & > div:nth-child(2) {
      width: 70%;
      padding: 10px;

      & > img {
        width: 300px;
      }
    }
  }
`;
