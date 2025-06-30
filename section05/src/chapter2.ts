/**
 * 선언 합침
 * -> 동일한 이름의 인터페이스들은 결국 다 합쳐진다
 */

interface Person {
  name: string;
}

interface Person {
  age: number;
}

const person: Person = {
  name: "Nova",
  age: 33,
};

/**
 * 모듈 보강
 */
interface Lib {
  a: number;
  b: number;
}

interface Lib {
  c: string;
}

const lib: Lib = {
  a: 1,
  b: 1,
  c: "hello",
};
