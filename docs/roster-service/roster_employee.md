---
sidebar_position: 4
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
## Add Roster Employee
Add a Roster Employee that belongs to a Roster and Employee to the database with basic information 

|                          |                                                  |
| ------------------------ | ------------------------------------------------ |
| **URL**                  | `/api/rosters/{rosterId}/employees/{employeeId}` |
| **Method**               | `POST`                                           |
| **Auth required**        | Yes                                              |
| **Permissions required** | `ROLE_EMPLOYER`                                  |

**Data constraints**

```json
{
  "fromDateTime": "YYYY-MM-DDThh:mm:ss.sss",
  "toDateTime": "YYYY-MM-DDThh:mm:ss.sss"
}
```

### Success Response

**Code** : `200 OK`

**Content examples**

Response will reflect back a representation of the newly added Roster Employee.

For a Roster Employee with ID `243fbb89-7fba-4e8f-a25f-44d439d6a0f0` and for the date of `2021-09-16` on the local database.

Note that `id` is auto-generated and of `UUID` datatype


```json
{
  "id": "243fbb89-7fba-4e8f-a25f-44d439d6a0f0",
  "roster": {
    "id": "bff4ccd3-bae4-4c2f-a8bd-fdc703df8c25",
    "date": "2021-09-16"
  },
  "employee": {
    "id": "a88f8825-34e2-44cb-a9f5-4482c82bbc48",
    "name": "Employee 1",
    "vaccinationStatus": "SECOND_DOSE",
    "vaccinationBrand": "PFIZER",
    "healthStatus": "HEALTHY"
  },
  "fromDateTime": "2022-09-16T15:00:00",
  "toDateTime": "2022-09-16T16:00:00",
  "currentHealthStatus": "HEALTHY"
}

```

### Error Response 

**Code** : `400 Bad Request`

**Content examples**

Response will reflect back an error when the Request Body does not conform to the constraints.

For a Roster with invalid Date format

```json
{
  "timestamp": "2021-10-03T04:33:28.940+00:00",
  "status": 400,
  "error": "Bad Request",
  "path": "/rosters/bff4ccd3-bae4-4c2f-a8bd-fdc703df8c25/employees/a88f8825-34e2-44cb-a9f5-4482c82bbc48"
}
```
---
## Update Roster Employee
Update a Roster Employee that belongs to a Roster and Employee to the database with basic information 

|                          |                                                  |
| ------------------------ | ------------------------------------------------ |
| **URL**                  | `/api/rosters/{rosterId}/employees/{employeeId}` |
| **Method**               | `PUT`                                            |
| **Auth required**        | Yes                                              |
| **Permissions required** | `ROLE_EMPLOYER`                                  |

**Data constraints**

```json
{
  "fromDateTime": "2022-09-16T15:00:00.000",
  "toDateTime": "2022-09-16T17:00:00.000"
}
```

### Success Response

**Code** : `200 OK`

**Content examples**

Response will reflect back a representation of the newly updated Roster Employee.

For a Roster Employee with ID `243fbb89-7fba-4e8f-a25f-44d439d6a0f0` and for the date of `2021-09-16` on the local database.

Note that `id` is auto-generated and of `UUID` datatype


```json
{
  "id": "243fbb89-7fba-4e8f-a25f-44d439d6a0f0",
  "roster": {
    "id": "bff4ccd3-bae4-4c2f-a8bd-fdc703df8c25",
    "date": "2021-09-16"
  },
  "employee": {
    "id": "a88f8825-34e2-44cb-a9f5-4482c82bbc48",
    "name": "Employee 1",
    "vaccinationStatus": "SECOND_DOSE",
    "vaccinationBrand": "PFIZER",
    "healthStatus": "HEALTHY"
  },
  "fromDateTime": "2022-09-16T15:00:00",
  "toDateTime": "2022-09-16T17:00:00",
  "currentHealthStatus": "HEALTHY"
}

```

### Error Response 

**Code** : `400 Bad Request`

**Content examples**

Response will reflect back an error when the Request Body does not conform to the constraints.

For a Roster with invalid Date format

```json
{
  "timestamp": "2021-10-03T04:35:43.208+00:00",
  "status": 400,
  "error": "Bad Request",
  "path": "/rosters/bff4ccd3-bae4-4c2f-a8bd-fdc703df8c25/employees/a88f8825-34e2-44cb-a9f5-4482c82bbc48"
}
```

---
## Delete Roster
Delete a Roster Employee that belongs to a Roster and Employee to the database with basic information 

|                          |                                                  |
| ------------------------ | ------------------------------------------------ |
| **URL**                  | `/api/rosters/{rosterId}/employees/{employeeId}` |
| **Method**               | `DELETE`                                         |
| **Auth required**        | Yes                                              |
| **Permissions required** | `ROLE_EMPLOYER`                                  |

### Success Response

**Code** : `200 OK`

### Error Response 

**Code** : `404 Not Found`

**Content examples**

Response will reflect back an error when the RosterEmployee, Employee or Roster does not exist in the database.

```json
{
  "timestamp": "2021-10-03T04:37:25.820+00:00",
  "status": 404,
  "error": "Not Found",
  "path": "/rosters/bff4ccd3-bae5-4c2f-a8bd-fdc703df8c25/employees/a88f8825-34e2-44cb-a9f5-4482c82bbc48"
}
```

---