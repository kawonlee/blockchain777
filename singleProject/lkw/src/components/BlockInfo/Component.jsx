import styled from "styled-components";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { timeStampFunc } from "../utils";

const BlockComponent = ({ blockInfo, block }) => {
  useEffect(() => {
    blockInfo();
  }, []);
  return (
    <BlockInfoBox>
      <div className="info-title">
        Block <span>#{block.number}</span>
        <div></div>
      </div>
      <InfoBox>
        <div className="block-info">
          <div>📈Block Height: </div>
          <div>{block.number}</div>
        </div>
        <div className="block-info">
          <div>🕑Timestamp: </div>
          <div>{timeStampFunc(block.timestamp).text}전</div>
        </div>
        <div className="block-info">
          <div>📄Transaction: </div>
          <div>
            {!block.Transactions ? (
              0
            ) : (
              <Link to={`/block/${block.number}/txs`}>
                {block.Transactions.length}
              </Link>
            )}
          </div>
        </div>
        <div className="block-info">
          <div>🧑‍💻Fee Recipient: </div>
          <div>{block.miner}</div>
        </div>
        <div className="block-info">
          <div>⭕Size: </div>
          <div>{block.size}bytes</div>
        </div>
        <div className="block-info">
          <div>⛽Gas Used: </div>
          <div>{block.gasUsed}</div>
        </div>
        <div className="block-info">
          <div>⚠ Gas Limit: </div>
          <div>{block.gasLimit}</div>
        </div>
        <div className="block-info">
          <div>🗞Extra Data: </div>
          <div>{block.extraData}</div>
        </div>
        <div className="block-info">
          <div>🔣Hash: </div>
          <div>{block.hash}</div>
        </div>
        <div className="block-info">
          <div>🔠Parent Hash: </div>
          <div>{block.parentHash}</div>
        </div>
        <div className="block-info">
          <div>🌳StateRoot: </div>
          <div>{block.stateRoot}</div>
        </div>
        <div className="block-info">
          <div>🎰Nonce: </div>
          <div>{block.nonce}</div>
        </div>
      </InfoBox>
    </BlockInfoBox>
  );
};

export default BlockComponent;

const BlockInfoBox = styled.div`
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

const InfoBox = styled.div`
  background-color: white;
  border: 1px solid #adb5bd;
  border-radius: 8px;
  width: 90%;
  margin: 10px auto 40px auto;
  display: flex;
  flex-direction: column;

  .block-info {
    display: flex;

    & > div:nth-child(1) {
      width: 30%;
      color: #6c757d;
      padding: 10px;
    }

    & > div:nth-child(2) {
      width: 70%;
      padding: 10px;

      & > a {
        text-decoration: none;
        color: #0784c3;
      }
    }
  }
`;
