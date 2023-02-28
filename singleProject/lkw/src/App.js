import "./App.css";
import { Routes, Route } from "react-router-dom";

import MainContainer from "./components/Main/Container";
import FooterComponent from "./components/Main/Footer/Component";
import HeaderComponent from "./components/Main/Header/Component";
import BlockContainer from "./components/BlockInfo/Container";
import TxContainer from "./components/TxInfo/Container";
import AllBlocksContainer from "./components/AllBlocks/Container";
import AllTxsContainer from "./components/AllTxs/Container";
import AddressContainer from "./components/Address/Container";
import NotFoundComponent from "./components/Search/Component";
import BlockTxContainer from "./components/BlockInfo/BlockTx/Container";

import { timeStampFunc } from "./components/utils";
function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<MainContainer />}></Route>
        <Route
          path="/block/:blockNum/txs"
          element={<BlockTxContainer />}
        ></Route>
        <Route path="/block/:blockNum" element={<BlockContainer />}></Route>
        <Route path="/tx/:txHash" element={<TxContainer />}></Route>
        <Route path="/blocks" element={<AllBlocksContainer />}></Route>
        <Route path="/txs" element={<AllTxsContainer />}></Route>
        <Route path="/address/:wallet" element={<AddressContainer />}></Route>
        <Route path="/404notFound" element={<NotFoundComponent />}></Route>
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
