// number
// : type => type 주석, type annotation
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;

// string
let str1: string = "hello";
let str2: string = `hello`;
let str3: string = `hello ${num1}`;

// boolean
let bool1: boolean = true;
let bool2: boolean = false;

// null
let null1: null = null;

// undefined
let undefined1: undefined = undefined;

// 리터럴 타입
// 리터럴 -> 값
let numA: 10 = 10;
// numA = 12; // 오류남

// let numA: number = null;
// 그냥 하면 오류남 -> 하고싶다면? tsconfig.json 에서 "strictNullChecks" 을 false로 변경
