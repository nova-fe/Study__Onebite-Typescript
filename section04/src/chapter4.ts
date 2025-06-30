/**
 * 사용자 정의 타입가드
 */
type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;

// 사용자 정의 타입가드 함수
// 이 함수는 1) animal이 Dog 타입인지 확인하고, 2) true를 반환하면 타입이 Dog로 좁혀집니다.
function isDog(animal: Animal): animal is Dog {
  // animal이 Dog 타입인지 확인하는 함수
  // animal이 Dog 타입이면 true를 반환하고, 아니면 false를 반환
  return (animal as Dog).isBark !== undefined;
}

// 사용자 정의 타입가드 함수
// 이 함수는 1) animal이 Cat 타입인지 확인하고, 2) true를 반환하면 타입이 Cat로 좁혀집니다.
function isCat(animal: Animal): animal is Cat {
  // animal이 Cat 타입인지 확인하는 함수
  // animal이 Cat 타입이면 true를 반환하고, 아니면 false를 반환
  // (animal의 isScratch 속성이 undefined가 아니면 isScratch 속성이 있는 것이므로 true를 반환)
  return (animal as Cat).isScratch !== undefined;
}

function warning(animal: Animal) {
  if (isDog(animal)) {
    // 강아지의 경우
    animal;
  } else if ("isScratch" in animal) {
    // 고양이의 경우
    animal;
  }
}
