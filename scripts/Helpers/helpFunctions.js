"use strict";

function permissionToContinue() {
  return confirm(
    "Are you sure you want to continue?"
  )
}

function autoIncrement(objectsArray) {
  let newId = 0;
  objectsArray.forEach((element) => {
    if (element.id > newId) {
      newId = element.id;
    }
  });
  return newId + 1;
}

function sortObjectsArray(objectsArray) {
  objectsArray.sort(function (a, b) {
    let firstName = a.name.toLowerCase();
    let secondName = b.name.toLowerCase();
    if (firstName < secondName) {
      return -1;
    }
    if (firstName > secondName) {
      return 1;
    }
    return 0;
  });
}

function formatDeveloperName(name) {
  let formattedName = "";
  let firstAndLastName = name.toLowerCase().split(" ");
  firstAndLastName.forEach((string) => {
    formattedName += string.charAt(0).toUpperCase() + string.slice(1) + " ";
  });
  return formattedName.slice(0,-1);
}

function checkIfLanguageExists(language) {
  let programmingLanguagesNames = programmingLanguages.map(
    (programmingLanguage) => programmingLanguage.name);
  if (!programmingLanguagesNames.includes(language)) {
    return false;
  }
  return true;
}

function removeDeveloperFromCompany(developerId, companyName, companies) {
  let company = companies.filter(company => company.name == companyName);

  for (let index = 0; index < company[0].employees.length; index++) {
    if (company[0].employees[index] === developerId) {
      company[0].employees.splice(index, 1);
    }
  }
}

function changeDevelopersWorkStatus(companyToRemove, developers) {
  let developersInCompanyToRemove = developers.filter(developer => developer.worksAt === companyToRemove.name);
  developersInCompanyToRemove.forEach(developer => {
    developer.workStatus = workStatusEnum.UNEMPLOYED;
    developer.worksAt = "unemployed";
  });
}

function changeDevelopersWorksAt(companyName, newCompanyName, developers) {
  let developersInCompanyToUpdate = developers.filter(developer => developer.worksAt === companyName);
  developersInCompanyToUpdate.forEach(developer => {
    developer.worksAt = newCompanyName;
  });
}

function removeProgrammingLanguageFromDeveloper(programmingLanguageName, developers) {
  let developersProgrammingLanguages = developers.map(developer => developer.knowableProgrammingLanguages);

  developersProgrammingLanguages.forEach(array => {
    for (let index = 0; index < array.length; index++) {
      if (array[index] === programmingLanguageName) {
        array.splice(index, 1);
      }
    }
  });
}

