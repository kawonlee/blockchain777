import axios from "axios";
import { useEffect, useState } from "react";

import AllTxsComponent from "./Component";

const AllTxsContainer = () => {
  const [txArr, setTx] = useState([]);
  const [txLen, setTxLen] = useState(0);

  useEffect(() => {
    txLength();
  }, []);
  const txGet = (nowPage) => {
    axios
      .post("http://localhost:8081/api/tx/allTx", {
        limit: 20,
        offset: nowPage,
      })
      .then(({ data }) => {
        console.log(data);
        setTx(data);
      });
  };
  const txLength = () => {
    axios.post("http://localhost:8081/api/tx/txLength").then(({ data }) => {
      setTxLen(data.length);
    });
  };
  return <AllTxsComponent txArr={txArr} txGet={txGet} txLen={txLen} />;
};

export default AllTxsContainer;
