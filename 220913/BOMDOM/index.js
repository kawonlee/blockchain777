console.log(window.location);
// location은 현재 주소에 대한 내용을 담고 있다.
// window가 뭐길래 주소 내용을 담고 있는가?
// window BOM(Browser Object Model)이다.
// 브라우저의 정보들을 갖고 있다.
console.log(location);
// window는 root 객체이다.
// root는 '최상위' 폴더/객체/클래스 등을 뜻한다.
console.log(window.navigator);
// 생각보다 자주 쓰일지도 모른다.
console.log(window.navigator.userAgent);
// 브라우저와 OS 관련된 정보가 정의되어있다. 즉, 현재 브라우저나 OS 등을 확인할 수 있다.
// userAgent를 정규표현식을 사용해 원하는 정보만 가져올 수 있다. (다만, 라이브러리를 사용해서 쉽게 처리가 가능하다.)
// PS. 애플 계열은 IOS, iPhone, iPad, Mac 으로만 나타난다.

console.log(document.body);
// 적혀있는 그대로 body의 정보를 받아온다.
// 해당 코드는 웹페이지에서 null 값으로 나오는데, 그 이유는 html파일에서 body를 읽기전에 script를 읽었기때문에(코드는 위에서부터 읽어내려옴) body에 대한 값이 없다고 판단하여 null값을 출력해준다.
// document는 HTML 파일 구조에 대해서 정의한다.
// document는 DOM(Document Object Model)이다.
// HTML 구조의 root이다.
console.log(document);
console.dir(document);
// console.log로 나오지 않는 것은 dir로 확인하자.
// console.log 확인 시 html구조가 나오면 dir로 확인하는 경우가 있다.
// console에 대해서는 Node.js에서 다시 할 것
// BOM / DOM feat.MVC(Model View Controller) - 한 번 찾아봐라

// Node, Tag, Element란 무엇인가?
// Tag 는 HTML에서 사용하는 명령어의 이름을 뜻한다. ex) html, body, div....
// Tag는 여는 태그와 닫는 태그로 사용한다. <div></div>
// Element는 뭐냐? >> 여는 태그와 닫는 태그를 모두 포함하는 내용이다. << 라고 했었다.
// 더 정확하게는 DOM(document)내에서 정의되는 태그의 내용
// ex) document.getElementById('name') >> name을 id로 갖는 tag를 찾는다 -> 더 정확히는 Element를 찾는것
// Tag && Element의 차이 >> Tag는 이름 그 자체이다. Element는 객체다. 즉, Javascript에서 HTML 구조를 수정하거나 내용을 추가하거나 등등에서 사용하는 Tag에 대한 객체다.
// Element는 태그부터 태그안에 있는 내용까지 전부 포함한다.
// HTML파일에서 Tag(여는태그, 자식들 포함)에 사용된 내용들을 모두 포함하는 것이 Element다.
// 객체는 키와 값으로 이루어진 {}로 묶인 데이터들.
// const 블록7기 = {
//   김성진: { name: 김성진, age: 27, gender: 남 },
//   염예나: { name: 염예나, age: 22, gender: 여 },
//   정재훈: "이름 : 정재훈, 나이 : 30, 성별 : 남",
// };
// 블록7기.김성진;
// 객체 안에 있는 함수 -> 메서드라고 부른다.
// 객체의 키는 프로퍼티라고 부른다.
// 키 = 객체 내에 데이터에 대한 이름
console.log(document.getElementById("test").outerHTML);
console.log(document.getElementById("test").innerHTML);
//outerHTML은 여는태그와 닫는태그를 모두 포함하여 데이터를 문자열로 받는다.
//innerHTML은 여는태그와 닫는 태그 사이의 데이터를 문자열로 받는다.
//getElementById -> 그 id에 대한 element를 가져온다.
// getElementById 뒤에 .으로 불러오는 내용들은 내가 가져오고 싶은 내용을 적으면 된다.
console.log(document.getElementById("test").style);
// 태그안에 직접적으로 기재된 내용만 출력해준다.
document.getElementById("test").style.border = "10px solid black";
console.dir(document.getElementById("test"));
// id가 test인 element를 찾아와서 style 키를 찾아가서 style안에 있는 border 키의 값을 정의했다.

// 상속 : 상속하는 객체의 정보(property, method 모두 포함)를 갖는 다른 객체를 만드는 행위
// A = {a,b,c} -> B가 A를 상속한다. -> B = {a,b,c}

const person = { name: "", age: 0, gender: 0 };
const kim = { name: "김성진", age: 27, gender: 1 };
const yeom = { name: "염예나", age: 22, gender: 4 };
const jung = { name: "정재훈", age: 30, gender: 1 };
// person을 상속해서 kim, yeom, jung을 만들 수 있다.(생성할 수 있다.)

// Javascript 프로토타입 형태로 되어있다.
// Javascript 기본적으로 Node를 기준으로 하고 있다.
// Node를 이용하여 Element, document 등을 생성한다.
// 프로토타입은 상식적으로 생각했을 때 테스트를 위한 임시 기계
// 프로토타입을 업그레이드, 즉 기능을 추가하거나 필요치 않은 기능을 삭제하거나 등등 더 좋게 만들어서 다음 것을 만든다.

// 교수님 랜덤 질문
// 함수 -> 기능하는 것
// 링크 -> 파일을 가져오는 명령어
// src -> source의 약자
// 매개변수 -> 함수에 전달하는 값
// tag -> html에서 사용하는 명령어의 이름
// document -> html 구조를 데이터로 갖는 객체
// alt -> 이미지를 정상적으로 불러오지 못했을 때 이미지를 대체해줄 텍스트
// position -> 영역을 어디에 위치시킬지에 대한 방식 ) fixed, relative, absolute
