/**
 * 인덱스드 엑세스 타입
 * - 인덱스를 이용해서 다른 타입 내에 특정 프로퍼티의 타입을 추출하는 타입
 *
 * 🚨 주의사항
 * - 인덱스에 들어가는 문자열은 값이 아니라 타입이다. (오로지 타입만 들어갈 수 있음)
 * - 타입을 쓰더라도 존재하지 않는 프로퍼티의 이름을 써주게 되면 에러가 발생한다.
 * - (author: Post["author"]["id"]) 처럼 중첩으로 대괄호를 사용할 수 있다.
 * - 객체의 특정 프로퍼티뿐만 아니라, 배열 타입으로부터 특정 요소의 타입을 뽑아내는 것도 가능하다.
 */

// interface Post {
//   title: string;
//   content: string;
//   author: {
//     id: number;
//     name: string;
//     age: number;
//   };
// }

type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

// 인덱스에 어떤 숫자를 넣든간에 앞에가 배열 타입이면 배열 요소의 타입을 추출함 (여기서 숫자 또한 타입임 = 숫자 리터럴 타입)
const post: PostList[number] = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "수빈",
    age: 24,
  },
};

// 작성자의 이름과 아이디를 붙여서 출력하는 함수
function printAuthorInfo(author: PostList[number]["author"]) {
  console.log(`${author.name}-${author.id}`);
}

printAuthorInfo(post.author);

/**
 * 튜플 타입 예제
 */

type Tup = [number, string, boolean];
type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];
type TupNum = Tup[number]; // number라고 작성하면 튜플 타입 안에 있는 모든 타입의 최적된 공통 타입을 뽑아옴 (유니온 타입)
