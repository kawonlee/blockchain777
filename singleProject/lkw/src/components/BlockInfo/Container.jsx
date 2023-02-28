import BlockComponent from "./Component";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";

const BlockContainer = () => {
  const blockNum = useParams().blockNum;
  console.log(blockNum);
  const [blockInfomation, setInfomation] = useState({});
  console.log(blockNum);
  const blockInfo = () => {
    axios
      .post("http://localhost:8081/api/block/blockInfo", {
        blockNum: blockNum,
      })
      .then((data) => {
        console.log(data.data);
        setInfomation(data.data);
      });
  };
  console.log(blockInfomation);
  return <BlockComponent blockInfo={blockInfo} block={blockInfomation} />;
};

export default BlockContainer;
