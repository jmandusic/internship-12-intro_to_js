"use strict";

function deleteDeveloper() {
  let developerName = printDeveloperNames(developers);
  if (!developers.map((developer) => developer.name).includes(developerName)) {
    alert("Developer not found");
    return;
  }

  let developerToRemove = undefined;
  developers.forEach((developer) => {
    if (developer.name === developerName) {
      developerToRemove = developer;
    }
  });

  for (let index = 0; index < developers.length; index++) {
    if (developers[index] === developerToRemove && permissionToContinue()) {
      developers.splice(index, 1);
      removeDeveloperFromCompany(developerToRemove.id, developerToRemove.worksAt, companies);
      alert("Developer succesfully removed");
      return;
    }
  }
}
