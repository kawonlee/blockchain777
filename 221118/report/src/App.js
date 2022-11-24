import "./App.css";
import Header from "./components/Header";
import Second from "./components/Second";
import BodyComp from "./components/BodyComp";
import BodyInfo from "./components/BodyInfo";

function App() {
  return (
    <div className="page">
      {/* <hr style={{ width: "50%" }}></hr> */}
      <div className="top">
        <Header />
      </div>
      <div className="second">
        <Second />
      </div>
      <div className="main">
        <BodyComp />
        <BodyInfo />
      </div>
    </div>
  );
}

export default App;
