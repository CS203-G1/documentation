---
sidebar_position: 4
---

#  Employee
## Employee Attributes
| Attributes            | Type       | Description                                               |
| --------------------- | ---------- | --------------------------------------------------------- |
| **Id**                | UUID       | UUID generated automatically by Spring Boot               |
| **RosterEmployee**    | Set        | Set of RosterEmployee objects this Employee is related to |
| **Department**        | Department | The department this employee is assigned to               |
| **Name**              | String     | Employee's name                                           |
| **VaccinationStatus** | enum       | Enum type of vaccination status for a particular employee |
| **VaccinationBrand**  | enum       | Enum type of the vaccine brand for a particular employee  |
| **HealthStatus**      | enum       | Current health status of the employee                     |

--- 

## Add Employee 
Add an Employee that belongs to a Department to the database with basic information 

|                          |                                         |
| ------------------------ | --------------------------------------- |
| **URL**                  | `/departments/{departmentId}/employees` |
| **Method**               | `POST`                                  |
| **Auth required**        | Yes                                     |
| **Permissions required** | `ROLE_EMPLOYER`                         |

**Data constraints**

```json
{
    "name": "[1 to 30 chars]",
    "vaccinationStatus": "non-null",
    "vaccinationBrand": "non-null",
    "healthStatus": "non-null"
}
```

### Success Response

**Code** : `200 OK`

**Content examples**

Response will reflect back a representation of the newly added Employee.

For a Department with ID `a73002eb-becc-411f-9182-e7f01b632632` and name `Employee` on the local database.

Note that `id` is auto-generated and of `UUID` datatype


```json
{
  "id": "a73002eb-becc-411f-9182-e7f01b632632",
  "name": "Employee 1",
  "vaccinationStatus": "SECOND_DOSE",
  "vaccinationBrand": "PFIZER",
  "healthStatus": "HEALTHY"
}

```

### Error Response 

**Code** : `400 Bad Request`

**Content examples**

Response will reflect back an error when the Request Body does not conform to the constraints.

For an Employee with a null enum value

```json
{
  "timestamp": "2021-10-03T03:29:23.389+00:00",
  "status": 400,
  "error": "Bad Request",
  "path": "/departments/692b1d0e-fe49-4b05-8b01-f79607da7632/employees"
}
```

---