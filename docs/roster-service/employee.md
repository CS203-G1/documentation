---
sidebar_position: 3
---

#  Employee
## Employee Attributes
| Attributes            | Type       | Description                                               |
| --------------------- | ---------- | --------------------------------------------------------- |
| **Id**                | UUID       | UUID generated automatically by Spring Boot               |
| **RosterEmployee**    | Set        | Set of RosterEmployee objects this Employee is related to |
| **Department**        | Department | The department this employee is assigned to               |
| **Company**           | Company    | The company this employee belongs to                      |
| **Name**              | String     | Employee's name                                           |
| **VaccinationStatus** | enum       | Enum type of vaccination status for a particular employee |
| **VaccinationBrand**  | enum       | Enum type of the vaccine brand for a particular employee  |
| **HealthStatus**      | enum       | Current health status of the employee                     |
| **IsInCompany**       | boolean    | Is the employee in the company                            |

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
    "email": "valid email",  
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
  "email": "sample@example.com",
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

## Add Employer
Add an Employer that belongs to a Department to the database with basic information 

|                          |                                         |
| ------------------------ | --------------------------------------- |
| **URL**                  | `/departments/{departmentId}/employers` |
| **Method**               | `POST`                                  |
| **Auth required**        | Yes                                     |
| **Permissions required** | `ROLE_SUPER_USER`                       |

For request body, sample responses refer to Add Employee.

---

## Add Employee To Work Location
Assign a Work Location to a particular Employee

|                          |                                                           |
| ------------------------ | --------------------------------------------------------- |
| **URL**                  | `/work-locations/{workLocationId}/employees/{employeeId}` |
| **Method**               | `POST`                                                    |
| **Auth required**        | Yes                                                       |
| **Permissions required** | `ROLE_EMPLOYER`                                           |

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

**Code** : `404 Not Found`

**Content examples**

Response will reflect back an error when there is no such Work Location found.

For a missing Work Location with supposed ID `missing-id`

```json
Could not find work location missing-id.
```

--- 

## Update Employee 
Update an Employee that belongs to a Department to the database with basic information 

|                          |                                                      |
| ------------------------ | ---------------------------------------------------- |
| **URL**                  | `/departments/{departmentId}/employees/{employeeId}` |
| **Method**               | `PUT`                                                |
| **Auth required**        | Yes                                                  |
| **Permissions required** | `ROLE_EMPLOYER`                                      |

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

Response will reflect back a representation of the newly updated Employee.

For a Department with ID `a73002eb-becc-411f-9182-e7f01b632632` and name `Employee` on the local database with updated healthStatus of `ILL`.

Note that `id` is auto-generated and of `UUID` datatype


```json
{
  "id": "a73002eb-becc-411f-9182-e7f01b632632",
  "name": "Employee 1",
  "vaccinationStatus": "SECOND_DOSE",
  "vaccinationBrand": "PFIZER",
  "healthStatus": "ILL"
}

```

### Error Response 

**Code** : `404 Bad Request`

**Content examples**

Response will reflect back an error when the Department or Employee does not exist in the database.

```json
Could not find employee <missing-id>
```

---
## Delete Employee
Delete a Employee that belongs to a Department using the Employee Id and Department Id

|                          |                                                          |
| ------------------------ | -------------------------------------------------------- |
| **URL**                  | `/api/departments/{departmentId}/employees/{employeeId}` |
| **Method**               | `DELETE`                                                 |
| **Auth required**        | Yes                                                      |
| **Permissions required** | `ROLE_EMPLOYER`                                          |

### Success Response

**Code** : `200 OK`

### Error Response 

**Code** : `404 Not Found`

**Content examples**

Response will reflect back an error when the Department or Employee does not exist in the database.

```json
Could not find employee <missing-id>
```

---

## Get Employee
Get a Employee to the database using the Employee Id and Department Id

|                          |                                                          |
| ------------------------ | -------------------------------------------------------- |
| **URL**                  | `/api/departments/{departmentId}/employees/{employeeId}` |
| **Method**               | `GET`                                                    |
| **Auth required**        | Yes                                                      |
| **Permissions required** | `ROLE_EMPLOYEE`                                          |


### Success Response

**Code** : `200 OK`

**Content examples**

Response will reflect back a representation of the Employee.

For a Department with ID `a73002eb-becc-411f-9182-e7f01b632632` and name `Employee` on the local database.


```json
{
  "id": "a73002eb-becc-411f-9182-e7f01b632632",
  "email": "samples@example.com",
  "name": "Employee 1",
  "vaccinationStatus": "SECOND_DOSE",
  "vaccinationBrand": "PFIZER",
  "healthStatus": "HEALTHY"
}
```

### Error Response 

**Code** : `404 Not Found`

**Content examples**

Response will reflect back an error when the Department or Employee does not exist in the database.

```json
Could not find employee <missing-id>
```

---

## Get All Employees from Company
Get all Employees from a Company the database using the Company Id

|                          |                                        |
| ------------------------ | -------------------------------------- |
| **URL**                  | `/api/companies/{companyId}/employees` |
| **Method**               | `GET`                                  |
| **Auth required**        | Yes                                    |
| **Permissions required** | `ROLE_EMPLOYER`                        |


### Success Response

**Code** : `200 OK`

**Content examples**

Response will reflect back an array of representation of the Employees from the Company.

For a company with two employees:

```json
[
  {
    "id": "236935a2-b490-4b2e-8779-efc3e984fb34",
    "name": "Employee 1",
    "vaccinationStatus": "SECOND_DOSE",
    "vaccinationBrand": "PFIZER",
    "healthStatus": "HEALTHY"
  },
  {
    "id": "b4748ffd-dc09-4ede-b928-dc0ea585f023",
    "name": "Employee 2",
    "vaccinationStatus": "SECOND_DOSE",
    "vaccinationBrand": "PFIZER",
    "healthStatus": "HEALTHY"
  }
]
```

### Error Response 

**Code** : `404 Not Found`

**Content examples**

Response will reflect back an error when the Company does not exist in the database.

```json
Could not find company <missing-id>
```

---

## Get Employee Cognito Status
Get Cognito Status for a particular employee

|                          |                                              |
| ------------------------ | -------------------------------------------- |
| **URL**                  | `/api/employees/{employeeId}/cognito-status` |
| **Method**               | `GET`                                        |
| **Auth required**        | Yes                                          |
| **Permissions required** | `ROLE_EMPLOYER`                              |


### Success Response

**Code** : `200 OK`

**Content examples**

Response will reflect back a string that represents the status

For an employee that has been confirmed in the Cognito Pool

```json
CONFIRMED
```

For more information, please refer to [Java getUserStatus documentations](https://javadoc.io/static/com.amazonaws/aws-java-sdk-cognitoidp/1.11.601/com/amazonaws/services/cognitoidp/model/AdminGetUserResult.html#getUserStatus--).

### Error Response 

**Code** : `404 Not Found`

**Content examples**

Response will reflect back an error when the Employee does not exist in the database.
```json
Could not find employee <missing-id>
```

---