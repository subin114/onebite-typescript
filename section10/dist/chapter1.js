/**
 * 유틸리티 타입
 * - 제네릭, 맵드 타입, 조건부 타입 등의 타입 조작 기능을 이용해 실무에서 자주 사용되는 타입을 미리 만들어 놓은 것
 *
 * Partial<T>
 * - 부분적인, 일부분의
 * - 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입
 */
const draft = {
    title: "제목 나중에 짓자",
    content: "초안...",
};
const withThumbnailPost = {
    title: "한입 TS 후기",
    tags: ["ts"],
    content: "",
    thumbnailURL: "https://...",
};
const readonlyPost = {
    title: "보호된 게시글 입니다.",
    tags: [],
    content: "",
};
export {};
// readonlyPost.content = ""  // error
