// any
// 특정 변수의 타입을 확실히 모를 때 사용
let anyVar: any = 10;
anyVar = "hello";

anyVar = true;
anyVar = {};
anyVar = () => {};

anyVar.toUpperCase();
anyVar.toFixed();

// unknown
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// any와 unknown의 차이
// -> 둘 다 모든 타입의 값을 다 할당 받을 수 있음(공통)
// -> 하지만 반대로는 any 타입은 가능, unknownvar 타입은 불가능

let num: number = 10;
// num = anyVar; // 가능

let num2: number = 10;
// num2 = unknownVar; // 불가능
