/**
 * 인터페이스
 * - 타입에 이름을 지어주는 또 다른 문법
 * - 객체의 구조를 정의하는데 특화된 문법
 * - (상속, 합침 등의 특수한 기능을 제공함)
 * - 타입별칭과는 다르게 유니온 타입, 교차 타입을 사용할 수 X
 */

interface Person {
  readonly name: string;
  age?: number;
  sayHi(): void; // 호출 시그니처 (기본적인 호출 시그니처와는 달리 메서드의 이름이 소괄호 앞에 붙음)
  sayHi(a: number, b: number): void;
  // sayHi: () => void;
}

const person: Person = {
  name: "수빈",
  sayHi: function () {
    console.log("Hi");
  },
};

// 함수 오버로딩을 사용할 경우, 호출 시그니처를 사용해야 함 (함수 타입 표현식을 작성하면 중복돼서 에러 발생함)
person.sayHi();
person.sayHi(1, 2);
