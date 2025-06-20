/**
 * Unknown 타입
 */
function unknownExam() {
  let a: unknown = 1;
  let b: unknown = "a";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownVar: unknown;
  // let num: number = unknownVar; // Err (다운캐스팅)
}

/**
 * Never 타입 (공집합)
 */
function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  let num: number = neverFunc();
  let str: string = neverFunc();
  // let never1: never = 10; // Err (다운캐스팅)
  // * 어떠한 값도 저장되어서는 안 되는 변수의 타입으로 활용
}

/**
 * Void 타입
 */
function voidExam() {
  function voidFunc(): void {
    console.log("hi!");
  }

  let voidVar: void = undefined;
}

/**
 * any 타입
 * 모든 타입의 슈퍼타입으로도, 모든 타입의 서브 타입으로도 위치하기도 함
 * *** 타입계층도를 다 무시하는 치트키 타입(예외: never) ***
 */
function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVar = unknownVar;
  undefinedVar = anyVar;
  // neverVar = nyVar; // Error
}
