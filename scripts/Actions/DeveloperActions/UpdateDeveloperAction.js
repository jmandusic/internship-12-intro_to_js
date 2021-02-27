"use strict";

function updateDeveloper() {
  let developerName = printDeveloperNames(developers);
  if (!developers.map((developer) => developer.name).includes(developerName)) {
    alert("Developer not found");
    return;
  }

  let developer = undefined;
  developers.forEach((element) => {
    if (element.name === developerName) {
      developer = element;
    }
  });

  let isOptionDefined = false;
  while (!isOptionDefined) {
    let option = printDeveloperUpdateMenu();
    switch (option) {
      case "1":
        developer.name = formatDeveloperName(prompt("Developer new name: "));
        isOptionDefined = true;
        break;
      case "2":
        developer.workStatus = workStatus();
        if (developer.workStatus === workStatusEnum.EMPLOYED) {
          developer.worksAt = selectWork(developer.id);
        } else {
          developer.worksAt = "unemployed";
        }
        isOptionDefined = true;
        break;
      case "3":
        if (developer.workStatus === workStatusEnum.EMPLOYED) {
          removeDeveloperFromCompany(developer.id, developer.worksAt, companies);
          developer.worksAt = selectWork(developer.id);                  
        } else {
          alert(developer.name + " is not employed");
        }
        isOptionDefined = true;
        break;
      case "4":
        developer.type = developerType();
        isOptionDefined = true;
        break;
      case "5":
        developer.knowableProgrammingLanguages = getKnowableProgrammingLanguages();
        isOptionDefined = true;
        break;
      default:
        alert("Undefined input, please try again");
        break;
    }
  }

  sortObjectsArray(developers);
  printDeveloper(developers, developer.name);
}
