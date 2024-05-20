// object

/*
// TS의 object라는 타입은 이 값이 객체라는 정보 외에 아무런 정보도 없는 타입이기 때문에 에러가 발생함

let user: object = {
  id: 1,
  name: "수빈",
};

user.id
*/

let user: {
  id?: number; // 옵셔널 프로퍼티
  name: string;
} = {
  id: 1,
  name: "수빈",
};

let config: {
  readonly apiKey: string; // readonly: 읽기 전용 (=> 프로퍼티 값을 바꾸는 행위를 막아줌)
} = {
  apiKey: "MY API KEY",
};
