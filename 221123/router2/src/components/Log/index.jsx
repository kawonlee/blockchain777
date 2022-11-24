import { Outlet } from "react-router-dom";

function Log() {
  return (
    <div>
      Log!
      <Outlet />
      {/* 하위 라우터가 있을 때 그 친구들을 출력해주겠다. 하위 라우터의 위치를 결정한다. */}
    </div>
  );
}
export default Log;
