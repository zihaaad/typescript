{
  // type gaurds

  // typeof --> type gaurd
  type Alphanumeric = string | number;
  const add = (param1: Alphanumeric, param2: Alphanumeric): Alphanumeric => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  const result1 = add(2, 3);
  console.log(result1);

  // in gaurd

  type NormalUser = {
    name: string;
  };
  type AdminUser = {
    name: string;
    role: "Admin";
  };

  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`My Name is ${user.name} and my role is ${user.role}`);
    } else {
      console.log(`My Name is ${user.name}`);
    }
  };

  const normalUser: NormalUser = {
    name: "Mr. Normal Bhaii",
  };

  const adminUser: AdminUser = {
    name: "Mr. Admin Bhaii",
    role: "Admin",
  };

  getUser(normalUser);
}
