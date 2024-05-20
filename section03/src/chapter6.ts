/**
 * 타입 단언
 * - TS에서 빈 객체에 타입을 지정하려고 할 때, 타입 앨리어스를 사용하면 에러가 발생하는 문제를 해결하기 위한 것
 * - 보통 ' let 변수명 = 값 as 타입; ' 이렇게 지정함
 */

type Person = {
  name: string;
  age: number;
};

let person = {} as Person;
person.name = "수빈";
person.age = 24;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "코코아",
  color: "brown",
  breed: "시츄",
} as Dog;

/**
 * 💡 타입 단언의 규칙
 * - 값 as 단언 <== 단언식
 * - A as B
 * - A가 B의 슈퍼타입이거나 A가 B의 서브타입이어야 함
 */

let num1 = 10 as never;
let num2 = 10 as unknown;
let num3 = 10 as unknown as string; // 좋은 방법은 X

/**
 * const 단언
 * - 특별히 객체 타입과 함께 사용될 때 활용도가 높음
 */

let num4 = 10 as const;

let cat = {
  name: "야옹이",
  color: "yellow",
} as const; // 모든 프로퍼티가 readonly가 됨

/**
 * Non Null 단언 (!)
 * - TS 컴파일러가 null 이거나 undefined가 아닐 것이라고 믿도록 만들어줌
 * - 조금 위험한 문법이기 때문에 확실할 때에만 사용하는 것이 좋음
 */

type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
  author: "수빈",
};

const len: number = post.author!.length;
