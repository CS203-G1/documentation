---
sidebar_position: 3
---

# Functions as a Service

## Design

### Request Approvals
We will have a AWS Lambda function to approve requests like ART, PCR, Vaccination verification. Leave requests will be approved through this function too. 

### Auto-scheduler
A auto-scheduler is responsible for scheduling rosters automatically every week. This will be done for every work location for every company. 
#### Driver 
There will be a driver Lambda function to call the auto scaling functions for scheduling for each work location asynchronously. This is done as we want to scale to many companies with many branches. 

Note that this AWS Lambda function is solely responsible for driving the auto-scaling function, nothing else.

#### Message Queue
We are still under discussion whether there is a need for message queue to publish job using the Driver and subscribe using the Auto-scaling functions.
#### Auto-scaling functions
AWS Lambda function can be automatically scaled up and down to meet the workload of scheduling for each work location. This is the actual implementation of the scheduler. 