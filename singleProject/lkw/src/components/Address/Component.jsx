import { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { timeStampFunc } from "../utils";

const AddressComponent = ({
  walletInfo,
  balanceInfo,
  bktime,
  balance,
  adInfo,
  wallet,
}) => {
  useEffect(() => {
    balanceInfo();
    walletInfo();
  }, [wallet]);

  const AddressMainTitleName = [
    {
      name: "Transaction Hash",
      width: "20%",
    },
    {
      name: "Block",
      width: "10%",
    },
    {
      name: "Age",
      width: "10%",
    },
    {
      name: "From",
      width: "25%",
    },
    {
      name: "To",
      width: "25%",
    },
    {
      name: "Value",
      width: "10%",
    },
  ];
  return (
    <AddressBox>
      <AddressTitle>
        <h3>Address {wallet}</h3>
        <div>
          ETH BALANCE <br />
          💲{balance} ETH
        </div>
      </AddressTitle>
      <AddressMain>
        <AddressMainTitle>
          {AddressMainTitleName?.map((item, idx) => {
            return (
              <div key={`333${idx}`} style={{ width: item.width }}>
                {item.name}
              </div>
            );
          })}
        </AddressMainTitle>
        {adInfo?.map((item, idx) => {
          return (
            <AddressSub key={`a${idx}`}>
              <div
                key={`b${idx}`}
                style={{ width: AddressMainTitleName[0]?.width }}
              >
                <Link to={`/tx/${item.hash}`}>{item.hash}</Link>
              </div>
              <div
                key={`c${idx}`}
                style={{ width: AddressMainTitleName[1]?.width }}
              >
                <Link to={`/block/${item.blockNumber}`}>
                  {item.blockNumber}
                </Link>
              </div>
              <div
                key={`d${idx}`}
                style={{ width: AddressMainTitleName[2]?.width }}
              >
                {timeStampFunc(bktime.timestamp).text}전
              </div>
              <div
                key={`h${idx}`}
                style={{ width: AddressMainTitleName[3]?.width }}
              >
                {wallet != item.from ? (
                  <Link to={`/address/${item.from}`}>{item.from}</Link>
                ) : (
                  <>{item.from}</>
                )}
              </div>
              <div
                key={`e${idx}`}
                style={{ width: AddressMainTitleName[4]?.width }}
              >
                {wallet != item.to ? (
                  <Link to={`/address/${item.to}`}>{item.to}</Link>
                ) : (
                  <>{item.to}</>
                )}
              </div>
              <div
                key={`f${idx}`}
                style={{ width: AddressMainTitleName[5]?.width }}
              >
                {item.value}
              </div>
            </AddressSub>
          );
        })}
        <Link to={"/txs"}>
          <button>VIEW ALL TRANSACTIONS</button>
        </Link>
      </AddressMain>
    </AddressBox>
  );
};

export default AddressComponent;

const AddressTitle = styled.div`
  & > h3 {
    margin: 10px 0;
    font-size: 1.4rem;
  }
  background-color: #f8f9fa;

  & > div {
    background-color: white;
    width: 20%;
    padding: 1%;
    border-radius: 8px;
    color: #6c757d;
  }

  padding: 0 0 2% 2%;
`;

const AddressBox = styled.div`
  width: 90%;
  padding: 0 5%;

  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

const AddressMain = styled.div`
  background-color: #f8f9fa;
  padding: 2% 20px;
  /* display: flex;
  flex-direction: column;
  row-gap: 20px; */
  & > div {
    border-bottom: 1px solid lightgray;
  }

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

const AddressSub = styled.div`
  display: flex;
  padding: 1% 0;
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
`;

const AddressMainTitle = styled.div`
  display: flex;
  column-gap: 10px;
  font-weight: 500;
  font-size: 18px;
  padding: 1% 0;
`;
