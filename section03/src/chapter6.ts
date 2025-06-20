/**
 * 타입 단언
 * -> 모든 타입 단언은 위험하므로 확실할 때에만 사용하는 것을 추천!!!
 */
type Person = {
  name: string;
  age: number;
};

let person = {} as Person; // as Person -> 이 타입으로 간주하라고 알려주는 것
person.name = "희";
person.age = 33;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
} as Dog;

/**
 * [타입 단언의 규칙]
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼 타입이거나
 * A가 B의 서브 타입이어야 함
 */
let num1 = 10 as never;
let num2 = 10 as unknown;
// let num3 = 10 as string;  // Err

/**
 * const 단언
 */
let num4 = 10 as const;

// 객체에서 유용하게 쓰임
let cat = {
  name: "야옹이",
  color: "yellow",
} as const; // 모든 프로퍼티를 readonly 로 만들어줌

/**
 * Nol Null 단언 (!.)
 * -> 무조건 null 이나 undefined가 아닐 것이라고 믿게 만듦
 */
type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
  author: "Nova",
};

const len: number = post.author!.length;
