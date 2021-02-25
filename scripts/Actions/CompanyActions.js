function CompanyActions() {
  let run = true;
  while (run == true) {
    let option = PrintCompanyMenu();
    switch (option) {
      case null:
        return false;
      case "0":
        run = false;
        break;
      case "1":
        //CreateCompany();
        break;
      case "2":
        //ReadCompany();
        break;
      case "3":
        //UpdateCompany();
        break;
      case "4":
        //DeleteCompany();
        break;
      default:
        alert("Undefined input, please try again");
        break;
    }
    return true;
  }
}
