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

const student1 = new Student("Max", 21, 4.0);
console.log(student1.getName(), ' ', student1.getAge(), ' ', student1.getAverageGrade());

const student2 = new Student("Dima", 20, 2.5);
console.log(student2.getName(), ' ', student2.getAge(), ' ', student2.getAverageGrade());

student2.setName("Roma");
student2.setAge(25);
student2.setAverageGrade(5.0);
console.log(student2.getName(), ' ', student2.getAge(), ' ', student2.getAverageGrade());
