"use strict";

let run = true;
while (run == true) {
  let option = PrintMenu();
  switch (option) {
    case null:
      run = false;
      break;
    case "0":
      alert("Closing the application...");
      run = false;
      break;
    case "1":
      run = DeveloperActions();
      break;
    case "2":
      run = CompanyActions();
      break;
    case "3":
      run = ProgrammingLanguageActions();
      break;
    default:
      alert("Undefined input, please try again");
      break;
  }
}
