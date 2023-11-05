{
  // utility types
  // Pick

  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };

  type NameAge = Pick<Person, "name" | "age">;

  // Omit
  type ContactInfo = Omit<Person, "name" | "age">;

  // Required
  type PersonRequired = Required<Person>;

  // Partial
  type PersonPartial = Partial<Person>;

  // Readonly
  type PersonReadonly = Readonly<Person>;
  const person1: PersonReadonly = {
    name: "zihad",
    age: 19,
    contactNo: "018",
  };
  //   person1.name = "Mr. Man";

  // Record
  // type MyObj = {
  //     a: string;
  //     b: string;
  // }

  type MyObj = Record<string, string>;
  const EmptyObj: Record<string, unknown> = {};

  EmptyObj.isUser = true;

  const obj1: MyObj = {
    a: "aa",
    b: "bb",
    c: "cc",
  };
}
