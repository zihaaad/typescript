{
  // Basic Data Type (string, number, boolean, undefined, null, array, tuple)

  // string
  let firstName: string = "zihad";
  // number
  let roll: number = 313;
  // boolean
  let isAdmin: boolean = true;
  // undefined
  let x: undefined = undefined;
  // null
  let y: null = null;

  let z: number;

  z = 2429;
  // z = "string";
  // z = true;

  // Array
  let friends: string[] = ["adnan", "ayon"];
  let eligibleRollList: number[] = [1, 2, 3, 4, 5];
  // eligibleRollList.push("zzzz");

  // tuple --> array --> order -> type of values
  let coordinates: [number, number] = [1, 5];
  let ageName: [number, string, boolean] = [19, "zihad", true];
  ageName[1] = "zihaad";
}
