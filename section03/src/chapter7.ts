/**
 * [타입 좁히기]
 * 조건문 등을 이용해 넓은타입에서 좁은타입으로
 * 타입을 상황에 따라 좁히는 방법
 */

type Person = {
  name: string;
  age: number;
};

// value => number : toFixed
// value => string : toUpperCase
// value => Date : getTime
// vaalue => Person : name은 age살 입니다.
function func(value: number | string | Date | null | Person) {
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
    // A instanceof B
    // A값이 B객체인지 물어보는 것
    // 정확하게는 A값이 B클래스의 instance인지 확인하는 연산자
    // Date: 자바스크립트의 내장 클래스
  } else if (value instanceof Date) {
    console.log(value.getTime());
    // A in B
    // 프로퍼티명 in B
    // A 라는 프로퍼티가 B라는 값에 있는지 물어보는 것
  } else if (value && "age" in value) {
    console.log(`${value.name}은 ${value.age}살 입니다.`);
  }
}
