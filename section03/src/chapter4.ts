/**
 * 대수 타입
 * -> 여러개의 타입을 합성해서 새롭게 만들어낸 타입
 * -> 합집합 타입, 교집합 타입이 존재
 */

/**
 * 1. 합집합 - Union 타입
 */
let a: string | number | boolean;
a = 1;
a = "a";
a = true;

let arr: (string | number | boolean)[] = ["a", 1, true];

type Union1 = Dog | Person;

let union1: Union1 = {
  name: "",
  color: "",
};

let union2: Union1 = {
  name: "",
  language: "",
};

let union3: Union1 = {
  // 교집합
  name: "",
  language: "",
  color: "",
};

// let union4: Union1 = { // Err
//   name: ""
// }

/**
 * 2. 교집합 타입 - Intersection 타입
 */

// let variable: number & string;  // never 타입이라고 뜸
type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

// Dog와 Person의 교집합 부분이 타입이 됨(둘 다 해당이 되어야 함)
type Intersection = Dog & Person;

let intersection1: Intersection = {
  // 이 3개의 프로퍼티(교집합) 를 모두 가지고 있어야함
  name: "",
  color: "",
  language: "",
};
