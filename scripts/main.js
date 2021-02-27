"use strict";

(function () {
  let run = true;
  while (run == true) {
    let option = printMenu();
    switch (option) {
      case null:
        run = false;
        break;
      case "0":
        alert("Closing the application...");
        run = false;
        break;
      case "1":
        run = developerActions();
        break;
      case "2":
        run = companyActions();
        break;
      case "3":
        run = programmingLanguageActions();
        break;
      case "4":
        run = developerFilterActions();
        break;
      default:
        alert("Undefined input, please try again");
        break;
    }
  }
})();
