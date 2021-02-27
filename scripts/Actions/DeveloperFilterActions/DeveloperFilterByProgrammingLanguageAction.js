"use strict";

function filterByProgrammingLanguage() {
  let programmingLanguage = prompt("Input programming language you want to filter developers by");
  if (!programmingLanguages
      .map((language) => language.name)
      .includes(programmingLanguage)
  ) {
    alert("Programming language not found");
    return;
  }

  let developersUsingProgrammingLanguage = [];
  developers.forEach(developer => {
      developer.knowableProgrammingLanguages.forEach(language => {
          if (language === programmingLanguage) {
              developersUsingProgrammingLanguage.push(developer);
          }
      });
  });

  printDevelopersByProgrammingLanguage(developersUsingProgrammingLanguage, programmingLanguage);

}
