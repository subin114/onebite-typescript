/**
 * 기본 타입간의 호환성
 */

let num1: number = 10;
let num2: 10 = 10;

num1 = num2;

/**
 * 객체 타입간의 호환성
 * -> 어떤 객체 타입을 다른 객체 타입으로 취급해도 괜찮은가?
 */

/*
✅ 객체 타입들 간의 관계를 정의할 때
- 추가 프로퍼티가 있는 타입이 슈퍼 타입이 되는 것이 X
- 추가 프로퍼티가 없는 조건이(= 더 적은 타입)이 슈퍼 타입이 되는 것임
*/

// 💡ex1
// 슈퍼 타입
type Animal = {
  name: string;
  color: string;
};

// 서브 타입
type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "코코아",
  color: "brown",
  breed: "시츄",
};

animal = dog; // 업 캐스트
//dog = animal; // 다운 캐스트 (error)

// 💡ex2
// 슈퍼 타입
type Book = {
  name: string;
  price: number;
};

// 서브 타입
type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;

let programmingBook: ProgrammingBook = {
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
let book2: Book = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  // skill: "reactjs",  // error
};

let book3: Book = programmingBook; // 객체 리터럴을 사용한 것은 아니기 때문에 초과 프로퍼티 검사가 발동되지 X

function func(book: Book) {}
func(programmingBook);
// func({
//   name: "한 입 크기로 잘라먹는 리액트",
//   price: 33000,
//   skill: "reactjs",  // error
// })
