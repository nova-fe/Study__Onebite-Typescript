/**
 * 함수 타입 정의
 */

// 함수란?
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기
// 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 이야기
function func(a: number, b: number): number {
  return a + b;
}

const add = (a: number, b: number): number => a + b;

/**
 * 함수의 매개변수
 */
function introduce(name = "nova", age: number, tall?: number) {
  console.log(`name: ${name}`);
  if (typeof tall === "number") {
    console.log(`tall : ${tall + 10}`);
  }
}
introduce("Nova", 33, 162);

function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));
  return sum;
}

getSum(1, 2, 3);
