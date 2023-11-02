{
  // Spread Operator
  const bros1 = ["bro1", "bro2", "bro3"];
  const bros2 = ["bro4", "bro5", "bro6"];

  //  X bros1.push(bros2); X //
  bros1.push(...bros2);

  const mentors = {
    typescript: "mentor1",
    redux: "mentor2",
    dbms: "mentor3",
  };

  const mentors2 = {
    prisma: "mentor4",
    next: "mentor5",
    cloud: "mentor6",
  };

  const mentorList = {
    ...mentors,
    ...mentors2,
  };

  // Rest Operator
  const greetFriends = (...friends: string[]) => {
    friends.forEach((friend: string) => console.log(friend));
  };

  greetFriends("friend1", "friend2", "friend3", "unknown friend");
}
