---
sidebar_position: 4
---

# Database Design

## Roster Database
![Diagram](/img/roster_db.png)

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