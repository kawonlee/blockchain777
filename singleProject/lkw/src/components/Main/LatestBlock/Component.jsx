import { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import blockImg from "../../../Img/block.png";
import { timeStampFunc } from "../../utils";

const LastestBlockComponent = ({ blockGet, tempArr }) => {
  useEffect(() => {
    blockGet();
  }, []);

  const latestBlock = tempArr.slice(0, 10);
  return (
    <LastBlockBox>
      {latestBlock?.map((item, idx) => {
        return (
          <div className="block-list" key={`blocklist${idx}`}>
            <div>
              <img className="block" src={blockImg}></img>
            </div>
            <div>
              <Link to={`/block/${item.number}`} key={`idx${idx}`}>
                {item.number} / {timeStampFunc(item.timestamp).text}전
              </Link>
            </div>
            <div>
              <Link to={`/address/${item.miner}`}>{item.miner}</Link>
            </div>
            <div>{item.gasUsed}eth</div>
          </div>
        );
      })}
      <Link to={"/blocks"}>
        <button>VIEW ALL BLOCKS</button>
      </Link>
    </LastBlockBox>
  );
};

export default LastestBlockComponent;

const LastBlockBox = styled.div`
  .block {
    width: 45px;
    border-radius: 8px;
  }

  .block-list {
    display: flex;
    column-gap: 2%;
    align-items: center;
    cursor: pointer;
    width: 100%;
    /* overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis; */
    border: 1px solid #adb5bd;
    border-radius: 8px;

    & > div:nth-child(1) {
      width: 10%;
    }

    & > div > a {
      text-decoration: none;
      color: black;
      &:hover {
        color: #0784c3;
      }
    }

    & > div:nth-child(2) {
      width: 20%;
    }

    & > div:nth-child(3) {
      width: 45%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;

      &:hover {
        color: #0784c3;
      }
    }

    & > div:nth-child(4) {
      width: 15%;
    }
  }

  /* .block-list:hover {
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
