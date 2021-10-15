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