---
sidebar_position: 4
---

# Roster
## Roster Attributes
| Attributes         | Type                  | Description                                     |
| ------------------ | --------------------- | ----------------------------------------------- |
| **Id**             | UUID                  | UUID generated automatically by Spring Boot     |
| **Date**           | LocalDate             | Date of roster creation                         |
| **WorkLocation**   | WorkLocation          | Work location of the roster that is created for |
| **RosterEmployee** | Set< RosterEmployee > | Set of employees that the roster contains       |

---

## Add Roster
Add a Company to the database with basic information 

|                          |                                                |
| ------------------------ | ---------------------------------------------- |
| **URL**                  | `/api/work-locations/{workLocationId}/rosters` |
| **Method**               | `POST`                                         |
| **Auth required**        | No                                             |
| **Permissions required** | None                                           |

### Success Response

**Code** : `200 OK`

**Content examples**

Response will reflect back a representation of the newly added Roster.

For a Work Location with ID `27b06c9d-a553-4a88-a681-b7cbc045a9e5` on the local database.

Note that `id` is auto-generated and of `UUID` datatype


```json
{
    "id": "53b55e75-5230-4b5c-8e5d-f8787e8fb3f3",
    "date": "2021-09-16",
    "roster_employees": [{
        "id": "a88f8825-34e2-44cb-a9f5-4482c82bbc48",
        "name": "Employee 1",
        "vaccinationStatus": "SECOND_DOSE",
        "vaccineBrand": "PFIZER",
        "healthStatus": "HEALTHY"
  }]
}
```

### Error Response 

**Code** : `404 Not Found`

**Content examples**

Response will reflect back a string that explains what resource is not found.

For a Work Location with ID `27b06c9d-a553-4a88-a681-b7cbc045a9e5` is not found on the local database.

```
Could not find work location 27b06c9d-a553-4a88-a681-b7cbc045a9e5
```

---

## Get Roster
Get a Roster that belongs to a Work Location using the Work Location Id, Roster Id

|                          |                                                           |
| ------------------------ | --------------------------------------------------------- |
| **URL**                  | `/api/work-locations/{workLocationId}/rosters/{rosterId}` |
| **Method**               | `GET`                                                     |
| **Auth required**        | No                                                        |
| **Permissions required** | None                                                      |

### Success Response

**Code** : `200 OK`

**Content examples**

Response will reflect back a representation of the Work Location.

For a Roster with ID `1b400d57-c949-40ed-a77b-5f175db7eae3` on the local database.

```json
{
    "id": "53b55e75-5230-4b5c-8e5d-f8787e8fb3f3",
    "date": "2021-09-16",
    "roster_employees": [{
        "id": "a88f8825-34e2-44cb-a9f5-4482c82bbc48",
        "name": "Employee 1",
        "vaccinationStatus": "SECOND_DOSE",
        "vaccineBrand": "PFIZER",
        "healthStatus": "HEALTHY"
    }]
}
```

### Error Response 

**Code** : `404 Not Found`

**Content examples**

Response will reflect back a string that explains what resource is not found.

For a Roster with ID `bff4ccd3-bae4-4c2f-a8bd-fdc703df8c25` from Work Location with ID `53b55e75-5230-4b5c-8e5d-f8787e8fb3f3` that is not found on the local database.

```
Unable to find roster bff4ccd3-bae4-4c2f-a8bd-fdc703df8c25 from work location 53b55e75-5230-4b5c-8e5d-f8787e8fb3f3
```

---

## Update Roster
Update a Roster that belongs to a Work Location using the Work Location Id, Roster Id

|                          |                                                           |
| ------------------------ | --------------------------------------------------------- |
| **URL**                  | `/api/work-locations/{workLocationId}/rosters/{rosterId}` |
| **Method**               | `PUT`                                                     |
| **Auth required**        | No                                                        |
| **Permissions required** | None                                                      |

### Success Response

**Code** : `200 OK`

**Content examples**

Response will reflect back a representation of the Work Location.

For a Roster with ID `1b400d57-c949-40ed-a77b-5f175db7eae3` on the local database.

```json
{
    "id": "53b55e75-5230-4b5c-8e5d-f8787e8fb3f3",
    "date": "2021-09-16",
    "roster_employees": [{
        "id": "a88f8825-34e2-44cb-a9f5-4482c82bbc48",
        "name": "Employee 1",
        "vaccinationStatus": "SECOND_DOSE",
        "vaccineBrand": "PFIZER",
        "healthStatus": "HEALTHY"
    }]
}
```

### Error Response 

**Code** : `404 Not Found`

**Content examples**

Response will reflect back a string that explains what resource is not found.

For a Roster with ID `bff4ccd3-bae4-4c2f-a8bd-fdc703df8c25` from Work Location with ID `53b55e75-5230-4b5c-8e5d-f8787e8fb3f3` that is not found on the local database.

```
Unable to find roster bff4ccd3-bae4-4c2f-a8bd-fdc703df8c25 from work location 53b55e75-5230-4b5c-8e5d-f8787e8fb3f3
```

---

## Delete Roster
Delete a Roster that belongs to a Work Location using the Roster Id and Work Location Id

|                          |                                                           |
| ------------------------ | --------------------------------------------------------- |
| **URL**                  | `/api/work-locations/{workLocationId}/rosters/{rosterId}` |
| **Method**               | `DELETE`                                                  |
| **Auth required**        | No                                                        |
| **Permissions required** | None                                                      |

### Success Response

**Code** : `200 OK`

### Error Response 

**Code** : `404 Not Found`

**Content examples**

Response will reflect back a string that explains what resource is not found.

For a Roster with ID `bff4ccd3-bae4-4c2f-a8bd-fdc703df8c25` from Work Location with ID `53b55e75-5230-4b5c-8e5d-f8787e8fb3f3` that is not found on the local database.

```
Unable to find roster bff4ccd3-bae4-4c2f-a8bd-fdc703df8c25 from work location 53b55e75-5230-4b5c-8e5d-f8787e8fb3f3
```