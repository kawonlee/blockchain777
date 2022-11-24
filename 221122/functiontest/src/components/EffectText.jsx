import { useEffect } from "react";
import { useState, useCallback, useMemo } from "react";

function EffectTest() {
  const [num, setNum] = useState(0);
  const [name, setName] = useState("");
  const [file, setFile] = useState({
    name: "파일임니다",
    ext: "png",
    type: "image/png",
  });
  console.log("확인중");

  useEffect(() => {
    console.log("effect hook test start");
  }, []);

  useEffect(() => {
    setName(`${num}`);
    console.log(`숫자가 ${num}으로 변경됐어`);
  }, [num]);

  useEffect(() => {
    console.log(`이름이 ${name}으로 변경됐어`);
    setFile({ ...file, name: name });
  }, [name]);

  useEffect(() => {
    console.log(file);
  }, [file]);

  const increase = () => {
    setNum(num + 1);
  };

  const increaseCallback = useCallback(() => {
    setNum(num + 1);
  }, [num]);

  //   const tempNum = num + 10;
  const memoNum = useMemo(() => {
    return num + 10;
  }, [num]);
  return (
    <div>
      <button onClick={increaseCallback}>{memoNum}</button>
      <div>{name}</div>
      <div>{file.name + "." + file.ext}</div>
    </div>
  );
}

export default EffectTest;
