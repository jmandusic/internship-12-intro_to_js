"use strict";

const developers = [
  {
    id: 1,
    name: "Ante Antic",
    workStatus: workStatusEnum.EMPLOYED,
    worksAt: "Facebook",
    type: developerTypeEnum.FRONTEND,
    knowableProgrammingLanguages: ["JavaScript"],
  },
  {
    id: 2,
    name: "Josip Josipic",
    workStatus: workStatusEnum.FREELANCER,
    worksAt: null,
    type: developerTypeEnum.FULLSTACK,
    knowableProgrammingLanguages: ["C#", "JavaScript", "C++", "Python"],
  },
  {
    id: 3,
    name: "Luka Lukic",
    workStatus: workStatusEnum.EMPLOYED,
    worksAt: "Rimac Automobili",
    type: developerTypeEnum.BACKEND,
    knowableProgrammingLanguages: ["C#", "Python", "Java"],
  },
  {
    id: 4,
    name: "Vinko Vinkic",
    workStatus: workStatusEnum.UNEMPLOYED,
    worksAt: null,
    type: developerTypeEnum.FULLSTACK,
    knowableProgrammingLanguages: ["C#", "JavaScript", "Python"],
  },
];

sortObjectsArray(developers);

const companies = [
  {
    id: 1,
    name: "Rimac Automobili",
    employees: [3],
  },
  {
    id: 2,
    name: "Ericsson Nikola Tesla",
    employees: [],
  },
  {
    id: 3,
    name: "Hattrick Developers",
    employees: [],
  },
  {
    id: 4,
    name: "Facebook",
    employees: [1],
  },
];

sortObjectsArray(companies);

const programmingLanguages = [
  {
    id: 1,
    name: "JavaScript",
  },
  {
    id: 2,
    name: "C#",
  },
  {
    id: 3,
    name: "Python",
  },
  {
    id: 4,
    name: "C++",
  },
  {
    id: 5,
    name: "Java",
  },
];

sortObjectsArray(programmingLanguages);
