let num: number = 1234;
let str: string = "1234";
let bool: boolean = true;
let und: undefined = undefined;
let nul: null = null;

// 같은 자료형인 경우는 값을 재정의할 수 있다. und = 1234 << 에러난다. 타입을 이미 undefined로 지정했기 때문에
// TypeScript는 자료형(Type)을 확인하기 때문에 같은 자료형만 변수에 정의할 수 있다.
num = 4321;
// console.log(num.length); number에는 length가 없기 때문에 에러난다.
console.log(str.length); // string은 length가 있다.

let numUnd: number | undefined = undefined; // type이 number거나 undefined다.
numUnd = 1234;
// | 를 사용해서 type을 여러 개 사용할 수 있다.

let any: any = undefined;
any = "1234";
any = 1234;
// any는 모든 자료형을 포함한다.
// 그래서 안쓰는 것이 좋다.

let unk: unknown = undefined;
unk = "1234";
unk = 1234;
// any랑 비슷하다. any랑 차이점

console.log(any.length); // 모든 자료형을 포함하고 있다고 판단하여 각종 메서드, 프로퍼티를 모두 사용할 수 있다. 그래서 any.length가 가능하다.
// console.log(unk.length); // 자료형을 모른다고 판단하여 각종 메서드, 프로퍼티를 사용할 수 없다. 그래서 unk.length가 안된다.

if (typeof unk === "string") {
  // Type 확인 후에 해당 타입에 대한 메서드, 프로퍼티를 사용할 수 있다.
  console.log(unk.length);
}

let obj: { a: number; b?: string } = { a: 1 };
// ?는 undefined를 포함한다. => b = string | undefined
obj.b = "1234";

let arr: Array<number> = [1, 2, 3]; // 여러개 넣을 시 <number | string> 이런 식으로 사용 가능하다.
// arr.push("asdf");

let arr1: [number, string] = [1, "1"]; // 해당 방식은 [number, string] << 이것과 뒤에 정의한 값이 순서대로 type이 일치하고 갯수가 일치해야한다.
let arr2: string[] = ["1", "a", "b"];

let arr3: Array<any> = [undefined, null, 1, "asdf"];

function funcA(): void {
  // return이 없기 때문에 void type을 사용한다.
  console.log("funcA");
}

const funcB = function (): number {
  return 11;
};
// return이 있는 함수의 경우 자료형 선언 안하는 경우 any로 처리된다. // return이 없는 경우 void가 default

const funcC = (): string => {
  return "string";
};

// 함수의 return에 대한 type은 () 뒤에 붙인다.

function sumA(a: number, b: number): number {
  return a + b;
}
console.log(sumA(1, 2));

const sumB = function (numbers: { a: number; b: number }): number {
  return numbers.a + numbers.b;
};

const sumC = ({ a, b }: { a: number; b: number }): number => {
  return a + b;
};

interface INumbers {
  a: number;
  b: number;
}

function sumD({ a, b }: INumbers): number {
  return a + b;
}
