// void
// void: 공허, 아무것도 없다
// 아무것도 없음을 의미하는 타입

// : string  -> 반환값이 string
function func1(): string {
  return "hello";
}

// : void -> 반환값이 없다
function func2(): void {
  console.log("hello");
}

// never
// never: 존재하지 않는
// 불가능한 타입 (반환값이 있는 게 모순이다)
function func3(): never {
  while (true) {}
}

function func4(): never {
  throw new Error();
}
