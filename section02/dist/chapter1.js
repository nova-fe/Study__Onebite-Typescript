// number
// : type => type 주석, type annotation
let num1 = 123;
let num2 = -123;
let num3 = 0.123;
let num4 = -0.123;
let num5 = Infinity;
let num6 = -Infinity;
let num7 = NaN;
// string
let str1 = "hello";
let str2 = `hello`;
let str3 = `hello ${num1}`;
// boolean
let bool1 = true;
let bool2 = false;
// null
let null1 = null;
// undefined
let undefined1 = undefined;
// 리터럴 타입
// 리터럴 -> 값
let numA = 10;
export {};
// numA = 12; // 오류남
// let numA: number = null;
// 그냥 하면 오류남 -> 하고싶다면? tsconfig.json 에서 "strictNullChecks" 을 false로 변경
