import axios from "axios";
import { useState } from "react";

import AllBlocksComponent from "./Component";

const AllBlocksContainer = () => {
  const [blockArr, setBlock] = useState([]);
  const [bHeight, setBheight] = useState("");
  const blockGet = (nowPage) => {
    axios
      .post("http://localhost:8081/api/block/allBlock", {
        limit: 20,
        page: nowPage,
      })
      .then((data) => {
        console.log(data.data);
        setBlock(data.data);
      });
    axios.post("http://localhost:8081/api/block/blockHeight").then((height) => {
      setBheight(height.data);
    });
  };

  return (
    <AllBlocksComponent
      blockArr={blockArr}
      blockGet={blockGet}
      bHeight={bHeight}
    />
  );
};

export default AllBlocksContainer;
