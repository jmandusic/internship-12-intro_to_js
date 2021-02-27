"use strict";

function createProgrammingLanguage() {
  let newProgrammingLanguageId = autoIncrement(programmingLanguages);

  let newProgrammingLanguageName = undefined;
  let alreadyExists = true;
  while (alreadyExists) {
    newProgrammingLanguageName = prompt("Programming language name: ");
    if (
      !programmingLanguages
        .map((language) => language.name)
        .includes(newProgrammingLanguageName)
    ) {
      alreadyExists = false;
    } else {
      alert("This programming language name already exists, try again");
    }
  }

  let programmingLanguage = {
    id: newProgrammingLanguageId,
    name: newProgrammingLanguageName,
  };

  programmingLanguages.push(programmingLanguage);
  sortObjectsArray(programmingLanguages);
  alert("Successfully added !");
}
