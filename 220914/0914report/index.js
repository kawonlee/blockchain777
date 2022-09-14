const contents = [
  //   { type: "number", name: "번호" }, //아이템
  { type: "todo", name: "할일" },
];
console.log(contents);

// function createList(todo) {
//   todoList.push({ todo });
// }
// createList("퇴근하기");
// createList("닭가슴살먹기");
// createList("주말기다리기");
// createList("과제하기");

// console.log(todoList); //생성된 걸 콘솔로그로 확인

const contentsElem = document.getElementById("list-head");
contents.forEach((item) => {
  contentsElem.innerHTML += "<p><span>" + item.name + "</span></p>";
});

// const todoListElem = document.getElementById("list-main");
// todoList.forEach((item, index) => {
//   let tempStr = "<div>";
//   contents.forEach((conItem) => {
//     if (conItem.type === "number") tempStr += `${index + 1}. `;
//     else tempStr += `${item[conItem.type]}`;
//   });
//   tempStr += "</div>";
//   console.log(tempStr);
//   todoListElem.innerHTML += tempStr;
// });

// function onclickfunction(e) {
//   let thisId = e.target.id;
//   console.log(thisId);
// }

// const buttonElem = document.getElementById("btn");
// buttonElem.onclick = onclickfunction;

// console.log(document.getElementById("text-plus").value);

// document.getElementById("btn").onclick = () => {
//   todoList.push(document.getElementById("text-plus"));
//   document.getElementById("list-main").innerHTML += "<div>";
//   document.getElementById("text-plus").value = "";
// };
const todoList = [];

document.getElementById("btn").onclick = () => {
  todoList.push(document.getElementById("text-plus").value);
  console.log(todoList);
  document.getElementById(
    "list-main"
  ).innerHTML += `<div class="todotext"><input type="checkbox" id="checking" onclick="is_checked()">
    ${document.getElementById("text-plus").value}
    <button type="button" id="delete">삭제</button></div>`;
  document.getElementById("text-plus").value = "";
};

function is_checked() {
  const checkbox = document.getElementById("checking");
  let is_checked = checkbox.checked;
  console.log(is_checked);
  if (is_checked == "true") {
    document.getElementById("delete").onclick = () => {
      document.getElementById("list-main").value = "";
    };
  } else is_checked == "false";
}
// document.getElementById("delete").onclick = () => {
//   if (document.getElementById("todotext").checked = ) {

//   }

// };
