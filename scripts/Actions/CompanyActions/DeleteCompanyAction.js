"use strict";

function deleteCompany() {
  let companyName = printCompanies(companies);
  let companiesNames = companies.map((company) => company.name);
  if (!companiesNames.includes(companyName)) {
    alert("Company not found");
    return;
  }

  let companyToRemove = undefined;
  companies.forEach((company) => {
    if (company.name === companyName) {
      companyToRemove = company;
    }
  });

  for (let index = 0; index < companies.length; index++) {
    if (companies[index] === companyToRemove && permissionToContinue()) {
      companies.splice(index, 1);
      changeDevelopersWorkStatus(companyToRemove, developers);
      alert("Company succesfully removed");
      return;
    }
  }
}