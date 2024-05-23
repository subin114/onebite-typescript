/**
 * 사용자 정의 타입가드
 */
function isDog(animal) {
    return animal.isBark !== undefined;
}
function isCat(animal) {
    return animal.isScratch !== undefined;
}
function warning(animal) {
    if (isDog(animal)) {
        // 강아지
        animal;
    }
    else if ("isScratch" in animal) {
        // 고양이
    }
}
export {};
