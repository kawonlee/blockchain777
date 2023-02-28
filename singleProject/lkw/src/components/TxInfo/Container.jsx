import TxComponent from "./Component";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";

const TxContainer = () => {
  const txHash = useParams().txHash;
  const [txInfomation, setTxInfomation] = useState({});
  const [bkInfo, setBkInfo] = useState({});

  const txInfo = () => {
    axios
      .post("http://localhost:8081/api/tx/txInfo", { txHash: txHash })
      .then((data) => {
        console.log("블록포함데이터", data.data);
        setTxInfomation(data.data);
        setBkInfo(data.data.Block);
      });
  };
  console.log(txInfomation);
  console.log("블록쓰", bkInfo);
  return <TxComponent txInfo={txInfo} tx={txInfomation} bk={bkInfo} />;
};
export default TxContainer;
