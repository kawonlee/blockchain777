var num = 1234;
var str = "1234";
var bool = true;
var und = undefined;
var nul = null;
// 같은 자료형인 경우는 값을 재정의할 수 있다. und = 1234 << 에러난다. 타입을 이미 undefined로 지정했기 때문에
// TypeScript는 자료형(Type)을 확인하기 때문에 같은 자료형만 변수에 정의할 수 있다.
num = 4321;
// console.log(num.length); number에는 length가 없기 때문에 에러난다.
console.log(str.length); // string은 length가 있다.
var numUnd = undefined; // type이 number거나 undefined다.
numUnd = 1234;
// | 를 사용해서 type을 여러 개 사용할 수 있다.
var any = undefined;
any = "1234";
any = 1234;
// any는 모든 자료형을 포함한다.
// 그래서 안쓰는 것이 좋다.
var unk = undefined;
unk = "1234";
unk = 1234;
// any랑 비슷하다. any랑 차이점
console.log(any.length); // 모든 자료형을 포함하고 있다고 판단하여 각종 메서드, 프로퍼티를 모두 사용할 수 있다. 그래서 any.length가 가능하다.
// console.log(unk.length); // 자료형을 모른다고 판단하여 각종 메서드, 프로퍼티를 사용할 수 없다. 그래서 unk.length가 안된다.
if (typeof unk === "string") {
    // Type 확인 후에 해당 타입에 대한 메서드, 프로퍼티를 사용할 수 있다.
    console.log(unk.length);
}
var obj = { a: 1 };
// ?는 undefined를 포함한다. => b = string | undefined
obj.b = "1234";
var arr = [1, 2, 3];
// arr.push("asdf");
var arr1 = [1, "1"]; // 해당 방식은 [number, string] << 이것과 뒤에 정의한 값이 순서대로 type이 일치하고 갯수가 일치해야한다.
