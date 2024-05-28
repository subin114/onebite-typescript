/**
 * 제네릭 인터페이스
 * - 제네릭 인터페이스를 사용할 경우, 타입으로 정의할 때 타입 변수에 할당할 타입을 꺾쇠와 함께 사용해야 함
 */
let keyPair = {
    key: "key",
    value: 0,
};
let keyPair2 = {
    key: true,
    value: ["1"],
};
let numberMap1 = {
    key: -1231,
    key2: 123123,
};
let stringMap = {
    key: "value",
};
let booleanMap = {
    key: true,
};
let stringMap2 = {
    key: "hello",
};
// 등교하는 함수
function goToSchool(user) {
    if (user.profile.type !== "student") {
        console.log("잘 못 오셨습니다");
        return;
    }
    const school = user.profile.school;
    console.log(`${school}로 등교 완료`);
}
const developerUser = {
    name: "수빈",
    profile: {
        type: "developer",
        skill: "TypeScript",
    },
};
const studentUser = {
    name: "수빈",
    profile: {
        type: "student",
        school: "협성대학교",
    },
};
export {};
