"use strict";

function updateProgrammingLanguage() {
  let programmingLanguageName = printProgrammingLanguagesNames(programmingLanguages);
  let programmingLanguagesNames = programmingLanguages.map((programmingLanguage) => programmingLanguage.name);
  if (!programmingLanguagesNames.includes(programmingLanguageName)) {
    alert("Programming language not found");
    return;
  }

  let programmingLanguage = undefined;
  programmingLanguages.forEach((language) => {
    if (language.name === programmingLanguageName) {
      programmingLanguage = language;
    }
  });

  let alreadyExists = true;
  while (alreadyExists) {
    programmingLanguage.name = prompt("Update programming language name: ");
    if (!programmingLanguagesNames.includes(programmingLanguage.name)) {
      alreadyExists = false;
    } else {
      alert("This programming language already exists");
    }
  }

  sortObjectsArray(programmingLanguages);
  alert("Successfully modified");
}
