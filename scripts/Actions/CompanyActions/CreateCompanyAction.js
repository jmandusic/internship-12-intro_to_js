"use strict";

function createCompany() {
  let newCompanyId = autoIncrement(companies);

  let newCompanyName = undefined;
  let alreadyExists = true;
  while (alreadyExists) {
    newCompanyName = prompt("Company name: ");
    if (!companies.map((company) => company.name).includes(newCompanyName)) {
      alreadyExists = false;
    } else {
      alert("This company name already exists, try again");
    }
  }

  let company = {
    id: newCompanyId,
    name: newCompanyName,
    employees: [],
  };

  companies.push(company);
  sortObjectsArray(companies);
  alert("Successfully added !");
}
