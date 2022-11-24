import { useState } from "react";

export default function List() {
  const [listArr, setListArr] = useState([
    { text: "나는이가원1", user: "lkw" },
    { text: "나는이가원2", user: "lkw" },
    { text: "나는이가원3", user: "lkw" },
    { text: "나는이가원4", user: "lkw" },
    { text: "나는이가원5", user: "lkw" },
  ]);
  return (
    <div>
      {listArr.map((item, index) => (
        <div key={index}>
          <div key={`${index}-1`}>{item.text}</div>
          <div key={`${index}-2`}>{item.user}</div>
        </div>
      ))}
    </div>
  );
}
