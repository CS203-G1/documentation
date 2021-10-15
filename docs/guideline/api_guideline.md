# API Convention Guidelines

Note: These are just some recommended guideline for the engineers in order to standardize the coding conventions. It is up to the engineers discretion to practice these conventions as of when they see fit. 

## API Conventions

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