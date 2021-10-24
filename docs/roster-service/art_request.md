---
sidebar_position: 8
---

# Art Request

## Art Request Attributes

| Attributes        | Type     | Description                                                    |
| ----------------- | -------- | -------------------------------------------------------------- |
| **Id**            | UUID     | UUID generated automatically by Spring Boot                    |
| **Employee**      | Employee | The Employee this ArtRequest Object is associated with         |
| **RequestStatus** | enum     | The current status of the request                              |
| **HealthStatus**  | enum     | The health status of the employee as indicated by the art test |
| **ImageUrl**      | URL      | The url to the picture attached to the art request             |
| **CreatedAt**     | DateTime | The date and time when the art request was created             |

---

## Add Art Request

Add a Art Request that belongs to an Employee to the Database and upload an image to the S3 Bucket

|                          |                                                    |
| ------------------------ | -------------------------------------------------- |
| **URL**                  | `/api/employees/{employeeId}/requests/art-request` |
| **Method**               | `POST`                                             |
| **Auth required**        | Yes                                                |
| **Permissions required** | `ROLE_EMPLOYEE`                                    |

**Data constraints**

```multipart-form
file: file.jpg
```

### Success Response

**Code** : `200 OK`

**Content examples**

Response will reflect back a representation of the newly added Art Request.

For a Art Request with ID `8e8f7ce8-191d-42ea-9dbf-35d061ad457c` on the local database.

Note that `id` is auto-generated and of `UUID` datatype

```json
{
  "id": "8e8f7ce8-191d-42ea-9dbf-35d061ad457c",
  "employee": {
    "id": "6149483b-5c17-45ae-9564-34e7b40dbfd8",
    "department": {
      "id": "49c13ace-ca48-44bb-a9e9-8e3c330862db",
      "company": {
        "id": "14f671b0-511e-43e4-86bb-6828f7a8e12d",
        "name": "Company 1",
        "createdAt": "2021-10-07T10:09:41.837"
      },
      "name": "C1D1",
      "createdAt": "2021-10-09T08:19:21.653043"
    },
    "company": {
      "id": "14f671b0-511e-43e4-86bb-6828f7a8e12d",
      "name": "Company 1",
      "createdAt": "2021-10-07T10:09:41.837"
    },
    "name": "Arvin Aik",
    "vaccinationStatus": "SECOND_DOSE",
    "vaccinationBrand": "PFIZER",
    "healthStatus": "ILL",
    "createdAt": "2021-10-04T10:58:54",
    "isInCompany": true
  },
  "date": "2021-10-24",
  "requestStatus": "PENDING",
  "healthStatus": null,
  "imageUrl": "https://csd-requests.s3.ap-southeast-1.amazonaws.com/art_requests/Company_14f671b0-511e-43e4-86bb-6828f7a8e12d/Department_49c13ace-ca48-44bb-a9e9-8e3c330862db/Employee_6149483b-5c17-45ae-9564-34e7b40dbfd8/2021-10-24",
  "filePath": "art_requests/Company_14f671b0-511e-43e4-86bb-6828f7a8e12d/Department_49c13ace-ca48-44bb-a9e9-8e3c330862db/Employee_6149483b-5c17-45ae-9564-34e7b40dbfd8/2021-10-24"
}
```

### Error Response

**Code** : `400 Bad Request`

**Content examples**

Response will reflect back an error when the Employee does not exist in the database.

For a invalid Employee

```json
{
  "timestamp": "2021-10-24T03:30:43.385+00:00",
  "status": 400,
  "error": "Bad Request",
  "path": "/employees/6149483b5c17-45ae-9564-34e7b40dbfd8/requests/art-request"
}
```

---

## Get Art Request from Employee

Get all Art Requests with a specified requestStatus from an Employee in the database using employeeId and requestStatus

|                          |                                                                    |
| ------------------------ | ------------------------------------------------------------------ |
| **URL**                  | `/api/employees/{employeeId}/requests/art-request/{requestStatus}` |
| **Method**               | `GET`                                                              |
| **Auth required**        | Yes                                                                |
| **Permissions required** | `ROLE_EMPLOYER`                                                    |

### Success Response

Response will reflect back an array of representation of the Art Requests from the Employee.

For an Employee with 2 PENDING requests:
**Code** : `200 OK`

**Content examples**

```json
[
  {
    "id": "8a6f169e-06b4-4ef7-90d2-63862141bfe3",
    "employee": {
      "id": "6149483b-5c17-45ae-9564-34e7b40dbfd8",
      "department": {
        "id": "49c13ace-ca48-44bb-a9e9-8e3c330862db",
        "company": {
          "id": "14f671b0-511e-43e4-86bb-6828f7a8e12d",
          "name": "Company 1",
          "createdAt": "2021-10-07T10:09:41.837"
        },
        "name": "C1D1",
        "createdAt": "2021-10-09T08:19:21.653043"
      },
      "company": {
        "id": "14f671b0-511e-43e4-86bb-6828f7a8e12d",
        "name": "Company 1",
        "createdAt": "2021-10-07T10:09:41.837"
      },
      "name": "Arvin Aik",
      "vaccinationStatus": "SECOND_DOSE",
      "vaccinationBrand": "PFIZER",
      "healthStatus": "ILL",
      "createdAt": "2021-10-04T10:58:54",
      "isInCompany": true
    },
    "date": "2021-10-24",
    "requestStatus": "PENDING",
    "healthStatus": null,
    "imageUrl": "https://csd-requests.s3.ap-southeast-1.amazonaws.com/art_requests/Company_14f671b0-511e-43e4-86bb-6828f7a8e12d/Department_49c13ace-ca48-44bb-a9e9-8e3c330862db/Employee_6149483b-5c17-45ae-9564-34e7b40dbfd8/2021-10-24",
    "filePath": "art_requests/Company_14f671b0-511e-43e4-86bb-6828f7a8e12d/Department_49c13ace-ca48-44bb-a9e9-8e3c330862db/Employee_6149483b-5c17-45ae-9564-34e7b40dbfd8/2021-10-24"
  },
  {
    "id": "acfa267d-b2fc-49aa-b859-69f13d3781cf",
    "employee": {
      "id": "6149483b-5c17-45ae-9564-34e7b40dbfd8",
      "department": {
        "id": "49c13ace-ca48-44bb-a9e9-8e3c330862db",
        "company": {
          "id": "14f671b0-511e-43e4-86bb-6828f7a8e12d",
          "name": "Company 1",
          "createdAt": "2021-10-07T10:09:41.837"
        },
        "name": "C1D1",
        "createdAt": "2021-10-09T08:19:21.653043"
      },
      "company": {
        "id": "14f671b0-511e-43e4-86bb-6828f7a8e12d",
        "name": "Company 1",
        "createdAt": "2021-10-07T10:09:41.837"
      },
      "name": "Arvin Aik",
      "vaccinationStatus": "SECOND_DOSE",
      "vaccinationBrand": "PFIZER",
      "healthStatus": "ILL",
      "createdAt": "2021-10-04T10:58:54",
      "isInCompany": true
    },
    "date": "2021-10-24",
    "requestStatus": "PENDING",
    "healthStatus": null,
    "imageUrl": "https://csd-requests.s3.ap-southeast-1.amazonaws.com/art_requests/Company_14f671b0-511e-43e4-86bb-6828f7a8e12d/Department_49c13ace-ca48-44bb-a9e9-8e3c330862db/Employee_6149483b-5c17-45ae-9564-34e7b40dbfd8/2021-10-24",
    "filePath": "art_requests/Company_14f671b0-511e-43e4-86bb-6828f7a8e12d/Department_49c13ace-ca48-44bb-a9e9-8e3c330862db/Employee_6149483b-5c17-45ae-9564-34e7b40dbfd8/2021-10-24"
  }
]
```

### Error Response

**Code** : `400 Bad Request`

**Content examples**

Response will reflect back an error when the Employee does not exist in the database.

```json
{
  "timestamp": "2021-10-24T03:37:47.146+00:00",
  "status": 400,
  "error": "Bad Request",
  "path": "/employees/6149483b5c17-45ae-9564-34e7b40dbfd8/requests/art-request/PENDING"
}
```

---

## Get Art Request from Company

Get all Art Requests with a specified requestStatus from a Company in the database using companyId and requestStatus

|                          |                                                                    |
| ------------------------ | ------------------------------------------------------------------ |
| **URL**                  | `/api/companies/{companyId}/requests/art-request/{requestStatus}`  |
| **Method**               | `GET`                                                              |
| **Auth required**        | Yes                                                                |
| **Permissions required** | `ROLE_EMPLOYER`                                                    |

### Success Response

Response will reflect back an array of representation of the Art Requests from the Company.

For a Company with 2 APPROVED requests:
**Code** : `200 OK`

**Content examples**

```json
[
  {
    "id": "103024df-0cd1-4de3-858b-652de86b6186",
    "employee": {
      "id": "6149483b-5c17-45ae-9564-34e7b40dbfd8",
      "department": {
        "id": "49c13ace-ca48-44bb-a9e9-8e3c330862db",
        "company": {
          "id": "14f671b0-511e-43e4-86bb-6828f7a8e12d",
          "name": "Company 1",
          "createdAt": "2021-10-07T10:09:41.837"
        },
        "name": "C1D1",
        "createdAt": "2021-10-09T08:19:21.653043"
      },
      "company": {
        "id": "14f671b0-511e-43e4-86bb-6828f7a8e12d",
        "name": "Company 1",
        "createdAt": "2021-10-07T10:09:41.837"
      },
      "name": "Arvin Aik",
      "vaccinationStatus": "SECOND_DOSE",
      "vaccinationBrand": "PFIZER",
      "healthStatus": "ILL",
      "createdAt": "2021-10-04T10:58:54",
      "isInCompany": true
    },
    "date": "2021-10-23",
    "requestStatus": "APPROVED",
    "healthStatus": "HEALTHY",
    "imageUrl": "https://csd-requests.s3.ap-southeast-1.amazonaws.com/art_requests/Company_14f671b0-511e-43e4-86bb-6828f7a8e12d/Department_49c13ace-ca48-44bb-a9e9-8e3c330862db/Employee_6149483b-5c17-45ae-9564-34e7b40dbfd8/2021-10-23",
    "filePath": "art_requests/Company_14f671b0-511e-43e4-86bb-6828f7a8e12d/Department_49c13ace-ca48-44bb-a9e9-8e3c330862db/Employee_6149483b-5c17-45ae-9564-34e7b40dbfd8/2021-10-24"
  },
  {
    "id": "8e8f7ce8-191d-42ea-9dbf-35d061ad457c",
    "employee": {
      "id": "6149483b-5c17-45ae-9564-34e7b40dbfd8",
      "department": {
        "id": "49c13ace-ca48-44bb-a9e9-8e3c330862db",
        "company": {
          "id": "14f671b0-511e-43e4-86bb-6828f7a8e12d",
          "name": "Company 1",
          "createdAt": "2021-10-07T10:09:41.837"
        },
        "name": "C1D1",
        "createdAt": "2021-10-09T08:19:21.653043"
      },
      "company": {
        "id": "14f671b0-511e-43e4-86bb-6828f7a8e12d",
        "name": "Company 1",
        "createdAt": "2021-10-07T10:09:41.837"
      },
      "name": "Arvin Aik",
      "vaccinationStatus": "SECOND_DOSE",
      "vaccinationBrand": "PFIZER",
      "healthStatus": "ILL",
      "createdAt": "2021-10-04T10:58:54",
      "isInCompany": true
    },
    "date": "2021-10-24",
    "requestStatus": "APPROVED",
    "healthStatus": "HEALTHY",
    "imageUrl": "https://csd-requests.s3.ap-southeast-1.amazonaws.com/art_requests/Company_14f671b0-511e-43e4-86bb-6828f7a8e12d/Department_49c13ace-ca48-44bb-a9e9-8e3c330862db/Employee_6149483b-5c17-45ae-9564-34e7b40dbfd8/2021-10-24",
    "filePath": "art_requests/Company_14f671b0-511e-43e4-86bb-6828f7a8e12d/Department_49c13ace-ca48-44bb-a9e9-8e3c330862db/Employee_6149483b-5c17-45ae-9564-34e7b40dbfd8/2021-10-24"
  }
]
```

### Error Response

**Code** : `404 Not Found`

**Content examples**

Response will reflect back an error when the Company does not exist in the database.

```json
{
  "timestamp": "2021-10-24T03:43:17.135+00:00",
  "status": 404,
  "error": "Not Found",
  "path": "/companies/4f671b0-511e-43e4-86bb-6828f7a8e12d/requests/art-request/APPROVED"
}
```

---

## Review Art Request 
Update an ArtRequest that belongs to an Employee with HealthStatus and RequestStatus

|                          |                                                      |
| ------------------------ | ---------------------------------------------------- |
| **URL**                  | `/api/requests/art-request/{artRequestId}` |
| **Method**               | `PUT`                                                |
| **Auth required**        | Yes                                                  |
| **Permissions required** | `ROLE_EMPLOYER`                                      |

**Data constraints**

```json
{
	"healthStatus" : "HEALTHY",
	"requestStatus" : "APPROVED"
}
```

### Success Response

**Code** : `200 OK`

**Content examples**

Response will reflect back a representation of the newly updated Art Request.

For a Art Request with ID `8a6f169e-06b4-4ef7-90d2-63862141bfe3` on the local database with updated healthStatus of `HEALTHY` and updated requestStatus of `APPROVED`.


```json
{
  "id": "8a6f169e-06b4-4ef7-90d2-63862141bfe3",
  "employee": {
    "id": "6149483b-5c17-45ae-9564-34e7b40dbfd8",
    "department": {
      "id": "49c13ace-ca48-44bb-a9e9-8e3c330862db",
      "company": {
        "id": "14f671b0-511e-43e4-86bb-6828f7a8e12d",
        "name": "Company 1",
        "createdAt": "2021-10-07T10:09:41.837"
      },
      "name": "C1D1",
      "createdAt": "2021-10-09T08:19:21.653043"
    },
    "company": {
      "id": "14f671b0-511e-43e4-86bb-6828f7a8e12d",
      "name": "Company 1",
      "createdAt": "2021-10-07T10:09:41.837"
    },
    "name": "Arvin Aik",
    "vaccinationStatus": "SECOND_DOSE",
    "vaccinationBrand": "PFIZER",
    "healthStatus": "ILL",
    "createdAt": "2021-10-04T10:58:54",
    "isInCompany": true
  },
  "date": "2021-10-24",
  "requestStatus": "APPROVED",
  "healthStatus": "HEALTHY",
  "imageUrl": "https://csd-requests.s3.ap-southeast-1.amazonaws.com/art_requests/Company_14f671b0-511e-43e4-86bb-6828f7a8e12d/Department_49c13ace-ca48-44bb-a9e9-8e3c330862db/Employee_6149483b-5c17-45ae-9564-34e7b40dbfd8/2021-10-24",
  "filePath": "art_requests/Company_14f671b0-511e-43e4-86bb-6828f7a8e12d/Department_49c13ace-ca48-44bb-a9e9-8e3c330862db/Employee_6149483b-5c17-45ae-9564-34e7b40dbfd8/2021-10-24"
}
```

### Error Response 

**Code** : `404 Bad Request`

**Content examples**

Response will reflect back an error when the Art Request does not exist in the database.

```json
{
  "timestamp": "2021-10-24T03:48:45.385+00:00",
  "status": 404,
  "error": "Not Found",
  "path": "/requests/art-request/8a6f169e-06b4-4ef7-90d2-63862141bfe"
}
```


