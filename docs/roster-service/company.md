---
sidebar_position: 1
---

# Company 
## Company Attributes
| Attributes | Type   | Description                                 |
| ---------- | ------ | ------------------------------------------- |
| **Id**     | UUID   | UUID generated automatically by Spring Boot |
| **Name**   | String | Company name given by the user              |

---

## Add Company
Add a Company to the database with basic information 

|                          |                  |
| ------------------------ | ---------------- |
| **URL**                  | `/api/companies` |
| **Method**               | `POST`           |
| **Auth required**        | No               |
| **Permissions required** | None             |

**Data constraints**

```json
{
    "name": "[1 to 30 chars]"
}
```

### Success Response

**Code** : `200 OK`

**Content examples**

Response will reflect back a representation of the newly added Company.

For a Company with ID `27b06c9d-a553-4a88-a681-b7cbc045a9e5` and name `Company` on the local database.

Note that `id` is auto-generated and of `UUID` datatype


```json
{
  "id": "27b06c9d-a553-4a88-a681-b7cbc045a9e5",
  "name": "Company"
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

## Get Company
Add a Company to the database with basic information 

|                          |                       |
| ------------------------ | --------------------- |
| **URL**                  | `/api/companies/{id}` |
| **Method**               | `GET`                 |
| **Auth required**        | No                    |
| **Permissions required** | None                  |


### Success Response

**Code** : `200 OK`

**Content examples**

Response will reflect back a representation of the newly added Company.

For a Company with ID `27b06c9d-a553-4a88-a681-b7cbc045a9e5` and name `Company` on the local database.


```json
{
  "id": "27b06c9d-a553-4a88-a681-b7cbc045a9e5",
  "name": "Company"
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