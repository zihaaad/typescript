{
  // Generic constraint with keyof operator

  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship"; // manually

  type Owner2 = keyof Vehicle;

  const person1: Owner2 = "car";

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const user = {
    name: "Mr. MAN",
    age: 25,
    address: "fdp",
  };

  const car = {
    model: "Ferrari",
    year: 2021,
  };

  const result1 = getPropertyValue(car, "year");

  user["age"];
}
