/**
 * 제네릭 클래스
 */

class List<T> {
  constructor(private list: T[]) {}

  // 메서드
  push(data: T) {
    this.list.push(data);
  }
  pop() {
    return this.list.pop();
  }
  print() {
    console.log(this.list);
  }
}

// 인스턴스 생성
// 제네릭 클래스는 제네릭 인터페이스나 제네릭 타입 변수와는 다르게 클래스의 생성자를 호출 할 때 생성자의 인수로 전달하는 값을 기준으로 타입 변수에 타입을 추론
// 따라서, 인스턴스를 생성할 때 타입을 명시하지 않아도 됨 (new List<number> 이런식으로 안 해도 됨)
const numberList = new List([1, 2, 3]);
numberList.pop();
numberList.push(4);
numberList.print();

const stringList = new List(["a", "b", "c"]);
stringList.pop();
stringList.push("d");
stringList.print();
