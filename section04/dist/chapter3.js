/**
 * 함수 오버로딩
 * - 하나의 함수를 매개변수의 개수나 타입에 따라 여러가지 버전으로 정의하는 방법
 * -> 하나의 함수 func
 * -> 모든 매개변수 타입 number
 * -> Ver1. 매개변수가 1개 => 이 매개변수에 20을 곱한 값 출력
 * -> Ver2. 매개변수가 3개 => 이 매개변수들을 다 더한 값을 출력
 */
// 실제 구현부 -> 구현 시그니처
function func(a, b, c) {
    if (typeof b === "number" && typeof c === "number") {
        console.log(a + b + c);
    }
    else {
        console.log(a * 20);
    }
}
/*
위와 같이 구현 시그니처에서 매개변수 3개가 다 필수 매개변수로 정의가 되어 있다면
첫번째 오버로드 시그니처는 의미가 없어지게 된다.
그렇기 때문에 오버로드 시그니처의 매개변수의 개수에 차이가 있을 경우,
방어적으로 선택적 프로퍼티로 매개변수를 정의해서 모든 오버로드 시그니처들이 의미가 있도록 만들어줘야 한다.
*/
/*
오버로드 시그니처를 가지고 있으면 이제부터 이 함수를 호출할 때
이런 인수들의 타입이 실제 구현부에 정의된 매개변수의 타입에 따르지 X

⭐ 오버로드 시그니처들 중 하나의 버전을 따라간다.
*/
// func(); // error
func(1); // Ver1
// func(1, 2); // error
func(1, 2, 3); // Ver2
export {};
