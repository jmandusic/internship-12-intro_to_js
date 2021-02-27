"use strict";

function developerActions() {
  let run = true;
  while (run == true) {
    let option = printDeveloperMenu();
    switch (option) {
      case null:
        return false;
      case "0":
        run = false;
        break;
      case "1":
        createDeveloper();
        break;
      case "2":
        readDeveloper();
        break;
      case "3":
        updateDeveloper();
        break;
      case "4":
        deleteDeveloper();
        break;
      default:
        alert("Undefined input, please try again");
        break;
    }
    return true;
  }
}
