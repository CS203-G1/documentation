# Testing Convention guidelines

Note: These are just some recommended guideline for the engineers in order to standardize the coding conventions. It is up to the engineers discretion to practice these conventions as of when they see fit.

## Testing Conventions

### Test Classes

Format: `ClassTest`

Casing: `CamelCasing`

Examples:

- `CompanyServiceTest` represents the class used to conduct unit tests for CompanyService

### Method Unit Test

Format: `MethodName_Scenario_ExpectedResult`

Casing: `CamelCasing`

Examples:

- `getCompanyById_CompanyExists_ReturnCompany` in `CompanyServiceTest` represents the unit test for the method CompanyService#getCompanyById, where the `Company` is returned.
- `getCompanyByID_CompanyDoesNotExist_ThrowException` in `CompanyServiceTest` represents the unit test for the method CompanyService#getCompanyById, where the `Company` with the given Id is not found, and an exception is thrown.
