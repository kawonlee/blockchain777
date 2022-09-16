const headList = [
  { type: "number", name: "번호" }, // 아이템
  { type: "name", name: "이름" }, // 아이템
  { type: "age", name: "나이" }, // 아이템
  { type: "area", name: "거주지" }, // 아이템
  { type: "mbti", name: "MBTI" }, // 아이템
  { type: "bloodType", name: "혈액형" }, // 아이템
];
const studentsList = [];

function createStudent(name, age, area, mbti, bloodType) {
  studentsList.push({
    name,
    age,
    area,
    mbti,
    bloodType,
  });
}

createStudent("김성진", 27, "성남", "INTP", "B형");
createStudent("염예나", 22, "하남", "ENFP", "B형");
createStudent("정재훈", 30, "강남", "ENTP", "B형");
createStudent("이가원", 27, "광진", "ISFP", "O형");
createStudent("김재일", 29, "용인", "ENFP", "AB형");

console.log(studentsList);

const tableHeaderElem = document.getElementById("table-header");
headList.forEach(({ name }) => {
  // headList의 아이템(객체)의 name을 구조분해할당으로 가져온다.
  tableHeaderElem.innerHTML += "<th>" + name + "</th>";
  // 배열안의 아이템은 ,를 기준으로 끊는다.
});

const studentsListElem = document.getElementById("data-list");

studentsList.forEach((item, index) => {
  let tempStr = "<tr>";
  headList.forEach(({ type }) => {
    if (type === "number") tempStr += `<th>${index + 1}</th>`;
    else tempStr += `<td>${item[type]}</td>`;
  });
  tempStr += "</tr>";
  studentsListElem.innerHTML += tempStr;
});
