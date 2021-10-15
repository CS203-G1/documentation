---
sidebar_position: 1
---

# Employee
## Employee Attributes
| Attributes             | Type       | Description                                                      |
| ---------------------- | ---------- | ---------------------------------------------------------------- |
| **Id**                 | UUID       | UUID generated automatically by Spring Boot                      |
| **Department**         | Department | Department that employee belongs to                              |
| **Name**               | String     | Name of employee                                                 |
| **Vaccination Status** | Enum       | Current vaccination status of the employee (i.e. Not Vaccinated) |
| **Vaccination Brand**  | Enum       | Brand of vaccine taken by employee (i.e. Pfizer)                 |
| **Health Status**      | Enum       | Current health status of the employee (i.e. Healthy)             |
| **Created At**         | Date       | Timestamp at which employee is created (in YY-DD-MM HH:MM:SS)    |


## Get Employee
Get a Employee in the database using the Department ID, Employee Id

|                          |                                                           |
| ------------------------ | --------------------------------------------------------- |
| **URL**                  | `/api/departmentId/{departmentId}/employees/{employeeId}` |
| **Method**               | `GET`                                                     |
| **Auth required**        | No                                                        |
| **Permissions required** | None                                                      |


### Success Response

**Code** : `200 OK`

**Content examples**

Response will reflect back a representation of the newly added Company.

For an Employee with ID `a88f8825-34e2-44cb-a9f5-4482c82bbc48` on the local database.


```json
{
    "id": "a88f8825-34e2-44cb-a9f5-4482c82bbc48",
    "name": "Employee 1",
    "vaccinationStatus": "SECOND_DOSE",
    "vaccineBrand": "PFIZER",
    "healthStatus": "HEALTHY"
}
```

### Error Response 

**Code** : `404 Not Found`

**Content examples**

Response will reflect back a string that explains what resource is not found.

For an Employee with ID `c598568a-f66e-4d23-99e5-97b54b412107` from Department with ID `a88f8825-34e2-44cb-a9f5-4482c82bbc48` is not found on the local database.

```
Unable to find employee c598568a-f66e-4d23-99e5-97b54b412107 from department a88f8825-34e2-44cb-a9f5-4482c82bbc48
```

---

## Get All Employees
Get all Employees to belongs to a certain Department that exist in the database

|                          |                                               |
| ------------------------ | --------------------------------------------- |
| **URL**                  | `/api/departmentId/{departmentId}/employees/` |
| **Method**               | `GET`                                         |
| **Auth required**        | No                                            |
| **Permissions required** | None                                          |


### Success Response

**Code** : `200 OK`

**Content examples**

Response will reflect back an array of representation of Employees.

For a local database with 3 Employees.


```json
[
    {
    "id": "a88f8825-34e2-44cb-a9f5-4482c82bbc48",
    "name": "Employee 1",
    "vaccinationStatus": "SECOND_DOSE",
    "vaccineBrand": "PFIZER",
    "healthStatus": "HEALTHY"
    },
    {
    "id": "97a59744-ad57-4de7-ba87-0bf00c618c36",
    "name": "Employee 2",
    "vaccinationStatus": "FIRST_DOSE",
    "vaccineBrand": "MODERNA",
    "healthStatus": "HEALTHY"
    }
]
```

### Error Response 

**Code** : `404 Not Found`

**Content examples**

Response will reflect back a string that explains what resource is not found.

For a Department with ID `c598568a-f66e-4d23-99e5-97b54b412107` that has no employees on the local database.

```
Department c598568a-f66e-4d23-99e5-97b54b412107 has no employees.
```