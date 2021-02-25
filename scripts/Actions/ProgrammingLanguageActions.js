function ProgrammingLanguageActions() {
  let run = true;
  while (run == true) {
    let option = PrintProgrammingLanguageMenu();
    switch (option) {
      case null:
        return false;
      case "0":
        run = false;
        break;
      case "1":
        //CreateProgrammingLanguage();
        break;
      case "2":
        //ReadProgrammingLanguage();
        break;
      case "3":
        //UpdateProgrammingLanguage();
        break;
      case "4":
        //DeleteProgrammingLanguage();
        break;
      default:
        alert("Undefined input, please try again");
        break;
    }
    return true;
  }
}
