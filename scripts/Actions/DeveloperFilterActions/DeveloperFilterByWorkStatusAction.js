"use strict";

function filterByWorkStatus() {
  let employedDevelopers = developers
    .filter((developer) => developer.workStatus === workStatusEnum.EMPLOYED)
    .map((developer) => developer.name);
  let unemployedDevelopers = developers
    .filter((developer) => developer.workStatus === workStatusEnum.UNEMPLOYED)
    .map((developer) => developer.name);
  let freelanceDevelopers = developers
    .filter((developer) => developer.workStatus === workStatusEnum.FREELANCER)
    .map((developer) => developer.name);

  printDevelopersByWorkStatus(
    employedDevelopers,
    unemployedDevelopers,
    freelanceDevelopers
  );
}
