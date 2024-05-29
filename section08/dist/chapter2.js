/**
 * keyof 연산자
 * - 객체 타입에 적용하는 연산자
 * - keyof 연산자 뒤에는 반드시 타입이 와야 됨
 * - 타입을 정의할 때 typeof를 사용하게 되면 변수의 타입을 뽑아내는 용도로 사용할 수 있음
 */
function getPropertyKey(person, key) {
    return person[key];
}
const person = {
    name: "수빈",
    age: 24,
};
getPropertyKey(person, "name"); // 수빈
export {};
