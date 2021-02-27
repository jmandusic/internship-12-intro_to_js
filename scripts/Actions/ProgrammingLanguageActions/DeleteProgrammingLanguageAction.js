"use strict";

function deleteProgrammingLanguage() {
  let programmingLanguageName = printProgrammingLanguagesNames(programmingLanguages);
  let programmingLanguagesNames = programmingLanguages.map((programmingLanguage) => programmingLanguage.name);
  if (!programmingLanguagesNames.includes(programmingLanguageName)) {
    alert("Programming language not found");
    return;
  }

  let programmingLanguageToRemove = undefined;
  programmingLanguages.forEach((language) => {
    if (language.name === programmingLanguageName) {
      programmingLanguageToRemove = language;
    }
  });

  for (let index = 0; index < programmingLanguages.length; index++) {
    if (programmingLanguages[index] === programmingLanguageToRemove && permissionToContinue()) {
      programmingLanguages.splice(index, 1);
      removeProgrammingLanguageFromDeveloper(programmingLanguageName, developers);
      alert("Programming language succesfully removed");
      return;
    }
  }
}
