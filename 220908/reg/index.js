// 정규표현식

const reg1 = /aa/;
const reg2 = new RegExp("aa");
// 규칙을 가진 문자열을 찾기 위해 사용한다.

const tempReg = /[3, 6, 9]/;
// [] 내부 중에 하나 -> 예시에선 3또는 6또는 9라는 뜻

const tempReg1 = /[0-9]/;
// 0부터9다(범위다)

const koreanReg = /가-힣/; // 저 범위 사이의 한글을 찾는다

let emailReg =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
// x*은 횟수와 상관 없이 들어가는 문자 <= x를 몇번이고 넣을 것을 찾는다.
// ^x => x로 시작한다.
// x? => x가 없거나 딱 한번 들어간다.
// \w -> 문자나 숫자다
// \s => 공백(띄어쓰기, 탭, 줄바꿈 등등)
// {} => 갯수 =>  몇개인가? 예시에서 {2,3} 은 2개이상 3개이하 ex) kr, com
// 정규표현식 뒤에 붙는 문자들(플래그) => 예시에서는 i
// i는 대소문자를 구분하지 않겠다, g는 중복가능
// x$ => x로 끝난다.

const inputEmail = prompt("이메일을 입력하세요.");
inputEmail.match(emailReg);
console.log(inputEmail);
console.log("asdasdasdasdasdasdasdasdasd".replace("as", ""));
// 처음 검색된 것만 바꾸느냐
console.log("asdasdasdasdasdasdasdasdasd".replace(/as/g, ""));
// 정규표현식을 이용하여 g(중복가능) 전부 다 치환 가능
// 특수문자를 문자 자체로 인식하고 싶을땐 앞에 \ 붙이면된다 ex) \[\] [와 ]라는 문자로 인식한다.
// -를 잡고싶을땐 여러개를 같이 잡을 경우 맨 뒤로 보내는게 좋다. 왜냐면 저게 중간에 있으면
// 범위로 인식해버리기때문이다.
