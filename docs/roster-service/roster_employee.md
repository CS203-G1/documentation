---
sidebar_position: 6
---

#  Roster Employee
## Roster Employee Attributes
| Attributes              | Type          | Description                                                |
| ----------------------- | ------------- | ---------------------------------------------------------- |
| **Id**                  | UUID          | UUID generated automatically by Spring Boot                |
| **Roster**              | Roster        | The Roster this RosterEmployee object is associated with   |
| **Employee**            | Employee      | The Employee this RosterEmployee object is associated with |
| **FromDateTime**        | LocalDateTime | Start time of the Roster for a given Employee              |
| **ToDateTime**          | LocalDateTime | End time of the Roster for a given Employee                |
| **CurrentHealthStatus** | enum          | The health status of the Employee at that point in timeÎ   |


--- 