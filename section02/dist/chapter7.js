// void
/*
1. 아무런 값도 없음을 의미하는 타입
2. 아무런 값도 반환하지 않는 함수의 반환값 타입을 정의할 때 사용
3. 변수의 타입으로도 void 타입을 지정할 수 있지만, undefined 이외의 다른 타입의 값은 담을 수 X (= void 타입이 undefined 타입을 포함하는 타입이기 때문)
4. "strictNullChecks": false로 설정하면 void 타입의 변수에 null 값도 담을 수 있음
*/
function func1() {
    return "hello";
}
function func2() {
    console.log("hello");
}
// never
/*
1. 불가능을 의미하는 타입
2. 함수가 어떠한 값도 반환할 수 없는(= 불가능한) 상황일 때 해당 함수의 반환값 타입을 정의할 때 사용
3. 무한 루프 외에도 의도적으로 오류를 발생시키는 함수도 never 타입으로 정의할 수 있음
4. any를 포함해 그 어떠한 타입의 값도 이 변수에 담을 수 X
*/
function func3() {
    while (true) { }
}
function func4() {
    throw new Error();
}
export {};
// let anyVar: any;
// let a: never;
// a = 1
// a = {}
// a = ""
// a = undefined
// a = null
// a = anyVar
