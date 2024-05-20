/**
 * 타입 추론
 * - TS는 자동으로 변수의 타입을 추론함 (= 점진적인 타입)
 * - const로 선언된 상수가 아니면 타입을 넓혀서 좀 더 범용적으로 변수를 사용할 수 있도록 타입 넓히기를 통해 타입을 잘 추론해 줌
 */
let a = 10;
let b = "hello";
let c = {
    id: 1,
    name: "수빈",
    profile: {
        nickname: "sbin",
    },
    urls: ["https://su7113.tistory.com/"],
};
let { id, name, profile } = c;
let [one, two, three] = [1, "hello", true];
function func(message = "hello") {
    return "hello";
}
/**
 * Any 타입의 진화
 * - 변수를 선언하고 초기 값을 지정하지 않으면 암묵적인 Any 타입으로 추론이 됨
 * - 명시적으로 Any 타입을 정의하는 것과는 동작하는 것이 다름
 */
let d;
d = 10;
d.toFixed();
d = "hello";
d.toUpperCase();
/**
 * const 타입 (상수 타입) = 리터럴 타입
 */
const num = 10;
const str = "hello";
/**
 * 공통 타입으로 추론
 */
let arr = [1, "string"];
export {};
