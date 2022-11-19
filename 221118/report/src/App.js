import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Second from "./components/Second";

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
      <div className="main">git rebase efforthye</div>
    </div>
  );
}

export default App;
