---
sidebar_position: 5
---

#  Roster
## Roster Attributes
| Attributes         | Type          | Description                                   |
| ------------------ | ------------- | --------------------------------------------- |
| **Id**             | UUID          | UUID generated automatically by Spring Boot   |
| **date**           | LocalDate     | The date the roster is for                    |
| **fromDateTime**   | LocalDateTime | The starting time of the roster               |
| **toDateTime**     | LocalDateTime | The ending time of the roster                 |
| **WorkLocation**   | WorkLocation  | The work location this roster is for          |
| **RosterEmployee** | Set           | Set of RosterEmployee objects this Roster has |

--- 

## Add Roster 
Add an Roster that belongs to a WorkLocation to the database with basic information 

|                          |                                                |
| ------------------------ | ---------------------------------------------- |
| **URL**                  | `/api/work-locations/{workLocationId}/rosters` |
| **Method**               | `POST`                                         |
| **Auth required**        | Yes                                            |
| **Permissions required** | `ROLE_EMPLOYER`                                |

**Data constraints**

```json
{
  "date": "YYYY-MM-DD",
  "fromDateTime": "2021-11-12T09:00:00.000",
  "toDateTime": "2021-11-12T17:00:00.000"
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
  "date": "2021-09-16",
  "fromDateTime": "2021-11-12T09:00:00.000",
  "toDateTime": "2021-11-12T17:00:00.000"
}

```

### Error Response 

**Code** : `400 Bad Request`

**Content examples**

Response will reflect back an error when the Request Body does not conform to the constraints.

For a Roster with invalid Date format

```json
{
  "timestamp": "2021-10-03T03:29:23.389+00:00",
  "status": 400,
  "error": "Bad Request",
  "path": "/departments/692b1d0e-fe49-4b05-8b01-f79607da7632/employees"
}
```
---
## Update Roster 
Update an Roster that belongs to a WorkLocation to the database with the updated date

|                          |                                                           |
| ------------------------ | --------------------------------------------------------- |
| **URL**                  | `/api/work-locations/{workLocationId}/rosters/{rosterId}` |
| **Method**               | `PUT`                                                     |
| **Auth required**        | Yes                                                       |
| **Permissions required** | `ROLE_EMPLOYER`                                           |

**Data constraints**

```json
{
  "date": "YYYY-MM-DD",
  "fromDateTime": "YYYY-MM-DDThh:mm:ss.sss",
  "toDateTime": "YYYY-MM-DDThh:mm:ss.sss"
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
  "date": "2021-09-16",
  "fromDateTime": "2021-09-16T09:00:00.000",
  "toDateTime": "2021-09-16T17:00:00.000"
}

```

### Error Response 

**Code** : `400 Bad Request`

**Content examples**

Response will reflect back an error when the Request Body does not conform to the constraints.

For a Roster with invalid Date format

```json
{
  "timestamp": "2021-10-03T03:29:23.389+00:00",
  "status": 400,
  "error": "Bad Request",
  "path": "/work-locations/79e6e0b0-29f8-4211-b5e7-ee5fe42a64b9/rosters/d8ef2f16-a04a-41dd-849e-9e1407718d16"
}
```

---

## Get Rosters
Get all Rosters that belongs to a particular Work Location from the database using the Work Location Id

|                          |                                                |
| ------------------------ | ---------------------------------------------- |
| **URL**                  | `/api/work-locations/{workLocationId}/rosters` |
| **Method**               | `GET`                                          |
| **Auth required**        | Yes                                            |
| **Permissions required** | `ROLE_EMPLOYER`                                |


### Success Response

**Code** : `200 OK`

**Content examples**

Response will reflect back an array of representations of the Roster that belongs to a Work Location.

For a Work Location with 2 Rosterss created.

Note that `id` is auto-generated and of `UUID` datatype


```json
[
 {
    "id": "ae15ede6-d5af-4aab-ad4d-ad13ee49af70",
    "date": "2021-09-16",
    "fromDateTime": "2021-09-16T09:00:00.000",
    "toDateTime": "2021-09-16T17:00:00.000"
  },
  {
    "id": "c0c13d3a-060b-4149-8b33-cc2d20a22ced",
    "date": "2021-09-17",
    "fromDateTime": "2021-09-17T09:00:00.000",
    "toDateTime": "2021-09-17T17:00:00.000"
  }
]
```

### Error Response 

**Code** : `404 Not Found`

**Content examples**

Response will reflect back an error when the WorkLocation does not exist in the database.

```json
{
  "timestamp": "2021-10-03T04:11:25.710+00:00",
  "status": 404,
  "error": "Not Found",
  "path": "/work-locations/79e6e0b0-29f8-4211-b5e7-ee5fe42a64b5/rosters"
}
```

--- 
## Get Roster
Get a Roster from the database using the Roster Id and Work Location Id

|                          |                                                           |
| ------------------------ | --------------------------------------------------------- |
| **URL**                  | `/api/work-locations/{workLocationId}/rosters/{rosterId}` |
| **Method**               | `GET`                                                     |
| **Auth required**        | Yes                                                       |
| **Permissions required** | `ROLE_EMPLOYER`                                           |


### Success Response

**Code** : `200 OK`

**Content examples**

Response will reflect back a representation of the Roster.

For a Roster with ID `c0c13d3a-060b-4149-8b33-cc2d20a22ced` and for the date of `2021-09-16` on the local database.

Note that `id` is auto-generated and of `UUID` datatype


```json
{
  "id": "c0c13d3a-060b-4149-8b33-cc2d20a22ced",
  "date": "2021-09-16"
}

```

### Error Response 

**Code** : `404 Not Found`

**Content examples**

Response will reflect back an error when the Department or Employee does not exist in the database.

```json
{
  "timestamp": "2021-10-03T04:06:46.079+00:00",
  "status": 404,
  "error": "Not Found",
  "path": "/work-locations/79e6e0b0-29f8-4211-b5e7-ee5fe42a64b9/rosters/d8ef2f16-a04a-41dd-849e-9e1407718d16"
}
```

---
## Delete Roster
Delete a Roster that belongs to a Work Location using the Roster Id and Work Location Id

|                          |                                                           |
| ------------------------ | --------------------------------------------------------- |
| **URL**                  | `/api/work-locations/{workLocationId}/rosters/{rosterId}` |
| **Method**               | `DELETE`                                                  |
| **Auth required**        | Yes                                                       |
| **Permissions required** | `ROLE_EMPLOYER`                                           |

### Success Response

**Code** : `200 OK`

### Error Response 

**Code** : `404 Not Found`

**Content examples**

Response will reflect back an error when the Work Location or Roster does not exist in the database.

```json
{
  "timestamp": "2021-10-03T04:16:23.786+00:00",
  "status": 404,
  "error": "Not Found",
  "path": "/work-locations/79e6e0b0-29f8-4211-b5e7-ee5ff42a64b9/rosters/d8ef2f16-a04a-41dd-849e-9e1407718d16"
}
```

---