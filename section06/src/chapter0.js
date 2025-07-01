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
    console.log(`안녕하세요, ${this.name} 입니다.`);
  }
}

class StudentDeveloper extends Student {
  // 필드
  favoriteSkill;

  // 생성자
  constructor(name, grage, age, favoriteSkill) {
    super(name, grage, age); // 부모 클래스의 생성자를 호출
    this.favoriteSkill = favoriteSkill;
  }

  // 메서드
  programming() {
    console.log(`${this.programming}으로 프로그래밍을 합니다.`);
  }
}

const studentDeveloper = new StudentDeveloper("Nova2", "A+", 33, "Typscript");

// 클래스를 이용해서 만든 객체 -> 인스턴스
// 스튜던트 인스턴스
let studentB = new Student("Nova", "B", 20);

console.log(studentDeveloper);
studentDeveloper.study();
studentDeveloper.introduce();
