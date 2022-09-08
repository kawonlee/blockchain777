const today = new Date();

console.log(today);

console.log(today.toLocaleString()); //현재 위치 기준으로 (지금 위치는 한국이니까 한국 기준)
console.log(today.toUTCString());

console.log(today.getDate()); // 일 ex) 9월 8일이면 8찍힘
console.log(today.getDay()); // 요일을 0~6 -> 일~토로 출력한다.

console.log(today.getMonth()); // 얘도 0부터 시작함

// 날짜 관련이다 -> date를 기억해라

console.log(Date.now());

console.log(new Date(Date.now()));
