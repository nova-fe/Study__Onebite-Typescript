/**
 * 타입 변수 응용하기
 * 첫번째 사례
 */
// 변수의 타입이 다를 경우 U 추가
function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap("1", 2);

/**
 * 두번째 사례
 */
// 튜플인데 첫번째 요소의 타입은 T이고 나머지 요소는 배열로 여러개 들어올 것 같은데 타입은 모르겠다.
function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let num = returnFirstValue([0, 1, 2]); // 0
let str = returnFirstValue([1, "b", "c"]); // "a"

/**
 * 세번째 사례
 */
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let var1 = getLength([1, 2, 3]);
let var2 = getLength("12345");
let var3 = getLength({ length: 10 });
// let ver4 = getLength(10);
