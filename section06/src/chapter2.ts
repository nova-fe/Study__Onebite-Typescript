/**
 * 접근 제어자
 * access modifier
 * => public, private, protected
 */

class Employee {
  // 1) 필드
  // private name: string;
  // age: number;
  // protected position: string;

  // 생성자
  // * 접근 제어자가 붙어있는 매개변수들은 자동으로 필드도 정의하고 초기화도 해준다. => 생략 가능
  constructor(private name: string, public age: number, protected position: string) {
    // 2) 초기화
    // this.name = name;
    // this.age = age;
    // this.position = position;
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

  work(): void {
    // console.log(`${this.name}`); // Err: private 필드는 외부에서 접근 불가(Employee 내부에서만 접근 가능)
    console.log(`${this.position}`); // protected 필드는 파생 클래스에서 접근 가능
  }
}

const employee = new Employee("Nova", 33, "developer");
const employee2 = new Manager("KN", 33, "developer", 30);
// console.log(employee.name); // Err: private 필드는 외부에서 접근 불가
// console.log(employee2.position); // Err: protected 필드는 외부에서 접근 불가
employee.age = 20; // public 필드(기본값)은 외부에서 접근 가능
console.log(employee);
