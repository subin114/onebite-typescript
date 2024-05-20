/**
 * 타입 좁히기
 * - 조건문 등을 이용해 넓은 타입에서 좁은 타입으로 타입을 상황에 따라 좁히는 방법
 * - null 값도 typeof를 하면 object를 반환하는 특징이 있음
 */
// value => number : toFixed
// value => string : toUpperCase
// value => Date : getTime
// value => Person : name은 age살 입니다.
function func(value) {
    if (typeof value === "number") {
        console.log(value.toFixed());
    }
    else if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else if (value instanceof Date) {
        // instanceof : 왼쪽에 있는 값이 오른쪽의 instance인지 물어보는 연산자. 우측에 있는 항에는 타입이 들어오면 X
        // class의 instance인지 확인하는 연산자이기 때문에 Date가 들어올 수 있음
        console.log(value.getTime());
    }
    else if (value && "age" in value) {
        // in 연산자를 사용해서 앞에 있는 프로퍼티가 존재하는지 확인함
        // in 연산자 뒤에는 null이나 indefined 값이 들어오면 안되기 때문에 value가 null이 아님을 밝혀주기 위해 && 연산자를 사용함
        console.log(`${value.name}은 ${value.age}살 입니다.`);
    }
}
export {};
