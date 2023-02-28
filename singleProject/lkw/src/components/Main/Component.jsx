import styled from "styled-components";
import { useState } from "react";
import LatestBlockContainer from "./LatestBlock/Container";
import LatestTxContainer from "./LatestTx/Container";

const MainComponent = ({ searchFunc }) => {
  const [searchData, setSearch] = useState("");
  return (
    <MainBox>
      <MainSearch>
        <div className="search">
          <h3>The Ethereum Blockchain Explorer</h3>
          <div>
            <input
              value={searchData}
              onInput={(e) => {
                setSearch(e.target.value);
              }}
              type={"text"}
              placeholder={
                "Search by Address / Txn Hash / Block / Token / Domain Name"
              }
            />
            <button
              onClick={() => {
                if (!isNaN(+searchData)) {
                  searchFunc(+searchData);
                } else searchFunc(searchData);
              }}
            >
              search
            </button>
          </div>
          <h4>
            Sponsored : Discover World of Dypians Metaverse and earn 25% APR in
            Ethereum. Join Now!
          </h4>
        </div>
      </MainSearch>
      <MainLog>
        <div>
          <div>
            <div>💰 ETHER PRICE</div>
            <div>$1,640.32 @ 0.06823 BTC (-2.13%)</div>
          </div>
          <div>
            <div>🌐 MARKET CAP</div>
            <div>$197,639,735,689.00</div>
          </div>
        </div>

        <div>
          <div>
            <div className="log-list">
              <div>📃 TRANSACTIONS</div>
              <div>MED GAS PRICE</div>
            </div>
            <div className="log-list">
              <div>1,881.45 M (12.2 TPS)</div>
              <div>34 Gwei($1.17)</div>
            </div>
          </div>
          <div>
            <div className="log-list">
              <div>🕛 LAST FINALIZED BLOCK</div>
              <div>LAST SAFE BLOCK</div>
            </div>
            <div className="log-list">
              <div>16682619</div>
              <div>16682651</div>
            </div>
          </div>
        </div>
        <div>
          <img src="/Img/dance.gif" />
        </div>
      </MainLog>
      <MainInfo>
        <div>
          <h4>Lastest Blocks</h4>
          <LatestBlockContainer />
        </div>
        <div>
          <h4>Latest Transactions</h4>
          <LatestTxContainer />
        </div>
      </MainInfo>
    </MainBox>
  );
};

export default MainComponent;

const MainBox = styled.div`
  width: 90%;
  padding: 0 5%;
  background-image: url("/Img/space.jpg");
  background-repeat: no-repeat;
  background-size: 100% 30%;
`;

const MainSearch = styled.div`
  .search {
    display: flex;
    flex-direction: column;
    padding: 3% 0;
    & > h3 {
      color: white;
      margin: 0;
    }
    & > div {
      border-radius: 5px;
      background-color: white;
      width: 600px;
      padding: 5px;
      margin-top: 10px;

      & > input {
        width: 500px;
        height: 30px;
        border-radius: 5px;
        font-size: 15px;
      }
      & > button {
        border: none;
        background-color: #0784c3;
        border-radius: 5px;
        height: 35px;
        color: white;
        font-size: 15px;
        cursor: pointer;
      }
    }
    & > h4 {
      color: white;
      margin: 10px 0 0 0;
    }
  }
`;

const MainLog = styled.div`
  background-color: #f8f9fa;
  display: flex;
  font-weight: 500;
  border-radius: 8px;
  margin-bottom: 20px;

  .log-list {
    display: flex;
    justify-content: space-between;
  }

  & > div:nth-child(1) {
    width: 27%;
    margin: 1%;
    padding: 1%;
    background-color: white;
    border-radius: 8px;
    font-size: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  & > div:nth-child(2) {
    width: 30%;
    margin: 1%;
    padding: 1%;
    background-color: white;
    border-radius: 8px;
    font-size: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  & > div:nth-child(3) {
    width: 35%;
    margin: 1%;
    background-color: white;
    border-radius: 8px;
    text-align: center;
    img {
      width: 400px;
      height: 150px;
      border-radius: 8px;
    }
  }
`;

const MainInfo = styled.div`
  display: flex;

  & > div:first-child {
    width: 50%;
    background-color: #f8f9fa;
    border: 1px solid #e9ecef;
    border-radius: 8px;
    padding: 15px;

    & > h4 {
      padding: 10px;
      margin: 0;
    }
  }

  & > div:last-child {
    width: 50%;
    background-color: #f8f9fa;
    border: 1px solid #e9ecef;
    border-radius: 8px;
    padding: 15px;

    & > h4 {
      padding: 10px;
      margin: 0;
    }
  }
`;
