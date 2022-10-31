const registBtn = document.getElementById("member");
const loginBtn = document.getElementById("login-btn");
const registBtn2 = document.getElementById("regist");
const userId = document.getElementById("id");
const userPw = document.getElementById("pw");
const userName = document.getElementById("name");
const userAge = document.getElementById("age");
const userSex = document.getElementById("sex");
const registText = document.getElementById("regist-text");
const actionText = document.getElementById("actionText");
const logoutBtn = document.getElementById("logout-btn");
const loginIng = document.getElementById("login-ing");
const boardMain = document.getElementById("board-main");
const boardAdd = document.getElementById("board-add");
const boardTitle = document.getElementById("board-title");
const boardText = document.getElementById("board-text");
const board = document.getElementById("board");
let currUser = { id: "", pw: "" };
registBtn.onclick = function (e) {
  e.preventDefault();
  registText.classList.toggle("on");
};

registBtn2.onclick = async function (e) {
  e.preventDefault();
  try {
    const data = await axios.post("/api/user/regist", {
      id: userId.value,
      pw: userPw.value,
      name: userName.value,
      age: userAge.value,
      sex: userSex.value,
    });
    console.log(data);
    registText.classList.toggle("on");
    actionText.innerText = "회원가입을 완료했습니다.";
    userId.value =
      userPw.value =
      userAge.value =
      userSex.value =
      userName.value =
        "";
  } catch (err) {
    console.error(err);
  }
};

loginBtn.onclick = async function (e) {
  e.preventDefault();
  try {
    const data = await axios.post("/api/user/login", {
      id: userId.value,
      pw: userPw.value,
    });
    console.log(data);
    if (!data.data) actionText.innerText = "잘못된 정보를 입력하셨습니다.";
    else {
      actionText.innerText = `${userId.value}님 어서오세요.`;
      currUser.id = userId.value;
      currUser.pw = userPw.value;
      userId.value = userPw.value = "";
      //   document.querySelector("form > div").classList.toggle("login-text");
      document.getElementsByClassName("login-text")[0].style.display = "none";
      loginBtn.classList.toggle("login");
      logoutBtn.classList.toggle("login");
      loginIng.classList.toggle("login");
      boardMain.classList.toggle("login");
      board.classList.toggle("login");
      loginIng.innerText = `${currUser.id}님`;
    }
  } catch (err) {
    console.error(err);
  }
};

logoutBtn.onclick = function (e) {
  e.preventDefault();
  document.getElementsByClassName("login-text")[0].style.display = "flex";
  loginBtn.classList.toggle("login");
  logoutBtn.classList.toggle("login");
  loginIng.classList.toggle("login");
  boardMain.classList.toggle("login");
  board.classList.toggle("login");
  actionText.innerText = `${currUser.id}님이 로그아웃 하셨습니다.`;
  currUser = { id: "", pw: "" };
};

boardAdd.onsubmit = async function (e) {
  e.preventDefault();
  try {
    const data = await axios.post("/api/board/add", {
      title: boardTitle.value,
      text: boardText.value,
      uptime: Date.now().toLocaleString(),
    });
    if (data.data.status == 200) {
      boardTitle.value = boardText.value = "";
    }
  } catch (err) {
    console.error(err);
  }
  getList();
};

let maxCount = 2; // 총 페이지 수
let count = 0; // 현재 페이지

const pageElem = document.getElementById("page");
const listElem = document.getElementById("list");

async function getList() {
  try {
    const data = await axios.get("/api/board?count=" + count);
    // count = 0 => /api/board?count = 0

    pageElem.innerHTML = "";
    maxCount = data.data.maxCount;
    for (let i = 0; i < maxCount; ++i) {
      const tempLi = document.createElement("li");
      tempLi.innerText = i + 1;
      tempLi.onclick = function (e) {
        count = i;
        pageElem.getElementsByClassName("now")[0].classList.remove("now");
        tempLi.classList.add("now");
        getList();
      };
      if (count === i) {
        tempLi.classList.add("now");
      }
      pageElem.append(tempLi);
    }

    listElem.innerHTML = "";
    data.data.list.forEach((data, index) => {
      const tempLi = document.createElement("li");
      const tempTitle = document.createElement("div");
      const tempH3 = document.createElement("h3");
      const tempText = document.createElement("div");
      const tempImg = document.createElement("img");
      const tempP = document.createElement("p");
      const tempTextarea = document.createElement("textarea");
      const tempBtnBox = document.createElement("div");
      const tempDelBtn = document.createElement("button");
      const tempEditBtn = document.createElement("button");
      const tempCancelBtn = document.createElement("button");
      const tempComment = document.createElement("div");
      const tempCommentText = document.createElement("input");
      const tempCommentBtn = document.createElement("button");

      tempTitle.classList.add("title");
      tempTitle.onclick = function (e) {
        tempText.classList.toggle("on");
        tempImg.classList.toggle("on");
        tempText.classList.remove("edit");
      };
      tempText.classList.add("text");
      tempImg.src = "./angle-up-solid.svg";
      tempImg.alt = "list-item-btn";
      tempH3.innerText = data.title;
      tempP.innerText = data.text;
      tempTextarea.value = data.text;

      tempBtnBox.classList.add("list-btn-box");

      tempDelBtn.innerText = "삭제";
      tempDelBtn.classList.add("delete");
      tempDelBtn.onclick = async function (e) {
        try {
          console.log("test");
          const data = await axios.post("/api/board/delete", {
            count,
            num: index,
          });
          getList();
          console.log(data.data);
        } catch (err) {
          console.log(err);
        }
      };

      tempEditBtn.innerText = "수정";
      tempEditBtn.onclick = async function (e) {
        if (tempText.classList.contains("edit")) {
          try {
            const data = await axios.post("/api/board/update", {
              count,
              num: index,
              text: tempTextarea.value,
              time: Date.now().toLocaleString(),
            });
            getList();
            console.log(data.data);
          } catch (err) {
            console.log(err);
          }
        } else {
          tempTextarea.value = data.text;
          tempText.classList.add("edit");
        }
      };

      tempCancelBtn.innerText = "취소";
      tempCancelBtn.classList.add("cancel");
      tempCancelBtn.onclick = function (e) {
        tempText.classList.remove("edit");
      };

      tempBtnBox.append(tempEditBtn);
      tempBtnBox.append(tempDelBtn);
      tempBtnBox.append(tempCancelBtn);

      tempTitle.append(tempH3);
      tempTitle.append(tempImg);
      tempText.append(tempP);
      tempText.append(tempTextarea);
      tempText.append(tempBtnBox);

      tempLi.append(tempTitle);
      tempLi.append(tempText);
      listElem.append(tempLi);
      //댓글
      tempCommentBtn.innerText = "댓글추가";
      listElem.append(tempComment);
      tempComment.append(tempCommentText);
      tempComment.append(tempCommentBtn);
    });
  } catch (err) {
    console.error(err);
  }
}
getList();
