const developers = [
  {
    id: undefined,
    fullName: "Luka Lukic",
    workStatus: workStatusEnum.EMPLPOYED,
    worksAt: "Rimac Automobili",
    type: developerTypeEnum.BACKEND,
    knowableProgrammingLanguages: [
      {
        id: undefined,
        name: "C#",
      },
      {
        id: undefined,
        name: "Python",
      },
      {
        id: undefined,
        name: "Java",
      },
    ],
  },
  {
    id: undefined,
    fullName: "Josip Josipic",
    workStatus: workStatusEnum.FREELANCER,
    worksAt: null,
    type: developerTypeEnum.FULLSTACK,
    knowableProgrammingLanguages: [
      {
        id: undefined,
        name: "C#",
      },
      {
        id: undefined,
        name: "Python",
      },
      {
        id: undefined,
        name: "JavaScript",
      },
      {
        id: undefined,
        name: "C++",
      },
    ],
  },
  {
    id: undefined,
    fullName: "Ante Antic",
    workStatus: workStatusEnum.EMPLPOYED,
    worksAt: "Facebook",
    type: developerTypeEnum.FRONTEND,
    knowableProgrammingLanguages: [
      {
        id: undefined,
        name: "JavaScript",
      },
    ],
  },
  {
    id: undefined,
    fullName: "Vinko Vinkic",
    workStatus: workStatusEnum.UNEMPLOYED,
    worksAt: null,
    type: developerTypeEnum.FULLSTACK,
    knowableProgrammingLanguages: [
      {
        id: undefined,
        name: "C#",
      },
      {
        id: undefined,
        name: "Python",
      },
      {
        id: undefined,
        name: "JavaScript",
      },
    ],
  },
];

autoIncrement(developers);

const companies = [
  {
    id: undefined,
    name: "Rimac Automobili",
  },
  {
    id: undefined,
    name: "Ericsson Nikola Tesla",
  },
  {
    id: undefined,
    name: "Hattrick Developers",
  },
  {
    id: undefined,
    name: "Facebook",
  },
];

autoIncrement(companies);

const programmingLanguages = [
  {
    id: undefined,
    name: "JavaScript",
  },
  {
    id: undefined,
    name: "C#",
  },
  {
    id: undefined,
    name: "Python",
  },
  {
    id: undefined,
    name: "C++",
  },
  {
    id: undefined,
    name: "Java",
  },
];

autoIncrement(programmingLanguages);


