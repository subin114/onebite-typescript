/**
 * 기본 타입간의 호환성
 */
let num1 = 10;
let num2 = 10;
num1 = num2;
let animal = {
    name: "기린",
    color: "yellow",
};
let dog = {
    name: "코코아",
    color: "brown",
    breed: "시츄",
};
animal = dog; // 업 캐스트
let book;
let programmingBook = {
    name: "한 입 크기로 잘라먹는 리액트",
    price: 33000,
    skill: "reactjs",
};
book = programmingBook; // 업 캐스트
//programmingBook = book; // 다운 캐스트 (error)
/**
 * 초과 프로퍼티 검사
 * - 변수를 초기화할 때 초기화하는 값으로 객체 리터럴을 사용하면 발동하는 검사
 */
let book2 = {
    name: "한 입 크기로 잘라먹는 리액트",
    price: 33000,
    // skill: "reactjs",  // error
};
let book3 = programmingBook; // 객체 리터럴을 사용한 것은 아니기 때문에 초과 프로퍼티 검사가 발동되지 X
function func(book) { }
func(programmingBook);
export {};
// func({
//   name: "한 입 크기로 잘라먹는 리액트",
//   price: 33000,
//   skill: "reactjs",  // error
// })
