"use strict";

function printMenu() {
  return prompt(
    "Select option: \n" +
      "0) Exit from the application \n" +
      "1) Developer actions \n" +
      "2) Companies actions \n" +
      "3) Programming languages actions \n" +
      "4) Developer filter \n"
  );
}

function printDeveloperMenu() {
  return prompt(
    "Select option for developers: \n" +
      "0) Exit from the menu \n" +
      "1) Create developer \n" +
      "2) Read developer \n" +
      "3) Update developer \n" +
      "4) Delete developer \n"
  );
}

function printCompanyMenu() {
  return prompt(
    "Select option for companies: \n" +
      "0) Exit from the menu \n" +
      "1) Create company \n" +
      "2) Read company \n" +
      "3) Update company \n" +
      "4) Delete company \n"
  );
}

function printProgrammingLanguageMenu() {
  return prompt(
    "Select option for programming languages: \n" +
      "0) Exit from the menu \n" +
      "1) Create programming language \n" +
      "2) Read programming language \n" +
      "3) Update programming language \n" +
      "4) Delete programming language \n"
  );
}

function printDeveloperFilterMenu() {
  return prompt(
    "Select option for developer filter: \n" +
      "0) Exit from the menu \n" +
      "1) By type \n" +
      "2) By programming language \n" +
      "3) By work status \n"
  );
}

function printDeveloperWorkStatus() {
  return prompt(
    "Select option for developer work status: \n" +
      "1) Employed \n" +
      "2) Unemployed \n" +
      "3) Freelancer \n"
  );
}

function printDeveloperTypes() {
  return prompt(
    "Select option for developer type: \n" +
      "1) Backend \n" +
      "2) Frontend \n" +
      "3) Fullstack \n"
  );
}

function printDeveloperUpdateMenu() {
  return prompt(
    "Select option for developer update: \n" +
      "1) Name \n" +
      "2) Work status \n" +
      "3) Works at \n" +
      "4) Type \n" +
      "5) Knowable languages"
  );
}

function printDeveloper(developers, developerName) {
  developers.forEach((developer) => {
    if (developer.name === developerName) {
      let knowableLanguagesString = developer.knowableProgrammingLanguages.join(",");
      alert(
        " Developer id: " +
          developer.id +
          "\n Name: " +
          developer.name +
          "\n Work status: " +
          developer.workStatus +
          "\n Works at: " +
          developer.worksAt +
          "\n Type: " +
          developer.type +
          "\n Knowable languages: " +
          knowableLanguagesString
      );
    }
  });
}

function printDeveloperNames(developers) {
  let developersNames = developers.map((developer) => developer.name);
  let developersNamesString = developersNames.join("\n");
  return prompt("Select developer name: \n" + developersNamesString);
}

function printCompanies(companies) {
  let companiesNames = companies.map((company) => company.name);
  let companiesNamesString = companiesNames.join("\n");
  return prompt("Select company: \n" + companiesNamesString);
}

function printCompany(companyName, companies, developers) {
  let companyToRead = companies.filter(company => company.name === companyName);
  let companyEmployees = [];

  companyToRead[0].employees.forEach(developerId => {
    developers.forEach(developer => {
      if (developerId === developer.id) {
        companyEmployees.push(developer.name);
      }
    });
  });

  companyEmployees = companyEmployees.join(", ");

  alert(
    " Company id: " +
      companyToRead[0].id +
      "\n Name: " +
      companyToRead[0].name +
      "\n Employees: " + companyEmployees      
  );
}

function printProgrammingLanguages(programmingLanguages) {
  let programmingLanguagesNames = programmingLanguages.map(
    (programmingLanguage) => programmingLanguage.name
  );
  let programmingLanguagesNamesString = programmingLanguagesNames.join("\n");
  return prompt(
    "Select programming language: \n" +
      programmingLanguagesNamesString +
      "\n" +
      "To input more languages split them with whitespace ” ” \n For example: ”Java C# C++” "
  );
}

function printProgrammingLanguagesNames(programmingLanguages) {
  let programmingLanguagesNames = programmingLanguages.map(
    (programmingLanguage) => programmingLanguage.name
  );
  let programmingLanguagesNamesString = programmingLanguagesNames.join("\n");
  return prompt(
    "Select programming language: \n" + programmingLanguagesNamesString
  );
}

function printProgrammingLanguage(programmingLanguageName, programmingLanguages) {
  programmingLanguages.forEach(language => {
    if (language.name === programmingLanguageName) {
      alert(
        " Programming language id: " +
          language.id +
          "\n Name: " +
          programmingLanguageName
      );
    }
  });
}

function printDevelopersByType(backend, frontend, fullstack) {
  let backendToString = backend.join(", ");
  let frontendToString = frontend.join(", ");
  let fullstackToString = fullstack.join(", ");

  alert(
    "BACKEND DEVELOPERS: \n" +
      backendToString +
      "\n-------------------------------" +
      "\nFRONTEND DEVELOPERS: \n" +
      frontendToString +
      "\n-------------------------------" +
      "\nFULSTACK DEVELOPERS: \n" +
      fullstackToString
  );
}

function printDevelopersByWorkStatus(employed, unemployed, freelancers) {
  let employedToString = employed.join(", ");
  let unemployedToString = unemployed.join(", ");
  let freelancersToString = freelancers.join(", ");

  alert(
    "EMPLOYED DEVELOPERS: \n" +
      employedToString +
      "\n-------------------------------" +
      "\nUNEMPLOYED DEVELOPERS: \n" +
      unemployedToString +
      "\n-------------------------------" +
      "\nFREELANCERS: \n" +
      freelancersToString
  );
}

function printDevelopersByProgrammingLanguage(developers, programmingLanguage) {
  let developersNames = developers.map((developer) => developer.name);
  let developersNamesToString = developersNames.join(", ");

  alert(
    "Developers using " + programmingLanguage + ":\n" + developersNamesToString
  );
}
