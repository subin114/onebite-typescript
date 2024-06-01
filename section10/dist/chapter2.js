/**
 * Pick<T, K>
 * - 뽑다, 고르다
 * - 객체 타입으로부터 특정 프로퍼티만 딱 골라내는 타입
 */
const legacyPost = {
    title: "옛날 글",
    content: "옛날 컨텐츠",
};
// T = Post, K = 'title'
// Pick<Post, Exclude<keyof Post, 'title'>>
// Pick<Post, Exclude<'title' | 'content' | 'tags' | 'thumbnail', 'title'>>
// Pick<Post, 'content' | 'tags' | 'thumbnailURL'>
const noTitlePost = {
    content: "",
    tags: [],
    thumbnailURL: "",
};
export {};
