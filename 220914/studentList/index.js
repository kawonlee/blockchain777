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
// name : name, 과 동일하다.
// 객체 정의 시 객체 내에 다른 변수만을 넣으면 변수명과 변수의 값을 키와 값에 입력한다.
// name 매개변수에 정의된 값을 객체의 name 키에 대한 값으로 정의한다.
// 간단 예제
let temp = 100;
const tempObj = {
  temp,
  // temp : temp, << 24번 줄과 같다.
};
console.log(tempObj);

createStudent("김성진", 27, "성남", "INTP", "B형");
createStudent("염예나", 22, "하남", "ENFP", "B형");
createStudent("정재훈", 30, "강남", "ENTP", "B형");
createStudent("이가원", 27, "광진", "ISFP", "O형");
createStudent("김재일", 29, "용인", "ENFP", "AB형");

console.log(studentsList);

const tableHeaderElem = document.getElementById("table-header");
headList.forEach((item) => {
  tableHeaderElem.innerHTML += "<th>" + item.name + "</th>";
  // 배열안의 아이템은 ,를 기준으로 끊는다.
});

const studentsListElem = document.getElementById("data-list");
studentsList.forEach((item, index) => {
  let tempStr = "<tr>";
  //한명 한명마다의 정보를 적어야하므로(줄이 늘어나니까) 적어줬다.
  headList.forEach((headItem) => {
    if (headItem.type === "number") tempStr += `<th>${index + 1}</th>`;
    else tempStr += `<td>${item[headItem.type]}</td>`;
  });
  tempStr += "</tr>";
  studentsListElem.innerHTML += tempStr;
});
