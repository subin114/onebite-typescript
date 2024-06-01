/**
 * Pick<T, K>
 * - 뽑다, 고르다
 * - 객체 타입으로부터 특정 프로퍼티만 딱 골라내는 타입
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

type Pick<T, K extends keyof T> = {
  // K extends 'title' | 'tags' | 'content' | 'thumbnailURL'
  // 'title' | 'content' extends 'title' | 'tags' | 'content' | 'thumbnailURL'
  [key in K]: T[key];
};

const legacyPost: Pick<Post, "title" | "content"> = {
  title: "옛날 글",
  content: "옛날 컨텐츠",
};

/**
 * Omit<T, K>
 * - 생략하다, 빼다
 * - 객체 타입으로부터 특정 프로퍼티를 제거하는 타입
 */

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// T = Post, K = 'title'
// Pick<Post, Exclude<keyof Post, 'title'>>
// Pick<Post, Exclude<'title' | 'content' | 'tags' | 'thumbnail', 'title'>>
// Pick<Post, 'content' | 'tags' | 'thumbnailURL'>

const noTitlePost: Omit<Post, "title"> = {
  content: "",
  tags: [],
  thumbnailURL: "",
};

/**
 * Record<K, V>
 * - 객체 타입을 새롭게 정의할 때 인덱스 시그니처처럼 유연하지만 그것보다는 조금 더 제한적인 객체 타입을 정의할 때 사용
 */

type Record<K extends keyof any, V> = {
  [key in K]: V;
};

type ThumbnailLegacy = {
  large: { url: string };
  medium: { url: string };
  small: { url: string };
  watch: { url: string };
};

type Thumbnail = Record<
  "large" | "medium" | "small" | "watch",
  { url: string; size: number }
>;
