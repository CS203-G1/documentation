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

A department can have many work locations.

### Roster Employee
| Attributes              | Type          | Description                                                |
| ----------------------- | ------------- | ---------------------------------------------------------- |
| **Id**                  | UUID          | UUID generated automatically by Spring Boot                |
| **RosterId**            | UUID          | The Roster this RosterEmployee object is associated with   |
| **EmployeeId**          | UUID          | The Employee this RosterEmployee object is associated with |
| **FromDateTime**        | LocalDateTime | Start time of the Roster for a given Employee              |
| **ToDateTime**          | LocalDateTime | End time of the Roster for a given Employee                |
| **CurrentHealthStatus** | enum          | The health status of the Employee at that point in timeÎ   |

Roster Employee is a many-to-many relationship entity between Roster and Employee.

Each Roster Employee must belong to one and only one Employee and one and only one Roster.

### Roster 
| Attributes         | Type      | Description                                 |
| ------------------ | --------- | ------------------------------------------- |
| **Id**             | UUID      | UUID generated automatically by Spring Boot |
| **WorkLocationId** | UUID      | The work location this roster is for        |
| **date**           | LocalDate | The date the roster is for                  |

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