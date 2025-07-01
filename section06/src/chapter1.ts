/**
 * 타입스크립트의 클래스
 */
const employee = {
  name: "Nova",
  age: 33,
  position: "developer",
  work() {
    console.log("Woking...");
  },
};

class Employee {
  // 필드
  name: string;
  age: number;
  position: string;

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log("Woking...");
  }
}

// 파생 클래스
class Manager extends Employee {
  // 필드
  officeNumber: number;

  // 생성자
  constructor(name: string, age: number, position: string, officeNumber: number) {
    super(name, age, position); // 부모 클래스의 생성자를 호출
    this.officeNumber = officeNumber;
  }
}

const employee2 = new Employee("Nova", 33, "developer");
// console.log(employee2);
// employee2.work();

// 타입스크립트의 클래스는 타입으로도 활용이 된다.
const employee3: Employee = {
  name: "KNT",
  age: 20,
  position: "developer",
  work() {
    console.log("Woking...?");
  },
};
employee3.work();
