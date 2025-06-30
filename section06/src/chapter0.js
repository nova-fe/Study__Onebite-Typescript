/**
 * 클래스
 */

let studentA = {
  name: "Nova",
  grage: "A+",
  age: 33,
  study() {
    console.log("공부를 합니다.");
  },
  introduce() {
    console.log("안녕하세요");
  },
};

class Student {
  // 필드
  name;
  grage;
  age;

  // 생성자
  constructor(name, grage, age) {
    this.name = name;
    this.grage = grage;
    this.age = age;
  }

  // 메서드
  study() {
    console.log("공부를 합니다.");
  }
  introduce() {
    console.log("안녕하세요");
  }
}

// 클래스를 이용해서 만든 객체 -> 인스턴스
// 스튜던트 인스턴스
let studentB = new Student("KNT", "B", 20);
console.log(studentB); // Student { name: 'KNT', grage: 'B', age: 20 }
studentB.study(); // 공부를 합니다.
