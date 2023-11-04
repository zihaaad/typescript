{
  // Generic Type

  type GenericArray<T> = Array<T>;

  // const rollNumbers: number[] = [2, 6, 8]
  const rollNumbers: GenericArray<number> = [2, 6, 8];

  // const mentors: string[] = ['M1', 'M2', 'M3']
  const mentors: GenericArray<string> = ["M1", "M2", "M3"];
  const boolArr: GenericArray<boolean> = [true, false, true];

  const add = (x: number, y: number) => x + y;

  const user: GenericArray<{name: string; age: number}> = [
    {
      name: "zihad",
      age: 19,
    },
    {
      name: "unknown",
      age: 110,
    },
  ];

  add(30, 20);

  // Generic Tuple

  type GenericTuple<X, Y> = [X, Y];

  const manush: GenericTuple<string, string> = ["Mr.X", "Mrs.Y"];

  const UserWithID: GenericTuple<number, {name: string; email: string}> = [
    1234,
    {name: "zihad", email: "zihad@gmail.com"},
  ];
}
