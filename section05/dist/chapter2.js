/**
 * 선언 합침(인터페이스 합치기)
 * - 인터페이스는 동일한 이름으로 중복 선언이 가능함
 * - 중복 선언을 하게될 경우, 모든 선언이 합쳐짐
 * - 동일한 프로퍼티를 중복 정의할 때 타입을 다르게 정의할 경우, 충돌이 발생함 (충돌 허용 X)
 */
const person = {
    name: "",
    age: 27,
};
const lib = {
    a: 1,
    b: 2,
    c: "hello",
};
export {};
