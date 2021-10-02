---
sidebar_position: 2
---

# Employee Vaccination
## Employee Vaccination Attributes
| Attributes             | Type     | Description                                                      |
| ---------------------- | -------- | ---------------------------------------------------------------- |
| **Id**                 | UUID     | UUID generated automatically by Spring Boot                      |
| **Employee**           | Employee | Vaccination details that belongs to the employee                 |
| **Name**               | String   | Name of employee                                                 |
| **Vaccination Status** | Enum     | Current vaccination status of the employee (i.e. Not Vaccinated) |
| **Vaccination Count**  | Integer  | Count representing the first or second dose                      |
| **Created At**         | Date     | Date of the vaccination taken                                    |