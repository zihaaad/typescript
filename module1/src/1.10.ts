// Union Type
type FrontendDeveloper = "Noob Developer" | "Pro Developer";
type FullStackDeveloper = "Frontend Developer" | "Expert Developer";
type Developer = FrontendDeveloper | FullStackDeveloper;

const newDeveloper: FrontendDeveloper = "Pro Developer";

type User = {
  name: string;
  email?: string;
  gender: "Male" | "Female";
  bloodGroup: "O+" | "A+" | "B+" | "AB+";
};

const user: User = {
  name: "zihad",
  gender: "Male",
  bloodGroup: "B+",
};

type FrontendDev = {
  skills: string[];
  designation1: "Frontend Developer";
};

type BackendDev = {
  skills: string[];
  designation2: "Backend Developer";
};

type FullStackDev = FrontendDev & BackendDev;

const fullStackDeveloper: FullStackDev = {
  skills: ["HTML", "CSS", "JS", "REACT", "NEXT", "EXPRESS", "MONGODB"],
  designation1: "Frontend Developer",
  designation2: "Backend Developer",
};
