import "./App.css";
import ContextTest from "./components/ContextTest";
import Office from "./components/Office";
import PropsTest from "./components/PropsTest";
import ReducerTest from "./components/ReducerTest";
import ReducerTest2 from "./components/ReducerTest2";

function App() {
  return (
    <div className="App">
      {/* <PropsTest />
      <ContextTest /> */}
      <ReducerTest2 />
      <ReducerTest>
        <Office />
      </ReducerTest>
    </div>
  );
}

export default App;
