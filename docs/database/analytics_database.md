---
sidebar_position: 1
---


# Analytics Database

## Schema Diagram
![Diagram](/img/analytics_db.png)

## Tables
### Company
| Attributes    | Type     | Description                                    |
| ------------- | -------- | ---------------------------------------------- |
| **Id**        | UUID     | UUID generated automatically by Spring Boot    |
| **Name**      | String   | Company name given by the user                 |
| **CreatedAt** | DateTime | The date and time when the company was created |

The database can house a list of companies as it is hosted on cloud and we want to serve our product to many companies as our client. 

A company can have many departments and employees.

### Department 
| Attributes    | Type     | Description                                              |
| ------------- | -------- | -------------------------------------------------------- |
| **Id**        | UUID     | UUID generated automatically by Spring Boot              |
| **CompanyId** | UUID     | UUID representing the company this department belongs to |
| **Name**      | String   | Company name given by the user                           |
| **CreatedAt** | DateTime | The date and time the department was created             |

Each department can only belong to one and only one company.

A department can have many work locations.

### Employee
| Attributes            | Type    | Description                                               |
| --------------------- | ------- | --------------------------------------------------------- |
| **Id**                | UUID    | UUID generated automatically by Spring Boot               |
| **DepartmentId**      | UUID    | The department this employee is assigned to               |
| **CompanyId**         | UUID    | The company this employee belongs to                      |
| **Name**              | String  | Employee's name                                           |
| **VaccinationStatus** | int     | Enum type of vaccination status for a particular employee |
| **VaccinationBrand**  | int     | Enum type of the vaccine brand for a particular employee  |
| **HealthStatus**      | int     | Current health status of the employee                     |
| **IsInCompany**       | boolean | Is the employee in the company                            |

Each employee can belong to one and only one company and one and only one department. 

An employee can be assigned to multiple rosters but can only be assigned to one roster every day. 



### Roster Employee
| Attributes              | Type          | Description                                                |
| ----------------------- | ------------- | ---------------------------------------------------------- |
| **Id**                  | UUID          | UUID generated automatically by Spring Boot                |
| **RosterId**            | UUID          | The Roster this RosterEmployee object is associated with   |
| **EmployeeId**          | UUID          | The Employee this RosterEmployee object is associated with |
| **FromDateTime**        | LocalDateTime | Start time of the Roster for a given Employee              |
| **ToDateTime**          | LocalDateTime | End time of the Roster for a given Employee                |
| **CurrentHealthStatus** | enum          | The health status of the Employee at that point in time??   |

Roster Employee is a many-to-many relationship entity between Roster and Employee.

Each Roster Employee must belong to one and only one Employee and one and only one Roster.

### Roster 
| Attributes         | Type      | Description                                 |
| ------------------ | --------- | ------------------------------------------- |
| **Id**             | UUID      | UUID generated automatically by Spring Boot |
| **WorkLocationId** | UUID      | The work location this roster is for        |
| **Date**           | LocalDate | The date the roster is for                  |

Each roster belongs to one and only one work location. 

A roster can have many employees assigned to it.

### Work Location
| Attributes       | Type   | Description                                                 |
| ---------------- | ------ | ----------------------------------------------------------- |
| **Id**           | UUID   | UUID generated automatically by Spring Boot                 |
| **DepartmentId** | UUID   | The department this work location belongs to                |
| **CompanyId**    | UUID   | The company of the department this work location belongs to |
| **Name**         | String | Company name given by the user                              |
| **Address**      | String | Address of the the work location                            |
| **Capacity**     | int    | Maximum capacity of the work location                       |

Each work location can only belong to one and only one department. By transitive relationship, that means it also can only belong to one and only one company. Think of an office branch.

### Statistic
| Attributes       | Type     | Description                                            |
| ---------------- | -------- | ------------------------------------------------------ |
| **Id**           | UUID     | UUID generated automatically by Spring Boot            |
| **NumOfCovid**   | int      | Daily number of employees who are infected by COVID-19 |
| **NumOfHealthy** | int      | Daily number of employees who are healthy              |
| **NumOfSick**    | int      | Daily number of employees who are sick                 |
| **CreatedAt**    | DateTime | The date and time the statistic entry was created      |

### Covid Data
| Attributes                       | Type     | Description                                                                                          |
| -------------------------------- | -------- | ---------------------------------------------------------------------------------------------------- |
| **Id**                           | UUID     | UUID generated automatically by Spring Boot                                                          |
| **Hospitalised**                 | int      | Total number of hospitalised Singapore citizens                                                      |
| **HospitalisedICU**              | int      | Total number of hospitalised Singapore citizens who are in ICU                                       |
| **NewCases**                     | int      | Daily number of new COVID-19 cases                                                                   |
| **NewCommunityCases**            | int      | Daily number of new community cases                                                                  |
| **NewDormitoryCases**            | int      | Daily number of new dormitory cases                                                                  |
| **NewImportedCases**             | int      | Daily number of new imported cases                                                                   |
| **RequireOxygenSupplementation** | int      | Total number of Singapore citizens who are infected by COVID-19 that requires oxygen supplementation |
| **TotalAtLeastOneDose**          | int      | Total number of Singapore citizens who took at least one vaccine dose                                |
| **TotalCompletedFullRegime**     | int      | Total number of Singapore citizens who completed both vaccine dose                                   |
| **TotalCovidCases**              | int      | Total number of COVID-19 cases in Singapore                                                          |
| **TotalDeaths**                  | int      | Total number of COVID-19 deaths in Singapore                                                         |
| **TotalRecovered**               | int      | Total number of recovered COVID-19 patients in Singapore                                             |
| **TotalSwabs**                   | int      | Total number of COVID-19 swab tests in Singapore                                                     |
| **TotalVaccinationDose**         | int      | Total number of COVID-19 vaccination doses in Singapore                                              |
| **CreatedAt**                    | DateTime | The date and time the department was created                                                         |