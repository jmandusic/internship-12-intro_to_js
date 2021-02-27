"use strict";

function companyActions() {
  let run = true;
  while (run == true) {
    let option = printCompanyMenu();
    switch (option) {
      case null:
        return false;
      case "0":
        run = false;
        break;
      case "1":
        createCompany();
        break;
      case "2":
        readCompany();
        break;
      case "3":
        updateCompany();
        break;
      case "4":
        deleteCompany();
        break;
      default:
        alert("Undefined input, please try again");
        break;
    }
    return true;
  }
}
