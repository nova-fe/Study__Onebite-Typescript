/**
 * 제네릭
 * 일반적인, 포괄적인
 * => 함수를 호출할 때 타입을 지정하는 것
 */
// 제네릭 함수(함수계의 종합병원)
function func<T>(value: T): T {
  return value;
}

let num = func(10);
let bool = func(true);
let str = func("string");

// 제네릭 함수를 호출하면서 명시적으로 타입 변수의 타입을 지정할 수도 있다.
let arr = func<[number, number, number]>([1, 2, 3]);
