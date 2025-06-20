// 배열
// 방법1)
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["hello", "im", "nova"];
// 방법2) 제네릭 문법
let boolArr: Array<boolean> = [true, false];

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (number | string)[] = [1, "hello"];

// 다차원 배열
let doubleArr: (number[] | string[])[] = [
  [1, 2, 3],
  [4, 5],
  ["a", "b"],
  ["a", "b"],
];

// 튜플
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
// tup1 = [1, 2, 3] // => Err
// tup1 = ["a", "b"] // => Err

let tup2: [number, string, boolean] = [1, "hello", true];
// tup2 = ["a", 3, false] // => Err

const users: [string, number][] = [
  ["영희", 1],
  ["철수", 2],
  ["민수", 4],
  // [4, "민아"], // => Err
];
