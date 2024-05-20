// enum 타입 (열거형 타입)
/*
1. 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
2. 숫자를 자동으로 할당할 수 있고, 시작하는 숫자를 직접 지정해줄 수도 있음
3. enum 타입은 컴파일해도 사라지지 X
*/
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
var Language;
(function (Language) {
    Language["korean"] = "ko";
    Language["english"] = "en";
})(Language || (Language = {}));
const user1 = {
    name: "수빈1",
    role: Role.ADMIN,
    length: Language.korean,
};
const user2 = {
    name: "수빈2",
    role: Role.USER,
    length: Language.english,
};
const user3 = {
    name: "수빈3",
    role: Role.GUEST,
};
console.log(user1, user2, user3);
export {};
