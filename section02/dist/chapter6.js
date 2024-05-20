// any
/*
[특징]
1. 특정 변수의 타입을 우리가 확실히 모를 때 사용
2. 어떤 종류의 값이든 담을 수 있음

[주의사항]
1. any 타입은 타입 검사를 다 통과하는 치트키 같은 타입이기 때문에 사실상 타입 검사를 안하는 것과 같음
2. 변수에 any 타입을 지정한다는 것은 TS의 이점을 포기하는 것과 같기 때문에 되도록이면 사용 X
3. 오류가 있는 코드 검사를 통과하기 때문에 런타임 에러가 발생하는 최악의 상황을 유발할 수 있음

=> 즉, any 타입은 가능한 사용하지 않는 편이 좋음
*/
let anyVar = 10;
anyVar = "hello";
anyVar = true;
anyVar = {};
anyVar = () => { };
anyVar.toUpperCase();
anyVar.toFixed();
let num = 10;
num = anyVar;
// unknown
/*
[특징]
1. any 타입과 동일하게 어떤 값이든 담을 수 있음
2. any 타입과는 다르게 반대로 unknown 타입을 다른 모든 타입에 집어넣을 수 X
3. any 타입과는 다르게 toUpperCase 같은 메소드나 사칙연산 자체 또한 사용할 수 X
4. unknown 타입의 값을 활용하고 싶을 경우, 아래와 같이 타입 정제를 사용해서 활용할 수 있음
*/
let unknownVar;
unknownVar = "";
unknownVar = 1;
unknownVar = () => { };
// num = unknownVar;   // error
// 타입 정제 (= 타입 좁히기)
if (typeof unknownVar === "number") {
    num = unknownVar;
}
export {};
