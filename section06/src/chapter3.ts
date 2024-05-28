/**
 * 인터페이스와 클래스
 * - implement : 구현하다
 */

interface CharacterInterface {
  // interface로 정의하는 필드들은 무조건 public이기 때문에 constructor 소괄호 안에 public을 제외한 나머지를 작성해줄 경우 에러 발생함
  name: string;
  moveSpeed: number;
  move(): void;
}

class Character implements CharacterInterface {
  // name: string;
  // moveSpeed: number;

  constructor(
    public name: string,
    public moveSpeed: number,
    private extra: string
  ) {
    // this.name = name;
    // this.moveSpeed = moveSpeed;
  }

  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동!`);
  }
}
