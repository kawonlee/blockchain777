const str = "abcDeFgHIJkLmn";
console.log(str.indexOf("D"));
// 매개변수로 전달된 텍스트가 어디있나? <<시작위치를찾는다.
console.log(str.indexOf("cD"));
console.log(str.indexOf("cDY")); //전달된 텍스트가 내용에 없을 시 -1을 리턴(반환)한다.

console.log(str.length); //길이

console.log(str.slice(1, 3));
// 0 a 1 b 2 c 3 D 4 e 5 F 6 g 7 H 8 I 9 J 10 k 11 L 12 m 13 n 14
// array에서 했던 것과 동일하다.(위에서 숫자쓴건 칸막이에 이름 붙여놓은거지 원문아님!)
// 짜르기, 1에서 시작해서 3에서 끝난다. >> bc 출력

console.log(str.split(/D/));
// 매개변수로 전달된 정규표현식(어렵다?)을 기준으로 자른다.
// 정규표현식은 후에 하루 왠종일 해야합니다.
console.log(str.split("")); //하나하나 다 분해한다.

console.log(str.replace(/D/, "X"));
// 첫번째 매개변수로 정규표현식을 전달하고, 두번째 매개변수로 바꾸고싶은 텍스트를 전달한다.
// 대체하고자 하는 매개변수 란에 공백도 가능하다
// ex) console.log(str.replace(/D/, " "));
console.log(str.replace(/D/, " "));

console.log(str.toLowerCase()); // 전부 소문자로
console.log(str.toUpperCase()); // 전부 대문자로
