{
  // constraints
  const addCourseToStudent = <
    T extends {id: number; name: string; email: string}
  >(
    student: T
  ) => {
    const course = "Next Level Web Development";
    return {
      ...student,
      course,
    };
  };

  const student = addCourseToStudent({
    id: 111,
    name: "Mr. Man",
    email: "man@gmail.com",
  });

  const student1 = addCourseToStudent({
    id: 222,
    name: "Mr. Man II",
    email: "man1@gmail.com",
    devType: "NLWD",
  });
  const student2 = addCourseToStudent({
    id: 333,
    name: "Mr. Man III",
    email: "man2@gmail.com",
    hasWatch: "Apple Watch",
  });
}
