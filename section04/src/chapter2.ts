/**
 * 함수 타입 호환성
 * - 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은지를 판단
 * 1. 반환값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호환되는가
 */

// 📍 기준1. 반환값이 호환되는가
type A = () => number;
type B = () => 10;

let a: A = () => 10; // type : number
let b: B = () => 10; // type : number 리터럴

a = b; // 업 캐스팅
// b = a; // 다운 캐스팅

// 📍 기준2. 매개변수가 호환되는가
// 2-1. 매개변수의 개수가 같을 때
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d; // 업 캐스팅
d = c; // 다운 캐스팅

// ⭐ 매개변수 타입을 기준으로 함수 타입의 호환성을 판단할 때에는 업 캐스팅일 경우 X, 다운 캐스팅일 경우 O

type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};
let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// animalFunc = dogFunc; // 업 캐스팅
dogFunc = animalFunc;

let testFunc = (animal: Animal) => {
  console.log(animal.name);
  // console.log(animal.color)
};

let testFunc2 = (dog: Dog) => {
  console.log(dog.name);
};

// 2-2. 매개변수의 개수가 다를 때

type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2; // 다운 캐스팅
// func2 = func1; // 업 캐스팅

// ⭐ 즉, 매개변수가 다를 경우, 할당하려고 하는 쪽의 함수의 타입에 매개변수의 갯수가 더 적을 때에만 호환이 된다.
