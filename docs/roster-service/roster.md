---
sidebar_position: 5
---

#  Roster
## Roster Attributes
| Attributes         | Type         | Description                                   |
| ------------------ | ------------ | --------------------------------------------- |
| **Id**             | UUID         | UUID generated automatically by Spring Boot   |
| **date**           | LocalDate    | The date the roster is for                    |
| **WorkLocation**   | WorkLocation | The work location this roster is for          |
| **RosterEmployee** | Set          | Set of RosterEmployee objects this Roster has |

--- 

## Add Roster 
Add an Roster that belongs to a WorkLocation to the database with basic information 

|                          |                                                       |
| ------------------------ | ----------------------------------------------------- |
| **URL**                  | `/work-locations/{workLocationId}/rosters` |
| **Method**               | `POST`                                                |
| **Auth required**        | Yes                                                   |
| **Permissions required** | `ROLE_EMPLOYER`                                       |

**Data constraints**

```json
{
  "date": "YYYY-MM-DD"
}
```

### Success Response

**Code** : `200 OK`

**Content examples**

Response will reflect back a representation of the newly added Roster.

For a Roster with ID `c0c13d3a-060b-4149-8b33-cc2d20a22ced` and for the date of `2021-09-16` on the local database.

Note that `id` is auto-generated and of `UUID` datatype


```json
{
  "id": "c0c13d3a-060b-4149-8b33-cc2d20a22ced",
  "date": "2021-09-16"
}

```