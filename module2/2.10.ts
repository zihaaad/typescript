{
  // mapped types

  const arrOfNumbers: number[] = [1, 4, 5];
  // const arrOfStrings: string[] = ['1', '3', '5']

  const arrOfStrings: string[] = arrOfNumbers.map((number) =>
    number.toString()
  );

  console.log(arrOfNumbers, arrOfStrings);

  type AreaNumber = {
    height: number;
    width: number;
    age: number;
  };

  type Height = AreaNumber["height"]; // look up type

  //   type AreaString = {
  //     height: string;
  //     width: string;
  //     };

  // T => { height: string, width: number }

  type AreaString<T> = {
    [key in keyof T]: T[key];
  };

  const area1: AreaString<{height: string; width: number}> = {
    height: "100",
    width: 50,
  };
}
