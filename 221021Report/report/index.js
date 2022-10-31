const actionText = document.getElementById("action");
const loginBtn = document.getElementById("login-btn");
const logoutBtn = document.getElementById("logout-btn");
const loginIng = document.getElementById("login-ing");
const userId = document.getElementById("member-id");
const userPw = document.getElementById("member-pw");
const boardMain = document.getElementById("board-main");
const boardText = document.getElementById("text");

let currUser = { id: "", password: "" }; // 현재 로그인 된 정보를 저장하기 위한 obj

document.getElementById("member-join").onsubmit = async function (e) {
  e.preventDefault();
  try {
    if (currUser.id !== "")
      return (actionText.innerText =
        "현재 로그인중입니다. 회원가입을 하시려면 로그아웃 후에 진행하세요.");
    const data = await axios.post("/api/user/add", {
      id: userId.value,
      password: userPw.value,
    });
    console.log(data);
    actionText.innerText = "회원가입을 완료 했습니다.";
    userId.value = userPw.value = "";
  } catch (err) {
    console.error(err);
  }
};
// 회원가입 버튼을 눌렀을 때 회원가입 배열에 데이터가 저장된다. 12번째 줄까지

loginBtn.onclick = async function (e) {
  // 클라이언트가 입력한 값과 서버가 배열에 들고있는 정보가 일치하는지 비교해야한다.
  try {
    const data = await axios.post("/api/user/login", {
      id: userId.value,
      password: userPw.value,
    });
    console.log(data);
    if (!data.data) actionText.innerText = "잘못된 정보를 입력하셨습니다.";
    else {
      actionText.innerText = `${userId.value}님 어서오세요!`;
      currUser.id = userId.value;
      currUser.password = userPw.value;
      userId.value = userPw.value = "";
      document.querySelector("form > div").classList.toggle("member-box");
      // 로그인한 아이디가 나오고, 로그인버튼이 로그아웃으로 바껴야댐
      loginBtn.classList.toggle("login");
      logoutBtn.classList.toggle("login");
      loginIng.classList.toggle("login");
      loginIng.innerText = `${currUser.id}님이 로그인중입니다.`;
    }
    boardMain.classList.toggle("board");
  } catch (err) {
    console.error(err);
  }
};
// boardMain.onsubmit = function (e) {
//   preventDefault(e);
// };

logoutBtn.onclick = function (e) {
  deleteCookie(currUser.id);
  document.querySelector("form > div").classList.toggle("member-box");
  loginBtn.classList.toggle("login");
  logoutBtn.classList.toggle("login");
  loginIng.classList.toggle("login");
  actionText.innerText = `${currUser.id}님이 로그아웃 하셨습니다.`;
  currUser = { id: "", password: "" };
};

// const data로 서버의 응답을 기다렸다가 응답을 받게 되면(async await가 있을 때 사용가능)
// 전달 받은 내용들을 콘솔로그로 찍어봤을 경우
// 서버에서 res.send를 통해 보내준 내용을 확인할 수 있다.
// 해당 내용은 data라는 큰 객체 안에 data라는 키 안에 값으로(value) data와 status라는
// 객체가 들어온다.

function deleteCookie(name) {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}
