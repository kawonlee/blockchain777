const todoList = document.getElementById("list");
function getList() {
  todoList.innerHTML = "";
  axios.get("/api/list").then((data) => {
    data.data.list.forEach((todo) => {
      const tempElem = document.createElement("li");
      tempElem.innerHTML = `${todo.text} / 등록시간 : ${new Date(todo.time)}`;
      todoList.append(tempElem);
    });
  });
}
getList();

document.forms["todo-form"].onsubmit = function (e) {
  e.preventDefault(); // 기본 이벤트를 막는다.
  // XMLHttpRequest => fetch/ajax => axios (발전 순서)
  // 요청 사항에 대해 서버가 응답한 내용을 브라우저가 아닌 데이터로써 자바스크립트에 사용하기 위해서 axios를 사용한다.
  axios
    .post("/api/list", {
      "do-name": document.forms["todo-form"]["do-name"].value,
      time: Date.now(),
    })
    .then((data) => {
      getList();
    });
  //   axios.get(
  //     "/api/add?name=" +
  //       document.forms["todo-form"]["do-name"].value +
  //       "&str = 이가원"
  //   );
};

// axios.post('라우터', 서버의 req.body) 저 데이터를 보낸다.
