import logo from "./logo.svg"; // 이미지를 불러온다.
import "./App.css"; // css파일을 불러온다.
import Test from "./Test";

function App() {
  // 파스칼 표기법을 사용한다. = Component이다. (이후 설명 예정)
  return (
    <div className="App">
      {/* react에서는 class가 아닌 className이라고 한다. */}
      <Test test="아뇽하세요"> 테스트중인데용</Test>
      {/* Component의 예시이다. 10번째 줄 */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
