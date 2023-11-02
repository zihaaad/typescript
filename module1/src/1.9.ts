{
  // Type Allias

  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
  };

  const student1: Student = {
    name: "Zihad",
    age: 19,
    gender: "male",
    contactNo: "01800000000",
    address: "fdp",
  };

  const student2: Student = {
    name: "Mir",
    age: 25,
    gender: "male",
    address: "dhk",
  };

  type UserName = string;
  type IsAdmin = boolean;
  const userName: UserName = "zihaaad";
  const isAdmin: IsAdmin = true;

  type Add = (nam1: number, num2: number) => number;

  const add: Add = (num1, num2) => num1 + num2;
}
