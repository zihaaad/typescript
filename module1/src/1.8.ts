{
  // Destructuring (Object, Array)

  // Object
  const user = {
    id: 343,
    name: {
      firstName: "Zihadul",
      lastName: "Islam",
    },
    contactNo: 8800000222,
    country: "Bangladesh",
  };

  const {
    contactNo: phoneNum,
    name: {firstName},
  } = user;

  // Array
  const myFriends = [
    "friend1",
    "friend2",
    "friend3",
    "friend4",
    "friend5",
    "friend6",
  ];

  const [, , , bestFriend, ...rest] = myFriends;
}
