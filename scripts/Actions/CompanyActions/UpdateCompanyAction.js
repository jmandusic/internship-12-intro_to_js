"use strict";

function updateCompany() {
  let companyName = printCompanies(companies);
  let companyNames = companies.map((company) => company.name);
  if (!companyNames.includes(companyName)) {
    alert("Company not found");
    return;
  }

  let companyToUpdate = undefined;
  companies.forEach((company) => {
    if (company.name === companyName) {
      companyToUpdate = company;
    }
  });

  let alreadyExists = true;
  while (alreadyExists) {
    companyToUpdate.name = prompt("Update company name: ");
    if (!companyNames.includes(companyToUpdate.name)) {
      alreadyExists = false;
    } else {
      alert("This company already exists");
    }
  }

  changeDevelopersWorksAt(companyName, companyToUpdate.name, developers);

  sortObjectsArray(companies);
  alert("Successfully modified");
}