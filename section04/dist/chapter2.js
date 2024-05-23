/**
 * 함수 타입 호환성
 * - 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은지를 판단
 * 1. 반환값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호환되는가
 */
let a = () => 10; // type : number
let b = () => 10; // type : number 리터럴
a = b; // 업 캐스팅
let c = (value) => { };
let d = (value) => { };
// c = d; // 업 캐스팅
d = c; // 다운 캐스팅
let animalFunc = (animal) => {
    console.log(animal.name);
};
let dogFunc = (dog) => {
    console.log(dog.name);
    console.log(dog.color);
};
// animalFunc = dogFunc; // 업 캐스팅
dogFunc = animalFunc;
let testFunc = (animal) => {
    console.log(animal.name);
    // console.log(animal.color)
};
let testFunc2 = (dog) => {
    console.log(dog.name);
};
let func1 = (a, b) => { };
let func2 = (a) => { };
func1 = func2; // 다운 캐스팅
export {};
// func2 = func1; // 업 캐스팅
// ⭐ 즉, 매개변수가 다를 경우, 할당하려고 하는 쪽의 함수의 타입에 매개변수의 갯수가 더 적을 때에만 호환이 된다.
