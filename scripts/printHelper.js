function PrintMenu() {
  return prompt(
    "Select option: \n" +
      "0) Exit from the application \n" +
      "1) Developer actions \n" +
      "2) Companies actions \n" +
      "3) Programming languages actions \n"
  );
}

function PrintDeveloperMenu() {
  return prompt(
    "Select option for developers: \n" +
      "0) Exit from the menu \n" +
      "1) Create developer \n" +
      "2) Read developer \n" +
      "3) Update developer \n" +
      "4) Delete developer \n"
  );
}

function PrintCompanyMenu() {
  return prompt(
    "Select option for companies: \n" +
      "0) Exit from the menu \n" +
      "1) Create company \n" +
      "2) Read company \n" +
      "3) Update company \n" +
      "4) Delete company \n"
  );
}

function PrintProgrammingLanguageMenu() {
  return prompt(
    "Select option for programming languages: \n" +
      "0) Exit from the menu \n" +
      "1) Create programming language \n" +
      "2) Read programming language \n" +
      "3) Update programming language \n" +
      "4) Delete programming language \n"
  );
}
