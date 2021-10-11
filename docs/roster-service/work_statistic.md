---
sidebar_position: 7
---

#  Work Statistics

## WorkingStatisticResponseModel Attributes
| Attributes      | Type | Description                                                         |
| --------------- | ---- | ------------------------------------------------------------------- |
| **companyId**   | UUID | UUID generated automatically by Spring Boot with references Company |
| **onsiteCount** | int  | Number of Employees on site                                         |
| **remoteCount** | int  | Number of Employees working remotely                                |

## SummaryResponseModel Attributes
| Attributes               | Type | Description                                                                                    |
| ------------------------ | ---- | ---------------------------------------------------------------------------------------------- |
| **employeesCount**       | int  | Total Number of Employees                                                                      |
| **employeesCountChange** | int  | Percentage change in Total Number of Employees from previous 7 days                            |
| **leaveCount**           | int  | Total Number of Employees on leave                                                             |
| **leaveCountChange**     | int  | Percentage change in Total Number of Employees on leave from previous 7 days                   |
| **onsiteCount**          | int  | Total Number of Employees on site                                                              |
| **onsiteCountChange**    | int  | Percentage change in Total Number of Employees on site from previous 7 days                    |
| **covidCount**           | int  | Number of Employees diagnosed positive with Covid-19                                           |
| **covidCountChange**     | int  | Percentage change in Number of Employees diagnosed positive with Covid-19 from previous 7 days |
--- 

## Get Daily Work Statistics By Company
Get number of employees on site and number of employees working remotely for a company

|                          |                                                |
| ------------------------ | ---------------------------------------------- |
| **URL**                  | `/companies/{companyId}/work-statistics/daily` |
| **Method**               | `GET`                                          |
| **Auth required**        | Yes                                            |
| **Permissions required** | `ROLE_EMPLOYER`                                |

### Success Response

**Code** : `200 OK`

**Content examples**

Response will reflect back a representation of the Work Statistics.

For a Company with ID `14f671b0-511e-43e4-86bb-6828f7a8e12d` and `10` employees working on site and `10` employees working remotely. 

```json
{
  "companyId": "14f671b0-511e-43e4-86bb-6828f7a8e12d",
  "onsiteCount": 10,
  "remoteCount": 10
}
```

### Error Response 

**Code** : `404 Not Found`

**Content examples**

Response will reflect back a string that explains what resource is not found.

For a Company with ID `27b06c9d-a553-4a88-a681-b7cbc045a9e5` is not found on the local database.

```
Could not find company 27b06c9d-a553-4a88-a681-b7cbc045a9e5.
```

--- 

## Get Onsite Employees List By Company
Get List of Employees who are working on site

|                          |                                                 |
| ------------------------ | ----------------------------------------------- |
| **URL**                  | `/companies/{companyId}/work-statistics/onsite` |
| **Method**               | `GET`                                           |
| **Auth required**        | Yes                                             |
| **Permissions required** | `ROLE_EMPLOYER`                                 |

### Success Response

**Code** : `200 OK`

**Content examples**

Response will reflect back a representation of the Work Location.

For a Company with ID `14f671b0-511e-43e4-86bb-6828f7a8e12d` and `n` employees working on site.

Note: Response is truncated to only show 1 employee for documentations sake

```json
[
  {
    "id": "6149483b-5c17-45ae-9564-34e7b40dbfd7",
    "department": {
      "id": "49c13ace-ca48-44bb-a9e9-8e3c330862db",
      "company": {
        "id": "14f671b0-511e-43e4-86bb-6828f7a8e12d",
        "name": "name",
        "createdAt": "YYYY-MM-DD HH:mm:ss",
      },
      "name": "name",
      "createdAt": "YYYY-MM-DD HH:mm:ss"
    },
    "company": {
      "id": "14f671b0-511e-43e4-86bb-6828f7a8e12d",
      "name": "name",
      "createdAt": "YYYY-MM-DD HH:mm:ss"
    },
    "name": "Rui Xian",
    "vaccinationStatus": "SECOND_DOSE",
    "vaccinationBrand": "PFIZER",
    "healthStatus": "HEALTHY",
    "createdAt": "YYYY-MM-DD HH:mm:ss",
    "isInCompany": true
  },
  ...
]
```

### Error Response 

**Code** : `404 Not Found`

**Content examples**

Response will reflect back a string that explains what resource is not found.

For a Company with ID `27b06c9d-a553-4a88-a681-b7cbc045a9e5` is not found on the local database.

```
Could not find company 27b06c9d-a553-4a88-a681-b7cbc045a9e5.
```