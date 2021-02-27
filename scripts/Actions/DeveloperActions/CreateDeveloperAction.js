"use strict";

function createDeveloper() {
  let newDeveloperId = autoIncrement(developers);

  let newDeveloperFullName = undefined;
  let alreadyExists = true;
  while (alreadyExists) {
    newDeveloperFullName = formatDeveloperName(prompt("Developer full name: "));
    if (!developers.map((developer) => developer.name).includes(newDeveloperFullName)) {
      alreadyExists = false;
    } else {
      alert("This developer name already exists, try again");
    }
  }

  let newDeveloperWorkStatus = workStatus();
  let newDeveloperWorksAt = "unemployed";
  if (newDeveloperWorkStatus === workStatusEnum.EMPLOYED) {
    newDeveloperWorksAt = selectWork(newDeveloperId);
  }

  let newDeveloperType = developerType();
  let newDeveloperProgrammingLanguages = getKnowableProgrammingLanguages();

  let developer = {
    id: newDeveloperId,
    name: newDeveloperFullName,
    workStatus: newDeveloperWorkStatus,
    worksAt: newDeveloperWorksAt,
    type: newDeveloperType,
    knowableProgrammingLanguages: newDeveloperProgrammingLanguages,
  };

  developers.push(developer);
  sortObjectsArray(developers);
  alert("Successfully added !");
}

function workStatus() {
  while (true) {
    let option = printDeveloperWorkStatus();
    switch (option) {
      case "1":
        return workStatusEnum.EMPLOYED;
      case "2":
        return workStatusEnum.UNEMPLOYED;
      case "3":
        return workStatusEnum.FREELANCER;
      default:
        alert("Undefined input, please try again");
        break;
    }
  }
}

function selectWork(developerId) {
  let isWorkDefined = false;
  while (!isWorkDefined) {
    let worksAt = printCompanies(companies);
    let jobCompany = companies.filter(company => company.name === worksAt);
    if (companies.map((company) => company.name).includes(worksAt)) {
      jobCompany[0].employees.push(developerId);
      return worksAt;
    } else {
      alert("Undefined input, please try again");
    }
  }
}

function developerType() {
  while (true) {
    let option = printDeveloperTypes();
    switch (option) {
      case "1":
        return developerTypeEnum.BACKEND;
      case "2":
        return developerTypeEnum.FRONTEND;
      case "3":
        return developerTypeEnum.FULLSTACK;
      default:
        alert("Undefined input, please try again");
        break;
    }
  }
}

function getKnowableProgrammingLanguages() {
  let isLanguageDefined = false;
  let newDeveloperProgrammingLanguages = [];
  while (!isLanguageDefined) {
    let arrayOfLanguages = printProgrammingLanguages(programmingLanguages);
    newDeveloperProgrammingLanguages = arrayOfLanguages.split(" ");
    for (
      let index = 0;
      index < newDeveloperProgrammingLanguages.length;
      index++
    ) {
      let check = checkIfLanguageExists(
        newDeveloperProgrammingLanguages[index]
      );
      if (check) {
        isLanguageDefined = true;
      } else {
        alert("Undefined input, please try again");
        isLanguageDefined = false;
        break;
      }
    }
  }
  return newDeveloperProgrammingLanguages;
}
