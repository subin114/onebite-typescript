/**
 * 타입스크립트의 클래스
 * - 타입스크립트의 클래스는 실제 타입으로도 활용이 됨
 */
const employee = {
    name: "수빈",
    age: 24,
    position: "developer",
    work() {
        console.log("일함");
    },
};
class Employee {
    // 필드
    name;
    age;
    position;
    // 생성자
    constructor(name, age, position) {
        this.name = name;
        this.age = age;
        this.position = position;
    }
    // 메서드
    work() {
        console.log("일함");
    }
}
class ExecutiveOfficer extends Employee {
    // 필드
    officeNumber;
    // 생성자
    constructor(name, age, position, officeNumber) {
        super(name, age, position);
        this.officeNumber = officeNumber;
    }
}
const employeeB = new Employee("수빈", 24, "개발자");
console.log(employeeB);
const employeeC = {
    name: "",
    age: 0,
    position: "",
    work() { },
};
export {};
