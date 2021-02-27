"use strict";

function programmingLanguageActions() {
  let run = true;
  while (run == true) {
    let option = printProgrammingLanguageMenu();
    switch (option) {
      case null:
        return false;
      case "0":
        run = false;
        break;
      case "1":
        //createProgrammingLanguage();
        break;
      case "2":
        //readProgrammingLanguage();
        break;
      case "3":
        //updateProgrammingLanguage();
        break;
      case "4":
        //deleteProgrammingLanguage();
        break;
      default:
        alert("Undefined input, please try again");
        break;
    }
    return true;
  }
}
