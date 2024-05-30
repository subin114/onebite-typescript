/**
 * 조건부 타입
 */
let varA;
let varB;
function removeSpaces(text) {
    if (typeof text === "string") {
        return text.replaceAll(" ", "");
    }
    else {
        return undefined;
    }
}
let result = removeSpaces("hi im subin");
result.toUpperCase();
let result2 = removeSpaces(undefined);
export {};
