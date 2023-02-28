import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import BlockTxComponent from "./Component";

const BlockTxContainer = () => {
  const { blockNum } = useParams();
  const [blockTx, setBlockTx] = useState([]);
  const [txLen, setTxLen] = useState(0);

  useEffect(() => {
    txLength();
  }, []);
  const blockTxGet = (nowPage) => {
    axios
      .post("http://localhost:8081/api/tx/allBlockTx", {
        blockNum: blockNum,
        limit: 20,
        offset: nowPage,
      })
      .then(({ data }) => {
        console.log(data);
        setBlockTx(data);
      });
  };

  const txLength = () => {
    axios.post("http://localhost:8081/api/tx/txLength").then(({ data }) => {
      setTxLen(data.length);
    });
  };

  return (
    <BlockTxComponent
      blockTxGet={blockTxGet}
      blockTx={blockTx}
      blockNum={blockNum}
      txLen={txLen}
    />
  );
};

export default BlockTxContainer;
