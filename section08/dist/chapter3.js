/**
 * 맵드 타입
 * - 인터페이스로는 만들 수 X. 무조건 타입별칭으로만 사용해야 함
 * - 인덱스 시그니처와 달리 콜론이 아니라 in 연산자를 사용한다는 특징이 있음
 * - 맵드 타입을 이용하면 특정 객체 타입을 원하는 대로 변환할 수 있기 때문에 하나의 객체 타입으로 굉장히 다양한 상황에 대처할 수 있음
 */
// 한명의 유저 정보를 불러오는 기능
function fetchUser() {
    // ... 기능
    return {
        id: 1,
        name: "수빈",
        age: 24,
    };
}
const user = fetchUser();
// user.id = 1;  // error
// 한명의 유저 정보를 수정하는 기능
function updateUser(user) {
    // ... 수정하는 기능
}
updateUser({
    id: 1,
    name: "수빈",
    age: 25,
});
export {};
