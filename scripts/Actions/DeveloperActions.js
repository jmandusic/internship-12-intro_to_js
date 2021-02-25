function DeveloperActions() {
  let run = true;
  while (run == true) {
    let option = PrintDeveloperMenu();
    switch (option) {
      case null:
        return false;
      case "0":
        run = false;
        break;
      case "1":
        //CreateDeveloper();
        break;
      case "2":
        //ReadDeveloper();
        break;
      case "3":
        //UpdateDeveloper();
        break;
      case "4":
        //DeleteDeveloper();
        break;
      default:
        alert("Undefined input, please try again");
        break;
    }
    return true;
  }
}
