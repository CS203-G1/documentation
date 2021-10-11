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