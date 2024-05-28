/**
 * 클래스
 * - 클래스 안에서 메서드를 정의할 경우, 클래스 안에서는 쉼표를 찍지 X. (생성자, 필드도 동일하게 쉼표 사용 X)
 */

let studentA = {
  name: "수빈",
  grade: "A+",
  age: 24,
  study() {
    console.log("열심히 공부 함");
  },
  introduce() {
    console.log("안녕하세요!");
  },
};

class Student {
  // 필드
  name;
  grade;
  age;

  // 생성자 (실제로 객체를 만드는 메서드)
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  // 메서드
  study() {
    console.log("열심히 공부 함");
  }

  introduce() {
    console.log(`안녕하세요. ${this.name} 입니다!`);
  }
}

// 클래스를 이용해서 만든 객체 -> 인스턴스
// 스튜던트 인스턴스
let studentB = new Student("수현", "B+", 22);
// console.log(studentB);
// studentB.study();
// studentB.introduce();
/*
new - 새로운 객체를 만들라는 의미 (클래스를 호출해서 객체를 생성할 때에는 new라는 키워드를 작성해줘야 함)
Student - 클래스 이름 작성. 그 뒤에 함수를 호출하듯이 소괄호를 열고 인수를 전달하게 되면, 실제로 클래스에 있는 생성자(constructor)를 호출하는 것과 같음
*/

class StudentDeveloper extends Student {
  // 필드
  favoriteSkill;

  // 생성자 (실제로 객체를 만드는 메서드)
  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age); // 슈퍼(= 부모, Student를 의미) 클래스의 생성자(constructor)가 호출됨
    this.favoriteSkill = favoriteSkill;
  }

  // 메서드
  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍 함`);
  }
}

const studentDeveloper = new StudentDeveloper("수민", "B-", 24, "TypeScript");
console.log(studentDeveloper);
studentDeveloper.programming();
