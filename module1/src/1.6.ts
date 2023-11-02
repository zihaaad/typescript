{
  // Normal function
  // Arrow function

  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  add(4, 10);
  // add(2, '2')

  const addArrow = (num1: number, num2: number): number => num1 + num2;

  // object --> function --> method
  const User = {
    name: "Zihad",
    balance: 0,
    addBlance(balance: number): string {
      return `My New Balance Is: ${this.balance + balance}`;
    },
  };

  const arr: number[] = [1, 3, 4];
  const newArray: number[] = arr.map(
    (element: number): number => element * element
  );
}
