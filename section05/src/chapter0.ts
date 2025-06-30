/**
 * 인터페이스
 */

interface Person {
  readonly name: string;
  age?: number;
  // 타입 정의 방식: 호출 시그니처
  sayHi(): void;
  sayHi(a: number, b: number): void;
  // 유니온이나 인터섹션 타입은 만들 수 없음
}

const person: Person = {
  name: "Nova",
  age: 33,
  sayHi: function () {
    console.log("Hi");
  },
};
