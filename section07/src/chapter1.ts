/**
 * 첫 번째 사례
 * - 매개변수의 타입을 다르게 지정해줄 경우
 */

function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap("1", 2);

/**
 * 두 번째 사례
 */

function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let num = returnFirstValue([0, 1, 2]); // 0
let str = returnFirstValue([1, "hello", "mynameis"]); // "hello"

/**
 * 세 번째 사례
 * - number 타입의 property length를 가지고 있는 객체를 확장하는 타입으로 T를 제한할 경우
 */

function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let var1 = getLength([1, 2, 3]); // 3
let var2 = getLength("12345"); // 5
let var3 = getLength({ length: 10 }); // 10
// let var4 = getLength(10); // error
