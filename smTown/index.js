// document.getElementById("sidebtn1").addEventListener("click", function () {
//   document.getElementById("mvBox").style.transform = "translateY(0vh)";
// });

// document.getElementById("sidebtn2").addEventListener("click", function () {
//   document.getElementById("mvBox").style.transform = "translateY(-100vh)";
// });

// document.getElementById("sidebtn3").addEventListener("click", function () {
//   document.getElementById("mvBox").style.transform = "translateY(-200vh)";
// });

// document.getElementById("sidebtn4").addEventListener("click", function () {
//   document.getElementById("mvBox").style.transform = "translateY(-300vh)";
// });

// document.getElementById("sidebtn5").addEventListener("click", function () {
//   document.getElementById("mvBox").style.transform = "translateY(-400vh)";
// });

// document.getElementById("sidebtn6").addEventListener("click", function () {
//   document.getElementById("mvBox").style.transform = "translateY(-500vh)";
// });

// document.getElementById("sidebtn7").addEventListener("click", function () {
//   document.getElementById("mvBox").style.transform = "translateY(-600vh)";
// });

let curr = 0;
let checkScroll = 0;
function buttonClick(num) {
  document.getElementById("mvBox").style.transform =
    "translateY(" + (num - 1) * -100 + "vh)";
  curr = num - 1;
  if (curr == num - 1) {
    document.getElementById("sidebtn" + num).style.backgroundColor = "white";
    for (let i = 1; i < 8; i++) {
      if (i !== num)
        document.getElementById("sidebtn" + i).style.backgroundColor = "gray";
    }
  }
}
const mvBox = document.getElementById("mvBox");
window.onmousewheel = function (e) {
  function mainWheel() {
    console.log("초기값 :" + checkScroll);
    if (checkScroll == 0) {
      if (e.deltaY > 0) {
        console.log("밑");
        if (curr !== 6) {
          curr += 1;
          mvBox.style.transform = "translateY(" + `${curr * -100}` + "vh)";
          document.getElementById(
            "sidebtn" + (curr + 1)
          ).style.backgroundColor = "white";
          for (let i = 1; i < 8; i++) {
            if (i !== curr + 1)
              document.getElementById("sidebtn" + i).style.backgroundColor =
                "gray";
          }
          console.log(curr);
        }
      } else if (e.deltaY < 0) {
        console.log("위");
        if (curr !== 0) {
          curr -= 1;
          mvBox.style.transform = "translateY(" + `${curr * -100}` + "vh)";
          document.getElementById(
            "sidebtn" + (curr + 1)
          ).style.backgroundColor = "white";
          for (let i = 1; i < 8; i++) {
            if (i !== curr + 1)
              document.getElementById("sidebtn" + i).style.backgroundColor =
                "gray";
          }
          console.log(curr);
        }
      }
      checkScroll++;
      console.log("함수 한바퀴 돈 후 :" + checkScroll);
      setTimeout(() => {
        checkScroll = 0;
        console.log("초기화 후 :" + checkScroll);
      }, 1000);
    }
  }
  mainWheel();
};

// 메인페이지 우측의 버튼 눌렀을 때 그 해당 영상쪽으로 이동 33번째 줄까지
// const mvBox = document.getElementById("mvBox");
// const regex = /[^0-9]/g;
// window.onmousewheel = function (e) {
//   let result = mvBox.style.transform.replace(regex, "");
//   console.log(mvBox.style.transform);
//   let num = parseInt(result);
//   console.log(e, num);
//   if (e.deltaY > 0) {
//     mvBox.style.transform = "translateY(" + `${num - 100}` + "vh)";
//   } else {
//     mvBox.style.transform = "translateY(" + `${num + 100}` + "vh)";
//   }
// };
// window.addEventListener("wheel", (e) => {
//   if (e.deltaY > 1) {
//     document.getElementById("mvBox").style.transform = "translateY(-100vh)";
//   } else if (e.deltaY < 1) {
//     document.getElementById("mvBox").style.transform = "translateY(0vh)";
//   }
// });

// 한 / 영 변환
function changeLangSelect() {
  let langSelect = document.getElementById("lang-select");
  let key = langSelect.value;
  console.log(key);
  langSelect.addEventListener("click", function () {
    if (key == "ko") {
      for (let i = 0; i < document.getElementsByClassName("en").length; i++) {
        let langEn = document.getElementsByClassName("en").item(i);
        langEn.style.display = "none";
        let langKo = document.getElementsByClassName("ko").item(i);
        langKo.style.display = "block";
      }
    } else if (key == "en") {
      for (let i = 0; i < document.getElementsByClassName("ko").length; i++) {
        let langKo = document.getElementsByClassName("ko").item(i);
        langKo.style.display = "none";
        let langEn = document.getElementsByClassName("en").item(i);
        langEn.style.display = "block";
      }
    }
  });
}

// 메뉴에서 x버튼 눌렀을 때
document.getElementById("backbtn").addEventListener("click", function () {
  document;
  document
    .getElementsByClassName("sideMenu")
    .item(0)
    .classList.add("backbtnani");
  setTimeout(menudel, 1000);
  setTimeout(menuopen, 1000);
});

function menudel() {
  document
    .getElementsByClassName("sideMenu")
    .item(0)
    .classList.remove("backbtnani");
}

// 메뉴버튼 눌렀을때
document.getElementById("menuButton").addEventListener("click", function () {
  console.log("버튼눌렀따");
  document
    .getElementsByClassName("sideMenu")
    .item(0)
    .classList.add("sideMenuani");
  // setTimeout(menuopen, 2000);
});

function menuopen() {
  document
    .getElementsByClassName("sideMenu")
    .item(0)
    .classList.remove("sideMenuani");
}
