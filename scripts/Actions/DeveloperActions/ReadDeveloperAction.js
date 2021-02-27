"use strict";

function readDeveloper() {
  let developerName = printDeveloperNames(developers);
  if (!developers.map((developer) => developer.name).includes(developerName)) {
    alert("Developer not found");
    return;
  }

  printDeveloper(developers, developerName);
}
