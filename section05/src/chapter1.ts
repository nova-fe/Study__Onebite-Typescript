/**
 * 인터페이스의 확장 (extends)
 * interface도 type도 확장(상속)이 가능하다.
 */
interface Animal {
  name: string;
  color: string;
}

// Dog 인터페이스는 Animal 인터페이스를 확장하는 타입
interface Dog extends Animal {
  // name: string;
  // color: string;
  isBark: boolean;
}

const dog: Dog = {
  name: "",
  color: "",
  isBark: true,
};

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

// 다중확장
interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: "DogCat",
  color: "brown",
  isBark: true,
  isScratch: false,
};
