{
  // ternary operator || optional chaining || nullish coalescing operator

  const age: number = 18;
  if (age >= 18) {
    console.log("adult");
  } else {
    console.log("not adult");
  }

  const isAdult = age >= 18 ? "adult" : "not adult";
  console.log({isAdult});

  // nullish coalescing operator
  // null / undefined --> decision
  const isAuthenticated = "";

  const result1 = isAuthenticated ?? "GUEST";
  const result2 = isAuthenticated ? isAuthenticated : "GUEST";
  console.log(result1, result2);

  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      permanentAddress?: string;
    };
  };

  const user: User = {
    name: "Zihad",
    address: {
      city: "Dhaka",
      road: "Awe Road 261",
      presentAddress: "Dhaka Town",
    },
  };

  const permanentAddress =
    user?.address?.permanentAddress ?? "no permanent address";
  console.log({permanentAddress});
}
