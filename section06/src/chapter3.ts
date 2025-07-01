/**
 * 인터페이스와 클래스
 */
interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

// Character 클래스는 CharacterInterface를 구현한다.
// implements 뜻: "구현한다"
class Character implements CharacterInterface {
  // interface는 무조건 public 필드만 정의 할 수 있다.
  // private, protexted 필드를 사용하고 싶다면 따로 정의를 해줘야 함
  constructor(public name: string, public moveSpeed: number, private extra: string) {}

  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동합니다.`);
  }
}
