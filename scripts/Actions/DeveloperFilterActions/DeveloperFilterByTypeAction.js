"use strict";

function filterByType() {
  let backendDevelopers = developers
    .filter((developer) => developer.type === developerTypeEnum.BACKEND)
    .map((developer) => developer.name);
  let frontendDevelopers = developers
    .filter((developer) => developer.type === developerTypeEnum.FRONTEND)
    .map((developer) => developer.name);
  let fullstackDevelopers = developers
    .filter((developer) => developer.type === developerTypeEnum.FULLSTACK)
    .map((developer) => developer.name);

  printDevelopersByType(
    backendDevelopers,
    frontendDevelopers,
    fullstackDevelopers
  );
}
