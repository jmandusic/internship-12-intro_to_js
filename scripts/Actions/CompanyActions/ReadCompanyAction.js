"use strict";

function readCompany() {
  let companyName = printCompanies(companies);
  if (!companies.map((company) => company.name).includes(companyName)) {
    alert("Company not found");
    return;
  }

  printCompany(companyName, companies, developers);
}
