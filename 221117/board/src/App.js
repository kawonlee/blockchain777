import logo from "./logo.svg";
import "./App.css";

import TempTable from "./components/TempTable";
import TempTr from "./components/TempTr";

function App() {
  const tempArr = [
    {
      name: "가원",
      age: 27,
      number: 1,
      work: "Front",
    },
    {
      name: "선주",
      age: 1,
      number: 2,
      work: "Front",
    },
    {
      name: "성진",
      age: 45,
      number: 3,
      work: "Back",
    },
    {
      name: "영준",
      age: 2,
      number: 4,
      work: "Back",
    },
    {
      name: "재일",
      age: 10,
      number: 5,
      work: "Front",
    },
    {
      name: "정규",
      age: 3,
      number: 6,
      work: "Back",
    },
  ];

  const headData = {
    name: "이름",
    age: "나이",
    number: "번호",
    work: "필살기",
  };
  const tempHead = ["name", "age", "number", "work"];

  return (
    <div className="App">
      <TempTable
        key={1234}
        tableData={headData}
        head={tempHead}
        tempArr={tempArr}
      />
      <table>
        <thead>
          <TempTr isHead={true} tableData={headData} head={tempHead} />
        </thead>
        <tbody>
          {tempArr.map((item, index) => (
            <TempTr key={index} tableData={item} head={tempHead} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
