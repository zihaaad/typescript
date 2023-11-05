{
  // Conditional Type
  type A1 = number;
  type B1 = string;

  type x = A1 extends null ? true : false; // conditional type
  type y = A1 extends null ? true : B1 extends undefined ? undefined : any;

  type Sheikh = {
    bike: string;
    car: string;
    ship: string;
    plane: string;
  };

  // has car / bike / ship / tractor
  type CheckVehicle<T> = T extends keyof Sheikh ? true : false;

  type HasPlane = CheckVehicle<"plane">;
}
