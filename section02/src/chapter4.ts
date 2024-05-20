// 타입 별칭 (타입을 마치 변수처럼 정의하도록 도와주는 문법)
// ** 동일한 스코프에 중복된 이름으로 타입 별칭을 선언하면 X **
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: "수빈",
  nickname: "sb",
  birth: "2000.01.14",
  bio: "안녕하세요",
  location: "수원시",
};

let user2: User = {
  id: 2,
  name: "수빈",
  nickname: "sb",
  birth: "2000.01.14",
  bio: "안녕하세요",
  location: "수원시",
};

// 인덱스 시그니처 (key와 value의 규칙을 기준으로 객체의 타입을 정의할 수 있는 문법)
/*
[주의사항]
countryCodes의 프로퍼티를 모두 지워도 타입 에러가 발생하지 X

=> 인덱스 시그니처 타입은 이 규칙을 위반하지만 않으면 모든 객체를 허용하는 타입이기 때문
(아무런 프로퍼티 없는 객체면 규칙을 위반할 프로퍼티가 없는 것)

만약 반드시 어떠한 프로퍼티가 있어야된다면
Korea: string; 이런식으로 작성해주면 됨

이때도 기존에 작성한 [key: string]: string; 프로퍼티와 value 타입이 일치해야지 에러 발생하지 X
*/

type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};
