---
sidebar_position: 1
---

# Coding Guideline
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

## Directories