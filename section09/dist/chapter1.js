/**
 * 분산적인 조건부 타입
 */
// type StringNumberSwitch<T> = [T] extends [number] ? string : number;  // 분산적으로 작동하지 않게 하는 방법 : extends 양옆에 대괄호를 씌워주면 됨
let a;
let b;
let c; // 한번은 number, 한번은 string으로 각각 분리돼서 분리된 결과를 유니언으로 묶어줌
let d;
export {};
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
