import axios from "axios";
import { useState } from "react";
import LatestTxComponent from "./Component";

const LatestTxContainer = () => {
  const [txArr, setTx] = useState([]);

  const txGet = () => {
    axios
      .post("http://localhost:8081/getTx", { msg: "트랜잭션 불러와줘" })
      .then((data) => {
        console.log(data.data);
        setTx(data.data);
      });
  };
  return <LatestTxComponent txGet={txGet} txArr={txArr} />;
};

export default LatestTxContainer;
