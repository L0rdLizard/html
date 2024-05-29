class Student {
    constructor(name, age, averageGrade) {
        this._name = name;
        this._age = age;
        this._averageGrade = averageGrade;
    }
    setName(name) {
        this._name = name;
    }
    setAge(age) {
        this._age = age;
    }
    setAverageGrade(averageGrade) {
        this._averageGrade = averageGrade;
    }
    getName() {
        return this._name;
    }
    getAge() {
        return this._age;
    }
    getAverageGrade() {
        return this._averageGrade;
    }
}

const student1 = new Student("Kris", 19, 5.0);
console.log(student1.getName());
console.log(student1.getAge());
console.log(student1.getAverageGrade());

student1.setName("Jhon");
student1.setAge(32);
student1.setAverageGrade(4.0);

console.log(student1.getName());
console.log(student1.getAge());
console.log(student1.getAverageGrade());
