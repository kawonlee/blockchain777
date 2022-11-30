import MainContainer from "./containers/Main";

import store from "./store";

function App() {
  return (
    <div>
      <MainContainer />
      <div>
        <button
          onClick={() => {
            store.dispatch({ type: "value", payload: store.getState() });
          }}
        >
          클릭
        </button>
      </div>
    </div>
  );
}

export default App;
