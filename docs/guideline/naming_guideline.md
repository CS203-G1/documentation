# Naming Convention Guideline
Note: These are just some recommended guideline for the engineers in order to standardize the coding conventions. It is up to the engineers discretion to practice these conventions as of when they see fit. 

## Naming Conventions

### Methods

Format: `actionSubjectByAttribute`

Casing: `camelCasing`

Examples: 
- `getCompanyById` represents the method that returns a `Company` and the company is found by the attribute Id
- `getRosterByWorkLocationAndDate` represents the method that returns a `Roster` and the roster is found by the attributes `WorkLocation` and Date.

### Models and Classes 

Format: `ModelName`

Casing: `CamelCasing` 

Examples: 
- `WorkLocation` represents the class for work locations

### Response Model

Format: `ModelNameResponseModel`

Casing: `CamelCasing` 

Examples: 
- `WorkStatisticResponseModel` represents the response model that is converted from `WorkStatistic` Object.

### Instance Variables

Format: `contextModelName`

Casing: `camelCasing`

Examples:
- `updatedEmployee` represents an instance of `Employee`object that is updated

### Exception 

Format: `SubjectDescriptionException`

Casing: `CamelCasing` 

Examples:
- `EmployeeNotFoundException` represents a runtime error where an `Employee` object is not found.

### Services

Format: `ModelNameService` and `ModelNameServiceImpl`

Casing: `CamelCasing` 

Examples:
- `RosterService` represents the service class for `Roster` model.
- `RosterServiceImpl` represents the service class implementation that implements `RosterService`.

### Tasks

Format: `ContextSubjectActionTask`

Casing: `CamelCasing` 

Examples:
- `ScheduledEmployeeLoggingTask` represents a scheduled task that is responsible for logging employee models

### Validator
Format: `AttributeValidator`

Casing: `CamelCasing` 

Examples:
- `DateTimes Validator` represents a validator for `DateTimes` attribute

## API 

### Resources

A resource can be a singleton or a collection

Format: `parents/{parentId}/subjects` or `parents/{parentId}/subjects/{subjectId}`

Example URI that represents the endpoint to get all employees belonging to a company with Id 1
```sh 
GET companies/1/employees
``` 

Restrictions: Maximum 1 parent and resource URI should not exceed 2 levels

More on writing resources: 

#### Use nouns
URIs should refer to the resources but not the actions done to the resources. Actions are defined in the HTTP request methods definition

Example for getting employee with Id 2 from roster with Id 1
```sh
GET rosters/1/employees/2
```

#### Parents before child 
In our URI, parents always come before the child, where child has a foreign key pointing to parent

Example for getting employees by company Id
```sh
GET companies/1/employees
```

**Wrong** example for getting employees by company Id
```sh
GET employees/companies/1
```

#### Context comes later 
In our URI, context comes later.

Example for getting a daily work statistic by company Id
```sh
GET companies/1/work-statistics/daily
```

#### Use forward slashes and no trailing slashes
**Wrong** examples for getting a daily work statistic by company Id
```sh
GET companies/1/work-statistics/daily/
GET companies\1\work-statistics\daily
```

#### Use hyphens (-) only for resource names with more than one word 
Example for getting a daily work statistic by company Id
```sh
GET companies/1/work-statistics/daily
```

Wrong Example for getting a daily work statistic by company Id
```sh
GET companies/1/work_statistics/daily
GET companies/1/workstatistics/daily
```
#### Use only lowercases 
Wrong Example for getting a daily work statistic by company Id
```sh
GET COMPANIES/1/work_statistics/daily
```