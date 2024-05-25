/**
 * 인터페이스의 확장
 * - 객체타입이면 다 확장할 수 있음
 * - extends를 사용할 경우, 무조건 뒤에있는 타입이 앞에있는 타입의 슈퍼타입이어야 함
 * - 동일한 프로퍼티의 타입을 재정의할 경우, 반드시 원본 프로퍼티 타입의 서브타입이 되도록 재정의 해줘야 함
 * - 여러가지 인터페이스를 또 확장하는 다중 확장이 가능함
 */

interface Animal {
  name: string;
  color: string;
}

interface Dog extends Animal {
  // name: "hello"; // string 타입의 서브 타입이라서 O
  // name: number; // error
  isBark: boolean;
}

const dog: Dog = {
  name: "",
  color: "",
  isBark: true,
};

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: "",
  color: "",
  isBark: true,
  isScratch: true,
};
