---
sidebar_position: 4
---

#  Employee
## Employee Attributes
| Attributes            | Type                | Description                                               |
| --------------------- | ------------------- | --------------------------------------------------------- |
| **Id**                | UUID                | UUID generated automatically by Spring Boot               |
| **RosterEmployee**    | Set| Set of RosterEmployee objects this Employee is related to |
| **Department**        | Department          | The department this employee is assigned to               |
| **Name**              | String              | Employee's name                                           |
| **VaccinationStatus** | enum                | Enum type of vaccination status for a particular employee |
| **VaccinationBrand**  | enum                | Enum type of the vaccine brand for a particular employee  |
| **HealthStatus**      | enum                | Current health status of the employee                     |