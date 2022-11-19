import "./App.css";
import Box from "./Box"; // Box라는 컴포넌트를 가져오겠다.

function App() {
  return (
    <div>
      <Box name="이가원" num="1" />
      {/* props: 컴포넌트에 다이나믹한 값을 주고 싶다. 
      props이름을 정해준다 지금처럼 + 주고싶은 값을 정한다. */}
      <Box name="김정규" num="2" />
      <Box name="장정현" num="3" />
      <Box name="허재원" num="4" />
      <Box name="이재혁" num="5" />
      <Box name="고우석" num="6" />
    </div>
  );
}

export default App;
