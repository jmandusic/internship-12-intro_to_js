"use strict";

function createProgrammingLanguage() {
  let newProgrammingLanguageId = autoIncrement(programmingLanguages);
  let newProgrammingLanguageName = prompt("Programming language name: ");

  let programmingLanguage = {
    id: newProgrammingLanguageId,
    name: newProgrammingLanguageName,
  };

  programmingLanguages.push(programmingLanguage);
  sortObjectsArray(programmingLanguages);
  alert("Successfully added !");
}
