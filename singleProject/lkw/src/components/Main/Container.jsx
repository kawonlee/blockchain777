import { useNavigate } from "react-router-dom";
import MainComponent from "./Component";
import axios from "axios";

const MainContainer = () => {
  const navi = useNavigate();
  const searchFunc = (searchData) => {
    axios
      .post("http://localhost:8081/api/search/searchData", {
        searchData: searchData,
      })
      .then(({ data }) => {
        console.log(data.data);
        console.log(data.condition);
        if (data.data === "txHash" && data.condition === true) {
          navi(`/tx/${searchData}`);
        } else if (data.data === "address" && data.condition === true) {
          navi(`/address/${searchData}`);
        } else if (data.data === "block" && data.condition === true) {
          navi(`/block/${searchData}`);
        } else if (data.condition === false) navi("/404notFound");
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return <MainComponent searchFunc={searchFunc} />;
};

export default MainContainer;
