/**
 * 프로미스
 * - 제네릭 클래스를 기반으로 타입이 선언되기 때문에 타입 변수로 비동기 처리의 결과(resolve) 값의 타입을 정의해줄 수 있음
 * - 반대로 실패(reject)했을 때의 타입은 정의해줄 수 X
 */

const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    // resolve(20);
    reject("~~ 때문에 실패");
  }, 3000);
});

// 결과 값
promise.then((response) => {
  console.log(response * 10); // 20
});

// 실패 결과
promise.catch((err) => {
  if (typeof err === "string") {
    console.log(err);
  }
});

/**
 * 프로미스를 반환하는 함수의 타입을 정의
 */

interface Post {
  id: number;
  title: string;
  content: string;
}

//  함수의 반환값 타입에 직접 정의
function fetchPost(): Promise<Post> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "게시글 제목",
        content: "게시글 컨텐츠",
      });
    }, 3000);
  });
}

const postRequest = fetchPost();

postRequest.then((post) => {
  post.id;
});
