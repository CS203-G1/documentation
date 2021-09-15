---
sidebar_position: 2 
---

#  Department
## Department Attributes
| Attributes | Type   | Description                                 |
| ---------- | ------ | ------------------------------------------- |
| **Id**     | UUID   | UUID generated automatically by Spring Boot |
| **Name**   | String | Company name given by the user              |

--- 

## Add Department 
Add a Department that belongs to a Company to the database with basic information 

|                          |                                          |
| ------------------------ | ---------------------------------------- |
| **URL**                  | `/api/companies/{companyId}/departments` |
| **Method**               | `POST`                                   |
| **Auth required**        | No                                       |
| **Permissions required** | None                                     |

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

For a Department with ID `807549a2-8507-4a75-aef3-e0ad761e597d` and name `Department` on the local database.

Note that `id` is auto-generated and of `UUID` datatype


```json
{
    "id": "807549a2-8507-4a75-aef3-e0ad761e597d",
    "name": "Department",    
    "company": {
        "id": "4926cf68-f829-4a08-8f51-077b1d42bf70",
        "name": "Company"
    }   
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