import axios from "axios";
import LastestBlockComponent from "./Component";
// import Web3 from "web3";
import { useEffect, useState } from "react";

const LatestBlockContainer = () => {
  const [tempArr, setTemp] = useState([]);
  // const [blockHeight, setBlockHeight] = useState(0);
  const request = axios.create({
    method: "POST",
    baseURL: "http://localhost:8085",
    headers: {
      "content-type": "application/json",
    },
  });

  const blockGet = () => {
    axios
      .post("http://localhost:8081/getBlock", { msg: "블록데이터 불러와줘" })
      .then((data) => {
        console.log(data.data);
        setTemp(data.data.reverse());
      });
  };

  // useEffect(() => {
  //   if (tempArr.length === blockHeight) return;
  //   console.log(tempArr);
  //   getBlocks(tempArr.length);
  // }, [tempArr, blockHeight]);

  // const getBlocks = (i) => {
  //   web3.eth.getBlock(i).then((data) => {
  //     // 매개변수 data = getBlock으로 받아온 block의 정보(객체)
  //     setTemp([...tempArr, data]);
  //   });
  // };

  // const getNumber = () => {
  //   web3.eth.getBlockNumber().then((num) => {
  //     console.log(num);
  //     setBlockHeight(num); // 블록의 높이로 state를 바꿔준다.
  //   });
  // };

  // return <LastestBlockComponent getNumber={getNumber} blockList={tempArr} />;
  return <LastestBlockComponent blockGet={blockGet} tempArr={tempArr} />;
};

export default LatestBlockContainer;
