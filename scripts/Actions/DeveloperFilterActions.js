function DeveloperFilterActions() {
    let run = true;
    while (run == true) {
      let option = PrintDeveloperFilterMenu();
      switch (option) {
        case null:
          return false;
        case "0":
          run = false;
          break;
        case "1":
          //ByType();
          break;
        case "2":
          //ByProgrammingLanguage();
          break;
        case "3":
          //ByWorkStatus();
          break;
        default:
          alert("Undefined input, please try again");
          break;
      }
      return true;
    }
  }
  