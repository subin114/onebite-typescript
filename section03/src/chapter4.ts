/**
 * 대수 타입
 * - 여러 개의 타입을 합성해서 새롭게 만들어낸 타입
 * - 합집합 타입과 교집합 타입이 존재함
 */

/**
 * 1. 합집합 타입 (Union 타입)
 * - 객체가 한쪽 타입에만 포함됨
 * - 객체가 다른 한쪽 타입에만 포함됨
 * - 모든 타입에 포함되는 교집합에 위치하는 객체일 경우에 해당함
 */

let a: string | number | boolean;
a = 1;
a = "hello";
a = true;

let arr: (number | string | boolean)[] = [1, "hello", true];

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
  name: "",
  color: "",
};

let union2: Union1 = {
  name: "",
  language: "",
};

let union3: Union1 = {
  name: "",
  color: "",
  language: "",
};

// let union4: Union1 = {
//   name: "",  // error (name 프로퍼티만 가지고 있기 때문에 어떤 타입에도 포함될 수 X)
// }

/**
 * 2. 교집합 타입 (Intersection 타입)
 * - 기본 타입을 가지고 교집합 타입을 만들면 보통 다 Never 타입임 (기본 타입들 중에서는 서로 공유하거나 겹치는 값들이 없기 때문)
 * - 그래서 보통 객체 타입에 많이 사용됨
 * - 프로퍼티를 하나라도 빼먹으면 포함되지 않아서 에러 발생함
 */

let variable: number & string; // Never 타입 (= number 타입과 string 타입의 교집합은 공집합)

type Dog1 = {
  name: string;
  color: string;
};

type Person1 = {
  name: string;
  language: string;
};

type Intersection = Dog1 & Person1;

let intersection1: Intersection = {
  name: "",
  color: "",
  language: "",
};
