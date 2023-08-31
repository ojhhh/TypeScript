// javaScript
// let num = 20;
// const str = "javaScript;"
// const nan = NaN;
// const infinity = Infinity;
// const boolean = true;
// const nullValue = null;
// const undefinedValue = undefined;
// const obj = {};
// const arr = [];
// const fn = (a)=>{
//  console.log(a);
// }
// const sum = (a, b) => {
//   return a + b;
// };

// typeScript
let num: number = 20;
const str: string = "typeScript";
const nan: number = NaN;
const infinity: number = Infinity;
const boolean: boolean = true;
const nullValue: null = null;
const undefinedValue: undefined = undefined;
const obj: object = {};
// 배열은 안에 들어가는 타입을 지정해 줘야함
// <> : 제네릭 타입 설정. 배열의 요소를 number로 지정
const arr: Array<number | string> = ["S", 3];
// 매개변수의 타입을 정해 줘야함
// void는 생략되어 있음
// void : 반환값이 없는 함수. 함수 실행시 비어있다는 것을 의미
const fn = (a: any): void => {
  console.log(a);
};
// 반환 값이 있는 함수이기 때문에 반환되는 타입을 정의
const sum = (a: number, b: number): number => {
  return a + b;
};
// any : 모든 타입 할당 가능
const any: any = "";
// 실행 가능
console.log(any.length);
// unknown : 모든 타입을 할당 가능하며 타입의 안정성을 지킬 수 있음
const unknown: unknown = "";
// 실행 불가 (어떤 타입인지 정의 되지 않았기 때문에 오류)
// console.log(unknown.length);
if (typeof unknown === "string") console.log(unknown.length);
