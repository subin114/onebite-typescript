/**
 * 분산적인 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;
// type StringNumberSwitch<T> = [T] extends [number] ? string : number;  // 분산적으로 작동하지 않게 하는 방법 : extends 양옆에 대괄호를 씌워주면 됨

let a: StringNumberSwitch<number>;
let b: StringNumberSwitch<string>;
let c: StringNumberSwitch<number | string>; // 한번은 number, 한번은 string으로 각각 분리돼서 분리된 결과를 유니언으로 묶어줌
let d: StringNumberSwitch<boolean | number | string>;
// 1단계
// StringNumberSwitch<boolean> |
// StringNumberSwitch<number> |
// StringNumberSwitch<string>

// 2단계
// number |
// string |
// number

// 결과
// number | string

/**
 * 실용적인 예제 1
 */

type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;
// 1단계
// Exclude<number, string> |
// Exclude<string, string> |
// Exclude<boolean, string>

// 2단계
// number |
// never |
// boolean

// 결과
// number | never | boolean
// 이때, 유니언 타입에 never 타입이 포함되어 있으면 never는 결국 사라짐 (never는 공집합 타입이기 때문)

// 최종결과
// number | boolean

/**
 * 실용적인 예제 2
 */

type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;
// 1단계
// Extract<number, string> |
// Extract<string, string> |
// Extract<boolean, string>

// 2단계
// never |
// string |
// never

// 결과
// never | string | never

// 최종결과
// string
