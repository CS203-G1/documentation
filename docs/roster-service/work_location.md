---
sidebar_position: 3
---

#  Work Location
## Work Location Attributes
| Attributes     | Type       | Description                                  |
| -------------- | ---------- | -------------------------------------------- |
| **Id**         | UUID       | UUID generated automatically by Spring Boot  |
| **Name**       | String     | Company name given by the user               |
| **Address**    | String     | Address of the the work location             |
| **Capacity**   | int        | Maximum capacity of the work location        |
| **Department** | Department | The department this work location belongs to |

--- 

## Add Work Location
Add a Work Location that belongs to a Department of a Company to the database with basic information 

|                          |                                                                       |
| ------------------------ | --------------------------------------------------------------------- |
| **URL**                  | `/api/companies/{companyId}/departments/{departments}/work-locations` |
| **Method**               | `POST`                                                                |
| **Auth required**        | No                                                                    |
| **Permissions required** | None                                                                  |

**Data constraints**

```json
{
  "name": "[1 to 30 chars]",
  "address": "[1 to 100 chars]",
  "capacity": i32
}
```

### Success Response

**Code** : `200 OK`

**Content examples**

Response will reflect back a representation of the newly added Work Location.

For a Department with ID `1b400d57-c949-40ed-a77b-5f175db7eae3` and name `Location` on the local database.

Note that `id` is auto-generated and of `UUID` datatype


```json
{
  "id": "1b400d57-c949-40ed-a77b-5f175db7eae3",
  "name": "Location",
  "address": "Address",
  "capacity": 50,
  "department": {
    "id": "d23b5840-0cbc-41b7-b96b-ee90c534c398",
    "name": "Department",
    "company": {
      "id": "efd12781-392b-4c97-b388-8722bd709601",
      "name": "Company"
    }
  }
}
```

### Error Response 

**Code** : `404 Not Found`

**Content examples**

Response will reflect back a string that explains what resource is not found.

For a Department with ID `efd12781-392b-4c97-b388-8722bd709601` from Company with ID `d23b5840-0cbc-41b7-b96b-ee90c534c398` that is not found on the local database.

```
Could not find department efd12781-392b-4c97-b388-8722bd709601 from company 692b1d0e-fe49-4b05-8b01-f79607da7633
```

---

## Get Work Location 
Get a Work Location that belongs to a Department from a particular Company using the Company Id, Department Id and Work Location Id

|                          |                                                                                         |
| ------------------------ | --------------------------------------------------------------------------------------- |
| **URL**                  | `/api/companies/{companyId}/departments/{departmentId}/work-locations/{workLocationId}` |
| **Method**               | `GET`                                                                                   |
| **Auth required**        | No                                                                                      |
| **Permissions required** | None                                                                                    |

### Success Response

**Code** : `200 OK`

**Content examples**

Response will reflect back a representation of the Work Location.

For a Department with ID `1b400d57-c949-40ed-a77b-5f175db7eae3` and name `Location` on the local database.

```json
{
  "id": "1b400d57-c949-40ed-a77b-5f175db7eae3",
  "name": "Location",
  "address": "Address",
  "capacity": 50,
  "department": {
    "id": "d23b5840-0cbc-41b7-b96b-ee90c534c398",
    "name": "Department",
    "company": {
      "id": "efd12781-392b-4c97-b388-8722bd709601",
      "name": "Company"
    }
  }
}
```

### Error Response 

**Code** : `404 Not Found`

**Content examples**

Response will reflect back a string that explains what resource is not found.

For a Work Location with ID `1b400d57-c949-40ed-a77b-5f175db7eae2` from Department with ID `d23b5840-0cbc-41b7-b96b-ee90c534c398` and Company with ID
`efd12781-392b-4c97-b388-8722bd709601` that is not found on the local database.

```
Could not find work location 1b400d57-c949-40ed-a77b-5f175db7eae2 from department d23b5840-0cbc-41b7-b96b-ee90c534c398 from company efd12781-392b-4c97-b388-8722bd709601
```

---

## Update Work Location
Do a complete update for a Work Location that belongs to a Department of a Company using the Company Id and Department Id

|                          |                                                                                         |
| ------------------------ | --------------------------------------------------------------------------------------- |
| **URL**                  | `/api/companies/{companyId}/departments/{departmentId}/work-locations/{workLocationId}` |
| **Method**               | `PUT`                                                                                   |
| **Auth required**        | No                                                                                      |
| **Permissions required** | None                                                                                    |

**Data constraints**

```json
{
  "name": "[1 to 30 chars]",
  "address": "[1 to 100 chars]",
  "capacity": i32
}
```

### Success Response

**Code** : `200 OK`

**Content examples**

Response will reflect back a representation of the Work Location.

For a Department with ID `1b400d57-c949-40ed-a77b-5f175db7eae3` and name `Location` on the local database.

```json
{
  "id": "1b400d57-c949-40ed-a77b-5f175db7eae3",
  "name": "Location",
  "address": "Address",
  "capacity": 50,
  "department": {
    "id": "d23b5840-0cbc-41b7-b96b-ee90c534c398",
    "name": "Department",
    "company": {
      "id": "efd12781-392b-4c97-b388-8722bd709601",
      "name": "Company"
    }
  }
}
```

### Error Response 

**Code** : `404 Not Found`

**Content examples**

Response will reflect back a string that explains what resource is not found.

For a Department with ID `efd12781-392b-4c97-b388-8722bd709601` from Company with ID `d23b5840-0cbc-41b7-b96b-ee90c534c398` that is not found on the local database.

```
Could not find department efd12781-392b-4c97-b388-8722bd709601 from company 692b1d0e-fe49-4b05-8b01-f79607da7633
```

---

## Delete Department 
Delete a Work Location that belongs to a Department of a Company using the Company Id and Department Id

|                          |                                                                                         |
| ------------------------ | --------------------------------------------------------------------------------------- |
| **URL**                  | `/api/companies/{companyId}/departments/{departmentId}/work-locations/{workLocationId}` |
| **Method**               | `DELETE`                                                                                |
| **Auth required**        | No                                                                                      |
| **Permissions required** | None                                                                                    |

### Success Response

**Code** : `200 OK`

### Error Response 

**Code** : `404 Not Found`

**Content examples**

Response will reflect back a string that explains what resource is not found.

For a Work Location with ID `1b400d57-c949-40ed-a77b-5f175db7eae2` from Department with ID `d23b5840-0cbc-41b7-b96b-ee90c534c398` and Company with ID
`efd12781-392b-4c97-b388-8722bd709601` that is not found on the local database.

```
Could not find work location 1b400d57-c949-40ed-a77b-5f175db7eae2 from department d23b5840-0cbc-41b7-b96b-ee90c534c398 from company efd12781-392b-4c97-b388-8722bd709601
```
