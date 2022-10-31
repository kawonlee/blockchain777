// 회원 가입
document.forms["sign-up"].onsubmit = async function (e) {
  e.preventDefault();
  if (
    !e.target["user-id"].value ||
    !e.target["user-pw"].value ||
    !e.target["user-name"].value ||
    !e.target["user-class"].value
  )
    // 입력값 확인. 하나라도 입력이 안되어 있으면 return 시켜라(끝내라, 뒤에 함수 실행하지 마라)
    return;
  try {
    const result = await axios.post("/api/user/regist", {
      id: e.target["user-id"].value,
      pw: e.target["user-pw"].value,
      name: e.target["user-name"].value,
      className: e.target["user-class"].value,
    });
  } catch (error) {
    console.error(error.response.data.message);
  }
};
const boardList = document.getElementById("board-list");
async function getlist() {
  try {
    const result = (await axios.get("/api/board")).data;
    console.log(result);
    boardList.innerHTML = "";
    result?.list?.forEach((item) => {
      const boardItem = document.createElement("div"); //`<div class="board-item">
      const boardTitle = document.createElement("div"); // <div class="board-title"></div>
      const boardText = document.createElement("div"); // <div class="board-text"></div>
      const boardBtnBox = document.createElement("div"); // <div class="board-btn-box">
      const boardDelete = document.createElement("button"); //  <button class="board-delete">board-delete</button>
      const boardUpdate = document.createElement("button"); //<button class="board-update">board-update</button>
      const formCommentAdd = document.createElement("form"); // <form id="comment-add">
      const formCommentText = document.createElement("input"); //<input id="comment-text" type="text" placeholder="Text" />
      const formCommentAddBtn = document.createElement("button"); // <button id="comment-add-btn">comment-add</button>
      const commentList = document.createElement("div"); // <div class="comment-list">
      const commentText = document.createElement("div"); // <div class="comment-text"></div>
      const commentBtnBox = document.createElement("div"); //<div class="comment-btn-box">
      const commentDelete = document.createElement("button"); // <button class="comment-delete">comment-delete</button>
      const commentUpdate = document.createElement("button"); //<button class="comment-update">comment-update</button>

      boardTitle.innerText = item.title;
      boardText.innerText = item.text;

      boardDelete.innerText = "Delete";
      boardDelete.onclick = async function () {
        try {
          await axios.delete("/api/board/delete?id=" + item.id);
          getlist();
        } catch (error) {
          console.log(error);
        }
      };
      boardUpdate.innerText = "Update";
      boardUpdate.onclick = async function () {
        try {
          await axios.put("/api/board/update", {
            id: item.id,
            text: item.text + "update/",
          });
          getlist();
        } catch (error) {
          console.log(error);
        }
      };

      boardItem.append(boardTitle);
      boardItem.append(boardText);
      boardItem.append(boardBtnBox);
      boardBtnBox.append(boardDelete);
      boardBtnBox.append(boardUpdate);
      boardItem.append(formCommentAdd);
      formCommentAdd.append(formCommentText);
      formCommentAdd.append(formCommentAddBtn);
      boardItem.append(commentList);
      commentList.append(commentText);
      commentList.append(commentBtnBox);
      commentBtnBox.append(commentDelete);
      commentBtnBox.append(commentUpdate);
      boardList.append(boardItem);
    });
  } catch (error) {
    console.error(error.response.data.message);
  }
}
getlist();

document.forms["sign-in"].onsubmit = async function (e) {
  e.preventDefault();
  if (!e.target["user-id"].value || !e.target["user-pw"].value) return;

  try {
    const result = await axios.post("/api/user/login", {
      id: e.target["user-id"].value,
      pw: e.target["user-pw"].value,
    });
    console.log(result.data);
    getlist();
  } catch (error) {
    console.error(error.response.data.message);
  }
};

document.getElementById("sign-out-btn").onclick = async function (e) {
  try {
    await axios.get("/api/user/logout");
    getlist();
  } catch (error) {
    console.error(error.response.data.message);
  }
};

document.forms["board-add"].onsubmit = async function (e) {
  e.preventDefault();
  if (!e.target["board-title"].value || !e.target["board-text"].value) return;

  try {
    const result = await axios.post("/api/board/add", {
      title: e.target["board-title"].value,
      text: e.target["board-text"].value,
    });
    getlist();
    console.log(result.data);
  } catch (error) {
    console.error(error.response.data.message);
  }
};
