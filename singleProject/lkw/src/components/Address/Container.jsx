import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

import AddressComponent from "./Component";

const AddressContainer = () => {
  const { wallet } = useParams();
  const [adInfo, setAdInfo] = useState([]);
  const [time, setTime] = useState({});
  const [balance, setBalance] = useState("");
  console.log(wallet);

  const balanceInfo = () => {
    axios
      .post("http://localhost:8081/api/address/balance", {
        wallet: wallet,
      })
      .then((data) => {
        console.log("지갑잔액", data.data);
        setBalance(data.data);
      });
  };

  const walletInfo = () => {
    axios
      .post("http://localhost:8081/api/address/walletInfo", { wallet: wallet })
      .then((data) => {
        console.log("지갑관련트랜잭션", data);
        setAdInfo(data.data);
        setTime(data.data[0].Block);
      });
  };
  console.log("트랜잭션정보", adInfo);
  console.log("블록", time);
  return (
    <AddressComponent
      balanceInfo={balanceInfo}
      walletInfo={walletInfo}
      balance={balance}
      bktime={time}
      adInfo={adInfo}
      wallet={wallet}
    />
  );
};

export default AddressContainer;
