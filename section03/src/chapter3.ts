/**
 * 기본 타입간의 호환성
 */
let num1: number = 10;
let num2: 10 = 10;
num1 = num2;

/**
 * 객체 타입 간의 호환성
 * -> 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?
 */
// 슈퍼타입
type Animal = {
  name: string;
  color: string;
};

// 서브타입
type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "강아지",
  color: "brown",
  breed: "진도",
};

console.log(animal);

animal = dog;
// dog = animal; // Err

console.log(animal);

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  skill: "react",
};

book = programmingBook;
// programmingBook = book; // Err

/**
 * 초과 프로퍼티 검사
 * -> 변수를 초기화 할 때 초과 프로퍼티를 작성하면 안 되도록 막는 검사
 */
let book2: Book = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  // skill: "react", // Err
};

let book3: Book = programmingBook; // 객체 리터럴이 아니기 때문에 검사 안함

function func(book: Book) {}
func({
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  // skill: "react", // Err
});

func(programmingBook);
