const root = document.getElementById("root");
// id가 root인 엘리먼트를 가져온다. 그리고 root 변수에 초기화한다.

// root.onload
// onload라는 메서드는 로그가 되었는가? 되었을 때 실행된다. 즉 dom 생성됐을 때
// 페이지 로드 후 자동으로 재생할 때 등에 사용한다.

root.onwheel = (e) => {
  //마우스 휠에 대한 메서드
  console.log(e.target);
  // target으로 마우스가 어디에서 움직였는지 확인할 수 있다.
};

document.getElementById("name").onchange = (e) => {
  console.log(e.target.value);
  // e.target은 해당 메서드가 어디서 실행됐는지, 포커스(focus)가 기준이 될 수도 있고, 마우스의 위치가 기준이 될 수도 있다.
  // onchange는 변경됐을 때를 알려준다. -> 입력이 완료됐을때, 즉 변화가 완료됐을때 이다.
};

document.getElementById("name").oninput = (e) => {
  console.log(e.target.value);
  // 입력했을 때
  // on어쩌구 하는 메서드를 쓰는데 그것이 뭐냐
  // on***은 전부 이벤트 함수라고 부른다. 즉 클릭, 키다운,입력 등 사용자의 입력에 대해서 이벤트가 발생했을 때 실행된다.
};

document.getElementById("name").addEventListener("click", (e) => {
  console.log(e.target);
});
for (let i = 0; i < 10; ++i) {
  const tempElem = document.createElement("div");
  // div 엘리먼트를 생성해서 tempElem 변수에 초기화한다.
  tempElem.innerHTML = i + "번째 div";
  // tempElem의 내용(innerHTML)을 'i번째 div'라고 정의한다.
  //   root.append(tempElem);
  //root 엘리먼트에 tempElem 엘리먼트를 마지막 자식으로 추가한다.(뒤에서 = 아랫줄에 추가한다. 기존에 root에 자식이 있으면 그 자식 아래에 추가한다.)
  root.prepend(tempElem);
  // root 엘리먼트에 tempElem 엘리먼트를 첫번째 자식으로 추가한다.(기존에 root에 자식이 있으면 그 자식을 밀어내고 위에 추가한다.)
}

document.getElementById("name").style.backgroundColor = "lightblue"; // 태그 안에 스타일을 넣은 것과 같다.
// html문서에서 style속성을 이용해서 inline 형식으로 설정된 스타일과 마찬가지로 적용된다.
console.log(document.getElementById("name").style.border);
