/**
 * Unknown 타입 (모든 타입의 슈퍼 타입)
 */

function unknownExam() {
  // 업 캐스트
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  // 다운 캐스트 (error)
  //let unknownVar: unknown;
  // let num: number = unknownVar;
  // let str: string = unknownVar
  // let bool: boolean = unknownVar
}

/**
 * Never 타입 (공집합)
 * - 어떤 값도 저장되어서는 안되는 변수의 타입으로 활용하면 좋음
 */

function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  // 업 캐스트
  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  // 다운 캐스트 (error)
  // let never1: never = 10;
  // let never2: never = "string";
  // let never3: never = true;
}

/**
 * Void 타입
 * - Void 타입은 undefined의 슈퍼 타입임
 */

function voidExam() {
  function voidFunc(): void {
    console.log("hi");
  }

  // 업 캐스트
  let voidVar: void = undefined;
}

/**
 * Any 타입
 * - 치트키 타입이기 때문에 타입 계층도를 완벽히 무시함
 * - 모든 타입의 슈퍼 타입으로 위치하기도 하고, 반대로 never 타입 이외의 모든 타입의 서브 타입으로도 위치함
 */

function anyExam(): any {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVar = unknownVar;
  undefinedVar = anyVar;

  // never 타입은 any 타입이라도 다운 캐스트할 수 X
  // neverVar = anyVar;   // error
}
