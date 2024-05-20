// 배열
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["hello", "im", "subin"];
let boolArr: Array<boolean> = [true, false]; // 제네릭 문법

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (number | string)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플 (길이와 타입이 고정된 배열)
let tup1: [number, number] = [1, 2];
let tup2: [number, string, boolean] = [1, "2", true];

tup1.push(1); // 에러발생 X ===> JS의 배열이라고 생각하기 때문에 튜플의 길이 제한 발동 X

const users: [string, number][] = [
  ["수빈1", 1],
  ["수빈2", 2],
  ["수빈3", 3],
  ["수빈4", 4],
  // [5, "수빈5"],  // 타입을 이용해서 값을 잘못넣지 않도록 방지해줄 수 있음
];
