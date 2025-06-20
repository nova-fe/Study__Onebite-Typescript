/**
 * 타입 추론
 */

// 변수: 초기화값으로 추론
let a = 10;
let b = "a";
let c = {
  id: 1,
  name: "희",
  profile: {
    nickname: "Nova",
  },
  urls: ["heetask@gmail.com"],
};

let { id, name, profile } = c;
let [one, two, three] = [1, "a", true];

// 함수: return문 다음에 오는 반항값을 기준으로 추론
function func() {
  return "hello";
}

// 초기값이 없는 경우 -> 암묵적 any 타입(지정하는 것과는 다름)
let d;
// any 타입의 진화
d = 10;
d.toFixed();

d = "hello";
d.toUpperCase();
// d.toFixed();  // Err

const num = 10; // type const num: 10

let arr1 = [1, "string"]; //  type (string|number) []
