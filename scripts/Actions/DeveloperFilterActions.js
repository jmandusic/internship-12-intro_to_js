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
        //byType();
        break;
      case "2":
        //byProgrammingLanguage();
        break;
      case "3":
        //byWorkStatus();
        break;
      default:
        alert("Undefined input, please try again");
        break;
    }
    return true;
  }
}
