let num = 0;

function change() {
  document.getElementById("change").innerHTML = `<img src = "${
    ++num % 3
  }.png" alt ="change" />`;
  // document, get ElementById, innderHTML 등은 이후에 자세히 배울 것
  // inerHTML은 여는 태그와 닫는 태그 사이의 텍스트다.
}
