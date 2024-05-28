/**
 * 접근 제어자
 * - access modifier : 클래스를 만들 때 특정 필드나 메서드에 접근할 수 있는 범위를 설정하는 문법
 * => public / private / protected
 *
 * 📍 public
 * - 기본 접근 제어자. 어디서나 접근 가능
 * - 명시적으로 선언하지 않으면 기본적으로 public으로 설정됨
 *
 * 📍 private
 * - 클래스 외부에서 접근 X
 * - 해당 클래스 내부에서만 접근 가능
 *
 * 📍 protected
 * - 클래스 외부에서 접근 X
 * - private와 비슷하지만, 해당 클래스와 서브(자식) 클래스 내에서 접근 가능
 */

class Employee {
  // 필드
  // name: string;
  // age: number;
  // position: string;

  // 생성자
  // - 생성자에 접근 제어자를 작성할 경우, 필드를 자동으로 만들기 때문에 필드 정의를 생략 가능함
  constructor(
    private name: string,
    protected age: number,
    public position: string
  ) {
    // - 초기화 또한 자동으로 하기 때문에 생략 가능함
    // this.name = name;
    // this.age = age;
    // this.position = position;
  }

  // 메서드
  work() {
    console.log("일함");
  }
}

class ExecutiveOfficer extends Employee {
  // 필드
  officeNumber: number;

  // 생성자
  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }

  // 메서드
  func() {
    this.age;
    // this.name;
  }
}

const employee = new Employee("수빈", 24, "developer");
// employee.name = "길동";
// employee.age = 30;
employee.position = "디자이너";

console.log(employee);
