"use strict";

function developerFilterActions() {
  let run = true;
  while (run == true) {
    let option = printDeveloperFilterMenu();
    switch (option) {
      case null:
        return false;
      case "0":
        run = false;
        break;
      case "1":
        filterByType();
        break;
      case "2":
        filterByProgrammingLanguage();
        break;
      case "3":
        filterByWorkStatus();
        break;
      default:
        alert("Undefined input, please try again");
        break;
    }
    return true;
  }
}
