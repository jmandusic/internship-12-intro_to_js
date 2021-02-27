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

