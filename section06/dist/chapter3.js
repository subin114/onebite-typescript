/**
 * 인터페이스와 클래스
 * - implement : 구현하다
 */
class Character {
    name;
    moveSpeed;
    extra;
    // name: string;
    // moveSpeed: number;
    constructor(name, moveSpeed, extra) {
        this.name = name;
        this.moveSpeed = moveSpeed;
        this.extra = extra;
        // this.name = name;
        // this.moveSpeed = moveSpeed;
    }
    move() {
        console.log(`${this.moveSpeed} 속도로 이동!`);
    }
}
export {};
