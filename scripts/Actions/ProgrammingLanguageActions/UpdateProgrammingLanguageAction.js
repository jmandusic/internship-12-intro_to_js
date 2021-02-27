"use strict";

function updateProgrammingLanguage() {
  let programmingLanguageName = printProgrammingLanguagesNames(programmingLanguages);
  let programmingLanguagesNames = programmingLanguages.map((programmingLanguage) => programmingLanguage.name);
  if (!programmingLanguagesNames.includes(programmingLanguageName)) {
    alert("Programming language not found");
    return;
  }

  let programmingLanguage = undefined;
  programmingLanguages.forEach((element) => {
    if (element.name === programmingLanguageName) {
      programmingLanguage = element;
    }
  });

  let alreadyExists = true;
  while (alreadyExists) {
    programmingLanguage.name = prompt("Programming language name: ");
    if (!programmingLanguagesNames.includes(programmingLanguage.name)) {
      alreadyExists = false;
    } else {
      alert("This programming language already exists");
    }
  }

  sortObjectsArray(programmingLanguages);
  alert("Successfully modified");
}
