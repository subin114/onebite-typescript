/**
 * 제네릭
 * - 함수의 인수에 따라 반환 값의 타입을 가변적으로 정해줄 수 있음
 * - 모든 타입에 두루두루 쓸 수 있는 범용적인 함수
 */
// 제네릭 함수
// <T> - 타입 변수 (= 타입을 저장하는 변수. 함수 호출시 인수의 타입이 어떤 타입인지에 따라서 타입 변수에 저장되는 타입이 달라짐)
function func(value) {
    return value;
}
let num = func(10);
let bool = func(true);
let str = func("string");
let arr = func([1, 2, 3]); // 튜플 타입으로 할당
export {};
