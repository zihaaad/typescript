{
  // oop = inheritence

  class Person {
    name: string;
    age: number;
    address: string;
    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
    getSleep(numOfHour: number) {
      console.log(`This ${this.name} will sleep for ${numOfHour}`);
    }
  }

  class Student extends Person {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }

  const student1 = new Student("Mr. Student", 20, "Ezypt");
  student1.getSleep(8);
  console.log(student1);

  class Teacher extends Person {
    designation: string;
    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }
    talkClass(numOfClass: number) {
      console.log(`${this.name} will take ${numOfClass}`);
    }
  }

  const teacher = new Teacher("Mr. Teacher", 40, "Ezypt", "Professor");
  teacher.talkClass(5);
  console.log(teacher);
}
