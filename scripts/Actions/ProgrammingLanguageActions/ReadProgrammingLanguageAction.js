"use strict";

function readProgrammingLanguage() {
    let programmingLanguageName = printProgrammingLanguagesNames(programmingLanguages);
    if (!programmingLanguages.map((language) => language.name).includes(programmingLanguageName)) {
      alert("Programming language not found");
      return;
    }
  
    printProgrammingLanguage(programmingLanguageName, programmingLanguages);
}
